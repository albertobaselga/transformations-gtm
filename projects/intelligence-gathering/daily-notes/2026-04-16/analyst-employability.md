# Sofía Blanco — Nota Diaria [2026-04-16]
**Rol**: Analista de Empleabilidad  
**Semana**: W16 D4 (Jueves) — Pre-síntesis semanal  
**Fuentes operativas**: SEPE (macro desbloqueado), La Moncloa nota prensa, Adrian Torres W16 D4  
**Estado SEPE CNAE 59**: ⚠️ Datos macro disponibles — tablas sectoriales CNAE en PDF binario no extraíble vía web (gap documentado)

---

## Resumen

W16 D4. **SEPE marzo 2026 desbloqueado tras 5+ días HTTP 403.** Los datos macro confirman el mejor mercado laboral de marzo en 18 años: paro mínimo histórico (2.419.712), contratos +12,4% interanual. El dato sectorial CNAE 59 (actividades cinematográficas, vídeo y TV) no ha podido extraerse directamente — las tablas de contratos por actividad económica están en formato PDF binario protegido en SEPE que requiere descarga directa desde el portal; se documenta el gap y se registra como pendiente de acceso manual.

La meseta de ofertas audiovisual que Adrian documenta (Indeed 100 día 7 consecutivo, Tecnoempleo audiovisual 7 estable) es coherente con un mercado general en mejora: no hay señal de deterioro sectorial, el mercado audiovisual está selectivo pero activo. La señal más relevante del día es la inversión de dinámicas IA: **ElevenLabs (herramienta del inventario) contrata Motion Designer**, confirmando que las propias empresas de IA son ya empleadoras del perfil que 35mm forma.

Para la pre-síntesis W16: el entorno macro refuerza el argumento de inserción laboral de 35mm. La reducción del diferenciador FUNDAE (SHIFTA también lo tiene) pone más presión sobre los dos diferenciadores restantes: **prácticas en productora real** y **velocidad** (semanas vs 6 meses de SHIFTA).

---

## Hallazgos

### Hallazgo 1: SEPE marzo 2026 macro — mínimo paro en 18 años, contratos +12,4% interanual

- **Fuente**: La Moncloa nota prensa 06/04/2026, sepe.es nota oficial
- **Dato**:

| Métrica | Valor marzo 2026 | Var. mensual | Var. interanual |
|---------|-----------------|--------------|-----------------|
| Paro registrado total | **2.419.712** | -22.934 (-0,9%) | -160.426 (-6,2%) |
| Contratos registrados | **1.311.070** | — | +144.469 (+12,4%) |
| Contratos indefinidos | 576.532 (44%) | — | — |
| Paro femenino | 1.458.572 | -14.841 | Mínimo desde 2008 |
| Paro juvenil (<25) | 188.977 | — | Mínimo histórico marzo |
| Paro Servicios | — | -18.852 (-1,1%) | — |
| Paro Construcción | — | -5.846 (-3,4%) | — |
| Paro Industria | — | -1.482 (-0,8%) | — |

- **Relevancia para 35mm**: El mercado laboral general mejora significativamente. El argumento de inserción laboral de 35mm se fortalece: el sector servicios (donde se inserta el egresado audiovisual) cae en paro un -1,1% mensual adicional. El argumento para Daniel (brief B2B PRISA): "formamos en el momento en que el mercado absorbe — paro mínimo en 18 años, contratos +12,4%."
- **Confianza**: Alta (fuentes oficiales La Moncloa / SEPE)

---

### Hallazgo 2: SEPE CNAE 59 — gap de datos sectoriales documentado (tablas no extraíbles vía web)

- **Fuente**: Intentos de acceso a sepe.es estadísticas contratos 2026 — 2026-04-16
- **Dato**: Las tablas de contratos por actividad económica (CNAE) para marzo 2026 están disponibles en el portal SEPE pero en formato PDF binario protegido no procesable via fetch web. El URL de las tablas de enero 2026 (`CINIYADSCRIP_MES.pdf`) existe pero el equivalente de marzo devuelve 404 en este heartbeat — posiblemente publicación diferida o estructura de URL distinta.

- **Lo que sé de enero 2026 (baseline previo)**: El PDF de enero existe pero es binario comprimido (FlateDecode), no legible vía extracción automática. Para extraer CNAE 59 se requiere:
  1. Descarga directa del PDF desde el portal SEPE
  2. Extracción con herramienta PDF local (pdftotext, tabulizer)

- **Impacto en el análisis**: No puedo confirmar ni descartar la meseta audiovisual de diciembre 2025 a partir de datos SEPE marzo directos. Esta confirmación queda **pendiente** hasta acceso manual al portal.

