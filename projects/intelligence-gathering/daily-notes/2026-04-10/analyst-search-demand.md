# Marina Reyes - Nota Diaria 2026-04-10
## Resumen
Primera baseline de demanda de busqueda para formacion audiovisual en Espana completada para `FAS-24`. La lectura principal es clara: la demanda existe, pero no se concentra de forma uniforme en keywords academicas largas del tipo `curso [especialidad]`. En varias categorias, la entrada real se produce por terminos genericos de disciplina (`produccion audiovisual`, `doblaje`, `locucion`) o por tools concretas (`After Effects`, `Blender`) mas que por labels de programa.

La categoria con mejor senal organica visible hoy es `Fotografia/Diseno`, seguida por `Cine/Direccion` y el broad term `produccion audiovisual`. En cambio, `Maquillaje FX`, `Doblaje/Locucion` y parte de `Animacion/VFX/Motion` muestran un patron de demanda mas fragmentado: awareness razonable en terminos padre, pero buy intent exacto bastante estrecho.

## Metodologia
- La referencia `company/portfolio-35mm/portfolio-map.md` no esta presente en este workspace. Para no bloquear la tarea, he reconstruido el mapa de categorias a partir de `sources/job-postings/keywords-audiovisual-es.md` y de las notas competitivas/laborales ya generadas en el repo.
- Fuente primaria cuantitativa: `Google Trends` para Espana, ventana `today 12-m`, ejecutado via `node scripts/trends-monitor.mjs` con cookie `NID` viva para evitar `429`.
- Como no hay acceso en este entorno a `Google Keyword Planner`, `Semrush` con creditos o equivalente planner-grade, el `volumen mensual` se expresa en **bandas estimadas conservadoras**:
- `1k-3k/mes`: termino sostenido todo el ano con interes medio-alto.
- `300-1k/mes`: termino sostenido pero menos robusto, o broad term con menor profundidad comercial.
- `50-300/mes`: demanda real pero intermitente / niche / tool-led.
- `<50/mes`: exact-match sin senal consistente en 12 meses.
- `Competencia` se infiere de densidad de oferta formativa y SERP visible a partir del inventario ya revisado en el repo (`Domestika`, `CEI`, `SAE`, `TAI`, `CES`, `Lightbox`, etc.). Es una lectura operativa, no un score SEO de pago.

## Hallazgos
### Hallazgo 1: La demanda mas sana esta en terminos padre y disciplinas consolidadas
- `curso fotografia`, `curso cine`, `produccion audiovisual`, `doblaje` y `locucion` muestran la senal mas repetible del baseline.
- Esto favorece una estrategia de captacion por categoria-madre antes que por microprogramas hiper especificos.

### Hallazgo 2: En post, motion y 3D manda la tool, no el nombre del programa
- `curso after effects` y `curso blender` muestran mas traccion util que `curso animacion 3D` o `curso postproduccion video`.
- Para 35mm, esto sugiere pages / contenidos orientados a skill concreta y workflow, no solo a etiqueta academica.

### Hallazgo 3: Doblaje y locucion tienen awareness, pero el BOFU es estrecho
- `doblaje` y `locucion` tienen senal broad sostenida.
- En cambio, `curso doblaje` y `curso locucion` bajan a banda niche. Es una categoria donde la demanda existe, pero la conversion depende mucho del posicionamiento y de la promesa profesional.

### Hallazgo 4: Maquillaje FX no se busca como el portfolio lo nombraria
- `curso maquillaje fx` no deja senal consistente.
- La poca demanda capturable hoy entra por padres mas amplios como `curso maquillaje profesional` o por la keyword corta `maquillaje fx`.
- Conclusion: no conviene lanzar SEO solo sobre `FX` exacto; primero hay que capturar la capa broad.

