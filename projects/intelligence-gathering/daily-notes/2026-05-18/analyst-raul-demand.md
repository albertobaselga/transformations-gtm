# Raúl Vega — Nota Diaria 2026-05-18 (W21 Día 1) — HB30

**FAS activo**: FAS-21 (1c4a1b09-acd9-40e0-a80c-509543293264) — `in_progress`
**Sesión**: HB30 — continuación de HB29 (2026-05-15) — W21D1 · Lunes 18 mayo · Reset semanal W21
**Foco hoy**: BOE 18 mayo · EPA semana pesimista día 1 · SEPE CNAE reintento · SHIFTA SEM D-7 · H45 LABASAD

---

## Contexto de sesión

HB29 cerró W20 con:
- COA: BOE 15 mayo sin novedades FAS-21. 18 concesiones estables.
- COB: EPA T1 2026 — escenario pesimista activo (semana 18-22 mayo).
- COC: H44 Mediaset/UE 🟢 BAJA (señal Pista B). Mapa 25 actores / 6 🔴 ALTA estable por 3ª semana.
- COD: SHIFTA SEM sin activar D-10 — hipótesis CRM cerrada.

W21 empieza con: SHIFTA arranca en **7 días** (25 mayo). EPA entra en su ventana pesimista. FUNDAE RSEF urgencia crítica.

---

## Hallazgo CPA: BOE 18 mayo — Sin nuevas resoluciones FAS-21

**Fuente**: WebSearch (boe.es) — consultado 2026-05-18

Sin nuevas resoluciones de beneficiarios ni modificaciones para BOE-A-2024-27390 en la jornada del 18 mayo 2026. El mapa de 18 concesionarios (~€6.49M NextGenEU) permanece sin modificación. W14-W21D1 sin novedades — patrón estable.

**Estado FAS-21**: Sin novedad. Monitoreo semanal continúa.

---

## Hallazgo CPB: EPA T1 2026 — Día 19. Semana pesimista día 1

**Fuente**: ine.es (verificación directa + WebSearch) — consultado 2026-05-18

EPA T1 2026 **NO PUBLICADA** a día 19 de retraso. Semana pesimista activa (18-22 mayo), día 1. La búsqueda en INE muestra únicamente notas de prensa hasta T4 2025 (publicada 27 enero 2026). Sin nota de prensa T1 2026 indexada.

**Nota de acceso**: Calendario estadístico Ministerio de Trabajo (mites.gob.es) devolvió error SSL ([pit-005] — sin reintento, pivot a WebSearch). WebSearch confirmó que no hay nota de prensa T1 2026 publicada. Dato consistente con todas las verificaciones previas.

**Calendario actual:**

| Escenario | Estado |
|-----------|--------|
| Conservador (11-15 mayo) | ❌ Cerrado sin publicación |
| Pesimista (18-22 mayo) | ✅ **Activo — Día 1** |
| Extremo (>22 mayo) | En reserva |

**Próxima verificación**: Miércoles 20 mayo (mid-week pesimista). Si no aparece el 22 mayo → escenario extremo + actualizar expectativas + comunicar a Sofia y Lucía con nuevo horizonte.

**Implicación protocolo extracción**: Cuando publique T1 2026, el dato vendrá en formato dual CNAE-2009/CNAE-2025. El trabajo de extracción requerirá mapeo entre ambas clasificaciones para los sectores 59/60. Documentar este requisito en la plantilla de extracción antes de que aparezca.

---

## Hallazgo CPC: SEPE CNAE 59/60 PDFs marzo 2026 — Lag >8 semanas. Escalada a proxy

**Fuente**: WebSearch (sepe.es, datos.gob.es) — consultado 2026-05-18

Los PDFs de actividad económica CNAE 59/60 para marzo 2026 siguen sin aparecer en búsqueda directa. El lag ya supera 8 semanas desde el cierre del mes (31/03). Las alternativas identificadas son:

**Alternativa 1 — datos.gob.es**: La plataforma de datos abiertos del gobierno español indexa los datasets de SEPE de paro registrado por municipio y actividad económica. El dataset puede existir en formato CSV/JSON aunque el PDF no esté publicado.

**Alternativa 2 — Estudio sectorial SEPE 2024**: "El mercado de trabajo del sector Audiovisual en España — 2024" cubre el período 2024 con datos anuales de CNAE 59/60. Sirve como baseline para el argumentario de empleabilidad aunque no es dato mensual de 2026.

**Macro disponible** (lamoncloa, abril 2026): Paro total ES marzo 2026 = 2.419.712 (-22.934, mínimo histórico marzo desde 2008). Dato disponible y citable como contexto macroeconómico favorable.