- **Alternativa usada**: Cruce con serie sistemática de Adrian (5 portales × 7 días) como proxy de flujo de oferta, más las señales puntuales de Marcos en el mercado de empleo audiovisual (JobToday ~128 ofertas, Glassdoor ~115).

- **Confianza**: Alta para el gap documentado; No aplicable para CNAE 59 específico

---

### Hallazgo 3: Cruce meseta audiovisual — SEPE macro + serie Adrian (coherencia confirmada)

- **Fuente**: Adrian Torres W16 D4 (`analyst-job-postings.md` 2026-04-16) + SEPE macro marzo 2026
- **Análisis**:

| Indicador | Valor | Interpretación |
|-----------|-------|----------------|
| Indeed motion designer ES | 100 (día 7 consecutivo) | Meseta de oferta confirmada — mercado activo pero no en expansión |
| Tecnoempleo audiovisual | 7 (estable) | Mercado selectivo en plataforma especializada |
| Tecnoempleo motion graphics | 0 (ruptura técnica) | 1 sola oferta expiró — base demasiado pequeña para señal real |
| Domestika P1 relevante | ~5 (estable) | Contratación activa en plataforma creativa |
| Domestika nuevas P1 hoy | 2 Sandav (15/04) | Señal de flujo positivo — empresas de producción activas |
| JobToday audiovisual ES | ~128 ofertas | Dato puntual Marcos — coherente con meseta |
| Glassdoor audiovisual ES | ~115 empleos | Dato puntual Marcos — coherente |
| SEPE paro Servicios | -18.852 (-1,1%) | Entorno macro positivo para inserción |
| SEPE contratos total | +12,4% YoY | Mercado general en expansión — absorbe egresados |

- **Síntesis**: La meseta de ofertas audiovisual de Adrian (7 días estable) es coherente con un mercado general que mejora pero donde el segmento especializado (motion/audiovisual) ya está en un plateau estructural. No es deterioro — es selectividad. El mercado crece en volumen general (+12,4% contratos YoY) pero el nicho audiovisual mantiene volúmenes estables. Esto apoya la narrativa de 35mm: "el mercado audiovisual es selectivo — necesitas el perfil correcto para insertarte."

- **Confianza**: Alta para la coherencia macro/micro; Media para la interpretación de plateau estructural (falta CNAE 59 directo)

---

### Hallazgo 4: ElevenLabs como empleadora de Motion Designer — inversión de dinámica IA

- **Fuente**: Adrian Torres W16 D4 (cruce con inventario herramientas serie)
- **Dato**: ElevenLabs (empresa de síntesis de voz IA, presente en el inventario de herramientas de la serie desde W15) está contratando Motion Designer en remoto. Primera señal en la serie de una empresa de IA que actúa como empleadora directa del perfil motion.

- **Implicación para la narrativa de empleabilidad**:
  - **Eje habitual**: empresa audiovisual/media busca profesional que *use* herramientas IA
  - **Nueva dimensión**: empresa de IA busca profesional que *comunique* sus herramientas visualmente
  - El perfil motion IA-native tiene demanda en dos ejes ahora: producción/media + empresas de IA

- **Argumento para el brief de 35mm (uso en brief Daniel)**:
  > "Formamos a quienes van a trabajar para las empresas que construyen las herramientas. ElevenLabs, una de las herramientas más demandadas en los JDs del mercado audiovisual español, está contratando motion designers en remoto. El mercado no solo usa IA — las empresas de IA necesitan quienes sepan comunicarla."

- **Confianza**: Alta (señal directa, nombre de empresa identificado)

---

### Hallazgo 5: Actualización competitiva empleabilidad — SHIFTA FUNDAE confirma estrechez diferencial

- **Fuente**: Marcos Aldana W16 D4 (`head-marcos.md` 2026-04-16)
- **Dato**: SHIFTA confirmado bonificable FUNDAE. Los diferenciadores de 35mm sobre SHIFTA se reducen a **2**: (1) prácticas en productora real, (2) formato intensivo (semanas vs 6 meses).

- **Impacto en el análisis de empleabilidad**:
  - El argumento "FUNDAE = ventaja exclusiva de 35mm" ya no es válido
  - El argumento de inserción laboral debe pivotar a **velocidad de inserción**:
    - SHIFTA: 6 meses de formación → inserción ~T+7 meses
    - 35mm intensivo: semanas de formación → inserción ~T+2/3 meses
    - Diferencia de ~4-5 meses de salario perdido (~€7.000-8.000 adicionales al coste de oportunidad ya calculado)
  - Este argumento complementa mi cálculo de coste de oportunidad del 15/04

- **Confianza**: Alta para los atributos; Baja para la velocidad de inserción real de 35mm (dato no publicado aún)

---

## Señales Detectadas — Resumen W16 D4

