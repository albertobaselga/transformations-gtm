# Anexo A — Línea base y métricas objetivo

**Documento**: Anexo A del Plan de Transformación de la Comercialización de Northius
**Audiencia**: Dirección Comercial, Dirección Financiera, Revenue Operations, Comité de Dirección
**Estado**: Versión 1.0 — borrador ejecutivo
**Relación con el plan principal**: complementa y operativiza el §13 "Cuadro de mando y KPIs" y condiciona la Fase 1 del §15 "Plan de implantación"

---

## 1. Propósito del anexo

El plan principal define en su §13 una batería amplia de KPIs (velocidad, intención, canal, economía, calidad operativa). Esa lista es necesaria pero **no es suficiente para gestionar la transformación**. Mientras no exista una línea base cuantitativa, esos KPIs son **opinión, no gestión**: se podrá afirmar que "mejoró la conversión" o que "el cupón rinde más", pero no se podrá demostrar contra qué, cuánto, ni con qué intervalo de confianza.

Hoy sabemos una cosa con certeza: **el aprovechamiento del cupón está en torno al 35%** (§1.6 del plan). El resto del sistema —tiempos de respuesta, conversión por estado, descuento medio, abandono por paso de enrollment, margen por cohorte— **no está medido de forma consistente** o vive disperso entre CRM, call center, plataforma de enrollment y hojas de cálculo de finanzas.

Este anexo cubre cuatro objetivos:

1. **Definir qué métricas constituyen la línea base** mínima para que el plan sea gobernable.
2. **Fijar targets explícitos a 12 y 24 meses** con umbrales que permitan declarar éxito o fracaso.
3. **Establecer una metodología de baselining** ejecutable en 2-3 semanas dentro de la Fase 1 del §15.
4. **Listar los riesgos del propio ejercicio de baselining** para que la Dirección no confunda ausencia de datos con ausencia de problema.

Sin completar este anexo antes de iniciar la Fase 2 del plan, **no se podrá distinguir mejora real de variación natural**, ni atribuir el resultado a las palancas correctas (clasificación por intención, voz selectiva, pricing personalizado, rescate económico).

> **Regla operativa**: ningún piloto de Fase 2 o posterior puede arrancar sobre un programa cuyo baseline no esté firmado por Dirección Comercial y Revenue Operations.

---

## 2. Métricas a capturar como línea base

La tabla siguiente lista las métricas mínimas que deben existir antes de comenzar pilotos. Las cifras marcadas como "estimado, por validar" provienen de conocimiento operativo interno y deben confirmarse o corregirse en el ejercicio de baselining. Las marcadas como "por descubrir" no tienen hoy fuente fiable.

### 2.1 Métricas de aprovechamiento y volumen

| # | Métrica | Definición operativa | Fuente de datos | Owner | Frecuencia | Estado actual |
|---|---|---|---|---|---|---|
| M01 | Aprovechamiento de cupón | % de leads asignados a comercial que reciben gestión efectiva (≥1 contacto humano útil registrado) sobre el total de cupón disponible | CRM + call center | Revenue Ops | Diaria | **~35% conocido** (§1.6) |
| M02 | Volumen de leads entrantes / día | Leads únicos creados, segmentados por fuente, marca y programa | CRM + web analytics | Marketing Ops | Diaria | Conocido en agregado, **por descubrir a nivel programa/cohorte** |
| M03 | Distribución de leads por intención inicial | % de leads clasificados en Exploración / Consideración / Activación al ingreso | CRM (campo nuevo) | Revenue Ops | Semanal | **Por descubrir** — el campo de intención no existe hoy de forma estructurada |
| M04 | % leads con duplicado activo | Tasa de duplicidad real entre fuentes | CRM | Revenue Ops | Mensual | **Por descubrir** (estimado 8-15%) |

### 2.2 Métricas de velocidad (§13.1 del plan)

