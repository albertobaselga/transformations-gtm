# ANEXO G — Costeo, dependencias técnicas y cronograma realista de plataforma

**Documento:** Estrategia de Transformación del Modelo de Comercialización — Northius  
**Versión:** 1.0 | Abril 2026  
**Audiencia:** CTO / COO / CFO  
**Estado:** Estimaciones de orden de magnitud — sujetas a auditoría de sistemas actuales

---

## G.1 Propósito de este anexo

El plan de implantación de la estrategia (§15) propone un horizonte de 18 semanas desde diseño hasta escalado inicial. Ese calendario es **realista para el piloto funcional** —la parte del plan que arranca con procesos manuales instrumentados, reglas simples y un CRM mejorado— pero **no es suficiente para desplegar la plataforma técnica completa** que el modelo requiere a escala.

Este anexo separa explícitamente ambas trayectorias:

| Trayectoria | Horizonte | Qué abarca |
|---|---|---|
| **Piloto funcional** | 18 semanas | Procesos manuales + CRM enriquecido + reglas básicas de clasificación + WhatsApp con plantillas + dashboards manuales |
| **Plataforma técnica** | 10-14 meses | Motor de intención ML, integraciones bidireccionales CRM↔enrollment↔pricing, auto-enrollment personalizado, voz IA, data platform de monitoreo |

El error habitual en proyectos similares en educación es presentar ambas trayectorias como una sola, generando una brecha entre lo prometido y lo ejecutable que erosiona la confianza interna y compromete el piloto.

**La recomendación central de este anexo es la siguiente:** avanzar el piloto funcional a la velocidad del plan original (18 semanas), mientras se construye la plataforma técnica en paralelo con una gestión de programa independiente. No bloquear el piloto esperando integraciones perfectas.

---

## G.2 Inventario de sistemas actuales

La siguiente tabla debe completarse en la semana 1 del plan de implantación, en la sesión de auditoría de sistemas prevista en la Fase 1 (§15). Los valores marcados con `[AUDITAR]` son hipótesis a confirmar.

| Sistema | Función en el modelo | Madurez estimada | Integración actual | Responsable típico | Licencia / modelo |
|---|---|---|---|---|---|
| **CRM** (HubSpot / Salesforce / propio) | Registro de leads, estados, seguimiento, asignación | `[AUDITAR]` Media-Alta | Manual o parcial con enrollment | Dir. Comercial / IT | SaaS mensual o licencia |
| **Plataforma de enrollment** | Gestión del proceso de matriculación paso a paso | `[AUDITAR]` Media | Conectada al CRM de forma parcial o por exportación | Operaciones Académicas | Propia o verticales de ed-tech |
| **Call center** | Gestión de llamadas inbound/outbound, script, grabación | `[AUDITAR]` Media | Datos no fluyen al CRM en tiempo real | Dir. Comercial | SaaS (Ringover, Aircall, Zendesk Talk…) |
| **WhatsApp Business API** | Canal de comunicación bidireccional con leads | `[AUDITAR]` Baja-Media | Uso manual o con herramienta básica tipo Respond.io | Marketing / Comercial | Meta + partner BSP |
| **Email marketing** | Secuencias de nurturing, notificaciones, confirmaciones | Media-Alta | Integrada con CRM a nivel básico | Marketing | SaaS (HubSpot, Mailchimp, Brevo…) |
| **Web analytics** | Tráfico, eventos de conversión, comportamiento en landing | Alta | Google Analytics / pixel, no conectado al CRM individual | Marketing Digital | Gratuito / GA4 |
| **Motor de pricing** | Reglas de descuento, becas, propuesta económica personalizada | `[AUDITAR]` Baja | Gestionado manualmente por el comercial o en Excel | Dir. Comercial / Financiero | Inexistente como sistema |
| **Sistema académico (SIS/ERP)** | Gestión de programas, plazas, matrículas, expedientes | Media-Alta | Conectado a enrollment post-matrícula, no pre-matrícula | Operaciones Académicas | ERP propio o vertical (Creatios, Veeva, SAP…) |
| **Pasarela de pago** | Cobro de señal, cuotas, matrícula completa | Media | Conectada a enrollment, no a CRM ni a IA | Financiero | Stripe / Redsys / Adyen |
| **Sistema de becas** | Validación y aprobación de becas, registro de motivo | `[AUDITAR]` Baja | Manual o en hojas de cálculo | Dirección Académica / Financiero | Inexistente como sistema independiente |

