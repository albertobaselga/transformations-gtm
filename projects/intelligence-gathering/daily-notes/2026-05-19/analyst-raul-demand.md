# Raúl Vega — Nota Diaria 2026-05-19 (W21 Día 2) — HB31

**FAS activo**: FAS-21 (1c4a1b09-acd9-40e0-a80c-509543293264) — `in_progress`
**Sesión**: HB31 — continuación de HB30 (2026-05-18) — W21D2 · Martes 19 mayo
**Foco hoy**: BOE 19 mayo · EPA día 20 · SEPE CNAE datos.gob.es ([strat-005]) · SHIFTA D-6

---

## Contexto de sesión

HB30 cerró con:
- CPA: BOE 18 mayo sin novedades FAS-21.
- CPB: EPA T1 2026 día 19, pesimista día 1. Verificación miércoles 20 mayo.
- CPC: SEPE CNAE 59/60 lag >8 semanas. Acción hoy: datos.gob.es.
- CPD: SHIFTA SEM D-7 — hipótesis CRM cerrada confirmada.
- CPE: H45 LABASAD 🟢 BAJA provisional.

---

## Hallazgo CQA: BOE 19 mayo — Sin nuevas resoluciones FAS-21

**Fuente**: WebSearch (boe.es) — consultado 2026-05-19

Sin nuevas resoluciones de beneficiarios ni modificaciones para BOE-A-2024-27390. Mapa 18 concesionarios (~€6.49M NextGenEU) estable. W14-W21D2 sin novedades.

**Estado FAS-21**: Sin novedad. Monitoreo semanal continúa.

---

## Hallazgo CQB: EPA T1 2026 — Día 20. Pesimista día 2

**Fuente**: WebSearch (ine.es) — consultado 2026-05-19

EPA T1 2026 **NO PUBLICADA** a día 20. La búsqueda en INE para "primer trimestre 2026" nota de prensa mayo 2026 no devuelve resultados — consistente con la no publicación. Escenario pesimista (18-22 mayo) activo, día 2 de 5.

**Próxima verificación**: Mañana miércoles 20 mayo (D3 de la ventana pesimista — punto medio). Si no aparece mañana, quedan jueves 21 y viernes 22 como últimas oportunidades de la semana pesimista antes de escenario extremo.

---

## Hallazgo CQC: SEPE CNAE 59/60 — [strat-005] AGOTADO. Marcado definitivamente bloqueado

**Fuente**: datos.gob.es + curl directo — consultado 2026-05-19

### Resultado del intento datos.gob.es

Descarga directa del CSV de SEPE open data 2026:
- **URL**: `https://sede.sepe.gob.es/es/portaltrabaja/resources/sede/datos_abiertos/datos/Paro_por_municipios_2026_csv.csv`
- **Meses disponibles**: Solo **enero 2026** (202601) y **febrero 2026** (202602) — marzo 2026 no incluido
- **Granularidad**: Macro sectores únicamente (Agricultura, Industria, Construcción, Servicios, Sin empleo anterior) — **sin desagregación CNAE**

### Estructura del dataset (columnas)
```
Código mes · mes · CA · Provincia · Municipio · total Paro ·
Paro hombre <25 · Paro hombre 25-45 · Paro hombre ≥45 ·
Paro mujer <25 · Paro mujer 25-45 · Paro mujer ≥45 ·
Paro Agricultura · Paro Industria · Paro Construcción · Paro Servicios · Paro Sin empleo Anterior
```

El catálogo de datos SEPE tampoco muestra datasets con desagregación CNAE específica (2 dígitos). Solo existe el nivel de 4 macro-sectores.

### Conclusión de la auditoría de fuentes

Los datos de paro registrado CNAE 59/60 a nivel de código de 2 dígitos **no existen en ningún canal público accesible actualmente**:

| Fuente | Estado | Resultado |
|--------|--------|-----------|
| SEPE PDF de actividad económica (ruta directa) | ❌ 404 — lag >8,5 semanas | No disponible |
| datos.gob.es CSV paro municipios 2026 | ✅ Accesible pero solo hasta feb 2026 | Solo macro sectores, sin CNAE |
| SEPE catálogo open data | ✅ Accesible | Sin nivel CNAE 2 dígitos |
| Lamoncloa nota de prensa SEPE | ✅ Accesible | Solo total nacional macro |

**Decisión**: SEPE CNAE 59/60 para marzo 2026 marcado como **bloqueado indefinidamente** hasta que aparezca en un canal accesible. Próximo intento: inicio de W22 (25 mayo). Si para entonces tampoco está disponible → usar proxy documental completo para la matriz de empleabilidad:

1. **Estudio sectorial SEPE 2024** — "El mercado de trabajo del sector Audiovisual en España" (datos anuales 2024, CNAE 59/60 estructural)
2. **SEPE nota prensa macro marzo 2026** — Paro total España: 2.419.712 (-22.934, mínimo histórico para marzo desde 2008)
3. **EPA T4 2025** — Tasa de paro global 9,93%, 22.463.300 ocupados (referencia trimestral)
4. **EPA T1 2026** — Cuando publique (semana 18-22 mayo en escenario pesimista)

Este conjunto proxy es suficiente para construir el argumento de empleabilidad de 35mm: mercado laboral favorable (macro), sector audiovisual con datos estructurales (SEPE 2024), y tasa de paro en mínimos históricos del período.

---

## Hallazgo CQD: SHIFTA SEM D-6 — Señal final. Arranque mañana miércoles

**Fuente**: WebSearch — consultado 2026-05-19

Sin SEM detectable a D-6 del arranque (25 mayo). La búsqueda sobre "SHIFTA 25 mayo matrícula inscripción" devuelve únicamente resultados orgánicos de weareshifta.com — sin indicios de campañas pagadas.

