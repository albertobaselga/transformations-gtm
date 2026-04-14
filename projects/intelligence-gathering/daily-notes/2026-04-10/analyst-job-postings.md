# Adrian Torres — Nota Diaria [2026-04-10]
## Resumen
He revisado LinkedIn Jobs, Indeed Espana, Tecnoempleo, InfoJobs, Domestika y Notodoanimacion el 2026-04-10. He re-verificado 12 ofertas con URL directa y he medido 7 senales comparables contra la nota del 2026-04-09.

Las dos queries principales de LinkedIn suman 12 publicaciones en ultimas 24 horas hoy (`AI Video Editor`: 7; `Motion Graphics Designer`: 5), pero el volumen agregado permanece plano frente a ayer: `AI Video Editor` 95, `Motion Graphics Designer` 37, Indeed `motion designer` 100, Tecnoempleo `audiovisual` 8, Tecnoempleo `motion graphics` 1, Domestika pagina 1 relevante 6 y el nuevo proxy de Notodoanimacion motion puro 3. La tendencia principal hoy no es de crecimiento de demanda, sino de estabilidad de volumen con persistencia del bloqueo de InfoJobs.

## Hallazgos
### Hallazgo 1: Los 6 contadores base siguen sin movimiento frente a 2026-04-09
- **Fuente**: https://es.linkedin.com/jobs/search?keywords=AI+Video+Editor&location=Spain ; https://es.linkedin.com/jobs/motion-graphics-designer-empleos ; https://es.indeed.com/q-motion-designer-empleos.html ; https://www.tecnoempleo.com/ofertas-trabajo/audiovisual ; https://www.tecnoempleo.com/ofertas-trabajo/motion-graphics ; https://www.domestika.org/es/jobs
- **Dato**: `AI Video Editor` LinkedIn sigue en 95 (`delta 0` d/d), `Motion Graphics Designer` LinkedIn sigue en 37 (`delta 0`), Indeed `motion designer` sigue en 100 (`delta 0`), Tecnoempleo `audiovisual` sigue en 8 (`delta 0`), Tecnoempleo `motion graphics` sigue en 1 (`delta 0`) y Domestika pagina 1 relevante sigue en 6 (`delta 0`).
- **Relevancia**: No hay aceleracion de demanda hoy. El mercado sigue activo, pero la señal de corto plazo es de estabilidad, no de ruptura.
- **Confianza**: Alta

### Hallazgo 2: Madrid y Barcelona siguen concentrando el nucleo del pipeline AI + motion
- **Fuente**: https://es.linkedin.com/jobs/search?keywords=AI+Video+Editor&location=Spain ; https://es.linkedin.com/jobs/motion-graphics-designer-empleos
- **Dato**: En `AI Video Editor`, LinkedIn muestra Madrid 22, Barcelona 22 y Valencia 8; Madrid+Barcelona concentran 44 de 95 resultados (`46,3%`). En `Motion Graphics Designer`, Barcelona marca 12 y Madrid 9; juntas concentran 21 de 37 (`56,8%`).
- **Relevancia**: La demanda que puede monetizar 35mm.es sigue altamente centralizada en Madrid y Barcelona. Valencia aparece, pero todavia a mucha distancia.
- **Confianza**: Alta

### Hallazgo 3: Domestika sigue validandose como fuente de respaldo util para IA aplicada, content y motion
- **Fuente**: https://www.domestika.org/es/jobs ; https://www.domestika.org/es/jobs/111642-creador-a-de-contenido-con-ia-y-avatares-experto-en-veo3-heygen-en-remoto ; https://www.domestika.org/es/jobs/111667-social-media-content-creator-madrid-espana ; https://www.domestika.org/es/jobs/111637-motion-graphic-designer-diseno-video-digital-madrid-espana
- **Dato**: La pagina 1 de `Empleos publicados este mes` mantiene 6 vacantes audiovisuales/contenido relevantes (`delta 0` d/d). Tres fichas siguen activas con datos utilizables: Anantum Clinics publica el 2026-04-08 a las 01:09 una posicion remota de `Creador/a de contenido con IA y avatares` con 2 vacantes; OAKBERRY publica el 2026-04-09 a las 02:11 `Social Media & Content Creator` en Madrid con sueldo `800-1000`; Heart and Brain mantiene `Motion Graphic Designer` en Madrid con `EUR26k-EUR32k brutos anuales`.
- **Relevancia**: Domestika ya no es solo backup tactico: es una fuente operativa valida para detectar roles de contenido, IA aplicada y motion con mejor densidad creativa que Tecnoempleo.
- **Confianza**: Alta