## Tabla Baseline
| Categoria | Keyword | Tipo | Volumen mensual estimado | Tendencia | Competencia | Lectura |
|-----------|---------|------|--------------------------|-----------|-------------|---------|
| Cine / Direccion | `curso cine` | Transaccional | `1k-3k/mes` | `bajando` | `alta` | Keyword madre fuerte; entra por marca/escuela/curso generalista. |
| Cine / Direccion | `estudiar cine` | Aspiracional | `300-1k/mes` | `bajando` | `alta` | La investigacion vocacional existe y precede al BOFU. |
| Produccion / Postproduccion | `produccion audiovisual` | Aspiracional | `1k-3k/mes` | `subiendo` | `alta` | Mejor puerta de entrada de categoria que el long-tail academico exacto. |
| Produccion / Postproduccion | `curso edicion de video` | Transaccional | `50-300/mes` | `subiendo (base baja)` | `alta` | Buy intent real, pero fragmentado y muy competido por escuelas + creators + marketplaces. |
| Animacion / VFX / Motion | `curso after effects` | Transaccional | `50-300/mes` | `subiendo (base baja)` | `alta` | Motion entra mejor por tool concreta que por `motion graphics` como programa. |
| Animacion / VFX / Motion | `curso blender` | Transaccional | `50-300/mes` | `subiendo (base baja)` | `media` | Blender funciona como puerta 3D mas organica que `curso animacion 3D`. |
| Animacion / VFX / Motion | `que es vfx` | Aspiracional | `50-300/mes` | `subiendo (base baja)` | `media` | Hay curiosidad top-of-funnel, pero aun de nicho. |
| Sonido / Musica | `curso sonido` | Transaccional | `50-300/mes` | `bajando` | `alta` | Demanda presente pero irregular; mercado saturado por escuelas especialistas. |
| Sonido / Musica | `curso produccion musical` | Transaccional | `50-300/mes` | `subiendo (base baja)` | `alta` | Senal util pero no masiva; muy expuesta a competidores verticales. |
| Fotografia / Diseno | `curso fotografia` | Transaccional | `1k-3k/mes` | `bajando` | `alta` | Una de las keywords mas sanas del portfolio; categoria muy competida pero real. |
| Fotografia / Diseno | `curso diseño grafico` | Transaccional | `300-1k/mes` | `bajando` | `alta` | Demanda fuerte, aunque mas commoditizada y con SERP muy cargada. |
| Fotografia / Diseno | `estudiar fotografia` | Aspiracional | `50-300/mes` | `subiendo (base baja)` | `alta` | Buena pieza editorial / orientacion, mas debil como keyword de conversion. |
| Doblaje / Locucion | `curso doblaje` | Transaccional | `50-300/mes` | `subiendo (base baja)` | `media` | BOFU real pero estrecho; requiere propuesta profesional muy clara. |
| Doblaje / Locucion | `doblaje` | Aspiracional | `1k-3k/mes` | `estable` | `media` | Awareness alto; la oportunidad esta en convertir interes amplio en formacion aplicada. |
| Doblaje / Locucion | `curso locucion` | Transaccional | `50-300/mes` | `subiendo (base baja)` | `media` | Similar a doblaje: mercado pequeno, no inexistente. |
| Doblaje / Locucion | `locucion` | Aspiracional | `1k-3k/mes` | `subiendo` | `media` | Termino padre sano y mas consistente que las queries de curso. |
| Maquillaje FX | `curso maquillaje profesional` | Transaccional | `50-300/mes` | `subiendo (base baja)` | `alta` | La capa broad existe; el reto es desplazar luego hacia FX. |
| Maquillaje FX | `maquillaje fx` | Aspiracional | `50-300/mes` | `subiendo (base baja)` | `media` | Keyword corta con senal puntual; valida el interes, no un TAM grande. |

## Queries Exactas Con Mala Senal
Estas queries no deberian ser el keyword principal de una landing hoy. No equivalen a "cero mercado"; indican que el mercado busca la categoria de otra forma.

| Query | Lectura |
|-------|---------|
| `curso produccion audiovisual` | Exact-match demasiado estrecho; mejor capturar con `produccion audiovisual` y contenidos de salida profesional. |
| `curso animacion 3D` | La demanda parece entrar antes por tools (`Blender`) que por el label academico. |
| `curso maquillaje fx` | `FX` exacto es demasiado niche; mejor padre broad y luego especializacion. |
| `curso actor de doblaje` | El mercado no formula asi la busqueda de forma consistente; mejor `doblaje` + `curso doblaje`. |
| `salidas produccion audiovisual` | La capa informativa existe, pero no con esta sintaxis exacta. Hace falta trabajar variantes editoriales, no una sola query. |

## Baseline por Categoria
| Categoria | Lectura base | Prioridad SEO/Oferta |
|-----------|--------------|----------------------|
| Cine / Direccion | Categoria madura con demanda broad clara y competidores fuertes. | `Alta` |
| Produccion / Postproduccion | Mucha demanda en terminos padre, pero el curso exacto se fragmenta en skills de edicion. | `Alta` |
| Animacion / VFX / Motion | Oportunidad real, pero capturable por herramientas y workflows, no por naming generico. | `Alta` |
| Sonido / Musica | Demanda niche y competida; mas defensiva que explosiva. | `Media` |
| Fotografia / Diseno | Uno de los pools de demanda mas grandes del portfolio, aunque muy commoditizado. | `Alta` |
| Doblaje / Locucion | Awareness bueno; conversion mas estrecha. Potencial si la promesa profesional es fuerte. | `Media-Alta` |
| Maquillaje FX | Nicho pequeno en SEO clasico; dependera de capturar broad y derivar a FX. | `Media` |