**Acción inmediata:** en la semana 1-2 del plan, el responsable técnico debe completar esta tabla con: versión exacta, número de registros activos, API disponible (sí/no), coste de licencia actual y responsable interno de cada sistema.

---

## G.3 Mapa de integraciones necesarias

### Diagrama conceptual (texto)

```
                    ┌─────────────────────────────────────────┐
                    │              MOTOR DE INTENCIÓN          │
                    │    (clasificación, scoring, decisión)    │
                    └──────────┬──────────────┬───────────────┘
                               │              │
              ┌────────────────▼──┐      ┌───▼─────────────────┐
              │   ORQUESTADOR     │      │   DATA PLATFORM      │
              │ (webhook-driven)  │      │ (eventos, baseline,  │
              │ next best action  │      │   monitoreo)         │
              └──┬───────┬────┬──┘      └─────────────────────┘
                 │       │    │
    ┌────────────▼┐  ┌───▼──┐ ┌▼────────────────┐
    │  WHATSAPP   │  │ CRM  │ │ PRICING ENGINE   │
    │ BUSINESS API│  │      │ │ (reglas, becas,  │
    │             │  │      │ │  descuentos)     │
    └────────────┘  └──┬───┘ └─────────┬────────┘
                       │               │
              ┌─────────▼──────────────▼──────────┐
              │        ENROLLMENT PLATFORM         │
              │  (pasos, estado, pago, documentos) │
              └────────────────┬──────────────────┘
                               │
              ┌────────────────▼──────────────────┐
              │       PASARELA DE PAGO             │
              │  (señal, cuotas, financiación)     │
              └───────────────────────────────────┘
```

### Tabla de integraciones requeridas

| Integración | Dirección | Latencia requerida | Volumen estimado | Camino crítico |
|---|---|---|---|---|
| CRM → WhatsApp Business API | Bidireccional | < 5 segundos (mensajes de respuesta) | 500-2.000 mensajes/día | **SÍ** |
| CRM → Motor de intención | Bidireccional | < 30 segundos (reclasificación) | Cada evento de lead | **SÍ** |
| Motor de intención → Orquestador | Unidireccional (output) | < 10 segundos (next best action) | Cada cambio de estado | **SÍ** |
| Pricing engine → CRM | Bidireccional | < 60 segundos (proposición) | Cada lead en rescate | **SÍ** |
| Enrollment → CRM | Bidireccional (eventos de estado) | < 5 minutos (estado por paso) | Cada acción de enrollment | **SÍ** |
| CRM → Email marketing | Unidireccional (trigger) | Batch + near-real-time | 1.000-5.000 emails/día | No crítico |
| Pasarela de pago → Enrollment | Bidireccional | < 10 segundos (confirmación) | Por transacción | Parcial |
| Sistema académico → CRM | Unidireccional (confirmación) | Batch diario aceptable | Post-matrícula | No crítico |
| Web analytics → CRM | Unidireccional (eventos) | Near-real-time o batch horario | Eventos de sesión | Parcial |

### Los 5 caminos críticos del programa

1. **CRM ↔ WhatsApp Business API**: sin esta integración, la capa conversacional persistente del modelo es imposible. Es el cuello de botella más frecuente porque depende de aprobación de Meta y plantillas de mensaje.
2. **CRM ↔ Motor de intención**: sin scoring en tiempo real, toda la lógica de "siguiente mejor acción" es manual. El piloto puede operar con reglas, pero el escalado requiere ML.
3. **Motor de intención → Orquestador**: la arquitectura webhook-driven es la que permite que el sistema actúe de forma autónoma sin intervención humana por lead.
4. **Pricing engine ↔ CRM**: sin esto, el flujo de rescate económico (§11 del plan) no puede ejecutarse de forma trazable y gobernada. Las becas seguirán siendo manuales.
5. **Enrollment ↔ CRM**: sin visibilidad paso a paso del proceso de matrícula, la recuperación de abandono (Fase 4 del plan) no tiene señal sobre dónde se produce la pérdida.

---

## G.4 Proyectos de integración: descomposición y esfuerzo estimado

Cada proyecto es independiente y puede ejecutarse en paralelo con los demás, excepto donde se indica dependencia explícita.

