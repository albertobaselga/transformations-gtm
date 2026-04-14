# Iker Molina — Nota Diaria 2026-04-30 (W18 Día 3)

## Resumen

W18 día 3 — cierre de mes (último día de abril). Jornada de barrido B2B ([strat-008]), cierre definitivo de la ventana EPA T1 2026, y un hallazgo relevante: tres nuevos competidores detectados en el barrido mensual de cierre.

**EPA T1 2026 — ventana cerrada**: Último intento hoy 30/04. Sin publicar. Cerramos la ventana de abril. Reintentar primera semana de mayo (earliest 4-5 mayo). Notificar a Sofia.

**B2B landscape completo — barrido [strat-008] semanal**: Scan de páginas /empresas/ en CES, SAE, Lightbox. CES sin portal B2B estructurado (URL devuelve imagen JPEG); trabaja con cadenas (Telecinco, TVE, Antena 3) vía convenios de prácticas, no catálogo corporativo. SAE: 404 en /empresas/ (7ª semana sin señal). Lightbox: sección "Formación a Empresas" activa con programas personalizados, sin FUNDAE explícito.

**The Core School FUNDAE — matiz crítico para Daniel**: La página de Diploma IA (€3.950) NO menciona FUNDAE. La bonificación se aplica únicamente vía canal /empresas/ — solo accesible para trabajadores con empresa española. Para compra individual retail, sin bonificación directa visible. El Diploma IA es producto B2C sin bonificación directa; el canal empresa es el acceso a FUNDAE.

**Tres nuevos competidores detectados en barrido mensual**: Madrid Content School (IA audiovisual, €700, FUNDAE, branded content), SONTIC Digital School (Zaragoza, audio IA, Dolby Atmos, regional), EOI (€0 FSE+, desempleados <30, Málaga). Los tres añadidos al radar.

---

## Hallazgos

### Hallazgo 1: EPA T1 2026 — Ventana abril cerrada. Reintentar semana del 4 mayo

- **Fuente**: INE (consultado 2026-04-30)
- **Dato**: EPA T1 2026 sin publicar al cierre del día. Último intento del mes. El patrón histórico (EPA T1 2025 = 28 abril 2025) indica un retraso de al menos 2 días hábiles respecto a 2025. Posible factor: adaptación a CNAE-2025 con doble codificación implementada desde T1 2026.
- **Estado**: Ventana abril **CERRADA**. No reintentar hasta semana del 4 mayo (lunes).
- **Acción**: Notificar a Sofia — bloqueante para la actualización de la matriz de empleabilidad. Reintentar el lunes 4 mayo a primera hora.

---

### Hallazgo 2: The Core School — Matiz FUNDAE crítico: retail vs. empresa

- **Fuente**: thecoreschool.com — página Diploma IA + página Becas y Ayudas (consultado 2026-04-30)
- **Dato**: La página del Diploma IA Edición y Postproducción (€3.950, oct 2026) **NO menciona FUNDAE** en ningún punto. Las ayudas publicadas para el Diploma son: becas internas (excelencia, diversidad, acceso) + financiación Banco Sabadell hasta 12 cuotas sin interés.
- **Contraste**: La página /empresas/ confirma FUNDAE para "todas las ofertas académicas y formación corporativa" — pero eso aplica cuando la empresa contrata directamente, no cuando el alumno compra a título individual.
- **Lectura operativa**: El Diploma IA es un producto B2C en su presentación retail. Si la empresa del trabajador lo financia vía FUNDAE, sí es bonificable — pero el canal es empresa-a-escuela, no alumno-a-escuela. Esto es una distinción importante para el equipo B2B: The Core School tiene FUNDAE confirmado para clientes empresa, pero no lo publicita activamente al alumno individual.
- **Confianza**: Alta en el matiz; alta en que el config sigue correcto (FUNDAE confirmado, solo especificar canal)

---

### Hallazgo 3: CES — B2B scan [strat-008]. Sin portal corporativo estructurado

- **Fuente**: escuelaces.com/empresas/ + WebSearch (consultado 2026-04-30)
- **Dato**: La URL /empresas/ de CES devuelve un archivo de imagen JPEG (error de configuración de servidor). Aplicado [pit-002] — switch inmediato a WebSearch.
- **WebSearch CES empresas**: CES trabaja históricamente con Telecinco, Antena 3, TVE, Telemadrid, Canal Sur, RNE, La Sexta — pero vía convenios de prácticas para alumnos (550+ convenios empresa activos). No hay evidencia de catálogo de formación corporativa, FUNDAE ni programas B2B para empresas.
- **Conclusión**: CES es un formador B2C con excelente red de colocación, no un proveedor B2B con FUNDAE. El diferenciador "550 convenios" es de colocación de alumnos, no de venta a empresas.
- **Nivel de amenaza CES**: Sin cambio (🔴 ALTA por otros motivos: Open Day activo, Steadycam, dual Mediaset).

---

