# Marina Reyes — Nota Diaria 2026-04-13 (W16 Día 1)

## Resumen

Primer dia de W16. Dos frentes completados: (1) validación de las 4 queries IA pendientes del 10/04 via Google Trends con la sesion reparada por Pablo Navarro — 3 de 4 resueltas, hallazgo clave en `runway ml`; (2) integración de la inteligencia competitiva de Iker sobre SAE, Platzi y Udemy y sus implicaciones para el mapa de demanda de búsqueda.

---

## Primera Pasada — Validacion Queries IA Cluster (Trends)

**Método**: `node scripts/trends-monitor.mjs daily --config sources/trends/ia-cluster-pending.md --max-keywords 4` (sesión reparada por Pablo el 10/04, fix confirmado en heartbeat)

### runway ml — HALLAZGO PRINCIPAL

**Señal confirmada: `50-300/mes` ↑↑↑ — pico histórico reciente**

Serie 12 meses completa obtenida. Patrón:
- Abr-sep 2025: intermitente pero presente (valores 27-72, con semanas sin datos)
- Oct-dic 2025: **aceleración sostenida**: oct 43→59, nov 60-65, dic 70-73
- Ene-feb 2026: base sólida 28-55
- **Mar 2026: pico 100** (semana 15-21 mar 2026) → el mayor valor de la serie
- Abr 2026: 52-55 → **sustenta post-pico**, no se desploma

**Interpretación**: `runway ml` no es un término nicho — tiene demanda real y creciente en España. El pico de marzo coincide probablemente con el lanzamiento/noticias de Runway Gen-4 o similar evento de la plataforma. Lo crítico: la demanda **sigue alta** (52-55 en la primera semana de abril, no cae a cero).

**Implicación estratégica**: La awareness de Runway en España es alta y acelerando. Sin embargo:
- `curso runway` = **cero puntos** en ES → el mercado de formación en Runway no existe aún
- Esto es exactamente el patrón Blender: awareness alta + BOFU formativo ausente = **ventana first-mover para editorial**

**Acción recomendada**: Añadir Runway a la misma estrategia editorial que Blender (URL 10 del cluster). Un artículo "Runway para Producción Audiovisual Profesional — Guía 2026" publicado ahora captura la ola mientras no hay competidor posicionado. SAE no tiene Runway en ningún currículo (confirmado Iker hoy).

### curso runway — Sin señal

Puntos vacíos — cero búsquedas en ES en ventana 12m. **Confirmado `<50/mes`**. La formación en Runway no tiene demanda explícita aún. Apoya la estrategia editorial (artículo) antes de crear programa propio.

### video generativo — Sin señal sostenida

Spike aislado en semana 28 dic 2025-3 ene 2026 (valor 100), seguido de cero durante todo 2026. Probablemente un evento puntual (lanzamiento, noticia viral) sin traslación a búsqueda sostenida. **Confirmado `<50/mes`** sin masa crítica. El término español no ha cuajado — la audiencia busca en inglés o por nombre de herramienta específica.

### inteligencia artificial video — Sigue bloqueada

429 en todos los reintentos (3 intentos: sesión agotada del 10/04, reintento en caliente, y reintento con config corregido). Este término específico tiene rate limiting más agresivo en Google Trends. **Sigue pendiente de cookie fresca** (D8 Pablo Navarro). Estimación anterior `50-300/mes` [est] se mantiene hasta confirmar.

---

## Segunda Pasada — Integración Inteligencia Competitiva (Iker W16 D1)

Fuente: `analyst-competitors.md` 2026-04-13

### SAE Máster Cine — Confirmaciones críticas para posicionamiento 35mm

| Factor | Dato confirmado | Implicación |
|--------|----------------|-------------|
| IA en currículo | **No** — herramientas tradicionales únicamente (AVID, DaVinci, Red Scarlet, Steadicam) | 35mm puede ser la **única escuela premium con IA generativa integrada en cine** en ES |
| B2B/FUNDAE | **No detectado** en ninguna fuente | El espacio B2B audiovisual FUNDAE sigue libre |
| Pricing | Sin publicar (~€12k-16k estimado por proxy) | Opacidad = freno de decisión → 35mm con precio visible tiene ventaja |
| Duración | 24 meses (vs programas 35mm 400-600h) | Propuesta diferente: 35mm es más rápido, más enfocado en IA, bonificable |