---

### P1 — CRM ↔ WhatsApp Business API

**Alcance:** conexión bidireccional entre el CRM y WhatsApp Business API vía Business Solution Provider (BSP). Incluye gestión de plantillas aprobadas por Meta, registro de consentimiento de usuario, estado de entrega y lectura de cada mensaje, y enrutamiento de respuestas entrantes al agente o a la IA.

| Atributo | Valor |
|---|---|
| Esfuerzo estimado | 2-3 FTE-mes |
| Duración calendario | 6-10 semanas |
| Dependencias | Cuenta de WhatsApp Business verificada + BSP seleccionado + plantillas aprobadas (plazo Meta: 1-4 semanas) |
| Riesgos | Rechazo de plantillas por Meta, límites de rate (1.000 conversaciones/día en tier inicial), cambios de política de Meta |
| Owner sugerido | IT / Proveedor de integración con soporte BSP |

---

### P2 — CRM ↔ Motor de intención

**Alcance:** pipeline de datos desde el CRM hacia el motor de intención (features de lead: fuente, programa, interacciones, eventos web, respuestas WhatsApp, tiempo en fases). Output del motor de vuelta al CRM como campo de score y segmento de intención. Incluye feedback loop: el resultado de cada acción retroalimenta el modelo.

| Atributo | Valor |
|---|---|
| Esfuerzo estimado | 3-5 FTE-mes (incluye diseño del modelo inicial) |
| Duración calendario | 10-14 semanas |
| Dependencias | P1 completo (eventos WhatsApp como feature), P7 (data platform para features históricas) |
| Riesgos | Calidad de datos históricos del CRM, cold start del modelo, deriva del modelo sin datos de entrenamiento suficientes |
| Owner sugerido | Data Science / IT — requiere perfil ML |

---

### P3 — Motor de intención ↔ Orquestador de acciones

**Alcance:** capa de orquestación webhook-driven que recibe el output del motor de intención y dispara la siguiente mejor acción: enviar mensaje WhatsApp, activar flujo de email, escalar a humano, proponer beca, lanzar recordatorio de enrollment, etc. Es el "sistema nervioso" del modelo.

| Atributo | Valor |
|---|---|
| Esfuerzo estimado | 2-3 FTE-mes |
| Duración calendario | 6-8 semanas |
| Dependencias | P2 (output del motor como trigger), P1 (WhatsApp como canal de acción) |
| Riesgos | Explosión de casos edge en las reglas de orquestación, falta de trazabilidad de qué acción disparó qué resultado |
| Owner sugerido | IT / Arquitecto de integración |

---

### P4 — Pricing engine ↔ CRM + Enrollment

**Alcance:** motor de reglas de pricing que calcula la propuesta económica personalizada (descuento, beca, modalidad de pago, financiación) para un lead dado, en función de su perfil, programa, estado en el funnel y suelo de margen definido. La propuesta se registra en el CRM con motivo, tramo y caducidad. El enrollment la consume para mostrar la oferta correcta.

| Atributo | Valor |
|---|---|
| Esfuerzo estimado | 2-3 FTE-mes |
| Duración calendario | 6-8 semanas |
| Dependencias | Definición previa de reglas de negocio de pricing (semana 1-4 del plan) + integración básica CRM-enrollment (P5) |
| Riesgos | Resistencia organizativa a externalizar la decisión de descuento, complejidad de mantener las reglas actualizadas, falta de datos de margen por programa |
| Owner sugerido | IT + Dirección Comercial + Financiero (tripartita) |

---

### P5 — Enrollment ↔ CRM (estado por paso)

**Alcance:** sincronización bidireccional entre la plataforma de enrollment y el CRM con visibilidad de cada paso del proceso de matrícula (paso completado, abandonado, bloqueado, documentación pendiente, pago iniciado, matrícula confirmada). Cada evento de abandono dispara una acción en el orquestador.

| Atributo | Valor |
|---|---|
| Esfuerzo estimado | 2-4 FTE-mes (depende de la madurez de la API de enrollment) |
| Duración calendario | 8-12 semanas |
| Dependencias | API de enrollment disponible (si es sistema propio, puede requerir desarrollo previo de la API) |
| Riesgos | Enrollment sin API (requiere desarrollo adicional), multiplicidad de pasos distintos por tipo de programa, estados inconsistentes entre sistemas |
| Owner sugerido | IT + Operaciones Académicas |

