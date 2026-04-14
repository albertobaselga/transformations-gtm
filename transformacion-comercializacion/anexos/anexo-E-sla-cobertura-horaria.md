# ANEXO E — SLA Operativos y Plan de Cobertura Horaria

**Estrategia de Transformación del Modelo de Comercialización — Northius**
Complemento operativo a §8.2 y §8.5 | Versión 1.0 | Abril 2026

---

## E.1 Propósito

La estrategia principal promete primera respuesta inmediata y alerta comercial en menos de 5 minutos para leads de alta intención (§8.2). Al mismo tiempo, el sistema opera con IA disponible 24/7 pero con un equipo humano de capacidad finita.

Esa tensión, si no se gestiona explícitamente, genera tres problemas concretos:

- **Promesa incumplible**: el lead recibe un mensaje que dice "un asesor te llama ahora" a las 23:30 del sábado y nadie llama.
- **Pérdida de confianza**: el primer momento de quiebre en el funnel suele ser exactamente ese gap entre lo prometido y lo recibido.
- **Infraestructura subestimada**: el modelo asume implícitamente una guardia humana que no está dimensionada ni presupuestada.

Este anexo resuelve esa tensión definiendo qué se promete a cada tipo de lead en cada franja, quién responde, en cuánto tiempo, y qué ocurre si no se cumple. Es un documento operativo, no aspiracional.

---

## E.2 Tabla maestra de SLA por tipo de interacción

| Tipo de interacción | Franja laboral core (L-V 9-21) | Franja laboral extendida (L-V 8-22 + sáb 10-14) | Franja no laboral (resto) | Responsable | Canal principal | Consecuencia si se incumple |
|---|---|---|---|---|---|---|
| Primera respuesta IA | < 30 segundos | < 30 segundos | < 30 segundos | Sistema IA | WhatsApp / Chat web | Log de incidencia técnica; revisión en monitorización |
| Alerta interna de alta intención | < 5 minutos | < 5 minutos | < 5 minutos | Sistema (push CRM) | Notificación comercial | Escalado automático a supervisor de guardia |
| Primera respuesta humana (alta intención) | < 5 minutos | < 10 minutos | No garantizada en el momento; compromiso de callback < 2 horas desde apertura de siguiente turno | Comercial de guardia / turno | Llamada o WhatsApp humano | Reasignación automática al siguiente comercial disponible |
| Primera respuesta humana (intención media) | < 30 minutos | < 60 minutos | IA gestiona; humano retoma al inicio del siguiente turno | Comercial asignado | WhatsApp / Llamada | Notificación a responsable de turno |
| Callback solicitado explícitamente | < 15 minutos en horario core | < 20 minutos en horario extendido | Programado para primera hora del siguiente turno; confirmación automática por IA | Comercial asignado | Llamada saliente | Registro de incumplimiento; CSAT automático al lead |
| Rescate de abandono de matrícula | < 30 minutos | < 45 minutos | IA contiene y ofrece asistencia; humano actúa en primera hora del turno siguiente | IA + Comercial | WhatsApp / Email | Pérdida de conversión trazada; revisión semanal |
| Respuesta a objeción económica | Durante la misma sesión si hay humano disponible | Sesión actual o < 1 hora | IA gestiona opciones básicas (becas, financiación, cuotas); humano cierra en turno siguiente | IA (primera) + Comercial (cierre) | WhatsApp / Chat | Paso automático a nurturing económico con seguimiento |
| Alerta alta intención fuera de horario | — | — | Notificación push a comercial de guardia (si existe); IA contiene; callback garantizado < 2 h desde apertura de turno | IA + Guardia (si activa) | Push + WhatsApp | Revisión de protocolo de guardia; escalado a responsable comercial |

