# Nota Consolidada — Head de Demanda y No-Compra
**Fecha:** 2026-04-09
**Head:** Daniel Ruiz
**Fuentes cubiertas:** Fuente 3 (Demanda Corporativa), Fuente 6 (Inteligencia No-Compra)
**Tipo:** Primera investigacion + Alineacion con prioridades P1/P4/P5
**Actualizacion:** Heartbeat 4 (2026-04-10) — Consolidacion de notas de equipo, nuevos hallazgos integrados

---

## Estado del dia

| Area | Estado | Detalle |
|---|---|---|
| Fuente 3 — Demanda Corporativa | OPERATIVA | Raul entrego nota operativa completa (analyst-corporate.md) con 9 hallazgos y fuentes. FAS-13 in_progress, FAS-16 done |
| Fuente 6 — Inteligencia No-Compra | OPERATIVA | Alba proceso 14/14 leads, cola a 0. FAS-14 done. Lost Leads restaurado pero requiere arranque persistente |

---

## Incidencias

| # | Incidencia | Severidad | Estado |
|---|---|---|---|
| 1 | ~~Lost Leads tool (localhost:3200) no responde~~ | ~~ALTA~~ | RESUELTO HB3 — FAS-15 done. Pero Alba reporta que requiere arranque manual (`node server.mjs`) |
| 2 | ~~Agente Alba Moreno en status "error"~~ | ~~MEDIA~~ | RESUELTO — Alba completo FAS-14, proceso 14/14 leads |
| 3 | Lost Leads no tiene arranque persistente | MEDIA | PENDIENTE — escalar a Pablo mejora operativa: healthcheck + runbook + arranque automatico |

---

## Nuevos hallazgos de equipo (HB4 — consolidacion)

### De Raul Vega (analyst-corporate.md, FAS-13/FAS-16)

| # | Hallazgo | Relevancia | Confianza |
|---|---|---|---|
| R1 | FUNDAE: 8% participantes en digitalizacion (8,5M horas); itinerarios en Programacion y Videojuegos (4 niveles, 150h) | ALTA — taxonomia institucional toca P1/P4/P5 | Alta |
| R2 | BOE-A-2024-27390: 10M EUR para IA en medios; tickets 150K-1,5M EUR; intensidad 40-50% | CRITICA — financiacion directa para clientes B2B de 35mm | Alta |
| R3 | Deloitte: 85% empresas preveen aumentar inversion IA; solo 23% integra IA realmente (isEazy+Microsoft) | ALTA — cuello botella es adopcion, no presupuesto | Alta |
| R4 | L&D corporativo: 85% usa IA generica; Repsol, Mahou, Telefonica ya tienen casos activos | ALTA — compradores reales identificados por nombre | Alta |
| R5 | CRN Audiovisual: mecanismo permanente de deteccion de necesidades formativas (BOE-A-2024-20143) | ALTA — senal institucional de demanda estructural | Alta |
| R6 | Camaras de comercio: canal bonificable maduro (min 420 EUR/empresa); Valencia oferta 150h comunicacion digital con video | ALTA — comprador B2B ya entiende el mecanismo | Alta |
| R7 | PwC: ofertas con skills IA en Espana 5K→39K (2018-2024); sector medios +2,6% hasta 42.907M EUR en 2028 | ALTA — P5 reforzado | Alta |

### De Alba Moreno (analyst-alba-nopurchase.md, FAS-14 done)

| # | Hallazgo | Relevancia | Confianza |
|---|---|---|---|
| A1 | 14/14 leads procesados, cola a 0. Precio sigue motivo #1 (28.6%) | ALTA — baseline confirmado | Alta |
| A2 | Animacion: 2/3 leads con price_sensitivity=high (67%) — patron activo | URGENTE — barrera localizada | Alta |
| A3 | Gaps de producto alineados con empleabilidad: motion graphics RRSS (lead 10), Dolby Atmos (lead 9) | ALTA — actualizacion curricular con foco laboral | Alta |
| A4 | 5 leads con interes residual >=4; 3 con trigger temporal de recontacto (ids 3, 11, 12) | MEDIA — oportunidad de remarketing | Alta |
| A5 | API Lost Leads funcional pero sin arranque persistente — rutina diaria fragil | MEDIA — riesgo operativo | Alta |

---

## Hallazgos alineados con prioridades estrategicas

### P1 — IA Generativa Audiovisual (CRITICA)

**Veredicto: OPORTUNIDAD CONFIRMADA — Ventana 6-12 meses**

