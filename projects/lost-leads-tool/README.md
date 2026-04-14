# Lost Leads Tool

Herramienta de inteligencia de no-compra para 35mm.es. Usa SQLite local, API REST en Node.js y una UI HTML vanilla servida desde `http://localhost:3200`.

## Estructura

- `api/server.mjs`: servidor HTTP, CRUD y endpoints de salud/estadisticas.
- `db/init-db.mjs`: inicializacion del esquema SQLite.
- `ui/index.html`: interfaz HTML vanilla.
- `systemd/lost-leads-tool.service.template`: plantilla de servicio gestionado.
- `scripts/install-user-service.sh`: instala y arranca la unidad `systemd --user`.

## Comandos

```bash
npm install
npm test
npm start
```

## Utilidad InfoJobs

Cuando InfoJobs bloquee el HTML publico con captcha, usa la utilidad `scripts/infojobs-offers.mjs` para diagnosticar el bloqueo y consultar la API oficial con credenciales de desarrollador.

Estado operativo a fecha 2026-04-10:

- `detect` es util hoy para confirmar captcha/anti-bot.
- `search` queda retenido como cliente experimental. El board ha confirmado que la InfoJobs Developer API esta desactivada para nuestro caso, asi que ahora mismo no hay provisionado viable de credenciales.
- Ruta recomendada para inspeccion diaria: usar alertas de empleo por email de InfoJobs y procesar esos correos como feed de entrada.

Rutas operativas, ordenadas por prioridad:

1. Alertas de empleo por email de InfoJobs.
2. Sesion humana en Chrome con perfil persistente, para casos puntuales o validacion manual.
3. Descubrimiento indirecto por buscadores externos, solo como apoyo y nunca como fuente primaria.

### Piloto de ingestión por email

Estado verificado el 2026-04-10:

- El buzon ya recibio el alta/verificacion de InfoJobs.
- El remitente observado hoy es `pushinfojobs@comms.infojobs.net`.
- La ayuda oficial de InfoJobs sigue citando remitentes `@infojobs.net` como `ofertas@push.infojobs.net`, asi que durante el piloto conviene aceptar ambas familias hasta capturar la primera alerta real.
- Aun no hay un correo de alerta de empleo en la bandeja; el parser queda listo para clasificar y resolver enlaces trackeados en cuanto llegue la primera muestra.

Comando del piloto:

```bash
node scripts/infojobs-email-pilot.mjs extract /ruta/al/gmail-message.json --resolve-links
```

Entrada esperada:

- JSON con la forma de `gmail_read_email`: `id`, `from_`, `subject`, `email_ts`, `body`.

Salida normalizada:

- `messageId`: id del mensaje origen.
- `emailType`: `account-verification`, `job-alert` o `unknown`.
- `sender`: remitente normalizado (`displayName`, `email`).
- `urls`: enlaces detectados en el cuerpo.
- `trackingLinks`: subconjunto de enlaces de tracking de InfoJobs.
- `resolvedTrackingLinks`: URLs finales tras seguir redirecciones.
- `offerCandidates`: URLs finales de InfoJobs candidatas a oferta.

Flujo operativo minimo:

1. Crear la busqueda guardada por cluster dentro de InfoJobs y activar la alerta por email.
2. Buscar en Gmail mensajes recientes con `from:(pushinfojobs@comms.infojobs.net OR ofertas@push.infojobs.net OR no-reply@newsbz.infojobs.net)`.
3. Leer el correo completo y guardar el JSON bruto del mensaje.
4. Ejecutar `infojobs-email-pilot.mjs extract ... --resolve-links`.
5. Si `offerCandidates` devuelve URLs finales, pasarlas al monitor diario como input bruto; si el mensaje solo clasifica como `account-verification` o `unknown`, conservar el JSON para afinar el parser sin perder la muestra.

Diagnostico del bloqueo publico:

```bash
node scripts/infojobs-offers.mjs detect https://www.infojobs.net/ofertas-trabajo/creacion-contenidos
```

Busqueda por API oficial, solo si InfoJobs reabre acceso:

```bash
INFOJOBS_CLIENT_ID=tu_client_id \
INFOJOBS_CLIENT_SECRET=tu_client_secret \
node scripts/infojobs-offers.mjs search --query "editor video" --max-results 10
```

Variables requeridas:

- `INFOJOBS_CLIENT_ID`
- `INFOJOBS_CLIENT_SECRET`

Salida:

- `detect` devuelve JSON con `blocked`, `blockType`, `blockProvider` y `requestId`.
- `search` devuelve JSON normalizado con paginacion y `offers[]`.

Notas operativas:

- InfoJobs documenta que las alertas de empleo se crean a partir de una busqueda guardada y llegan por email.
- InfoJobs tambien documenta que, si detecta comportamiento de bot, recomienda navegador actualizado, modo incognito y limpieza de cookies.

## Endpoints

- `GET /`: UI HTML
- `GET /api/health`: estado del proceso y comprobacion de base de datos
- `GET /api/leads`: listado de leads con filtros
- `POST /api/leads`: alta de lead
- `GET /api/leads/:id`: detalle de lead
- `PUT /api/leads/:id`: actualizacion
- `PATCH /api/leads/:id/process`: marcado como procesado por agente
- `DELETE /api/leads/:id`: borrado
- `GET /api/stats`: agregados para analisis

## Servicio persistente

Instala la unidad de usuario y arrancala con:

```bash
./scripts/install-user-service.sh
systemctl --user status lost-leads-tool.service
curl http://localhost:3200/api/health
```
