# Proceso de Extraccion e Inteligencia de No-Compra
**Analista:** Alba Moreno
**Head:** Daniel Ruiz
**Version:** 1.0 — 2026-04-09

---

## 1. Flujo de ingesta de leads

```
CRM 35mm.es → Closer registra lead no convertido → Lost Leads Tool (UI/API)
                                                          ↓
                                                    BD SQLite (leads table)
                                                          ↓
                                                    Agente IA procesa transcripcion
                                                          ↓
                                                    Nota diaria de analista
```

### Campos requeridos por lead

| Campo | Tipo | Obligatorio | Descripcion |
|---|---|---|---|
| lead_name | texto | Si | Nombre del lead |
| lead_email | texto | No | Email de contacto |
| lead_phone | texto | No | Telefono de contacto |
| course_interested | texto | Si | Curso especifico de interes |
| course_category | enum | Si | cine, animacion, videojuegos, sonido, fotografia, tv, produccion, otro |
| contact_date | fecha | Si | Fecha del contacto comercial |
| transcription | texto | No | Transcripcion de la comunicacion (llamada, chat, email) |
| closer_notes | texto | No | Notas del comercial/closer |
| non_purchase_reason | enum | Si | precio, contenido, competidor, timing, formato, otro |
| non_purchase_detail | texto | No | Detalle libre del motivo |
| competitor_chosen | texto | No | Nombre del competidor elegido (si aplica) |
| price_sensitivity | enum | No | low, medium, high |

### Proceso de registro

1. El closer completa la interaccion con el lead
2. Accede a Lost Leads Tool (http://localhost:3200)
3. Rellena el formulario con todos los campos obligatorios
4. Si hay transcripcion (llamada grabada), la adjunta en el campo correspondiente
5. El lead queda registrado con `processed_by_agent = 0`

---

## 2. Proceso de extraccion por agente IA

### Objetivo
Extraer inteligencia estructurada de las transcripciones y notas de cada lead para alimentar los patrones de no-compra.

### Criterios de extraccion por transcripcion

Para cada lead con `processed_by_agent = 0`:

1. **Objeciones explicitas:** Frases donde el lead dice "no" o expresa rechazo. Clasificar por tipo (precio, contenido, formato, competidor, timing).
2. **Alternativas mencionadas:** Nombres de competidores, programas alternativos, o soluciones DIY mencionadas.
3. **Expectativas no cubiertas:** Lo que el lead esperaba encontrar y no encontro en la oferta de 35mm.
4. **Nivel de interes residual:** Escala 1-5 de probabilidad de conversion futura (1=nulo, 5=casi seguro si cambia la circunstancia).
5. **Senal emocional:** Tono general de la conversacion (frustrado, indiferente, interesado-pero-bloqueado, hostil).
6. **Datos para remarketing:** Fecha sugerida de recontacto, condiciones que deben cumplirse.

### Despues de procesar

```sql
UPDATE leads SET
  processed_by_agent = 1,
  agent_extraction_date = datetime('now'),
  agent_notes = '{JSON con extraccion estructurada}'
WHERE id = {lead_id};
```

---

## 3. Categorizacion por Area de Oportunidad (P1-P5)

Las prioridades estrategicas definidas por la CEO ([FAS-1](/FAS/issues/FAS-1)) determinan como clasificar cada lead para inteligencia accionable.

### Mapping de categorias de curso a areas de oportunidad

| Area | Codigo | Categorias de curso directas | Cursos especificos incluidos |
|---|---|---|---|
| **P1 — IA Generativa Audiovisual** | P1 | Cualquier categoria | Cualquier curso donde el lead mencione IA, herramientas generativas, automatizacion, o donde el motivo de no-compra sea "contenido" por falta de IA en temario |
| **P2 — Cine y Ficcion** | P2 | cine | Direccion, guion cinematografico, produccion de ficcion |
| **P3 — Sonido Profesional** | P3 | sonido | Sonido para cine, produccion musical, Dolby Atmos, mezcla |
| **P4 — Videojuegos** | P4 | videojuegos | Desarrollo, diseno, arte para videojuegos |
| **P5 — Produccion para RRSS** | P5 | produccion, tv, otro | Video corporativo, branded content, produccion para redes sociales, contenido digital |
| **Sin clasificar** | PX | animacion, fotografia | Leads que no mapean claramente a P1-P5 |

### Reglas de clasificacion

1. **Un lead puede pertenecer a multiples areas.** Por ejemplo, un lead interesado en "animacion para RRSS" pertenece a P5 (RRSS) y potencialmente a P1 si menciona IA.
2. **P1 es transversal.** Si cualquier lead menciona IA, herramientas generativas, o la falta de ellas como motivo de no-compra, se etiqueta tambien como P1.
3. **La clasificacion primaria** se basa en `course_category`. La secundaria se basa en analisis de `transcription`, `closer_notes`, y `non_purchase_detail`.
4. **Competidores se mapean a areas:**
   - SHIFTA, IIA, RTVE Instituto → P1 (IA audiovisual)
   - ECAM, Escuela TAI → P2 (Cine)
   - SAE Institute → P3 (Sonido)
   - U-tad, EVAD → P4 (Videojuegos)
   - Too Many Flash → Fotografia (PX)
   - Lightbox Academy → Animacion/VFX (PX, o P1 si IA-related)
   - Ironhack → P4 (tech/videojuegos)

### Consultas SQL por area de oportunidad

```sql
-- P1: IA Generativa (transversal — buscar en texto)
SELECT * FROM leads WHERE
  non_purchase_detail LIKE '%IA%' OR non_purchase_detail LIKE '%inteligencia artificial%'
  OR non_purchase_detail LIKE '%generativ%' OR non_purchase_reason = 'contenido'
  OR competitor_chosen IN ('SHIFTA', 'IIA', 'RTVE Instituto');

-- P4: Videojuegos
SELECT * FROM leads WHERE course_category = 'videojuegos'
  OR competitor_chosen IN ('U-tad', 'EVAD', 'Ironhack');

-- P5: Produccion RRSS
SELECT * FROM leads WHERE
  (course_category IN ('produccion', 'tv', 'otro')
   AND (non_purchase_detail LIKE '%redes%' OR non_purchase_detail LIKE '%social%'
        OR non_purchase_detail LIKE '%branded%' OR non_purchase_detail LIKE '%corporativ%'))
  OR non_purchase_detail LIKE '%RRSS%';
```

---

## 4. Umbrales de alerta y escalado

| Patron | Umbral | Escalado |
|---|---|---|
| Competidor concentra 3+ leads en 30 dias | 3 leads | URGENTE — Informe competidor al Head |
| Motivo "contenido" supera 40% en un area P1-P5 | 40% | URGENTE — Gap de producto critico |
| Sensibilidad precio HIGH supera 60% en un area | 60% | URGENTE — Revisar pricing |
| Mencion de IA como gap (P1 transversal) | 2+ leads | ATENCION — Confirma necesidad de IA en temario |
| Demanda de formato no ofrecido (bootcamp, presencial) | 3+ leads | ATENCION — Evaluar nuevo formato |

---

## 5. Output diario requerido

Cada dia, Alba produce `analyst-alba-nopurchase.md` con:

1. **Nuevos leads procesados** (count + resumen)
2. **Clasificacion P1-P5** de leads nuevos
3. **Patrones detectados** (solo si superan umbral)
4. **Top motivos del periodo** (tabla)
5. **Competidores mencionados** (tabla con mapping a area)
6. **Recomendacion accionable** (1-2 lineas)
7. **Nivel de urgencia** (normal / atencion / urgente)
