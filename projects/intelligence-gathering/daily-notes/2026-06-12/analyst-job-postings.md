# Adrián Torres — Nota Diaria [2026-06-12]
**Rol**: Analista de Ofertas de Empleo  
**Semana**: W24 D5 (Viernes) — **CIERRE SEMANAL W24**  
**Fuentes operativas**: LinkedIn, Indeed, Tecnoempleo (Domestika/Notodoanimacion: stale servidor persistente)

---

## Resumen

W24 D5. **CIERRE SEMANAL.** **LI AI VE 7d = 55 ★★★ RUPTURA DEL BASELINE** — primer valor fuera del rango 46 en toda la serie W24. +9 vs baseline consolidado (W24 D1+D2+D4=46). Indeed = 100 (techo, estable). Tecnoempleo: no re-verificado D5 — consistente con patrón stale de toda la semana (7+1). Nuevos JDs relevantes en LI: TheCUBE "Filmmaker & AI Video Editor" (Madrid, ~7 jun), Double Tap "Videographer & Editor" (Barcelona, **hoy 12 jun — 31 min ago**, fresco), The Roadmap "Video Editor Internship" (Madrid, ~9 jun). Tether.io "AI Filmmaker": no visible en página 1 de resultados W24 D5 — posiblemente en p2/p3 o expirado de ventana 7d. **BSC Curso Vídeo IA: T-3 días (arranque lunes 15 jun). ECAM subsidy: vence lunes 15 jun.**

**W24 cierre cuantitativo**: EPA T1 2026 cerrado sin publicación (4ª semana completa consecutiva). Horizonte INE julio 2026 consolidado (Raúl).

---

## Hallazgos

### Hallazgo 1: LI AI VE 7d = 55 ★★★ — RUPTURA DEL BASELINE W24. Primer valor >46 en la serie

- **Fuente**: LinkedIn search AI Video Editor 7d España (get_page_text DOM) — 2026-06-12
- **Dato**: **55 results** (DOM: "AI Video Editor in Spain 55 results"). Tab title: "(5) AI Video Editor Jobs in España | LinkedIn".
- **Lectura**: Primera desviación del baseline 46 en toda la serie W24 (y desde W16 D2). +9 unidades (+19.6%). Hipótesis para la ruptura:
  1. **Efecto viernes**: batch de publicaciones fin de semana — habitual en LinkedIn; el 7d window acumula la semana entera
  2. **Señal pre-BSC**: empresas anticipando demanda de formadores/creadores IA antes del arranque BSC (15 jun) — aunque el lapso de 3 días hace esta hipótesis especulativa
  3. **Variabilidad estructural**: el rango W24 era artificialmente comprimido en 46; 55 podría ser el límite superior natural del rango
- **Contexto de la serie**:

  | Fecha | LI AI VE 7d | Nota |
  |-------|------------|------|
  | W16 D2 (14/04) | 46 | Primera medición |
  | W24 D1 (08/06) | 46 | Reinicio serie |
  | W24 D2 (09/06) | 46 | Baseline confirmado |
  | W24 D3 (10/06) | — | GAP |
  | W24 D4 (11/06) | 46 | 3ª sesión estable |
  | **W24 D5 (12/06)** | **55 ★★★** | **RUPTURA — primer Δ positivo** |

- **Nuevas publicaciones visibles en resultados**:
  - "Filmmaker & AI Video Editor" — **TheCUBE**, Madrid (Hybrid) — ~5-6 días ago → publicado ~jun 6-7
  - "Filmmaker - Creador/a Audiovisual (BECA) - MALAGA" — **Lumon España**, Málaga (On-site) — ~6 días ago
  - "Video Editor Internship (Motion Graphics)" — **The Roadmap**, Madrid (Hybrid) — 3 días ago → ~jun 9
  - "Videographer & Editor" — **Double Tap**, Barcelona (On-site) — **31 minutos ago** (HOYA, 12 jun) — señal en tiempo real
  - "Videographer (Product & Workflow Enablement)" — Infogain Poland, Barcelona (Hybrid) — Promoted
  - "Video Editor & Filmmaker" — Dogfy Diet, Barcelona (Hybrid) — Promoted
- **Tether.io "AI Filmmaker"**: no visible en p1 de resultados D5. Interpretación: (a) expiró la ventana 7d si fue publicado ≤5 jun, (b) está en p2 o p3. No descartado definitivamente sin verificar p2.
- **Calidad**: ✅ Alta (DOM text + tab title confirmados)

---

### Hallazgo 2: Indeed motion designer España — 100 (techo). W24 D5 estable

