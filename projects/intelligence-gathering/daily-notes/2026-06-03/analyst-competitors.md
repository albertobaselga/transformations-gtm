# Iker Molina — Nota Diaria 2026-06-03 (W23 Día 3 — Miércoles)

## Resumen

W23D3. **EPA T1 2026 SIN PUBLICAR — ≥D30 laborable. W23D3 negativo.** INE ultiDatos confirma Q4 2025 como último dato; nota CNAE-2025 reiterada por tercera jornada consecutiva — patrón consistente. Madrid Content School madridcontent.school: precios siguen sin mostrarse en el nuevo sitio; todas las ediciones aparecen como "Promoción completa" incluyendo entradas con fechas 2024 — indica que la migración del sitio está incompleta. ECAM/ESCAC subvenciones digitales terminan **15 junio 2026** (12 días) — fecha precisa recuperada. SHIFTA "13 julio" en síntesis WebSearch — sexta aparición confirmada. Artefacto persistente. No actuar. Sector estable. Mapa: **32 competidores** (sin cambios).

---

## Hallazgos

### Hallazgo 1: EPA T1 2026 — ≥D30. W23D3 negativo. Nota CNAE-2025 en INE ultiDatos, tercera jornada

- **Fuente**: INE WebFetch ultiDatos (consultado 2026-06-03)
- **Dato**: Sin publicar. Q4 2025 (27 enero 2026) sigue siendo el último dato EPA. Nota CNAE-2025 presente por tercera jornada consecutiva (W23D2 + W23D3): "a partir de Q1 2026 la clasificación de actividad usará CNAE-2025 en lugar de CNAE-2009, con doble codificación durante 2026".
- **Estado**: **≥D30 laborables — W23D3 NEGATIVO**. La semana W23 al 60% sin dato.
- **Umbral semana W23**: Si W23D5 (viernes 5 junio) cierra sin dato → retraso ≥D32 laborables. Decisión pendiente con Lucía: ¿actualizar umbral de escalada? ¿intentar contacto directo INE?
- **Próxima acción**: Verificación W23D4 (jueves 4 junio).

---

### Hallazgo 2: Madrid Content School — Precios no visibles. Sitio en migración incompleta

- **Fuente**: WebFetch madridcontent.school (consultado 2026-06-03)
- **Dato**:
  - **Precios**: No visibles en el nuevo sitio (segunda verificación — W23D2 y W23D3 sin precios)
  - **Ediciones "Promoción completa"** detectadas:
    - Máster Branded Content: abril 2026 — completa
    - Título Experto Branded Content MCS+UCM: **octubre 2024** — completa (fecha 2024 = entrada de referencia histórica no actualizada)
    - Curso Intensivo IA para Creadores: junio 2026 — completa
    - Curso Avanzado IA Generativa: **mayo 2024** — completa (ídem — stale)
  - **Diagnóstico**: El nuevo sitio madridcontent.school está mostrando ediciones históricas (2024) junto con las actuales. La migración de datos del sitio está incompleta. Los precios (€700/€900/€1.375 de W18) no están publicados en el nuevo dominio.
- **Implicación**: No hay precios públicos actualmente en madridcontent.school. Los datos de W18 son la única referencia confirmada hasta nueva verificación. El Curso Intensivo IA junio 2026 arrancó y está al completo — demanda activa confirmada.
- **Decisión**: Sin cambios adicionales en config (datos W18 ya como referencia con nota). Siguiente verificación cuando el sitio publique precios o abra nueva convocatoria.

---

### Hallazgo 3: ECAM/ESCAC subvenciones digitales — Terminan 15 junio 2026 (12 días)

- **Fuente**: WebSearch + BOE (consultado 2026-06-03)
- **Dato**: El periodo de ejecución de las actividades subvencionadas (formación capacidades digitales ECAM + ESCAC, Next Gen EU) termina el **15 de junio de 2026**. Esto cubre tanto el programa HAZ (RTVE Instituto, plazas agotadas desde W17) como la financiación de las Escuelas de Oficios de ECAM y los cursos cortos de OFF ESCAC.
- **Implicación**: A partir del 16 de junio, ECAM y OFF ESCAC pierden la financiación Next Gen EU para formación corta subvencionada. Esto puede implicar:
  - Reducción de oferta gratuita/subvencionada de ECAM en formación corta IA
  - Potencial apertura de segmento: alumnos que buscaban formación gratuita deberán buscar alternativas de pago
  - ECAM Máster IA Big Data (oct 2025-jun 2026) no afectado — finaliza precisamente en junio