---

### P6 — Auto-enrollment personalizado (frontend + lógica)

**Alcance:** experiencia de enrollment adaptada al lead: propuesta económica pre-cargada, pasos ajustados al tipo de formación, asistencia IA paso a paso, recuperación de sesión abandonada, integración con pasarela de pago y con financiación externa. No es un formulario genérico: es una interfaz con lógica de personalización basada en el perfil del lead.

| Atributo | Valor |
|---|---|
| Esfuerzo estimado | 4-6 FTE-mes |
| Duración calendario | 10-14 semanas |
| Dependencias | P4 (pricing), P5 (estado de enrollment en CRM), P1 (WhatsApp para recordatorios), UX/UI design previo |
| Riesgos | Subestimación del esfuerzo de UX, diferencias entre tipos de formación que requieren flujos distintos, integración con múltiples pasarelas o financiadoras |
| Owner sugerido | IT + UX + Operaciones Académicas |

---

### P7 — Data platform para baseline y monitoreo

**Alcance:** infraestructura de datos que consolida eventos de todos los sistemas (CRM, WhatsApp, enrollment, web, call center) en un almacén único para calcular métricas de baseline (semana 1-4 del plan), alimentar el motor de intención con features históricas y sostener el cuadro de mando del §13.

| Atributo | Valor |
|---|---|
| Esfuerzo estimado | 2-3 FTE-mes |
| Duración calendario | 6-8 semanas |
| Dependencias | Acceso a los sistemas fuente (CRM, enrollment, analytics), definición de KPIs del cuadro de mando |
| Riesgos | Calidad de datos históricos, silos de datos entre sistemas sin identificador de lead unificado, GDPR sobre retención y uso de datos de comportamiento |
| Owner sugerido | Data Engineering / IT |

---

## G.5 Proveedores externos y dependencias

| Proveedor / capa | Función | Alternativas | Lock-in | Coste variable estimado (orden de magnitud) |
|---|---|---|---|---|
| **WhatsApp Business API (Meta)** | Canal conversacional persistente | Telegram Bot API (menor penetración en ES), SMS (mayor coste, menor engagement) | Alto — Meta controla plantillas, rate limits y política de uso | 0,04-0,08 € por conversación de 24h (estimado, varía por BSP y volumen) |
| **BSP de WhatsApp** (Twilio, 360dialog, Vonage, Infobip) | Intermediario certificado para conectar con la API de Meta | Cada BSP tiene pricing distinto; 360dialog es más económico para volúmenes bajos | Medio — migración posible pero costosa | Coste fijo mensual (50-300 €) + variable por conversación |
| **Proveedor LLM** (OpenAI GPT-4o, Anthropic Claude, Google Gemini) | IA conversacional, clasificación de intención, generación de propuestas | Multi-proveedor con capa de abstracción para reducir dependencia | Medio-Alto si se embebe en el producto sin abstracción | 2-15 € por 1M tokens input/output según modelo y volumen; estimado 500-3.000 €/mes para volúmenes de piloto |
| **Proveedor de voz IA** (ElevenLabs, Play.ht, Retell AI, Bland AI) | Llamadas outbound automatizadas con voz sintética | Voz humana (más caro) o STTI+TTS propio | Bajo-Medio | 0,05-0,15 € por minuto de llamada (estimado) |
| **Pasarela de pago** (Stripe, Redsys, Adyen) | Cobro de señal, cuotas, matrícula | Depende de bancos adquirentes y certificaciones PCI-DSS | Bajo-Medio | 1,4-2,9% + tarifa fija por transacción según volumen |
| **Financiadora externa** (Aplazame, Cetelem, financiación propia) | Financiación a plazos del coste de la formación | Múltiples operadores en el mercado español | Bajo | Coste de comisión + tipo de interés asumido; modelo variable |

**Riesgo de concentración:** si el motor de intención se construye sobre un único proveedor LLM sin capa de abstracción, un cambio de precio o política del proveedor puede afectar al coste operativo de forma relevante. Se recomienda diseñar una interfaz de modelo intercambiable desde el inicio.

---

## G.6 Estimación consolidada de esfuerzo

