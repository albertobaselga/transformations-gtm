# Anexo B. Motor de intención: arquitectura técnica y plan de implementación

> Anexo técnico al documento *Estrategia de Transformación de la Comercialización*. Complementa §2 (máquina de estados orientada a intención), §4 Capa 1 (clasificación y estado del lead) y §5.3 (variables mínimas de scoring). El plan maestro describe el motor de intención como una **capacidad** del sistema. Este anexo lo define como un **sistema** concreto: qué es, cómo se construye, con qué datos, qué métricas lo gobiernan, y en qué orden se entrega.
>
> Todas las cifras cuantitativas incluidas son **estimaciones** orientativas para dimensionar esfuerzo y riesgo. Deben revalidarse cuando exista instrumentación real y primera cohorte de datos.

---

## 1. Definición del problema técnico

El motor de intención no es un "scoring de lead". Es un sistema de decisión en tiempo real que, para cada lead y en cada evento que genera, debe producir dos cosas:

### 1.1 Clasificación de estado operativo

Asignar al lead un estado dentro de la máquina de estados del plan:

- **Exploración** — interés genérico, sin señales de compra.
- **Consideración** — compara, valora, investiga precio / inicio / formato.
- **Activación** — señal explícita de compra (pide precio, callback, financiación, matrícula).
- **Cierre** — propuesta enviada o enrollment iniciado.
- **Enrollment** — auto-enrollment en curso con o sin fricción detectada.
- **Rescate (subtipo)** — bloqueo económico, timing, confianza, operativo o competidor.

El estado **no es estático**. Cambia con cada evento (clic, respuesta, apertura, abandono, silencio). El motor debe re-evaluar de forma incremental, no recalcular desde cero.

### 1.2 Cuatro decisiones operativas

Para cada estado, el motor emite **cuatro decisiones**:

1. **Contacto** — ¿se actúa ahora, se aplaza, o se deja en nurturing?
2. **Canal** — WhatsApp, voz humana, voz IA, email, auto-enrollment, presencial.
3. **Empuje** — intensidad y ritmo: push fuerte, acompañamiento suave, silencio táctico.
4. **Mensaje** — narrativa: valor, precio, prueba social, financiación, urgencia, beca, requisitos.

### 1.3 Requisitos no funcionales mínimos

- **Latencia**: decisión bajo 500 ms (estimado) desde que llega el evento al bus, para poder responder en tiempo real por WhatsApp y disparar alertas comerciales inmediatas.
- **Trazabilidad**: toda decisión debe poder reconstruirse a posteriori (qué features, qué modelo, qué regla, qué política, qué versión).
- **Auditoría humana**: cualquier decisión debe poder ser revisada por un humano y corregida como etiqueta de entrenamiento.
- **Reversibilidad**: rollback de modelo o regla en minutos, no horas.

---

## 2. Arquitectura propuesta: híbrida reglas + ML + política

La arquitectura que se propone tiene **tres capas apiladas**. No es "reglas o ML". Es "reglas **y** ML **gobernados** por una capa de política".

```
            evento del lead (WhatsApp, clic, formulario, pago, abandono)
                                   |
                                   v
                   +---------------+----------------+
                   |   Capa 1. Reglas deterministas  |   <- triggers duros
                   +---------------+----------------+
                                   |
                                   v
                   +---------------+----------------+
                   |   Capa 2. Clasificador ML       |   <- estado probable + confianza
                   +---------------+----------------+
                                   |
                                   v
                   +---------------+----------------+
                   |   Capa 3. Policy layer          |   <- decisión final
                   +---------------+----------------+
                                   |
                                   v
                decisión (contacto / canal / empuje / mensaje) + trazabilidad
```

### 2.1 Capa 1 — Reglas deterministas

Ejemplos de reglas que no deben delegarse nunca al modelo:

- Lead **pide precio explícitamente** por WhatsApp → estado mínimo *Activación*, contacto inmediato, canal WhatsApp, empuje alto, mensaje "precio + siguiente paso".
- Lead **solicita callback** → estado *Activación*, canal voz, alerta a comercial en <5 min.
- Lead **abandona pago tras iniciarlo** → estado *Rescate (económico)*, canal WhatsApp, mensaje "¿qué bloqueó el pago?".
- Lead **inicia matrícula y se detiene en documentación** → estado *Enrollment con fricción*, canal WhatsApp, mensaje contextual al paso exacto.
- Lead **marca STOP / baja explícita** → cierre de contacto comercial, paso a nurturing pasivo.

