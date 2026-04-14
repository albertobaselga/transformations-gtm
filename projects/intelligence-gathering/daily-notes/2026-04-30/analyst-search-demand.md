# Marina Reyes — Nota Diaria 2026-04-30 (W18 Día 3 — Cierre de Mes)

## Resumen

Cierre de W18 y de abril. **D9 activo — 5ª sesión consecutiva sin avance**: `runway ml` y `edicion video ia` siguen congeladas en 5-11 abr 2026. Novedad relevante: `runway ml` muestra **re-escalado de normalización** — el pico 100 se desplaza de sem 15-21 mar a 22-28 mar; plateau post-pico en 53 (dentro del rango 53-58 entre sesiones). Tres nuevos competidores detectados por Iker en barrido de cierre de mes: **Madrid Content School** (Lab IA Audiovisual €700 + FUNDAE — precio de entrada FUNDAE más bajo del mercado ES), SONTIC Digital School (audio IA, Zaragoza, regional) y EOI Málaga (€0 FSE+, desempleados <30 — validador institucional). Matiz crítico The Core School: el Diploma IA (€3.950 retail) **no** tiene FUNDAE para alumno individual — la bonificación es exclusiva del canal empresa-a-escuela. EPA T1 2026 ventana abril cerrada.

---

## Primera Pasada — Trends W18D3: D9 activo, 5ª sesión. Re-escalado de normalización en `runway ml`

**Config**: `sources/trends/w18d3-pending.md`
**Sesión**: activa (datos obtenidos)

### Resultados

| Keyword | Último dato | Valor | Delta vs W18D2 | Estado |
|---------|-------------|-------|----------------|--------|
| `runway ml` | **5–11 abr 2026** | **53** | -3 pts (re-escalado normalización) | 🔴 D9 — 5ª sesión sin avance |
| `edicion video ia` | **5–11 abr 2026** | **15** | -3 pts (variación muestreo <50/mes) | 🔴 D9 — 5ª sesión sin avance |

### D9 — Quinta sesión sin avance

| Sesión | Fecha | `runway ml` | `edicion video ia` | Corte datos |
|--------|-------|-------------|---------------------|-------------|
| W17D3 | 24 abr | 58 | 17 | 5-11 abr |
| W17D4 | 25 abr | 58 | 18 | 5-11 abr |
| W18D1 | 28 abr | 58 | 17 | 5-11 abr |
| W18D2 | 29 abr | 56 | 18 | 5-11 abr |
| **W18D3** | **30 abr** | **53** | **15** | **5-11 abr** |

25 días desde el inicio de NAB (18 abr 2026) sin dato visible. Cookie fresca a Pablo Navarro: pendiente.

### Análisis `runway ml` — Re-escalado de normalización

La serie devuelta en W18D3 muestra un **cambio en la asignación del pico** respecto a sesiones anteriores:

| Semana | W17D3–W18D2 (sesiones previas) | W18D3 (sesión actual) |
|--------|-------------------------------|----------------------|
| 15–21 mar 2026 | **100** (pico) | **93** |
| 22–28 mar 2026 | 88 | **100** (pico nuevo) |
| 29 mar–4 abr 2026 | 58 | 53 |
| 5–11 abr 2026 | 56–58 | 53 |

**Interpretación**: Google Trends re-escala la serie periódicamente al recalcular el normalizador interno. El índice relativo 100 ha sido reasignado a la semana 22-28 mar — ambas semanas son co-pico de la demanda Runway en ES (la semana del anuncio del $10M fund: 31 mar cae en la semana 29 mar-4 abr, *posterior* a ambas semanas de pico). El re-escalado no cambia la conclusión estratégica:

- El plateau post-pico en 53 (W18D3) vs. 56-58 (sesiones anteriores) es coherente con el mismo re-escalado — el rango de plateau real sigue siendo ~53-58 entre sesiones
- La tendencia (plateau estructural post-$10M fund) no ha cambiado
- [strat-006] vigente: hipótesis de plateau estructural cerrada; no re-abrir hasta dato NAB

**Nota de documentación**: actualizar keywords-database.md para reflejar el rango de pico como "semanas 15-21 y 22-28 mar 2026 (co-pico; pico relativo varía por normalización entre sesiones)" y el plateau como "53-58 según sesión (re-escalado)".

### Análisis `edicion video ia` — Variación de muestreo