| # | Métrica | Definición operativa | Fuente | Owner | Frecuencia | Estado actual |
|---|---|---|---|---|---|---|
| M05 | TTR P50 — Tiempo a primera respuesta útil | Mediana de minutos entre creación de lead y primera respuesta de valor (no auto-reply) | CRM + WhatsApp BSP + call center | Revenue Ops | Diaria | **Por descubrir** — estimado 45-180 min según fuente y horario |
| M06 | TTR P90 | Percentil 90 del mismo evento | Idem | Revenue Ops | Diaria | **Por descubrir** |
| M07 | Tiempo a primera intervención humana | Mediana de minutos entre creación y primer contacto humano efectivo | CRM + call center | Revenue Ops | Diaria | **Por descubrir** — estimado >2h en muchos segmentos |
| M08 | Tiempo a primera propuesta económica | Mediana entre creación y envío de oferta personalizada | CRM | Revenue Ops | Semanal | **Por descubrir** |
| M09 | Tiempo desde activación hasta enrollment iniciado | Mediana entre estado "Activación" y primer paso de enrollment | CRM + plataforma enrollment | Revenue Ops | Semanal | **Por descubrir** |
| M10 | Tiempo de rescate post-abandono | Mediana entre evento de abandono y primer contacto de rescate | CRM | Revenue Ops | Semanal | **Por descubrir** |

### 2.3 Métricas de intención y conversión (§13.2)

| # | Métrica | Definición operativa | Fuente | Owner | Frecuencia | Estado actual |
|---|---|---|---|---|---|---|
| M11 | Conversión Exploración → Consideración | % leads que avanzan estado en ≤14 días | CRM | Revenue Ops | Semanal | **Por descubrir** — estados no formalizados hoy |
| M12 | Conversión Consideración → Activación | Idem | CRM | Revenue Ops | Semanal | **Por descubrir** |
| M13 | Conversión Activación → Cierre | % de Activaciones que llegan a aceptar oferta | CRM | Revenue Ops | Semanal | **Por descubrir** |
| M14 | Conversión Cierre → Matrícula | % de cierres que completan matrícula | CRM + enrollment | Revenue Ops | Semanal | Estimado 60-75%, **por validar por programa** |
| M15 | Conversión global lead→matrícula | Tasa end-to-end por programa | CRM + enrollment | Dirección Comercial | Mensual | Conocido en agregado, **por descubrir por cohorte** |
| M16 | % leads con al menos una llamada útil | % de leads con ≥1 llamada conectada de >60s | Call center | Revenue Ops | Semanal | **Por descubrir** — estimado 40-55% |
| M17 | Ratio de reactivación desde nurturing | % leads en nurturing que vuelven a estado activo | CRM | Marketing Ops | Mensual | **Por descubrir** |

### 2.4 Métricas de canal y actor (§13.3)

| # | Métrica | Definición | Fuente | Owner | Frecuencia | Estado actual |
|---|---|---|---|---|---|---|
| M18 | % matrículas WhatsApp-only | Matrículas sin contacto de voz | CRM | Revenue Ops | Mensual | **Por descubrir** — estimado <5% hoy |
| M19 | % matrículas auto-enrollment | Matrículas completadas sin intervención humana | Plataforma enrollment | Producto Digital | Mensual | **Por descubrir** — estimado <10% |
| M20 | Uplift de voz vs. no-voz | Diferencia de conversión en segmentos comparables | CRM + call center | Revenue Ops | Mensual | **Por descubrir** |
| M21 | Productividad comercial por hora | Matrículas cerradas / hora trabajada por agente | CRM + RRHH | Dirección Comercial | Semanal | Conocido en agregado, **por validar normalización** |
| M22 | Leads tratados por agente y día | Carga real | Call center | Dirección Comercial | Diaria | Conocido, **por validar definición** |

### 2.5 Métricas económicas (§13.4)

