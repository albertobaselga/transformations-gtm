# Adrián Torres — Nota Diaria [2026-04-11]
**Rol**: Analista de Ofertas de Empleo  
**Semana**: W15 D3 (Sábado — fin de semana)  
**Fuentes operativas**: LinkedIn, Indeed, Tecnoempleo, Domestika, Notodoanimacion

---

## Resumen

Tercer día de la serie W15. Sábado — sin standup disponible, sin notas de equipo publicadas aún (solo Alba Moreno, Lost Leads). Barrido completo de los 5 portales operativos. La señal principal: **Indeed confirma estabilidad por tercer día consecutivo (100)**, y Notodoanimacion mantiene baseline de ~4 ofertas motion puro. El ruido de LinkedIn (Motion Graphics salta de 37→75 en sesión nueva) consolida la decisión de tratarlo como fuente cualitativa, no cuantitativa. Tecnoempleo audiovisual baja 1 unidad (8→7) — probable cierre de oferta. El sábado tiene actividad de publicación baja: las 4 nuevas ofertas de Domestika publicadas hoy (11/04) son de diseño gráfico general/branding, sin P1 relevantes nuevos. Serie de herramientas IA sin nuevas entradas — mismo inventario que D2.

---

## Hallazgos

### Hallazgo 1: Indeed consolida techo de 100 por tercer día — señal de estabilización real
- **Fuente**: `es.indeed.com/jobs?q=motion+designer&l=España&sort=date` — 2026-04-11
- **Dato**: `100 empleos de Motion designer en España` — idéntico a D9 y D10. Tres días consecutivos sin movimiento.
- **Relevancia**: Con 3 días de serie estable, la hipótesis de ruido pierde fuerza. El mercado motion designer en Indeed parece tener un techo real de ~100 en el momento actual (el portal trunca a 100 por diseño, pero si el stock bajara sería visible). La serie ya tiene validez estadística mínima para declarar estabilidad de corto plazo.
- **Confianza**: Alta

### Hallazgo 2: LinkedIn confirma volatilidad de sesión — descartado como fuente cuantitativa primaria
- **Fuente**: LinkedIn Jobs — sesiones 09/04, 10/04 (mañana/tarde), 11/04
- **Dato**: 
  - AI Video Editor España: D9=95, D10m=95, D10t=71, D11=100+ (cap)
  - Motion Graphics Designer España: D9=37, D10=37, D11=75
  - Motion Graphics Designer España (filtro 7 días): D11=26
- **Relevancia**: El salto de 37→75 en Motion Graphics en una sola sesión no refleja cambio real de mercado — es ruido de sesión de LinkedIn confirmado. La métrica de **7 días** (26 resultados para MGD) es más estable y representativa de flujo semanal real. **Decisión metodológica**: a partir de hoy se añade el filtro `f_TPR=r604800` como métrica secundaria para LinkedIn, manteniendo all-time solo para referencia histórica.
- **Confianza**: Alta (para el diagnóstico de volatilidad)

### Hallazgo 3: Tecnoempleo audiovisual baja 1 unidad — probable expiración de oferta
- **Fuente**: `tecnoempleo.com/busqueda-empleo.php?te=audiovisual` — 2026-04-11
- **Dato**: 7 ofertas (D10: 8, delta -1). Tecnoempleo motion graphics: 1 (sin cambio).
- **Relevancia**: Una oferta de audiovisual se cerró o expiró entre el viernes y el sábado. Con series tan pequeñas (7-8 unidades), el ruido individual es alto — se necesita semana completa para detectar tendencia. El 1 de motion graphics sigue siendo señal de mercado muy estrecho en este portal.
- **Confianza**: Media-Alta

### Hallazgo 4: Sábado con actividad de publicación baja — 4 nuevas ofertas Domestika, ninguna P1
- **Fuente**: `domestika.org/es/jobs` — 2026-04-11 (filtro: este mes, página 1)
- **Dato**: 4 nuevas ofertas publicadas hoy 11/04: Social Media Manager (LARSSON·DUPREZ, BCN), Diseñador@ Gráfico (Nacher, MAD), Director de Arte Senior (Actimundi, BCN), Diseñador junior (Actimundi, BCN). Ninguna es P1 relevante para el cluster de IA generativa o motion. Total p1 relevante visible en primera página: **~5** (Perez-Solero Video+AI+Motion, Anantum Clinics IA avatares, Creador/a Contenido Wabiks, Content Creator OAKBERRY, Content Creator prácticas Bside). 
- **Relevancia**: Patrón de sábado confirmado: pocas publicaciones nuevas (4 vs ~10 en días laborables) y las existentes son de disciplinas adyacentes. El cómputo de ~5 P1 relevante (-1 vs D10:6) puede ser ruido de cierre puntual o metodología de conteo.
- **Confianza**: Alta (para el patrón de sábado)

### Hallazgo 5: Notodoanimacion — baseline de ~4 motion puro se mantiene por segundo día
- **Fuente**: `notodoanimacion.es/ofertas-de-empleo-para-artistas-digitales/ofertas-de-empleo-graphic-design-motion/` — 2026-04-11
- **Dato**: 510 registros totales en la categoría Graphic Design & Motion. Motion puro en primera página (hace ≤3 semanas): Binance Senior Motion Designer, reboot 2D/3D Motion Designer, Simple Life App Motion Designer, Lodgify Senior Video Editor & Motion Designer — 4 ofertas activas, sin cambios respecto al cierre del D10.
- **Relevancia**: El baseline de 4 se consolida. No se detectaron nuevas publicaciones de motion puro entre el viernes por la tarde y el sábado — coherente con el patrón de baja actividad de fin de semana.
- **Confianza**: Alta

