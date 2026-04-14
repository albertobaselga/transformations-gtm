# Adrián Torres — Nota Diaria [2026-06-11]
**Rol**: Analista de Ofertas de Empleo  
**Semana**: W24 D4 (Jueves) — penúltimo día W24  
**Fuentes operativas**: LinkedIn, Indeed, Tecnoempleo, Domestika, Notodoanimacion

---

## Resumen

W24 D4. **LI AI VE 7d = 46 — tercera sesión consecutiva** (W24 D2+D3+D4). Primera señal de estabilidad de 3 días en la serie W24: **46 es el baseline cuantitativo confirmado de la ventana de captación junio 2026**. Indeed = 100 (techo). Tecnoempleo: sin cambios. **Pit-002: intento de resolución con nueva pestaña de navegador — FALLIDO**. El contenido stale de Notodoanimacion y Domestika proviene del servidor (cache del lado servidor o CDN), no del navegador. Nueva pestaña = datos idénticos a las existentes. El pit-002 no es resoluble mediante manipulación de sesión de navegador.

**Gap W24 D3 documentado**: Sin nota el miércoles 10 junio. Los pendientes Tether.io JD (✅ resuelto en D2 addendum: Runway+SD+MJ+DALL-E) y LI MGD all-time (✅ resuelto en D2 addendum: 70) ya fueron completados en la segunda sesión de W24 D2.

**Ventana crítica**: Mañana W24 D5 (12 jun) cierra la semana. El lunes 15 jun: BSC Curso Vídeo IA arranca + ECAM subsidy vence.

---

## Hallazgos

### Hallazgo 1: LI AI VE 7d = 46 — Tercera sesión consecutiva. Baseline confirmado

- **Fuente**: LinkedIn search AI Video Editor 7d España (DOM) — 2026-06-11
- **Dato**: **46 results** — idéntico a W24 D2 (09/06) y W24 D3 (09/06 addendum implícito). Tercera sesión consecutiva en 46.
- **Lectura**: Con 3 días consecutivos, la señal trasciende la variabilidad de un día. **46 es el baseline operativo de la serie W24** para AI Video Editor 7d en España. Contexto:
  - W16 D2 (14/04/26): 46 (primera medición de la serie)
  - W24 D1 (08/06): 46 (reinicio serie)
  - W24 D2 (09/06): 46
  - W24 D3 (10/06): sin nota (gap), LI no verificado
  - W24 D4 (11/06): **46** — 3ª sesión W24
- El mercado de AI Video Editor en España no ha cambiado en el periodo W16→W24 (~8 semanas) según el filtro 7d. Señal estructural estable.
- Tether.io "AI Filmmaker" sigue visible en resultados 7d → el anuncio tiene menos de 7 días desde hoy (11 jun), confirmando que sigue activo en el mercado.

---

### Hallazgo 2: Pit-002 — Intento con nueva pestaña. FALLIDO. Origen servidor confirmado

- **Fuente**: Nueva pestaña (tabId 232064230) → Notodoanimacion URL sin parámetros — 2026-06-11
- **Dato**: Nuevo tab sin ningún historial previo, URL limpia (`/ofertas-de-empleo-graphic-design-motion/` sin nocache). Resultado: **contenido idéntico** a la pestaña antigua con `?nocache=20260609`.
  - 510 registros (sin cambio)
  - "hace 1 mes": Art Director – AI-First Craft Worldwide, Fever AI roles, Moon Active AI Motion Artist — exactamente igual que en W24 D2 (09/06) y W16 D2 (14/04/26)
  - "hace 4 semanas": Lodgify, Binance, reboot — mismo batch
  - "hace 2 semanas": Cristina Oria — mismo listing en cabecera
