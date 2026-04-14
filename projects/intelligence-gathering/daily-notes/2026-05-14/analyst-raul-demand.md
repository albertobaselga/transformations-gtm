# Raúl Vega — Nota Diaria 2026-05-14 (W20 Día 3) — HB28

**FAS activo**: FAS-21 (1c4a1b09-acd9-40e0-a80c-509543293264) — `in_progress`
**Sesión**: HB28 — continuación de HB27 (2026-05-12) — W20D3 · Jueves 14 mayo
**Foco hoy**: BOE 14 mayo · EPA T1 2026 umbral final · SEPE CNAE 59/60 reintento · SHIFTA SEM + intel precio/FUNDAE

---

## Contexto de sesión

HB27 cerró con:
- CMA: BOE 12 mayo sin nuevas resoluciones FAS-21. Mapa 18 concesiones estable.
- CMB: EPA T1 2026 día 14. Umbral conservador mañana jueves 14 mayo (hoy).
- CMC: SEPE CNAE 59/60 marzo 2026 — lag >7 semanas, reintentar hoy en paralelo con EPA.
- CMD: Mapa W20D2 consolidado — 25 competidores, 6 🔴 ALTA sin cambio. SHIFTA sin SEM, 13 días al arranque.

---

## Hallazgo CNA: BOE 14 mayo — Sin nuevas resoluciones FAS-21

**Fuente**: WebSearch (boe.es) — consultado 2026-05-14

Sin nuevas resoluciones de beneficiarios ni modificaciones para BOE-A-2024-27390 en la jornada del 14 mayo 2026. El mapa de 18 concesionarios (~€6.49M NextGenEU) permanece sin modificación. W14-W20 sin novedades — patrón estable.

**Estado FAS-21**: Sin novedad. Monitoreo semanal continúa.

---

## Hallazgo CNB: EPA T1 2026 — Escenario Pesimista DEFINITIVO

**Fuente**: ine.es (verificación directa) — consultado 2026-05-14

### Estado confirmado

EPA T1 2026 **NO PUBLICADA** a día 15 de retraso sobre T1 2025 (publicada 28/04/2025).

La página de últimos datos del INE sigue mostrando:
- Última entrega: EPA T4 2025 — publicada 27 de enero de 2026
- Tasa de paro: 9,93% · Ocupados: 22.463,3 miles
- Sin nota de prensa T1 2026 disponible

### Activación de escenario pesimista

El umbral conservador era **hoy jueves 14 mayo** — ha pasado sin publicación. El escenario pesimista se activa con carácter **definitivo**:

| Escenario | Estado |
|-----------|--------|
| Conservador (semana 11-15 mayo) | ❌ **CERRADO** — umbral hoy sin publicación |
| Pesimista (semana 18-22 mayo) | ✅ **ACTIVO — DOMINANTE** |
| Extremo (>22 mayo) | En reserva si semana 18 tampoco publica |

**Causa probable (confirmada INE)**: CNAE-2025 dual-coding — implementación simultánea CNAE-2009/CNAE-2025 desde T1 2026. La advertencia metodológica sigue visible en la propia web INE.

### Impacto en el proyecto

**Acción inmediata — cruce a Sofia**: La matriz de empleabilidad Q1 2026 permanece en pausa. El dato de paro sectorial CNAE 59/60 T1 2026 no estará disponible antes de la semana del 19 mayo como mínimo.

**Para el argumentario B2B**: Sin impacto operativo. El dato EPA T1 2026 es contexto de demanda para el discurso de empleabilidad, no un bloqueador de la propuesta comercial de 35mm. La propuesta de valor (Dalet Dalia + prácticas broadcast + Nebrija) no depende de este dato para ser operativa.

**Para el protocolo de extracción cuando publique**: Aplicar dual-coding CNAE-2009/CNAE-2025 — buscar tablas bajo ambas clasificaciones y documentar cualquier ruptura de serie detectada.

---

## Hallazgo CNC: SEPE CNAE 59/60 PDFs marzo 2026 — Lag >7,5 semanas. Escalada

**Fuente**: sepe.es acceso directo + WebSearch — consultado 2026-05-14

Las URLs de estadísticas de actividad económica de SEPE para marzo 2026 devuelven 404 de forma consistente. El patrón de la sección `municipios-capitales/2026/` muestra datos disponibles hasta enero 2026 como referencia indexada — marzo aún no publicado en este nivel de detalle.

**Dato macro disponible** (lamoncloa/nota de prensa SEPE marzo 2026):
- Paro registrado total ES marzo 2026: **2.419.712 personas** (reducción de 22.934 vs. febrero)
- Contratos marzo 2026: 1.311.070 (+12,4% vs. marzo 2025)
- Mínimo histórico para el mes de marzo desde febrero de 2008

