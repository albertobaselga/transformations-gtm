# Alba Moreno — Nota Diaria [2026-04-13]

## Resumen

Lunes W16 (real). Cola vacía — 0 leads sin procesar. Total BD: 14 (sin cambios desde W15). Standup W16 D1 publicado por Elena (18:00 aprox.) — leído e integrado. Lectura de nota de Iker (analyst-competitors) completada. F6 confirmada como frágil en el tracker oficial — 0 nuevos leads, FAS-19 pendiente de Pablo. Señal crítica de Noa: `curso IA video` en pico histórico (Trends 100) — ventana first-mover abierta que puede modificar el perfil de futuros leads.

## Estado de la cola Lost Leads

| Métrica | Valor |
|---------|-------|
| Leads totales en BD | 14 |
| Leads procesados | 14 (100%) |
| Leads sin procesar | 0 |
| Última ingesta | W15 (heartbeats 2026-04-09/10) |
| Objetivo significancia estadística | 50+ leads |
| Gap hasta objetivo | -36 leads |

## Hallazgos

### Hallazgo 1: Sin nuevos datos — baseline W15 se mantiene
- **Fuente**: `GET http://localhost:3200/api/leads?unprocessed=true` — 2026-04-13
- **Dato**: 0 leads sin procesar. Total en BD: 14. Sin ingestas desde W15.
- **Relevancia**: Los patrones de W15 siguen siendo la única base: precio motivo #1 (28,6%), competencia fragmentada (5 únicos), animación+cine cluster principal (42,9%).
- **Confianza**: Alta

### Hallazgo 2 (cruce intel IC): SAE sin B2B/FUNDAE estructurado — ventana de diferenciación confirmada
- **Fuente**: Nota Iker Molina (analyst-competitors) — 2026-04-13
- **Dato**: Iker confirma que SAE Institute no tiene oferta B2B/FUNDAE estructurada detectable para ningún programa. El acuerdo SAE×UDIMA cubre solo 4 másteres de música. El Máster Cine de SAE no incluye IA generativa curricular, ni prácticas en productoras, ni canal B2B bonificable.
- **Relevancia para no-compra**: El lead #2, #5 y #10 (animación, sensibilidad alta a precio) perdieron con competidores que ganaron en precio. SAE no es el competidor ganador en esos leads — pero confirma que el espacio B2B FUNDAE está vacío en el sector. Si 35mm activa FUNDAE (D4 pendiente de Elena), los futuros leads de animación con precio-sensitivity alta tendrán una respuesta estructural.
- **Confianza**: Alta (validado por Iker con fuentes directas)

### Hallazgo 3 (cruce intel IC): Platzi/Udemy confirman demanda sin cubrir el nicho premium
- **Fuente**: Nota Iker Molina (analyst-competitors) — 2026-04-13
- **Dato**: Platzi (~€275/año todo-acceso, 2h por curso) y Udemy (~€9,99-24,99 por curso) tienen catálogo de IA audiovisual en español pero operan en segmento masivo, sin prácticas, sin certificación, sin profundidad profesional.
- **Relevancia para no-compra**: Ninguno de los 14 leads actuales cita Platzi o Udemy como competidor_elegido — coherente con el perfil de leads que buscan formación profesional (no autodidacta). Si en futuros leads aparecen Platzi/Udemy como competidor, sería una señal de que el segmento de leads está cambiando (más sensibilidad a precio extrema). Los 5 competidores actuales (Too Many Flash, Lightbox, Ironhack, ECAM, CPA Salduie) son todos de segmento profesional/presencial.
- **Confianza**: Alta

## Señales a monitorizar esta semana (W16)

| Evento | Fecha | Relevancia para no-compra |
|--------|-------|--------------------------|
| Open Day CES "The Next You Vol II" | 18/04 | Si activan landing de matrícula/precios, podría generar leads perdidos por formato/competidor |
| NAB 2026 | 18-22/04 | Señales de herramientas IA nuevas que pueden aparecer como "contenido no disponible" |
| SAE Institute | Monitorizar | Sin B2B/FUNDAE — baja probabilidad de aparecer como competidor en segmento leads actuales |
| Decisión D3 (CRM/prospects) | Esta semana | Bloqueador para cruce leads vs targets BOE |
| Decisión D4 (FUNDAE) | Esta semana | Desbloquea estrategia de canal para neutralizar objeción precio en animación |

## Contexto standup W16 D1 (2026-04-13)

Puntos del standup relevantes para Lost Leads:

- **F6 confirmada fragil en tracker oficial**: "5/6 fuentes activas. F6 (Lost Leads) fragil — 14 leads, 0 nuevos W16, objetivo 50+". Sin volumen no hay significancia estadística — es el bloqueo principal del frente.
- **FAS-19 sigue pendiente**: Pablo Navarro tiene asignada la mejora operativa (arranque persistente + healthcheck + runbook). Sin este fix el API sigue sin garantías de disponibilidad continua para recibir nuevos feeds.
- **Señal Noa — `curso IA video` pico histórico 100 en Trends**: Por primera vez supera a Blender. Relevancia para futuros leads: la demanda de formación IA audiovisual está en máximo. Si 35mm activa el posicionamiento editorial (Lucía), podría generar más leads inbound — y con ello, también más leads perdidos que entrarán en la BD.
- **Contracción SEPE ene-feb 2026** (Marcos+Sofia): Mercado audiovisual contrae en flujo (-14,2% enero, -23,5% febrero), se endurece en exigencia (70-73% artistas). Implicación para no-compra: el argumento de precio puede reforzarse si el candidato percibe menos demanda laboral — pero también refuerza el argumento de diferenciación via IA. Ajuste de narrativa necesario: "el sector se profesionaliza, la IA es tu ventaja competitiva".
- **D1-D4 pendientes**: Ninguna decisión formalizada el 13/04. Elena prioriza esta semana.
- **Instrucción para mañana (W16 D2)**: "Alba: consultar cola lost leads. Sin nuevos leads, el frente no avanza."

## Pendiente

- [ ] Consultar `/api/leads?unprocessed=true` en próximos heartbeats (W16 D2 — 2026-04-14)
- [x] Leer standup W16 D1 (2026-04-13) — integrado
- [ ] Monitorizar FAS-19 (Pablo) — mejora operativa Lost Leads API
- [ ] Pendiente D3 (Elena): acceso CRM — bloqueador para cruce leads vs BOE targets
- [ ] Pendiente D4 (Elena): homologación FUNDAE — solución estructural para leads animación precio-sensitivity alta
- [ ] Vigilar efecto de pico Trends `curso IA video` en volumen de futuros leads (señal Noa)