Los valores son estimaciones de orden de magnitud. El esfuerzo real depende de la madurez de los sistemas actuales (tabla G.2), la calidad de las APIs disponibles y la capacidad del equipo interno.

| Proyecto | FTE-mes (estimado) | Duración calendario | Dependencias clave | Owner |
|---|---|---|---|---|
| P1 — CRM ↔ WhatsApp API | 2-3 | 6-10 semanas | BSP + aprobación Meta | IT / Integración |
| P2 — CRM ↔ Motor de intención | 3-5 | 10-14 semanas | P1, P7 | Data Science / IT |
| P3 — Motor ↔ Orquestador | 2-3 | 6-8 semanas | P2, P1 | IT / Arquitecto |
| P4 — Pricing engine ↔ CRM | 2-3 | 6-8 semanas | Reglas de negocio, P5 | IT + Comercial + Fin. |
| P5 — Enrollment ↔ CRM | 2-4 | 8-12 semanas | API de enrollment | IT + Operaciones |
| P6 — Auto-enrollment personalizado | 4-6 | 10-14 semanas | P4, P5, P1 | IT + UX + Operaciones |
| P7 — Data platform | 2-3 | 6-8 semanas | Acceso a fuentes | Data Engineering |
| **Total acumulado** | **17-27 FTE-mes** | **10-14 meses (paralelo)** | — | — |

**Nota de interpretación:** los proyectos pueden ejecutarse en paralelo parcialmente. El camino crítico de la plataforma completa es P7 → P2 → P3, con una duración mínima de 10 meses asumiendo equipo dedicado. Sin paralelización real (equipo compartido con otras iniciativas), el horizonte se extiende a 14-18 meses.

---

## G.7 Estimación de coste OPEX año 1

Todas las cifras son estimaciones de orden de magnitud para un volumen de piloto inicial (2.000-5.000 leads/mes) y deben revisarse con presupuestos reales antes de aprobar el programa. Se expresan en rangos amplios para reflejar la incertidumbre.

| Categoría | Rango anual estimado | Notas |
|---|---|---|
| **Licencias de plataforma** (CRM profesional, enrollment, analytics) | 15.000 – 50.000 € | Depende del tier actual y de upgrades necesarios para habilitar APIs |
| **BSP WhatsApp + consumo API** | 8.000 – 25.000 € | Muy dependiente del volumen de conversaciones activas |
| **Consumo LLM** (inferencia, clasificación, IA conversacional) | 10.000 – 40.000 € | Escala con volumen de leads y complejidad de las consultas |
| **Proveedor de voz IA** (si se activa) | 5.000 – 20.000 € | Depende del porcentaje de leads que reciben llamada IA |
| **Infraestructura cloud** (data platform, orquestador, APIs propias) | 6.000 – 18.000 € | AWS / GCP / Azure según elección de stack |
| **Equipo interno nuevo o reforzado** | 60.000 – 120.000 € | 1 data engineer + 0,5 ML engineer + 0,5 product manager técnico (estimado bruto) |
| **Consultoría e integración externa** | 30.000 – 80.000 € | Integrador BSP, consultoría de arquitectura inicial, UX del auto-enrollment |
| **Pasarela de pago** (coste incremental por uso de auto-enrollment) | Variable — % de transacciones | No incluir como coste fijo; es coste de ventas |
| **Total OPEX año 1 estimado** | **134.000 – 353.000 €** | Rango amplio por incertidumbre en madurez de sistemas actuales |

El rango inferior asume: CRM ya en tier con API, enrollment con API disponible, equipo interno con capacidad parcial, volumen de leads bajo. El rango superior asume: sistemas actuales con poca madurez de integración, necesidad de upgrades de licencia, equipo nuevo contratado, consultora de integración y volumen de leads medio.

---

## G.8 Cronograma realista vs. cronograma del plan original

