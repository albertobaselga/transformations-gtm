# Iker Molina — Nota Diaria 2026-07-07 (W28 Día 1 — Lunes) — Apertura semanal W28

## Resumen

W28D1. **Elisava FUNDAE presencial: SIN FUNDAE CONFIRMADO** ⚡ — WebFetch elisava.net confirma que el Máster Creación Audiovisual Avanzada IA y Virtual Production (€11.750, presencial Barcelona) no menciona FUNDAE, bonificación empresa ni Tripartita. Alerta condicional resuelta como negativa — config actualizado. **ECAM admision-master/ 2026-2027: SIN APERTURA** — sigue mostrando "Admisión máster 2025-2026" al W28D1. Trigger continúa activo. **Sector: 37 competidores** (estable). Sin nuevos lanzamientos.

---

## Hallazgos

### Hallazgo 1: Elisava FUNDAE presencial — **SIN FUNDAE CONFIRMADO** ⚡

- **Fuente**: WebFetch elisava.net/en/masters/master-audiovisual-production/ (consultado 2026-07-07)
- **Dato**:

| Campo | Dato |
|-------|------|
| Programa | Máster en Creación Audiovisual Avanzada IA y Virtual Production |
| Precio | **€11.250** + €500 pre-inscripción = **€11.750 total** (confirmado) |
| Inicio | **26 septiembre** (convocatoria principal) + **marzo** (convocatoria alternativa) |
| ECTS | 60 créditos |
| FUNDAE | **NO** — "The webpage does not mention FUNDAE, company bonification, or any form of employer-sponsored training funding" |
| Contacto | elisava@elisava.net / +34 93 317 47 15 |

- **Interpretación**: La alerta condicional `⚠️ alerta condicional: si FUNDAE confirmado → revisar a 🟠 MEDIA-ALTA` queda **resuelta como negativa**. Elisava presencial NO tiene FUNDAE → nivel 🟡 MEDIA se mantiene, no escala. El diferenciador FUNDAE de 35mm frente a Elisava presencial está **confirmado de forma definitiva**.
- **Distinción clave Elisava vs SHIFTA**: SHIFTA (weareshifta.com) SÍ tiene FUNDAE confirmado (ya en config). Elisava presencial (elisava.net) NO tiene FUNDAE. Son entidades distintas aunque relacionadas (SHIFTA = brazo online de Elisava).
- **Actualización config**: Eliminar `⚠️ alerta condicional: si FUNDAE confirmado` en la entrada Elisava. Añadir "**sin FUNDAE confirmado W28D1 2026-07-07**".
- **Decisión**: Nivel 🟡 MEDIA sin cambio. Pendiente de monitor: si lanza versión online o FUNDAE → revisión inmediata.

---

### Hallazgo 2: ECAM admision-master/ 2026-2027 — **SIN APERTURA W28D1**

- **Fuente**: WebSearch ecam.es/admision-master/ (consultado 2026-07-07)
- **Dato**: URL sigue mostrando "Admisión máster 2025-2026 - ECAM". Segunda semana completa sin apertura formal de admisión másteres 2026-2027 (trigger activo desde W27D3).
- **Datos adicionales observados**: La página del Máster IA Big Data Audiovisual (ecam.es/titulacion/master-online-en-inteligencia-artificial-y-big-data-para-la-industria-audiovisual/) sigue indexada en buscadores — es normal para programas discontinuados (las páginas de titulación se mantienen activas). No confundir con reapertura de programa.
- **Contexto estacional**: julio es período de verano para ECAM — apertura formal podría demorarse hasta septiembre si siguen el patrón de otras escuelas. Monitor continúa pero la urgencia del trigger puede disminuir si la apertura se produce en septiembre (patrón alternativo).
- **Decisión**: Monitor semanal W28 (en lugar de diario). Trigger activo: cuando admision-master/ muestre "2026-2027" → escalación a Lucía.