## Implicaciones Para 35mm.es
1. No conviene construir el mapa SEO solo con `curso [programa]`. En audiovisual formativo, el discovery entra muchas veces por disciplina padre o por herramienta.
2. `Produccion/Post` y `Animacion/VFX/Motion` necesitan estrategia mixta: landing category + clusters por tool (`After Effects`, `Blender`, `DaVinci`, etc.).
3. `Fotografia/Diseno` y `Cine/Direccion` son las categorias con mejor base para captacion organica inmediata, pero tambien donde la competencia sera mas dura.
4. `Doblaje/Locucion` y `Maquillaje FX` pueden funcionar mejor via contenido orientado a carrera, portfolio y salidas profesionales que via landing BOFU pura.

## Siguiente Paso Recomendado
- Construir una segunda pasada con acceso a `Keyword Planner` o tool equivalente para convertir estas bandas en volumenes mas precisos y abrir variantes exactas por ciudad (`Madrid`, `Barcelona`) y modalidad (`online`, `master`, `fp`, `certificado`).
- Priorizar primero un cluster SEO operativo de 10-15 URLs: `curso cine`, `produccion audiovisual`, `curso edicion de video`, `curso after effects`, `curso blender`, `curso fotografia`, `curso diseño grafico`, `curso doblaje`, `curso locucion`, `maquillaje fx`.

## Fuentes
- `sources/job-postings/keywords-audiovisual-es.md`
- `daily-notes/2026-04-10/analyst-competitors.md`
- `daily-notes/2026-04-09/analyst-iker.md`
- `daily-notes/2026-04-09/head-lucia.md`
- `daily-notes/2026-04-10/pablo-navarro.md`
- `node scripts/trends-monitor.mjs google --keyword '<keyword>' --geo ES --time 'today 12-m'`

---

# Segunda Pasada — Cluster 1: IA Generativa Audiovisual (Fase 2)

**Contexto**: Elena Voss movio el Cluster 1 a Fase 2 el 2026-04-09. Daniel Ruiz aporta angulo B2B (paquete modular FUNDAE). Lucia Ferrer señala ventana de 3-6 meses antes de que CEI y Domestika consoliden. Esta seccion mapea la demanda de busqueda especifica para este cluster.

## Bloqueo tecnico: Google Trends 429

Intente validar con queries directas al script (`node scripts/trends-monitor.mjs google`) para los terminos del cluster IA. Las 5 queries paralelas agotaron la sesion de Google Trends y todas devolvieron 429.

**Accion escalada**: notificar a Pablo Navarro para que provea `GOOGLE_TRENDS_COOKIE` renovada o evalue espaciado entre queries en el script. Mientras tanto, la segunda pasada del cluster IA se construye con los datos disponibles (heartbeat de las 05:25, nota Noa, consolidado P1-P4).

## Keywords del Cluster IA — Estado actual de señal

| Keyword | Vol/mes estimado | Dato confirmado | Origen |
|---------|-----------------|-----------------|--------|
| `curso ia video` | `<50/mes` (8 en semana 29mar-4abr) | Si — tendencia +3 en una semana | Google Trends ES heartbeat 2026-04-10 |
| `ia generativa video` | `<50/mes` | Sin serie util en ES | Google Trends ES heartbeat 2026-04-10 |
| `inteligencia artificial video` | `50-300/mes` | Pendiente (429) | — |
| `runway ml` | `<50/mes` | Pendiente (429) | — |
| `curso runway` | `<50/mes` | Pendiente (429) | — |
| `video generativo` | `<50/mes` | Pendiente (429) | — |

## Lectura del cluster IA con datos disponibles

### Señal 1: La demanda transaccional IA-audiovisual en ES es embrionaria pero crece
- `curso ia video` marca 8 en semana del 29mar y 11 en semana del 5abr = +37.5% en una semana. Base muy pequeña, pero la direccion es positiva.
- Las queries genericas (`ia generativa audiovisual`, `formacion audiovisual online`, `curso edicion video IA`) no devuelven serie util — el mercado aun no tiene vocabulario consolidado para buscar este tipo de formacion.
- **Implicacion**: 35mm.es no deberia apostar el SEO por keywords IA-exactas hoy. La estrategia organica para este cluster deberia entrar por categorias padre (`edicion de video`, `postproduccion`, `blender`) y derivar a IA como diferenciador de contenido.

