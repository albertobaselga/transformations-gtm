# Alba Moreno — Nota Diaria [2026-04-09]
## Resumen
Procesados 14/14 leads del lote inicial de Lost Leads y cerrada la cola de `unprocessed` a 0. El motivo de no-compra dominante del periodo es `precio` (4/14; 28.6%), pero la senal accionable mas fuerte hoy esta concentrada en animacion: 2 de 3 leads del area presentan `price_sensitivity=high` (67%).

La API `http://localhost:3200` estaba caida al inicio del heartbeat (`curl` devolvio `connection refused`) y solo quedo operativa tras arranque manual con `node /home/abf/gtm-ia/projects/lost-leads-tool/api/server.mjs`. Hay datos y servicio funcional, pero no disponibilidad persistente.

## Hallazgos
### Hallazgo 1: Barrera de precio concentrada en animacion
- **Fuente**: `http://localhost:3200/api/stats` consultado el 2026-04-09 23:22:33 CEST; leads `2`, `5` y `10` procesados via `PATCH /api/leads/{id}/process` en este heartbeat.
- **Dato**: Animacion concentra 3 leads del periodo; 2 de 3 tienen `price_sensitivity=high` (67%) y 2 de esos 3 se pierden por `precio` (`id=2`, `id=5`). Un tercer lead de animacion (`id=10`) no cae por precio sino por gap de contenido orientado a motion graphics para RRSS.
- **Relevancia**: No es una objecion difusa de marca; es una friccion localizada en una categoria concreta. Si 35mm no revisa pricing o no refuerza el diferencial de valor en animacion, seguira perdiendo conversiones en ese tramo.
- **Confianza**: Alta

### Hallazgo 2: Los gaps de producto detectados son de empleabilidad actual, no teoricos
- **Fuente**: lead `10` (`Curso de Animacion 2D`) y lead `9` (`Curso de Sonido para Cine`), ambos procesados hoy desde `http://localhost:3200/api/leads/{id}`.
- **Dato**: 2 de 14 leads (14.3%) rechazan por `contenido`, pero los dos mencionan carencias muy concretas y alineadas con mercado actual: `motion graphics para redes sociales y publicidad` (`id=10`) y `sonido inmersivo / Dolby Atmos` (`id=9`).
- **Relevancia**: La senal no apunta a “querer mas temario” en abstracto; apunta a dos huecos de empleabilidad contemporanea. Esto sirve para priorizar actualizacion curricular con foco en salida laboral, no en expansion generalista del programa.
- **Confianza**: Alta

### Hallazgo 3: La operativa de extraccion sigue siendo fragil
- **Fuente**: `curl -i --max-time 5 http://localhost:3200/api/leads?unprocessed=true` y `curl -i --max-time 5 http://localhost:3200/api/stats` al inicio del heartbeat devolvieron `connection refused`; `node /home/abf/gtm-ia/projects/lost-leads-tool/api/server.mjs` dejo la API disponible; `http://localhost:3200/api/stats` devuelve `recentWeek=1`.
- **Dato**: La incidencia no era ausencia de datos ni fallo de codigo visible: el servicio arranca correctamente de forma manual, pero no habia listener en `:3200`. Ademas, solo 1 de los 14 leads del lote cae dentro de los ultimos 7 dias.
- **Relevancia**: Hoy he podido procesar el lote semilla, pero la inteligencia diaria no es robusta mientras la API dependa de arranque manual y la ingesta desde CRM no genere volumen semanal consistente.
- **Confianza**: Alta

## Nuevos Leads Procesados
- **Total procesado hoy**: 14 leads
- **Cola restante**: 0 leads (`GET /api/leads?unprocessed=true`)
- **Periodo del lote**: 2026-03-08 a 2026-04-02
- **Leads con interes residual alto (`>=4`)**: 5

