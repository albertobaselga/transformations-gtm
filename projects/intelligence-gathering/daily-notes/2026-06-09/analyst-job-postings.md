# Adrián Torres — Nota Diaria [2026-06-09]
**Rol**: Analista de Ofertas de Empleo  
**Semana**: W24 D2 (Martes)  
**Fuentes operativas**: LinkedIn, Indeed, Tecnoempleo, Domestika, Notodoanimacion

---

## Resumen

W24 D2. **Pit-002 persiste** — Domestika y Notodoanimacion siguen sirviendo datos cacheados de abril 2026 en esta sesión de navegador. Confirmación definitiva por evidencia de timestamps: (1) Domestika muestra fechas de listado 07/04/26–11/04/26 en el cuerpo de la página; (2) Notodoanimacion muestra "AI Motion Artist Moon Active", "Art Director – AI-First Craft Worldwide" y tres listados Fever AI como "hace 1 mes" — exactamente la misma posición temporal que en W16 D2 (14/04/26), lo que es físicamente imposible si los datos fueran frescos (deberían ser "hace 2-3 meses").

**Señal cuantitativa confirmada**: LI AI Video Editor 7d = **46** (dos días consecutivos W24 D1+D2 — señal estable). Indeed = 100 (techo portal). Tecnoempleo: estable (datos stale consistentes con W24 D1).

**IA tools W24 D2**: Sin nuevas entradas al inventario desde portales cualitativos (stale). LinkedIn 7d muestra "AI Filmmaker" (Tether.io, Spain Remote) con "AI" en título — JD notable pero sin herramientas específicas mencionadas en el snippet. Inventario acumulado: **13 herramientas** (sin cambios desde W16 D2).

**Post-NAB surveillance**: Mimir Cutter, Chyron AI, Harmonic MCP no detectados en ningún portal. Serie activa sin apariciones (W16 D2→W24 D2).

---

## Hallazgos

### Hallazgo 1: Baselines W24 D2 — serie cuantitativa (sesión nueva)

- **Fuente**: Barrido 6 portales con nueva navegación — 2026-06-09
- **Dato**:

| Fuente | Consulta | W24 D2 (09/06) | W24 D1 (08/06) | Δ | Calidad |
|--------|---------|----------------|----------------|---|---------|
| Indeed | motion designer España | **100** | 100 | 0 | ✅ tab title |
| LI (7d) | AI Video Editor España | **46** | 46 | **0** | ✅ DOM |
| LI (all) | AI Video Editor España | 100+ cap | 100+ cap | cap | ✅ DOM |
| Tecnoempleo | audiovisual | **7** | 7 | 0 | ⚠️ stale |
| Tecnoempleo | motion graphics | **1** | 1 | 0 | ⚠️ stale |
| Domestika | p1 relevante | **~5** | ~5 | 0 | ⚠️ stale confirmado |
| Notodoanimacion | motion puro p.1 | **~4** | ~4 | 0 | ⚠️ stale confirmado |

**Lectura**: LI AI VE 7d=46 en dos días consecutivos (W24 D1+D2) — primer dato de estabilidad de la nueva serie W24. Indeed=100 techo estable. Los valores cualitativos (Domestika, Notodoanimacion) no son verificables esta semana con la sesión actual.

---

### Hallazgo 2: Pit-002 confirmado definitivamente en W24 D2

- **Fuente**: get_page_text Domestika + Notodoanimacion — 2026-06-09
- **Dato**:
  - **Domestika**: Los listados visibles tienen fechas explícitas de 07/04/2026–11/04/2026 en el cuerpo de la página. Con navegación fresca el 09/06/2026, esto confirma que el servidor sigue sirviendo el mismo snapshot de abril. La fecha más reciente visible es 11/04/26 (Diseñador@ Gráfico Nacher, Director de Arte Senior Actimundi, etc.).
  - **Notodoanimacion**: Los listados "AI Motion Artist Moon Active", "Art Director – AI-First Craft Worldwide" y tres roles Fever ("Video editor – Motion Designer", "Video Editor & Motion Grapher – Early Morning", "Senior AI Creative Designer") aparecen como "hace 1 mes" — idéntico a W16 D2 (14/04/26). Desde el 09/06/2026, "hace 1 mes" implica publicación ~09/05/26, pero estos listados eran "hace 1 mes" el 14/04/26 (publicación ~14/03/26). **Imposibilidad temporal: datos stale de la misma sesión de navegador de abril.**
  - Total Notodoanimacion sigue en: 510 registros (sin cambio desde meses).