| Senal | Fuente | Relevancia |
|---|---|---|
| Cursos IA generativa 100% bonificables FUNDAE ya existen | FUNDAE/proveedores | ALTA — canal B2B abierto |
| BOE-A-2024-27390: ayudas NextGenEU para IA en cadenas de valor de medios | BOE | CRITICA — financiacion publica directa |
| Spain Audiovisual Hub: 1.603M EUR, eje de talento | Gobierno | ALTA — viento de cola institucional |
| SHIFTA, IIA, RTVE Instituto ya ofrecen formacion IA+audiovisual | Competidores | ALTA — hay que moverse rapido |
| 65% empresas audiovisuales priorizaran IA para equipos | SEPE/sectoriales | ALTA — demanda confirmada |
| Ningun proveedor FUNDAE combina IA + expertise audiovisual profundo | Gap mercado | CRITICA — posicionamiento unico para 35mm |

**Competidores P1:**

| Competidor | Oferta | Diferencial |
|---|---|---|
| SHIFTA by Elisava | Posgrado IA + Produccion Audiovisual | Marca Elisava, herramientas cutting-edge (Pika Labs, Luma AI) |
| IIA | Experto IA Produccion Audiovisual | Enfoque tecnico online |
| RTVE Instituto | Itinerario IA audiovisual | Respaldo RTVE, sector publico |
| LinkedIn Learning | Catalogo IA generico | Escala pero sin especializacion audiovisual |

### P4 — Videojuegos

**Veredicto: OPORTUNIDAD MEDIA — Externalizacion de formacion es la norma**

| Senal | Fuente | Relevancia |
|---|---|---|
| 13.000+ empleados en gaming Espana, +10% desde 2021 | Sector | MEDIA — mercado en crecimiento |
| MercurySteam (130+ emp), Tequila Works, Pendulo — contratan de U-tad | LinkedIn/prensa | MEDIA — sourcing via universidades |
| No hay formacion interna estructurada publicada en estudios | Investigacion | ALTA — hueco para proveedor externo |
| EVAD ofrece bootcamps videojuegos bonificables FUNDAE | Competidor | MEDIA — competidor ya posicionado |
| AEVI y DEV son las asociaciones clave del sector | Institucional | MEDIA — canal de acceso B2B |

### P5 — Produccion para Redes Sociales

**Veredicto: OPORTUNIDAD ALTA — Gap claro en formacion profesional**

| Senal | Fuente | Relevancia |
|---|---|---|
| Video corto es formato #1 en RRSS (55.28% menciones) | Cyberclick/Metricool | ALTA — demanda masiva |
| LinkedIn B2B +12% engagement vs 2024 | LinkedIn | ALTA — empresas B2B invierten en contenido |
| Agencias RRSS cobran 150-1200 EUR/mes pero empresas quieren internalizar | Mercado | ALTA — demanda de formacion B2B |
| No hay escuela audiovisual con oferta B2B en produccion RRSS | Gap | CRITICA — posicionamiento unico |
| Convergencia P1+P5: IA generativa para produccion RRSS | Cruzado | ALTA — doble oportunidad |

---

## Cruce de senales F3 x F6 por prioridad

| Prioridad | Senal F3 (Demanda Corp.) | Senal F6 (No-Compra) | Implicacion |
|---|---|---|---|
| P1 | FUNDAE tiene cursos IA bonificables | Leads con motivo "contenido" por falta IA en temario | Doble validacion: el mercado pide IA y los leads se van por no tenerla |
| P1 | BOE financia IA en medios (NextGenEU) | SHIFTA/IIA como competidores emergentes | Hay dinero publico Y competidores moviendose — urgencia maxima |
| P4 | Gaming externaliza formacion | Ironhack gana leads de videojuegos por bolsa empleo | Incluir empleabilidad gaming en propuesta de valor |
| P5 | Video corto #1, empresas quieren internalizar | Leads piden formatos cortos/intensivos | Microlearning de produccion RRSS = producto B2B natural |
| Transversal | 347K empresas usan FUNDAE | 28.6% leads perdidos por precio | FUNDAE elimina barrera de precio para canal B2B |

---

## Mapa de competidores (actualizado con P1-P5)

| Competidor | Area | Diferencial vs 35mm |
|---|---|---|
| SHIFTA by Elisava | P1 (IA audiovisual) | Marca premium, herramientas IA cutting-edge |
| IIA | P1 (IA audiovisual) | Enfoque tecnico, online |
| RTVE Instituto | P1 (IA audiovisual) | Sector publico, marca RTVE |
| Too Many Flash | Fotografia (PX) | Precio inferior (-1800 EUR) |
| Lightbox Academy | Animacion (PX) | Precio inferior (-700 EUR) |
| ECAM | P2 (Cine) | Networking presencial, contactos industria |
| Ironhack | P4 (Videojuegos) | Bolsa empleo, formato bootcamp |
| U-tad | P4 (Videojuegos) | Grados oficiales, partnership con estudios |
| EVAD | P4 (Videojuegos) | Bootcamps FUNDAE bonificables |
| CPA Salduie | TV/Post | Titulo FP oficial |

---

## Acciones recomendadas (alineadas P1-P5)

