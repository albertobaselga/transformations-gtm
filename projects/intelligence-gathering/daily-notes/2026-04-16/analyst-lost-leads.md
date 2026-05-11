# Alba Moreno — Nota Diaria 2026-04-16

## Resumen

Cola vacía por tercer día consecutivo en W16: 14 leads totales en BD, 0 sin procesar, 0 nuevos esta semana. Sin datos frescos, el valor de este heartbeat es la reinterpretación de los agregados existentes a la luz de la confirmación de SHIFTA FUNDAE (hoy, standup Elena) — que invalida un supuesto clave del análisis de precio de ayer.

## Hallazgos

### Hallazgo 1: SHIFTA FUNDAE — colapso del argumento precio diferencial

- **Fuente**: Standup Elena 2026-04-16 + `/api/stats` Lost Leads BD
- **Dato**: SHIFTA confirmado como bonificable FUNDAE (web oficial, verificado por Marcos). Precio es motivo #1 de no-compra en 35mm: 4/14 leads (28.6%). Ayer el argumento para recuperar esos 4 leads era "35mm es bonificable FUNDAE, los competidores no". Hoy ese argumento ya no es exclusivo de 35mm.
- **Relevancia**: El 28.6% de pérdidas por precio (4 leads) era el segmento más recuperable. Con SHIFTA también en FUNDAE, el argumento de recuperación vía bonificación pierde fuerza diferencial. Los diferenciadores reales de 35mm frente a SHIFTA se reducen a: (1) prácticas en productora real y (2) formato intensivo. Esto debe reflejarse en el script de objeciones del closer cuando un lead compara precio con SHIFTA. La decisión D4 (FUNDAE operativo en 35mm) sigue siendo necesaria, pero ahora como paridad competitiva, no como ventaja.
- **Confianza**: Alta (confirmación directa en standup + dato BD verificado)

### Hallazgo 2: Disonancia precio-valor — hipótesis reforzada por contexto SEPE

- **Fuente**: `/api/stats` Lost Leads BD (`bySensitivity`) + standup Elena (SEPE marzo 2026)
- **Dato**: 57.1% de leads (8/14) con sensibilidad al precio LOW. Paro mínimo en 18 años (SEPE marzo 2026), contratos +12.4% interanual. Precio es motivo #1 pero la mayoría no es price-sensitive.
- **Relevancia**: El contexto macroeconómico (empleo fuerte, mercado laboral activo) refuerza que el problema de los 4 leads precio no es capacidad económica — es percepción de valor insuficiente. En un mercado con paro mínimo histórico, el "no puedo pagarlo" es menos frecuente que "no lo veo suficientemente justificado". Argumento de venta correcto: demostrar ROI concreto (salario medio sector post-formación), no bajar precio. NAB T-2 (arranca 18/04) puede generar material IA concreto para reforzar ese argumento.
- **Confianza**: Alta (correlación directa bySensitivity + bySeason BD + dato SEPE externo)

### Hallazgo 3: Competidores — Ironhack como señal de segmento de reconversión

- **Fuente**: `/api/stats` Lost Leads BD (`byCompetitor`) — sin cambio desde ayer
- **Dato**: 3/14 leads (21.4%) a competidor. 5 competidores distintos (n=1 cada uno): Too Many Flash, Lightbox Academy, Ironhack, ECAM, CPA Salduie. SHIFTA ausente de la lista — no ha captado leads perdidos de 35mm (todavía).
- **Relevancia**: SHIFTA no aparece en los leads perdidos capturados hasta ahora, pero con la confirmación FUNDAE de hoy podría empezar a aparecer. Ironhack (bootcamp generalista de tecnología) confirma que hay un segmento de reconversión profesional que evalúa 35mm como alternativa a formación tech, no solo audiovisual. Este segmento responde a argumentos de empleabilidad más que a calidad de contenido audiovisual. Cruce pendiente: cuando BD supere 20 leads, identificar si los leads de reconversión se concentran en alguna categoría específica.
- **Confianza**: Media (n=3 competidores con mención, muestra pequeña)