**Notas a la tabla:**
- "Alta intención" se define operativamente como: solicitud de precio, consulta de inicio o plazas, inicio o abandono de matrícula, solicitud explícita de callback, o score de intención > umbral definido en el motor (parámetro configurable por programa).
- Los SLA de respuesta humana se miden desde que el sistema emite la alerta interna, no desde que el lead escribe.
- "Mismo turno" equivale a la franja activa en el momento de la interacción.

---

## E.3 Definición de franjas horarias

### Franjas operativas

| Franja | Horario | Cobertura humana |
|---|---|---|
| **Laboral core** | Lunes a viernes, 09:00 – 21:00 | Equipo comercial completo en turno |
| **Laboral extendido** | Lunes a viernes, 08:00 – 22:00 + Sábados, 10:00 – 14:00 | Equipo reducido o guardia rotativa |
| **No laboral** | Resto de horas: L-V 22:00 – 08:00 + Sábados 14:00 – 24:00 + Domingos completos + festivos | Solo IA activa; guardia humana selectiva según volumen |

### Justificación basada en patrones de leads educativos en España

Los datos de tráfico y generación de leads en formación superior y postgrado en España muestran patrones consistentes:

- **Pico matutino**: 10:00 – 13:00, especialmente lunes y martes. Leads de alta intención generados desde contexto laboral (información buscada durante jornada).
- **Pico vespertino principal**: 18:00 – 21:00, de lunes a jueves. Mayor concentración de leads con intención de compra (comparación activa, inicio de enrollment).
- **Domingo tarde**: 17:00 – 22:00. Segundo pico en volumen total; el lead lleva el fin de semana madurando y actúa antes de la semana laboral. Es la franja no laboral con mayor potencial y, actualmente, menor cobertura.
- **Sábado mañana**: 10:00 – 13:00. Volumen moderado pero tasa de conversión elevada (lead con tiempo disponible y decisión tomada).
- **Madrugada (00:00 – 07:00)**: volumen bajo, excepto en campañas de cierre y promociones con fecha límite.

**Implicación operativa**: la franja no laboral de mayor riesgo es el domingo tarde, no la madrugada. Ese es el hueco que más impacto tiene en conversión y donde el modelo de guardia selectiva debe priorizarse.

---

## E.4 Modelo de handoff IA ↔ humano

El sistema opera con tres patrones de handoff. Cada uno aplica según la señal detectada y la franja activa.

### Patrón 1 — Handoff inmediato

**Definición**: la IA detecta una señal crítica y transfiere al humano en tiempo real, dentro de la misma conversación activa.

**Cuándo aplica**:
- El lead declara intención de matrícula o pago dentro de la sesión.
- Score de intención supera umbral crítico durante conversación activa.
- El lead solicita explícitamente hablar con una persona.
- Detección de objeción de precio que no puede resolverse con parámetros automáticos.
- Conversación con señales de frustración o abandono inminente.

**Mecanismo**:
1. IA emite alerta push al comercial de guardia o turno.
2. IA mantiene la conversación activa con mensaje puente: "Estoy conectando con un asesor ahora mismo, en un momento te atiende."
3. El comercial recibe contexto completo (historial, señal detectada, score) en el CRM.
4. Si el comercial no responde en SLA definido, la alerta sube al siguiente nivel (supervisor de guardia).

**Condición de activación**: solo disponible en franja laboral core y extendida, o cuando hay guardia humana activa.

### Patrón 2 — Handoff diferido

**Definición**: la IA gestiona la conversación completa y el humano toma el contexto al inicio del siguiente turno activo.

**Cuándo aplica**:
- Franja no laboral sin guardia humana activa.
- Intención media o baja que no justifica activar guardia.
- Lead que no requiere respuesta inmediata (exploración, consulta informativa).
- Callback solicitado fuera de horario.

**Mecanismo**:
1. IA gestiona la conversación hasta su cierre natural.
2. IA registra resumen estructurado en CRM: motivo de contacto, señales detectadas, acción pendiente, franja prometida para callback.
3. IA confirma al lead: "Un asesor te contactará mañana antes de las [hora concreta], te envío una confirmación."
4. Al inicio del siguiente turno, el sistema genera una lista priorizada de acciones pendientes para el equipo comercial.
5. El comercial asignado actúa sobre esa lista dentro del SLA comprometido.