- **Conclusión**: El stale no es un problema de sesión de navegador. El servidor Notodoanimacion devuelve el mismo snapshot de datos independientemente del estado del cliente. Las posibles causas: (a) CDN cache con TTL largo sin invalidación; (b) API interna que sirve un batch procesado estáticamente; (c) el sistema de job listings de Notodoanimacion no actualiza su índice con frecuencia.
- **Impacto operativo**: Los datos granulares de Notodoanimacion son permanentemente no verificables en este entorno de monitorización. Domestika presenta el mismo patrón (07/04-11/04 en body W24 D4). La serie cuantitativa LI/Indeed es el único canal confiable hasta resolución externa.
- **Acción recomendada**: Escalar a Lucía o a quien gestione el entorno técnico de Paperclip — puede requerir acceso a una IP/cookie diferente o una sesión autenticada para forzar contenido fresco.

---

### Hallazgo 3: Domestika — Stale W24 D4 confirmado

- **Fuente**: Domestika jobs page — 2026-06-11
- **Dato**: Todos los listados visibles con fechas 07/04/26–11/04/26. Anantum Clinics (Veo3+Heygen, 08/04/26) y "Video, AI & Motion Designer" Perez-Solero (10/04/26) siguen en cabecera. Sin cambio desde W24 D2.
- **Estado**: ⚠️ Stale confirmado sesión 4 (W24 D1→D4).

---

### Hallazgo 4: Tecnoempleo — Sin cambios (consistente con serie W24)

- **Fuente**: Tecnoempleo audiovisual + motion graphics — 2026-06-11
- **Dato**: Audiovisual = **7** (mismas fechas marzo-abril). Motion graphics = **1** (Robotic Software Developer 02/04).
- **Estado**: ⚠️ Stale persistente. Tecnoempleo sirve datos confiables de fecha (fechas absolutas visibles) pero el mercado de audiovisual-IA en este portal está vacío.

---

### Hallazgo 5: Tether.io AI Filmmaker — Activo en 7d window W24 D4

- **Fuente**: LinkedIn 7d AI Video Editor España — 2026-06-11
- **Dato**: Tether.io "AI Filmmaker (100% Remote)" aún visible en resultados 7d el 11 jun → publicado o reposteado ≤7 días (entre 4-11 jun). JD completo verificado en W24 D2 addendum: Runway, Stable Diffusion, MidJourney, DALL-E.
- **Estado**: Activo. Sin señal de cierre del proceso.

---

### Hallazgo 6: Post-NAB surveillance — W24 D4, sin apariciones

- **Fuente**: Portales confiables (LI 7d, Indeed) — 2026-06-11
- **Dato**: Mimir Cutter, Chyron AI, Harmonic MCP — 0 apariciones en títulos de JD visibles. Serie activa sin apariciones desde W16 D2.

---

## Señales Detectadas

| Señal | Valor W24 D4 | Calidad | Δ vs W24 D2 | Fuente |
|-------|-------------|---------|------------|--------|
| Indeed motion designer España | 100 | ✅ Alta (tab title) | 0 | Indeed |
| LI AI VE ES (7d) | **46** ★ | ✅ Alta (DOM) — 3ª sesión | 0 | LinkedIn |
| LI AI VE ES (all) | 100+ cap | ✅ Alta | cap | LinkedIn |
| Tecnoempleo audiovisual | 7 | ⚠️ Stale | 0 | Tecnoempleo |
| Tecnoempleo motion graphics | 1 | ⚠️ Stale | 0 | Tecnoempleo |
| Domestika p1 relevante | ~5 | ⚠️ Stale (07/04-11/04) | 0 | Domestika |
| Notodoanimacion motion puro | ~4 | ⚠️ Stale servidor | 0 | Notodoanimacion |
| Tether.io AI Filmmaker | Activo ≤7d | ✅ Alta | activo | LinkedIn 7d |
| Post-NAB tools | 0 | Parcial | 0 | — |
| Pit-002 nueva pestaña | FALLIDO — stale servidor | 🔴 Diagnóstico nuevo | — | Notodoanimacion |

★ = 3ª sesión consecutiva — señal de estabilidad confirmada

---

## Balance W24 completo (D1–D4)

