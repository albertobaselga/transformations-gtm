# Marina Reyes — Nota Diaria 2026-06-09 (W24 Día 2 — martes)

## Resumen

W24 día 2. **Trends operativo** — 429 W24D1 fue transitorio; NID auto-recuperado sin intervención. D9 TRANSICIÓN — 31ª sesión (W17D3→W24D2, 60 días desde NAB). Endpoint sigue en 12-18 abr=hasData:false, sin avance adicional. Datos post-NAB (19 abr+) aún no visibles. `runway ml` pico 22-28 mar=100 confirmado estable. `edicion video ia` pico dic 2025=100 confirmado (rescaling #3 W23D5 estable).

---

## Datos Trends W24D2

### runway ml (ES, 12m) — OPERATIVO

| Campo | Dato |
|-------|------|
| Estado Trends | ✅ **Operativo — 429 W24D1 transitorio; NID auto-recuperado** |
| Valor actual (5-11 abr) | **54** |
| Pico absoluto | 22-28 mar 2026 = **100** (confirmado estable) |
| Co-pico | 15-21 mar 2026 = 85 |
| Plateau post-pico | 29 mar–4 abr = 54; 5-11 abr = 54 |
| Endpoint | 12-18 abr = hasData:false (**sin avance — 31ª sesión**) |
| Estado D9 | 🟡 **D9 TRANSICIÓN — 31ª sesión (W17D3→W24D2, 60 días desde NAB)** |

**Análisis**: Pico 22-28 mar=100 confirmado por segunda sesión consecutiva con datos (W23D5 + W24D2). Plateau 54 estable (vs 55 W23D5 — variación de normalización normal). Señal estructural sólida. El 429 W24D1 fue ruido de sesión NID, no señal de problema sistémico. Endpoint sin avance: datos post-NAB (19 abr+) siguen invisibles.

### edicion video ia (ES, 12m) — OPERATIVO

| Campo | Dato |
|-------|------|
| Estado Trends | ✅ **Operativo — 429 W24D1 transitorio; NID auto-recuperado** |
| Pico absoluto (rescaling #3) | 21-27 dic 2025 = **100** (confirmado estable W23D5+W24D2) |
| 29 mar–4 abr | 16 |
| 5-11 abr | 15 |
| Endpoint | 12-18 abr = hasData:false (**sin avance — 31ª sesión**) |
| Estado D9 | 🟡 **D9 TRANSICIÓN — 31ª sesión; keyword inestable `<50/mes`** |

**Análisis**: Rescaling #3 (dic 2025=100, W23D5) confirmado estable en W24D2. Los valores 29 mar–4 abr=16 (vs 19 en W23D5) y 5-11 abr=15 son variación de muestreo esperada para keyword `<50/mes` — no indica cambio de demanda. Keyword no apta para análisis direccional sin cookie fresca.

---

## Señales del Día

### D9 TRANSICIÓN — 31ª sesión (60 días desde NAB)

- 429 W24D1 fue **transitorio** — NID auto-recuperado en W24D2 sin cookie fresca
- Endpoint 12-18 abr=hasData:false — **sin avance adicional** vs W23D4/W23D5
- Datos post-NAB (19 abr+) aún no visibles tras 31 sesiones
- W21+W22+W23+W24 (2 ses.) = **17 sesiones sin datos post-NAB**
- **Cookie fresca Pablo Navarro: urgente** — único lever para ver datos 19 abr+

### EPA T1 2026 — Señal excepcional persistente

- >6 semanas de retraso sobre patrón T1 2025 (publicado 28 abr 2025)
- Tercera escalada: verificar con Lucía Ferrer si Iker sin confirmación

### SHIFTA — Semana 3

- Cohorte mayo semana 3; monitorizar apertura plazas track octubre

---

## Balance W24 (parcial — D1+D2)

| Día | runway ml | edicion video ia | Endpoint | Evento |
|-----|-----------|-----------------|----------|--------|
| W24D1 (08/06) | ❌ 429 | ❌ 429 | 12-18 abr | D9 TRANSICIÓN 30ª ses.; 429 transitorio |
| W24D2 (09/06) | 54 (pico 22-28 mar=100 ✅) | pico dic 2025=100 ✅; 29 mar=16; 5-11 abr=15 | 12-18 abr | D9 TRANSICIÓN 31ª ses.; endpoint sin avance |

---

## Prioridades W24D2 → W24D3

- **P1**: Cookie fresca Pablo Navarro — urgente para datos post-NAB (19 abr+); 60 días, 17 sesiones sin avance
- **P2**: EPA T1 2026 — tercera escalada a Lucía Ferrer si Iker no confirma
- **P3**: SHIFTA semana 3 — señal apertura plazas octubre
- **P4**: Sector sweep W24 — reset semanal (27 competidores, núcleo 6 🔴 ALTA)

---

## Referencias

- Trends config: `sources/trends/w24d2-pending.md`
- DB keywords: `sources/search-demand/keywords-database.md`
- Cluster URL 11: `sources/search-demand/cluster-seo-operativo-15-urls.md`

---

*Actualizado al cierre W24D2, 2026-06-09 — Trends operativo; 429 W24D1 transitorio confirmado. Endpoint 12-18 abr sin avance (31ª sesión, 60 días NAB).*
