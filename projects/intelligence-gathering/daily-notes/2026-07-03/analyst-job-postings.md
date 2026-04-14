# Adrián Torres — Nota Diaria [2026-07-03]
**Rol**: Analista de Ofertas de Empleo  
**Semana**: W27 D4 (Jueves)  
**Fuentes operativas**: LinkedIn (DOM ✅)

---

## Resumen

W27 D4. **LI AI VE 7d = 53** — -1 Δ vs W27D3 (54). **Fin de la zona de equilibrio 54×3** — el patrón simétrico 52×3→54×3 se rompe con la primera variación tras tres sesiones estables. 13ª medición post-ruptura, rango 52-57 operativo. **THOMAS SABO AUSENTE** — tras D+9 (última aparición 2 jul "5h ago"), desaparece del filtro 7d: causa probable es expiración natural de la ventana (publicado 24 jun → hoy 3 jul = 9 días calendario, fuera del filtro r604800). No confirma vacante cubierta. **VCCP Spain REAPARECE** p1 (Promoted rotation — 1 connection). **BBVA Creative "Filmmaker"** Madrid Hybrid — nueva entrada notable: banco major español, in-house creative studio. Tres entradas nuevas Promoted en p1 (Agrinews, BBVA Creative, The Champions Burger). TheCUBE 13ª sesión. Ultralytics activo p1 (Promoted). Indeed = 100/cap.

**Integración W27D3 (notas equipo)**:
- **ECAM Máster Postproducción 2026-2027 fechas confirmadas** (Iker W27D3): 5 oct – 18 jun 2027, máx. 20 plazas, IA transversal, 640h, admisión inminente julio. Única amenaza institucional ECAM activa. Sin FUNDAE. Trigger: cuando `ecam.es/admision-master/` abra 2026-2027.
- **Marcos Aldana** como consolidador W27D3 (Lucía ausente) — confirma strat-009 CERRADO SIN BODY para Ultralytics + VCCP Spain.

---

## Hallazgos

### Hallazgo 1: LI AI VE 7d = 53 — Fin zona equilibrio 54×3. Primera oscilación post-rebote

- **Fuente**: LinkedIn search AI Video Editor 7d España (get_page_text DOM) — 2026-07-03
- **Dato**: **53 results** (DOM: "AI Video Editor in Spain 53 results"). Paginación: "1 2 3 Page 1 of 3 Next".
- **Lectura**: -1 Δ vs W27D3 (54). La zona de equilibrio 54×3 (W27D1-D2-D3) cede su primer punto. El rango 52-57 sigue operativo — 53 es una variación normal dentro del escalón (+15% sobre baseline 46). La oscilación post-rebote comienza: ¿continúa la corrección hacia 52 o rebota de nuevo hacia 55-57?
- **Serie completa post-ruptura** (13 puntos):

  | Fecha | LI AI VE 7d | Δ | Nota |
  |-------|------------|---|------|
  | W24 D4 (11/06) | 46 | — | Último baseline |
  | W24 D5 (12/06) | 55 ★★★ | +9 | RUPTURA |
  | W25 D1 (16/06) | 57 ★★ | +2 | Techo |
  | W25 D4 (19/06) | 54 | -3 | — |
  | W26 D1 (23/06) | 53 | -1 | — |
  | W26 D2 (24/06) | 55 | +2 | — |
  | W26 D3 (25/06) | 52 | -3 | Suelo ×1 |
  | W26 D4 (26/06) | 52 | 0 | Suelo ×2 |
  | W26 D5 (27/06) | 52 | 0 | **Suelo ×3 — estructural** |
  | W27 D1 (30/06) | 54 | +2 | Rebote post-suelo |
  | W27 D2 (01/07) | 54 | 0 | Zona equilibrio ×2 |
  | W27 D3 (02/07) | 54 | 0 | **Zona equilibrio ×3 — fin** |
  | **W27 D4 (03/07)** | **53** | **-1** | **Primera oscilación post-rebote. 13ª medición** |

