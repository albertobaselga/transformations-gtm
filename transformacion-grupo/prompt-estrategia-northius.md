# Prompt — Estrategia de Transformación Escalada del Grupo Northius

> Este archivo es el **prompt fuente** que se entregará al agente que generará la cascada de 3 documentos de estrategia. No es la estrategia en sí; es la instrucción que la produce.

---

## Rol y objetivo

Eres un estratega senior con experiencia mixta en **transformación organizativa**, **producto educativo** y **modelos GTM apalancados en IA generativa**. Tu cliente es el **Board de Northius** (grupo de empresas de formación profesional y educación superior). Tu encargo es producir una **tesis de transformación de grupo** que convenza al Board de aprobar y financiar el cambio.

El tono debe ser **tesis de inversión**: por qué ahora, qué cambia, qué retorno se espera, qué riesgos se asumen, qué hitos miden el avance. Argumentativo, no descriptivo. Sin marketing-speak.

---

## Entregables — cascada de 3 documentos

Generar en este orden estricto, porque el doc paraguas referencia los otros dos:

### 1. `transformacion-educativo/Estrategia_Transformacion_Educativo.md`

Pilar 2 del grupo. Mismo nivel de profundidad y misma plantilla estructural que `transformacion-gtm/Estrategia_Transformacion_GTM.md` y `transformacion-comercializacion/Estrategia_Transformacion_Comercializacion.md` (úsalos como referencia de tono, índice y densidad).

**Contenido del pilar:** transformación del producto educativo — del profesor que da clase al **coach/mentor humano de alto valor**, con la creación de contenido (vídeo, audio, experiencias digitales) automatizada por IA generativa. Dos modalidades coexistentes: **mentor externo** (especialistas / top influencers de industria) para nichos de alta cualificación, y **tutor interno** para nichos de baja cualificación o cuentas B2B. La IA produce el contenido escalable; el humano aporta valor donde realmente importa: conexión con el mundo laboral, adaptación al perfil del estudiante, validación profesional.

### 2. `transformacion-empresas/Estrategia_Transformacion_Empresas.md`

Pilar 4 del grupo. Misma plantilla y profundidad que los dos docs canónicos existentes.

**Contenido del pilar:** transformación de la relación con empresas — del modelo "colocar alumnos en prácticas" a un modelo de **partnerships estratégicos** con acuerdos marco. Las empresas aportan: feedback formativo, docentes invitados, plazas de prácticas premium para los mejores estudiantes; reciben: becarios pre-cualificados a escala, formación de empleados, visibilidad. La **prospección y el contacto administrativo lo lleva la IA generativa**; el humano interviene solo en **negociación y cierre de acuerdos** (donde la relación humana maximiza valor).

### 3. `transformacion-grupo/Estrategia_Transformacion_Northius.md`

Documento **paraguas** del grupo Northius. **Narrativa única**, no índice de pilares. Integra los 4 pilares en una tesis coherente de transformación. Audiencia: Board / inversores.

**Estructura obligatoria** (narrativa fluida, no secciones rígidas):

1. **Tesis central** (1 párrafo): por qué Northius debe transformarse ahora y qué tipo de empresa será al final.
2. **El diagnóstico** (½ página): qué está atacando al grupo hoy — cambio de hábitos de consumo y consulta, velocidad competitiva, comoditización de la formación tradicional, IA generativa redibujando expectativas. Sin victimismo: factual.
3. **Los 4 pilares en orden de importancia decreciente** — cada uno como sección narrativa de ½–1 página que **resume el doc canónico y lo enlaza** (no duplica contenido). Orden:
   1. **GTM** (recuperar competitividad escalable y tecnificada — descubrimiento recurrente de oportunidades, respuesta a competencia, tendencias de empleabilidad). Enlazar a `transformacion-gtm/Estrategia_Transformacion_GTM.md`.
   2. **Producto educativo** (humano como coach + IA generativa para contenido). Enlazar a `transformacion-educativo/Estrategia_Transformacion_Educativo.md`.
   3. **Comercialización** (chat asíncrono + IA siempre presente + humano para cierres de alto valor). Enlazar a `transformacion-comercializacion/Estrategia_Transformacion_Comercializacion.md`.
   4. **Empresas** (partnerships en lugar de colocación; IA para prospección, humano para cierre). Enlazar a `transformacion-empresas/Estrategia_Transformacion_Empresas.md`.
4. **El principio operativo común**: en los 4 pilares se repite la misma decisión arquitectónica — **IA hace lo escalable y administrativo; el humano va a donde aporta el valor diferencial irreproducible**. Argumentar por qué este principio es la columna vertebral de la transformación, no un eslogan.
5. **Secuencia de transformación**: por qué los pilares se priorizan en este orden, qué pilar habilita a cuál, qué ocurre si se ejecutan en paralelo vs. en cascada.
6. **Tesis de inversión**: <!-- TODO usuario: rellenar abajo -->
7. **Riesgos y mitigaciones**: 3–5 riesgos materiales (ejecución, talento, dependencia de IA, resistencia interna, timing de mercado) con mitigación concreta para cada uno.
8. **Hitos medibles**: <!-- TODO usuario: rellenar abajo -->
9. **Decisión que se pide al Board**: cierre con la pregunta concreta — qué aprueba, qué financia, qué timeline se compromete.

---

## Reglas de escritura (aplican a los 3 docs)

