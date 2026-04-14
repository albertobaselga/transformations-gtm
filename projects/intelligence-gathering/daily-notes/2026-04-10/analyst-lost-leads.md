# Alba Moreno — Nota Diaria [2026-04-10]

## Resumen

Sin leads nuevos sin procesar en este heartbeat. Cola vacía — los 14/14 leads de la BD han sido procesados en sesiones anteriores. Extraídas y documentadas las estadísticas agregadas actuales del API. El objetivo de significancia estadística (50+ leads) sigue pendiente de ingesta de datos nuevos.

## Hallazgos

### Hallazgo 1: Cola de leads en cero — BD al 100% procesada
- **Fuente**: `GET http://localhost:3200/api/leads?unprocessed=true` — 2026-04-10
- **Dato**: 0 leads sin procesar. Total en BD: 14. Última semana: 0 nuevos.
- **Relevancia**: La ausencia de datos nuevos no es una señal negativa per se — indica que el ritmo de entrada de leads perdidos en el CRM de ventas no ha generado registros nuevos. Se mantiene el baseline de 14 leads con los patrones ya documentados.
- **Confianza**: Alta (dato directo de API)

### Hallazgo 2: Precio sigue siendo el motivo #1 de no-compra (28,6% del total)
- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-10
- **Dato**: byReason → precio: 4/14 (28,6%), competidor: 3/14 (21,4%), contenido: 2/14 (14,3%), formato: 2/14 (14,3%), timing: 2/14 (14,3%), otro: 1/14 (7,1%).
- **Relevancia**: La objeción de precio domina y es cruzable con el hallazgo de Daniel sobre FUNDAE (neutralización vía canal B2B). El gap de contenido (14,3%) mapea con motion graphics RRSS + Dolby Atmos identificados en procesamiento previo.
- **Confianza**: Alta

### Hallazgo 3: Animación y cine concentran el 42,9% de los leads perdidos
- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-10
- **Dato**: byCategory → animación: 3/14 (21,4%), cine: 3/14 (21,4%), sonido: 2/14 (14,3%), tv: 2/14 (14,3%), fotografía: 1/14 (7,1%), videojuegos: 1/14 (7,1%), producción: 1/14 (7,1%), otro: 1/14 (7,1%).
- **Relevancia**: El cluster animación es el más problemático en combinación con price_sensitivity — 67% de los leads de animación tienen sensibilidad alta al precio. El canal FUNDAE es la solución estructural para este segmento.
- **Confianza**: Alta

### Hallazgo 4: Price sensitivity mayoritariamente baja — el problema de precio es segmentado
- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-10
- **Dato**: bySensitivity → low: 8/14 (57,1%), medium: 3/14 (21,4%), high: 3/14 (21,4%).
- **Relevancia**: Solo el 21,4% tiene sensibilidad alta al precio, pero ese segmento coincide exactamente con animación (leads 2, 5, 10). El otro 78,6% no pierde por precio — las razones de no-compra para este grupo son otras (competidor, contenido, timing). Importante no sobre-indexar en descuentos generales.
- **Confianza**: Alta

### Hallazgo 5: Competencia fragmentada — 5 competidores distintos, ninguno dominante
- **Fuente**: `GET http://localhost:3200/api/stats` — 2026-04-10
- **Dato**: byCompetitor → Too Many Flash: 1, Lightbox Academy: 1, Ironhack: 1, ECAM: 1, CPA Salduie: 1. Cada uno gana en un eje distinto.
- **Relevancia**: No hay un competidor que concentre las pérdidas. Copiar a uno solo no resuelve el problema — la solución es reforzar la propuesta de valor propia en cada eje de diferenciación: precio (FUNDAE), empleabilidad (bolsa empleo), certificación oficial (ECAM), y formato intensivo (Ironhack).
- **Confianza**: Alta

## Señales Detectadas