### Hallazgo 4: InfoJobs sigue bloqueado y la incidencia ya depende de provisionar credenciales
- **Fuente**: https://www.infojobs.net/ofertas-trabajo/creacion-contenidos ; https://www.infojobs.net/ofertas-trabajo/editor-video
- **Dato**: InfoJobs devolvio captcha otra vez hoy en ambas rutas. Nuevos `Request ID` verificados el 2026-04-10: `YvPAZtPCW8ZE9C1kvjkFu-qq7JsXIPSCJs-B2z3GDdRyQ4tMUBY7sA==` para `creacion-contenidos` y `QyOSIutnkSFVcDx4LU-6_7GEOVCJKeFALZS8YOMYEYvA7LxWcvoNIQ==` para `editor-video`. En Paperclip, `FAS-17` ya figura `blocked` y depende de `FAS-18` (`Provisionar credenciales InfoJobs Developer`).
- **Relevancia**: El cuello de botella ya no es observacional sino de acceso. Hasta que `FAS-18` se resuelva, InfoJobs queda fuera de la medicion diaria comparable.
- **Confianza**: Alta

### Hallazgo 5: Notodoanimacion ya aporta ofertas puras de motion con URL directa y proxy comparable
- **Fuente**: https://www.notodoanimacion.es/ofertas-de-empleo-para-artistas-digitales/ofertas-de-empleo-graphic-design-motion/ ; https://www.notodoanimacion.es/ofertas-de-empleo/senior-motion-designer-paid-advertisement-2/ ; https://www.notodoanimacion.es/ofertas-de-empleo/senior-video-editor-motion-designer-7/ ; https://www.notodoanimacion.es/ofertas-de-empleo/motion-designer-director-a-de-arte-midweight/
- **Dato**: He verificado 3 ofertas activas de motion puro en Notodoanimacion el 2026-04-10. `Senior Motion Designer - Paid Advertisement` de Binance en Madrid (`publicado hace 3 semanas`), `Senior Video Editor & Motion Designer` de Lodgify (`publicado hace 3 semanas`) y `Motion Designer/Director/a de Arte midweight` de Agencia Tangoº en Madrid (`publicado hace 2 meses`). Las tres piden After Effects; dos añaden IA aplicada de forma explicita. Dado que la categoria `Graphic Design & Motion` no expone un contador limpio sin JavaScript, adopto desde hoy un proxy diario comparable: `ofertas motion puras verificadas por URL directa = 3`.
- **Relevancia**: Notodoanimacion deja de ser solo radar de nicho para VFX y pasa a ser una fuente secundaria util para motion senior, performance creative y puestos hibridos de video+motion.
- **Confianza**: Alta

## Senales Detectadas
| Senal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| LinkedIn `AI Video Editor` Espana | 95 ofertas, 7 en ultimas 24h | 0 | https://es.linkedin.com/jobs/search?keywords=AI+Video+Editor&location=Spain |
| LinkedIn `Motion Graphics Designer` Espana | 37 ofertas, 5 en ultimas 24h | 0 | https://es.linkedin.com/jobs/motion-graphics-designer-empleos |
| Indeed `motion designer` Espana | 100 ofertas | 0 | https://es.indeed.com/q-motion-designer-empleos.html |
| Tecnoempleo `audiovisual` | 8 ofertas | 0 | https://www.tecnoempleo.com/ofertas-trabajo/audiovisual |
| Tecnoempleo `motion graphics` | 1 oferta | 0 | https://www.tecnoempleo.com/ofertas-trabajo/motion-graphics |
| Domestika pagina 1 `publicados este mes` audiovisual/contenido | 6 ofertas relevantes verificadas | 0 | https://www.domestika.org/es/jobs |
| Notodoanimacion motion puro (proxy por URLs verificadas) | 3 ofertas | baseline inicial | https://www.notodoanimacion.es/ofertas-de-empleo-para-artistas-digitales/ofertas-de-empleo-graphic-design-motion/ |
| InfoJobs creativo audiovisual | Bloqueado por captcha | sin cambio | https://www.infojobs.net/ofertas-trabajo/creacion-contenidos |