| Señal | Valor | Delta vs W16 D3 (15/04) | Fuente |
|-------|-------|------------------------|--------|
| SEPE paro total marzo 2026 | 2.419.712 | **DESBLOQUEADO** — mínimo 18 años | sepe.es/La Moncloa |
| SEPE contratos marzo 2026 | 1.311.070 (+12,4% ia) | **DESBLOQUEADO** | sepe.es |
| SEPE CNAE 59 marzo 2026 | **NO EXTRAÍDO** — PDF binario | Gap documentado | sepe.es (acceso fallido) |
| Indeed motion designer ES | 100 | 0 — día 7 meseta | Adrian W16 D4 |
| Tecnoempleo audiovisual | 7 | 0 — estable | Adrian W16 D4 |
| Tecnoempleo motion graphics | 0 | -1 (ruptura técnica, base mínima) | Adrian W16 D4 |
| Domestika P1 nuevas | 2 Sandav (15/04) | +2 | Adrian W16 D4 |
| ElevenLabs como empleadora motion | Detectado | **NUEVO** — primera señal inversión dinámica | Adrian W16 D4 |
| SHIFTA FUNDAE bonificable | Confirmado | **ACTUALIZACIÓN** — diferenciador eliminado | Marcos W16 D4 |
| EPA T1 2026 | Bloqueado | Sin cambio — hasta ~25/04 | INE |
| Coste oportunidad TAI | ~€130.000 | Sin cambio (calculado ayer) | Sofía W16 D3 |

---

## Pre-síntesis W16 — Aportación de Empleabilidad

**Para Marcos (síntesis semanal mañana viernes 17/04):**

### Señales de flujo de oferta (serie Adrian W15-W16)
- **7 días consecutivos de meseta**: Indeed 100, Tecnoempleo audiovisual 7, Domestika ~5. El mercado audiovisual especializado no crece en volumen pero tampoco se deteriora. Interpretación: selectividad estructural, no crisis.
- **Sin datos de CNAE 59 SEPE directo**: el dato sectorial oficial de marzo no está extraído. Pendiente para completar la confirmación/descarte de la meseta de diciembre 2025.

### Entorno macro (SEPE marzo 2026)
- Mínimo paro 18 años + contratos +12,4% YoY → el argumento de inserción laboral de 35mm opera en el mejor entorno de mercado en casi dos décadas.
- Servicios absorbiendo (-18.852 en paro mensual) → el sector donde se inserta el egresado audiovisual está activo.

### Nuevo eje de demanda IA
- ElevenLabs como empleadora directa de motion designer: la cadena de valor de la IA audiovisual ya no es solo "empresas que usan herramientas IA" sino "empresas de IA que necesitan quienes las comuniquen". Esto amplía el universo de empleadores para los egresados de 35mm.

### Reposicionamiento competitivo (implicación para brief Daniel)
- SHIFTA FUNDAE: diferenciadores de 35mm → 2 (prácticas + velocidad). El argumento de velocidad tiene ahora una cuantificación adicional: ~4-5 meses menos de tiempo hasta inserción = ~€7.000-8.000 de salario capturado que SHIFTA hace perder.
- Combinar con mi cálculo del 15/04: el argumento para PRISA es "1 año TAI = €13.530. SHIFTA = 6 meses sin práctica. 35mm = semanas, con práctica, bonificado. El tiempo vale dinero y el mercado está en mínimo histórico."

---

## Pendientes

- [ ] **SEPE CNAE 59 marzo 2026**: requiere descarga directa del PDF desde portal SEPE y extracción local. Prioridad para W17 D1 (martes 21/04 post-NAB).
- [ ] **EPA T1 2026**: bloqueado hasta ~25/04. Confirmar disponibilidad en ese momento.
- [ ] **Velocidad inserción 35mm**: el dato real de tiempo hasta primer contrato en egresados de 35mm no está documentado — clave para cuantificar el diferenciador de velocidad sobre SHIFTA.
- [ ] **Precio SHIFTA**: sin precio publicado, la comparativa económica completa vs 35mm no está cerrada. Iker debe obtenerlo.
- [ ] **NAB 2026 (18-22/04)**: ¿emergen nuevos perfiles laborales asociados a herramientas broadcast IA anunciadas? Coordinar con Noa para captura de señales de empleo.
- [ ] **CES Open Day 18/04**: confirmar si 35mm aparece en materiales de matrícula o comparativas.

## Sin señal nueva

- TGSS: sin datos nuevos. Última lectura diciembre 2025.
- INE EPA T1 2026: bloqueado hasta ~25/04.
- LinkedIn: sin sesión activa (ruptura metodológica documentada por Adrian). Baselines LI pendientes.

---

*Sofía Blanco — Analista de Empleabilidad*  
*W16 D4 — Pre-síntesis. Datos SEPE macro desbloqueados; CNAE 59 sectorial pendiente de acceso manual.*
