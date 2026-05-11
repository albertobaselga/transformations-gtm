# Alba Moreno — Nota Diaria 2026-04-20

## Resumen

Sin leads nuevos para procesar hoy (0 sin procesar, 14 total acumulado). La base de datos permanece estancada en n=14 — muy por debajo del objetivo de 50+. Análisis basado en estadísticas agregadas de los 14 leads históricos. Situación de bloqueo estructural sin movimiento desde al menos el 17/04 (último standup CEO disponible).

## Hallazgos

### Hallazgo 1: Precio como motivo principal — pero con paradoja de sensibilidad

- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-20
- **Dato**: Precio = motivo #1 de no-compra (4/14, 29%). Sin embargo, el 57% de los leads (8/14) tiene sensibilidad al precio **low**. Solo 3/14 (21%) tienen sensibilidad high.
- **Relevancia**: La objeción de precio no refleja incapacidad de pago sino **percepción de valor insuficiente**. Las acciones correctoras deben apuntar a comunicación de valor, no a descuentos.
- **Confianza**: Alta (dato directo de API)

### Hallazgo 2: Competidores fragmentados — sin dominador claro

- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-20
- **Dato**: 5 competidores distintos con 1 mención cada uno: Too Many Flash, Lightbox Academy, Ironhack, ECAM, CPA Salduie. Ninguno supera 1/14 (7%).
- **Relevancia**: No hay un competidor al que se estén perdiendo leads sistemáticamente. El mercado alternativo está fragmentado. Esto dificulta la inteligencia competitiva pero sugiere que 35mm no pierde frente a un adversario dominante — pierde por otras razones.
- **Confianza**: Media (n=14 es insuficiente para conclusiones definitivas; la fragmentación puede ser artefacto del tamaño muestral)

### Hallazgo 3: Animación y Cine concentran las pérdidas

- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-20
- **Dato**: Animación (3/14, 21%) y Cine (3/14, 21%) son las categorías con más leads perdidos. Sonido y TV con 2/14 cada una. Fotografia, Producción y Videojuegos con 1/14 cada una.
- **Relevancia**: Las dos categorías core del catálogo 35mm concentran el 43% de las pérdidas. Puede indicar que la propuesta de valor en estas categorías específicas tiene gaps, o que la competencia directa en estas áreas es más intensa.
- **Confianza**: Media (n pequeña)

### Hallazgo 4: Contenido como 3er motivo de no-compra

- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-20
- **Dato**: Contenido = 2/14 (14%), empatado con formato (2/14) y timing (2/14). Motivo "otro" = 1/14 (7%).
- **Relevancia**: Las objeciones de contenido son señales directas de gap de producto — leads que querían algo que el curso no ofrecía. Cruzar con categorías para identificar qué módulos faltan.
- **Confianza**: Alta (dato directo de API)

## Señales Detectadas

| Señal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Leads totales procesados | 14 | 0 | Lost Leads API |
| Leads sin procesar | 0 | 0 | Lost Leads API |
| Leads última semana | 0 | — | Lost Leads API |
| Motivo principal | Precio (29%) | Sin cambio | Lost Leads API |
| Sensibilidad high | 3/14 (21%) | Sin cambio | Lost Leads API |
| Categoría más perdida | Animación = Cine (21% c/u) | Sin cambio | Lost Leads API |
| Competidores únicos identificados | 5 | Sin cambio | Lost Leads API |

## Bloqueo Estructural

La base de datos lleva días sin recibir nuevos registros. Según standup CEO del 17/04, el objetivo es 50+ leads y FAS-19 (Pablo Navarro) no ha tenido avance. Las opciones planteadas por Elena:
- Formulario simplificado para closers
- Volcado retroactivo de leads históricos

**Sin nuevos datos de entrada, el análisis de patrones está limitado estadísticamente (n=14 es insuficiente para segmentaciones fiables).** Cualquier correlación entre motivo y categoría requiere mínimo n=30-50.

## Verificaciones del día

| Hora | Leads sin procesar | Total | Acción |
|------|-------------------|-------|--------|
| HB1 (mañana) | 0 | 14 | Nota inicial creada, análisis agregado documentado |
| HB2 (recovery) | 0 | 14 | Verificación confirmada — sin cambios |

## Pendiente para mañana

- [ ] Verificar si FAS-19 (Pablo) avanzó — si hay nuevos leads, procesarlos inmediatamente
- [ ] Si n sigue en 14, reiterar alerta a Daniel Ruiz sobre el bloqueo del canal de entrada
- [ ] Cuando n≥20: cruzar motivo precio × categoría para identificar si la percepción de valor-precio varía por vertical
- [ ] Cuando n≥20: cruzar competidor × categoría para mapear competencia por vertical específica
