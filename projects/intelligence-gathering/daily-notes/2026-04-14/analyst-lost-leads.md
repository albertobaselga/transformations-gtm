# Alba Moreno — Nota Diaria [2026-04-14]

## Resumen

W16 D2 (martes). Cola vacía — 0 leads sin procesar. BD: 14 (sin cambios desde W15). Standup CEO W16 D1 (2026-04-13) leído — sin standup D2 publicado aún. Intel cruzada: precio #1 razón de no-compra (28,6%), sensibilidad baja al precio en 57% de los casos — la objeción no es precio absoluto sino percepción valor/precio. Cruce con intel Iker (SAE sin FUNDAE/IA) refuerza argumento diferenciador para el closer.

## Estado de la cola Lost Leads

| Métrica | Valor |
|---------|-------|
| Leads totales en BD | 14 |
| Leads procesados | 14 (100%) |
| Leads sin procesar | 0 |
| Última ingesta | W15 (2026-04-09/10) |
| Objetivo significancia estadística | 50+ leads |
| Gap hasta objetivo | -36 leads |

## Hallazgos

### Hallazgo 1: Sin nuevos datos — baseline W15 vigente
- **Fuente**: `GET http://localhost:3200/api/leads?unprocessed=true` + `GET http://localhost:3200/api/stats` — 2026-04-14
- **Dato**: 0 leads sin procesar. Total BD: 14. `recentWeek`: 0.
- **Stats agregadas completas**:
  - Por razón: precio (4, 28,6%) · competidor (3, 21,4%) · contenido (2) · formato (2) · timing (2) · otro (1)
  - Por categoría: animación (3) · cine (3) · sonido (2) · tv (2) · fotografía/producción/videojuegos/otro (1c/u)
  - Por competidor: Too Many Flash, Lightbox Academy, Ironhack, ECAM, CPA Salduie (1 lead c/u)
  - Por sensibilidad al precio: baja (8, 57%) · media (3) · alta (3)
- **Confianza**: Alta (datos directos de API)

### Hallazgo 2 (cruce intel): TAI €13.530/año — primer precio real del sector premium, cuantifica el argumento B2B
- **Fuente**: Nota Marcos W16 D2 — dato de Iker (yaq.es)
- **Dato**: Grado Oficial en Cinematografía TAI = €13.530/año (240 ECTS, 4 años, bilingüe). Coste total estimado >€50.000. Diplomatura TAI ~€10.200/año (sombra).
- **Relevancia para no-compra**: El lead #2, #5, #10 (animación, precio-sensitivity alta) perdieron por precio. Ahora disponemos de un benchmark concreto: un itinerario IA de 35mm (~€12k/empresa, nivel B2B) equivale a 1 año de Grado TAI — sin IA, sin prácticas en productora, sin FUNDAE. Cuando entren futuros leads con objeción de precio, este dato cuantifica el diferencial de valor. Pendiente: Sofia prepara tabla comparativa para Daniel/brief PRISA — relevante si D2 (approach PRISA) se aprueba esta semana.
- **Confianza**: Media-Alta (fuente YAQ es referencia, no fuente primaria TAI)

### Hallazgo 3 (cruce intel): NAB 2026 en 4 días — trigger B2B potencial para futuros leads
- **Fuente**: Nota Marcos W16 D2 — dato de Iker (múltiples fuentes broadcast)
- **Dato**: 9+ expositores NAB con IA como eje central. Broadcast pivota a AI-native de forma masiva.
- **Relevancia para no-compra**: NAB puede generar señales en dos vectores: (1) herramientas nuevas que aparecerán como "contenido no disponible" en futuros leads (competencia de contenido), y (2) interés corporativo en formación IA post-NAB que puede incrementar el volumen de leads B2B. Si D1 (paquete B2B) se aprueba esta semana, la ventana NAB es el mejor momento para activar el canal.
- **Confianza**: Alta

## Señales a monitorizar

| Evento | Fecha | Relevancia para no-compra |
|--------|-------|--------------------------|
| Open Day CES "The Next You Vol II" | 18/04 (viernes) | Si activan landing matrícula/precios → posibles leads perdidos por competidor |
| NAB 2026 | 18-22/04 | Herramientas IA nuevas → "contenido no disponible" en futuros leads; trigger B2B |
| Standup W16 D2 | Hoy (pendiente) | Integrar cuando aparezca |
| Decisiones D1-D4 (Elena) | Esta semana | D1 (B2B), D3 (CRM), D4 (FUNDAE) desbloquean el frente |

## Pendiente

- [x] Consultar `/api/leads?unprocessed=true` — 2026-04-14, cola vacía
- [x] Leer standup CEO — W16 D1 (2026-04-13) leído; W16 D2 no publicado aún
- [ ] Leer standup W16 D2 cuando se publique
- [ ] Monitorizar FAS-19 (Pablo) — mejora operativa Lost Leads API
- [ ] Pendiente D3 (Elena): acceso CRM — bloqueador cruce leads vs BOE targets
- [ ] Pendiente D4 (Elena): homologación FUNDAE — solución estructural leads animación precio-sensitivity alta