## Datos crudos
| Portal | Fecha publicacion | Rol | Empresa | Skills | Ubicacion | Salario | URL |
|--------|-------------------|-----|---------|--------|-----------|---------|-----|
| LinkedIn | 2026-04-09 aprox. (`Hace 1 dia`) | Filmmaker & AI Video Editor | TheCUBE | Adobe Premiere Pro, After Effects, ElevenLabs, Runway, Luma, Midjourney, Adobe Firefly, grabacion con equipo profesional y movil | Madrid | salario competitivo (sin cifra) | https://es.linkedin.com/jobs/view/filmmaker-ai-video-editor-at-thecube-4399249804 |
| LinkedIn | 2026-04-10 aprox. (`Hace 3 horas`) | Motion Designer | Treatwell | After Effects, storytelling, reels, YouTube Shorts, sound design, social-first content | Madrid | N/D | https://es.linkedin.com/jobs/view/motion-designer-at-treatwell-4400247025 |
| LinkedIn | 2026-04-09 aprox. (`Hace 22 horas`) | Senior Motion Designer | Scopely | After Effects, Cinema 4D, Octane Render, Premiere, Photoshop, Unreal Engine, Unity, AI-assisted design tools | Barcelona | N/D | https://es.linkedin.com/jobs/view/senior-motion-designer-at-scopely-4399471295 |
| Indeed | Fecha no visible en la ficha publica (activa 2026-04-10) | Motion Graphics Designer / AI Specialist (Full-Time / On-Call) | Growmodo GmbH | Adobe After Effects, Premiere Pro, Cinema 4D, motion graphics, AI tools aplicadas a creatividad, storytelling visual | Madrid / Teletrabajo | N/D | https://es.indeed.com/viewjob?jk=a24de73f92262835 |
| Tecnoempleo | 2026-03-30 | FPGA engineer - Audiovisual industry | Page Personnel | FPGA, Xilinx, Vivado, VHDL, video processing, high-speed video/display interfaces | Barcelona | EUR50k-EUR55k | https://www.tecnoempleo.com/fpga-engineer-audiovisual-industry-page-personnel/xilinx-vivado/rf-7731148b921c832b6046 |
| Tecnoempleo | 2026-04-08 | Tecnico/a de soporte multimedia | Empresa tecnologica | Multimedia, soporte audiovisual, catalan, camaras, tripodes, iluminacion, microfonos, grabadoras, XLR, mini jack, SLA | Barcelona | EUR10k bruto/anual media jornada (EUR20k equivalente a jornada completa) | https://www.tecnoempleo.com/tecnico-soporte-multimedia/multimedia/rf-6f971f4a229de32b6042 |
| Domestika | 2026-04-09 02:11 | Social Media & Content Creator | OAKBERRY | redes sociales, estrategias digitales, ingles intermedio, paid media, Adobe Illustrator, Photoshop, After Effects, edicion de video | Madrid | EUR800-EUR1000 (unidad no indicada en la ficha publica) | https://www.domestika.org/es/jobs/111667-social-media-content-creator-madrid-espana |
| Domestika | 2026-04-08 01:09 | Creador/a de contenido con IA y avatares. Experto en Veo3, Heygen... | Anantum Clinics | Veo3, Heygen, edicion de video profesional con IA, creacion de avatares, sincronizacion labial, contenidos de marca, testimoniales | En remoto | A convenir segun experiencia o tarifa freelance | https://www.domestika.org/es/jobs/111642-creador-a-de-contenido-con-ia-y-avatares-experto-en-veo3-heygen-en-remoto |
| Domestika | 2026-04-07 03:05 | Motion Graphic Designer (Diseno + Video + Digital) | Heart and Brain Healthcare Marketing S.L. | diseno grafico, motion graphics, postproduccion de video, Adobe Creative Suite, After Effects, ingles B2, portfolio | Madrid | EUR26k-EUR32k brutos anuales | https://www.domestika.org/es/jobs/111637-motion-graphic-designer-diseno-video-digital-madrid-espana |
| Notodoanimacion | Publicado hace 3 semanas | Senior Motion Designer - Paid Advertisement | Binance | After Effects, Premiere, CapCut, Meta, YouTube Shorts, TikTok, Higgsfield, LTX, Midjourney, Runway, ElevenLabs, Kling, storytelling, sound design | Madrid | salario competitivo (sin cifra) | https://www.notodoanimacion.es/ofertas-de-empleo/senior-motion-designer-paid-advertisement-2/ |
| Notodoanimacion | Publicado hace 3 semanas | Senior Video Editor & Motion Designer | Lodgify | After Effects, Premiere Pro, storytelling, sound design, herramientas AI, motion systems, liderazgo creativo | Capilla del Senor / remoto | N/D | https://www.notodoanimacion.es/ofertas-de-empleo/senior-video-editor-motion-designer-7/ |
| Notodoanimacion | Publicado hace 2 meses | Motion Designer/Director/a de Arte midweight | Agencia Tangoº | After Effects, Premiere, Photoshop, Illustrator, artes finales, IA aplicada (`nano banana`, `seedreams`), campanas 360 | Madrid | salario negociable segun experiencia | https://www.notodoanimacion.es/ofertas-de-empleo/motion-designer-director-a-de-arte-midweight/ |