| # | Métrica | Definición | Fuente | Owner | Frecuencia | Estado actual |
|---|---|---|---|---|---|---|
| M23 | Precio medio neto por matrícula | Precio cobrado tras descuentos y becas | Finanzas + ERP | Finanzas | Mensual | Conocido en agregado, **por descubrir por cohorte/canal** |
| M24 | Descuento medio aplicado | % medio sobre PVP | Finanzas + CRM | Finanzas | Mensual | **Por descubrir granular** — estimado 12-22% |
| M25 | % matrículas con beca | Volumen | Finanzas | Finanzas | Mensual | **Por descubrir** |
| M26 | Beca media | Importe medio cuando se aplica | Finanzas | Finanzas | Mensual | **Por descubrir** |
| M27 | Coste de beca por matrícula incremental | Beca total / matrículas incrementales atribuibles | Finanzas + Revenue Ops | Finanzas | Mensual | **Por descubrir** — métrica nueva, requiere modelo de atribución |
| M28 | Margen de contribución por programa/cohorte | Ingreso neto − coste directo de captación y entrega | Finanzas | Finanzas | Mensual | Conocido a nivel programa, **por descubrir por cohorte** |
| M29 | Ratio de rescate económico exitoso | % de leads en flujo de rescate (§11) que cierran | CRM | Revenue Ops | Mensual | **Por descubrir** — flujo no formalizado hoy |
| M30 | Conversión tras primera objeción económica | % que cierran tras primera objeción de precio | CRM (campo nuevo) | Revenue Ops | Mensual | **Por descubrir** |
| M31 | Ratio de excepciones fuera de regla | Operaciones con descuento/beca aprobado fuera de tramo / total | Finanzas + comité pricing | Finanzas | Mensual | **Por descubrir** — gobernanza no formalizada |

### 2.6 Métricas de calidad operativa (§13.5)

| # | Métrica | Definición | Fuente | Owner | Frecuencia | Estado actual |
|---|---|---|---|---|---|---|
| M32 | Abandono por paso de enrollment | % drop-off en cada paso del funnel de matrícula | Plataforma enrollment | Producto Digital | Semanal | **Por descubrir** — instrumentación parcial |
| M33 | Tasa de errores/bloqueos de matrícula | Incidencias técnicas / matrículas iniciadas | Enrollment + soporte | Producto Digital | Semanal | **Por descubrir** |
| M34 | Distribución de motivos de no compra | Top categorías | CRM (campo estructurado) | Revenue Ops | Mensual | **Por descubrir** — campo libre hoy, no taxonómico |
| M35 | % leads sin siguiente acción asignada | Backlog operativo | CRM | Revenue Ops | Diaria | **Por descubrir** |
| M36 | Cumplimiento SLA por estado | % de transiciones dentro del SLA definido | CRM | Revenue Ops | Diaria | **Por descubrir** — SLAs aún no fijados |

**Total**: 36 métricas. De ellas, **solo 1 está hoy medida con confianza** (M01: cupón al 35%). El resto debe ser estabilizado durante el ejercicio de baselining.

---

## 3. Targets año 1 y año 2

Los targets siguientes son **propuestas de Dirección** que deben ser refinadas tras la primera vuelta de baselining (Sección 4). Donde la línea base es estimada, los targets se expresan como **mejora relativa**, no absoluta, hasta que el baseline esté firmado.

### 3.1 Targets críticos (los que el Comité de Dirección debe seguir)