| Período | Plan original (§15) | Plataforma técnica (este anexo) | Posibilidad de avanzar con MVP manual |
|---|---|---|---|
| **Semanas 1-4** | Fase 1: diseño e instrumentación | P7: inicio de data platform; P1: contratación BSP y proceso de aprobación Meta | **Sí:** estados en CRM manual, dashboard Excel, auditoría de sistemas |
| **Semanas 5-10** | Fase 2: piloto orquestación por intención | P1: primeras integraciones WhatsApp; P5: inicio integración enrollment | **Sí:** WhatsApp con plantillas manuales, clasificación manual por reglas en CRM |
| **Semanas 8-14** | Fase 3: pricing y rescate económico | P4: pricing engine; P3: inicio orquestador | **Sí:** reglas de pricing en tabla Excel + aprobación manual por Dirección Comercial |
| **Semanas 12-18** | Fase 4: enrollment asistido | P6: inicio auto-enrollment personalizado | **Parcial:** asistencia por WhatsApp humano en los pasos críticos, scripts definidos |
| **Semana 18+** | Fase 5: escalado | P2: motor de intención ML en shadow mode | **No aplica:** el escalado requiere la plataforma técnica |
| **Meses 7-9** | — (no contemplado) | P2: motor ML en producción con A/B | — |
| **Meses 10-12** | — (no contemplado) | P6: auto-enrollment personalizado completo; P3: orquestador pleno | — |

**Conclusión clave:** las Fases 1 a 4 del plan original (semanas 1-18) pueden ejecutarse con un modelo **wizard-of-oz** — operación manual instrumentada que replica el comportamiento del sistema automatizado, registra los mismos datos y permite aprender, sin esperar a que la plataforma técnica esté lista. El wizard-of-oz no es un workaround temporal: es una estrategia deliberada de validación que reduce el riesgo de construir plataforma técnica para un modelo que aún no se ha probado.

---

## G.9 Plan de MVP escalonado

El siguiente plan permite operar el modelo comercial descrito en la estrategia desde el primer mes, escalando la automatización progresivamente sin bloquear el aprendizaje.

### Mes 1-2: Operación manual instrumentada

- Clasificación de leads en estados de intención de forma manual por el equipo comercial, con criterios definidos (§5 del plan).
- Dashboard de seguimiento en Excel o Notion con las métricas del cuadro de mando (§13).
- WhatsApp con plantillas estáticas enviadas manualmente desde un número de empresa verificado.
- Propuesta económica aprobada por tabla de reglas compartida con Dirección Comercial.
- Registro de cada acción (quién hizo qué, cuándo, resultado) como entrenamiento futuro del motor.
- **Entregable:** baseline de conversión por estado, tiempo en cada fase, tasa de respuesta por canal.

### Mes 3-4: CRM enriquecido con estados y primer motor de reglas

- CRM actualizado con campos de intención, fricción, propuesta económica y canal.
- Primer conjunto de reglas deterministas en el CRM: si [estado X + días sin respuesta > N] → tarea para comercial o envío de plantilla WhatsApp.
- P1 en curso: integración WhatsApp con BSP, primeras plantillas aprobadas por Meta.
- P7 activo: pipeline de datos consolidando eventos del CRM y analytics.
- **Entregable:** primer motor de reglas operativo, WhatsApp semi-automatizado.

### Mes 5-6: Primer modelo ML en shadow mode

- P2 en desarrollo: primer modelo de clasificación de intención entrenado con datos del mes 1-4.
- El modelo opera en paralelo (shadow mode): clasifica leads pero no toma decisiones. El equipo comercial decide; el modelo predice. Se mide accuracy del modelo vs. decisión humana.
- P5 en curso: integración enrollment ↔ CRM para visibilidad de pasos.
- **Entregable:** accuracy del modelo shadow, identificación de las features más predictivas.

### Mes 7-9: Motor en producción con A/B

- P2 completo: motor de intención en producción para un segmento de leads (A/B con grupo control manual).
- P3 activo: orquestador lanzando acciones automáticas (WhatsApp, escalado, propuesta) basado en output del motor.
- P4 en curso: pricing engine conectado a CRM.
- **Entregable:** uplift de conversión del motor vs. grupo control; coste por lead convertido automatizado vs. manual.

### Mes 10-12: Escalado y auto-enrollment personalizado

- P6 completo: auto-enrollment personalizado activo para programas de decisión autónoma.
- P4 completo: pricing engine integrado con enrollment.
- Motor de intención en producción para todos los programas piloto.
- Comité de pricing institucionalizado con revisión mensual de reglas.
- **Entregable:** modelo comercial automatizado como sistema operativo para programas piloto; plan de escalado al resto del portafolio.

---