**Por qué arrancar con reglas antes que ML**:

1. **No hay datos etiquetados al día 1.** Un ML sin labels es un generador de ruido. Las reglas dan cobertura inmediata y producen las primeras etiquetas.
2. **Auditoría y confianza del negocio.** Operaciones y comercial necesitan poder leer una regla y entenderla. Es la única forma de conseguir buy-in de la red comercial.
3. **Cubrir señales duras sin ambigüedad.** "Pidió precio" no necesita modelo. Usar ML para eso añade latencia y riesgo.
4. **Bootstrap para el modelo.** Las reglas son el baseline contra el que el modelo tendrá que justificar su valor.
5. **Rollback instantáneo.** Si el ML falla o deriva, las reglas siguen operativas solas.

Las reglas se mantienen como motor paralelo **incluso cuando el ML esté en producción**. No se sustituyen; se componen.

### 2.2 Capa 2 — Clasificador ML supervisado multi-clase

Un clasificador probabilístico que dado el vector de features del lead devuelve:

- distribución de probabilidad sobre los estados (Exploración, Consideración, Activación, Cierre, Enrollment, Rescate-*),
- un indicador de **confianza** (entropía o margen entre top-1 y top-2),
- un subclasificador específico de **tipo de rescate** cuando el estado top-1 es Rescate.

El modelo **no decide la acción directamente**. Solo clasifica estado. La acción la decide la Capa 3.

### 2.3 Capa 3 — Policy layer

Recibe como entrada:

- el estado de la Capa 1 (regla disparada o "ninguna"),
- la distribución de estados de la Capa 2 con confianza,
- contexto de negocio: capacidad comercial disponible, ventana horaria, reglas de marca, requisitos de admisión, disponibilidad de beca, cupo de cupón, SLA por canal.

Y emite la **decisión final** (contacto / canal / empuje / mensaje) aplicando:

1. **Precedencia**: regla dura > ML con alta confianza > ML con baja confianza → ruta conservadora.
2. **Restricciones de capacidad**: si no hay comercial libre, cae a voz IA o a cola priorizada.
3. **Restricciones económicas**: suelo de precio, autorización manual, política de beca.
4. **Restricciones de fatiga**: no saturar al lead (cooldowns por canal).
5. **Safety rails**: nunca enviar llamada a un lead que pidió STOP, nunca escalar a humano sin contexto suficiente, etc.

La Capa 3 **debe ser explicable**. Cada decisión lleva un `decision_trace` con: regla disparada, clase ML, probabilidad, restricciones aplicadas, versión de modelo, versión de política.

---

## 3. Features de entrada

La calidad del motor depende más de la calidad de las features que del algoritmo. Esta tabla enumera las features mínimas viables.

| Feature | Fuente | Tipo | Latencia objetivo | Prerrequisito de instrumentación |
|---|---|---|---|---|
| Fuente de entrada (paid, organic, referido, directo, offline) | Tracking de captación / CRM | Categórica | batch diario aceptable | UTMs normalizados y guardados en CRM |
| Marca y formación visualizada | Web analytics + CRM | Categórica | tiempo real | Evento de `programa_view` por slug estable |
| Tiempo en landing (sesión acumulada) | Web analytics | Numérica continua | <5 min | Pixel propio o tracking server-side |
| Clics en sección pricing | Web analytics | Contador | tiempo real | Selectores estables sobre bloque de precio |
| Simulación de cuota usada (sí/no, importe, resultado) | Calculadora / CRM | Mixta | tiempo real | Endpoint de simulador que escriba evento |
| Respuesta a WhatsApp (tiempo, nº mensajes, sentimiento básico) | Proveedor WhatsApp / CRM | Mixta | tiempo real | Webhook entrante normalizado |
| Apertura y clic de email | ESP | Binaria / contador | minutos | Tracking pixel + UTM |
| Visitas repetidas (nº sesiones, días distintos) | Web analytics | Numérica | batch horario | Identificador persistente (cookie + matching por email/teléfono) |
| Código postal | Formulario / CRM | Categórica | tiempo real | Validación en origen |
| Ticket esperado (programa × modalidad × financiación) | CRM / catálogo | Numérica | tiempo real | Catálogo de precios versionado |
| Histórico de reactivaciones previas | CRM | Contador | batch diario | Deduplicación real de leads |
| Días desde primer contacto | CRM | Numérica | tiempo real | Timestamp fiable de creación |
| Estado anterior del lead | Propio motor | Categórica | tiempo real | Historial de estados en base de eventos |
| Canal por el que suele responder | CRM | Categórica | batch diario | Consolidación de canales de respuesta |
| Eventos de enrollment (paso actual, pasos bloqueados) | Plataforma de enrollment | Secuencia | tiempo real | Eventos granulares de step del wizard |
| Abandono de pago (punto exacto) | Pasarela | Evento | tiempo real | Webhooks de la pasarela habilitados |