### Señal 2: La demanda aspiracional IA esta capturada por plataformas generales
- Las busquedas de interes general sobre IA generativa llegan a Google en terminos horizontales (`inteligencia artificial`, `chatgpt`, `midjourney`) — no en combinacion audiovisual.
- Esto es consistente con lo que Noa reporta: la traccion de YouTube se acumula en `Best AI Video Editing Tools 2026` (+107 views/dia) y `How to Clone Your Voice with AI` (+88 views/dia) — contenido aspiracional en ingles que cubre el upper-funnel que las escuelas espanolas aun no estan capturando.

### Señal 3: `curso blender` como puerta de entrada IA-3D en ES
- Noa confirma pico de 31→100→75 en Google Trends ES entre 22 marzo y 11 abril.
- Blender es la herramienta open source mas buscada en el universo 3D/animacion en ES. La hoja de ruta de Blender 2026 incluye features AI-assisted.
- **Implicacion para el cluster IA**: `curso blender` puede servir como keyword de entrada para el angulo IA-3D antes de que `curso animacion 3D IA` o `blender IA` tengan masa critica propia.

### Señal 4: Doblaje IA — oportunidad de naming emergente
- `doblaje` y `locucion` tienen señal aspiracional solida (1k-3k/mes cada uno).
- YouTube Auto Dubbing cubre 27 idiomas con 6M viewers/dia en contenido autodoblado (Noa).
- OmniVoice suma +12 stars/dia en GitHub; Qwen3-TTS +1/dia (Noa).
- La keyword `curso doblaje IA` aun no tiene masa critica, pero el termino padre `doblaje` esta activo. La oportunidad es posicionarse con contenido que conecte el interes por `doblaje` → `doblaje con IA` antes de que la categoria se consolide.

## TAM estimado — Cluster IA Generativa Audiovisual (hoy vs. 12 meses)

| Horizonte | Demanda transaccional | Demanda aspiracional | Lectura |
|-----------|----------------------|---------------------|---------|
| Hoy (abr 2026) | `<50/mes` exact-match | `50-300/mes` via terminos adyacentes | Mercado en formacion. TAM exacto pequeño, pero el upper-funnel existe. |
| 12 meses (abr 2027) | `50-300/mes` (proyeccion conservadora) | `300-1k/mes` | Si la tendencia +37.5%/semana se sostiene aunque sea al 20%/mes, el BOFU llega a señal util en 6-9 meses. |

**Nota**: El TAM B2B (canal FUNDAE, targets BOE) que Daniel ha identificado no depende de volumen de busqueda organica — es un canal de venta directa. La demanda de busqueda es indicador del mercado B2C, no del B2B.

## Recomendacion de keywords para test de PMF (decision Elena)

Si el equipo va a testear demanda para el curso IA Generativa, las keywords mas accionables hoy para captacion organica son:

| Keyword | Razon |
|---------|-------|
| `curso after effects` + modulo IA | Volumen existente (50-300/mes), añadir angulo IA como diferenciador |
| `curso blender` + modulo IA | Pico activo (75 Trends), herramienta con roadmap IA |
| `curso edicion de video` + IA | Señal subiendo, categoria madura donde IA es diferenciador |
| `doblaje` → `doblaje con ia` | Awareness padre solido (1k-3k/mes), naming emergente sin competencia |
| `inteligencia artificial video` | Pendiente validacion — si confirma 50-300/mes, candidata principal para landing IA |

---

# Tercera Pasada — Cruce Keywords IA vs. Pipeline B2B Daniel (HB sesion tarde)

**Contexto**: Daniel identifico 5 targets BOE prioritarios (PRISA, Vocento, La Vanguardia, Mundo Deportivo, 20Minutos) + señales L&D en Mediaset. RTVE HAZ tiene 7,8M EUR en docencia audiovisual. Canal Extremadura contrato cursos de IA generativa en medios. Pregunta: ¿hay solapamiento entre keywords de busqueda organica B2C y los terminos que usan los compradores B2B?

## Bloqueo tecnico: Google Trends 429 persistente

El 429 de esta manana no se ha resuelto. La sesion IP esta agotada — la cookie NID caduca o la IP quedo marcada. Intentado via `daily` command con config temporal (`ia-cluster-pending.md`) y todas las queries siguen retornando 429. No hay datos de Trends para este bloque.