| Métrica | Baseline (estimado, por validar) | Target 12 meses | Target 24 meses | Responsable | Supuesto clave |
|---|---|---|---|---|---|
| M01 — Aprovechamiento de cupón | 35% | **50%** | **65%** | Dirección Comercial | Reasignación por intención + IA primera capa funcionando |
| M05 — TTR P50 | 60-120 min | **<5 min** | **<2 min** | Revenue Ops | IA inbound activa 24/7 desde Fase 2 |
| M07 — Tiempo a primera intervención humana (cuando aplica) | >2h | **<30 min en alta intención** | **<15 min** | Dirección Comercial | Routing por intención operativo |
| M15 — Conversión global lead→matrícula | X% (por validar) | **+25% relativo** | **+45% relativo** | Dirección Comercial | Mantener o aumentar volumen de lead |
| M19 — % matrículas auto-enrollment | <10% | **25%** | **40%** | Producto Digital | Programas Ruta A identificados y plataforma adaptada |
| M28 — Margen de contribución por cohorte | Línea base por validar | **estable o +3 pp** | **+5 pp** | Finanzas | Pricing personalizado no destruye margen |
| M29 — Rescate económico exitoso | ~0% formal | **15%** | **25%** | Revenue Ops | Flujo de rescate del §11 implementado |

### 3.2 Targets secundarios (panel operativo Revenue Ops)

| Métrica | Baseline (por validar) | Target 12m | Target 24m |
|---|---|---|---|
| M11 — Exploración → Consideración | por descubrir | +20% relativo | +35% |
| M12 — Consideración → Activación | por descubrir | +15% | +25% |
| M13 — Activación → Cierre | por descubrir | +10% | +20% |
| M14 — Cierre → Matrícula | 60-75% | **85%** | **92%** |
| M16 — % leads con llamada útil | 40-55% | **selectivo, no global** — solo donde aporta uplift M20 ≥ +5pp | idem |
| M20 — Uplift de voz | desconocido | medido y publicado mensual | usado como criterio de routing |
| M24 — Descuento medio | 12-22% est. | **estable o −1 pp** | **−2 pp** |
| M27 — Coste de beca por matrícula incremental | desconocido | medido y <umbral por programa | optimizado |
| M32 — Abandono por paso de enrollment | desconocido | top-3 pasos críticos con drop −30% | −50% |
| M36 — Cumplimiento SLA | desconocido | **>90%** estados críticos | **>95%** |

### 3.3 Supuestos transversales que condicionan todos los targets

- **S1**: el volumen de lead entrante no cae más de un 10% interanual por causas externas.
- **S2**: el mix de programas se mantiene estable o evoluciona de forma planificada.
- **S3**: la inversión en instrumentación (CRM, eventos, plataforma enrollment) se aprueba en T0.
- **S4**: el comité de pricing se constituye antes de la Fase 3.
- **S5**: los pilotos comienzan sobre programas con suficiente volumen mensual (>200 leads/mes) para tener significancia estadística en 6 semanas.

Si alguno de estos supuestos se rompe, los targets deben renegociarse antes —no después— de su incumplimiento.

---

## 4. Metodología de baselining

El baselining debe ejecutarse en las **primeras 2-3 semanas de la Fase 1** del §15 del plan. Es trabajo bloqueante: nada de Fase 2 puede arrancar sin él.

### 4.1 Fuentes a explotar

| Fuente | Qué extraer | Limitación esperada |
|---|---|---|
| **CRM** (Salesforce/HubSpot/propio) | Estados, transiciones, timestamps, owner, motivos | Estados informales, campos libres, falta de eventos |
| **Call center** (telefonía + grabación) | Llamadas conectadas, duración, intentos, conversión post-llamada | Reconciliación con CRM por teléfono normalizado |
| **Plataforma enrollment** | Pasos completados, abandonos, errores | Instrumentación parcial; eventos no nombrados consistentemente |
| **WhatsApp Business API (BSP)** | Mensajes inbound/outbound, plantillas, ventana 24h, response time | Atribución a lead correcta solo si número está vinculado |
| **Web analytics** (GA4 / similar) | Sesiones, fuentes, eventos clave, conversiones | Cookies, consentimiento, atribución cross-device |
| **ERP / Finanzas** | Cobros, descuentos, becas concedidas, márgenes | Granularidad por cohorte rara vez existe |
| **Hojas de cálculo de equipo** | Excepciones, becas manuales, decisiones de comité | Riesgo alto de versiones divergentes |