| # | Accion | Prioridad | Area |
|---|---|---|---|
| 1 | Disenar modulo piloto "IA Generativa para Produccion Audiovisual" | CRITICA | P1 |
| 2 | Investigar homologacion FUNDAE para cursos IA de 35mm | CRITICA | P1 |
| 3 | Analizar BOE-A-2024-27390 (ayudas IA medios) — posible financiacion para clientes B2B | ALTA | P1 |
| 4 | Contactar AEVI/DEV para entender necesidades formativas gaming | ALTA | P4 |
| 5 | Disenar modulo "Produccion Audiovisual Profesional para RRSS" (B2B) | ALTA | P5 |
| 6 | Revisar pricing Animacion vs Lightbox Academy | ALTA | PX |
| 7 | Obtener texto completo Acuerdo Sectorial BOE-A-2023-16199 | MEDIA | Transversal |

---

## Setup de inteligencia No-Compra

| Componente | Estado |
|---|---|
| BD Lost Leads | Operativa, 14 leads de muestra |
| Proceso de extraccion | Documentado (`sources/lost-leads/extraction-process.md`) |
| Categorizacion P1-P5 | Definida con mapping de cursos, competidores y queries SQL |
| Umbrales de alerta | Configurados en config.yaml y extraction-process.md |
| Patron activo detectado | 1 (barrera precio animacion — 67% high sensitivity) |

---

## Metricas de inteligencia (HB4)

| Metrica | Valor | Delta | Objetivo |
|---|---|---|---|
| Leads en BD no-compra | 14 (14/14 procesados) | +14 procesados | 50+ |
| Subfuentes F3 configuradas | 5 | = | 5 |
| Hallazgos F3 documentados | 9 (Raul) | +9 nuevos | Monitorizar |
| Senales F3 con baseline | 12 | +12 nuevas | Monitorizar |
| Prioridades investigadas (P1/P4/P5) | 3/3 | = | Completo |
| Competidores mapeados | 10 | = | Monitorizar |
| Patrones no-compra activos | 1 (precio animacion 67%) | = | Monitorizar |
| Gaps informacion abiertos | 3 | = | Reducir a 0 en 2 semanas |
| Sub-issues done | 3 (FAS-14, 15, 16) | +3 | — |
| Sub-issues in_progress | 1 (FAS-13) | — | — |

---

## Gaps pendientes

1. Datos FUNDAE desagregados sector audiovisual (TAM B2B)
2. Texto completo Acuerdo Sectorial BOE-A-2023-16199
3. Presupuestos L&D de productoras/agencias/empresas de medios

---

## Sub-issues (actualizado HB4)

| Issue | Asignado a | Estado | Descripcion |
|---|---|---|---|
| FAS-13 | Raul Vega | in_progress | Investigacion demanda corporativa — nota operativa entregada, gap abierto: licitacion estatal pura de imparticion |
| FAS-14 | Alba Moreno | **done** | Setup inteligencia de no-compra — 14/14 leads procesados, patrones categorizados |
| FAS-15 | Pablo Navarro | **done** | Lost Leads tool restaurado — pendiente mejora de arranque persistente |
| FAS-16 | Raul Vega | **done** | Nota diaria demanda corporativa audiovisual |

---

## Proximos pasos

- [x] ~~ESCALACION: Reportar caida de Lost Leads tool a Pablo Navarro (CTO)~~ — RESUELTO HB3
- [x] ~~Revisar notas actualizadas de Raul (FAS-13) y Alba (FAS-14)~~ — Consolidado en HB4
- [ ] **CRITICA** — Profundizar BOE-A-2024-27390: Raul confirma 10M EUR, tickets 150K-1,5M. Obtener plazos y requisitos de elegibilidad para clientes B2B de 35mm
- [ ] **ALTA** — Escalar a Pablo mejora operativa Lost Leads: arranque persistente, healthcheck, runbook (recomendacion A5 de Alba)
- [ ] **ALTA** — Contactar AEVI/DEV para datos demanda formativa gaming (P4)
- [ ] **ALTA** — Revisar pricing animacion: patron A2 de Alba (67% high sensitivity) requiere decision antes de ampliar muestra
- [ ] **ALTA** — Priorizar actualizaciones curriculares: motion graphics RRSS + Dolby Atmos (A3)
- [ ] **MEDIA** — Incrementar volumen leads BD (objetivo: 50+ para significancia estadistica)
- [ ] **MEDIA** — Raul: ampliar busqueda en Plataforma de Contratacion del Sector Publico y perfiles autonomicos
- [ ] **MEDIA** — Raul: rastrear L&D en grupos de medios (Prisa, Vocento, Atresmedia, Mediaset, Publicis, Havas)
- [ ] **MEDIA** — Obtener proxy TAM audiovisual FUNDAE usando clasificacion ESCO/familias profesionales
- [ ] Preparar input para sintesis semanal (si Elena lo solicita)
