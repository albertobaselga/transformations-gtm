 Bloque 1: Infraestructura Paperclip

  1. ¿Tienes ya un servidor Paperclip corriendo? ¿O hay que montarlo desde cero? Si ya existe, ¿cuál es la URL/puerto? 
    -> Si, localhost:3100
  2. ¿Ya tienes experiencia creando compañías en Paperclip? Veo que en conversaciones anteriores trabajamos con Paperclip (los hot paths en memoria mencionan paperclip/cli y paperclip/server). ¿Usamos esa misma instancia?
    -> Si

  ---
  Bloque 2: Estructura organizativa

  3. ¿Cuántos niveles jerárquicos quieres? Mi propuesta inicial sería algo sencillo como:
    - CEO (coordina todo, revisa informes semanales)
    - Heads de función (2-3 roles: Inteligencia de Mercado, Análisis de Portfolio, Operaciones)
    - Analistas especializados (uno por fuente de inteligencia)

    -> Si, me cuadra pero revisa la pregunta 4 para ver los HEads que realemnte necesitas, asegurate que todos tengan mentalidad moderna hands-on. No quiero middle managers que solo estén pensando, quiero sean estrategas y operadores.

  ¿Te parece esta profundidad o quieres algo más plano/más profundo?
  4. Las 6 fuentes de inteligencia, ¿quieres un agente por fuente o agrupar? Opciones:
    - Un agente por fuente (6 analistas): máxima especialización
    - Agrupar por afinidad (ej: empleo+empleabilidad, competidores+tendencias, corporativa+no-compra): 3 analistas
    - ¿Otra agrupación?

    -> No ya que dentro de cada fuente de inteligencia puede que tengas varias fuentes reales (empleo: varios job-boards). Asegurate de tener una estructura de middle managers para cubrir la potencial variablidad de fuentes.

  5. ¿Quién hace la síntesis (clusters → oportunidades)? ¿Un agente dedicado "Estratega de Oportunidades" o es función del CEO?

    -> Es una función específica y el máximo experto es el propio CEO para darle el "color" al ejercicio de sintesis estratégico. Necesitará su propio equipo de estrategia para analizar todas las fuentes y sacar las conclusiones y las recomendaciones. Tambien necesitas en este punto alguien experto de la marca o nicho origen. Para esta primera empresa, el área es el Audiovisual y la marca origen contra la que hacer las recomendaciones es 35mm.es (una marca del grupo NOrthius)

  ---
  Bloque 3: Workspace y documentos

  6. Estructura de carpetas en este repo: ¿Algo como esto te encaja?
  /home/abf/gtm-ia/
  ├── company/                    # Workspace compartido de la compañía
  │   ├── reports/                # Informes semanales
  │   ├── opportunities/          # Oportunidades detectadas
  │   └── portfolio-analysis/     # Comparación vs portfolio actual
  ├── projects/                   # Workspaces por proyecto
  │   ├── intelligence-sources/   # Proyecto de recolección
  │   ├── opportunity-synthesis/  # Proyecto de síntesis
  │   └── weekly-report/          # Proyecto del informe semanal

  -> Si, me cuadra, y con todo fechado por Runs semanales. 

  7. ¿Qué documentos "privados" vs "compartidos"? ¿Los privados son notas de trabajo de cada agente y los compartidos son los entregables finales?

  -> Correcto. Aunque todo es público, lo considerado privado es lo que no se usa para compartir con el resto de agentes. Todo en ficheros Markdown, con naming convention (es como si cada agente tuviera una wiki/notion propio, y luego hubiera uno de proyecto para colaborar.)

  ---
  Bloque 4: Proyectos y cadencia

  8. ¿El ciclo semanal es el principal? Según la estrategia, cada semana se genera un reporte. ¿Quieres que los triggers/crons lancen el ciclo completo semanalmente?

  -> Si, cadencia de todo el ciclo de reporting semanal. Hay que ajustar que es diario recurrente y que parte es consolidar toda l ainfo diaria en un reporte semanal. Se trata de hacer investigacion iterativa todos los dias y una vez a la semana "publciar" un informe acumulado/incremental. Así, tras 4 semanas, el cuarto informe, sera el acumulado de toda la inteligencia generada en todos los dias previos + informes de sisntesis semanales previos. Todos construyen conocimiento incremental sobre el área/nicho/producto/oprotunidades...

  9. ¿Qué nichos/áreas formativas arrancamos? La estrategia menciona: audiovisual, oposiciones, tecnología, negocio, salud... ¿Empezamos con todos o con un subset para pilotar?

  -> Empezamos con el nicho Audiovisual en España, y la marca propia sobre la que hacer el assesment de oportunidades es 35mm.es (un amarca del grupo Northius)

  10. ¿Hay fuentes de datos reales ya disponibles? (APIs de empleo, scraping de competidores, datos de búsquedas, CRM con leads no convertidos...) ¿O los agentes trabajan inicialmente con
  análisis simulado/manual?

  -> Hayq ue construirlo todo, por eso vas a necesitar un pequeño equipo de Tecnología propio para desarrollar y mantener herramientas internas. La parte de Leads no convertidos requerirá de una herramienta que nutriremos desde el exterior, así que tienes que desarrollar la herramienta interna para que un humano haga la investigacion de cada Lead no convertido y tus agentes extraigan todos los dias la info nueva  y la incorporen a su analisis (tendencias, volumtrias, categorizacion, etc). Esta herramienta tendrá la info básica del lead, el curso al que optava de 35mm.es, un campo con la transcripcion de las comunicaciones si están disponibles, y unas notas de la persona que cerró la oportunidad perdida con los motivos que pensó que eran. La herramienta tiene que tener un BD local para gestionar esa info programaticamente por los agentes y una UI basica para introducir los datos.

  ---
  Bloque 5: Integración con el resto de fases

  11. ¿La compañía de Fase 1 es independiente o debe conectar con compañías de Fase 2-4? ¿Habrá una compañía por fase o una sola compañía con proyectos por fase?

  -> La compñía solo debe preocuparse de producir el output de la Fase 1 con el informe de recomendaciones según lo descrito en el doc de la Fase 1 y debe de hacerlo para un nicho/empresa, en este caso para 35mm. Habrá más empresas de la Fase1 para otras marcas y mercados del grupo Northius.