**Observación importante**: hoy muchas de estas features **no existen instrumentadas**. Gran parte del esfuerzo del hito H1 es precisamente cerrar esta instrumentación. Sin feature store, no hay motor.

---

## 4. Estrategia de etiquetado

Sin labels no hay ML supervisado. La estrategia se articula en tres mecanismos complementarios:

### 4.1 Bootstrap con reglas + revisión humana semanal

Las reglas de la Capa 1 producen un primer etiquetado automático: "este lead fue clasificado como Activación porque pidió precio". Cada semana, un analista revisa una muestra aleatoria (objetivo estimado: 100–200 casos/semana) y valida o corrige la etiqueta. Las correcciones se guardan como **labels de alta calidad**.

### 4.2 Etiquetado retrospectivo por resultado

Para cada lead cerrado (matriculó o no matriculó, y si no, por qué), se puede asignar retrospectivamente:

- la **trayectoria real de estados** que debió seguir (reconstrucción desde eventos),
- el **outcome final** (matrícula sí/no, tiempo hasta cierre, motivo de pérdida),
- el **punto de ruptura** en caso de abandono.

Este etiquetado retrospectivo es imperfecto pero barato y escala. Es la fuente principal para entrenar el clasificador de *tipo de rescate*.

### 4.3 Active learning dirigido

El modelo en shadow mode identifica los casos donde tiene **menor confianza** (entropía alta o margen top-1/top-2 estrecho). Esos casos pasan a una cola de revisión humana priorizada. Así se invierte el esfuerzo de etiquetado donde más valor aporta al modelo.

**Regla práctica**: no intentar etiquetar "todo el dataset". Etiquetar ~2000–5000 casos (estimado) bien distribuidos entre clases es suficiente para un baseline útil. La calidad importa más que el volumen.

---

## 5. Modelo propuesto

### 5.1 Baseline: gradient boosting sobre features tabulares

Recomendación: **XGBoost o LightGBM** como modelo baseline.

Justificación:

1. **Datos tabulares mixtos** (numéricos, categóricos, contadores, flags). Gradient boosting es el estado del arte práctico para este tipo de entrada.
2. **Explicabilidad razonable** vía SHAP values: se puede decir "este lead fue clasificado como Activación porque (a) pidió precio, (b) hizo simulación, (c) respondió WhatsApp en <2 min". Esto es crítico para auditoría y para conversaciones con la red comercial.
3. **Tolerante a datasets pequeños** (miles de ejemplos), que es exactamente el escenario de arranque.
4. **Tolerante a features faltantes**, lo cual es realista cuando la instrumentación está incompleta.
5. **Rápido de entrenar y servir**. Entrenamientos en minutos, inferencia en milisegundos.
6. **Calibración sencilla** con Platt scaling o isotónica para obtener probabilidades realistas, necesarias para la política.

### 5.2 Evolución posible (no al inicio)

Cuando exista volumen y trazabilidad madura, se puede considerar:

- **Transformer tabular** (p.ej. FT-Transformer, TabTransformer) si el baseline satura y hay interacciones no lineales complejas.
- **Modelos secuenciales** sobre la secuencia de eventos del lead (GRU / transformer pequeño) para capturar dinámica temporal fina.
- **Modelos específicos de rescate** (uno por subtipo) si las clases de rescate resultan muy heterogéneas.

**Advertencia**: no empezar por aquí. Deep learning sobre datos tabulares ofrece mejoras marginales frente a gradient boosting en la gran mayoría de casos reales, y añade mucho coste operativo.

---

## 6. Métricas de calidad del modelo

