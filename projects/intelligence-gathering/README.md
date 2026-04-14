Proyecto de recolección diaria de inteligencia desde las 6 fuentes. Cada analista produce notas diarias en daily-notes/YYYY-MM-DD/.

## Soporte InfoJobs

Si InfoJobs devuelve captcha en rutas publicas, usa la utilidad:

```bash
cd /home/abf/gtm-ia/projects/lost-leads-tool
node scripts/infojobs-offers.mjs detect https://www.infojobs.net/ofertas-trabajo/creacion-contenidos
```

Con credenciales de desarrollador provisionadas:

```bash
cd /home/abf/gtm-ia/projects/lost-leads-tool
INFOJOBS_CLIENT_ID=tu_client_id \
INFOJOBS_CLIENT_SECRET=tu_client_secret \
node scripts/infojobs-offers.mjs search --query "creacion de contenidos" --max-results 20
```

Nota operativa 2026-04-10:

- El board confirma que la InfoJobs Developer API esta desactivada para nuestro caso.
- Mantener `detect` como diagnostico tecnico.
- No planificar el monitor diario de InfoJobs sobre `search` salvo que InfoJobs reabra acceso oficial.
- Ruta recomendada para seguir inspeccionando ofertas: crear alertas de empleo por email en InfoJobs y procesar esos correos diariamente.
- Fallback tecnico: reutilizar una sesion humana de Chrome con perfil persistente para validaciones puntuales, no como feed primario.

Piloto email listo:

```bash
cd /home/abf/gtm-ia/projects/lost-leads-tool
node scripts/infojobs-email-pilot.mjs extract /ruta/al/gmail-message.json --resolve-links
```

El piloto actual clasifica el tipo de correo, extrae enlaces del cuerpo y resuelve redirecciones trackeadas hasta la URL final de InfoJobs. Mientras no llegue la primera alerta real, usarlo para capturar muestras del buzon y fijar el contrato de ingestión sin depender del HTML publico bloqueado.

## Soporte Google Trends y Reddit

Para el monitor de tendencias emergentes:

```bash
cd /home/abf/gtm-ia/projects/intelligence-gathering
node scripts/trends-monitor.mjs google --keyword "curso IA video"
node scripts/trends-monitor.mjs reddit --subreddit r/videoediting --limit 3
node scripts/trends-monitor.mjs daily --max-keywords 3 --max-subreddits 2 --reddit-limit 3
node scripts/trends-monitor.mjs heartbeat --date 2026-04-10
```

Notas operativas:

- El cliente de Google Trends precalienta una sesión contra `https://trends.google.com/` y reutiliza la cookie antes de llamar a `api/explore` y `widgetdata`.
- Si Google sigue devolviendo `429` para una IP concreta, se puede aportar una cookie válida desde navegador con `GOOGLE_TRENDS_COOKIE='NID=...'`.
- Reddit usa el endpoint JSON de `https://www.reddit.com/r/<subreddit>/top/.json` con `GET` y `User-Agent` explícito. Evitar `HEAD` y evitar depender de `old.reddit.com` como ruta principal.
- `heartbeat` persiste dos artefactos por fecha en `sources/trends/snapshots/`: un snapshot JSON completo (`YYYY-MM-DD.json`) y un resumen Markdown (`YYYY-MM-DD.md`) listo para consumo del analista.
- Si no se pasa `--date`, el heartbeat deriva la fecha usando `TRENDS_HEARTBEAT_TIMEZONE` o `Europe/Madrid` por defecto.