**Decisión**: Para la matriz de empleabilidad Q1 2026, si SEPE CNAE 59/60 marzo 2026 no aparece esta semana:
1. Usar estudio sectorial audiovisual SEPE 2024 como baseline de datos estructurales del sector
2. Complementar con macro paro marzo 2026 (lamoncloa) como contexto favorable
3. Añadir EPA T1 2026 cuando publique para completar el cuadro de situación

**Acción**: Intentar datos.gob.es mañana martes 19 mayo para el dataset SEPE CNAE por municipio/actividad.

---

## Hallazgo CPD: SHIFTA SEM D-7 — Hipótesis CRM cerrada CONFIRMADA

**Fuente**: WebSearch + WebFetch (weareshifta.com) — consultado 2026-05-18

A **7 días del arranque** del Máster IA Generativa para Creativos (25 mayo), la verificación de la página de SHIFTA confirma:

- **Sin mensajes de urgencia**: No hay contador regresivo, banner de "últimas plazas", ni lenguaje de presión temporal
- **Sin SEM detectado**: Búsqueda orgánica devuelve solo resultados de weareshifta.com propios, sin indicios de Google Ads
- **CTA tranquilo**: El formulario de solicitud es el único call-to-action, sin fecha límite explícita
- **Único indicador de limitación**: "Plazas limitadas" (genérico, sin número ni urgencia)

**Confirmación de Hipótesis A (CRM cerrada)**: A D-7, un programa con inscripción abierta típicamente tendría urgency marketing (countdown, "X plazas disponibles", descuentos de última hora). La ausencia de todo esto a D-7 confirma que el Máster de mayo 25 **opera con cohorte formada vía CRM/candidatos previos**, no por captación de última hora en mercado abierto.

**Implicaciones para el mapa competitivo y B2B de 35mm**:

1. **SHIFTA no capta via paid search en el segmento premium**: Su canal B2C para el Máster (60 ECTS, €2.000-€3.000 estimado) es relacional/CRM, no transaccional/SEM. Esto sugiere que el mercado de masters IA premium online en España se mueve principalmente por reputación de marca y recomendación, no por búsqueda activa.

2. **Señal de demanda D9 (Marina)**: La ausencia de SEM de SHIFTA no equivale a ausencia de demanda — significa que la demanda ya fue capturada antes de que pudiera expresarse como búsqueda activa. El plateau de `runway ml` (51-54) en Trends puede estar reflejando demanda orgánica ya canalizada, no demanda latente.

3. **Para la captación de 35mm**: Si SHIFTA y LABASAD (ver H45) captan vía CRM en el segmento creativo, y The Core School capta vía employer (Atresmedia/Banijay), **el canal diferenciado para 35mm en el segmento técnico broadcast es el B2B directo con MAM/broadcasters** — no el SEM de palabras clave genéricas de IA audiovisual.

**Marina**: Alerta SHIFTA SEM cerrada — sin señal. D-7 sin campaña = sin activación hasta el arranque. Señal D9 de demanda no observable vía SEM.

---

## Hallazgo CPE: H45 LABASAD — Nuevo competidor IA creativa (🟢 BAJA provisional)

**Fuente**: labasad.com — consultado 2026-05-18

**LABASAD** (La Bauhaus de Arte y Diseño, Barcelona — institución privada artes/diseño):

| Campo | Dato |
|-------|------|
| Nombre | Máster Online en Inteligencia Artificial para Industrias Creativas |
| Institución | LABASAD — título propio |
| ECTS | **60 ECTS** |
| Duración | 10 meses |
| Inicio | **Mayo 2026** |
| Modalidad | Online |
| Plazas | **25** |
| Precio | Opaco — sin publicar |
| FUNDAE | **No mencionado** |
| Contenido IA audiovisual | Vídeo generativo (4+5 ECTS), Voz/Música IA (4 ECTS) — herramientas genéricas |
| Broadcast/MAM/Dalet | ❌ Sin mención |

**Nivel de amenaza: 🟢 BAJA provisional**

LABASAD opera en el mismo espacio que SHIFTA (creativa IA para industrias del diseño/arte/comunicación), no en el espacio técnico broadcast de 35mm. El solapamiento en pool de alumnos y empleadores es mínimo:
- Target LABASAD: diseñadores, artistas, comunicadores creativos
- Target 35mm: técnicos broadcast/OTT, operadores MAM, postproductores profesionales

Sin FUNDAE → sin impacto en el canal B2B FUNDAE de 35mm. Sin precio → sin confirmación de nivel de precio. Institución sin el sello Elisava/UVic-UCC que avala a SHIFTA.

**Señal de mercado**: LABASAD + SHIFTA lanzando simultáneamente en mayo 2026 (ambas 60 ECTS, 25 plazas, online, creativa IA) indica alta demanda en el segmento creativo IA pero también **creciente saturación de oferta en ese segmento**. El espacio técnico broadcast (MAM + Dalet Dalia) sigue sin nuevos entrantes.