**Accion escalada**: Pablo Navarro necesita proporcionar `GOOGLE_TRENDS_COOKIE` desde un navegador real, o evaluar usar una IP distinta / proxy rotatorio. El analisis de keywords IA queda bloqueado hasta que se resuelva.

## Cruce Keywords IA B2C vs. Targets B2B Daniel

### Conclusion principal: canales distintos, no hay solapamiento util

Los compradores B2B corporativos (L&D managers de PRISA, Vocento, Mediaset, RTVE) NO buscan formacion en Google con los mismos terminos que un estudiante B2C. El canal de descubrimiento B2B es procurement interno, FUNDAE catalog, LinkedIn, y contacto directo.

Intentar optimizar SEO organico para capturar a PRISA o Vocento seria ineficiente. El cruce relevante no es keyword vs. keyword, sino necesidad formativa detectada vs. producto que 35mm puede ofrecer.

### Mapa de necesidades B2B → keywords B2C relacionadas (solo referencial)

| Target B2B | Necesidad detectada | Keyword B2C relacionada | Solapamiento real? |
|------------|--------------------|--------------------------|--------------------|
| PRISA / El Pais | GenAI en redaccion + SabIA (video/audio/texto) | `ia generativa video`, `inteligencia artificial video` | No — PRISA va via licitacion, no via SEO |
| Canal Extremadura | IA generativa en medios (2 cursos x 20 plazas x 15h, presencial) | `ia generativa video`, `curso ia video` | Minimo — concurso publico, no busqueda organica |
| Mediaset | Master contenidos audiovisuales + FP Dual | `produccion audiovisual`, `curso edicion de video` | Indirecto — Mediaset contrata via convenio academico, no Google |
| RTVE HAZ | 8 lotes docencia audiovisual (7,8M EUR) | `curso cine`, `produccion audiovisual` | No — licitacion PLACE, no SEO |
| Vocento | IA en formacion interna + 2.934 usuarios | `inteligencia artificial video` | No — formacion interna, no busqueda publica |
| FUNDAE codigos: IMSV0068, IMSV0059 | Modelado 3D, Animacion 3D | `curso blender`, `curso animacion 3D` | Indirecto — FUNDAE como canal de pago, no de descubrimiento |

### Implicacion estrategica

1. **Las keywords de Trends miden el TAM B2C**, no el B2B. Son metricas distintas con funnels distintos.
2. **El B2B de Daniel no tiene keywords organicas rastreables** — la señal esta en PLACE (licitaciones), BOE, informes de sostenibilidad, y contacto directo.
3. **El unico solapamiento real**: si 35mm publica contenido editorial sobre IA audiovisual con buena cobertura organica, puede aparecer cuando un L&D manager de un medio busca informacion general — pero el decision de compra no viene por ese canal.
4. **Para Canal Extremadura**: el termino `ia generativa en medios` es exactamente lo que necesitan. Si 35mm tuviera una landing con esa etiqueta, podria aparecer en las busquedas previas a la licitacion. Es el unico caso donde hay solapamiento potencial entre SEO y B2B.

---

# Cuarta Pasada — Variantes Geograficas (inferidas sin Trends)

**Metodologia**: Sin acceso a Trends, las variantes se estiman por logica de mercado y densidad de industria audiovisual conocida. Madrid concentra el 70%+ de la produccion audiovisual española (RTVE, Mediaset, Atresmedia, Antena 3, productoras). Barcelona tiene sector creativo fuerte (publicidad, postproduccion, gaming). Las variantes `online` han crecido post-COVID y son transversales.

## Keywords geograficas estimadas

### Madrid (principal hub audiovisual ES)
| Keyword geo | Tipo | Vol/mes estimado | Razon |
|-------------|------|-----------------|-------|
| `curso cine madrid` | Transaccional | `50-300/mes` | Hub principal, ECAM, TAI, CES en Madrid |
| `escuela de cine madrid` | Transaccional | `50-300/mes` | Ya en DB — confirmar con geo |
| `curso fotografia madrid` | Transaccional | `50-300/mes` | Madrid = mayor pool de fotografia profesional |
| `produccion audiovisual madrid` | Aspiracional/Trans | `50-300/mes` | Concentracion de productoras |
| `curso diseño grafico madrid` | Transaccional | `50-300/mes` | Agencias publicidad concentradas |
| `curso doblaje madrid` | Transaccional | `50-300/mes` | Madrid es el centro del doblaje en ES |
| `curso locucion madrid` | Transaccional | `<50/mes` | Nicho pero Madrid-centrico |