## Top Motivos del Periodo
| Motivo | Leads | % periodo | Referencia |
|-------|-------|------------|------------|
| precio | 4 | 28.6% | `GET /api/stats` |
| competidor | 3 | 21.4% | `GET /api/stats` |
| contenido | 2 | 14.3% | `GET /api/stats` |
| formato | 2 | 14.3% | `GET /api/stats` |
| timing | 2 | 14.3% | `GET /api/stats` |
| otro | 1 | 7.1% | `GET /api/stats` |

## Competidores Mencionados
| Competidor | Leads | Referencias exactas | Lectura |
|------------|-------|---------------------|---------|
| Too Many Flash | 1 | `lead id=4` | Gana por precio y mejor valor percibido |
| Lightbox Academy | 1 | `lead id=5` | Gana por diferencial de precio directo (`-700 EUR`) |
| ECAM | 1 | `lead id=6` | Gana por networking presencial e industria |
| Ironhack | 1 | `lead id=7` | Gana por bootcamp, programacion y bolsa de empleo |
| CPA Salduie | 1 | `lead id=8` | Gana por FP oficial homologada |

## Senales Detectadas
| Senal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Lote procesado | 14/14 leads; `unprocessed=0` | N/A (primer lote operativo) | `GET /api/stats`, `GET /api/leads?unprocessed=true` |
| Barrera precio animacion | 2/3 leads con `price_sensitivity=high` (67%) | N/A | leads `2`, `5`, `10` |
| Gaps de temario con impacto de empleabilidad | 2 leads (`motion graphics RRSS`, `Dolby Atmos`) | N/A | leads `10`, `9` |
| Competidores unicos mencionados | 5 competidores en 5 leads | N/A | leads `4`, `5`, `6`, `7`, `8` |
| Recontacto de alta intencion | 5 leads con interes residual `>=4`; 3 con trigger temporal/condicional explicito | N/A | leads `3`, `11`, `12`, `14`, `2` |
| Frescura de ingesta | `recentWeek=1` sobre 14 leads | N/A | `GET /api/stats` |
| Disponibilidad API | Caida al inicio; operativa solo tras arranque manual | N/A | `curl` + `server.mjs` |

## Clasificacion P1-P5 del lote procesado
| Area | Leads primarios | Referencia |
|------|-----------------|------------|
| P1 — IA Generativa Audiovisual | 0 | Sin menciones explicitas de IA en el lote |
| P2 — Cine y Ficcion | 3 | leads `6`, `11`, `13` |
| P3 — Sonido Profesional | 2 | leads `3`, `9` |
| P4 — Videojuegos | 1 | lead `7` |
| P5 — Produccion para RRSS / TV / Produccion | 3 | leads `8`, `12`, `14` |
| PX — Sin clasificar directo | 5 | leads `2`, `4`, `5`, `10`, `15` |

Nota: el lead `10` queda en `PX` como primaria por categoria `animacion`, pero aporta senal secundaria a `P5` por mencionar `motion graphics para redes sociales y publicidad`.

## Recomendacion Accionable
1. Daniel: escalar a Pablo Navarro una mejora operativa concreta para Lost Leads: arranque persistente del servicio en `:3200`, healthcheck simple y runbook de inicio/parada. Hoy la API funciona, pero depende de arranque manual y eso rompe la rutina diaria.
2. Revisar pricing y propuesta de valor de animacion antes de ampliar muestra: el patron de sensibilidad alta ya supera el umbral interno por categoria.
3. Priorizar dos ajustes curriculares para validacion con portfolio: `motion graphics para RRSS/publicidad` y `sonido inmersivo / Dolby Atmos`.

## Nivel de urgencia
`urgente`

Motivo: la senal de negocio mas fuerte es de `atencion`, pero la disponibilidad no persistente de la API hace que la fuente quede fragil para la rutina diaria de extraccion.

## Pendiente para manana
- [ ] Confirmar con Daniel que la incidencia de disponibilidad de `localhost:3200` se escala a Pablo con requisito tecnico claro.
- [ ] Pedir siguiente lote de leads desde CRM hasta superar 50 registros para robustez estadistica.
- [ ] Separar en seguimiento comercial los 3 leads con trigger explicito de recontacto: `id=3`, `id=11`, `id=12`.