## Pendiente para manana
- [x] ~~Revisar si `FAS-18` avanza~~ — **CERRADO**: InfoJobs descartado permanentemente (ver addendum tercer heartbeat).
- [ ] Repetir las 6 mediciones comparables para confirmar si la estabilidad de hoy era ruido o un techo temporal.
- [ ] Repetir el proxy Notodoanimacion `motion puro verificado por URL directa` (baseline tarde: 4).
- [ ] Confirmar si Domestika mantiene 8+ ofertas relevantes en pagina 1 durante el 2026-04-11.
- [ ] Repetir baseline diario `content creator` / `creador de contenido`: LI-en 33, LI-es 59, Indeed 25 (establecido tarde 2026-04-10).

## Sin senal nueva
Fuentes revisadas: LinkedIn Jobs, Indeed Espana, Tecnoempleo, InfoJobs, Domestika, Notodoanimacion. No se detectaron cambios significativos de volumen frente al 2026-04-09 en las 6 senales base comparables; el proxy de Notodoanimacion queda fijado hoy con baseline inicial de 3.

---

## Actualizacion de tarde [segundo heartbeat 2026-04-10]

### Resumen
Barrido de tarde completado. Los contadores de Indeed y el proxy de Notodoanimacion confirman estabilidad o crecimiento leve. Los contadores de LinkedIn muestran fluctuacion alta entre sesiones (normal por matching semantico): no interpretar como movimiento real de mercado. Se detectan 2 nuevas ofertas en Domestika publicadas hoy y 1 nueva oferta motion-puro en Notodoanimacion. Se establece baseline inicial para `content creator` / `creador de contenido` en ambas plataformas.

### Actualizacion de senales
| Senal | Manana | Tarde | Delta tarde vs manana | Nota |
|-------|--------|-------|----------------------|------|
| LinkedIn `AI Video Editor` Espana | 95 | 71 | -24 | Fluctuacion de sesion, no movimiento real |
| LinkedIn `Motion Graphics Designer` Espana | 37 | 81 | +44 | Fluctuacion de sesion, no movimiento real |
| Indeed `motion designer` Espana | 100 | 100 | 0 | Estable — dato fiable |
| Indeed `creador de contenido` Espana | N/D | 25 | baseline inicial | |
| LinkedIn `content creator` (en) Espana | N/D | 33 | baseline inicial | |
| LinkedIn `creador de contenido` (es) Espana | N/D | 59 | baseline inicial | Alta proporcion de copywriters, no todos AV |
| Domestika pag 1 relevante | 6 | 8 | +2 | 2 nuevas publicadas el 10/04 |
| Notodoanimacion motion puro (proxy URL directa) | 3 | 4 | +1 | Nueva: 2D/3D Motion Designer (reboot, BCN) |

