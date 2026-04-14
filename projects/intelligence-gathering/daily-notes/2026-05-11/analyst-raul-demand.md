# Raúl Vega — Nota Diaria 2026-05-11 (W20 Día 1) — HB26

**FAS activo**: FAS-21 (1c4a1b09-acd9-40e0-a80c-509543293264) — `in_progress`
**Sesión**: HB26 — continuación de HB25 (2026-05-08) — W20D1 · Reset semanal W20
**Foco hoy**: BOE 11 mayo · EPA día 13 verificación · SEPE CNAE 59/60 reintento · Nuevos competidores (EOI, OFF ESCAC, CEV) · Balance B2B W20 reset

---

## Contexto de sesión

HB25 cerró con balance semanal W19:
- CKA: BOE 8 mayo sin nuevas resoluciones FAS-21. Mapa 18 concesiones estable.
- CKB: EPA T1 2026 ventana W19 cerrada (día 10). Próxima verificación W20D1 hoy.
- CKC: SHIFTA señal precio implícito >€1.500. SEM inminente en 5-7 días. Solapamiento bajo con segmento técnico de 35mm.
- Balance W19: mapa FUNDAE 4 activos estable. Canal Medida 3 en construcción (Q3-Q4 2026). Pista B exclusiva de 35mm intacta.

Cruces W20D1 del equipo:
- **Iker**: EPA día 13, semana conservadora activa (11-15 mayo). Verificaciones clave: miércoles 13 + jueves 14 mayo. Nuevos competidores: **OFF ESCAC** (Fast Forward/ESCAC-UB, sin IA, subvencionado, Barcelona — 🟢 BAJA + alerta condicional) y **CEV** ("IA aplicada a Fotografía y Vídeo", provisional 🟡 MEDIA — verificar W20D2). EOI confirmada: 🟢 BAJA definitiva (Garantía Juvenil 16-29 desempleados). SHIFTA SEM: sin campaña activa detectada; ventana de activación máxima esta semana. Mapa sube a 24 competidores activos.
- **Marina**: D9 activo — 11ª sesión consecutiva (W17D3→W20D1). `runway ml` 54, `edicion video ia` 17. 37 días desde NAB. Plateau 51-54, robustez máxima. Cookie Pablo Navarro: urgencia absoluta. EOI confirmada: 3ª institución ES con Runway explícito en currículo (secuencia: IkasIA/BAIC → MCS Intensivo → EOI Málaga). OFF ESCAC sin IA. CEV provisional.
- **Sofia**: EPA día 13 — semana conservadora activa. SEPE CNAE 59/60 PDFs marzo 2026: ventana activa esta semana (martes-jueves). H41: EOI = 3ª institución con Runway + Polo Contenidos Digitales Málaga como 4º nivel institucional. H42: OFF ESCAC alerta condicional (equivalente ECAM en Cataluña). H43: CEV provisional 🟡 MEDIA — verificar W20D2.

---

## Hallazgo CLA: BOE 11 mayo — Sin nuevas resoluciones FAS-21

**Fuente**: boe.es / WebSearch — consultado 2026-05-11

Sin nuevas resoluciones de beneficiarios ni modificaciones para BOE-A-2024-27390 en la semana del 11 mayo 2026. Búsqueda confirma que el mapa de 18 concesionarios (~€6.49M) permanece sin modificación. Semanas W14-W20 sin nuevas resoluciones.

**Estado FAS-21**: Sin novedad. Monitoreo semanal continúa.

---

## Hallazgo CLB: EPA T1 2026 — Día 13. Semana conservadora activa.

**Fuente**: ine.es (verificado directamente) + WebSearch — consultado 2026-05-11

EPA T1 2026 confirmada SIN PUBLICAR a día 13 de retraso. La página de últimos datos del INE sigue mostrando EPA T4 2025 (publicada 27 enero 2026) como la entrega más reciente. No hay nota de prensa T1 2026 disponible.

**Nota técnica INE confirmada**: La página de INEbase advierte expresamente que desde T1 2026 las tablas de actividad serán recodificadas bajo la nueva clasificación CNAE-2025. Esta es la primera vez que el cambio metodológico aparece confirmado en la propia web del INE — valida la causa probable del retraso (implementación dual CNAE-2009/CNAE-2025).

**Calendar W20**:

| Fecha | Acción | Responsable |
|-------|--------|-------------|
| Miércoles 13 mayo | Verificación umbral mitad semana conservadora | Iker (primero) / Raúl (backup) |
| Jueves 14 mayo | Segunda verificación si miércoles sin resultado | Iker |
| Jueves 14 mayo — sin publicar | Actualizar a escenario pesimista (semana del 18 mayo) | Iker → Sofia |

---

