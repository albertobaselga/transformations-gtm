# Raúl Vega — Nota Diaria 2026-06-02
## Resumen

HB40 (W23D1 / Reset semanal W23). BOE sin resoluciones — W14-W23D1 estable. Señal contextual: BOE-A-2026-7905 BSC-CNS / Plan Nacional Tecnologías del Lenguaje (NextGenEU, 27 marzo 2026) — ecosistema NextGenEU-IA en expansión en España. EPA T1 2026: **escenario extremo activo W23D1**, sin publicación. Retraso acumulado ~35 días sobre T1 2025. W23 (2-6 junio) es la ventana de mayor probabilidad — **verificación diaria activada**. Protocolo extracción dual-coding CNAE-2009/CNAE-2025 preparado para activación inmediata.

---

## Hallazgos

### Hallazgo CZA: BOE 2 junio — sin resoluciones. Señal contextual NextGenEU-IA.

- **Fuente**: BOE (verificado 2026-06-02)
- BOE-A-2024-27390: sin nuevas resoluciones. 18 concesionarios originales (~€6,49M NextGenEU) estables.
- Patrón: W14 a W23D1 sin modificaciones.

**Señal contextual — MEDIA RELEVANCIA:**

> **BOE-A-2026-7905** — Plan Nacional para las Tecnologías del Lenguaje. BSC-CNS (Barcelona Supercomputing Center) + NextGenEU. Publicado: 27 marzo 2026.

- El ecosistema NextGenEU-IA en España continúa en expansión institucional en 2026.
- Patrón de publicaciones BOE: AESIA-IGAE (BOE-A-2026-7941) + ICAA-RTVE (BOE-A-2026-7987) + BSC-CNS PLN (BOE-A-2026-7905) — tres vectores institucionales IA activos en marzo 2026.
- Relevancia para FAS-21: contexto institucional favorable para que los beneficiarios de BOE-A-2024-27390 aceleren adopción formativa en IA.
- Sin impacto directo en mapa competidores hoy — señal de contexto de medio plazo.
- **Confianza**: Alta

---

### Hallazgo CZB: EPA T1 2026 — W23D1 sin publicación. Verificación diaria activada.

- **Fuente**: INE directo + WebSearch (verificado 2026-06-02)
- EPA T1 2026 NO PUBLICADA a W23D1. Última nota disponible = T4 2025 (27 enero 2026).
- **Retraso acumulado: ~35 días sobre T1 2025** (~28 abril 2025 → >2 junio 2026).
- W23 (2-6 junio 2026) = **ventana de mayor probabilidad activa**.
- **Verificación diaria activada** para W23.

**Protocolo de activación al detectar publicación:**

| Paso | Acción |
|------|--------|
| 1 | Verificar nota INE: ine.es/dyngs/Prensa/EPA1T26.htm |
| 2 | Extraer: tasa paro T1 2026, ocupados totales, variación trimestral |
| 3 | Dual-coding CNAE: sectores 59/60 en CNAE-2009 vs. equivalentes CNAE-2025 |
| 4 | Documentar ruptura de serie vs. T4 2025 (9,93% paro / 22.463.300 ocupados) |
| 5 | Notificar Sofia + Lucía — desactivar proxy documental |

- **Proxy documental activo** hasta publicación real
- **Confianza**: Alta (doble verificación independiente)

---

## Estado bloqueadores FAS-21 (HB40)

| Bloqueador | Estado |
|------------|--------|
| B1 — Acuerdo Sectorial | ✅ RESUELTO |
| B2 — FUNDAE RSEF | 🔴 **CRÍTICO MÁXIMO** — SHIFTA + 4 actores operativos. 35mm sin canal. |
| B3 — TAM B2B | 🔴 **EXTREMO** — EPA W23D1 sin publicar. Verificación diaria W23. Proxy activo. |
| B4 — Mapping competidores | ✅ ACTIVO — 26 analizados, núcleo 6 🔴 estable |

---

## Señales detectadas W23D1

| Señal | Valor | Delta | Fuente |
|-------|-------|-------|--------|
| BOE-A-2024-27390 resoluciones | 0 (W14-W23D1) | Sin cambio | BOE |
| BOE-A-2026-7905 BSC-CNS PLN | Plan Nacional Tecnologías del Lenguaje — NextGenEU | Señal contextual media | BOE |
| EPA T1 2026 | Extremo W23D1 — retraso ~35 días sobre T1 2025 | +4 días (cierre W22→W23D1) | INE |
| EPA verificación | Diaria activada W23 | **Nuevo protocolo** | Protocolo |
| EPA protocolo activación | Preparado — 5 pasos dual-coding | Listo | Protocolo |

---

## Cruces con el equipo W23D1

| Analista | Cruce | Urgencia |
|----------|-------|----------|
| **Operaciones [CRÍTICA MÁXIMA]** | FUNDAE RSEF — 5 actores activos, 35mm sin canal. | CRÍTICA MÁXIMA |
| **Sofia / Iker [CRÍTICA]** | EPA: verificación diaria W23. Si publica → activar protocolo dual-coding inmediatamente. | CRÍTICA |
| **Elena / Daniel [Alta]** | Brief RTVE Pista B: ventana mayo cerrada — confirmar estado incorporación BOE-A-2026-7987 al brief. PCSP jun-jul activo. | Alta |

---

## Pendiente W23

- [ ] **EPA T1 2026**: verificación diaria martes 3 junio + continuación hasta publicación o fin W23
- [ ] **PCSP RTVE**: check semanal lunes 2 junio
- [ ] **Brief RTVE Pista B**: confirmar estado con Elena/Daniel
- [ ] **H46 LABASAD FUNDAE**: verificar si tiene RSEF activo

---

*Actualizado al cierre 2026-06-02 — HB40.*