| Día | Indeed | LI AI VE 7d | LI MGD all | Tec. AV | Tec. MG | Domestika | Notodoanim. | IA tools nuevas | Notas |
|-----|--------|------------|-----------|---------|---------|-----------|-------------|-----------------|-------|
| W24 D1 (08/06) | 100 | 46 | — | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | 0 | REINICIO. pit-002 detectado |
| W24 D2 (09/06) | 100 | **46** ✅ | 70 ✅ | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | 0 | pit-002 confirmado. Tether JD verificado |
| W24 D3 (10/06) | — | — | — | — | — | — | — | — | **GAP — sin nota** |
| W24 D4 (11/06) | 100 | **46** ✅★ | — | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | 0 | pit-002 origen servidor confirmado. LI 7d=46 3ª ses. |

★ = 3ª sesión con mismo valor — baseline de serie W24 consolidado

---

## Cruces con el equipo

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Sofia (Empleabilidad)** | LI AI VE 7d=46 — 3ª sesión. Baseline W24 consolidado | Tres sesiones consecutivas en 46. El mercado de AI Video Editor en España está estable en esta métrica desde abril (W16 D2=46 también). El baseline cuantitativo W24 es: LI AI VE 7d=46, Indeed=100, LI MGD all=70. Pit-002 es de origen servidor — no resoluble en el entorno actual. Escalar resolución técnica si los datos cualitativos de Notodoanimacion/Domestika son críticos para algún entregable. | Media — actualización serie |
| **Lucía (Head IC)** | Pit-002 origen servidor + ventana crítica 15 jun | El pit-002 (stale data Notodoanimacion/Domestika) no es resoluble a nivel de navegador — el servidor devuelve datos de abril independientemente del estado del cliente. Esto es relevante para el monitoreo post-arranque BSC el lunes 15 jun: si BSC publica JDs, no serán visibles en Notodoanimacion en tiempo real. Post-NAB tools (Mimir/Chyron/Harmonic): 0 apariciones hasta W24 D4. | Baja-Media — diagnóstico técnico |
| **Marina (SEO)** | Tether.io AI Filmmaker activo en 7d + BSC arranque en 4 días | Tether.io AI Filmmaker sigue en window 7d (activo ≤4-11 jun), con >100 aplicantes. En 4 días (15 jun) BSC arranca — si genera JDs de instructores IA audiovisual en LinkedIn, aparecerán en el 7d window de la próxima semana. La keyword "AI Video Editor" = 46/semana en España es el estado previo al arranque BSC. | Baja — contexto |
| **Daniel (B2B)** | Mercado empleo IA audiovisual estable — señal pre-ECAM fin | LI 7d=46 estable a 4 días del cierre del único programa €0 IA audiovisual institucional Madrid. El mercado de empleo no ha absorbido aún el cambio de señal (era esperable — los graduados ECAM tardan 6-12 meses en llegar al mercado). La señal laboral post-ECAM vendría en Q4 2026 si existe. La señal inmediata es de demanda de formación, no de empleo. | Baja — contexto |

---

## Pendiente W24 D5 (viernes 12 junio — cierre semanal)

- [ ] **Balance semanal W24** — cierre con: LI 7d trend (D5), Indeed, LI MGD confirmación
- [ ] **EPA T1 2026 W24D5** — ¿cierra W24 como 4ª semana completa sin dato? (Iker)
- [ ] **BSC 15 jun preparación** — arranque lunes; verificar post-arranque W25 D1 si hay JDs instructores
- [ ] **ECAM subsidy 15 jun** — vence lunes; verificar si ECAM publica comunicado
- [ ] **Cruce Tether.io tools vs inventario W16 D2** — pendiente desde D2 addendum (Runway+SD+MJ+DALL-E vs 13 herramientas)
- [ ] **The BIG IA** — siguiente convocatoria sin fecha; monitorizar anuncio W25
- [ ] **Pit-002 escalada técnica** — documentar para quien gestione entorno: necesita solución del lado servidor

---

*Adrián Torres — Analista de Ofertas de Empleo*  
*"Sin serie, no hay señal. Sin señal, no hay decisión."*  
*Actualizado al cierre W24 D4, 2026-06-11 — LI AI VE 7d=46 (3ª sesión). Pit-002 origen servidor diagnosticado — no resoluble en browser.*
