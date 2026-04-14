# Iker Molina — Nota Diaria 2026-06-01 (W23 Día 1 — Lunes)

## Resumen

W23D1. **EPA T1 2026 SIN PUBLICAR — ≥D28 laborable. TERCERA SEMANA CONSECUTIVA SIN PUBLICACIÓN post-escalada (W23D1 negativo).** Triple verificación INE: ultiDatos (último dato EPA T4 2025, 27 ene 2026) + búsqueda directa EPA1T26.htm (inexistente) + tabla histórica EPA (T4 2025 como dato más reciente). Barcelona School of Creativity: Curso Vídeo IA **confirmado con fechas específicas** (15 junio-27 julio 2026, 36h, presencial+online simultáneo). Madrid Content School: **dominio cambiado** — accesible en `madridcontent.school` (no madridcontentschool.com); Curso Intensivo IA activo ("7 ediciones en vivo") pero sin fechas/precios específicos junio 2026 recuperados. Sector estable. Mapa: **32 competidores** (sin cambios).

---

## Hallazgos

### Hallazgo 1: EPA T1 2026 — ≥D28. W23D1 negativo. Tercera semana completa sin publicación post-escalada

- **Fuente**: INE WebFetch (ultiDatos) + WebSearch ine.es/EPA1T26.htm + INE epa_tabla.htm (consultado 2026-06-01)
- **Dato**: Sin publicar. **Triple verificación W23D1**:
  1. INE ultiDatos: último dato EPA sigue siendo T4 2025 (27 enero 2026)
  2. INE WebSearch ine.es: EPA1T26.htm no existe
  3. INE epa_tabla.htm: T4 2025 como dato más reciente confirmado
- **Estado**: **≥D28 laborables de retraso — W23D1 NEGATIVO**. La semana W23 arranca igual que cerraron W21 y W22: sin EPA T1 2026.
- **Cronología de semanas sin publicación post-escalada**:

| Semana | Estado | Días retraso al cierre |
|--------|--------|----------------------|
| W21 (18-22 may) | ESCALADA A LUCÍA (W21D5) | D22 |
| W22 (25-29 may) | Segunda semana completa — cierre semanal | D27 |
| **W23D1 (1 jun)** | **Tercer semana — inicio negativo** | **≥D28** |

- **Umbral de alerta W23**: Si W23 cierra sin dato → retraso >32 días laborables. Evaluar con Lucía si corresponde actualizar umbral de escalada o consultar INE directamente sobre fecha prevista.
- **Próxima acción**: Verificación W23D2 (martes 2 junio).

---

### Hallazgo 2: Barcelona School of Creativity — Fechas específicas Curso Vídeo IA confirmadas

- **Fuente**: WebSearch sector sweep (consultado 2026-06-01)
- **Dato**: Curso Vídeo con IA — **15 junio-27 julio 2026, 36h, presencial+online simultáneo**. Fechas ahora específicas (antes en config solo "jun-jul 2026").
- **Contexto**: El curso arranca en 14 días. No hay señal de sold out ni urgencia visible. Sin FUNDAE confirmado. Perfil target: creativos publicitarios / directores de arte (Barcelona).
- **Impacto para 35mm**: Bajo. Segmento Barcelona + creativos publicitarios, no producción audiovisual técnica. Sin solapamiento directo con perfil 35mm.
- **Decisión**: Actualizar config — fechas específicas en tabla competidores (ya tenía datos parciales) y en tabla amenaza. Nivel se mantiene 🟢 BAJA-MEDIA.

---

### Hallazgo 3: Madrid Content School — Dominio cambiado a madridcontent.school

- **Fuente**: WebSearch (consultado 2026-06-01) — madridcontentschool.com devuelve ECONNREFUSED desde W22D5
- **Dato**: Nueva URL operativa: **`madridcontent.school`** (no .com). WebSearch confirma dominio activo. Curso Intensivo IA para Creadores: **"7 ediciones en vivo"** — programa activo. Sin datos específicos de precio/fechas de la edición junio 2026 recuperados (la convocatoria 2-30 junio estaba en config según datos de W18).
- **Contexto**: El cambio de dominio es reciente. madridcontentschool.com puede haber expirado o migrado. El programa sigue activo según evidencia WebSearch.
- **Decisión**: Actualizar URL en config. El Curso Intensivo IA (€1.375, FUNDAE, edición jun 2026) se mantiene en config con datos de W18 hasta verificación directa del nuevo dominio. Próxima verificación directa W23D2-D3 en madridcontent.school.

---

### Hallazgo 4: Sector sweep W23D1 — Estable

- **Fuente**: WebSearch (consultado 2026-06-01)
- **Dato**: Sin nuevos competidores de impacto. Actores habituales activos: SHIFTA (track mayo en curso), CEI, ECAM, The Core School, The BIG IA (arranca en 4 días — viernes 5 junio). SHIFTA "13 julio" sigue apareciendo en síntesis WebSearch — quinta aparición confirmada. Artefacto persistente. No actuar.
- **The BIG IA pre-arranque**: Arranque en 4 días (viernes 5 junio, €1.797). Sin verificación directa hoy — se reserva para W23D5 (día de arranque).
- **Estado del mapa W23D1**: **32 competidores** (sin cambios).

---

## Señales Detectadas

| Señal | Valor | Delta vs 2026-05-29 | Fuente |
|-------|-------|---------------------|--------|
| EPA T1 2026 | **Sin publicar — ≥D28; W23D1 negativo; triple verificación INE** | +1 día laborable — W23 arranca sin dato | INE WebFetch + WebSearch |
| Barcelona School of Creativity | Curso Vídeo IA: **15 jun-27 jul 2026, 36h, presencial+online** — fechas específicas confirmadas | Fechas específicas (antes: "jun-jul 2026") | WebSearch |
| Madrid Content School | **Dominio cambiado: madridcontent.school** (madridcontentschool.com ECONNREFUSED) | Cambio estructural detectado | WebSearch |
| The BIG IA | Arranca en 4 días (viernes 5 junio) — sin verificación directa hoy | Sin cambio | — |
| Sector | Estable — 32 competidores | Sin cambio | WebSearch |

**Mapa de competidores**: **32 competidores** (sin cambios desde W22D4).

---

## Actualizaciones aplicadas en competitors-config.md

- [x] **Fecha**: 2026-05-29 → 2026-06-01
- [x] **EPA señal**: ≥D28; W23D1 negativo; próxima verificación W23D2
- [x] **Header amenaza**: W23D1 (actualizado 2026-06-01)
- [x] **Barcelona School of Creativity**: fechas específicas en tabla amenaza (15 jun-27 jul 2026, presencial+online)
- [x] **Madrid Content School**: URL actualizada a madridcontent.school en tabla competidores

---

## Prioridades W23 (continuación)

- [ ] **EPA T1 2026** — W23D2 (martes 2 junio): verificación urgente. Si W23 cierra sin dato → retraso >32 días laborables → evaluar umbral de escalada con Lucía
- [ ] **Madrid Content School** — W23D2-D3: verificar acceso directo a madridcontent.school; confirmar si Curso Intensivo IA junio (2-30 jun, €1.375, FUNDAE) arrancó según previsto
- [ ] **The BIG IA post-arranque** — W23D5 (viernes 5 junio): verificación día de arranque — comunicación lanzamiento, ¿sold out?, ¿nueva convocatoria?
- [ ] **CEI 29 junio** — monitorización pre-arranque (~4 semanas)
- [ ] **Sector sweep W23D2** — continuación monitorización

---

*Actualizado al cierre del día 2026-06-01. W23D1.*