**Condición de activación**: siempre disponible como fallback cuando el handoff inmediato no es posible.

### Patrón 3 — Handoff condicional

**Definición**: la IA intenta resolver de forma autónoma y solo escala si no avanza después de N intentos o si el lead activa una señal explícita.

**Cuándo aplica**:
- Objeciones de precio dentro de parámetros configurables (beca disponible, cuota adaptable, financiación activable).
- Rescate de abandono de matrícula cuando el bloqueo es técnico o informativo, no emocional.
- Dudas sobre programa, modalidad o fechas que la IA puede resolver con información actualizada.

**Mecanismo**:
1. IA intenta resolver con sus recursos (información, opciones económicas, FAQ).
2. Si el lead responde positivamente, el handoff no se activa.
3. Si el lead no avanza después de 2 intercambios, o expresa frustración, o activa señal de alta intención, se transita a Patrón 1 (si hay humano disponible) o Patrón 2 (si no lo hay).
4. El umbral de escalado es configurable por tipo de programa y franja.

---

## E.5 Promesa hacia el lead — qué le decimos exactamente

La promesa que el sistema hace al lead debe ser siempre cumplible. Una promesa incumplida en el primer contacto destruye más confianza que no haber hecho ninguna promesa.

### Mensajes según franja y tipo de interacción

| Situación | Franja laboral core | Franja laboral extendida | Franja no laboral |
|---|---|---|---|
| Primer contacto general | "Estamos aquí, te respondo ahora." (IA inmediata) | "Estamos aquí, te respondo ahora." (IA inmediata) | "Estoy aquí para ayudarte. Soy el asistente de [Marca]." (IA, identificación transparente) |
| Alta intención detectada | "Voy a conectarte con un asesor en este momento." | "Voy a avisar a un asesor; te contacta en menos de 10 minutos." | "Acabo de registrar tu solicitud. Un asesor humano te contactará mañana antes de las [hora], ¿te parece bien?" |
| Callback solicitado | "Te llamamos en menos de 15 minutos." | "Te llamamos en menos de 20 minutos." | "Te llamamos mañana a primera hora. ¿A qué número y entre qué horas te va mejor?" |
| Abandono de matrícula | "He visto que has interrumpido el proceso. ¿Puedo ayudarte a continuarlo ahora?" (IA) + escalado humano si no responde | Igual + escalado en horario extendido | IA gestiona; "Si prefieres, un asesor te ayuda mañana a terminar el proceso." |
| Objeción económica | IA presenta opciones; si no cierra: "Te pongo con un asesor que puede buscar la mejor opción para tu caso." | Igual | "Entiendo que el precio es un factor importante. Mañana un asesor revisa contigo las opciones de beca y financiación disponibles. ¿Te aviso a qué hora?" |

**Regla de oro**: nunca prometer un humano en tiempo real si no hay humano disponible. La IA se identifica siempre como asistente. El compromiso humano se hace con hora concreta, no con vaguedades.

---

## E.6 Capacidad comercial requerida — cálculo ilustrativo

### Supuestos del modelo

- **Volumen diario de leads de alta intención**: 30 leads/día en fase de escala (supuesto basado en conversión media del 15% sobre captación total estimada de 200 leads/día en un escenario de régimen estable).
- **Distribución por franja**: 60% en horario core (18 leads), 25% en horario extendido (7-8 leads), 15% en franja no laboral (4-5 leads).
- **Tiempo de atención por lead de alta intención**: 20-30 minutos incluyendo preparación de contexto, llamada y registro.
- **Tasa de conversión inmediata**: no todos los leads de alta intención requieren contacto en el mismo minuto; se estima que el 40% requiere intervención urgente (<5 min).

### Estimación de capacidad necesaria