- **Conclusión**: pit-002 (browser session caching) no se ha resuelto con la nueva sesión del día. Los datos cualitativos de estos dos portales seguirán marcados como ⚠️ stale hasta que se confirme una lectura con timestamps coherentes.
- **Acción persistente**: Cookie fresca o sesión de navegador completamente limpia necesaria para romper el cache de Notodoanimacion (JavaScript render). Domestika posiblemente también requiere sesión limpia separada.

---

### Hallazgo 3: LinkedIn 7d — "AI Filmmaker" Tether.io en España

- **Fuente**: LinkedIn search AI Video Editor 7d España (DOM) — 2026-06-09
- **Dato**: Entre los 46 resultados del filtro 7d aparece "AI Filmmaker (100% Remote)" de **Tether.io** (Spain). Posición: promovida en página 1. Las demás posiciones son: Filmmaker/Edición de Vídeo (Instituto Biohacking Consciente), Videógrafo Content Creator (Agrinews), Filmmaker (BBVA Creative), Video Editor & Diseñador/a (ZINK), Prácticas Edición de Vídeo (Champions Burger), Video Editor & Filmmaker (Dogfy Diet).
- **Relevancia**: "AI Filmmaker" en título es una denominación de puesto que ya no pide "editor de vídeo que usa IA" sino un perfil cuya función principal es crear contenido fílmico con IA. No hay herramientas específicas en el snippet visible. Tether.io es una empresa cripto/fintech — perfil no audiovisual. No añade nueva entrada al inventario de herramientas IA, pero confirma que el término "AI Filmmaker" como título de puesto está apareciendo en el mercado español (100% Remote).
- **Para inventario**: "AI Filmmaker" como denominación de rol — anotado. Sin herramienta específica → no añade entrada al inventario de tools IA hasta verificar JD completo.

---

### Hallazgo 4: Tecnoempleo — datos stale confirmados (mismos listados marzo-abril)

- **Fuente**: Tecnoempleo audiovisual + motion graphics — 2026-06-09
- **Dato**:
  - Audiovisual: 7 ofertas. Las mismas 7 de W24 D1: FPGA engineer 30/03, Diseñador Gráfico 10/04, Soporte multimedia 08/04, Project Lead 02/04, Técnico Marketing 27/03 y 20/03, Project Engineer 13/03. Ninguna con fecha posterior a 10/04/2026.
  - Motion graphics: 1 oferta. Robotic Software Developer (Randstad ES, 02/04/2026). Sin relación con motion design audiovisual.
- **Lectura**: Tecnoempleo no es un portal relevante para el cluster IA audiovisual. Estas posiciones IT-AV siguen sin cubrirse (~2+ meses visible). Rol de indicador de nicho IT-AV, no motion design.

---

### Hallazgo 5: Post-NAB surveillance — Semana 8 sin apariciones

- **Fuente**: Barrido W24 D2 — 2026-06-09
- **Dato**: Mimir Cutter, Chyron AI, Harmonic MCP **no aparecen** en ningún portal en esta sesión. La verificación en Notodoanimacion/Domestika sigue siendo parcial por pit-002, pero en los portales con datos confiables (LinkedIn 7d, Indeed) tampoco hay indicios de estas herramientas en titles/snippets visibles.
- **Estado**: Serie activa. 8 semanas sin aparición (W16 D2 → W24 D2, aunque la serie intermedia W17-W23 no fue monitorizada). A verificar cuando pit-002 se resuelva.

---

### Hallazgo 6: Contexto The BIG IA / ECAM / BSC — sin señal de JD nueva

- **Fuente**: Notas equipo W24 D2 (Iker, Marina)
- **Dato**:
  - **The BIG IA** (arrancó 05/06): Edición en curso. No se detectan anuncios de siguiente convocatoria en portales. Sin sold-out comunicado → cohort en curso, señal de graduados en mercado estimada en ~agosto-septiembre 2026.
  - **ECAM IA Big Data** (señal de fin, Iker W24D2): El cierre del único programa €0 de IA audiovisual en Madrid no genera señal de JD inmediata. Posible empuje de demanda hacia programas de pago en Q3-Q4 2026 — a monitorizar en portales de empleo si aparecen demandas de perfil data+audiovisual en verano.
  - **BSC Curso Vídeo IA** (arranque 15 jun, 6 días): Sin señal de JD aún. A vigilar si el arranque genera demanda de instructores IA audiovisual en LinkedIn.
- **Conclusión**: Sin señal accionable nueva en JDs procedente del contexto competitivo W24 D2.

---

## Serie IA Tools — Estado W24 D2

**Inventario acumulado**: **13 herramientas** (sin cambios desde W16 D2 — 14/04/2026)