El modelo se evalúa con tres bloques de métricas. Todas deben poder desagregarse por marca, programa y cohorte temporal.

### 6.1 Métricas por clase

| Clase | Métrica prioritaria | Umbral mínimo estimado para ir a producción |
|---|---|---|
| Exploración | recall | ≥ 0.80 |
| Consideración | F1 | ≥ 0.65 |
| Activación | **precisión** | ≥ 0.85 |
| Cierre | **precisión** | ≥ 0.90 |
| Enrollment-fricción | recall | ≥ 0.75 |
| Rescate (agregado) | recall | ≥ 0.70 |
| Rescate económico (subtipo) | recall | ≥ 0.75 |

**Por qué precisión alta en Activación y Cierre**: un falso positivo en estas clases saca a un comercial de algo realmente caliente para atender un lead que no lo estaba. El coste de oportunidad es alto. En Exploración/Rescate el coste del falso positivo es bajo (como mucho, un mensaje extra en WhatsApp).

### 6.2 Calibración

- **Brier score** y **reliability diagram** por clase.
- La política de Capa 3 usa probabilidades como entrada. Si el modelo dice 0.9 pero realmente acierta el 60% de las veces, la política tomará malas decisiones. La calibración no es cosmética.

### 6.3 Estabilidad y drift

- **Population Stability Index (PSI)** mensual sobre cada feature clave.
- **Drift de predicciones**: comparar distribución de clases predichas mes a mes.
- **Alarma automática** cuando PSI > 0.2 en features críticas (pricing, simulación, fuente).
- **Re-entrenamiento planificado** mensual al arranque; trimestral cuando madure.

---

## 7. MLOps mínimo

No se puede operar un modelo en producción sin un mínimo de MLOps. No hace falta una plataforma sofisticada, pero sí los siguientes elementos:

1. **Feature store** (puede ser tan simple como una tabla versionada en el data warehouse) con definiciones canónicas de cada feature, un único punto de verdad para entrenamiento e inferencia. Evita el *training/serving skew*.
2. **Pipeline de features** ejecutado en streaming o micro-batches frecuentes, con latencias documentadas por feature.
3. **Versionado del modelo**: cada modelo entrenado se etiqueta con `{fecha, dataset_hash, código_hash, métricas}`. Se guardan los tres últimos modelos en caliente para rollback.
4. **Shadow mode**: el modelo corre en paralelo a las reglas durante semanas antes de influir en ninguna decisión. Se registran sus predicciones pero no se actúa sobre ellas. Se comparan contra el resultado real.
5. **A/B test contra reglas puras**: cuando sale de shadow, se asigna un % del tráfico a "reglas + ML" y otro % a "reglas solas". Se compara impacto en KPIs de negocio (tiempo de respuesta, conversión, ratio de aprovechamiento de cupón, matrículas).
6. **Rollback**: un flag de configuración permite desactivar Capa 2 y dejar solo Capa 1 + Capa 3 en <5 minutos.
7. **Observabilidad**: dashboards con latencia p50/p95/p99, tasa de error, distribución de clases predichas, cobertura de features (% de leads con todas las features disponibles).
8. **Ground truth pipeline**: los labels producidos por revisión humana y por etiquetado retrospectivo retroalimentan el dataset de entrenamiento automáticamente.

---

## 8. Plan de implementación

Cuatro hitos. Duraciones en semanas son **estimadas** y deben ajustarse al equipo real disponible.

### H1 — Reglas deterministas en producción (semanas 1 a 4)

Objetivo: tener un motor de intención funcional **sin ML**, que ya aporte valor.

- Inventario y catalogación de triggers duros (entre 15 y 30 reglas estimadas).
- Definición del esquema de eventos y del contrato con CRM, WhatsApp, web analytics y pasarela.
- Instrumentación mínima de features prioritarias: pide precio, solicita callback, simulación de cuota, abandono de pago, paso de enrollment.
- Implementación de la Capa 1 y de la Capa 3 (política básica).
- Integración con CRM, WhatsApp y cola de alertas a comercial.
- Logging estructurado de cada decisión con `decision_trace`.
- **Salida**: reglas vivas en producción, decisiones trazables, base de datos de eventos creciendo.

### H2 — Primer modelo en shadow (semanas 5 a 8)

Objetivo: tener el primer modelo entrenado, funcionando en paralelo sin influir todavía en decisiones.