### 4.2 Plan de extracción (15 días laborables)

| Día | Hito |
|---|---|
| D1-D2 | Inventario de fuentes, accesos, dueños técnicos. Definición del periodo de referencia (sugerido: últimos 90 días naturales completos). |
| D3-D5 | Extracción cruda CRM + call center + enrollment. Normalización de identificadores (lead_id, teléfono, email). |
| D6-D7 | Reconciliación cross-fuente. Identificación de duplicados, huecos y eventos faltantes. |
| D8-D10 | Cálculo de M01-M22 (volumen, velocidad, conversión, canal). Marcado explícito de métricas no calculables por falta de datos. |
| D11-D12 | Cálculo de M23-M31 (económicas) con Finanzas. Conciliación cohorte. |
| D13 | Cálculo de M32-M36 (calidad operativa) y mapa de gaps. |
| D14 | Documento de baseline firmado por Revenue Ops + Dirección Comercial + Finanzas. |
| D15 | Sesión de calibración con Comité de Dirección: aprobación de targets reales (no estimados) y go/no-go a Fase 2. |

### 4.3 Gaps de datos esperables

Antes incluso de empezar, hay que asumir que aparecerán estos huecos. No son excusa para retrasar; son parte del entregable:

1. **Estados comerciales no formalizados**: probablemente los estados Exploración/Consideración/Activación no existen como tales. Habrá que **inferirlos** desde campos actuales (etapa, sub-etapa, fecha de última actividad) y aceptar un margen de error en el primer cálculo.
2. **Eventos sin instrumentar en enrollment**: muchos pasos del funnel de matrícula probablemente no emiten eventos. La medición real de M32 puede requerir 2-4 semanas adicionales de instrumentación tras Fase 1.
3. **Tiempos contaminados por horarios**: TTR puede estar inflado por leads entrados fuera de horario. Hay que reportar dos versiones: bruto y normalizado a horario laboral.
4. **Atribución de beca**: M27 (coste de beca incremental) requiere un modelo causal —matched cohort o equivalente— que no existirá de partida. Para el baseline inicial, reportar **coste de beca total / matrículas con beca** como proxy y marcarlo explícitamente.
5. **Motivos de no compra**: hoy son texto libre. El baseline debe entregar una **taxonomía propuesta** (8-12 categorías) y una recodificación retroactiva de los últimos 90 días.
6. **Definición de "llamada útil"**: requiere acuerdo entre Dirección Comercial y Revenue Ops antes del cálculo. Sugerencia: ≥60s conectada y con resultado registrado distinto de "no contacto".

### 4.4 Entregables del baselining

- **Documento "Baseline T0"** (10-15 páginas): tabla de 36 métricas con valor real, intervalo de confianza cualitativo, fuente y nivel de fiabilidad (alto / medio / bajo / no medible).
- **Mapa de gaps** priorizado: qué medir, qué instrumentar, qué definir.
- **Targets revisados**: la tabla de la §3 actualizada con baselines reales en lugar de estimados.
- **Acta firmada**: Revenue Ops, Dirección Comercial, Finanzas, Producto Digital.

---

## 5. Dashboard mínimo viable (semana 1)

Desde el primer día de pilotos, la Dirección no puede operar a ciegas. El dashboard MVP debe tener **8-10 métricas máximo**, refrescarse a diario y ser legible en menos de 60 segundos.