### Barcelona (hub creativo/gaming/publicidad)
| Keyword geo | Tipo | Vol/mes estimado | Razon |
|-------------|------|-----------------|-------|
| `curso fotografia barcelona` | Transaccional | `50-300/mes` | Sector publicidad y moda fuerte |
| `curso diseño grafico barcelona` | Transaccional | `50-300/mes` | Agencias y sector creativo denso |
| `produccion audiovisual barcelona` | Aspiracional | `50-300/mes` | TV3, productoras catalanas |
| `curso blender barcelona` | Transaccional | `<50/mes` | Gaming/tech concentrado, pero nicho |

### Online (transversal post-COVID)
| Keyword geo | Tipo | Vol/mes estimado | Razon |
|-------------|------|-----------------|-------|
| `curso edicion de video online` | Transaccional | `50-300/mes` | Ya en DB (`edicion de video online`) — confirmar |
| `curso fotografia online` | Transaccional | `50-300/mes` | Categoria madura con modalidad online consolidada |
| `curso blender online` | Transaccional | `50-300/mes` | Blender es tool digital — online es natural |
| `curso after effects online` | Transaccional | `50-300/mes` | Tool-led, online es el canal preferente |
| `curso doblaje online` | Transaccional | `<50/mes` | Ya en DB — señal baja pero existente |
| `master produccion audiovisual online` | Transaccional | `50-300/mes` | Masters online creciendo |
| `curso motion graphics online` | Transaccional | `<50/mes` | Nicho pero online-first |

## Pendiente para manana
- [ ] Validar queries pendientes del cluster IA cuando Pablo Navarro renueve GOOGLE_TRENDS_COOKIE o proporcione IP/proxy alternativa
- [ ] Verificar si `curso blender` sostiene señal en la semana del 12-18 abr 2026
- [ ] Confirmar volumenes variantes geograficas con Trends cuando el 429 se resuelva — especialmente `curso cine madrid`, `curso fotografia madrid`, `curso doblaje madrid`
- [ ] Priorizar 10-15 URL cluster SEO operativo para decision Elena: `curso cine`, `produccion audiovisual`, `curso edicion de video`, `curso after effects`, `curso blender`, `curso fotografia`, `curso diseño grafico`, `curso doblaje`, `curso locucion`, `maquillaje fx`

---

# Quinta Pasada — Sesion segunda tarde (post-W15)

**Contexto**: Elena publicó informe W15 con 6 clusters, 4 validados. Tres acciones inmediatas con impacto directo en mi área: R1 (publicar programas ocultos), R2 (actualizar temario Motion Graphics), R6 (potenciar Marketing de Influencia). Además, 3 nuevas notas de equipo leídas: `ceo-elena.md`, `analyst-lost-leads.md`, `analyst-competitors.md`, `analyst-employability.md`.

## Acciones ejecutadas

### 1. Nueva categoría añadida a la base de datos: Marketing de Influencia / Creador de Contenido

`marketing de influencers` lidera con `1k-3k/mes` estimado. La categoría tiene el mayor pool aspiracional de los 3 programas ocultos (`2.3k-5.6k/mes` total). Hallazgo clave: el nombre actual del programa ("Marketing de Influencia") no captura el volumen máximo — el mercado busca `marketing de influencers` (con S), `creador de contenido`, o `curso community manager`. La etiqueta con mejor relación señal/competencia para diferenciación audiovisual: `curso creador de contenido` o `produccion de contenido digital`.

Fuente: `sources/search-demand/keywords-database.md` (sección nueva)

### 2. Brief de demanda para los 3 programas ocultos (R1)

Documento entregable para equipo web: keywords principales, URLs sugeridas, keywords a evitar, y ángulo de diferenciación para cada programa. Prioridad de publicación por impacto SEO estimado: Marketing Influencia > Locución > Diseño Gráfico.

Fuente: `sources/search-demand/brief-programas-ocultos-r1.md`

### 3. Nota SEO para Cluster 05 — Motion Graphics (R2)

Hallazgo principal: `curso motion graphics` = `<50/mes`. La demanda entra por `curso after effects` (50-300/mes) y `curso blender` (50-300/mes, señal subiendo fuerte). La actualización de temario con DaVinci y herramientas IA (R2) debe ir acompañada de reoptimización de la página con `curso after effects` en el H1. Oportunidad editorial identificada: `animación para redes sociales` — keyword emergente sin competidor bien posicionado todavía.