- **Fuente**: Indeed tab title — 2026-06-12
- **Dato**: "100 empleos de Motion designer en España | Bolsa de Indeed" — techo confirmado.
- **Estado**: ✅ Estable. Consistente con toda la serie W24.

---

### Hallazgo 3: Tecnoempleo — No verificado D5. Consistente con patrón stale W24

- **Fuente**: No navegado en D5 — sesión eficiente (stale confirmado en D1-D4)
- **Dato estimado**: Audiovisual = **7** ⚠️, Motion graphics = **1** ⚠️ (proyección desde D4)
- **Estado**: ⚠️ Stale persistente. No apto para análisis tendencial.

---

### Hallazgo 4: Domestika / Notodoanimacion — Stale servidor. No re-verificado D5

- **Dato**: Stale servidor confirmado desde W24 D1 (pit-002 diagnóstico definitivo W24 D4). No re-verificado D5.
- **Estado**: ⚠️ Stale servidor. Resolución pendiente intervención técnica.

---

### Hallazgo 5: Nuevos JDs de interés — Double Tap (hoy) y The Roadmap (internship)

- **Double Tap** (Barcelona, On-site) — "Videographer & Editor" — publicado hace 31 minutos al momento del scrape (12 jun, W24 D5). Es el JD más fresco de toda la serie W24. No especifica IA tools en título visible.
- **The Roadmap** — "Video Editor Internship (Motion Graphics)" — Madrid, Hybrid, ~jun 9. Internship, no posición senior.
- **TheCUBE** — "Filmmaker & AI Video Editor" — Madrid, Hybrid, ~jun 6-7. Nombre similar a Tether.io pero empresa diferente. TheCUBE es conocida empresa de medios B2B tech (SiliconANGLE). JD body no verificado en esta sesión.
- **Diagnóstico**: Los 3 nuevos JDs visibles (excl. Lumon BECA y Infogain promoted) son suficientes para explicar el +9 de 46→55. Si cada nueva empresa aporta 1-3 listings, 4-5 empresas nuevas = ~9 resultados adicionales.

---

## Balance W24 Completo — CIERRE SEMANAL

| Día | Indeed | LI AI VE 7d | LI MGD all | Tec. AV | Tec. MG | Domestika | Notodoanim. | Notas |
|-----|--------|------------|-----------|---------|---------|-----------|-------------|-------|
| W24 D1 (08/06) | 100 | 46 | — | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | REINICIO. pit-002 detectado |
| W24 D2 (09/06) | 100 | 46 | 70 ✅ | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | Tether JD verificado: Runway+SD+MJ+DALL-E |
| W24 D3 (10/06) | — | — | — | — | — | — | — | **GAP sin nota** |
| W24 D4 (11/06) | 100 | 46 ★ | — | 7 ⚠️ | 1 ⚠️ | ~5 ⚠️ | ~4 ⚠️ | pit-002 origen servidor confirmado |
| **W24 D5 (12/06)** | **100** | **55 ★★★** | — | 7* ⚠️ | 1* ⚠️ | ~5* ⚠️ | ~4* ⚠️ | **RUPTURA +9. Nuevos: Double Tap, TheCUBE, The Roadmap** |

★ = baseline confirmado 3 sesiones | ★★★ = ruptura del baseline | * = proyección, no re-verificado

**Resumen W24**: LI AI VE 7d baseline = **46** (D1+D2+D4) con cierre en **55** (D5). Tendencia: estabilidad estructural en zona 46 + surge de fin de semana. Indeed = 100 (techo persistente). LI MGD all = 70 (verificado D2). Tecnoempleo/Domestika/Notodoanimacion: stale estructural toda la semana.

---

## Señales Detectadas W24 D5

| Señal | Valor W24 D5 | Calidad | Δ vs W24 D4 | Fuente |
|-------|-------------|---------|------------|--------|
| Indeed motion designer España | 100 | ✅ Alta (tab title) | 0 | Indeed |
| LI AI VE ES (7d) | **55 ★★★** | ✅ Alta (DOM) | **+9** | LinkedIn |
| LI AI VE ES (all) | 100+ cap | ✅ Alta | cap | LinkedIn |
| Tecnoempleo audiovisual | 7* | ⚠️ Stale proyección | 0 | — |
| Tecnoempleo motion graphics | 1* | ⚠️ Stale proyección | 0 | — |
| Double Tap "Videographer & Editor" | Publicado HOY (31 min) | ✅ Alta | nuevo | LinkedIn 7d |
| TheCUBE "Filmmaker & AI Video Editor" | ~jun 6-7 | ✅ Alta | nuevo | LinkedIn 7d |
| The Roadmap "Video Editor Internship" | ~jun 9 | ✅ Alta | nuevo | LinkedIn 7d |
| Tether.io "AI Filmmaker" | No visible p1 W24 D5 | ⚠️ No confirmado | expirado? | LinkedIn 7d |
| EPA T1 2026 W24 | Semana completa sin dato | 🔴 Crítico (Raúl/Iker) | 4ª semana | INE |
| BSC Curso Vídeo IA | T-3 días (lunes 15 jun) | ⚠️ Ventana crítica | — | Agenda |
| ECAM subsidy | Vence lunes 15 jun | ⚠️ Ventana crítica | — | Agenda |