### Hallazgo 4: Lightbox Academy — B2B scan [strat-008]. Sección Empresas activa, sin FUNDAE explícito

- **Fuente**: lboxacademy.es — sección Empresas (consultado 2026-04-30)
- **Datos**:

| Campo | Dato |
|-------|------|
| Sección B2B | "Formación a Empresas" activa |
| Programas | Personalizados en animación, VFX, motion graphics, 3D, videojuegos, vídeo |
| Certificaciones | Adobe Authorized Training Center + Autodesk Authorized Training Center + Unity + Maxon |
| FUNDAE | **No mencionado explícitamente** |
| Pricing | Por presupuesto (sin tarifa publicada) |
| IA específico | No visible en catálogo B2B |

- **Conclusión**: Lightbox tiene capacidad B2B real (certificaciones tech reconocidas, programas personalizados), pero no publicita FUNDAE ni tiene IA visible en el catálogo empresas. Su ventaja B2B es la certificación Adobe/Autodesk/Unity, no IA audiovisual.
- **Nivel de amenaza Lightbox**: Sin cambio (🔴 ALTA — bolsa 2.000+ empresas + 98% inserción + Unreal partner + alumni AAA).

---

### Hallazgo 5: SAE Institute — B2B scan [strat-008]. 404 en /empresas/ (7ª semana sin señal)

- **Fuente**: sae.edu/esp/empresas/ + WebSearch (consultado 2026-04-30)
- **Dato**: URL /empresas/ devuelve 404. Aplicado [pit-002]. WebSearch sin señal de B2B, FUNDAE ni IA audiovisual en SAE. Séptima semana consecutiva sin movimiento B2B.
- **Acción**: Mantener monitorización pasiva únicamente. No hay indicios de activación B2B inminente.

---

### Hallazgo 6: Tres nuevos competidores detectados — Barrido de cierre de mes

#### A. Madrid Content School — "Laboratorio IA Audiovisual"

- **Fuente**: madridcontentschool.com (consultado 2026-04-30)

| Campo | Dato |
|-------|------|
| Programa | Laboratorio IA Audiovisual |
| Precio | **€700** (10h live, 4 semanas, martes/jueves 19-21h CET) |
| Modalidad | 100% online (Zoom) |
| Edición completada | Enero 8 – Febrero 3, 2026 (edición lanzada; próxima sin fecha) |
| FUNDAE | **Sí** (para empleados de empresa española) |
| Tools | Midjourney avanzado, ComfyUI intensivo, Adobe GenAI workflow, música para audiovisual IA |
| Otros programas | Máster en Branded Content (25 ECTS) — 5+ ediciones; Experto en Branded Content; Formación corporativa |
| Posicionamiento | "Primera escuela de Branded Content en España" |
| Nivel amenaza | 🟡 MEDIA (segmento diferente — branded content / branded entertainment, no producción audiovisual técnica) |

**Lectura estratégica**: Madrid Content School está en la intersección branded content + IA generativa. Su "Laboratorio IA Audiovisual" a €700 es el precio de entrada más bajo con FUNDAE en el mercado ES actualmente, por debajo del Curso IA de CEI (€990). Sin embargo, el foco es branded content/marketing, no realización audiovisual técnica. El solapamiento con 35mm es bajo — alumno objetivo distinto.

---

#### B. SONTIC Digital School — Zaragoza, especialista audio e IA

- **Fuente**: WebSearch + sontic.es (consultado 2026-04-30)

| Campo | Dato |
|-------|------|
| Sede | Zaragoza (regional — no Madrid/Barcelona) |
| Respaldo | Empresa con 20+ años en formación audiovisual |
| Programa IA nuevo | Máster en IA Generativa (Midjourney, Runway, Firefly) |
| Otros programas | Máster Sonido y Música para Cine/Videojuegos/VR; Máster Sonido Técnico Eventos en Vivo |
| Infraestructura singular | Único estudio de audio inmersivo en España con sistema Focal 9.1.4 + Dolby Atmos |
| Formato | Presencial + streaming/online + híbrido |
| Precio | Sin publicar |
| FUNDAE | Sin confirmar |
| Nivel amenaza | 🟢 BAJA (regional Zaragoza; audio specialist; Máster IA generalista — no audiovisual técnico) |

**Lectura estratégica**: SONTIC es un especialista de audio con infraestructura singular (Dolby Atmos 9.1.4). Su nuevo Máster IA Generativa es generalista (Midjourney/Runway), no broadcast-specific. La geografía (Zaragoza) limita su alcance nacional. No competidor directo de 35mm, pero vale la pena monitorizar si expanden Madrid o si su foco IA se mueve hacia postproducción audiovisual.

---

#### C. EOI — Curso Producción Audiovisual con IA y Unreal Engine (Málaga)

- **Fuente**: WebSearch + eoi.es (consultado 2026-04-30)

