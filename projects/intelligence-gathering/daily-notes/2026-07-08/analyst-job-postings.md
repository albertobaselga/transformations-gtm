# Adrián Torres — Nota Diaria [2026-07-08]
**Rol**: Analista de Ofertas de Empleo  
**Semana**: W28 D2 (Martes)  
**Fuentes operativas**: LinkedIn (DOM ✅)

---

## Resumen

W28 D2. **LI AI VE 7d = 53** — ×4 consecutivo. **16ª medición post-ruptura.** El patrón de 3 sesiones (52×3 → 54×3 → 53×3) **no se replica en 53**: el nivel intermedio extiende a ×4, rompiendo la regla de ciclos de 3 sesiones observada en los dos niveles previos. Nuevo dato analítico: 53 puede ser un atractor más estable que 52 y 54, o bien el patrón de 3 sesiones era incidental. **THOMAS SABO AUSENTE ×4** — sin reaparición con nueva URL. P1 lineup idéntico (7 JDs), ordenación ligeramente variada. Nota técnica: paginación muestra "Page 1 of 0" (anomalía de render) — count DOM 53 confirmado, dato válido.

**Integración notas equipo W28D1**:
- **Iker (analyst-iker + analyst-competitors W28D1)**: **Elisava FUNDAE presencial: SIN FUNDAE CONFIRMADO** ⚡ (WebFetch elisava.net) — alerta condicional resuelta negativa, nivel 🟡 MEDIA sin cambio, diferenciador FUNDAE 35mm vs Elisava definitivo. ECAM admision-master/ sin apertura ×2 semanas — monitor pasa a **cadencia semanal**. SHIFTA "13 julio" CERRADA PERMANENTE [strat-003].
- **Sofía (analyst-employability W28D1)**: 53×3 tercer nivel clustering integrado. Nota de pesos: 4/7 JDs son permanentes (TheCUBE, Ultralytics, VCCP Spain, Dogfy Diet) — argumento escasez descansa sobre contratos permanentes.
- **Marcos (head-marcos W28D1)**: 1/7 fuentes — solo Adrián. ECAM trigger + EPA+BOE pendientes al cierre W28D1 (Iker entregó nota, pero después del consolidado de Marcos).

---

## Hallazgos

### Hallazgo 1: LI AI VE 7d = 53 — ×4 CONSECUTIVO. 16ª medición. RUPTURA del patrón 3-sesiones ★★

- **Fuente**: LinkedIn search AI Video Editor 7d España (DOM get_page_text) — 2026-07-08
- **Dato**: **53 results** (DOM: "AI Video Editor in Spain 53 results").
- **Nota técnica**: Paginación muestra "1 Page 1 of 0" — anomalía de render (posible carga incompleta de la UI de paginación). El count DOM "53 results" está presente y es el dato operativo válido. 7 listings visibles en P1, consistente con "53 resultados en ≥3 páginas" de sesiones anteriores. **Dato: ✅ válido** ([pit-002] verificado — count confirmado en DOM).
- **Lectura**: 0 Δ vs W28D1 (53). El nivel 53 alcanza ×4 consecutivas — **supera el máximo previo de 3 sesiones** observado en suelo (52×3) y equilibrio (54×3). Dos interpretaciones no excluyentes:
  - **A — 53 como atractor más estable**: el nivel intermedio 53 tiene mayor viscosidad que 52 y 54; opera como nuevo nivel "normalizado" post-ruptura en julio 2026
  - **B — patrón 3-sesiones era incidental**: la observación de ×3 en dos ciclos fue coincidencia estadística (n=2 ciclos), no una ley del sistema
  - En ambos casos: el rango 52-57 sigue operativo y el proxy Q1 es vigente (53>>50)