## Hallazgo CLC: SEPE CNAE 59/60 PDFs marzo 2026 — 404 persistente

**Fuente**: sepe.es acceso directo — consultado 2026-05-11

La URL de SEPE para estadísticas por actividad económica marzo 2026 devuelve 404 por segundo período consecutivo. El lag habitual para los PDFs de detalle CNAE (actividad económica mensual) es de 5-7 semanas desde el cierre del mes. Marzo 2026 cerró el 31/03 — hoy es semana 6,5 post-cierre.

**Estado**: PDFs CNAE 59/60 marzo 2026 **aún no publicados**. La ventana de publicación óptima (5-7 semanas) está en su límite superior esta semana. Si no aparecen entre martes 12 y jueves 14 mayo, el lag se extiende a >7 semanas — poco habitual pero posible dado el contexto CNAE-2025.

**Acción**: Reintentar miércoles 13 mayo (en paralelo con verificación EPA). Aplicar [strat-005] — si 404 persiste, usar BDNS o lamoncloa como fuentes alternativas de macro paro registrado sectorial.

---

## Hallazgo CLD: Nuevos competidores — Implicaciones B2B

**Fuente**: Iker Molina / Marina Reyes / Sofia Blanco — `daily-notes/2026-05-11` W20D1

### OFF ESCAC (Fast Forward / ESCAC-UB) — 🟢 BAJA · Alerta condicional activa

| Campo | Dato |
|-------|------|
| Institución | ESCAC / Universidad de Barcelona — 15 especialidades audiovisuales |
| Precio | 100% subvencionado (UE + ICAA) |
| IA | Sin contenido IA actualmente |
| Sedes | Terrassa + Barcelona |
| Nivel amenaza | 🟢 BAJA — **alerta condicional activa** |

**Implicación B2B**: Sin IA, sin FUNDAE, sin solapamiento directo con el canal B2B de 35mm hoy. La alerta condicional es estratégica: si ESCAC replica el patrón de ECAM (expansión IA con respaldo institucional subvencionado), se abriría una asimetría competitiva en el mercado catalán equivalente a la que ECAM creó en Madrid. Por ahora: monitorizar catálogo W21-W22.

**Para el canal B2B en Cataluña**: OFF ESCAC sin IA deja el segmento de formación técnica IA audiovisual en Barcelona sin un competidor institucional de primer nivel. Oportunidad para 35mm si tiene capacidad de captación B2B en ese mercado (por ahora no documentada).

### CEV — Provisional 🟡 MEDIA · Verificar W20D2

| Campo | Dato |
|-------|------|
| Institución | CEV — Centro de Estudios de la Imagen Visual (50 años, FP audiovisual privada) |
| Señal IA | "IA aplicada a Fotografía y Vídeo Madrid" |
| Sedes | Madrid + Barcelona |
| Precio | Sin publicar |
| FUNDAE | Sin confirmar |
| Nivel amenaza | 🟡 MEDIA provisional |

**Implicación B2B**: El dato decisivo es si el programa "IA aplicada a Fotografía y Vídeo" es un módulo FP (diferente segmento a 35mm) o un curso independiente con FUNDAE (compite en el canal B2B de formación IA técnica en Madrid). La descripción "Fotografía y Vídeo" vs. "Postproducción broadcast" delimita el solapamiento. Verificar W20D2.

### EOI (Málaga) — 🟢 BAJA · Señal de mercado relevante

Target: Garantía Juvenil 16-29 años desempleados — sin solapamiento con pool de alumnos o empresas de 35mm. Sin FUNDAE ni canal empresa.

**Señal de mercado útil**: EOI es la 3ª institución española con Runway explícito en currículo de formación IA audiovisual. El stack institucional (IkasIA/BAIC → Madrid Content School → EOI/Polo Contenidos Málaga) confirma que Runway se consolida como herramienta de referencia en el sector. Para el argumento de empleabilidad/ventas de 35mm: la diferenciación ya no puede ser "incluimos Runway" (lo tiene hasta una escuela pública de Málaga para desempleados) — tiene que ser "integramos Runway en un flujo broadcast profesional real con Dalet Dalia y MAM" (exclusivo 35mm).

---

## Estado canal B2B/FAS-21 — W20D1

| Canal | Estado W20D1 | Próxima acción |
|-------|-------------|---------------|
| FUNDAE RSEF (Operaciones) | ❌ Bloqueado | **CRÍTICA** — sin RSEF, sin canal |
| BOE-A-2024-27390 FAS-21 | 18 concesiones estables, sin novedades | Monitoreo semanal |
| Plan CM Medida 3 | Sin convocatoria BOCM — timeline Q3-Q4 2026 | Daniel: pipeline por perfil |
| Pista B — PRISA P1 | Pendiente Brief H2B-PRISA-v2 | Elena: framing eficiencia operativa |
| Pista B — RTVE P2 | Monitoreo PCSP/PLACE (CPV 80000000) | Ventana licitación jun-jul 2026 |
| Cluster-06 v9 | Pendiente aprobación Lucía | Señal de Lucía para proceder |
| Cluster-07 Pista B | Propuesta formal pendiente | Elena: decisión |