| # | Métrica del dashboard | Objetivo de lectura | Umbral de alerta |
|---|---|---|---|
| 1 | **Aprovechamiento de cupón (M01)** hoy y media 7 días | ¿Estamos atendiendo el cupón disponible? | <40% rojo |
| 2 | **TTR P50 (M05)** últimas 24h | ¿La primera respuesta llega a tiempo? | >10 min ámbar, >20 min rojo |
| 3 | **% leads sin siguiente acción (M35)** | ¿Hay backlog acumulado? | >5% ámbar, >10% rojo |
| 4 | **Volumen de leads entrantes (M02)** vs. semana anterior | ¿Hay caída de demanda? | −15% rojo |
| 5 | **Conversión Activación → Cierre (M13)** rolling 14d | Salud del fondo del funnel | desviación >20% vs. baseline |
| 6 | **Matrículas completadas hoy / semana / mes** | Resultado final | semáforo vs. plan |
| 7 | **Abandono enrollment paso crítico (M32)** | Pérdida operativa | >umbral por paso |
| 8 | **Descuento medio (M24) rolling 30d** | Salud económica | desviación >2 pp |
| 9 | **Excepciones fuera de regla (M31)** semana actual | Disciplina del comité de pricing | >umbral mensual prorrateado |
| 10 | **Cumplimiento SLA estados críticos (M36)** | Disciplina operativa | <90% rojo |

Reglas del dashboard MVP:

- **Una sola fuente de verdad**: Revenue Ops es propietario y publica.
- **Prohibido añadir métricas sin retirar otras**. El dashboard MVP no crece más de 12.
- **Los semáforos se calibran cada mes** durante las primeras 12 semanas, luego trimestralmente.
- **Nadie discute decisiones operativas con datos de fuera del dashboard** sin pasarlas antes por Revenue Ops.

---

## 6. Criterios go / no-go por fase

Cada fase del §15 del plan tiene un umbral mínimo que habilita pasar a la siguiente. Si no se alcanza, no se pasa: se itera o se aborta.

### 6.1 Fase 1 → Fase 2 (semana 4)

**Condición de paso**: la instrumentación está lista para medir.

- [ ] Documento Baseline T0 firmado.
- [ ] Dashboard MVP en producción y refrescándose diariamente.
- [ ] Estados comerciales formalizados en CRM.
- [ ] SLAs definidos para los 6 estados críticos.
- [ ] Programas piloto seleccionados (mínimo 1 Ruta A + 1 Ruta B, >200 leads/mes cada uno).

### 6.2 Fase 2 → Fase 3 (semana 10)

**Condición de paso**: la orquestación por intención mejora aprovechamiento y velocidad sin destruir conversión.

| Métrica | Umbral mínimo en piloto |
|---|---|
| M01 — Cupón | ≥45% en programas piloto (vs. 35% baseline) |
| M05 — TTR P50 | <10 min en horario laboral piloto |
| M15 — Conversión global piloto | ≥ baseline (no caída) |
| M20 — Uplift voz medido y publicado | sí / no |
| M16 — % llamadas | reducción ≥20% sin caída de M13 |

Si **M15 cae más de 5% relativo en piloto**, se aborta y se diagnostica antes de continuar.

### 6.3 Fase 3 → Fase 4 (semana 14)

**Condición de paso**: el pricing personalizado y el rescate económico funcionan dentro de gobernanza.

| Métrica | Umbral |
|---|---|
| M28 — Margen por cohorte piloto | ≥ baseline |
| M24 — Descuento medio | ≤ baseline +1 pp |
| M29 — Rescate exitoso | ≥10% en flujo formalizado |
| M31 — Excepciones fuera de regla | <5% del total |
| Comité de pricing | constituido y reuniéndose mensualmente |

Si el margen cae más de 2 pp, se congela el pricing personalizado hasta diagnóstico.

### 6.4 Fase 4 → Fase 5 (semana 18)

**Condición de paso**: el enrollment asistido reduce abandono medible.

| Métrica | Umbral |
|---|---|
| M32 — Abandono en top-3 pasos críticos | reducción ≥20% relativa |
| M14 — Cierre → Matrícula | ≥80% en pilotos |
| M19 — % auto-enrollment | ≥20% en programas Ruta A piloto |
| M33 — Errores/bloqueos | tendencia decreciente, sin incidentes críticos abiertos |