**Cierre del seguimiento SEM de SHIFTA** para esta cohorte: Con 6 días hasta el arranque y sin ninguna activación SEM desde W19, el canal de captación de SHIFTA para el Máster mayo 2026 es inequívocamente relacional (CRM/lista de espera/recomendación). No habrá SEM antes del 25 mayo.

**Interpretación para el mapa de demanda**:
- El mercado de masters IA generativa premium online (€2.000-€3.000 estimado, 60 ECTS, Elisava/UVic-UCC) no se mueve por paid search
- La demanda B2C en este segmento es **pull orgánica + CRM**, no **push SEM**
- Implicación para URL 11 (35mm): la captación no puede depender de paid keywords genéricas en este segmento; requiere posicionamiento orgánico fuerte o canales directos B2B

**Marina**: Señal SHIFTA SEM cerrada definitivamente para cohorte mayo 2026. El D9 de Trends para `runway ml` (plateau 51-54) y `edicion video ia` (plateau ~16) refleja demanda orgánica sostenida sin correlación con SEM de competidores.

---

## Macro disponible — proxy empleabilidad Q1 2026

| Fuente | Dato | Disponibilidad |
|--------|------|----------------|
| SEPE marzo 2026 | Paro total ES: 2.419.712 (-22.934 vs feb, mínimo histórico marzo desde 2008) | ✅ Disponible |
| SEPE municipios datos abiertos | Enero-febrero 2026 (macro sectores, no CNAE) | ✅ Disponible pero insuficiente |
| EPA T4 2025 | Tasa paro 9,93% · Ocupados 22.463.300 | ✅ Disponible |
| SEPE audiovisual 2024 | Estudio sectorial completo CNAE 59/60 (datos 2024) | ✅ Disponible (uso como baseline) |
| EPA T1 2026 | Sin publicar — escenario pesimista día 2 | ❌ Pendiente |
| SEPE CNAE 59/60 marzo 2026 | Lag >8,5 semanas | ❌ Bloqueado |

---

## Estado canal B2B/FAS-21 — W21D2

| Canal | Estado W21D2 | Próxima acción |
|-------|-------------|---------------|
| FUNDAE RSEF (Operaciones) | ❌ Bloqueado — **CRÍTICA** | SHIFTA en 6 días. Temporada Q2-Q3 comprometida |
| BOE-A-2024-27390 FAS-21 | 18 concesiones estables | Monitoreo semanal |
| Plan CM Medida 3 | Sin convocatoria BOCM | Daniel: pipeline productoras por perfil |
| Pista B — PRISA P1 | Pendiente Brief H2B-PRISA-v2 | Elena: exclusividad Dalet Dalia |
| Pista B — RTVE P2 | Monitoreo PCSP/PLACE (CPV 80000000) | Ventana jun-jul 2026 |
| Cluster-06 v9 | Pendiente Lucía | Señal urgente |

---

## Cruces con el equipo W21D2

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Sofia (Empleabilidad)** | SEPE CNAE 59/60 bloqueado indefinidamente + proxy documentado | El proxy (estudio sectorial 2024 + macro lamoncloa + EPA T4 2025) es suficiente para completar el argumento de empleabilidad sin el dato mensual CNAE. Activar proxy cuando EPA T1 2026 publique. | Media |
| **Marina (SEO)** | SHIFTA SEM cerrado definitivamente para cohorte mayo | Sin SEM = canal captación SHIFTA es CRM/orgánico. El plateau D9 no tiene correlación SEM. Señal de demanda sostenida sin amplificación paid. | Baja |
| **Operaciones** | FUNDAE RSEF — SHIFTA arranca en 6 días | Urgencia máxima. Cada día sin RSEF = volumen FUNDAE capturado por competidores. | **CRÍTICA** |

---

## Pendiente W21 (actualizado W21D2)

- [ ] **EPA T1 2026** — ⚠️ Verificación mañana miércoles 20 mayo (D3 ventana pesimista).
- [x] **SEPE CNAE 59/60 datos.gob.es** — [strat-005] agotado. Solo hasta feb 2026, sin CNAE. Marcado bloqueado indefinido. Proxy documentado.
- [ ] **FUNDAE RSEF (Operaciones)** — **CRÍTICA**. SHIFTA en 6 días.
- [ ] **Cluster-06 v9** — Señal Lucía — urgente W21.
- [ ] **Adrián Torres snapshot W14-W21** — Irrenunciable (Sofia).
- [ ] **Trends D9 / Cookie Pablo Navarro** — 16+ sesiones. Urgencia absoluta (Marina).
- [ ] **Daniel: pipeline Medida 3** — Productoras madrileñas activas.
- [ ] **PRISA Brief H2B-PRISA-v2** — Elena.
- [ ] **RTVE licitación 2026** — jun-jul 2026.

---

## Cierre sesión HB31 — Estado 2026-05-19

**Producido hoy:**
- [x] HB31 publicado en FAS-21 — W21D2
- [x] CQA: BOE 19 mayo — sin nuevas resoluciones FAS-21. Mapa estable.
- [x] CQB: EPA T1 2026 — día 20, pesimista día 2 de 5. Sin publicación. Verificación mañana.
- [x] CQC: SEPE CNAE 59/60 — **[strat-005] agotado**. datos.gob.es CSV solo enero-febrero 2026, macro sectores, sin CNAE. Fuente definitivamente bloqueada hasta W22+. Proxy documental completo construido y documentado.
- [x] CQD: SHIFTA SEM D-6 — **Señal cerrada definitivamente** para cohorte mayo. Sin SEM en todo el ciclo de captación. Canal B2C SHIFTA = CRM/orgánico, no paid search.

---

*Actualizado al cierre del día 2026-05-19.*