El macro es positivo pero no permite desagregación CNAE 59/60. El dato específico sectorial audiovisual sigue bloqueado.

**Estudio sectorial disponible**: SEPE tiene publicado "El mercado de trabajo del sector Audiovisual en España — 2024" (datos 2024). Puede usarse como baseline sectorial si los PDFs CNAE marzo 2026 no aparecen en la semana del 18 mayo.

**Decisión de escalada**: El lag de >7,5 semanas supera el rango habitual (5-7 semanas). Posible causa: mismo cambio metodológico CNAE-2025 que retrasó la EPA (los PDFs de detalle por actividad económica deben ser recalculados bajo la nueva clasificación antes de publicarse). Aplicar [strat-005] en siguiente intento: usar estudio sectorial SEPE 2024 + macro lamoncloa como alternativas documentadas.

**Acción W20D4-W21**: Si PDFs CNAE 59/60 marzo 2026 no aparecen en la semana del 18 mayo → marcar como fuente bloqueada hasta resolución metodológica CNAE-2025 y usar estudio sectorial 2024 como proxy en la matriz de empleabilidad.

---

## Hallazgo CND: SHIFTA — Intel precio/FUNDAE W20D3. 11 días al arranque

**Fuente**: weareshifta.com — consultado 2026-05-14

### Máster en IA Generativa para Creativos (arranque 25 mayo 2026)

| Campo | Dato |
|-------|------|
| Nombre | Máster en Inteligencia Artificial Generativa para Creativos |
| Institución | SHIFTA by Elisava + Universitat de Vic-UCC |
| ECTS | **60 ECTS** |
| Inicio | **25 mayo 2026** (11 días) |
| Fin | 28 marzo 2027 |
| Modalidad | Online |
| Precio | **Opaco — "Consultar"** |
| Financiación | Hasta **10 cuotas mensuales sin coste financiero (0% TAE)** |
| Descuento pago único | 5% si pago al contado |
| **FUNDAE** | ✅ **EXPLÍCITO** — bonificación FUNDAE + Fundación Tripartita + apoyo consultoría especializada |
| SEM activo | ❌ Sin campaña detectada a 11 días del arranque |

### Segundo programa detectado

**Posgrado en Producción Audiovisual con IA** — inicio 19 octubre 2026, fin 28 marzo 2027. Segundo ciclo anual de SHIFTA para el segmento IA audiovisual (otoño). Confirma modelo de dos cohortes anuales (primavera + otoño).

### Análisis B2B — Implicaciones para 35mm

**FUNDAE confirmado en el Máster IA Generativa**: SHIFTA opera en el canal FUNDAE con su programa de mayor prestigio (60 ECTS, doble aval Elisava + UVic-UCC). Este es el programa que arranca en 11 días. La confirmación es relevante porque:

1. SHIFTA compite simultáneamente en B2C (precio opaco, 10 cuotas) y B2B (FUNDAE), igual que CEI y The Core School.
2. El segmento objetivo de SHIFTA (creativos de agencias, directores de arte, diseñadores) se solapa parcialmente con el perfil de empresa que puede usar FUNDAE para formación IA.
3. Sin embargo, el target técnico de 35mm (técnicos broadcast/OTT, flujo MAM, Dalet Dalia) no se solapa con el target creativo de SHIFTA.

**Actualización mapa FUNDAE**: La confirmación explícita de FUNDAE en el Máster SHIFTA consolida el mapa en 5 actores con FUNDAE confirmado:

| Actor | FUNDAE | Segmento |
|-------|--------|---------|
| CEI | ✅ Confirmado | Postproducción técnica |
| SHIFTA | ✅ **Confirmado W20D3** | Creatividad IA (Elisava) |
| The Core School | ✅ Confirmado | Broadcast (Atresmedia/Banijay) |
| Madrid Content School | ✅ Confirmado | Generalista IA audiovisual |
| Lightbox | ✅ Confirmado | Fotografía/Vídeo (parcial) |
| **35mm** | ❌ **SIN RSEF** | Broadcast/OTT Dalet Dalia |

**SEM sin activar a 11 días del arranque**: La ausencia de SEM a 11 días del inicio de un máster de 60 ECTS sugiere captación por CRM cerrada (lista de espera preexistente o matrícula ya cubierta) o activación de última hora (7-10 días antes = urgencia de plazas). Marina mantiene alerta para viernes-lunes próximos.

---

## Estado canal B2B/FAS-21 — W20D3