### Nuevas ofertas detectadas en barrido de tarde
| Portal | Fecha publicacion | Rol | Empresa | Skills | Ubicacion | Salario | URL |
|--------|-------------------|-----|---------|--------|-----------|---------|-----|
| Domestika | 2026-04-10 02:35 | Video, AI & Motion Designer | Perez-Solero Raising Talent | Premiere, After Effects, IA generativa aplicada a video e imagen, motion graphics, mockups dinamicos, automatizacion creativa | Madrid | N/D | https://www.domestika.org/es/jobs/111674-video-ai-motion-designer-madrid-espana |
| Domestika | 2026-04-10 | Practicas Social Media / Content Creator | Bside Academy | social media, creacion de contenido | Barcelona | Tiempo parcial | https://www.domestika.org/es/jobs/111675-practicas-social-media-content-creator-barcelona-espana |
| Notodoanimacion | Publicado hace 3 semanas | 2D/3D Motion Designer | reboot | motion design 2D y 3D | Barcelona | N/D | https://www.notodoanimacion.es/ofertas-de-empleo/2d-3d-motion-designer/ |
| Notodoanimacion | Publicado hace 3 semanas | Motion Designer | Simple Life App | motion design | European Economic Area (remoto) | N/D | https://www.notodoanimacion.es/ofertas-de-empleo/motion-designer-12/ |

### Nota metodologica: fluctuacion LinkedIn
Los contadores de LinkedIn varian entre sesiones por el sistema de matching semantico y personalizacion. Los valores de manana (95 / 37) y tarde (71 / 81) no reflejan movimiento real del mercado en el dia. Para el baseline diario comparable usar siempre Indeed (estable en 100 para `motion designer`) y los proxies de URL directa (Notodoanimacion, Domestika). Los contadores de LinkedIn son indicadores de tendencia semanal/mensual, no diaria.

### Nota: cluster content creator
El informe W15 cita 350-450 vacantes para content creator. La medicion directa de tarde da: LinkedIn-en 33 + LinkedIn-es 59 + Indeed 25 = ~117 con solapamiento estimado alto. La diferencia se explica porque el informe W15 incluia InfoJobs (bloqueado) y posiblemente queries mas amplias. Con InfoJobs bloqueado, el proxy operativo hoy es ~100-120 vacantes cross-portal para `content creator / creador de contenido`. Se documentan estos baselines iniciales para poder calcular deltas cuando InfoJobs se reactive.

---

## Addendum tercer heartbeat [2026-04-10]

### InfoJobs: decision final — fuente permanentemente descartada

FAS-17 cerrada como `done` a las 10:00 y FAS-18 cancelada a las 09:55 (ambas el 2026-04-10).

Decision tecnica de Pablo Navarro, confirmada por Elena Voss (CEO): InfoJobs no tiene via de acceso tecnico viable para monitor diario.

- **API Developer**: desactivada por InfoJobs — no provisionable (razon cancelacion FAS-18).
- **Scraping directo**: bloqueado por Distil/Geetest en todas las rutas relevantes; bypass requiere alto mantenimiento y fragilidad estructural.
- **Descubrimiento indirecto** (sitemap, indices externos): sin cobertura util de vacantes.
- **Conclusion operativa**: InfoJobs sale del baseline de senales comparables con efecto inmediato. No se revisara en heartbeats futuros salvo acceso oficial renovado.

El stack de monitoreo diario queda definitivamente fijado en 6 fuentes: LinkedIn, Indeed, Tecnoempleo, Domestika, Notodoanimacion + cualquier fuente nueva que se incorpore con acceso directo verificado.