- **Serie completa post-ruptura** (16 puntos):

  | Fecha | LI AI VE 7d | Δ | Nota |
  |-------|------------|---|------|
  | W24 D4 (11/06) | 46 | — | Último baseline |
  | W24 D5 (12/06) | 55 ★★★ | +9 | RUPTURA |
  | W25 D1 (16/06) | 57 | +2 | Techo ×1 |
  | W25 D4 (19/06) | 54 | -3 | — |
  | W26 D1 (23/06) | 53 | -1 | — |
  | W26 D2 (24/06) | 55 | +2 | — |
  | W26 D3 (25/06) | 52 | -3 | Suelo ×1 |
  | W26 D4 (26/06) | 52 | 0 | Suelo ×2 |
  | W26 D5 (27/06) | 52 | 0 | **Suelo ×3 — estructural** |
  | W27 D1 (30/06) | 54 | +2 | Rebote post-suelo |
  | W27 D2 (01/07) | 54 | 0 | Equilibrio ×2 |
  | W27 D3 (02/07) | 54 | 0 | **Equilibrio ×3 — fin** |
  | W27 D4 (03/07) | 53 | -1 | Nivel intermedio ×1 |
  | W27 D5 (04/07) | 53 | 0 | Nivel intermedio ×2 |
  | W28 D1 (07/07) | 53 | 0 | Nivel intermedio ×3 |
  | **W28 D2 (08/07)** | **53** | **0** | **×4 — RUPTURA PATRÓN 3-SESIONES ★★ — 16ª medición** |

- **Revisión de la hipótesis patrón 3-sesiones**:
  - Observación original (Adrián W28D1): "cada nivel se consolida en exactamente 3 sesiones antes de transición"
  - Estado W28D2: hipótesis **falsificada** para el nivel 53. El patrón no es universal — puede ser específico de los niveles extremos (52=suelo, 54=equilibrio) vs. el nivel intermedio (53)
  - Hipótesis revisada: **el patrón de 3 sesiones aplica a los niveles extremos del rango; los niveles intermedios pueden ser más persistentes**
  - Dato válido para Marina (análisis de patrones de serie temporal) y Sofía (argumento empleabilidad)

- **JDs visibles P1 (W28 D2)** — orden ligeramente variado vs W28D1:
  - "Videógrafo & Content Creator Junior en Mataró" — **Agrinews** — Mataró, On-site (4ª sesión)
  - "Filmmaker" — **BBVA Creative** — Madrid, Hybrid (4ª sesión)
  - "Prácticas Edición de Vídeo" — **The Champions Burger** — Valencia, On-site (4ª sesión)
  - "Video Editor & Filmmaker" — **Dogfy Diet** — Barcelona, Hybrid (activo)
  - "Filmmaker & AI Video Editor" — **TheCUBE** — Madrid, Hybrid (16ª sesión)
  - "Video Editor" — **Ultralytics** — Madrid, Hybrid (7ª sesión Promoted)
  - "VCCP Spain - Editor/a de Video & Motion Grapher" — **VCCP Spain** — Madrid, On-site (5ª sesión reaparición)
- **Ausencias**: THOMAS SABO AUSENTE ×4 (episodio cerrado)
- **Calidad**: ✅ Alta (DOM count confirmado — paginación "Page 1 of 0" anomalía de render, no afecta al dato)

---

### Hallazgo 2: Integración Elisava SIN FUNDAE ⚡ (Iker W28D1)

- **Fuente**: analyst-iker W28D1 (Iker Molina) — WebFetch elisava.net W28D1
- **Dato**: Máster Creación Audiovisual Avanzada IA y Virtual Production (Elisava, presencial Barcelona) — **SIN FUNDAE** confirmado definitivamente. €11.750 (€11.250 + €500 pre-inscripción). Sin mención FUNDAE, bonificación empresa ni Tripartita. Inicio 26 sep.
- **Resolución**: La alerta condicional `⚠️ si FUNDAE confirmado → revisar a MEDIA-ALTA` queda **resuelta como negativa**. Nivel 🟡 MEDIA de Elisava sin cambio.
- **Distinción clave**: SHIFTA (weareshifta.com) SÍ tiene FUNDAE. Elisava presencial (elisava.net) NO tiene FUNDAE. Son entidades distintas — SHIFTA es el brazo online de Elisava.
- **Impacto para argumentario Q3**:
  - Competidores presenciales IA audiovisual Madrid/España con FUNDAE confirmado: **SHIFTA** (online, Madrid) — ninguno presencial Madrid.
  - "35mm = única opción presencial FUNDAE Madrid IA audiovisual" → **ARGUMENTARIO MÁXIMO** post-Elisava SIN FUNDAE.
  - Canal B2B FUNDAE presencial Madrid: sin competencia institucional confirmada.

