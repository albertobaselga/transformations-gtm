# Alba Moreno — Nota Diaria 2026-04-17

## Resumen

Quinto día consecutivo sin nuevos leads en W16. BD=14, 0 sin procesar, 0 en la última semana. Los agregados son idénticos a ayer y al día anterior. El cuello de botella es operativo (FAS-19, Pablo Navarro), no analítico. Hoy es Viernes de Síntesis W16 y NAB Day 0 — ambos eventos pueden generar actividad la próxima semana.

## Hallazgos

### Hallazgo 1: Estancamiento W16 — día 5, gap operativo sin resolver

- **Fuente**: `http://localhost:3200/api/leads?unprocessed=true` + `/api/stats` (2026-04-17T07:xx)
- **Dato**: 14 leads totales, 0 sin procesar, 0 nuevos en los últimos 7 días. Objetivo semana: 50+ leads. Gap acumulado: -36 leads (72% del objetivo sin cubrir al cierre de W16).
- **Relevancia**: La BD lleva 5 días sin ingestión de nuevos datos. Cualquier patrón que publique hoy para la síntesis W16 tiene base n=14 — estadísticamente frágil. Todo análisis de proporción (precio 28.6%, sensibilidad baja 57.1%) debe reportarse con advertencia de muestra pequeña. El valor analítico aumentará significativamente cuando BD supere 25-30 leads.
- **Confianza**: Alta (dato directo API, fecha extracción verificada)

### Hallazgo 2: Distribución de motivos — precio sigue siendo #1, sin cambio desde semana pasada

- **Fuente**: `/api/stats` Lost Leads BD
- **Dato**: precio=4 (28.6%), competidor=3 (21.4%), contenido=2 (14.3%), formato=2 (14.3%), timing=2 (14.3%), otro=1 (7.1%). Sensibilidad: baja=8 (57.1%), media=3 (21.4%), alta=3 (21.4%).
- **Relevancia**: Con SHIFTA FUNDAE confirmado ayer (triple fuente), el argumento de recuperación para los 4 leads precio ya no puede ser "bonificación exclusiva 35mm". El script del closer debe pivotar a ROI demostrable + prácticas en productora real + formato intensivo (semanas vs 5 meses SHIFTA). Los 3 leads high-sensitivity son los más recuperables con argumento de precio real, pero requieren que D4 (FUNDAE operativo) esté resuelto para tener paridad competitiva mínima.
- **Confianza**: Alta

### Hallazgo 3: NAB Day 0 — potencial de activación de nuevos leads próxima semana

- **Fuente**: Standup Elena 2026-04-16 + datos BD actuales
- **Dato**: NAB 2026 arranca mañana 18/04 (sábado). Cobertura de Iker + Noa + Marina programada para Day 1. Keywords post-NAB programadas para primera lectura ~25-28 abril: `runway ml`, `runway gen 4`, `adobe premiere ia`, `edicion video ia`.
- **Relevancia**: Históricamente, eventos de industria generan búsquedas de formación en la semana posterior. Si la cobertura NAB activa demanda de leads interesados en IA audiovisual, la BD podría recibir ingestión en W17 (21-25 abril). El motivo "contenido" (14.3%, 2 leads) podría aumentar si prospects buscan cursos que incluyan herramientas NAB (Runway, DaVinci 21 con IA nativa). Primera revisión útil post-NAB: lunes 21/04.
- **Confianza**: Media (hipótesis basada en lógica causal, sin datos históricos de conversión post-evento)

### Hallazgo 4: Competidores — SHIFTA ausente de BD, ventana de observación crítica

- **Fuente**: `/api/stats` byCompetitor
- **Dato**: Competidores mencionados (n=3 leads): Too Many Flash, Lightbox Academy, Ironhack, ECAM, CPA Salduie (n=1 cada uno). SHIFTA: 0 menciones.
- **Relevancia**: SHIFTA fue confirmado como bonificable FUNDAE ayer. Es probable que en los próximos leads capturados empiece a aparecer como competidor elegido. La ausencia actual en BD puede reflejar: (a) la BD fue capturada antes de que SHIFTA tuviera presencia notable, o (b) SHIFTA capta un segmento diferente que no llega a cerrar con 35mm. Si SHIFTA aparece en los próximos 3-5 leads, confirmaría que la amenaza competitiva es directa y no solo estructural.
- **Confianza**: Media

## Señales Detectadas

| Señal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Total leads BD | 14 | 0 (día 5 sin movimiento) | Lost Leads API 17/04 |
| Leads sin procesar | 0 | 0 | Lost Leads API 17/04 |
| Leads nuevos últimos 7 días | 0 | 0 | Lost Leads API 17/04 |
| Motivo #1 no-compra | precio (28.6%, n=4) | sin cambio | Lost Leads API |
| Sensibilidad baja (LOW) | 57.1% (8/14) | sin cambio | Lost Leads API |
| Sensibilidad alta (HIGH) | 21.4% (3/14) | sin cambio | Lost Leads API |
| Competidores únicos BD | 5 | sin cambio | Lost Leads API |
| SHIFTA en BD competidores | 0 menciones | sin cambio | Lost Leads API |
| Gap objetivo W16 | -36 leads (72% sin cubrir) | sin cambio | BD vs objetivo 50+ |
| NAB Day 0 | arranca 18/04 | -1 día | Standup Elena 16/04 |

## Input para Síntesis W16

**Estado no-compra W16 (para Daniel / síntesis):**
- Volumen: 14 leads totales, 0 nuevos en W16. Gap objetivo: -36 leads.
- Motivo dominante: precio (28.6%). Sin cambio respecto a W15.
- Novedad crítica W16: SHIFTA FUNDAE confirmado — el argumento de bonificación exclusiva de 35mm queda invalidado. El script de cierre para objeción precio debe pivotar a ROI + prácticas productora + intensidad formato.
- Sensibilidad: mayoría LOW (57.1%) — problema de percepción de valor, no de capacidad económica.
- Competidores: 5 únicos, SHIFTA aún no aparece en BD. Vigilar en W17.
- Advertencia estadística: n=14, toda proporción tiene IC amplio. No tomar decisiones de precio o contenido basadas únicamente en esta muestra.

## Pendiente para mañana

- [ ] Consultar `GET /api/leads?unprocessed=true` — verificar si W17 abre con nuevos leads (lunes 21/04)
- [ ] Si BD supera 20 leads post-NAB, ejecutar cruce categoría de curso × motivo no-compra
- [ ] Monitorizar aparición de SHIFTA como competidor en nuevos leads
- [ ] D4 (FUNDAE operativo): escalar a Daniel si no hay movimiento — es paridad competitiva mínima, no ventaja diferencial
