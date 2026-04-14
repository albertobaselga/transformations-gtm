# Pablo Navarro — Nota Diaria 2026-04-10
## Resumen
Se reprodujeron y aislaron los bloqueos de Google Trends y Reddit que degradaban el monitor diario de tendencias audiovisuales. Quedó implementada una utilidad mínima en Node que resuelve ambos accesos con JSON de salida y verificación automatizada, y el heartbeat diario ya persiste snapshots fechados en JSON + Markdown para reutilizarlos en las notas de Noa.

En un segundo frente tecnico, quedó preparado el piloto de ingestión por email de InfoJobs: la cuenta ya recibe correos de la plataforma, se verificó el remitente operativo observado hoy y quedó implementado un parser mínimo para clasificar mensajes y resolver enlaces trackeados a URL final.

## Hallazgos
### Hallazgo 1: Google Trends no estaba bloqueando por User-Agent sino por falta de sesión inicial
- **Fuente**: `https://trends.google.com/`, `https://trends.google.com/trends/api/explore`
- **Dato**: `curl` directo a `explore` y `api/explore` devolvió HTTP `429`, pero un `GET` previo a la raíz de Trends devolvió cookie `NID` y permitió respuestas HTTP `200` en `api/explore` y `widgetdata/multiline`.
- **Relevancia**: Permite recuperar series semanales en España para las keywords de Noa sin depender de estimaciones manuales.
- **Confianza**: Alta

### Hallazgo 2: Reddit fallaba por forma de petición, no por bloqueo general del endpoint JSON
- **Fuente**: `https://www.reddit.com/r/vfx/top/.json`, `https://old.reddit.com/r/vfx/top/.json`
- **Dato**: `HEAD` a `old.reddit.com` devolvió HTTP `403`, mientras que `GET` a `www.reddit.com` con `User-Agent` explícito devolvió HTTP `200` y payload JSON válido.
- **Relevancia**: El monitor puede volver a extraer señales de comunidades creadoras sin depender de scraping HTML frágil.
- **Confianza**: Alta

### Hallazgo 3: El heartbeat diario ya persiste snapshots fechados para Google Trends y Reddit
- **Fuente**: `node scripts/trends-monitor.mjs heartbeat --date 2026-04-10 --max-keywords 5 --max-subreddits 2 --reddit-limit 3`, `node --test tests/trends-monitor.test.mjs`
- **Dato**: Se añadieron helpers de persistencia y resumen en `scripts/trends-monitor.mjs`; la corrida real generó `sources/trends/snapshots/2026-04-10.json` y `sources/trends/snapshots/2026-04-10.md` con `5` keywords de Google Trends y `2` subreddits de Reddit, y la verificación automatizada queda en `9/9` tests pasando.
- **Relevancia**: El heartbeat de tendencias ya deja histórico reutilizable por fecha sin tener que rerunear el monitor ni pegar manualmente el output bruto en la nota del analista.
- **Confianza**: Alta

### Hallazgo 4: InfoJobs ya envio el correo de verificacion y fija un remitente real para el piloto
- **Fuente**: Gmail `read_email` del mensaje `19d76c00ef60c314`; ayuda oficial de InfoJobs `¿Por que he dejado de recibir ofertas de empleo en mi email?`; ayuda oficial `Como saber si una llamada en nombre de InfoJobs es real`
- **Dato**: El 2026-04-10 a las `09:36:30Z` entro un correo de verificacion desde `pushinfojobs@comms.infojobs.net`. La ayuda oficial sigue mencionando remitentes `@infojobs.net` como `ofertas@push.infojobs.net`, asi que el piloto debe aceptar ambas familias hasta capturar una alerta de empleo real.
- **Relevancia**: Ya existe un canal de email operativo y podemos dejar preparado el ingestor sin depender de scraping HTML ni de la API desactivada.
- **Confianza**: Alta

### Hallazgo 5: El parser minimo ya clasifica correos InfoJobs y resuelve enlaces trackeados
- **Fuente**: `node --test scripts/infojobs-email-pilot.test.mjs`; `/home/abf/gtm-ia/projects/lost-leads-tool/scripts/infojobs-email-pilot.mjs`
- **Dato**: Se anadio `scripts/infojobs-email-pilot.mjs` con salida normalizada (`messageId`, `emailType`, `sender`, `urls`, `trackingLinks`, `resolvedTrackingLinks`, `offerCandidates`) y verificacion automatizada en `4/4` tests pasando. El flujo ya acepta un JSON de Gmail y puede seguir redirecciones de `link.comms.infojobs.net` hasta la URL final.
- **Relevancia**: Cuando llegue la primera alerta real, el monitor podra capturarla como input estructurado el mismo dia sin tener que redisenar el pipeline.
- **Confianza**: Alta

## Senales Detectadas
| Senal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Google Trends `api/explore` | `429` sin sesion, `200` con cookie `NID` | Nueva causa raiz confirmada | Reproduccion local |
| Google Trends `widgetdata/multiline` | `200` con sesion reutilizada | Nuevo acceso funcional | Reproduccion local |
| Reddit JSON `www.reddit.com` | `200` con `GET` + `User-Agent` | Nuevo acceso funcional | Reproduccion local |
| Reddit `old.reddit.com` con `HEAD` | `403` | Nueva causa raiz confirmada | Reproduccion local |
| Heartbeat persistido | `2026-04-10.json` + `2026-04-10.md` generados | Nueva automatizacion diaria | `scripts/trends-monitor.mjs heartbeat` |
| Buzon InfoJobs operativo | `1` correo real recibido (`account-verification`) | Nueva fuente habilitada | Gmail |
| Parser email InfoJobs | `4/4` tests pasando | Nueva automatizacion lista | `node --test scripts/infojobs-email-pilot.test.mjs` |

## Pendiente para manana
- [ ] Revisar si conviene podar keywords con largos tramos `hasData=false` para que el resumen Markdown no arrastre comparativas demasiado antiguas.
- [ ] Si una IP concreta vuelve a caer en `429`, exportar `GOOGLE_TRENDS_COOKIE` desde un navegador real y validar continuidad del flujo.
- [ ] Crear al menos una alerta real por cluster en InfoJobs y capturar el primer correo `job-alert` como fixture para completar la extraccion de `titulo`, `empresa`, `localizacion`, `fecha` y `URL`.

## Sin senal nueva (si aplica)
Fuentes revisadas: ninguna. Se detectaron cambios tecnicos significativos en la forma de acceso.