- Construcción del feature store inicial.
- Extracción del primer dataset etiquetado (reglas + revisión humana + retrospectivo).
- Entrenamiento del baseline (LightGBM/XGBoost) sobre los estados principales.
- Calibración y evaluación por clase.
- Despliegue en **shadow mode**: predice pero no actúa.
- Dashboard de comparación *regla sola vs. regla + modelo*.
- **Salida**: primer modelo con métricas documentadas y confianza inicial sobre su comportamiento.

### H3 — Primer A/B test controlado (semanas 9 a 12)

Objetivo: medir impacto incremental del modelo sobre reglas puras.

- Asignación aleatoria de leads al brazo *reglas* y al brazo *reglas + modelo*.
- Definición de métricas de éxito del test: conversión a matrícula, tiempo hasta primer contacto útil, ratio de aprovechamiento del cupón, precisión percibida por la red comercial.
- Gobernanza del experimento: tamaño muestral mínimo, duración, criterios de parada por daño.
- Iteración del modelo con los casos difíciles del shadow mode.
- **Salida**: evidencia cuantitativa del valor incremental del ML sobre las reglas. Decisión go / no-go.

### H4 — Motor ML en producción con monitoreo (semana 13+)

Objetivo: modelo como parte del sistema, con ciclo de mejora continua.

- Promoción del modelo a producción en el % del tráfico donde ganó el A/B.
- Activación de alarmas de drift, calibración y latencia.
- Ciclo de re-entrenamiento mensual con nuevas etiquetas.
- Cola de *active learning* operativa para priorizar revisión humana.
- Expansión a subclasificadores: tipo de rescate, fricción de enrollment.
- **Salida**: motor de intención como sistema vivo, auditable, mejorable y gobernado.

---

## 9. Responsables y equipo

Composición **mínima** estimada para ejecutar H1–H4. No es posible cubrir esto con una sola persona "de datos".

| Perfil | FTE estimado H1 | FTE estimado H2–H4 | Responsabilidad principal |
|---|---|---|---|
| Product Owner del motor | 0.5 | 0.5 | Priorización, decisiones de negocio, gobierno de reglas, interfaz con comercial y operaciones |
| Data Engineer | 1.0 | 0.7 | Instrumentación, ingestión, feature store, pipelines, contrato de eventos |
| ML Engineer | 0.3 | 1.0 | Modelado, entrenamiento, despliegue, shadow, A/B, MLOps |
| Analyst / Labeler-in-chief | 0.5 | 0.7 | Revisión semanal de labels, QA del dataset, dashboards de calidad |
| Backend Engineer (integraciones CRM/WhatsApp/pasarela) | 0.7 | 0.3 | APIs, webhooks, servicio de decisión, contrato con orquestación |

Total estimado: ~3 FTE en H1 y ~3.2 FTE sostenidos a partir de H2. Este es el **mínimo**; escalar funcionalidades (rescate por subtipo, modelo secuencial, personalización de mensaje) requiere equipo adicional.

**Nota**: el motor de intención no es un proyecto de "contratar a un data scientist". Sin data engineer y sin backend engineer no hay motor, por bueno que sea el modelo.

---

## 10. Riesgos técnicos específicos

### 10.1 Cold start sin datos etiquetados

**Síntoma**: el día 1 no hay labels. Cualquier ML entrena sobre ruido.
**Mitigación**: arrancar con reglas en H1; usar reglas como generador de labels; bootstrap con revisión humana; etiquetado retrospectivo sobre leads históricos cuya resolución ya se conoce.

### 10.2 Clases desbalanceadas

**Síntoma**: Exploración representa la gran mayoría de leads; Cierre y Rescate son clases minoritarias. Un modelo ingenuo predecirá "Exploración" siempre y tendrá 80% de accuracy siendo inútil.
**Mitigación**: evaluar por clase, no por accuracy global; *class weights* o *focal loss*; *undersampling* de la clase mayoritaria; métricas de precision/recall específicas por clase; umbrales de decisión por clase calibrados.

### 10.3 Data leakage temporal

**Síntoma**: al entrenar con datos históricos es fácil colar features que "miran al futuro" (p.ej. `matriculó` como feature en vez de como target). El modelo en validación parece excelente y en producción fracasa.
**Mitigación**: *time-based splits* estrictos (nunca aleatorios), feature store con timestamps válidos, auditoría explícita de cada feature contra "¿este dato estaba disponible en el momento de la predicción?".