## G.10 Riesgos técnicos de programa

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| **Deuda técnica del CRM actual** | Alta | Alto | Auditar en semana 1 si el CRM actual soporta las APIs necesarias. Si no, evaluar migración parcial o herramienta de integración tipo Zapier / Make para el piloto, y migración completa en el plan de plataforma. |
| **Límites del plan comercial de WhatsApp Business** | Alta | Alto | El tier inicial de Meta permite 1.000 conversaciones/día. Para volúmenes mayores, se requiere verificación de empresa y escalar el tier (proceso de 2-8 semanas adicionales). Planificarlo desde el inicio. |
| **Capacidad del equipo interno** | Media-Alta | Alto | Los proyectos P1-P7 requieren un mínimo de 2-3 FTE técnicos dedicados. Si el equipo IT está saturado con operaciones, la plataforma no avanzará. Es necesario definir el modelo de dotación (interno + externo) antes de la semana 4. |
| **Dependencia de un único proveedor LLM** | Media | Medio | Si el motor de intención y la IA conversacional se construyen sobre un único proveedor (ej. OpenAI), un cambio de precios o de política puede afectar al coste operativo y a la continuidad. Diseñar desde el inicio con una capa de abstracción de modelo. |
| **Calidad de datos históricos del CRM** | Alta | Medio | Los modelos ML requieren datos limpios y etiquetados. Si el CRM histórico tiene campos incompletos o inconsistentes, el cold start del motor de intención será más largo. Iniciar limpieza de datos en mes 1. |
| **Cumplimiento RGPD en datos de comportamiento** | Media | Alto | El uso de datos de comportamiento del lead (navegación, respuestas, eventos) para entrenar modelos de scoring requiere base legal explícita (interés legítimo o consentimiento). Revisar con asesoría legal antes de activar el motor. |
| **Resistencia del equipo comercial** | Media | Medio | Si los comerciales perciben la automatización como amenaza, no alimentarán el CRM con la calidad necesaria para que el motor funcione. El plan de change management (§17 de la estrategia) es crítico. |

---

## G.11 Recomendaciones de arranque

**1. Identificar el sistema pivote en la semana 1.**
En la mayoría de los proyectos de transformación comercial en educación, el CRM es el sistema pivote: todo pasa por él y es el registro de verdad del estado del lead. Si el CRM actual no tiene capacidad técnica para ser el sistema pivote (sin API, sin campos customizables, sin automatizaciones), la primera decisión técnica del programa es si se mejora el CRM existente o se migra. Esta decisión no puede demorarse.

**2. Unificar la identidad del lead desde la semana 1.**
El problema más frecuente en integraciones de este tipo es el lead duplicado: existe en el CRM con un ID, en el enrollment con otro, en WhatsApp con un número de teléfono y en analytics como cookie anónima. Si no se define un identificador unificado de lead desde el inicio (y un proceso para deduplicar), el motor de intención nunca tendrá una visión completa del comportamiento del lead. Establecer el criterio de deduplicación (email como primary key, teléfono como fallback) en la semana 1.

**3. No esperar integraciones perfectas para aprender.**
El wizard-of-oz de los meses 1-4 no es un parche. Es el mecanismo más eficiente para validar si el modelo de intención funciona antes de invertir en automatizarlo. Los datos que genera la operación manual instrumentada son el dataset de entrenamiento del motor ML. Cuanto antes empiece la operación, antes empieza el aprendizaje.

**4. Gestionar el programa técnico con disciplina de producto.**
Los proyectos P1-P7 deben gestionarse con un product manager técnico que los priorice, gestione dependencias y reporte avance semanalmente al CTO y al COO. Sin esta figura, los proyectos se paralelizan en exceso, se bloquean entre sí y pierden coherencia con el modelo de negocio.

**5. Definir el suelo económico antes de activar el pricing engine.**
El motor de pricing sólo puede operar dentro de reglas de negocio definidas previamente: tramos de descuento por programa, suelo de margen, criterios de beca, caducidad de la propuesta. Estas reglas son una decisión de negocio, no técnica. Deben estar aprobadas por Dirección Comercial y Financiero antes de que el equipo técnico construya el pricing engine. Sin ellas, el engine no tiene qué ejecutar.

---

## G.12 Matriz build vs. buy vs. integrate

