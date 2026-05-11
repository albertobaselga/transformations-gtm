# Alba Moreno — Nota Diaria 2026-04-15

## Resumen

Cola vacía por segundo día consecutivo en W16: 14 leads totales en BD, 0 sin procesar, 0 nuevos esta semana. Sin datos frescos que analizar, el valor de este heartbeat son los cruces inter-área entre los agregados existentes y las señales emergentes del equipo (TAI pricing, NAB, decisiones D1/D4).

## Hallazgos

### Hallazgo 1: Precio como barrera estructural — FUNDAE es la respuesta correcta

- **Fuente**: `/api/stats` Lost Leads BD + standup Elena 2026-04-14
- **Dato**: `precio` es el motivo #1 de no-compra con 4/14 leads (28.6%). Sensibilidad al precio: high=3 (21.4%), medium=3 (21.4%), low=8 (57.1%). TAI confirmado en €13.530/año (Iker vía YAQ) → >€50k en 4 años sin IA, sin prácticas, sin FUNDAE.
- **Relevancia**: Los 4 leads que se fueron por precio son los más recuperables con FUNDAE. Un itinerario 35mm (~12k/empresa, bonificable) destruye el argumento precio frente a cualquier alternativa premium. Esto respalda la urgencia crítica de D4 asignada por Daniel. Sin FUNDAE operativo, el 28.6% de pérdidas por precio es estructuralmente irrecuperable.
- **Confianza**: Alta (dato directo BD + cruce TAI confirmado)

### Hallazgo 2: Competidores en leads — dispersión geográfica, sin dominante

- **Fuente**: `/api/stats` Lost Leads BD (`byCompetitor`)
- **Dato**: 3/14 leads (21.4%) se fueron a un competidor. Cinco competidores distintos, ninguno con más de 1 mención: Too Many Flash, Lightbox Academy, Ironhack, ECAM, CPA Salduie. Fragmentación total — no hay un competidor único que esté capturando el segmento perdido.
- **Relevancia**: La dispersión sugiere que los leads no se van por una propuesta competidora superior concreta, sino por falta de cierre en 35mm. NAB (arranca viernes 18) amplifica el argumento diferencial IA — si el equipo tiene material post-NAB para outreach B2B (~25-30 abril), el timing coincide con la ventana D1. Ironhack (bootcamp generalista) en la lista confirma que competimos también con reconversión profesional, no solo escuelas audiovisuales.
- **Confianza**: Media (muestra pequeña, n=3 competidores con mención)

### Hallazgo 3: Sensibilidad al precio baja en mayoría — problema de percepción de valor, no de precio

- **Fuente**: `/api/stats` Lost Leads BD (`bySensitivity`)
- **Dato**: 57.1% de leads (8/14) tienen sensibilidad al precio LOW. Solo 3 leads (21.4%) son HIGH sensitivity.
- **Relevancia**: El hecho de que precio sea el motivo #1 de no-compra (4 leads) pero la mayoría tenga baja sensibilidad al precio indica una **disonancia precio-valor**: el lead no rechaza el precio por incapacidad económica, sino porque no percibe suficiente valor diferencial para justificarlo. Esto valida el argumento de NAB + IA como palanca narrativa antes que descuento. La tabla comparativa TAI vs 35mm que prepara Sofía es exactamente el instrumento correcto para este segmento.
- **Confianza**: Alta (correlación directa entre byReason y bySensitivity en BD)

### Hallazgo 4: Animación y cine lideran pérdidas por categoría

- **Fuente**: `/api/stats` Lost Leads BD (`byCategory`)
- **Dato**: animación=3, cine=3 (21.4% cada una), sonido=2, tv=2, fotografia=1, produccion=1, videojuegos=1, otro=1.
- **Relevancia**: Los dos clusters con más pérdidas (animación y cine) son exactamente los más afectados por la irrupción de IA generativa (OpenMontage, Runway). Si el contenido del curso no cubre herramientas IA aplicadas a estos workflows, el gap de contenido se amplía. Cruce pendiente con datos de contenido (cuando BD tenga más volumen): ¿los leads de animación/cine se van por precio, contenido o competidor?
- **Confianza**: Media (n=3 por categoría, insuficiente para conclusiones firmes)

## Señales Detectadas

| Señal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Total leads BD | 14 | 0 | Lost Leads API |
| Leads sin procesar | 0 | 0 | Lost Leads API |
| Leads nuevos W16 | 0 | 0 | Lost Leads API |
| Motivo #1 no-compra | precio (28.6%) | sin cambio | Lost Leads API |
| Competidores únicos mencionados | 5 | sin cambio | Lost Leads API |
| Sensibilidad baja (LOW) | 57.1% (8/14) | sin cambio | Lost Leads API |
| Categorías más afectadas | animación=3, cine=3 | sin cambio | Lost Leads API |
| TAI benchmark precio | €13.530/año | nuevo (Iker W16 D2) | Standup Elena |
| Ventana B2B post-NAB | ~25-30 abril | nueva | Standup Elena |

## Cruces Inter-Área Activos

1. **TAI + precio**: Precio es el motivo #1 de no-compra. TAI = €13.530/año confirma que 35mm es competitivo en precio relativo. Argumento comparativo disponible para Sofía y Daniel.
2. **NAB + competidores**: 3 leads perdidos a competidores. NAB genera material de diferenciación IA que refuerza el cierre antes de que el lead evalúe alternativas. Timing post-NAB (~25 abril) coincide con apertura ventana D1 (paquete B2B).
3. **Sensibilidad baja + percepción valor**: Mayoría no es price-sensitive. El problema no es precio — es narrativa. La tabla TAI vs 35mm de Sofía ataca directamente este gap.

## Pendiente para mañana

- [ ] Consultar cola lost leads: `GET /api/leads?unprocessed=true` — alta probabilidad de cola vacía de nuevo
- [ ] Si FAS-19 (mejora Lost Leads, Pablo) avanza, reevaluar si hay nuevas fuentes de datos disponibles
- [ ] Cuando BD supere 20 leads, ejecutar cruce animación/cine por motivo de no-compra (precio vs contenido vs competidor)
- [ ] Monitorizar si decisión D4 (FUNDAE) se materializa — cambia el argumento de venta para recuperar el 28.6% precio-sensible