### 6.5 Fase 5 — escalado controlado

**Condición de paso para extender a un programa nuevo**:

- baseline propio del programa firmado;
- responsable comercial del programa formado en el modelo;
- dashboard del programa enchufado al MVP global;
- comité de pricing valida tramos económicos del programa.

---

## 7. Riesgos del propio ejercicio de baselining

El baseline no es una verdad neutra: es una construcción. Estos son los riesgos que la Dirección debe asumir explícitamente.

| # | Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|---|
| R1 | **Datos sucios en CRM**: duplicados, campos vacíos, owners obsoletos. | Alta | Alto — métricas falsas en ambos sentidos | Limpieza acotada al periodo de referencia + flag de calidad por registro |
| R2 | **Eventos sin instrumentar** en enrollment y WhatsApp. | Alta | Alto — M32, M05 no calculables fielmente | Aceptar baseline parcial v1 + plan de instrumentación de 4 semanas en paralelo a Fase 2 |
| R3 | **Definiciones inconsistentes entre equipos**: "lead cualificado", "llamada útil", "cierre" significan cosas distintas en Marketing, Comercial y Finanzas. | Muy alta | Crítico — debates eternos sobre qué mide qué | **Glosario operativo firmado** antes del cálculo. Anexo B propuesto. |
| R4 | **Sesgo de selección de periodo**: 90 días pueden coincidir con campaña atípica, festivos o incidente. | Media | Medio | Reportar también ventana móvil 30/60/90 y comparar contra mismo periodo año anterior |
| R5 | **Atribución económica débil**: imposible saber qué matrículas son incrementales por beca sin grupo de control. | Alta | Alto en M27 | Marcar M27 como proxy en v1; diseñar test A/B en Fase 3 |
| R6 | **Resistencia organizativa** a publicar baseline porque expone bajo rendimiento. | Media | Crítico — bloquea el plan entero | Comunicación de Dirección: el baseline no se usa para evaluar personas en T0, solo para medir mejora futura |
| R7 | **Métricas vanidosas** entrando en el dashboard MVP (impresiones, leads totales sin calidad). | Media | Medio — diluye foco | Revenue Ops tiene veto sobre el contenido del dashboard |
| R8 | **Targets demasiado optimistas** (cupón 35%→65% en 12m, no 24m). | Media | Alto — pérdida de credibilidad si se incumplen | Renegociar targets tras baseline real. Este anexo es v1, no inmutable. |
| R9 | **Dependencia de un único analista** para todo el baseline. | Alta | Alto — single point of failure | Dos personas en Revenue Ops co-firman, scripts versionados en repositorio |
| R10 | **Confundir correlación con causalidad** al atribuir mejoras a las palancas del plan. | Alta | Medio | Para cada hito, registrar qué cambió y mantener cohortes de control donde sea posible |

---

## 8. Cierre y siguiente paso

Este anexo convierte los KPIs declarativos del §13 en un **sistema de gestión auditable**. Su validación habilita el resto del plan; su omisión lo invalida.

**Acción inmediata propuesta** (semana 0 del plan):

1. Dirección Comercial firma este anexo como bloqueante de Fase 1.
2. Revenue Ops abre ticket de baselining con plan de 15 días laborables.
3. Finanzas asigna interlocutor para M23-M31.
4. Producto Digital asigna interlocutor para M19, M32, M33.
5. Comité de Dirección agenda sesión de calibración de targets en D15.

> **Decisión que debe tomar el Comité de Dirección al firmar este anexo**: aceptar que durante las próximas 3 semanas la prioridad operativa de Revenue Ops y Finanzas es medir, no acelerar pilotos. Sin esta decisión, todo lo que venga después será narrativa, no gestión.

---

*Fin del Anexo A. Continúa en Anexo B (propuesto) — Glosario operativo y definiciones compartidas.*