---

### Hallazgo 3: ECAM admision-master/ → Monitor semanal (Iker W28D1)

- ECAM admision-master/ sigue mostrando "2025-2026" — 2ª semana completa sin apertura formal 2026-2027.
- **Contexto estacional** (Iker): julio es período de verano ECAM — apertura podría demorar hasta septiembre. Monitor pasa a cadencia semanal (no diaria).
- **Trigger activo**: cuando admision-master/ muestre "2026-2027" → escalación inmediata a Lucía.
- **Impacto empleabilidad**: mientras no abra admisión 2026-2027, el argumento de captación B2C "sin alternativa institucional activa" sigue operativo.

---

### Hallazgo 4: THOMAS SABO — AUSENTE ×4. Episodio cerrado

- 4ª sesión consecutiva sin THOMAS SABO. Sin reaparición con nueva URL.
- Episodio cerrado definitivamente. Monitor pasivo continúa.

---

### Hallazgo 5: TheCUBE — 16ª sesión. Timestamp no confirmado esta sesión

- "Filmmaker & AI Video Editor" — Madrid, Hybrid — 16ª sesión activa.
- Timestamp no visible en DOM de esta sesión (render comprimido). En W28D1 mostraba "5 days ago" (~2 jul). Sin confirmación de repost o variación W28D2 — pendiente confirmar W28D3.
- Vacante sin cubrir ≥3.5 semanas. JD más persistente de la serie activa.

---

## Señales Detectadas W28 D2

| Señal | Valor W28 D2 | Calidad | Δ vs W28 D1 | Fuente |
|-------|-------------|---------|------------|--------|
| LI AI VE ES (7d) | **53 ×4 — RUPTURA PATRÓN 3-SESIONES** (16ª medición) | ✅ Alta (DOM count) | **0** | LinkedIn |
| **THOMAS SABO** | **AUSENTE ×4 — episodio cerrado definitivo** | ✅ Confirmado | cerrado | LinkedIn |
| **TheCUBE** | **16ª sesión** — timestamp no confirmado esta sesión | ✅ Alta (presencia) | +1 sesión | LinkedIn |
| BBVA Creative "Filmmaker" | 4ª sesión — Internship | ✅ Alta | +1 sesión | LinkedIn |
| VCCP Spain | 5ª sesión reaparición — Promoted | ✅ Alta | +1 sesión | LinkedIn |
| Ultralytics | 7ª sesión Promoted | ✅ Alta | +1 sesión | LinkedIn |
| Agrinews | 4ª sesión (Mataró) | ✅ Alta | +1 sesión | LinkedIn |
| Champions Burger "Prácticas" | 4ª sesión (Valencia) | ✅ Alta | +1 sesión | LinkedIn |
| Dogfy Diet | Activo (Barcelona Hybrid) | ✅ Alta | activo | LinkedIn |
| **Elisava SIN FUNDAE** | **CONFIRMADO DEFINITIVO** ⚡ — nivel 🟡 MEDIA sin cambio | ✅ Integrado | resuelto | Iker W28D1 |
| ECAM admision-master/ | SIN APERTURA ×2 semanas — monitor **semanal** | ✅ Integrado | cadencia reducida | Iker W28D1 |
| Sector | **37 competidores** (estable) | ✅ Integrado | sin cambio | Iker W28D1 |
| EPA T1 2026 | Sin informe Raúl W28D1 — pendiente | ❓ | pendiente | — |
| BOE FAS-21 | Sin informe Raúl W28D1 — pendiente | ❓ | pendiente | — |