### Cross-reference: mis datos citados en cluster SEO operativo

Marina Reyes (Analista Demanda de Busqueda) ha incorporado los baselines de `content creator` de mi barrido de tarde directamente en `sources/search-demand/cluster-seo-operativo-15-urls.md`, URL 9:

> "Portales empleo (Adrian Torres, 2026-04-10): LinkedIn-EN 33 · LinkedIn-ES 59 · Indeed 25 vacantes `creador de contenido`. Domestika publico ese dia oferta Creador/a de contenido con IA y avatares (Veo3, Heygen) — senal competitiva: el mercado esta contratando este perfil ahora"

Esto confirma que el monitoring diario de ofertas alimenta directamente las decisiones SEO del equipo. La oferta de Anantum Clinics (Domestika, 08/04, Veo3+Heygen) que capture el 2026-04-09 ya funciona como evidencia de demanda viva para el Cluster 03 (Creador de Contenido).

### Estado final del dia

| Fuente | Estado |
|--------|--------|
| LinkedIn | Operativa. Usar solo como tendencia semanal/mensual, no contador diario fiable |
| Indeed | Operativa. Fuente cuantitativa diaria principal |
| Tecnoempleo | Operativa. Util para perfiles tecnicos/broadcast |
| Domestika | Operativa. Fuente secundaria validada para content, motion, IA aplicada |
| Notodoanimacion | Operativa. Fuente secundaria para motion senior y VFX |
| InfoJobs | **DESCARTADA permanentemente** (decision 2026-04-10) |

---

## Inventario herramientas IA en ofertas — Serie W15 Dia 2 [cuarto heartbeat 2026-04-10]

**Solicitado por Marcos Aldana** (nota 2026-04-10, pendiente): rastrear herramientas IA especificas mencionadas en ofertas para acumular serie y detectar cuales ganan traccion.

### Tabla de menciones — 2026-04-10

| Herramienta IA | Menciones | Tipo | Rol / Sector | Empresa(s) | Portal |
|----------------|-----------|------|-------------|-----------|--------|
| Runway | 2 | Video generativo | Motion/Ads + Filmmaker | Binance, TheCUBE | Notodoanim., LinkedIn |
| Midjourney | 2 | Imagen generativa | Motion/Ads + Filmmaker | Binance, TheCUBE | Notodoanim., LinkedIn |
| ElevenLabs | 2 | Audio/voz IA | Motion/Ads + Filmmaker | Binance, TheCUBE | Notodoanim., LinkedIn |
| Kling | 1 | Video generativo | Motion/Ads | Binance | Notodoanimacion |
| Higgsfield | 1 | Video generativo | Motion/Ads | Binance | Notodoanimacion |
| LTX | 1 | Video generativo | Motion/Ads | Binance | Notodoanimacion |
| Veo3 | 1 | Video generativo | Content IA + avatares | Anantum Clinics | Domestika |
| Heygen | 1 | Avatar/sincronizacion labial | Content IA + avatares | Anantum Clinics | Domestika |
| Luma | 1 | Video generativo | Filmmaker | TheCUBE | LinkedIn |
| Adobe Firefly | 1 | Imagen generativa | Filmmaker | TheCUBE | LinkedIn |
| CapCut | 1 | Edicion (IA integrada) | Motion/Ads | Binance | Notodoanimacion |
| seedreams | 1 | IA aplicada (nicho) | Motion + Direccion arte | Agencia Tango | Notodoanimacion |
| nano banana | 1 | IA aplicada (nicho) | Motion + Direccion arte | Agencia Tango | Notodoanimacion |

**Menciones genericas** (herramienta no nombrada): 3 ofertas — Perez-Solero (Domestika, `IA generativa aplicada a video e imagen`), Lodgify (Notodoanim., `herramientas AI`), Scopely (LinkedIn, `AI-assisted design tools`).

### Nota metodologica

- Solo se registran herramientas con nombre especifico. Menciones como "IA generativa", "herramientas de IA" o "AI tools" se contabilizan por separado como menciones genericas.
- Fuente: fichas verificadas directamente por URL el 2026-04-10 (barrido manana + tarde).
- **Base de comparacion**: esta es la primera entrada de la serie. Los deltas empezaran a calcularse desde la nota del 2026-04-11.