Sin nuevas entradas verificables esta sesión (datos cualitativos stale en Notodoanimacion/Domestika; LinkedIn snippets sin tool names explícitos).

**Post-NAB surveillance** (W16 D2 → sin aparición):
- Mimir Cutter — 0 apariciones en JDs ES
- Chyron AI — 0 apariciones en JDs ES
- Harmonic MCP — 0 apariciones en JDs ES

**Denominaciones de rol IA emergentes observadas en W24**:
- "AI Filmmaker" (Tether.io, LinkedIn 7d) — sin herramienta específica
- "Video, AI & Motion Designer" (Perez-Solero, Domestika 10/04/26) — stale, visible en W16 D2 window

---

## Señales Detectadas

| Señal | Valor W24 D2 | Calidad | Δ vs W24 D1 | Fuente |
|-------|-------------|---------|------------|--------|
| Indeed motion designer España | 100 | ✅ Alta (tab title) | 0 | Indeed |
| LI AI Video Editor ES (7d) | **46** | ✅ Alta (DOM) | 0 | LinkedIn |
| LI AI Video Editor ES (all) | 100+ cap | ✅ Alta | cap | LinkedIn |
| Tecnoempleo audiovisual | 7 | ⚠️ Stale | 0 | Tecnoempleo |
| Tecnoempleo motion graphics | 1 | ⚠️ Stale | 0 | Tecnoempleo |
| Domestika p1 relevante | ~5 | ⚠️ Stale confirmado (fechas 07/04-11/04) | 0 | Domestika |
| Notodoanimacion motion puro | ~4 | ⚠️ Stale confirmado (mismo batch AI abril) | 0 | Notodoanimacion |
| IA tools en JDs (nuevas) | 0 | N/A (stale) | 0 | — |
| Post-NAB tools aparición | 0 | Parcial (stale) | 0 | — |
| "AI Filmmaker" en LI 7d | 1 rol (Tether.io) | ✅ Alta | nuevo | LinkedIn |

---

## Cruces con el equipo

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Sofia (Empleabilidad)** | LI AI VE 7d=46 — D1+D2 estables | Dos días consecutivos W24 con LI AI Video Editor 7d=46. Primera señal de estabilidad de la nueva serie W24. Without gap, this is the baseline for Q2 onwards. Pit-002 persiste en portales cualitativos — los datos de empleo audiovisual granular siguen bloqueados. | Media — actualización de serie |
| **Lucía (Head IC)** | Post-NAB surveillance semana 8 — sin apariciones | Mimir Cutter, Chyron AI, Harmonic MCP siguen sin aparecer en JDs españoles. La demanda de herramientas broadcast-IA NAB 2026 no ha permeado aún a los portales de empleo de España. Puede indicar que el ciclo de adopción está aún en fase early (compra de herramienta, no contratación de especialista). | Baja — sin cambio |
| **Daniel (B2B)** | ECAM IA Big Data fin + NextGenEU 31 ago — señal JD latente | El cierre del único programa €0 de IA audiovisual en Madrid (señal de Iker W24D2) no genera JDs inmediatas, pero si las 18 organizaciones FAS-21 (~€6,49M NextGenEU) ejecutan planes formativos antes del 31 agosto, podríamos ver demanda de instructores IA audiovisual en LinkedIn en junio-julio. A vigilar en W25-W26. | Baja-Media — horizonte 4-6 semanas |

---

## Balance W24 (D1+D2)

| Día | Indeed | LI AI VE 7d | Tec. AV | Tec. MG | Domestika | Notodoanim. | IA tools nuevas | Evento |
|-----|--------|------------|---------|---------|-----------|-------------|-----------------|--------|
| W24 D1 (08/06) | 100 | 46 | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | 0 | REINICIO serie. pit-002 detectado |
| W24 D2 (09/06) | 100 | **46** ✅ | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | 0 | pit-002 confirmado. LI 7d estable. "AI Filmmaker" Tether.io |

**Primera estabilidad de serie W24**: LI AI VE 7d=46 (D1+D2 iguales).

---

## Addendum W24 D2 — Segunda sesión (2026-06-09)

### A1: LI Motion Graphics Designer all-time — **70** (vs 72 en W16 D2)