- **Para 35mm**: Señal de mercado baja-media. No amenaza directa, pero puede abrir captación de perfiles que buscaban subvención.
- **Decisión**: Añadir como señal a monitorizar en config (fecha fin subvención). Sin cambio de nivel de amenaza ECAM.

---

### Hallazgo 4: SHIFTA — Artefacto "13 julio" reaparece (sexta vez). Confirmado ruido

- **Fuente**: WebSearch sector sweep (consultado 2026-06-03)
- **Dato**: La síntesis de búsqueda menciona "Posgrado Producción Audiovisual IA con fechas **25 mayo y 13 julio 2026**" para SHIFTA. Esto es el artefacto persistente del modelo de síntesis. Config confirma que el Posgrado Producción Audiovisual IA arranca octubre 2026 (verificado por WebFetch directo en W21). La fecha "13 julio" no existe.
- **Cuenta artefacto**: W21D1, W22D2, W22D4, W23D1, W23D3 = **quinta-sexta aparición** (conteo impreciso en síntesis acumulada). Patrón sistemático — el modelo de síntesis de búsqueda genera esta fecha de forma recurrente desde el contenido del PDF `SHIFTA_MASTER_GRAFICO_folleto2406.pdf`.
- **Decisión**: No actuar. Artefacto documentado. No actualizar config SHIFTA.

---

### Hallazgo 5: Sector sweep W23D3 — Estable

- **Fuente**: WebSearch (consultado 2026-06-03)
- **Dato**: Sin nuevos competidores de impacto. ECAM convocatoria admisiones 2026-2027 (noticia enero 2026 — ya conocida). The BIG IA mañana D-2 para arranque (viernes 5 junio). Sin lanzamientos sorpresa.
- **Estado del mapa W23D3**: **32 competidores** (sin cambios).

---

## Señales Detectadas

| Señal | Valor | Delta vs 2026-06-02 | Fuente |
|-------|-------|---------------------|--------|
| EPA T1 2026 | **Sin publicar — ≥D30; W23D3 negativo; nota CNAE-2025 reiterada (3ª jornada)** | +1 día laborable | INE WebFetch |
| Madrid Content School | Precios no visibles en nuevo sitio (2ª verificación); fechas 2024 presentes — migración incompleta | Sin cambio | madridcontent.school |
| ECAM/ESCAC subvenciones | **Fin período ejecución: 15 junio 2026** — 12 días. Formación corta subvencionada se agota | Fecha precisa nueva | BOE + WebSearch |
| SHIFTA | Artefacto "13 julio" sexta aparición — síntesis WebSearch (no actuar) | Sin cambio operativo | WebSearch |
| Sector | Estable — 32 competidores | Sin cambio | WebSearch |

**Mapa de competidores**: **32 competidores** (sin cambios).

---

## Actualizaciones aplicadas en competitors-config.md

- [x] **Fecha**: 2026-06-02 → 2026-06-03
- [x] **EPA señal**: ≥D30; W23D3 negativo; nota CNAE-2025 reiterada; próxima verificación W23D4
- [x] **Header amenaza**: W23D3 (actualizado 2026-06-03)

---

## Prioridades W23 (continuación)

- [ ] **EPA T1 2026** — W23D4 (jueves 4 junio): verificación. Penúltimo día de semana
- [ ] **The BIG IA post-arranque** — W23D5 (viernes 5 junio): verificación día de arranque
- [ ] **W23 cierre semanal (viernes 5 junio)**: si sin EPA → ≥D32 laborables → evaluar umbral escalada con Lucía
- [ ] **CEI 29 junio** — apertura inscripciones en ~26 días — monitorizar
- [ ] **ECAM formación corta** — verificar impacto fin subvención 15 junio en oferta (semana del 15)

---

*Actualizado al cierre del día 2026-06-03. W23D3.*