### Hallazgo 6: Serie herramientas IA — sin nuevas entradas (fin de semana, sin publicaciones nuevas P1)
- **Fuente**: Barrido Domestika + Notodoanimacion 2026-04-11
- **Dato**: Las 4 nuevas ofertas de Domestika publicadas hoy son diseño gráfico/branding/arte — no mencionan herramientas IA específicas. Las ofertas con inventario IA de W15 D2 (Binance, Anantum, TheCUBE, Agencia Tango) siguen activas. No hay nuevas entradas para añadir a la tabla de herramientas IA.
- **Relevancia**: La serie de herramientas IA comenzará a añadir delta real desde el lunes W16 (primer día laborable con nuevas publicaciones esperadas).
- **Confianza**: Alta

---

## Señales Detectadas

| Señal | Valor D11 (Sáb) | Delta vs D10 | Fuente |
|-------|----------------|--------------|--------|
| Indeed motion designer España | 100 | **0** — 3er día estable | Indeed |
| Tecnoempleo audiovisual | 7 | **-1** (D10: 8) | Tecnoempleo |
| Tecnoempleo motion graphics | 1 | **0** | Tecnoempleo |
| Domestika p1 relevante | ~5 | **-1** (D10: 6, ruido) | Domestika |
| Notodoanimacion motion puro | ~4 | **0** (D10: 4) | Notodoanimacion |
| LI AI Video Editor ES (all-time) | 100+ cap | volátil | LinkedIn |
| LI Motion Graphics Designer ES (all-time) | 75 | +38 vs D10 (sesión, no real) | LinkedIn |
| LI AI Video Editor ES (7 días) | 46 | nueva métrica | LinkedIn |
| LI Motion Graphics Designer ES (7 días) | 26 | nueva métrica | LinkedIn |
| Nuevas ofertas P1 publicadas hoy | 0 | sábado, patrón esperado | Domestika |
| Serie herramientas IA — entradas nuevas | 0 | fin de semana | Domest./Notodoanim. |

---

## Nota metodológica — LinkedIn (actualización)

A partir de esta nota se añade la métrica **LinkedIn (últimos 7 días)** como indicador de flujo semanal:

| Consulta | All-time D11 | 7 días D11 |
|----------|-------------|-----------|
| AI Video Editor España | 100+ (cap) | 46 |
| Motion Graphics Designer España | 75 (volátil) | 26 |

La métrica de 7 días es más estable que all-time y permite detectar si el flujo semanal de publicaciones cambia. Se empieza a registrar hoy como punto de referencia. La comparación con D9/D10 sigue siendo all-time solo por coherencia histórica.

---

## Contexto de semana

- **W15 D3 (sábado)**: Sin standup de equipo. Sin notas nuevas de Heads ni CEO.
- **Único compañero activo hoy**: Alba Moreno (Lost Leads) — cola vacía, BD en 14 leads, en espera de decisiones D1-D11 de Elena.
- **Fin de W15**: El lunes 13/04 arranca W16. Las decisiones pendientes (D1-D11) de Elena Voss marcarán las prioridades de la semana.
- **InfoJobs email pilot**: Sin nuevos `job-alert` recibidos aún. El parser de Pablo Navarro sigue en espera del primer correo real de alerta de empleo.

---

## Estado de la serie W15

| Día | Fecha | Indeed | Tecnoempleo AV | Tecnoempleo MG | Domestika P1 | Notodoanim. MP |
|-----|-------|--------|---------------|---------------|-------------|---------------|
| D1 (baseline) | 2026-04-09 | 100 | 8 | 1 | 6 | 3 |
| D2 | 2026-04-10 | 100 | 8 | 1 | 6 | 4 |
| D3 | 2026-04-11 | 100 | **7** | 1 | ~5 | 4 |
| Delta D1→D3 | — | **0** | **-1** | **0** | **-1** | **+1** |

**Lectura**: 3 días de alta estabilidad. El único movimiento significativo es Tecnoempleo audiovisual (-1) que puede ser cierre individual. La serie aún es corta para detectar tendencias — se necesita al menos 5 días laborables completos.

---

## Pendiente para el lunes W16 (2026-04-13)

- [ ] Crear nota `analyst-job-postings.md` para 2026-04-13 con barrido matutino completo
- [ ] Repetir las 6 mediciones comparables (4to día de serie — confirmar estabilidad o primera ruptura)
- [ ] Registrar LI (7 días) junto a all-time para ambas consultas desde hoy
- [ ] Continuar serie herramientas IA con las fichas nuevas del lunes (primer día laborable W16)
- [ ] Repetir proxy Notodoanimacion (¿nuevas publicaciones de motion puro tras el fin de semana?)
- [ ] Repetir baseline content creator: LI-EN, LI-ES, Indeed (pendiente de D10)
- [ ] Verificar si llega primer `job-alert` InfoJobs via email (piloto Pablo Navarro)
- [ ] Cruzar con Noa si divergencia Trends/ofertas (`curso Blender` vs ausencia de Blender en ofertas) persiste
- [ ] Leer decisiones D1-D11 de Elena del informe W15 cuando se publiquen para ajustar foco W16

---

*Adrián Torres — Analista de Ofertas de Empleo*
*"Sin serie, no hay señal. Sin señal, no hay decisión."*