---

## Cruces con el equipo W20D1

| Analista | Cruce | Dato | Urgencia |
|----------|-------|------|----------|
| **Daniel (B2B)** | CEV provisional 🟡 MEDIA — seguimiento hasta W20D2 | Si CEV tiene FUNDAE para "IA aplicada a Fotografía y Vídeo", entra como competidor en el canal B2B de formación IA técnica en Madrid. Verificación W20D2. Si no tiene FUNDAE, impacto B2B nulo | Media |
| **Daniel (B2B)** | Pipeline Medida 3 — sin directorio BOCM disponible | Estrategia confirmada: construir lista de productoras audiovisuales madrileñas activas por perfil. Acción práctica: LinkedIn + registros ICAA de producciones 2025-2026 con sede Madrid como fuente de targets | Media |
| **Operaciones** | FUNDAE RSEF — urgencia máxima · W20 es la semana decisiva | SHIFTA arranca en 14 días (25 mayo). Cada semana sin RSEF = más volumen FUNDAE capturado. Si RSEF no se activa esta semana, 35mm pierde todo el canal FUNDAE de la temporada Q2-Q3 2026 | **CRÍTICA** |
| **Lucía (Head IC)** | Cluster-06 v9 — señal para proceder | Mapa B2B estable: ECAM no en FUNDAE (confirmado), 4 activos sin cambio, nuevos competidores sin impacto en el canal FUNDAE. V9 es aviso de competidor asimétrico + validación categoría. Solicitar aprobación esta semana | Media |
| **Lucía (Head IC)** | OFF ESCAC alerta condicional | Si ESCAC incorpora IA, replicaría en Cataluña la asimetría de ECAM en Madrid. Monitorizar. Sin acción inmediata | Baja |

---

## Pendiente W20 (actualizado cierre 2026-05-11)

- [ ] **EPA T1 2026** — ⚠️ Verificación miércoles 13 mayo. Si sin publicar → jueves 14 mayo. Protocolo dual CNAE-2009+CNAE-2025 cuando aparezca.
- [ ] **SEPE CNAE 59/60 PDFs marzo 2026** — ⚠️ Reintentar miércoles 13 mayo. Si 404 persiste → lag >7 semanas, escalar a siguiente semana.
- [ ] **CEV programa IA** — Verificar W20D2 (Iker). Precio + FUNDAE + tipo de programa.
- [ ] **Cluster-06 v9** — Solicitar señal de Lucía esta semana.
- [ ] **BOE semana del 11 mayo** — Monitoreo continuado (sin expectativa de nueva resolución).
- [ ] **FUNDAE RSEF (Operaciones)** — **Urgencia máxima**. Temporada Q2-Q3 en juego.
- [ ] **SHIFTA SEM** — Marina monitoriza. Si activan → señal de demanda transaccional.
- [ ] **Daniel: pipeline Medida 3** — Lista de productoras audiovisuales madrileñas por perfil.
- [ ] **Adrián Torres snapshot W14-W20** — Irrenunciable esta semana (Sofia).
- [ ] **Trends D9 / Cookie Pablo Navarro** — 11 sesiones. Urgencia absoluta (Marina).
- [ ] **PRISA Brief H2B-PRISA-v2** — Eficiencia operativa. Pendiente Elena.
- [ ] **Cluster-07 Pista B** — Propuesta formal. Pendiente Elena.
- [ ] **RTVE licitación 2026** — Monitorear PCSP/PLACE (CPV 80000000).

---

## Cierre sesión HB26 — Estado 2026-05-11

**Producido hoy:**
- [x] HB26 publicado en FAS-21 — W20D1
- [x] CLA: BOE 11 mayo — sin nuevas resoluciones FAS-21. Mapa 18 concesiones estable.
- [x] CLB: EPA T1 2026 — día 13 confirmado sin publicar. INE confirma advertencia CNAE-2025 en web. Verificación miércoles 13 mayo.
- [x] CLC: SEPE CNAE 59/60 marzo 2026 — 404 persistente. Reintentar miércoles 13.
- [x] CLD: Nuevos competidores B2B analizados — OFF ESCAC sin impacto hoy (alerta condicional), CEV pendiente verificación, EOI confirma Runway como estándar institucional emergente ES → diferenciación de 35mm debe ser flujo broadcast con Dalet Dalia, no presencia de Runway.

---

*Actualizado al cierre del día 2026-05-11.*