| Franja | Leads alta intención/día | Leads urgentes/día | Tiempo disponible en franja | Comerciales necesarios |
|---|---|---|---|---|
| Laboral core (L-V 9-21, 12h) | 18 | 7 | 12 h por comercial | 1-2 comerciales en turno (con picos cubiertos) |
| Laboral extendido (L-V 20-22 + sáb 10-14) | 8 | 3 | 4 h por sesión | 1 comercial de guardia rotativa |
| No laboral (domingos tarde, principalmente) | 5 | 2 | Variable | Guardia selectiva: 1 comercial domingos 17-22h en fase madura del modelo |

**Nota importante**: estos números son ilustrativos y deben calibrarse con datos reales de los primeros 60-90 días de operación del piloto. El modelo es sensible al volumen total de leads y a la definición operativa de "alta intención" (umbral del motor de intención).

### Coste de la guardia

La guardia no laboral no puede activarse desde el día 1. Requiere:
1. Datos reales de volumen y conversión por franja (mínimo 4-6 semanas de piloto).
2. Decisión de si la guardia es interna (comercial rotativo con plus de guardia) o externa (equipo especializado en cierre de enrollment).
3. Umbral mínimo de rentabilidad: el margen esperado de los leads convertidos en franja no laboral debe superar el coste de la guardia.

---

## E.7 Árbol de escalado — situaciones críticas

### Situación 1: Lead de alta intención llega fuera de horario comercial

```
Lead activa señal de alta intención en franja no laboral
    │
    ▼
IA inicia conversación inmediata (Patrón 3: condicional)
    │
    ├─► Lead acepta callback para siguiente turno
    │       → IA confirma hora concreta → Registro en CRM → Cola prioritaria para apertura de turno
    │
    ├─► Lead requiere respuesta urgente / no acepta espera
    │       → IA notifica a comercial de guardia (si activa)
    │           ├─► Guardia responde en SLA → Handoff inmediato
    │           └─► Guardia no responde en 10 min → Notificación a responsable comercial
    │                   → IA ofrece alternativa: "¿Puedo enviarte información detallada ahora
    │                     y confirmarte cita para primera hora?"
    │
    └─► Lead abandona sin interactuar
            → Registro de abandono → Acción prioritaria en apertura de turno siguiente
```

### Situación 2: Comercial de guardia no responde dentro del SLA

```
Alerta emitida → SLA transcurrido sin respuesta del comercial
    │
    ▼
Sistema reasigna alerta al siguiente comercial disponible en lista de guardia
    │
    ├─► Segundo comercial responde → Handoff con contexto completo
    │
    └─► Segundo comercial tampoco responde en 5 minutos adicionales
            → Alerta push a responsable comercial (supervisor)
            → IA mantiene conversación activa con mensaje de contención
            → Registro de incidencia SLA para revisión en reunión diaria
```

### Situación 3: Bloqueo técnico en auto-enrollment fuera de horario (ej. 23:00)

```
Lead inicia enrollment → Error técnico en plataforma
    │
    ▼
IA detecta abandono de flujo de enrollment
    │
    ├─► IA identifica si el bloqueo es informativo (falta documentación, duda sobre
    │     modalidad) → IA resuelve o programa callback
    │
    └─► IA detecta error técnico (pago fallido, sesión caída, error de sistema)
            → IA comunica: "Ha habido un problema técnico. Tu progreso está guardado.
              Un asesor te contacta mañana para ayudarte a completarlo."
            → Ticket automático a equipo técnico con prioridad alta
            → Registro en CRM con flag "bloqueo técnico enrollment"
            → Cola prioritaria para primera hora del turno siguiente
            → Si el lead tiene reserva con pago parcial: notificación inmediata
              a responsable financiero (independientemente del horario)
```

### Situación 4: Rescate económico urgente en sábado