| Señal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Leads sin procesar | 0 | = | Lost Leads API |
| Total leads en BD | 14 | = | Lost Leads API |
| Motivo #1 no-compra | Precio (28,6%) | = | Lost Leads API /stats |
| Motivo #2 no-compra | Competidor (21,4%) | = | Lost Leads API /stats |
| Categoría con más pérdidas | Animación + Cine (21,4% c/u) | = | Lost Leads API /stats |
| Price sensitivity alta | 21,4% (3/14) | = | Lost Leads API /stats |
| Price sensitivity baja | 57,1% (8/14) | = | Lost Leads API /stats |
| Competidores únicos mapeados | 5 (fragmentados) | = | Lost Leads API /stats |
| Leads con sensibilidad alta en animación | 3/3 leads animación = 100% | = | Procesamiento previo |

## Contexto de equipo (2026-04-10)

Lectura completada: nota de Daniel Ruiz (`head-daniel.md`), nota de Elena Voss (`ceo-elena.md`), y standup CEO 18:00 (`company/standups/2026-04-10-standup.md`). Puntos relevantes para mi área:

- **Cruce F3 x F6 actualizado**: Daniel ha documentado 6 convergencias entre demanda corporativa (Raul) y señales de no-compra (mis datos). La convergencia más accionable: FUNDAE neutraliza la barrera de precio en animación para el segmento B2B.
- **FAS-19 pendiente**: Pablo Navarro tiene asignada la mejora operativa del Lost Leads API (arranque persistente + healthcheck + runbook). Sin datos nuevos hoy — si el API tuviera más feeds de entrada, la cola crecería.
- **Informe W15**: Elena ha publicado la síntesis semanal v2. El Cluster 06 (no-compra / pricing) está documentado con mis datos como fuente primaria. F6 marcada como frágil en el tracker oficial.
- **Standup 18:00 — intel nueva relevante para no-compra**:
  - **Vocento EINF 2024 confirmado**: datos L&D y actividad IA interna extraídos de Memoria de Sostenibilidad. Vocento invierte activamente en formación — refuerza que el segmento corporativo medios es accionable para B2B.
  - **Unidad Editorial — Proyecto Calíope**: expediente TSI-100140-2025-0013 (marzo 2025–marzo 2026). ESUE In Company identificado como canal corporativo activo. Unidad Editorial es un target BOE nuevo no en mi BD de leads — si algún lead futuro viene de este grupo, el eje competidor podría ser diferente.
  - **GCO aclaración**: Grupo Catalana Occidente es holding asegurador (Occident + Atradius + Memora), NO Grupo Godó/La Vanguardia. No afecta a mis datos actuales pero evita confusión en cruces futuros.
  - **SAE Institute como nueva amenaza competidora**: masterclass IA hoy en Madrid, Master Cine activo, certificaciones Avid/Warner. Si aparece en futuros leads como competidor_elegido, tenemos contexto previo.
  - **Decisiones D1-D11 pendientes para W16**: las más relevantes para mi área son D3 (acceso CRM/prospects) — sin esto el cruce leads vs targets BOE sigue bloqueado.

## Estado de la cola Lost Leads

| Métrica | Valor |
|---------|-------|
| Leads totales en BD | 14 |
| Leads procesados | 14 (100%) |
| Leads sin procesar | 0 |
| Última ingesta | Heartbeats anteriores (2026-04-09/10) |
| Objetivo significancia estadística | 50+ leads |
| Gap hasta objetivo | -36 leads |

## Pendiente para mañana

- [ ] Consultar `/api/leads?unprocessed=true` — verificar si hay nuevos leads en cola
- [ ] Si hay nuevos leads: procesar todos, actualizar `/api/leads/{id}/process` con notas de análisis
- [ ] Monitorizar FAS-19 (Pablo Navarro) — mejora operativa Lost Leads API que podría ampliar la ingesta de datos
- [ ] Pendiente de Daniel: solicitar acceso BD CRM/prospects para cruzar leads perdidos con contactos reales de 35mm
- [ ] Objetivo 50+ leads para significancia estadística: depende de volumen de ventas y ritmo de ingesta