### 10.4 Deriva de concepto por cambios en campañas

**Síntoma**: cuando marketing lanza una campaña nueva, cambia la distribución de leads: otra fuente, otro ticket esperado, otra estacionalidad. El modelo entrenado con datos pre-campaña pierde calibración.
**Mitigación**: monitoreo de PSI; re-entrenamiento trigger-based (no solo calendario); coordinación explícita con marketing para marcar eventos de cambio; modelo con features de *contexto de campaña* (cohorte, convocatoria).

### 10.5 Sesgo por retroalimentación

**Síntoma**: el motor deja de contactar a leads que clasifica como baja intención. Nunca sabemos si se equivocó, porque no hay contacto → no hay outcome → no hay label → el sesgo se perpetúa.
**Mitigación**: siempre mantener un **holdout de exploración** (pequeño % de tráfico donde se ignora la decisión del motor y se actúa según política baseline), para tener ground truth no contaminado.

### 10.6 Integración y latencia

**Síntoma**: el modelo es bueno pero el pipeline de features tiene latencia de 20 minutos. Cuando llega la decisión, el lead ya cerró la conversación.
**Mitigación**: definir SLA por feature; priorizar features en tiempo real para triggers críticos; aceptar features en batch solo para señales de fondo (histórico, valor esperado).

---

## 11. Qué NO hacer al inicio

1. **No arrancar con deep learning.** Transformers tabulares, modelos secuenciales de eventos, embeddings de texto de WhatsApp: todo eso es tentador y todo eso es prematuro. Baseline primero; complejidad solo si el baseline satura y hay evidencia de que más capacidad ayuda.
2. **No colapsar el problema en un scoring único "caliente/frío".** Un número del 0 al 100 pierde la estructura del problema: estado × decisión × canal × mensaje. El número no le dice al comercial qué hacer.
3. **No outsourcing del modelo sin trazabilidad.** Contratar a un tercero que entregue un `model.pkl` cerrado convierte al motor en una caja negra no auditable, no reentrenable y no responsable ante operaciones. Si hay externalización, debe ser en régimen de *staff augmentation* con código en casa, dataset en casa y pipeline en casa.
4. **No mezclar decisión y clasificación en el mismo modelo.** El modelo clasifica estado. La política decide acción. Confundir las dos impide cambiar política sin reentrenar y reentrenar sin cambiar política.
5. **No saltarse el shadow mode.** Ningún modelo nuevo debe tocar a un lead real sin haber pasado un tiempo (estimado: 2–4 semanas) observando en silencio.
6. **No optimizar accuracy global.** Ver §10.2. Se optimiza por clase y por coste de error, nunca por accuracy agregada.
7. **No construir el motor sin instrumentación previa.** Si hoy no se sabe "cuánto tiempo tarda el lead en responder WhatsApp", no tiene sentido entrenar un modelo que lo use como feature. Instrumentación primero, modelado después.

---

## 12. Resumen ejecutivo del anexo

El motor de intención se construye como un sistema **híbrido y estratificado**, no como un único modelo. Arranca con **reglas deterministas** que cubren los triggers duros y dan cobertura inmediata desde la semana 4. Sobre esa base se añade un **clasificador ML calibrado** (gradient boosting como baseline) que en la semana 8 corre en shadow y en la semana 12 entra a un A/B test controlado contra las reglas puras. Una **capa de política** explícita separa la clasificación del estado de la decisión operativa (contacto, canal, empuje, mensaje), lo que permite iterar el modelo y la política de forma independiente.

Las claves de éxito no son algorítmicas. Son de ingeniería de datos (instrumentación, feature store, trazabilidad), de disciplina de etiquetado (revisión humana semanal, retrospectivo, active learning) y de gobierno (métricas por clase, calibración, shadow, A/B, rollback). Sin eso, ningún modelo por sofisticado que sea aguantará en producción más allá de la primera campaña que cambie las distribuciones.

El equipo mínimo estimado son ~3 FTE mixtos (data engineering, ML, backend, analyst, product owner). El mayor riesgo no es técnico: es intentar empezar por el modelo en vez de por la instrumentación, o intentar sustituir las reglas en vez de componerlas con el modelo.
