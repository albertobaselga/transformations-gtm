# Spec: Agente Comms — Publicacion en Notion

Fecha: 2026-04-10
Ultima revision: 2026-04-10 (v2 — actualizado tras reorg routines y naming convention)
Estado: Aprobado

## Resumen

Nuevo agente "Sara Campos" (Comms & Publishing) que automatiza la publicacion de standups diarios e informes semanales en Notion. El CEO escribe en Markdown en el repo; Sara los convierte a paginas Notion estructuradas via MCP.

## Contexto de routines (post-reorg)

La compania tiene 13 routines activas organizadas en 3 cadencias:
- **Diario L-V**: 3 recolecciones (08:00) + lost leads (09:00) + 3 revisiones heads (09:00) + standup CEO (18:00)
- **Jueves**: 3 pre-sintesis heads + resumen volumetrias Marina (16:00)
- **Viernes**: Sintesis + Informe Semanal fusionada (10:00)

Sara se ejecuta DESPUES de que el CEO publique sus documentos.

## Decisiones de diseno

| Decision | Opcion elegida | Alternativas descartadas |
|----------|---------------|-------------------------|
| Canal de distribucion | Notion (unico) | Slack, Email, Notion+Slack |
| Quien publica | Agente dedicado "Comms" | CEO directamente, script automatico |
| Engine del agente | Claude Sonnet | Haiku (descartado por usuario), Opus (overkill) |
| Notion workspace | Existente (3e05bd0d8ec34f1cb88fc3a67d8e8e4d) | Crear nuevo |

## Agente: Sara Campos (agente #14)

| Config | Valor |
|--------|-------|
| Nombre | Sara Campos |
| Titulo | Comms & Publishing Specialist |
| Engine | claude_local / claude-sonnet-4-6 |
| Heartbeat | event-driven (intervalSec: 0) |
| Chrome | No |
| Skills | paperclip, para-memory-files |
| maxTurnsPerRun | 100 |
| Reporta a | CEO Elena Voss |
| MCP requerido | Notion (NOTION_API_KEY como Secret en Paperclip) |

### Personalidad

Eficiente, precisa, orientada al detalle. Su trabajo es transformar Markdown en paginas Notion impecables. No investiga, no opina — ejecuta la publicacion con precision. Verifica que cada seccion del Markdown se traduce correctamente a bloques Notion. Nunca deja una publicacion a medias. Sigue el naming convention de la compania estrictamente.

## Estructura Notion

Workspace: `3e05bd0d8ec34f1cb88fc3a67d8e8e4d`

### BD 1: Standups Diarios

| Propiedad | Tipo Notion | Descripcion |
|-----------|-------------|-------------|
| Titulo | Title | "Standup YYYY-MM-DD" |
| Fecha | Date | Dia del standup |
| Estado Plan | Select (En track / Retos / Bloqueado) | Estado general del plan semanal |
| Retos Activos | Number | Cantidad de bloqueos/retos |
| Areas | Multi-select | Areas formativas mencionadas |

Contenido de la pagina: el Markdown del standup convertido a bloques Notion (headings, bullets, tablas, callouts para heads-up).

### BD 2: Informes Semanales

| Propiedad | Tipo Notion | Descripcion |
|-----------|-------------|-------------|
| Titulo | Title | "Semana YYYY-WNN" |
| Fecha | Date | Viernes de publicacion |
| Clusters Nuevos | Number | Clusters identificados esta semana |
| Recomendaciones | Number | Total recomendaciones |
| Pasan a Testeo | Number | Oportunidades que avanzan |
| TAM Transaccional | Number | Suma volumetrias busquedas transaccionales |
| TAM Aspiracional | Number | Suma volumetrias busquedas aspiracionales |
| Tipo | Select (Semanal / Especial) | Tipo de informe |