**Acción**: Verificar FUNDAE y precio en W22 antes de confirmar nivel. Añadir al radar como actor de seguimiento.

---

## Estado canal B2B/FAS-21 — W21D1

| Canal | Estado W21D1 | Próxima acción |
|-------|-------------|---------------|
| FUNDAE RSEF (Operaciones) | ❌ Bloqueado — **CRÍTICA** | SHIFTA en 7 días. Temporada Q2-Q3 perdiendo |
| BOE-A-2024-27390 FAS-21 | 18 concesiones estables | Monitoreo semanal |
| Plan CM Medida 3 | Sin convocatoria BOCM | Daniel: pipeline productoras por perfil |
| Pista B — PRISA P1 | Pendiente Brief H2B-PRISA-v2 | Elena: framing eficiencia + exclusividad Dalet Dalia |
| Pista B — RTVE P2 | Monitoreo PCSP/PLACE (CPV 80000000) | Ventana licitación jun-jul 2026 |
| Cluster-06 v9 | Pendiente aprobación Lucía | Señal Lucía — bloqueado |

---

## Cruces con el equipo W21D1

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Sofia (Empleabilidad)** | EPA T1 2026 semana pesimista día 1 | Sin publicar día 19. Próxima verificación miércoles 20 mayo. Si no aparece el 22 → escenario extremo + nuevo horizonte. Matriz Q1 2026 en pausa. | Alta |
| **Marina (SEO)** | SHIFTA SEM cerrado — señal D9 sin canal SEM observable | Sin SEM a D-7 confirma CRM cerrado. El mercado IA premium opera por reputación/CRM, no por paid search. Implicación para estrategia URL 11. | Media |
| **Lucía (Head IC)** | H45 LABASAD nuevo actor IA creativa · Cluster-06 v9 urgente | LABASAD 🟢 BAJA provisional — sin FUNDAE, sin broadcast. Saturación creciente en creativa IA. Espacio broadcast/MAM vacío. Cluster-06 v9: señal urgente esta semana. | Media |
| **Operaciones** | FUNDAE RSEF — SHIFTA en 7 días | Ventana crítica cerándose. SHIFTA arranca el 25 mayo con FUNDAE activo. | **CRÍTICA** |

---

## Pendiente W21 (actualizado W21D1)

- [ ] **EPA T1 2026** — ⚠️ Verificación miércoles 20 mayo (mid-week pesimista). Si no 22 mayo → escenario extremo.
- [ ] **SEPE CNAE 59/60 PDFs marzo 2026** — ⚠️ Intentar datos.gob.es mañana martes 19 mayo ([strat-005]).
- [ ] **FUNDAE RSEF (Operaciones)** — **CRÍTICA**. SHIFTA en 7 días.
- [ ] **Cluster-06 v9** — Señal Lucía — urgente esta semana.
- [ ] **Adrián Torres snapshot W14-W21** — Irrenunciable (Sofia).
- [ ] **Trends D9 / Cookie Pablo Navarro** — 15+ sesiones bloqueadas (urgencia absoluta Marina).
- [ ] **LABASAD H45** — Verificar FUNDAE/precio W22.
- [ ] **Daniel: pipeline Medida 3** — Productoras madrileñas activas.
- [ ] **PRISA Brief H2B-PRISA-v2** — Elena.
- [ ] **RTVE licitación 2026** — Monitoreo PCSP/PLACE jun-jul 2026.
- [ ] **OFF ESCAC** — Monitoreo catálogo IA.

---

## Cierre sesión HB30 — Estado 2026-05-18

**Producido hoy:**
- [x] HB30 publicado en FAS-21 — W21D1
- [x] CPA: BOE 18 mayo — sin nuevas resoluciones FAS-21. Mapa 18 concesiones estable.
- [x] CPB: EPA T1 2026 — día 19, escenario pesimista día 1 (semana 18-22 mayo). Sin publicación. Próxima verificación miércoles 20 mayo.
- [x] CPC: SEPE CNAE 59/60 — lag >8 semanas. Proxy documentado: estudio sectorial SEPE 2024 + macro lamoncloa. Acción: datos.gob.es mañana martes.
- [x] CPD: SHIFTA SEM D-7 — **Hipótesis CRM cerrada confirmada**. Sin urgency marketing ni SEM a 7 días del arranque. Implicación: mercado IA premium opera por CRM/reputación, no por paid search. Marina: señal cerrada.
- [x] CPE: H45 LABASAD — Máster IA para Industrias Creativas (60 ECTS, mayo 2026, 25 plazas, sin FUNDAE). 🟢 BAJA provisional. Saturación creciente en creativa IA; espacio técnico broadcast vacío.

---

*Actualizado al cierre del día 2026-05-18.*