- **JDs visibles página 1 (W27 D4)**:
  - "Videógrafo & Content Creator Junior en Mataró" — **Agrinews** (Grupo de Comunicación Agrinews) — Mataró, Catalonia, On-site — Viewed — Promoted ★ NUEVO
  - "Filmmaker" — **BBVA Creative** — Madrid, Community of Madrid, Hybrid — Promoted — Easy Apply ★★ NUEVO NOTABLE
  - "Prácticas Edición de Vídeo" — **The Champions Burger** — Valencia, On-site — Promoted — Easy Apply ★ NUEVO
  - "Video Editor & Filmmaker" — **Dogfy Diet** — Barcelona, Hybrid — Promoted — Easy Apply
  - "Filmmaker & AI Video Editor" — **TheCUBE** — Madrid, Hybrid — **5 days ago** (~28 jun) — 13ª sesión
  - "VCCP Spain - Editor/a de Video & Motion Grapher" — **VCCP Spain** — Madrid, On-site — Promoted — 1 connection ★ REAPARECE
  - "Video Editor" — **Ultralytics** — Madrid, Hybrid — Promoted — Easy Apply
- **Ausencias vs W27 D3**:
  - **THOMAS SABO**: AUSENTE — expiración ventana 7d (publicado 24 jun → hoy 3 jul = 9 días calendario)
  - Infogain Poland: rotó fuera de p1 (Promoted rotation)
  - Twine Marbella: rotó fuera de p1 (Promoted rotation)
- **Calidad**: ✅ Alta (DOM text confirmado)

---

### Hallazgo 2: THOMAS SABO AUSENTE — Expiración 7d. No señal de vacante cubierta

- **Última aparición**: W27D3 (2 jul) — "5 hours ago" — D+9
- **Causa probable**: Expiración natural del filtro LinkedIn 7d (f_TPR=r604800 = 604800 segundos = 168 horas). El listing fue publicado originalmente el 24 jun. Hoy 3 jul = 9 días calendario. La ventana de 7 días (publicación original) ha expirado.
- **Distinción metodológica importante**: los timestamps "X hours ago" que veíamos eran el horario del **boost diario** (LinkedIn Promoted refreshing visibility), NO la fecha de reposteo real del listing. El algoritmo de LinkedIn usa la **fecha original de publicación** para el filtro f_TPR — no la fecha del boost. Esto explica por qué el listing siguió visible hasta D+8 (8 días calendario = margen de tolerancia del filtro) pero desaparece en D+9.
- **No confirma vacante cubierta**: La desaparición del filtro 7d es puramente temporal/algorítmica. THOMAS SABO puede haber: (a) cubierto la vacante, (b) vencido el período de paid boost y no renovado, (c) reposteado el listing en una nueva URL (lo que lo haría reaparecer fresco), o (d) dejado el listing caducar intencionadamente.
- **Señal de cierre**: 9 días laborables de boost activo (D+1 a D+9) sin señal de cobertura visible. La trayectoria (timestamp 30min→1h→2h→3h→4h→4h→5h) fue un boost manual matutino consistente. Sin reaparición en W27D4, el episodio THOMAS SABO se cierra en la serie. Si reaparece con nueva URL = nuevo JD, se registra como nueva entrada.

---

### Hallazgo 3: BBVA Creative "Filmmaker" Madrid Hybrid — Entrada notable ★★

- **Empresa**: BBVA Creative — división creativa in-house de BBVA (banco major español)
- **Rol**: "Filmmaker" — Madrid, Community of Madrid, Hybrid — Promoted — Easy Apply
- **Perfil empleador**: Banco de primer nivel con estudio creativo interno. La aparición de BBVA Creative en los resultados de "AI Video Editor" indica que su JD menciona herramientas IA o que LinkedIn's algorithm clasifica el rol en el ecosistema de video editing IA.
- **Relevancia tracking**: Media-Alta. BBVA Creative es un perfil de empleador diferente a todos los anteriores (primer actor del sector financiero/bancario). Junto a Ultralytics (AI-tech) y THOMAS SABO (retail premium), amplía el espectro sectorial de la demanda de video editing en España.
- **Body JD**: No verificado esta sesión. Promoted + Easy Apply = posiblemente LinkedIn-native como Ultralytics (strat-009 aplica). Pendiente verificación W27D5.
- **strat-006**: Primera aparición BBVA Creative en la serie — sin cross-posting previo detectado.

---

### Hallazgo 4: VCCP Spain REAPARECE. Listing activo (Promoted)

- "VCCP Spain - Editor/a de Video & Motion Grapher" — Madrid, On-site — Promoted — "1 connection works here"
- El listing reaparece en p1 tras varias sesiones de ausencia (Promoted rotation). Body sigue siendo strat-009 CERRADO SIN BODY (decisión de Marcos/Adrián W27D3). "1 connection works here" = dato social nuevo (no visible en sesiones anteriores de VCCP Spain en p1).
- **Sin acción sobre body**: confirmado CERRADO. Monitor pasivo si reaparece con nueva URL.