**Señal de búsqueda implícita**: Los candidatos que buscan `máster cine madrid` o `formación cine profesional` verán a SAE sin precio visible y sin IA — una parte de ese segmento es capturable por 35mm con contenido que mencione explícitamente IA + practicas + bonificación FUNDAE.

### Platzi y Udemy — Cierre de frente analítico

Ambas plataformas confirmadas como **no competencia directa** en el segmento premium:
- Platzi: €275/año todo-acceso, 2h de contenido básico para IA video, sin prácticas, sin certificación reconocida
- Udemy: €9,99-€24,99/curso, sin profundidad, sin tutoría

**Lectura para demanda de búsqueda**: Las 264 valoraciones del curso IA video de Platzi confirman que la demanda existe en ES. Pero los usuarios de Platzi/Udemy son el segmento de autodidactas de precio bajo — NO el segmento objetivo de 35mm. La coexistencia es benign: ellos crean awareness del campo y 35mm captura a quien quiere profundidad profesional.

**Señal Trends vs Platzi**: `curso ia video` bajando (100 jun 2025 → 8 abr 2026) mientras Platzi ya tiene 264 valoraciones → la demanda de cursos básicos ya fue parcialmente absorbida por plataformas low-cost. Queda el segmento premium por cubrir.

### CES Open Day "The Next You — Vol II" — Monitorizar 18/04

En 5 días. Sin landing de matriculación activa aún, sin precio Steadycam publicado. Monitorizar si CES convierte el evento en captación directa (señal de agresividad competitiva).

---

## Hallazgos del día

| Hallazgo | Impacto | Acción |
|----------|---------|--------|
| `runway ml` = `50-300/mes` ↑↑↑, pico 100 mar 2026 | Alto — demanda real en ES, competidor ninguno | Añadir a cluster SEO como URL editorial (junto a Blender) |
| `curso runway` = cero puntos | Confirma oportunidad editorial first-mover | Artículo antes de programa |
| `video generativo` = sin señal | Término en español no ha cuajado | Mantener `<50/mes`, usar en inglés o por tool |
| SAE sin IA en currículo cine | 35mm puede ser la primera escuela premium IA+cine en ES | Reforzar este diferenciador en landing IA cluster (URL 11) |
| Platzi/Udemy = segmento distinto | No hay canibalización del segmento premium | Cerrar frente; usar sus valoraciones como proxy de demanda |

---

## Actualizaciones a entregables

| Documento | Cambio | Estado |
|-----------|--------|--------|
| `keywords-database.md` — sección IA Generativa | `runway ml` confirmado 50-300/mes ↑↑↑; `curso runway` y `video generativo` confirmados `<50/mes` | **Done** |
| `trends-config.md` | Pendientes actualizados — 3 confirmados, 1 sigue bloqueado | **Done** |
| `cluster-seo-operativo-15-urls.md` | Pendiente: añadir URL Runway editorial y actualizar nota IA cluster con datos reales | **Pendiente** |

---

## Pendiente W16 (actualizado 2026-04-13)

- [ ] **Añadir URL Runway editorial** al cluster SEO (equivalente a URL 10 Blender — mismo patrón estratégico)
- [ ] **D8 Pablo Navarro**: `inteligencia artificial video` sigue con 429 específico — única query sin resolver
- [ ] **CES Open Day 18/04** (5 días): monitorizar si activan landing de matriculación o pricing Steadycam
- [ ] **Verificar `curso blender`** semana 12-18 abr — ¿sustenta señal post-pico? (estaba en 100 semana 29 mar-4 abr)
- [ ] **NAB 2026 (18-22 abril)**: coordinar con Noa — nuevos tools de motion/IA que pueden generar keywords
- [ ] **Si Elena aprueba R6**: actualizar URL 9 cluster con naming "Producción de Contenido Digital"
- [ ] **Añadir XR / Realidad Extendida** a la DB (señal Grupo Godo + Layers of Reality)