```
Lead activa señal de objeción de precio en sábado (cualquier franja)
    │
    ├─► Sábado 10:00-14:00 (laboral extendido)
    │       → IA presenta opciones (beca, cuota, financiación)
    │       → Si no avanza: handoff a comercial de guardia de sábado
    │       → Comercial aplica propuesta económica dentro de parámetros autorizados
    │
    └─► Sábado 14:00-24:00 (no laboral)
            → IA presenta opciones automáticas disponibles
            → Si el lead acepta beca/cuota disponible: proceso avanza por auto-enrollment
            → Si el lead requiere propuesta fuera de parámetros estándar:
                → IA: "Puedo asegurarte que un asesor revisa tu caso el lunes y tiene
                  autorización para buscar la mejor opción. ¿Te reservo una cita?"
            → No se hace promesa de descuento sin autorización humana
```

---

## E.8 Rol de la voz IA en franjas no laborables

La voz IA (agente conversacional de voz) es la herramienta que permite cobertura real en franjas donde el comercial humano no está disponible. Su uso incorrecto puede generar rechazo; su uso correcto puede salvar conversiones de alto valor.

### Principios de uso de la voz IA en franja no laboral

**1. Identificación transparente obligatoria**
La voz IA se identifica siempre como asistente de [Marca], no como persona. La frase de apertura incluye: "Soy el asistente de [Marca], estoy aquí para ayudarte ahora mismo. Si en algún momento prefieres hablar con una persona, te lo organizo para mañana."

**2. Capacidades que la voz IA puede ejercer de forma autónoma**
- Responder dudas sobre el programa, modalidad, fechas de inicio y requisitos.
- Explicar opciones de beca, cuota y financiación dentro de los parámetros configurados.
- Guiar al lead a través del proceso de auto-enrollment asistido.
- Recoger preferencia de horario y datos para el callback humano.
- Gestionar objeciones informativas (no emocionales ni de precio fuera de parámetros).

**3. Capacidades que la voz IA NO ejerce de forma autónoma**
- Ofrecer descuentos no parametrizados o propuestas económicas fuera de rango autorizado.
- Comprometerse a condiciones especiales de acceso, fechas personalizadas o reservas sin sistema.
- Simular una conversación humana si el lead pregunta directamente si está hablando con una persona.

**4. Registro completo de conversación**
Toda conversación con la voz IA en franja no laboral se transcribe y almacena en el CRM con:
- Resumen estructurado de la conversación.
- Señales de intención detectadas.
- Acción pendiente para el turno siguiente.
- Prioridad asignada (alta / media / baja).

**5. Agendado de humano para franja siguiente**
Si el lead no convierte de forma autónoma, la voz IA termina siempre con un compromiso concreto: "Te confirmo que [Nombre de asesor o rol] te llama mañana entre [hora] y [hora]. ¿Te va bien ese horario?" El lead recibe confirmación por WhatsApp inmediatamente.

---

## E.9 KPIs de cumplimiento SLA

| KPI | Definición | Objetivo Fase 2 (piloto) | Objetivo Fase 5 (escala) | Frecuencia de medición |
|---|---|---|---|---|
| % SLA primera respuesta IA cumplido | Respuestas IA en < 30 seg / total interacciones | > 99% | > 99,5% | Diaria |
| % SLA alerta interna alta intención cumplido | Alertas emitidas en < 5 min / total leads alta intención | > 95% | > 98% | Diaria |
| % SLA respuesta humana cumplido (core) | Contactos humanos en SLA / total leads alta intención en franja core | > 80% | > 90% | Diaria |
| % SLA callback cumplido | Callbacks realizados en franja comprometida / total callbacks solicitados | > 85% | > 92% | Diaria |
| Tiempo medio de handoff IA → humano | Minutos desde alerta hasta primer contacto humano efectivo | < 8 min | < 5 min | Semanal |
| Abandono por espera | Leads que no responden después de mensaje de espera / total en espera | < 15% | < 8% | Semanal |
| CSAT por franja | Puntuación de satisfacción segmentada por franja horaria | > 7/10 todas las franjas | > 8/10 todas las franjas | Mensual |
| Tasa de conversión franja no laboral vs. core | Ratio de conversión en franja no laboral / conversión en franja core | Dato base (no optimizar sin datos) | > 60% del ratio core | Mensual |
| Incidencias SLA escaladas | Número de alertas que suben a supervisor por incumplimiento | < 5% del total | < 2% del total | Semanal |