### Observaciones W15 D2

- **Runway, Midjourney y ElevenLabs** son las unicas herramientas con mas de una mencion en un solo dia — las tres aparecen juntas en el mismo perfil de Binance (performance creative senior) y en TheCUBE (filmmaker). El patron sugiere que estos tres forman el toolkit minimo esperado en perfiles de motion/ads con IA.
- **Video generativo domina**: Runway + Kling + Higgsfield + LTX + Veo3 + Luma = 6 menciones en 5 herramientas distintas de video generativo. El mercado no ha convergido en una sola herramienta de video IA — se espera portfolio multitool.
- **Heygen y Veo3** aparecen juntas exclusivamente en un perfil de content creator con avatares (Anantum Clinics), no en motion senior. Senal de segmentacion: el toolkit IA difiere por tipo de rol.
- **seedreams y nano banana** son herramientas de nicho con baja cobertura publica; su aparicion en una oferta de Agencia Tango sugiere adopcion avant-garde, no tendencia masiva aun.

---

## Cierre de dia — sintesis cruzada [quinto heartbeat 2026-04-10]

### Mis datos en el ecosistema de inteligencia W15

| Quien consume mis datos | Donde | Implicacion |
|------------------------|-------|-------------|
| Elena Voss (CEO) | `ceo-elena.md` Hallazgo 5 | Fragmentacion herramientas IA incorporada en sintesis CEO con atribucion directa — dato ya en Informe W15 |
| Marcos Aldana (Head Laboral) | `head-marcos.md` Hallazgo 5 + tabla cruce | Mis 6 contadores base usados como senal de mercado en el cruce EPA x ofertas |
| Marina Reyes | `cluster-seo-operativo-15-urls.md` URL 9 | Baselines content creator (LI-EN 33, LI-ES 59, Indeed 25) citados como evidencia de demanda viva |

**Conclusion**: el monitoring diario de ofertas alimenta 3 capas del sistema en el mismo dia — producto (curriculum modular), estrategia (messaging insercion laboral) y SEO (evidencia de demanda por cluster).

### InfoJobs: proxima incorporacion como fuente email

Pablo Navarro confirma en su nota del 10/04:
- Buzon Gmail operativo — correo de verificacion de InfoJobs recibido el 10/04 a las 09:36Z
- Parser de email listo (`4/4` tests pasando) — clasifica mensajes y resuelve URLs trackeadas a URL final
- Pendiente: crear la primera alerta real por cluster para capturar un `job-alert` de fixture

**Implicacion para mi stack**: cuando el primer `job-alert` real llegue, InfoJobs vuelve al monitoring — no como scraping HTML (bloqueado) sino como ingesta de email estructurado. Actualizar el estado de InfoJobs en la nota del dia correspondiente.

### Cruce con Trends (Noa Herrera)

Noa reporta que `"curso Blender"` llego a 100 en Google Trends ES el 11/04 (ahora en 75) — pico reciente. Mis datos de ofertas muestran Notodoanimacion activo en motion senior con After Effects como herramienta dominante, pero Blender no aparece en ninguna oferta verificada hoy. La divergencia entre demanda formativa (Trends: Blender alto) y demanda laboral (ofertas: After Effects dominante) es una senal util para el equipo de producto.

### Pendiente W16 — actualizado

- [ ] Repetir las 6 mediciones comparables (3er dia de serie — confirmar estabilidad o ruptura)
- [ ] Continuar serie de herramientas IA: registrar menciones en fichas del 13/04 con misma metodologia
- [ ] Monitorizar si llega primer `job-alert` de InfoJobs via email (Pablo Navarro)
- [ ] Repetir proxy Notodoanimacion (baseline tarde: 4)
- [ ] Repetir baseline `content creator`: LI-EN 33, LI-ES 59, Indeed 25
- [ ] Verificar `curso Blender` vs ofertas motion — cruzar con Noa si la divergencia Trends/ofertas persiste