---

## Cruces con el Equipo

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Lucía / Marcos (Head IC)** | LI AI VE 53×4 — ruptura patrón 3-sesiones | 53 extiende más allá del ciclo previsto. Hipótesis revisada: patrón 3 sesiones aplica a niveles extremos (52, 54) — niveles intermedios (53) más viscosos. El dato relevante sigue siendo 53>>50, proxy vigente, rango 52-57 intacto. Elisava SIN FUNDAE integrado — argumentario B2B FUNDAE presencial Madrid en máximo histórico. | **Alta** |
| **Marina (SEO)** | LI AI VE 53×4 — hipótesis patrón falsificada + Elisava SIN FUNDAE | La ruptura del patrón 3-sesiones es información valiosa para el modelo de series temporales. 53 como nivel intermedio parece más persistente que 52 o 54. Para SEO: Elisava SIN FUNDAE elimina competidor potencial en keywords "master ia audiovisual FUNDAE madrid" — campo libre hasta RSEF 35mm. ECAM monitor semanal: ventana SEO pre-apertura aún activa. | **Alta — Elisava sin FUNDAE** |
| **Raúl (Demand)** | 53×4 — 16ª medición. EPA+BOE pendientes | Nivel 53 se consolida. 16 mediciones es la serie más larga del proyecto. Argumentario Q3: 52-57 sostenido, +15-24% sobre baseline 46, 16 mediciones. Elisava SIN FUNDAE refuerza canal B2B. EPA+BOE: pendiente informe Raúl W28D1 — integrar cuando llegue. | **Alta — EPA+BOE** |
| **Iker (Competidores)** | Elisava SIN FUNDAE integrado. TheCUBE 16ª sesión | Elisava confirmado sin FUNDAE — bien documentado W28D1. TheCUBE timestamp no confirmado W28D2 (render). Confirmar W28D3 si repost o variación. ECAM monitor semanal — próxima verificación semana W29. | **Media** |
| **Sofía (Empleabilidad)** | 53×4 falsifica hipótesis + Elisava SIN FUNDAE | La extensión de 53 a ×4 es argumento de estabilidad del escalón: el mercado no está en fase de corrección activa hacia 52 — se ha estabilizado. Con Elisava SIN FUNDAE: "el único competidor presencial audiovisual IA en Barcelona (€11.750, sin FUNDAE) no compite en el canal FUNDAE Madrid". Narrativa Q3 con 16 mediciones. | **Alta — narrativa actualizada** |

---

## Pendiente W28D3+

- [ ] **LI AI VE W28D3** — ¿53×5 (consolidación del atractor) o primera transición?
- [ ] **TheCUBE timestamp** — confirmar repost vs variación algorítmica W28D3 (timestamp no legible W28D2)
- [ ] **EPA T1 2026 + BOE FAS-21** — Raúl: integrar cuando llegue nota W28D1/D2
- [ ] **ECAM admision-master/** — monitor semanal (Iker). Próxima verificación W29D1
- [ ] **THOMAS SABO** — monitor pasivo: ¿nueva URL?
- [ ] **La Hauss precio** — monitor (opaco)
- [ ] **Cookie Pablo Navarro** — ~48ª sesión / ~79d NAB / Lucía gestión directa
- [ ] **FUNDAE RSEF** — deadline octubre 2026. Elena CEO

---

*Adrián Torres — Analista de Ofertas de Empleo*  
*"Sin serie, no hay señal. Sin señal, no hay decisión."*  
*Actualizado al cierre W28 D2, 2026-07-08 — LI AI VE 7d=53 (×4, ruptura patrón 3-sesiones, 16ª medición). Elisava SIN FUNDAE integrado (Iker W28D1). ECAM monitor semanal. THOMAS SABO AUSENTE ×4. TheCUBE 16ª sesión. Próxima nota: 2026-07-09 (W28D3).*
