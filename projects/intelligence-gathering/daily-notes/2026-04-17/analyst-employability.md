# Sofía Blanco — Nota Diaria [2026-04-17]
**Rol**: Analista de Empleabilidad  
**Semana**: W16 D5 (Viernes — síntesis semanal)  
**Fuentes operativas**: SEPE estadística contratos marzo 2026 (XLS directo), SEPE estadística marzo 2025 (YoY), Marcos Aldana D5, serie Adrián Torres (día 8)  
**Estado SEPE CNAE 59**: ✅ **DESBLOQUEADO** — dato extraído directamente de `ESTADISTICA_DE_CONTRATOS_MES.xls` (SEPE marzo 2026)

---

## Resumen

W16 D5. **CNAE 59 marzo 2026 extraído por primera vez en la serie.** El gap de datos sectoriales que bloqueaba la confirmación de la meseta audiovisual está cerrado. La señal es mixta pero relevante: **+3,5% YoY** en contratos totales (34.772 en marzo 2026 vs 33.593 en marzo 2025) — una reversión respecto al -19,5% acumulado ene-feb. Sin embargo, el dato más significativo no es el total sino el **cambio de mix contractual**: los contratos de "Artistas y personal técnico/auxiliar" pasan del 57,8% al 70,2% del total, mientras los contratos "por circunstancias de la producción" caen del 35,4% al 25,2%. Esta recomposición es coherente con la entrada en vigor de la nueva modalidad contractual del Estatuto del Artista (R.D. 2025) documentada en la Nota Previa del propio SEPE.

La serie de Adrián cierra W16 en meseta día 8 (Indeed 100, verificado por Marcos). ElevenLabs activa confirmada 24h después. El entorno macro (paro mínimo 18 años, contratos +12,4% general) sigue siendo el mejor contexto de inserción de la última década.

**Para la síntesis W16**: el dato CNAE 59 de marzo completa el cuadro sectorial. El sector audiovisual no está en contracción libre — está en transición de modelo contractual, con demanda estable en portales de empleo y un mercado general favorable.

---

## Hallazgo 1: CNAE 59 marzo 2026 — DATO DESBLOQUEADO (+3,5% YoY)

- **Fuente**: `ESTADISTICA_DE_CONTRATOS_MES.xls` hoja `2.4M` — sepe.es estadística contratos 2026/marzo. Extraído con pdfminer/xlrd el 2026-04-17.
- **Nota metodológica crítica**: SEPE completó en marzo 2026 la migración a **CNAE 2025** (R.D. 10/2025). El código 59 mantiene su denominación pero la clasificación del empleador fue actualizada individualmente via TGSS. La comparación YoY con marzo 2025 (CNAE 2009) tiene una cautela metodológica — los volúmenes son comparables a nivel de división 59, pero el detalle de subsectores puede haber migrado.

### Datos CNAE 59 — Contratos marzo 2026 vs marzo 2025

| Métrica | Marzo 2026 | Marzo 2025 | Var. YoY |
|---------|-----------|-----------|----------|
| **Total contratos** | **34.772** | **33.593** | **+3,5%** |
| Total iniciales | 34.708 | 33.536 | +3,5% |
| Convertidos en indefinidos | 64 | 57 | +12,3% |

### Mix contractual CNAE 59 — comparación YoY

| Tipo de contrato | Marzo 2026 | % 2026 | Marzo 2025 | % 2025 | Var. YoY |
|-----------------|-----------|--------|-----------|--------|----------|
| **Artistas y pers. técnico/auxiliar** | **24.353** | **70,2%** | **19.382** | **57,8%** | **+25,6%** |
| Circunstancias de la producción | 8.746 | 25,2% | 11.855 | 35,4% | **-26,2%** |
| Indefinido (Bonif./no Bonif.) | 842 | 2,4% | 717 | 2,1% | +17,4% |
| Otros contratos | 538 | 1,6% | — | — | — |
| Sustitución | 208 | 0,6% | 197 | 0,6% | +5,6% |
| Práctica profesional | 16 | 0,0% | 16 | 0,0% | 0% |
| Formación en alternancia | 2 | 0,0% | — | — | — |
| Indef. pers. discapacidad | 3 | 0,0% | 0 | 0,0% | — |