---

### Hallazgo 3: SHIFTA "13 julio" — **Motor de búsqueda repite error [strat-003]**

- **Fuente**: WebSearch sector sweep (consultado 2026-07-07)
- **Dato**: El AI-generated summary del search engine vuelve a mencionar "SHIFTA: July 13, 2026 start date" para el Posgrado Producción Audiovisual IA. **Señal CERRADA — no reabrir.**
- **[strat-003] gate**: Verificado ×3 via WebFetch directo (W27D4). El Posgrado SHIFTA inicia 19 octubre 2026. El motor de búsqueda indexa incorrectamente la fecha de la Cápsula Midjourney (13 jul) junto al snippet del Posgrado. Error del algoritmo de search, no del programa.
- **Decisión**: Sin acción. Señal CERRADA PERMANENTE. Si aparece en búsquedas futuras → ignorar.

---

### Hallazgo 4: Sector sweep W28D1 — **37 estable. Sin nuevos lanzamientos**

- **Fuente**: WebSearch general (consultado 2026-07-07)
- **Dato**: Sin nuevos programas de IA audiovisual Madrid detectados. UCM, BAU, SHIFTA, ECAM — todos ya en config. Sector estable en 37 competidores.

---

### Contexto W28D1 — Fuentes equipo

- **Adrián (Job Postings)**: LI AI VE W28D1=53×3 (tercer nivel clustering, 15ª medición). THOMAS SABO AUSENTE ×3 (episodio cerrado definitivo). TheCUBE 15ª sesión (posible repost ~2 jul, IESE alum nuevo). Lineup P1 estable sin nuevas entradas.
- **Marcos (Head Consolidado)**: 1/7 fuentes (solo Adrián). ECAM trigger + EPA+BOE pendientes críticos W28D1. Sector 37 estable integrado.
- **Raúl**: Sin nota W28D1 al cierre — EPA T1 2026 + BOE FAS-21 pendientes.

---

## Señales Detectadas W28D1

| Señal | Valor W28D1 | Delta vs W27D5 | Fuente |
|-------|------------|----------------|--------|
| **Elisava FUNDAE presencial** | **SIN FUNDAE CONFIRMADO** ⚡ — alerta condicional resuelta | Resuelto definitivo | WebFetch |
| ECAM admision-master/ 2026-2027 | **SIN APERTURA** (×2 semanas) — monitor semanal | Sin cambio | WebSearch |
| SHIFTA "13 julio" | **CERRADA** — search engine repite error, [strat-003] gate aplicado | Sin cambio | WebSearch |
| Sector | **37 competidores** | Sin cambio | — |
| LI AI VE 7d | **W28D1=53×3** (tercer nivel clustering, 15ª medición) | 0 Δ | Adrián W28D1 |
| Elisava precio | **€11.750** confirmado (€11.250 + €500 pre-inscripción) | Confirmado | WebFetch |

---

## Actualizaciones aplicadas en competitors-config.md

- [x] **Fecha**: 2026-07-04 → 2026-07-07
- [x] **Header**: W27D5 → W28D1
- [x] **Elisava**: "sin FUNDAE confirmado W28D1" + eliminada alerta condicional FUNDAE

---

## Prioridades W28D2+

- [ ] **W28D2 (mar 8 jul)**: LI AI VE ¿53×4 o transición? Sector sweep. ECAM admision-master/ (monitor).
- [ ] **W28D1 pendiente**: EPA T1 2026 + BOE FAS-21 (Raúl — sin informe al cierre). Integrar cuando llegue.
- [ ] **Ongoing**: La Hauss precio. ECAM admision-master/ monitor semanal. SHIFTA track octubre (19 oct).
- [ ] **Trigger ECAM**: Si admision-master/ muestra 2026-2027 → escalación inmediata Lucía.

---

*Actualizado al cierre del día 2026-07-07. W28D1 — lunes.*