| Canal | Estado W20D3 | Próxima acción |
|-------|-------------|---------------|
| FUNDAE RSEF (Operaciones) | ❌ Bloqueado | **CRÍTICA** — SHIFTA en 11 días. 5 actores con FUNDAE vs. 35mm sin canal |
| BOE-A-2024-27390 FAS-21 | 18 concesiones estables, sin novedades | Monitoreo semanal |
| Plan CM Medida 3 | Sin convocatoria BOCM | Daniel: pipeline productoras activas por perfil |
| Pista B — PRISA P1 | Pendiente Brief H2B-PRISA-v2 | Elena: framing eficiencia operativa |
| Pista B — RTVE P2 | Monitoreo PCSP/PLACE (CPV 80000000) | Ventana licitación jun-jul 2026 |
| Cluster-06 v9 | Pendiente aprobación Lucía | Señal de Lucía para proceder |

---

## Cruces con el equipo W20D3

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Sofia (Empleabilidad)** | ⚠️ EPA T1 2026 — escenario pesimista DEFINITIVO | Umbral conservador (hoy jueves 14) cerrado sin publicación. Dato no disponible hasta semana del 19 mayo mínimo. Mantener matriz Q1 2026 en pausa. Comunicar a Lucía. | **Alta — inmediata** |
| **Marina (SEO)** | SHIFTA SEM — sin activar a 11 días. Alerta viernes-lunes | SHIFTA sin SEM detectado. Arranque 25 mayo. Si no activan esta semana → captación por CRM cerrada (cohorte cubierta). Si activan viernes/lunes → señal demanda activa. | **Alta** |
| **Lucía (Head IC)** | EPA pesimista definitivo · Cluster-06 v9 señal | EPA Q1 2026 bloqueada semana 18 mayo. Cluster-06 v9 pendiente aprobación — urgente esta semana (datos disponibles para argumentarlo). | **Media-Alta** |
| **Operaciones** | FUNDAE RSEF — 5 competidores con FUNDAE vs. 35mm sin canal | SHIFTA confirma FUNDAE explícito en Máster IA Generativa (arranca 11 días). Mapa FUNDAE: 5 activos. 35mm fuera. Cada semana = volumen FUNDAE perdido. | **CRÍTICA** |

---

## Pendiente W20 (actualizado cierre 2026-05-14)

- [x] **EPA T1 2026** — Verificación definitiva hoy. Escenario pesimista activado. ✅ Notificar Sofia y Lucía.
- [ ] **SEPE CNAE 59/60 PDFs marzo 2026** — ⚠️ Lag >7,5 semanas. Próximo intento semana del 18 mayo. Si persiste → [strat-005] + estudio sectorial 2024 como proxy.
- [ ] **SHIFTA SEM** — Alerta viernes-lunes. Marina en guardia.
- [ ] **FUNDAE RSEF (Operaciones)** — **Urgencia máxima**. SHIFTA en 11 días. 5 actores FUNDAE activos vs. 35mm sin canal.
- [ ] **Cluster-06 v9** — Señal de Lucía — urgente esta semana.
- [ ] **Adrián Torres snapshot W14-W20** — Irrenunciable esta semana (Sofia).
- [ ] **Trends D9 / Cookie Pablo Navarro** — 13+ sesiones bloqueadas. Urgencia absoluta (Marina).
- [ ] **Daniel: pipeline Medida 3** — Productoras audiovisuales madrileñas por perfil.
- [ ] **PRISA Brief H2B-PRISA-v2** — Eficiencia operativa. Pendiente Elena.
- [ ] **Cluster-07 Pista B** — Propuesta formal. Pendiente Elena.
- [ ] **RTVE licitación 2026** — Monitorear PCSP/PLACE (CPV 80000000).
- [ ] **OFF ESCAC** — Monitorizar IA en catálogo W21-W22.

---

## Cierre sesión HB28 — Estado 2026-05-14

**Producido hoy:**
- [x] HB28 publicado en FAS-21 — W20D3
- [x] CNA: BOE 14 mayo — sin nuevas resoluciones FAS-21. Mapa 18 concesiones estable.
- [x] CNB: EPA T1 2026 — **escenario pesimista DEFINITIVO**. Umbral conservador (jueves 14 mayo) cerrado sin publicación. Dato disponible semana del 19 mayo mínimo. Cruce a Sofia + Lucía.
- [x] CNC: SEPE CNAE 59/60 marzo 2026 — lag >7,5 semanas. Macro disponible (2.419.712 paro total, -22.934, mínimo histórico marzo desde 2008). PDFs CNAE específicos aún bloqueados. Estudio sectorial SEPE 2024 como proxy si persiste.
- [x] CND: SHIFTA intel W20D3 — FUNDAE confirmado explícito en Máster IA Generativa (60 ECTS, Elisava/UVic-UCC, arranque 25 mayo, 10 cuotas 0% TAE, precio opaco). Mapa FUNDAE sube a **5 actores confirmados** vs. 35mm sin RSEF. SEM sin activar a 11 días. Modelo dos cohortes anuales (mayo + octubre).

---

*Actualizado al cierre del día 2026-05-14.*