Contenido: el informe semanal completo convertido a bloques Notion. Debe incluir las secciones obligatorias del template:
1. Resumen Ejecutivo
2. Senales por Fuente (6 fuentes + search demand de Marina)
3. Clusters Identificados
4. TAM Estimado por Cluster (con volumetrias cuantitativas de Marina Reyes)
5. Comparacion vs Portfolio 35mm.es (tabla obligatoria: Oportunidad | Cobertura | Gap | Tipo)
6. Recomendaciones (Nueva / Complementar / Reestructurar)
7. Decisiones (Pasa a testeo de demanda / Se mantiene en investigacion)
8. Carried Forward (top 10 semanas anteriores)

## Routines de Sara

| Routine | Cron | Descripcion | Dependencia |
|---------|------|-------------|-------------|
| Publicar Standup en Notion | `30 18 * * 1-5` (L-V 18:30 CET) | Lee standup del CEO (18:00) y publica | Standup CEO (R5, 18:00) |
| Publicar Informe en Notion | `0 12 * * 5` (Viernes 12:00 CET) | Lee informe semanal y publica | Sintesis+Informe (R2, 10:00) |

Nota: La routine del informe se movio de 14:30 a 12:00 porque la routine de sintesis+informe ahora es una sola (viernes 10:00, fusionadas R2+R3). Sara espera 2h para dar margen al CEO.

## Archivos fuente (naming convention)

| Documento | Ruta exacta | Producido por |
|-----------|-------------|---------------|
| Standup diario | `company/standups/YYYY-MM-DD-standup.md` | CEO Elena Voss (R5, 18:00) |
| Informe semanal | `company/reports/week-YYYY-WNN/informe-semanal.md` | CEO Elena Voss (R2, 10:00 viernes) |

Nombres de archivo de notas diarias de analistas (referencia para Sara si necesita publicar notas individuales en el futuro):
- `analyst-job-postings.md` (Adrian Torres)
- `analyst-employability.md` (Sofia Blanco)
- `analyst-competitors.md` (Iker Molina)
- `analyst-trends.md` (Noa Herrera)
- `analyst-corporate.md` (Raul Vega)
- `analyst-lost-leads.md` (Alba Moreno)
- `analyst-search-demand.md` (Marina Reyes)

## Flujo por heartbeat

1. Detectar tipo de publicacion (standup o informe) segun la issue que la desperto
2. Leer el archivo Markdown del repo usando la ruta exacta de la tabla anterior
3. Si el archivo no existe: comentar en la issue que el CEO no ha publicado aun, poner issue en blocked
4. Parsear secciones del Markdown
5. Crear pagina en la BD Notion correspondiente via MCP:
   - Rellenar propiedades de la BD (fecha, metricas extraidas del contenido)
   - Para informes: extraer TAM transaccional/aspiracional de la seccion de volumetrias
   - Convertir Markdown a bloques Notion (headings, paragraphs, bulleted_list_item, table, callout)
6. Comentar en la issue con el link a la pagina Notion creada
7. Marcar issue como done

## Requisitos previos

1. **Notion Integration Token**: crear una integracion interna en Notion (https://www.notion.so/my-integrations) con permisos de lectura+escritura
2. **Compartir workspace**: compartir el workspace con la integracion
3. **Secret en Paperclip**: guardar el token como `NOTION_API_KEY` via `POST /api/companies/{companyId}/secrets` (token real gestionado fuera del repo)
4. **Crear las 2 BDs en Notion**: Sara las creara en su primer heartbeat si no existen
5. **MCP Notion**: configurar en el adapter del agente (via env o skill)

## Tareas de implementacion

1. Crear agente Sara Campos en Paperclip (API) — agente #14, reporta a CEO
2. Escribir AGENTS.md con instrucciones de publicacion + naming convention
3. Crear Secret NOTION_API_KEY en Paperclip
4. Crear las 2 routines con triggers (18:30 standup, 12:00 viernes informe)
5. Crear las 2 BDs en Notion (manual o via primer heartbeat de Sara)
6. Crear issue kick-off para Sara
7. Verificar publicacion end-to-end con un standup de test
