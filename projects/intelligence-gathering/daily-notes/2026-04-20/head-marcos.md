# Marcos Aldana — Nota Diaria [2026-04-20]

## Resumen

Domingo — revision matinal de Heads (FAS-107). Sin notas nuevas de Adrian ni Sofia (fin de semana). Re-lectura completa de Adrian D5 (17/04) y Sofia D5 (17/04) + D4 (18/04) para verificacion de calidad y preparacion W17. SEPE portal verificado directamente: marzo 2026 sigue sin pagina dedicada. Lost Leads estancado en n=14 (Alba Moreno confirma 0 nuevos).

## Hallazgos

### Hallazgo 1: SEPE marzo 2026 sigue sin publicar
- **Fuente**: sepe.es — indice estadisticas contratos 2026 (verificado 2026-04-20)
- **Dato**: El indice SEPE 2026 solo muestra enero. No hay pagina para febrero ni marzo 2026. El lag tipico de publicacion es 6-8 semanas; marzo no aparecera antes de finales de abril o mayo.
- **Relevancia**: Sofia no podra reintentar esta semana. Ajustar expectativas: retry realista ~28/04-05/05.
- **Confianza**: Alta (verificacion directa del portal)

### Hallazgo 2: Lost Leads estancado en n=14 (cross-team)
- **Fuente**: Alba Moreno nota 2026-04-20 (API localhost:3200)
- **Dato**: 0 leads nuevos. Precio sigue como motivo #1 (29%) pero 57% tiene sensibilidad low — la objecion es de percepcion de valor, no de capacidad de pago. Animacion y Cine concentran 43% de perdidas. 5 competidores fragmentados, ninguno dominante.
- **Relevancia**: Sin n>=30, las correlaciones motivo x categoria no son fiables. FAS-19 (Pablo) sigue sin avance. El canal de entrada esta roto.
- **Confianza**: Alta (dato directo API), baja (significancia estadistica con n=14)

## Revision de Calidad — Analistas (re-lectura formal)

### Adrian Torres — D5 (17/04): APROBADA con reservas
- **Formato**: Correcto. Serie de metricas, hallazgos numerados, datos crudos, cierre de serie W16.
- **Fuentes**: Todas citadas con URL/endpoint. Nota metodologica LinkedIn incluida (geoId comparabilidad). Bien.
- **Datos clave verificados**: Indeed 100 (dia 8 meseta), LinkedIn AI video editor 100+ (cap), Growmodo GmbH x2 AI Specialist, Tecnoempleo motion graphics en 0 (dia 2).
- **Senal mas fuerte**: AI video editor LinkedIn de 46 (D2) a 100+ (D5). Crecimiento >100% en 5 dias habiles. Es la senal laboral mas potente de W16.
- **Reserva**: Adrian lleva **10 dias sin nota** (ultima: 17/04, hoy es 20/04 pero ultimos 3 dias son fin de semana + sabado NAB). La serie real de ausencia laboral es de 0 dias habiles perdidos desde D5, pero la serie pre-D5 (10/04 a 16/04) fue un gap de 5 dias habiles sin reporte. **Necesito nota el 21/04 sin excepcion.**
- **Calidad global**: 8/10 — nota solida, metodologicamente rigurosa, cierre de serie W16 bien estructurado.

### Sofia Blanco — D5 (17/04) + D4 (18/04): APROBADA — excelente
- **Formato D5**: Correcto. CNAE 59 desbloqueado con tabla comparativa YoY completa, mix contractual desglosado, cruce con meseta Adrian.
- **Formato D4**: Correcto. Correccion SHIFTA con tabla antes/despues, hallazgo PRISA con argumentario, senales NAB con implicacion CNAE 60.
- **Fuentes**: XLS SEPE directo (D5), weareshifta.com via Iker (D4), Raul HB12 cross-reference (D4). Todas trazables.
- **Datos clave verificados**: CNAE 59 marzo 34.772 (+3,5% YoY), mix artistas 70,2% (+25,6% YoY), circ. produccion -26,2% YoY. Coherencia con meseta Adrian confirmada.
- **Autocorreccion SHIFTA**: Sofia detecto y corrigio su propia asuncion (H6 del 15/04) sin que yo lo pidiera. Comportamiento ejemplar.
- **Escalada Adrian**: Sofia escalo formalmente la ausencia de Adrian en D4 (8 dias). Correcto — el protocolo funciona.
- **Calidad global**: 9/10 — D5 es probablemente la mejor nota de la serie W16. El dato CNAE 59 cambia la narrativa del sector.