- **Relevancia para 35mm**: El sector CNAE 59 no está en contracción en marzo. La caída ene-feb (-19,5% YoY acumulado) no se confirma en marzo — o se revierte, o fue específica de esos meses. El cambio de mix es la señal estructural más importante: el Estatuto del Artista (nueva relación laboral especial para artistas escénicos, audiovisuales y musicales) está recomponiendo el tejido contractual del sector. Los contratos "artistas" absorben ahora 7 de cada 10 iniciales en CNAE 59.
- **Implicación para el perfil 35mm**: El egresado motion/IA que entra al mercado audiovisual tiene alta probabilidad de ser contratado bajo la modalidad "Artistas y técnico/auxiliar" — no bajo contrato indefinido estándar. Este contexto da relevancia a la formación en gestión de carrera freelance/artista que podría ser un diferenciador de 35mm no explotado.
- **Confianza**: Alta (dato directo de XLS oficial SEPE). Cautela metodológica en comparación YoY exacta por migración CNAE 2025.

---

## Hallazgo 2: Cruce meseta de oferta (día 8) × CNAE 59 (+3,5%) — coherencia confirmada

- **Fuente**: Marcos Aldana D5 (verificación directa Indeed) + SEPE contratos extraído D5
- **Análisis**:

| Indicador | Valor | Interpretación |
|-----------|-------|----------------|
| Indeed motion designer ES | 100 (día 8 meseta) | Stock de oferta estable — mercado activo no expansivo |
| CNAE 59 contratos marzo | 34.772 (+3,5% YoY) | Flujo de contratación positivo — mercado no se contrae |
| Artistas en CNAE 59 | 24.353 (70,2%) | Modalidad dominante — sector se mueve a contratos artista |
| Circ. producción CNAE 59 | 8.746 (-26,2% YoY) | Contratos proyecto cortos cediendo a nueva modalidad |
| Indefinidos CNAE 59 | 842 (+17,4% YoY) | Pequeña señal positiva de estabilización |
| SEPE paro total marzo | 2.419.712 (-6,2% ia) | Entorno macro favorable |
| SEPE contratos total | 1.311.070 (+12,4% ia) | Mercado general expansivo |

- **Síntesis**: La meseta de oferta de Adrián (stock estable en portales) es coherente con un flujo de contratación CNAE 59 ligeramente positivo (+3,5%). No hay señal de deterioro sectorial. El sector audiovisual español cierra marzo en equilibrio selectivo: más contratos en total pero recomposición interna hacia la nueva modalidad artista.
- **Confianza**: Alta para la coherencia; Media para la interpretación del mix (requiere seguimiento en abril para confirmar tendencia)

---

## Hallazgo 3: SEPE CNAE 2025 — implicaciones para la serie

- **Fuente**: Nota Previa `ESTADISTICA_DE_CONTRATOS_MES.xls` marzo 2026
- **Dato**: SEPE completó la migración a CNAE 2025 en marzo 2026. Los datos de enero y febrero 2026 serán retroadaptados a CNAE 2025 "próximamente". El código 59 se mantiene con la misma denominación en CNAE 2025: "Producción cinematográfica, de vídeo y de programas de televisión, grabación de sonido y edición musical".
- **Impacto en la serie**: La comparación ene-feb 2026 (-19,5% YoY, dato D1) usaba CNAE 2009. Cuando SEPE publique los datos retroadaptados, ese porcentaje podría variar. El dato de marzo 2026 ya es CNAE 2025 y comparado contra marzo 2025 (CNAE 2009) muestra +3,5%.
- **Para síntesis W16**: Documentar que los datos de enero-febrero serán actualizados y el dato fiable más reciente es marzo 2026 con CNAE 2025.
- **Confianza**: Alta para el hecho; Media para la implicación en el dato ene-feb (pendiente retroadaptación SEPE)

---

## Señales Detectadas — Resumen W16 D5