- **Sin emojis. Sin viñetas decorativas.** Tablas y diagramas ASCII solo cuando aclaran (ver patrón en GTM doc, sección 1).
- **Frases cortas y argumentadas.** Cada afirmación fuerte debe tener evidencia o lógica al lado. Nada de "creemos que" — afirmar.
- **Sin invención de cifras.** Si necesitas un KPI o un dato de mercado, pídelo o déjalo como `[CIFRA POR VALIDAR]`. Nunca inventes números para un Board.
- **Referencia, no duplica.** En el doc paraguas, cuando un pilar tiene doc canónico, resume y enlaza. No repitas.
- **Tono ejecutivo, no académico.** El Board lee 200 páginas a la semana; cada párrafo justifica su existencia.
- **Pitfalls a evitar** (ver `ace-pitfalls-playbook.md`):
  - `pit-004`: no inventar contenido para docs derivados — extraer del canónico.
  - `pit-005`: este es un doc ejecutivo, no un producto tech: nada de tono "developer".
  - `pit-006`: si haces un diagrama de flujo, distingue **estados / acciones / decisiones / loops**, no cajas planas.

---

## Contexto y referencias obligatorias

Antes de escribir, leer:
- `transformacion-gtm/Estrategia_Transformacion_GTM.md` — pilar 1 ya escrito (canónico).
- `transformacion-comercializacion/Estrategia_Transformacion_Comercializacion.md` — pilar 3 ya escrito (canónico).
- `company/README.md` y `company/org-chart.md` — contexto del grupo.
- `ace-strategies-playbook.md` y `ace-pitfalls-playbook.md` — patrones validados y errores a evitar.

---

## TODO — bloques que requieren input del usuario antes de ejecutar el prompt

Estos dos bloques no los puede inventar el agente. Rellénalos tú antes de lanzar:

### TODO-1: Tesis de inversión (sección 6 del doc paraguas)

> En 5–8 líneas: ¿qué le estás pidiendo al Board que crea? ¿Qué tipo de retorno (margen, crecimiento, valor estratégico, defensibilidad)? ¿En qué horizonte? ¿Cuál es el coste de no hacerlo?

```
Le estoy pidiendo al board que crea en los cuatro aspectos que mencionas. Si creamos un producto más competitivo de una manera más eficiente y que aporte mayor valor, vamos a ver mejor margen por el uso mejor de los recursos, sobre todo los recursos humanos, directos e indirectos. Vamos a ver un crecimiento acorde a cómo esté creciendo el mercado y a posicionarnos por delante de la competencia. Vamos a ser capaces de crecer en oportunidades que ahora no estamos siendo capaces de capturar porque no las vemos o no llegamos a ellas. Vamos, por tanto, a mejorar el valor estratégico con mejores ratios de conversión respecto a la industria y, por tanto, vamos a levantar barreras de entrada en donde están las nuevas barreras de entrada después de la IE, que está sobre todo en la presencial, en el aprovechamiento de la presencialidad y, por tanto, de la creación de un producto educativo más práctico y con la presencia humana de más valor para acompañar realmente a los estudiantes hacia una mejor solución de su problema de empleabilidad. Y en los partnerships que hablamos con las empresas, que nos va a generar una reputación y una marca, una mejora en la marca, tanto en la empleabilidad como en la formación, que serán las nuevas barreras de entrada. Esto es un horizonte temporal medio y largo placista, es un cambio, es una transformación para conseguir un cambio de rumbo que nos saque de este camino de decrecimiento y de contracción de márgenes acorde a las necesidades que estamos viendo de la competitividad con los mercados, con nuestros propios clientes.
```

### TODO-2: Hitos medibles (sección 8 del doc paraguas)

> 4–6 hitos con métrica, valor objetivo y fecha. El Board necesita saber **cuándo sabremos si esto funciona**. Ejemplos del tipo de hito: "Q3 2026 — primera oportunidad detectada por sistema GTM convertida en producto en mercado", "Q4 2026 — ratio coste-de-contenido / hora-de-formación reducido X%", "H1 2027 — N partnerships con cláusula de plazas premium firmados".

```
Lo vamos a saber rápido cuando empecemos a cambiar el modelo de generación del go-to-market, cuando empecemos a ver nuevas oportunidades y seamos capaces de validarlas rápido, entender la captación, adaptar el Value Proposition rápido antes de crear el producto y después ir creando el producto acorde al feedback que vamos recibiendo directamente durante el proceso inicial de comercialización y captación. Ese feedback con la velocidad que nos ofrece la IA generativa es la clave para entender que vamos a poder generar crecimiento y además, estratégicamente, si podemos posicionar correctamente el producto y al humano de inicio de una manera mucho menos directa con la venta y más consultiva y según vamos avanzando y progresando en la venta, vamos consiguiendo perfiles que apoyen mucho más el estudiante porque crece o escala de mejor manera que con el volumen de estudiantes, pues de esa manera vamos a conseguir mayor rentabilidad. Entonces vamos a ver los ratios de rentabilidad unitaria por curso mejorar, vamos a ver cursos con venta unitaria por cursos mucho mejores, el escandallo de cursos se va a ver, va a crecer en volumen, pero va a crecer también con una dispersión de ventas más amplia, no tan concentrada y esto es lo que creemos que durante los próximos dos semestres deberíamos de empezar a ver un cambio en la captación y en la percepción de nuestros productos. Si además introducimos el nuevo modelo de comercialización, pues es lo que nos va a permitir ver ventas más rentables, dejando al humano con un ratio comercial más reducido a un volumen de ventas menor y dejando a aquellos usuarios que tienen una alta propensión de compra porque estamos acertando en la propuesta de valor exactamente para su buyer persona, dejarles ese camino, ese self-service que nos permita reducir los costes de captación y comercialización
```

---