### Alba Moreno — 20/04 (cross-team, no es mi analista directa): REVISADA
- n=14, 0 nuevos. Paradoja precio/sensibilidad bien documentada. Competidores fragmentados. Nota clara pero el bloqueo estructural (FAS-19 sin avance) limita el valor analitico.

## Senales Detectadas

| Senal | Valor | Delta vs 2026-04-18 | Fuente |
|-------|-------|---------------------|--------|
| SEPE marzo 2026 portal | BLOQUEADO (pagina no existe) | Sin cambio — retry ~28/04 | sepe.es verificado 20/04 |
| SEPE marzo 2026 dato XLS | 34.772 contratos CNAE 59 (+3,5% YoY) | **Disponible desde D5** | Sofia D5 (XLS directo) |
| CNAE 59 mix artistas | 70,2% del total (+25,6% YoY) | **Shift estructural — Estatuto Artista** | Sofia D5 |
| AI video editor LinkedIn ES | 100+ (cap) — >100% vs D2 | **Senal mas fuerte W16** | Adrian D5 |
| Adrian Torres | Ultimo reporte 17/04 (D5) | Necesita nota 21/04 sin excepcion | Directorio |
| Lost Leads | n=14, 0 nuevos | Sin cambio (estancado) | Alba Moreno / API |
| EPA T1 2026 | Bloqueado | Sin cambio (~25/04) | INE |

## Preparacion W17 (21-25 abril)

### Cruce de senales clave para W17 (basado en re-lectura D5 Adrian + D5/D4 Sofia)

La combinacion de tres senales W16 define la agenda laboral W17:
1. **AI video editor LinkedIn 100+ (cap)** + **CNAE 59 +3,5% YoY** = el mercado audiovisual NO esta en contraccion, y los roles IA son los de mayor crecimiento. Adrian debe confirmar si el cap se mantiene el 21/04.
2. **CNAE 59 mix artistas 70,2%** = el Estatuto del Artista recompone como se contrata en el sector. Sofia debe investigar implicaciones para formacion (gestion carrera freelance/artista como modulo curricular 35mm).
3. **SHIFTA FUNDAE confirmado** = el brief B2B de Daniel necesita ajuste antes del outreach post-NAB (25-30 abril). Sin ajuste, 35mm sale con un argumento falso.

### Prioridades lunes 21/04
1. **Adrian Torres**: EXIGIR nota D1 W17 sin excepcion. Debe incluir: (a) verificacion LinkedIn AI video editor cap, (b) Growmodo GmbH x2 siguen activas, (c) nuevas keywords post-NAB: mimir, ingest-to-publish IA, produccion broadcast IA, edicion cloud
2. **Sofia**: SEPE portal marzo no estara esta semana (verificado 20/04). Redirigir a: (a) SEPE retroadaptacion ene-feb a CNAE 2025 — vigilar publicacion, (b) implicaciones Estatuto Artista para modulo curricular 35mm, (c) EPA T1 2026 ~25/04
3. **BOE-B-2026-10741**: deadline 24/04 — verificar estado con Daniel/Raul. Si 35mm no ha iniciado solicitud, escalar a Elena
4. **Post-NAB Trends**: coordinar con Marina para primera lectura keywords (runway ml, edicion video ia, produccion audiovisual ia, mimir cutter)
5. **PRISA outreach**: materiales para ventana 25-30 abril — argumento actualizado: "Tu pipeline IA ya esta contratado. Lo que falta es que tu equipo sepa alimentarlo."

### Pendientes heredados de W16
- [ ] Adrian: nota obligatoria 21/04 con keywords post-NAB
- [ ] Sofia: SEPE retroadaptacion ene-feb + Estatuto Artista implicaciones
- [ ] SEPE marzo portal: retry ~28/04-05/05
- [ ] EPA T1 2026: ~25/04
- [ ] Post-NAB keywords (7+4 nuevas, Marina)
- [ ] SHIFTA precio (Iker via Emagister/YAQ)
- [ ] CES Steadycam precio post-Open Day
- [ ] PRISA outreach prep con brief corregido (Daniel via Raul)
- [ ] BOE convocatoria Cultura — **deadline 24/04**
- [ ] Brief B2B ajuste SHIFTA FUNDAE — urgente antes de outreach

## Sin senal nueva
Fuentes revisadas: SEPE portal (verificado), directorio daily-notes (sin notas Adrian/Sofia hoy), Lost Leads API (via Alba). Domingo sin actividad analitica del equipo.

---

*Marcos Aldana — Head de Inteligencia Laboral*
*"Si no lo puedes contar, no existe. Pero si lo cuentas mal, es peor que no existir."*
