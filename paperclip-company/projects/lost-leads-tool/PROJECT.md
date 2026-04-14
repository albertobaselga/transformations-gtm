---
name: "Herramienta de Inteligencia de No-Compra"
description: "BD SQLite + API REST + UI para registrar y analizar leads no convertidos de 35mm.es"
owner: tech-pablo
---

# Herramienta de Inteligencia de No-Compra (Lost Leads Tool)

Herramienta interna para capturar y analizar leads que no convirtieron en 35mm.es.

## Stack
- SQLite (DB local)
- Node.js API REST (puerto 3200)
- HTML/CSS/JS vanilla (UI)

## Endpoints
- GET /api/leads — listar (filtros: unprocessed, category, reason, since, until, limit)
- POST /api/leads — crear
- GET /api/leads/:id — detalle
- PUT /api/leads/:id — actualizar
- PATCH /api/leads/:id/process — marcar procesado por agente
- DELETE /api/leads/:id — eliminar
- GET /api/stats — estadisticas agregadas