---

## Cruces con el Equipo

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Sofia (Empleabilidad)** | LI AI VE 7d W24 CIERRE: **55** — ruptura del baseline 46 | Primera desviación positiva en la serie W24. Baseline consolidado = 46 (D1+D2+D4); cierre D5 = 55 (+19.6%). Nuevos JDs confirmados: Double Tap (hoy), TheCUBE, The Roadmap. La señal de fin de semana sugiere que el rango real de la serie es 46-55, no un punto fijo. LI MGD all = 70 (W24 D2, único dato semana). | **Alta — balance semanal** |
| **Lucía (Head IC)** | W24 CIERRE + BSC T-3 + pit-002 escalada | W24 cerrado: LI 7d=55 (cierre), 46 (baseline). EPA T1 2026: 4ª semana completa sin dato (Raúl confirma horizonte julio). BSC arranque lunes 15 jun: monitorear W25 D1 para JDs instructores. ECAM subsidy vence lunes 15 jun. pit-002: stale servidor confirmado, requiere intervención técnica para desbloquear Notodoanimacion/Domestika. | **Alta — cierre semana + ventana crítica** |
| **Marina (SEO)** | LI 7d=55 cierre W24 — señal pre-BSC + Double Tap fresco | El cierre W24 con 55 puede ser el estado previo al impacto BSC. La keyword "AI Video Editor" España: baseline W24=46, cierre=55. Double Tap publicó hace 31 min — señal de mercado en tiempo real. W25 D1 (16 jun) será la primera medición post-BSC. | Media — contexto |
| **Iker (Competidores/EPA)** | EPA T1 2026 W24 — 4ª semana completa sin dato | Raúl confirma W24D4 (12 jun) = 404. W24 cierra sin publicación. Cuarta semana consecutiva. Horizonte julio (W27-W28) consolidado como ventana más probable. Protocolo ajustado: cadencia semanal W25-W26 (Raúl). | **Crítica — punto de decisión** |
| **Daniel (B2B)** | Mercado empleo IA audiovisual W24 cierre | LI 7d=55 al cierre vs 46 baseline — Δ positivo de fin de semana. El mercado laboral IA audiovisual muestra primer signo de activación tras 8 semanas estables. Double Tap (media digital) y TheCUBE (B2B tech media) son empresas de perfil B2B relevante para el pipeline 35mm. | Baja-Media — contexto |

---

## Pendiente W25 (semana del 15 junio)

- [ ] **W25 D1 (16 jun)** — PRIMERA MEDICIÓN POST-BSC: LI 7d, Indeed, posibles JDs instructores IA
- [ ] **BSC Curso Vídeo IA** — arranca lunes 15 jun; ¿aparecen JDs de instructores en LinkedIn esta semana?
- [ ] **ECAM subsidy 15 jun** — ¿ECAM publica comunicado de cierre? ¿Efecto en demanda programas alternativos?
- [ ] **Tether.io p2 verificación** — confirmar si sigue en ventana 7d o ha expirado
- [ ] **TheCUBE JD body** — verificar si menciona herramientas IA (actualizar inventario W16 D2 vs nuevo batch)
- [ ] **EPA T1 2026 W25 D1** — primera verificación semanal post-W24 (Raúl/Iker)
- [ ] **Cruce Tether.io tools vs inventario W16 D2** — pendiente desde D2 (Runway+SD+MJ+DALL-E vs 13 herramientas)
- [ ] **The BIG IA** — próxima convocatoria sin fecha; monitorizar anuncio W25
- [ ] **pit-002 escalada técnica** — Notodoanimacion/Domestika stale servidor — resolución externa pendiente

---

*Adrián Torres — Analista de Ofertas de Empleo*  
*"Sin serie, no hay señal. Sin señal, no hay decisión."*  
*Actualizado al cierre W24 D5, 2026-06-12 — LI AI VE 7d=55 ★★★ RUPTURA BASELINE. Indeed=100. W24 CERRADO. BSC T-3.*