| Capa tecnológica | Recomendación | Justificación |
|---|---|---|
| **CRM** | **Buy** (SaaS existente, upgrade de tier) | Construir un CRM propio es inviable. Si el actual no es suficiente, migrar a HubSpot Sales Pro o Salesforce Sales Cloud. No construir. |
| **WhatsApp Business API** | **Integrate** (vía BSP) | La API es de Meta; la integración se hace vía BSP certificado. No hay opción de construir. |
| **IA conversacional** | **Buy + Integrate** (LLM API + prompt engineering) | Usar un proveedor LLM (OpenAI, Anthropic, Google) vía API. No entrenar modelos base propios. Customizar con RAG y prompts de dominio. |
| **Motor de intención / scoring** | **Build** (sobre data platform propia) | El scoring es diferenciación competitiva si se basa en los datos propios de comportamiento de leads de Northius. Usar un proveedor de scoring genérico (ej. Salesforce Einstein) como punto de partida, pero construir el modelo propio a medio plazo. |
| **Orquestador de acciones** | **Buy + Integrate** (Make / n8n / herramienta de workflow) | Para el piloto, herramientas de automatización como Make o n8n permiten construir el orquestador sin código. A escala, evaluar si conviene migrar a un orquestador propio o a una plataforma tipo Braze o Salesforce Marketing Cloud. |
| **Pricing engine** | **Build** (motor de reglas propio) | Los modelos de descuento y beca son específicos del negocio y requieren control total. Una hoja de reglas versionada + API interna simple es suficiente para el piloto. No comprar un producto de pricing externo en la fase inicial. |
| **Plataforma de enrollment** | **Buy o mejorar** la existente | Si el enrollment actual tiene API, mejorar y extender. Si no tiene API ni soporte, evaluar plataformas verticales de ed-tech (Creatios, Educatia, Conexia). Construir enrollment propio es muy costoso. |
| **Auto-enrollment personalizado (frontend)** | **Build** (sobre enrollment existente) | La personalización de la experiencia de enrollment (propuesta pre-cargada, pasos adaptativos) requiere desarrollo frontend propio, ya que ningún producto estándar de enrollment ofrece este nivel de personalización out-of-the-box. |
| **Data platform / warehouse** | **Buy** (BigQuery, Snowflake, Redshift) | No construir infraestructura de datos propia. Usar un data warehouse gestionado en cloud y conectarlo con herramientas de BI (Looker Studio, Metabase). |
| **Voz IA** | **Buy** (proveedor especializado) | Retell AI, Bland AI o equivalente. No construir capacidad de voz propia en fase inicial. Evaluar resultados del piloto antes de profundizar. |

---

## Resumen ejecutivo del anexo

El plan de 18 semanas de la estrategia es ejecutable como **piloto funcional con operación manual instrumentada** (wizard-of-oz). Ese piloto es la ruta correcta para validar el modelo antes de automatizarlo.

La **plataforma técnica completa** —con motor de intención ML, orquestador webhook-driven, auto-enrollment personalizado e integración bidireccional de todos los sistemas— requiere **10-14 meses y un esfuerzo estimado de 17-27 FTE-mes**, con un coste OPEX de año 1 en el rango de **134.000-353.000 €** (excluyendo CAPEX de desarrollo si se externaliza parte).

Las tres decisiones que deben tomarse antes de la semana 4 para no bloquear el programa:

1. **Decisión de CRM:** ¿el CRM actual tiene API suficiente? Si no, ¿se mejora o se migra?
2. **Decisión de BSP:** ¿qué proveedor de WhatsApp Business API se contrata? Iniciar el proceso de aprobación de Meta inmediatamente.
3. **Decisión de equipo:** ¿cuál es la dotación técnica del programa (internos + externos)? Sin 2-3 FTE técnicos dedicados, los proyectos P1-P7 no tienen capacidad de ejecución.

El riesgo mayor no es tecnológico. Es de gestión de programa: mezclar el cronograma del piloto funcional con el de la plataforma técnica, generar expectativas de automatización completa a las 18 semanas, y perder credibilidad interna cuando la integración real lleve más tiempo. Este anexo existe para que esa confusión no ocurra.

---

*Estimaciones elaboradas a partir del análisis del plan de implantación (§15) y de referencias de mercado para proyectos de integración CRM + IA conversacional en educación. Todos los valores de coste y esfuerzo son órdenes de magnitud y deben validarse con presupuestos reales antes de comprometer recursos.*