| Campo | Dato |
|-------|------|
| Precio | **€0 GRATUITO** (financiado FSE+ + Polo de Contenidos Digitales) |
| Duración | 170 horas, abril 2026 |
| Target | Desempleados menores de 30, inscritos en Garantía Juvenil |
| Contenidos | Guion con IA, concept art, DaVinci Resolve, Unreal Engine virtual sets, personal branding |
| Sede | Málaga (virtual/presencial) |
| Nivel amenaza | 🟢 BAJA (target distinto — desempleados <30, regional Málaga, no competidor premium) |

**Lectura estratégica**: EOI no es competidor de 35mm — target, precio y geografía son radicalmente diferentes. Valor indirecto como validación de demanda: instituciones públicas están invirtiendo en formación IA audiovisual + Unreal Engine virtual sets, confirmando que el mercado profesional de producción virtual es un gap real.

---

## Mapa B2B — Estado completo W18D3 (cierre de mes)

| Competidor | Canal B2B | FUNDAE | Partners sector | IA en B2B |
|---|---|---|---|---|
| CEI | Estructurado activo | **Sí** | KPMG, Google, PWC, Samsung | Sí (todos los programas) |
| SHIFTA | Todos los programas | **Sí** | — | Sí (todos) |
| The Core School | Sección Empresas activa | **Sí** (vía empresa) | Atresmedia, Banijay, La Liga Studios, Grupo Planeta | Sí (Director Immersion + corporativa) |
| Madrid Content School | Formación corporativa activa | **Sí** | — | Sí (Lab IA Audiovisual) |
| Lightbox | Formación a Empresas activa | No confirmado | Adobe, Autodesk, Unity, Maxon | No visible |
| CES | Implícito (convenios prácticas) | No detectado | Telecinco, TVE, Antena 3, Telemadrid | No |
| SAE | No detectado (404) | No detectado | Avid/Warner (alumni) | No |

---

## Señales Detectadas

| Señal | Valor | Delta vs 2026-04-29 | Fuente |
|-------|-------|---------------------|--------|
| EPA T1 2026 | **CERRADO abril** — reintentar semana del 4 mayo | Ventana cerrada — notificar a Sofia | INE |
| The Core School FUNDAE matiz | Retail/individual: sin FUNDAE directo. Empresa: FUNDAE confirmado | **MATIZ NUEVO** — crítico para B2B | thecoreschool.com |
| CES B2B | Sin portal corporativo — 550 convenios son de prácticas, no B2B | Confirmado: no competidor B2B | escuelaces.com + WebSearch |
| Lightbox B2B | Formación a Empresas activa — Adobe/Autodesk/Unity certs — sin FUNDAE ni IA explícita | Nuevo detalle; sin cambio de nivel amenaza | lboxacademy.es |
| SAE B2B | 404 /empresas/ — 7ª semana sin señal | Sin cambio | sae.edu |
| Madrid Content School | **NUEVO** — Laboratorio IA Audiovisual €700 + FUNDAE + branded content | Nuevo competidor detectado | madridcontentschool.com |
| SONTIC Digital School | **NUEVO** — Zaragoza, audio IA, Dolby Atmos 9.1.4, Máster IA Generativa | Nuevo competidor regional | sontic.es |
| EOI Málaga | **NUEVO** — €0 FSE+, 170h, desempleados <30, Unreal Engine virtual sets | Nuevo, no competidor directo | eoi.es |
| Lightbox Summer School | Matrícula abre **mañana 1 mayo** | Verificar precios e IA en catálogo | lboxacademy.es |

---

## Actualizaciones pendientes en competitors-config.md

- [ ] **Madrid Content School**: añadir entrada nueva (🟡 MEDIA, segmento branded content, FUNDAE sí, €700 entrada)
- [ ] **SONTIC Digital School**: añadir entrada nueva (🟢 BAJA, regional Zaragoza, audio IA, Dolby Atmos)
- [ ] **The Core School**: añadir nota FUNDAE vía empresa (retail: sin bonificación directa visible)
- [ ] **EPA**: añadir a Señales: ventana abril cerrada, reintentar semana 4 mayo
- [ ] **Amenaza table**: actualizar fecha a 2026-04-30, añadir Madrid Content School y SONTIC

---

## Pendiente para semana del 4 mayo (W19)

- [ ] **EPA T1 2026** — reintentar lunes 4 mayo. Notificar a Sofia hoy mismo
- [ ] **Lightbox Summer School** — verificar 1-2 mayo: precios + programas IA catálogo verano
- [ ] **Madrid Content School** — confirmar si tienen próxima edición del Lab IA Audiovisual; evaluar si justifica entrada en config con nivel 🟡 MEDIA
- [ ] **SONTIC** — monitorización pasiva; sin acción activa hasta señal nueva
- [ ] **The Core School Diploma IA FUNDAE** — flagear a Daniel el matiz empresa vs. retail; ya confirmado operativamente

---

*Actualizado al cierre del día 2026-04-30. Fin de mes — W18 completa.*