| Semana | W18D2 | W18D3 | Interpretación |
|--------|-------|-------|----------------|
| 15–21 mar 2026 | 100 | 100 | Pico estable |
| 22–28 mar 2026 | 7 | **0** | Variación muestreo <50/mes — dentro de error esperado |
| 29 mar–4 abr 2026 | 21 | 21 | Estable |
| 5–11 abr 2026 | 18 | **15** | Variación muestreo |

El valor 0 en 22-28 mar (vs. 7 en W18D2) es variación de muestreo normal para keyword con volumen `<50/mes`. No indica cambio de tendencia. El patrón event-driven sigue vigente.

---

## Segunda Pasada — The Core School: matiz FUNDAE retail vs. empresa

**Fuente**: Iker Molina `analyst-competitors.md` 2026-04-30

### La corrección del W18D2

En W18D2 se documentó "FUNDAE confirmado" para The Core School y se actualizó URL 11 con "FUNDAE ya no diferencia." W18D3 añade el matiz operativo crítico:

- **Canal retail (alumno individual)**: La página del Diploma IA (€3.950) NO menciona FUNDAE. Ayudas disponibles: becas internas + financiación Banco Sabadell 12 cuotas sin interés.
- **Canal empresa (/empresas/)**: FUNDAE confirmado para "todas las ofertas académicas y formación corporativa" cuando la empresa contrata directamente.

### Implicación para el diferenciador de 35mm

| Perfil | FUNDAE 35mm | FUNDAE The Core School | Diferenciador |
|--------|-------------|----------------------|---------------|
| Alumno individual (B2C) | ✅ (si 35mm lo ofrece directamente) | ❌ (no visible en canal retail) | ✅ 35mm conserva diferenciador B2C |
| Empresa contratante (B2B) | ✅ | ✅ | Sin diferenciador FUNDAE |

**Acción correctiva**: el texto de URL 11 Acción requerida que decía "FUNDAE ya no diferencia" era incompleto. Para B2C, FUNDAE sigue siendo un diferenciador frente a The Core School si 35mm lo ofrece al alumno individual. El canal empresa de The Core School (Atresmedia, Banijay, La Liga Studios) compite en B2B puro, no en retail bonificado.

**Pendiente de verificación interna**: ¿ofrece 35mm FUNDAE en canal retail individuo o solo vía empresa? Esto determina si el diferenciador B2C FUNDAE es real o teórico.

---

## Tercera Pasada — Nuevos competidores W18D3

**Fuente**: Iker Molina `analyst-competitors.md` 2026-04-30

### Madrid Content School — 🟡 MEDIA (nuevo, relevante para SEO)

**Programa**: Laboratorio IA Audiovisual | €700 | 10h live | 4 semanas | online (Zoom) | FUNDAE sí

**Herramientas**: Midjourney avanzado, ComfyUI, Adobe GenAI workflow, música para audiovisual IA

**Posicionamiento**: "Primera escuela de Branded Content en España"

**Implicaciones SEO**:
- €700 + FUNDAE = precio de entrada FUNDAE más bajo del mercado ES (por debajo de CEI €990)
- El nombre "Laboratorio IA Audiovisual" solapa semánticamente con el espacio de URL 11, pero el contenido es imagen/branded content, no producción audiovisual técnica ni Runway/DaVinci
- Keywords que puede capturar: `ia audiovisual`, `curso ia para videos`, `ia generativa contenido` — no `runway ml` ni `posgrado produccion audiovisual ia`
- Riesgo presupuestal B2B: puede capturar partidas FUNDAE de empresas creativas/marketing que no distinguen entre branded content IA y producción técnica IA
- Solapamiento con 35mm: bajo en perfil alumno (realizador técnico vs. content manager/marketer)

**EOI Málaga — validador institucional de producción virtual**:
- €0 FSE+, desempleados <30, 170h — no competidor de 35mm
- Contenidos: DaVinci Resolve + Unreal Engine virtual sets + IA guion/concept — confirma que la producción virtual con Unreal Engine es ya currículum de referencia institucional en ES
- Refuerza la viabilidad de URL 11 y la urgencia de posicionar el espacio antes de que se sature

**SONTIC Digital School** (Zaragoza): especialista audio IA con infraestructura Dolby Atmos 9.1.4 singular. Regional, sin solapamiento directo.

---

## Cierre de mes — Mapa de amenazas B2B IA audiovisual ES (W18)