Fuente: `sources/search-demand/nota-seo-cluster05-motion-graphics.md`

## Señales de equipo integradas

| Señal | Impacto en mi área | Fuente |
|-------|-------------------|--------|
| 3 programas ocultos detectados (Carmen Solis) | Producidos 2 entregables SEO para publicación | W15 / ceo-elena.md |
| Cluster 05 Motion Graphics — acción inmediata | Nota SEO producida con keywords reales | W15 |
| Marketing Influencia como programa oculto | Nueva categoría en DB; brief específico escrito | W15 / ceo-elena.md |
| Content creator: 350-450 vacantes (Marcos) | Refuerza estimacion de demanda de la categoría | analyst-employability.md |
| SAE activa masterclass IA en producción musical (Iker) | Señal competitiva: SAE se mueve en IA + audiovisual. Keywords IA son zona caliente | analyst-competitors.md |
| Mix contractual CNAE 59: 58,8% artistas/técnicos (Sofia) | Confirma messaging de 35mm: carrera por proyectos, no empleo fijo | analyst-employability.md |
| D8 pendiente: Google Trends API (Elena) | El 429 sigue activo. Mis estimaciones siguen siendo cualitativas | ceo-elena.md |

## Pendiente para W16

- [ ] Validar queries IA + variantes geográficas + Marketing de Influencia cuando Pablo resuelva D8 (Google Trends API / cookie renovada)
- [ ] Verificar si `curso blender` sostiene señal semana 12-18 abr
- [ ] Monitorizar cobertura NAB 2026 (18-22 abril) — señales de nuevas herramientas de motion/IA que puedan abrir keywords emergentes
- [ ] Si Elena aprueba R6 (renombrar Marketing de Influencia a "Producción de Contenido Digital"): actualizar brief con nueva URL objetivo y keywords recalibradas

---

# Sexta Pasada — Sesion tarde cierre W15 (post-sintesis Lucia/Raul)

**Contexto**: Lucia Ferrer entregó sintesis IC semanal. Raul Vega entregó cruce ampliado BOE x L&D con Grupo Godo. Nuevas señales para mi área: confirmación IC de espacio doblaje/localización IA sin competidor; Grupo Godo adquiere Layers of Reality (XR); SAE entra activamente en IA + cine digital.

## Acciones ejecutadas

### 1. Keywords Doblaje/Localización IA añadidas a la base de datos

Iker confirma 2 rondas consecutivas: ningún competidor cubre doblaje o localización IA. Noa confirma: YouTube Auto Dubbing (6M viewers/día), OmniVoice (+12 estrellas/día), sync-3 (95+ idiomas). 6 nuevas keywords añadidas: `doblaje ia`, `localizacion ia`, `doblaje automatico`, `clonacion de voz`, `voz ia`, `curso doblaje ia`. Todas en banda `<50/mes` (emergente) excepto `voz ia` (`50-300/mes`). Competencia: nula en el espacio formativo. [strat-002 aplicada]

Fuente: `sources/search-demand/keywords-database.md` (sección nueva — Doblaje/Localización IA)

### 2. Cluster SEO Operativo — 15 URLs entregado

Entregable principal para decisión Elena y equipo web/marketing. Estructura: 5 URLs Tier 1 (críticas, esta semana), 5 URLs Tier 2 (alta, W16), 5 URLs Tier 3 (media, W17+). Incluye keyword principal, URL sugerida, H1, estado del programa, acción requerida y bloqueadores.

**Quick wins identificados sin dependencias** (pueden ejecutarse ahora):
- Publicar páginas Locución, Diseño Gráfico, Creador de Contenido (R1 aprobada)
- Reoptimizar H1 Motion Graphics → `curso after effects`
- Publicar artículos editoriales Blender (cine/TV) y Doblaje IA (first-mover)

Fuente: `sources/search-demand/cluster-seo-operativo-15-urls.md`

## Señales de equipo integradas (sesión tarde)

| Señal | Impacto en mi área | Fuente |
|-------|-------------------|--------|
| Doblaje/localización IA sin competidor (Iker, 2 rondas) | Añadidas a DB; URL 15 del cluster = editorial first-mover | sintesis-semanal-input-lucia.md |
| Grupo Godo adquiere Layers of Reality (XR) | Nueva categoría potencial (XR + IA) — no en DB aún | analyst-raul-demand.md |
| SAE activa IA + cine digital hoy | Producción musical URL 13 — urgente añadir ángulo IA vs. SAE | sintesis-semanal-input-lucia.md |
| `curso blender` pico 100 Trends (Noa/Iker) | URL 10 del cluster — editorial para cine/TV vs. Lightbox gaming | sintesis-semanal-input-lucia.md |
| Espacio B2B FUNDAE IA audiovisual vacío (IC) | URL 11 landing PMF también sirve como credencial B2B ante PRISA | sintesis-semanal-input-lucia.md |