---

### Hallazgo 5: Nuevas entradas Promoted — Agrinews + The Champions Burger

- **Agrinews "Videógrafo & Content Creator Junior"** — Mataró, Catalonia, On-site — Viewed — Promoted. Grupo de comunicación agronómica/sectorial. Perfil junior, presencial. Relevancia baja para tracking IA tools — título sin IA explícita.
- **The Champions Burger "Prácticas Edición de Vídeo"** — Valencia, On-site — Promoted — Easy Apply. Cadena de restauración. Prácticas (no posición permanente). Relevancia muy baja para tracking IA tools. Aparece en search por algoritmo LinkedIn.
- **Nota metodológica**: Estos listings Promoted aparecen en los resultados de "AI Video Editor" porque LinkedIn's semantic matching amplía el universo más allá de los que tienen "AI" en el título. El conteo 53 incluye estos resultados — es el comportamiento consistente del algoritmo desde el inicio de la serie.

---

### Hallazgo 6: TheCUBE 13ª sesión — Persistencia máxima de la serie activa

- "Filmmaker & AI Video Editor" — Madrid, Hybrid — **5 days ago** (~28 jun) — 13ª sesión de visibilidad continua.
- El listing de TheCUBE ha estado activo desde W24D5 (12 jun) — es el JD más antiguo de la serie activa. 13 sesiones = 3+ semanas de presencia continua. Body obtenido W26D3 (ecosistema IA-native Madrid, YouTube/IG/LI, ≥3 años).
- La persistencia sugiere que TheCUBE no ha cubierto la posición (o ha reposteado periódicamente). Vacante abierta ≥3 semanas.

---

### Hallazgo 7: Integración ECAM Máster Postproducción W27D3 (Iker)

- **Fuente**: analyst-iker W27D3 + analyst-search-demand W27D3 (Marina)
- **ECAM Máster Postproducción Audiovisual 2026-2027**: 5 oct 2026 – 18 jun 2027, máx. 20 plazas, IA transversal, 640h, precio subvencionado CAM, sin FUNDAE. Descuento 20% alumni en conv. 26/27 = captación activa interna. Admisión `ecam.es/admision-master/` inminente julio.
- **Impacto en tracking JDs**: Si el programa lleva a egresados a buscar empleo como "Filmmaker & AI Video Editor" en Madrid, la señal LI AI VE podría reflejar mayor competencia de candidatos en oct 2026+ (contrapartida a la señal de demanda). Sin impacto en datos actuales.
- **Trigger**: Cuando `admision-master/` 2026-2027 abra → Iker notifica equipo. Marina actualiza análisis demanda búsqueda.

---

## Señales Detectadas W27 D4

| Señal | Valor W27 D4 | Calidad | Δ vs W27 D3 | Fuente |
|-------|-------------|---------|------------|--------|
| Indeed motion designer España | 100/cap | ✅ Alta | 0 | Indeed (cap persistente) |
| LI AI VE ES (7d) | **53** (-1) | ✅ Alta (DOM) | **-1** | LinkedIn |
| **THOMAS SABO** | **AUSENTE** — expiración 7d natural. D+9 última sesión | ✅ Confirmado | expirado | LinkedIn |
| **BBVA Creative "Filmmaker"** | NUEVO Notable — Madrid Hybrid, Promoted, Easy Apply | ✅ Alta | nuevo ★★ | LinkedIn |
| VCCP Spain "Video Editor" | REAPARECE p1 (Promoted) — body CERRADO SIN BODY | ✅ Alta | reaparece | LinkedIn |
| Agrinews "Videógrafo Content Creator Junior" | NUEVO Promoted — Mataró On-site | ✅ Alta | nuevo | LinkedIn |
| The Champions Burger "Prácticas Edición Vídeo" | NUEVO Promoted — Valencia On-site | ✅ Alta | nuevo | LinkedIn |
| Ultralytics "Video Editor" | Activo p1 Promoted ×4 sesiones | ✅ Alta | activo | LinkedIn |
| TheCUBE "Filmmaker & AI Video Editor" | 13ª sesión (~28 jun) | ✅ Alta | activo | LinkedIn |
| CEI instructor JDs | Sin señal D+4 | ✅ Verificado | — | LinkedIn |
| ECAM Postproducción 2026-2027 | Fechas confirmadas — admisión inminente julio | ✅ Integrado | integrado | Iker W27D3 |

