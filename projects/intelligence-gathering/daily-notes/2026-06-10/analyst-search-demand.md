# Marina Reyes — Nota Diaria 2026-06-10 (W24 Día 3 — miércoles)

## Resumen

W24 día 3. Trends operativo. D9 TRANSICIÓN — 32ª sesión (W17D3→W24D3, 61 días desde NAB). Endpoint sigue en 12-18 abr=hasData:false, sin avance por tercera sesión consecutiva en W24. `runway ml` plateau 55 — variación de normalización vs W24D2=54 (rango 54-55 esperado, no cambio real [pit-005]). `edicion video ia` pico dic 2025=100 confirmado por tercera sesión consecutiva desde W23D5 — rescaling #3 estable.

---

## Datos Trends W24D3

### runway ml (ES, 12m) — OPERATIVO

| Campo | Dato |
|-------|------|
| Estado Trends | ✅ **Operativo** |
| Valor (5-11 abr) | **55** (vs 54 W24D2 — var.norm.; rango 54-55 esperado [pit-005]) |
| Pico absoluto | 22-28 mar 2026 = **100** (confirmado estable — 3ª sesión W24) |
| Co-pico | 15-21 mar 2026 = **85** |
| Plateau post-pico | 29 mar–4 abr = **55**; 5-11 abr = **55** |
| Endpoint | 12-18 abr = hasData:false (**sin avance — 32ª sesión**) |
| Estado D9 | 🟡 **D9 TRANSICIÓN — 32ª sesión (W17D3→W24D3, 61 días desde NAB)** |

**Análisis**: Plateau vuelve a 55 tras el 54 de W24D2 — variación de normalización dentro del rango esperado para `50-300/mes`. No indica cambio de demanda [pit-005]. Pico 22-28 mar=100 intacto. Endpoint congelado en 12-18 abr por 32 sesiones consecutivas.

### edicion video ia (ES, 12m) — OPERATIVO

| Campo | Dato |
|-------|------|
| Estado Trends | ✅ **Operativo** |
| Pico absoluto (rescaling #3) | 21-27 dic 2025 = **100** (confirmado — W23D5+W24D2+W24D3: 3 sesiones consecutivas) |
| 29 mar–4 abr | **19** (vs 16 W24D2 — var.norm. `<50/mes`) |
| 5-11 abr | **16** (vs 15 W24D2 — var.norm.) |
| Endpoint | 12-18 abr = hasData:false (**sin avance — 32ª sesión**) |
| Estado D9 | 🟡 **D9 TRANSICIÓN — 32ª sesión; keyword inestable `<50/mes`** |

**Análisis**: Rescaling #3 (dic 2025=100) confirmado estable por tercera sesión consecutiva. Los valores 29 mar–4 abr=19 y 5-11 abr=16 son variación de muestreo para `<50/mes` — no indica cambio. Serie 12m muestra patrón event-driven extremo: único spike dic 2025; todo lo demás hasData:false o cero. Keyword no apta para análisis sin cookie fresca.

---

## Señales del Día

### D9 TRANSICIÓN — 32ª sesión (61 días desde NAB)

- Endpoint **congelado en 12-18 abr** por 32 sesiones (W17D3→W24D3)
- Datos post-NAB (19 abr+) aún no visibles
- W21+W22+W23+W24 (3 ses.) = **18 sesiones sin datos post-NAB**
- **Cookie fresca Pablo Navarro: urgente** — único lever para ver datos 19 abr+

### Observación de serie 12m — runway ml

La serie completa 12m de W24D3 revela el baseline pre-fund con mayor detalle:
- Verano 2025: múltiples hasData:false (semanas 13-19 abr, 11-17 may, 22-28 jun, 6-19 jul, 24 ago–13 sept, 14 sept–11 oct)
- Ramp-up orgánico: oct-nov 2025 (51→61→66→58→59)
- Dic 2025: 30 nov–6 dic=82 (pre-pico); dic medio=64; baja 43→33 (navidades)
- Ene-feb 2026: 35→50→31→43→34→43→37 (baseline estable ~35-50)
- Mar 2026: aceleración 69→77→85→100 ($10M fund 31 mar)

Confirma: el plateau actual 54-55 es +15-20pts sobre baseline pre-fund (~35-40). Señal estructural mantenida 10+ semanas post-anuncio.

### EPA T1 2026 — Señal excepcional persistente

- >6 semanas de retraso vs T1 2025 (publicado 28 abr 2025)
- Tercera escalada: verificar con Lucía Ferrer

### SHIFTA — Semana 3

- Monitorizar apertura plazas track octubre

---

## Balance W24 (parcial — D1+D2+D3)

| Día | runway ml | edicion video ia | Endpoint | Evento |
|-----|-----------|-----------------|----------|--------|
| W24D1 (08/06) | ❌ 429 | ❌ 429 | 12-18 abr | D9 TRANSICIÓN 30ª ses.; 429 transitorio |
| W24D2 (09/06) | 54 (pico 100 ✅) | pico dic=100 ✅; 29 mar=16; 5-11=15 | 12-18 abr | D9 31ª ses.; endpoint sin avance |
| W24D3 (10/06) | 55 (pico 100 ✅; var.norm.) | pico dic=100 ✅; 29 mar=19; 5-11=16 (var.norm.) | 12-18 abr | D9 32ª ses.; endpoint sin avance |

---

## Prioridades W24D3 → W24D4

- **P1**: Cookie fresca Pablo Navarro — urgente (61 días, 18 ses. sin post-NAB)
- **P2**: EPA T1 2026 — tercera escalada a Lucía Ferrer
- **P3**: SHIFTA semana 3 — apertura plazas octubre
- **P4**: Sector sweep W24 — 27 competidores, núcleo 6 🔴 ALTA

---

## Referencias

- Trends config: `sources/trends/w24d3-pending.md`
- DB keywords: `sources/search-demand/keywords-database.md`
- Cluster URL 11: `sources/search-demand/cluster-seo-operativo-15-urls.md`

---

*Actualizado al cierre W24D3, 2026-06-10 — Trends operativo. Endpoint 12-18 abr sin avance (32ª sesión, 61 días NAB). runway ml plateau 54-55 estable; edicion video ia pico dic 2025=100 estable (3ª ses. consecutiva).*