### Hallazgo 4: Input W16 synthesis — estado no-compra para Daniel

- **Fuente**: Standup Elena + datos BD actuales
- **Dato**: Síntesis W16 mañana viernes. Elena necesita input de Daniel (demanda + no-compra) antes de las 16:00 de hoy. Estado no-compra en W16: 0 leads nuevos, 14 total. Motivo dominante: precio (28.6%), sin cambio. Novedad crítica: SHIFTA FUNDAE cambia el marco competitivo para leads precio.
- **Relevancia**: Para la síntesis semanal, el mensaje clave de no-compra en W16 es: (1) volumen estancado (0 nuevos leads), (2) precio sigue siendo el motivo #1, (3) el argumento FUNDAE ya no es diferencial exclusivo tras confirmación SHIFTA — los cierres futuros con objeción precio deben pivotar a ROI y prácticas en productora real.
- **Confianza**: Alta

## Señales Detectadas

| Señal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Total leads BD | 14 | 0 | Lost Leads API |
| Leads sin procesar | 0 | 0 | Lost Leads API |
| Leads nuevos W16 | 0 | 0 | Lost Leads API |
| Motivo #1 no-compra | precio (28.6%) | sin cambio | Lost Leads API |
| Competidores únicos mencionados | 5 | sin cambio | Lost Leads API |
| SHIFTA en BD competitors | 0 menciones | sin cambio | Lost Leads API |
| Sensibilidad baja (LOW) | 57.1% (8/14) | sin cambio | Lost Leads API |
| SHIFTA FUNDAE | confirmado hoy | **NUEVO** | Standup Elena 16/04 |
| Diferenciadores 35mm vs SHIFTA | 2 (prácticas + intensivo) | **-1 vs ayer** | Standup Elena 16/04 |
| Paro SEPE marzo 2026 | mínimo 18 años | nuevo | Standup Elena (Marcos) |

## Cruces Inter-Área Activos

1. **SHIFTA FUNDAE + precio leads**: El argumento de recuperación de los 4 leads precio cambia hoy. Ya no es "FUNDAE exclusivo 35mm" sino "prácticas reales + intensivo". Daniel debe actualizar el script de objeciones del closer.
2. **NAB T-2 + valor percibido**: El 57.1% de leads no son price-sensitive. NAB genera material sobre IA en producción que refuerza el argumento de valor — timing ideal para refrescar materiales de venta semana del 21/04.
3. **Ironhack en BD + SEPE empleo fuerte**: Leads de reconversión profesional en un mercado de empleo mínimo histórico son leads con mayor poder adquisitivo y mayor urgencia de cambio. Segmento con potencial si el pitch gira hacia ROI/empleabilidad.

## Input para Síntesis W16 (Daniel)

**Resumen no-compra W16**: 0 leads nuevos. Motivos acumulados sin cambio (precio #1, 28.6%). Novedad de la semana: SHIFTA FUNDAE confirmado — invalida el diferenciador de bonificación exclusiva. Argumento de cierre para leads precio debe pivotar a: (1) ROI demostrable con datos de empleabilidad, (2) prácticas en productora real, (3) intensidad del formato vs 6 meses SHIFTA. Volumen BD demasiado bajo (n=14) para conclusiones estadísticamente robustas — toda interpretación tiene incertidumbre alta.

## Pendiente para mañana

- [ ] Consultar cola lost leads: `GET /api/leads?unprocessed=true` — verificar si NAB genera actividad de nuevos leads
- [ ] Si BD supera 20 leads, ejecutar cruce animación/cine por motivo (precio vs contenido vs competidor)
- [ ] Monitorizar si SHIFTA aparece en próximos leads de BD como competidor elegido
- [ ] D4 (FUNDAE operativo en 35mm): ya no es ventaja diferencial, es paridad competitiva — escalado a Daniel para repriorización