| Competidor | FUNDAE (canal) | B2B activo | IA audiovisual | Nivel amenaza |
|------------|----------------|------------|----------------|---------------|
| SHIFTA | Sí (todos programas) | — | Sí — producción/vídeo | 🔴 ALTA |
| The Core School | Sí (empresa) / No (retail) | Atresmedia, Banijay, La Liga | Sí — edición/postprod + corporativa | 🔴 ALTA |
| CEI | Sí (todos) | KPMG, Google, PWC | Sí — IA generalista | 🟠 MEDIA-ALTA |
| Madrid Content School | Sí (empleados empresa) | Formación corporativa | Sí — branded content IA | 🟡 MEDIA |
| Lightbox | No confirmado | Adobe/Autodesk/Unity | No visible en B2B | 🔴 ALTA (otros ejes) |
| CES | No detectado | Convenios colocación | No | 🔴 ALTA (otros ejes) |

---

## Hallazgos del día — tabla resumen

| Hallazgo | Impacto SEO/demanda | Acción |
|----------|--------------------|----|
| **D9 activo — 5ª sesión sin avance** | NAB invisible; `runway ml` 53, `edicion video ia` 15 | Persistir escalado a Pablo Navarro; re-check lunes 4 mayo |
| **`runway ml` re-escalado** — pico ahora 22-28 mar (100), 15-21 mar (93) | Plateau 53-58 vigente; sin cambio estratégico | Actualizar DB: co-pico mar 2026 + rango plateau 53-58 |
| **The Core School FUNDAE matiz** — retail sin bonificación directa | FUNDAE puede seguir siendo diferenciador B2C de 35mm | Corregir URL 11 Acción requerida; verificar si 35mm ofrece FUNDAE retail |
| **Madrid Content School** — Lab IA Audiovisual €700 + FUNDAE (nuevo) | Solapamiento semántico parcial; riesgo presupuestal FUNDAE B2B | Añadir a keywords-database (área competencia); monitorizar SEM |
| **EOI Málaga** — Unreal Engine + DaVinci Resolve €0 | Validador institucional demanda producción virtual ES | Sin acción SEO directa; refuerza urgencia URL 11 |
| **EPA T1 2026** — ventana abril cerrada | Sofia bloqueada | Reintentar lunes 4 mayo; notificar a Sofia hoy |
| **Lightbox Summer School** — matrícula abre mañana 1 mayo | Posible SEM captación estacional activo desde mañana | Verificar 1-2 mayo precios + catálogo IA |

---

## Actualizaciones a entregables

| Documento | Cambio | Estado |
|-----------|--------|--------|
| `daily-notes/2026-04-30/analyst-search-demand.md` | Nota W18D3/cierre mes creada | **Done** |
| `keywords-database.md` — `runway ml` | Re-escalado co-pico mar 2026; plateau 53-58; D9 5ª sesión; fecha 2026-04-30 | **Done** |
| `keywords-database.md` — `edicion video ia` | D9 5ª sesión; 22-28 mar ahora 0 (muestreo); fecha 2026-04-30 | **Done** |
| `keywords-database.md` — nota estratégica W18D3 | Madrid Content School + The Core School matiz + EOI validador + D9 5ª sesión | **Done** |
| `cluster-seo-operativo-15-urls.md` — URL 11 | The Core School matiz B2C vs. B2B; Madrid Content School añadido; Nota D9 5ª sesión | **Done** |

---

## Pendiente W19 (semana del 4 mayo)

- [ ] **Cookie fresca Pablo Navarro**: D9 activo — 5 sesiones congeladas en 5-11 abr. Re-check lunes 4 mayo
- [ ] **EPA T1 2026**: lunes 4 mayo a primera hora — notificar a Sofia si no aparece
- [ ] **Lightbox Summer School**: 1-2 mayo — precios + catálogo IA verano + SEM activo
- [ ] **Verificar FUNDAE retail 35mm**: ¿ofrece 35mm FUNDAE para alumno individual? Determina si el diferenciador B2C FUNDAE vs. The Core School es real
- [ ] **Madrid Content School próxima edición**: confirmar si hay convocatoria Lab IA Audiovisual en mayo-junio 2026
- [ ] **SHIFTA Auction Insights**: ventana 5-12 mayo — verificar puja activa keywords IA audiovisual
- [ ] **SEPE CNAE 59 microdatos**: coordinar con Sofia post-EPA
- [ ] **RTVE Instituto — próxima convocatoria**: identificar fecha (ventana campaña URL 11)
- [ ] **CAM convocatoria 2026**: monitorizar contratos-publicos.comunidad.madrid

---

*Actualizado al cierre del día 2026-04-30. Fin de W18 — Cierre de Abril.*
