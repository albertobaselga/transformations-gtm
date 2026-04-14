# Sofia Blanco — Nota Diaria 2026-04-13 (W16 Dia 1)

## Resumen

Primer dia de W16. Semana larga — datos pendientes de validar desde el 10/04. Un solo bloqueo carryover: EPA T1 2026 (reactivar ~25/04). Foco de hoy: (1) ampliar la serie SEPE mensual de 2025 a los primeros meses de 2026 con datos ya publicados (enero y febrero 2026 deberian estar disponibles); (2) cruce con hallazgos del equipo: Iker confirma SAE sin IA en curriculum cine, Marina detecta pico de `runway ml` en Espana — ambos tienen implicaciones de empleabilidad. (3) Arrancar la nota del dia con baseline limpia.

## Hallazgos

### Hallazgo 1: SEPE enero-febrero 2026 — CNAE 59 contrae flujo de contratación con récord de artistas; CNAE 60 mixto

- **Fuente**: SEPE, *Estadística de Contratos. Datos del mes*, tabla `2.4M Contratos de trabajo según tipo de contrato por sector, sección y división de actividad económica. Ambos sexos. Mes*, PDFs **enero 2026** (`modDate` embebido 09/02/2026) y **febrero 2026** (`modDate` embebido 07/03/2026), consultados y extraídos el 2026-04-13 mediante PyMuPDF. Comparativa con PDFs enero-febrero 2024 y 2025 de la misma serie.

- **Dato — serie extendida CNAE 59 (cinematografía, vídeo, TV producción):**

| Mes | 2024 total | 2025 total | 2026 total | Δ 25→26 | 2026 artistas | artistas% 2026 | artistas% 2025 |
|-----|-----------|-----------|-----------|---------|--------------|----------------|----------------|
| Enero | 23.443 | 26.255 | **22.520** | **-14,2%** | 15.927 | **70,7%** | 57,3% |
| Febrero | 33.092 | 32.755 | **25.052** | **-23,5%** | 18.298 | **73,0%** | 59,2% |

  *Referencia anual 2025: total=393.323, artistas=230.777 (58,8% del total inicial).*

- **Dato — CNAE 59 desglose enero 2026:** total=22.520 | iniciales=22.457 | indefinidos=588 | circunstancias=5.418 | artistas=15.927 | sustitución=214
- **Dato — CNAE 59 desglose febrero 2026:** total=25.052 | iniciales=24.988 | indefinidos=592 | circunstancias=5.455 | artistas=18.298 | sustitución=214

- **Dato — CNAE 60 (programación y emisión):**

| Mes | 2025 total | 2026 total | Δ 25→26 | 2026 artistas |
|-----|-----------|-----------|---------|--------------|
| Enero | 2.805 | 2.914 | **+3,9%** | 1.736 |
| Febrero | 3.165 | 2.900 | **-8,4%** | 1.604 |

- **Interpretación — dos señales simultáneas en CNAE 59:**
  1. **Contracción en flujo total**: Enero -14,2% YoY, febrero -23,5% YoY. Es la primera lectura de 2026 y ambos meses caen. No es anomalía puntual. El acumulado ene-feb 2026 suma 47.572 contratos vs 59.010 en ene-feb 2025 (-19,5%). Contexto: ene-feb 2024 sumaban 56.535; es decir, ene-feb 2026 (-19,5% vs 2025) es el nivel más bajo de la serie de 3 años en estos dos meses.
  2. **Récord de proporción de artistas**: 70-73% en ene-feb 2026 vs 58,8% en 2025 completo y ~51-57% en ene-feb 2024. El mix sigue desplazándose hacia contrato de artistas/personal técnico. Los pocos contratos nuevos que se firman son cada vez más de proyecto y menos de empleo estable de entrada.

- **Interpretación — CNAE 60**: enero ligeramente positivo, febrero negativo. Señal mixta sin tendencia clara. El nivel base es pequeño (2.800-2.900/mes) — la volatilidad mensual puede ser ruido. Seguimiento necesario con marzo 2026 cuando se publique.

- **Hipótesis sobre la caída CNAE 59**: La contracción de ene-feb 2026 puede reflejar: (a) efecto residual del enfriamiento T4 2025 (ya documentado en Hallazgos 5-6 de la nota del 10/04); (b) estacionalidad ampliada — enero-febrero son meses de baja producción y en 2026 pueden ser especialmente débiles; (c) presión real del sector por costes de producción o incertidumbre de plataformas. Sin datos de marzo 2026 no se puede confirmar tendencia sostenida.

- **Confianza**: Alta para los totales; alta para artistas (confirmados en página de continuación de tabla 2.4M, AMBOS SEXOS, nacional). Pendiente de confirmar con marzo 2026 cuando SEPE lo publique (~segunda quincena de abril).

- **Relevancia para 35mm.es**: El flujo de nuevas contrataciones en CNAE 59 empieza 2026 a la baja, pero el mix artistas/técnicos sigue creciendo. **La narrativa formativa sigue siendo correcta**: proyectos > empleo indefinido. Lo que cambia es el volumen total — si la contracción se sostiene en Q1 completo, el mensaje de inserción laboral debe matizarse hacia "mercado más competitivo, más por proyectos, más dependiente de portfolio y red de contactos" en lugar de "sector en expansión".

<!-- Secciones en construccion — se aniaden a medida que se consolidan los datos del dia -->

## Senales Detectadas

| Senal | Valor | Delta vs 2026-04-10 | Fuente |
|-------|-------|---------------------|--------|
| EPA T1 2026 | BLOQUEADO — sin publicar | sin cambio | INE |
| SEPE CNAE 59 enero 2026 — total contratos | 22.520 | Nueva senal (-14,2% vs ene 2025) | SEPE tabla 2.4M |
| SEPE CNAE 59 febrero 2026 — total contratos | 25.052 | Nueva senal (-23,5% vs feb 2025) | SEPE tabla 2.4M |
| SEPE CNAE 59 enero 2026 — artistas% | 70,7% | Nueva senal (↑↑ vs 58,8% anual 2025) | SEPE tabla 2.4M |
| SEPE CNAE 59 febrero 2026 — artistas% | 73,0% | Nueva senal (↑↑ vs 59,2% feb 2025) | SEPE tabla 2.4M |
| SEPE CNAE 60 enero 2026 — total contratos | 2.914 | Nueva senal (+3,9% vs ene 2025) | SEPE tabla 2.4M |
| SEPE CNAE 60 febrero 2026 — total contratos | 2.900 | Nueva senal (-8,4% vs feb 2025) | SEPE tabla 2.4M |
| SAE Máster Cine IA en curriculo | No integrada | Primera confirmacion | Iker / sae.edu |
| SAE B2B/FUNDAE | No detectado | Primera confirmacion | Iker / WebSearch |
| `runway ml` Google Trends ES | 50-300/mes, pico 100 mar 2026 | Nueva senal | Marina / Google Trends |
| `curso runway` Google Trends ES | <50/mes (cero puntos) | Nueva senal (oportunidad editorial) | Marina / Google Trends |

## Pendiente para manana

- [ ] EPA T1 2026. **BLOQUEADO** hasta ~2026-04-25.
- [x] ~~Verificar si SEPE ha publicado datos de enero y febrero 2026 tabla 2.4M~~ — **COMPLETADO**. Enero y febrero 2026 extraídos y documentados (Hallazgo 1).
- [ ] **Marzo 2026 SEPE** — publicación esperada ~segunda quincena de abril. Confirmará si la contracción de ene-feb se sostiene o es estacionalidad acentuada.
- [ ] Actualizar serie acumulada herramientas IA en ofertas (dia 2) cuando Adrian publique su nota de hoy.
- [ ] CES Open Day 18/04 — monitorizar si publica precio Steadycam o activa matriculacion directa.
- [ ] NAB 2026 (18-22 abril) — coordinar con Noa sobre nuevos tools motion/IA que puedan afectar la demanda laboral de perfiles audiovisuales.
- [ ] **Sintesis W16 D1 para Marcos** — si Marcos solicita input, compartir señal SEPE ene-feb 2026: contracción en flujo total CNAE 59, récord de proporción artistas (70-73%).

## Sin senal nueva

- **TGSS febrero 2026**: Sin datos nuevos de afiliación publicados para el periodo actual. La última lectura disponible es diciembre 2025 (documentada el 10/04).
- **INE EPA**: T1 2026 bloqueado. Sin movimiento.
- **Salary portals**: Sin actualización de Indeed/Glassdoor/Jooble desde el 10/04. Revisión programada cuando se detecte cambio de señal en la serie de ofertas (Adrián).

*Actualizado al cierre del dia 2026-04-13.*