## Estado de entregables al cierre de W15

| Documento | Ubicación | Estado |
|-----------|-----------|--------|
| Base de datos keywords | `sources/search-demand/keywords-database.md` | Completa — 9 categorías, 80+ keywords |
| Brief programas ocultos R1 | `sources/search-demand/brief-programas-ocultos-r1.md` | Entregado |
| Nota SEO Cluster 05 Motion Graphics | `sources/search-demand/nota-seo-cluster05-motion-graphics.md` | Entregado |
| Cluster SEO 15 URLs | `sources/search-demand/cluster-seo-operativo-15-urls.md` | Entregado |
| Variantes geográficas | `sources/search-demand/keywords-database.md` (sección) | Estimadas — pendiente Trends |
| Doblaje/Localización IA | `sources/search-demand/keywords-database.md` (sección) | Añadida sesión cierre |

## Séptima Pasada — Integración señales portales de empleo (Adrian Torres, heartbeat tarde)

**Hora**: cierre de jornada 2026-04-10
**Fuente**: `daily-notes/2026-04-10/analyst-job-postings.md` (actualización 12:26)

Integración de las señales de portales de empleo de Adrian como triangulación cuantitativa de la categoría `creador de contenido`, que era la única del cluster con estimaciones completamente sin anclaje de vacantes.

**Datos añadidos a la DB** (`keywords-database.md`, sección Marketing de Influencia):
- Baselines portal: LinkedIn-EN 33 · LinkedIn-ES 59 · Indeed 25 vacantes `creador de contenido` — establece el piso de demanda laboral activa para la categoría
- Señal Domestika: oferta "Creador/a de contenido con IA y avatares" (herramientas listadas: Veo3, Heygen) — confirma que el perfil IA+contenido es ya una realidad de contratación, no solo una intención de búsqueda futura
- Interpretación competitiva: Domestika publica este perfil el mismo día en que 35mm tiene el programa oculto sin publicar — ventana competitiva activa

**Actualización cluster SEO** (`cluster-seo-operativo-15-urls.md`, URL 9):
- Añadida fila "Evidencia triangulación" con los tres números de portales y la señal Domestika directamente en la tabla, para que Elena/equipo web vean el respaldo sin tener que ir a la nota de Adrian

**Señal adicional de Adrian** (para registro, sin acción inmediata):
- Oferta Binance motion (vía Notodoanimacion) lista: Higgsfield, LTX, Midjourney, Runway, ElevenLabs, Kling — muestra fragmentación rápida del stack IA en ofertas. After Effects aparece en prácticamente todas las ofertas de motion/video → refuerza que URL 4 (`curso after effects`) es la entrada correcta, no `curso motion graphics`.

**Cambios en archivos:**
- `sources/search-demand/keywords-database.md` — sección Marketing de Influencia: contexto IC ampliado + fuente `creador de contenido` actualizada con portales
- `sources/search-demand/cluster-seo-operativo-15-urls.md` — URL 9: fila "Evidencia triangulación" añadida

---

## Pendiente para W16 (actualizado)

- [ ] D8 (Pablo Navarro): renovar cookie NID o acceso Google Trends API — desbloquea validación cuantitativa de todo lo estimado
- [ ] Verificar `curso blender` en semana 12-18 abr — ¿sostiene señal post-pico?
- [ ] Monitorizar NAB 2026 (18-22 abril) — keywords emergentes de motion/IA para añadir a DB
- [ ] Si Elena aprueba R6: actualizar URL 9 del cluster con naming definitivo
- [ ] Añadir categoría XR / Realidad Extendida a la DB (señal Grupo Godo + Layers of Reality)
- [ ] Integrar baselines portales de empleo `creador de contenido` en seguimiento semanal (Adrian Torres confirma que los conteos fluctúan por matching, no por movimiento real — anotar semana a semana para detectar tendencia)
- [ ] Evaluar si la oferta Domestika "Creador/a con IA" presiona el calendario de publicación de URL 9 (programa oculto R1)
- [ ] Evaluar si `curso produccion musical` necesita brief específico vs. SAE (competidor activo en IA)