| Señal | Valor | Delta vs D4 (16/04) | Fuente |
|-------|-------|---------------------|--------|
| **SEPE CNAE 59 marzo 2026** | **34.772 contratos (+3,5% YoY)** | **DESBLOQUEADO** — gap cerrado | sepe.es XLS directo |
| SEPE CNAE 59 mix artistas | 70,2% del total | **NUEVO** — shift estructural | sepe.es XLS 2026 |
| SEPE CNAE 59 circ. producción | 25,2% (-26,2% YoY) | **NUEVO** — caída significativa | sepe.es XLS comparativo |
| Indeed motion designer ES | 100 | 0 — día 8 meseta (máx serie) | Marcos D5 |
| ElevenLabs empleadora motion | ACTIVA (verificada) | Sin cambio — sigue abierta | Marcos D5 |
| SEPE paro total marzo | 2.419.712 (-6,2% ia) | Sin cambio | sepe.es |
| SEPE contratos total | 1.311.070 (+12,4% ia) | Sin cambio | sepe.es |
| EPA T1 2026 | Bloqueado (~25/04) | Sin cambio | INE |
| CNAE 2025 migración | Completada en marzo 2026 | **NUEVO** — impacta comparabilidad YoY | Nota Previa SEPE |

---

## Síntesis W16 — Aportación de Empleabilidad (actualizada D5)

**Para Marcos (síntesis semanal W16):**

### Señal nueva D5: CNAE 59 desbloqueado
El dato sectorial oficial de SEPE para marzo 2026 está disponible. **34.772 contratos en CNAE 59 (+3,5% YoY)** — el sector audiovisual no confirma la contracción de ene-feb. La señal más relevante es la recomposición del mix contractual hacia contratos artistas (+25,6% YoY), coherente con la nueva regulación del Estatuto del Artista y con la meseta de oferta de 8 días documentada por Adrián.

### Narrativa de cierre W16
El mercado audiovisual español cierra la semana en un equilibrio complejo:
- **Stock de oferta**: meseta estable (8 días, récord de serie)
- **Flujo de contratación CNAE 59**: positivo en marzo (+3,5% YoY), revirtiendo el dato acumulado ene-feb
- **Recomposición contractual**: el Estatuto del Artista está reordenando cómo se contrata en el sector
- **Mercado general**: paro mínimo en 18 años, contratos generales +12,4% — entorno favorable para inserción
- **Nuevo eje de demanda IA**: ElevenLabs empleadora directa de motion designer — el perfil 35mm tiene mercado en empresas que construyen IA, no solo las que la usan

### Argumento para el brief de 35mm (implicación directa)
> "El sector audiovisual español contrató 34.772 profesionales en marzo 2026, un 3,5% más que hace un año, en el mejor entorno de paro de los últimos 18 años. El 70% de esas contrataciones son bajo la nueva modalidad de Artistas y Técnico Audiovisual. Formamos en el momento en que el mercado más contrata y bajo la modalidad que más crece."

---

## Pendientes para W17

- [ ] **SEPE retroadaptación ene-feb 2026 a CNAE 2025**: SEPE anunció que publicará próximamente los datos de enero y febrero con CNAE 2025. Confirmar publicación en W17 y recalcular el acumulado ene-mar.
- [ ] **Tendencia CNAE 59 abril**: Confirmar si la reversión de marzo (+3,5%) se consolida o era puntual.
- [ ] **EPA T1 2026**: Estimado ~25/04. Incluirá datos de empleo por actividad económica más completos.
- [ ] **Precio SHIFTA**: Sin confirmar. Sin precio, comparativa económica vs 35mm incompleta.
- [ ] **Velocidad inserción 35mm**: Dato real no publicado — clave para cuantificar diferenciador sobre SHIFTA.
- [ ] **NAB 2026 (18-22/04)**: ¿Emergen nuevos perfiles laborales en JDs post-NAB? Coordinar con Noa.

## Sin señal nueva

- LinkedIn: sin sesión activa (ruptura metodológica, Adrián D4)
- TGSS: sin datos nuevos. Última lectura diciembre 2025.
- Observatorio Audiovisual Europeo: sin nuevo informe en W16

---

*Sofía Blanco — Analista de Empleabilidad*  
*W16 D5 — Cierre de semana. Gap CNAE 59 cerrado: 34.772 contratos marzo 2026 (+3,5% YoY). Sector en equilibrio selectivo con recomposición contractual hacia modalidad artistas.*