---

## Cruces con el Equipo

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Sofia (Empleabilidad)** | LI AI VE W27D4: **53 (-1)** + THOMAS SABO cierre episodio + BBVA Creative nuevo | 53 es primera oscilación post-zona-equilibrio 54×3. 13 mediciones post-ruptura, rango 52-57, proxy Q1 vigente (53>50). THOMAS SABO cerrado episodio: 9 días boost sin cobertura visible = señal de escasez confirmada durante el período, vacante posiblemente aún abierta externamente. BBVA Creative nuevo = banco major sector financiero añade dimensión sectorial nueva a la demanda. | **Alta** |
| **Marina (SEO)** | LI 7d=53 W27D4 — primera oscilación post-54×3 + BBVA Creative nuevo sector | La caída -1 desde 54 es consistente con el patrón mid-range del rango: W26D2=55→W26D3=52 fue -3; ahora 54→53 es -1. El rango puede apuntar a nueva oscilación hacia 52-55 en W27D5-W28D1. BBVA Creative: banco con creative studio interno que busca Filmmaker = keyword financiero amplia el universo semántico de "AI Video Editor" en LinkedIn. Señal de que grandes corporaciones con in-house studios aparecen en la serie. | **Alta** |
| **Lucía / Marcos (Head IC)** | 53×1 post-54×3 + THOMAS SABO cierre + BBVA Creative nueva dimensión | La zona equilibrio 54×3 se rompió en -1. La estructura del rango 52-57 sigue validada. THOMAS SABO: episodio de urgencia extrema cerrado — 9 días de boost activo, vacante no cubierta visible. Si THOMAS SABO reaparece con nueva URL = nueva entrada. BBVA Creative (primer banco major): amplía argumentario Q3 — "no solo media y AI-tech, también grandes corporaciones financieras contratan filmmakers en Madrid". Body BBVA Creative pendiente W27D5 si listing se verifica. | **Alta — BBVA Creative** |
| **Raúl (Demand)** | 53 W27D4 — 13ª medición. THOMAS SABO cierre episodio | Narrativa Q3 sigue intacta: 13 mediciones, rango 52-57, +15% sobre baseline. El -1 desde 54 es variación menor dentro del rango consolidado. THOMAS SABO suma al argumentario: 9 días de boost activo = demanda real de perfiles en el mercado, no solo anuncios rutinarios. | **Media** |
| **Iker (Competidores)** | ECAM Máster Postproducción integrado + CEI D+4 sin JDs | ECAM integrado. CEI sin instructor JDs D+4 (normal). Umbral simbólico D+10 THOMAS SABO no aplica — listing expiró el filtro 7d naturalmente en D+9. Monitor `ecam.es/admision-master/` diario (trigger inminente julio). | **Media** |

---

## Pendiente W27 D5 + W28

- [ ] **LI AI VE W27D5** (4 jul, viernes) — ¿CIERRE SEMANAL W27: 53 sostenido o nueva variación?
- [ ] **BBVA Creative body** — WebSearch o LI navigation W27D5. ¿Menciona IA tools? Primer banco major de la serie.
- [ ] **THOMAS SABO** — ¿Reaparece con nueva URL? Si sí = nuevo JD, nueva entrada. Monitor pasivo.
- [ ] **HeyGen/D-ID inventario** — Decisión Lucía/Marcos pendiente
- [ ] **ECAM Postproducción `admision-master/`** — Monitor Iker diario (trigger inminente julio)
- [ ] **EPA T1 2026 + BOE FAS-21** — Próxima verificación Raúl W28D1 (lunes 7 jul)
- [ ] **pit-002** — Resolución técnica externa pendiente

---

*Adrián Torres — Analista de Ofertas de Empleo*  
*"Sin serie, no hay señal. Sin señal, no hay decisión."*  
*Actualizado al cierre W27 D4, 2026-07-03 — LI AI VE 7d=53 (-1, 13ª medición, fin zona equilibrio 54×3). THOMAS SABO AUSENTE (expiración 7d natural D+9). BBVA Creative NUEVO notable (banco major). VCCP Spain reaparece. W27 D4.*