- **Fuente**: LinkedIn search `Motion Graphics Designer` España, sin filtro de fecha — 2026-06-09
- **Dato**: **70 results** (DOM confirmado). Delta vs W16 D2 (14/04): -2. Dentro del rango de volatilidad normal de LinkedIn all-time.
- **Lectura**: Señal estable. El mercado motion graphics en España no muestra contracción en el periodo W16→W24. La caída de 2 unidades es ruido de rotación de listados, no señal de tendencia.
- **Serie**: W16 D2 = 72 → W24 D2 = **70** (Δ -2, ~7 semanas sin cobertura)
- **Listado IA relevante detectado**: "Junior Video & Motion Designer (AI-driven Content)" — **Impress**, Barcelona (On-site). "AI-driven" en el título de puesto. Sin herramientas específicas en el snippet.

---

### A2: Tether.io "AI Filmmaker" — JD completo verificado

- **Fuente**: careers.tether.io + himalayas.app / web3.career — 2026-06-09
- **Job ID LinkedIn**: 4330892998. **Reposted**: hace 5 días (~4 junio 2026).
- **Datos clave**:
  - Empresa: Tether Operations Limited (emisor USDT — fintech/cripto)
  - Modalidad: 100% Remote, España + Worldwide
  - Sueldo referenciado: $102k–$117k (web3.career) / $46k-$64k (otras fuentes — posible diferencia base vs total comp)
  - Aplicantes: >100 clicked apply

- **Herramientas IA requeridas (explícitas en JD)**:
  - **Runway** — AI video generation ✓
  - **Stable Diffusion** — image/video generation ✓
  - **MidJourney** — image generation ✓
  - **DALL-E** — image generation (OpenAI) ✓

- **Software tradicional requerido**: Adobe Premiere Pro, After Effects, DaVinci Resolve

- **Relevancia para inventario IA tools**:
  - Runway, Stable Diffusion, MidJourney, DALL-E → **cruzar con inventario de 13 herramientas (W16 D2)**. Alta probabilidad de que estas 4 ya estén documentadas (son las más citadas en JDs globales). Sin acceso al inventario completo en esta sesión — verificar en W24 D3.
  - Si alguna de las 4 NO está en el inventario, añadir entrada procedente de JD España (Tether.io, junio 2026).

- **Señal de mercado**:
  - Un emisor de stablecoin (fintech) abriendo posición de "AI Filmmaker" en España confirma que la demanda de perfil IA audiovisual trasciende el sector audiovisual tradicional.
  - El título no es "Video Editor con IA" sino "AI Filmmaker" — la IA es la función central, no un add-on.
  - Con >100 aplicantes en ~5 días, hay demanda activa de candidatos con este perfil en España.

---

## Serie IA Tools — Estado W24 D2 (actualizado)

**Inventario acumulado**: **13 herramientas** (baseline W16 D2 — pendiente verificación cruce con Tether.io JD)

**Herramientas en JD Tether.io (activo, junio 2026)**:
- Runway, Stable Diffusion, MidJourney, DALL-E — *a verificar vs inventario W24 D3*

**Denominaciones de rol IA observadas W24 D2**:
- "AI Filmmaker" — Tether.io (LI, España Remote) ✅ JD verificado
- "Junior Video & Motion Designer (AI-driven Content)" — Impress (LI, Barcelona) — snippet sin tools
- "Video, AI & Motion Designer" — Perez-Solero (Domestika 10/04/26) — stale, ya en W16 D2 window

**Post-NAB surveillance** (W16 D2 → W24 D2): 0 apariciones (Mimir Cutter, Chyron AI, Harmonic MCP)

---

## Pendiente W24 D3 (2026-06-10)

- [x] **LI Motion Graphics Designer all-time** — ✅ RESUELTO W24 D2 addendum: **70** (vs 72 W16 D2, Δ -2)
- [x] **Tether.io "AI Filmmaker" JD completo** — ✅ RESUELTO: Runway + Stable Diffusion + MidJourney + DALL-E
- [ ] **Cruce Tether.io tools vs inventario W16 D2** — verificar cuáles de las 4 ya están en las 13; añadir nuevas si aplica
- [ ] **Pit-002 resolución** — sesión incógnito o borrado de cookies en Domestika/Notodoanimacion
- [ ] **The BIG IA** — siguiente convocatoria sin fecha; monitorizar W24 D3-D5
- [ ] **BSC Curso Vídeo IA** — arranque 15 jun (6 días). Vigilar JDs de instructores IA audiovisual
- [ ] **EPA T1 2026** — W24 D3 verificación (Iker, ≥D35)
- [ ] **ECAM IA Big Data subvención** — vence 15 jun (6 días)

---

*Adrián Torres — Analista de Ofertas de Empleo*  
*"Sin serie, no hay señal. Sin señal, no hay decisión."*  
*Actualizado W24 D2 addendum, 2026-06-09 — LI MGD all-time=70. Tether.io AI Filmmaker: Runway+SD+MJ+DALL-E verificados.*