---

## E.10 Plan de activación — escalado realista del modelo

El SLA de < 5 minutos con humano las 24 horas no es viable el día 1. Este plan establece un escalado que protege la promesa al lead y la operativa del equipo.

### Fase 2 — Piloto (semanas 1-8): solo horario laboral core

**Cobertura**: L-V 09:00 – 21:00 con equipo completo.
**SLA activos**: primera respuesta IA (inmediata, todas las franjas), primera respuesta humana en < 5 min solo en franja core.
**Franja no laboral**: IA gestiona, handoff diferido a apertura de turno siguiente. No se hace promesa de contacto humano inmediato fuera de franja core.
**Aprendizaje esperado**: volumen real por franja, tasa de conversión diferida vs. inmediata, señales de alta intención en franja no laboral.

### Fase 3 — Horario extendido (semanas 9-16)

**Cobertura añadida**: L-V 08:00 – 22:00 con guardia rotativa (1 comercial por turno de tarde). Sábados 10:00 – 14:00.
**Requisito de activación**: datos de Fase 2 confirman volumen y conversión que justifican el coste de la guardia.
**SLA activos**: primera respuesta humana en < 10 min en franja extendida. Callback en < 20 min.
**Voz IA**: activada en franja no laboral como contención y captación de contexto.

### Fase 5 — Cobertura no laboral selectiva (mes 5 en adelante)

**Cobertura añadida**: guardia humana selectiva en domingos tarde (17:00 – 22:00), que es el pico no laboral de mayor conversión.
**Requisito de activación**: volumen en domingo tarde supera umbral de rentabilidad definido en Fase 3.
**Voz IA**: operativa como primera línea en toda franja no laboral con capacidad completa de auto-enrollment asistido.
**Guardia festivos**: evaluación caso a caso según calendario de matrículas y campañas activas.

---

## E.11 Lo que NO se promete — honestidad operativa

Este punto es tan importante como los SLA. El sistema no puede prometer lo que no puede cumplir.

**No se promete**:
- Cierre humano a las 3 de la madrugada en ninguna fase del modelo.
- Respuesta humana inmediata en franja no laboral antes de que la guardia selectiva esté activada (Fase 5).
- Descuentos fuera de parámetros autorizados, aunque el lead presione.
- Resolución técnica de errores de enrollment en el momento si el equipo técnico no está disponible.

**Lo que sí se garantiza siempre, desde el día 1**:
- Respuesta IA inmediata en cualquier franja, cualquier día, cualquier canal activo.
- Registro completo de la conversación y contexto disponible para el comercial en su próximo turno.
- Compromiso de callback con hora concreta cuando hay intención de compra fuera de horario.
- Transparencia sobre quién responde: la IA se identifica como asistente, no se hace pasar por humano.
- Opciones de auto-enrollment disponibles 24/7 para quien quiera avanzar de forma autónoma.

**Comunicación interna obligatoria**: el equipo comercial debe conocer exactamente qué ha prometido la IA antes de su turno. La lista de acciones pendientes que recibe al inicio de cada turno incluye siempre la hora comprometida con el lead. Incumplir esa hora concreta es la violación de SLA más dañina para la conversión.

---

*Fin del Anexo E. Este documento debe revisarse al completar cada fase del plan de implantación y actualizarse con los datos reales de cumplimiento de SLA.*

**Documentos relacionados**: Estrategia de Transformación §8.2 (Estado 0 — Entrada y normalización), §8.5 (Estado 3 — Activación), §14 (Gobierno operativo), §15 (Plan de implantación).
