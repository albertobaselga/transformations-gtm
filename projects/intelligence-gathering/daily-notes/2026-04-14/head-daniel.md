# Daniel Ruiz — Nota Diaria [2026-04-14]

## Resumen

W16 D2 (lunes). Primer heartbeat post-fin de semana. Lectura de standup CEO W16 D1 (2026-04-13) completada. Revision de nota Alba (lost leads) para hoy — cola vacia, BD=14, sin cambios. Raul en FAS-21 (BOE monitoring) activo pero sin nota diaria en carpeta. Lost Leads API operativa (verificado). Cruces demanda corporativa x no-compra producidos con datos disponibles.

## Revision equipo (Program Manager)

### Alba Moreno — analyst-lost-leads.md (2026-04-14)
- **Estado**: Operativa. Nota bien estructurada, formato correcto.
- **Output**: Cola vacia confirmada via API. 14 leads, 0 sin procesar.
- **Cruces inter-area**: 2 cruces solidos — TAI €13.530/ano como benchmark precio (fuente Iker via Marcos) y NAB 2026 como trigger B2B. Ambos bien fundamentados.
- **Evaluacion**: Alta calidad. Sin datos nuevos, maximiza valor cruzando intel de otros equipos. Cumple expectativas.

### Raul Vega — FAS-21 (BOE monitoring)
- **Estado**: in_progress. Activo en comentarios FAS-21 (HB65).
- **Output**: Monitorizacion LinkedIn AI Video Editor (serie estable 53 ofertas), TheCUBE repost tracking, ECAM triggers. Sin nota diaria en carpeta daily-notes/2026-04-14/.
- **Evaluacion**: Trabajo consistente en FAS-21 pero falta nota diaria consolidada en formato estandar para mi revision. Pendiente: pedir a Raul que deposite nota en daily-notes.

## Hallazgos — Cruces Demanda Corporativa x No-Compra

### Hallazgo 1: Pico historico "curso IA video" x precio motivo #1 de no-compra = ventana critica con friccion
- **Demanda**: `curso IA video` alcanza Trends 100 en ES (semana 5-11 abril) — primer pico historico, supera a Blender. Fuente: Noa Herrera via standup CEO.
- **No-compra**: Precio es motivo #1 de perdida (28,6% de leads, n=14). Leads #2, #5, #10 (animacion) perdieron por precio.
- **Cruce**: La demanda esta en maximo pero la conversion tiene friccion estructural. Sin FUNDAE (D4 pendiente), 35mm no puede ofrecer formacion bonificable que neutralice la objecion precio en el segmento que mas demanda genera.
- **Gap identificado**: Demanda maxima + conversion bloqueada por precio = oportunidad que se pierde cada dia que D4 no se resuelve.
- **Confianza**: Alta (Trends verificado por Marina + patron de leads verificado por Alba)

### Hallazgo 2: Patron Runway (awareness 100, formacion 0) x espacio B2B vacio = first-mover doble
- **Demanda**: `runway ml` pico 100 en marzo, sustenta 52-55 en abril. `curso runway` = cero busquedas 12 meses. Fuente: Marina Reyes via standup.
- **No-compra**: Ningun competidor elegido por leads perdidos ofrece formacion Runway. SAE sin IA generativa curricular (Iker). Platzi/Udemy no aparecen como competidores en leads (segmento masivo, no profesional).
- **Cruce**: El espacio formativo Runway profesional esta completamente vacio en Espana. Ni la demanda organica (busquedas) ni la competencia (leads perdidos) cubren este nicho. 35mm tiene ventana first-mover en dos dimensiones: editorial (SEO) y curricular (modulo/curso).
- **Gap identificado**: Awareness maxima + oferta formativa = cero. Quien publique primero contenido profesional de Runway captura toda la demanda organica.
- **Confianza**: Alta

### Hallazgo 3: NAB 2026 (18-22 abril) x pipeline B2B corporativo = trigger de urgencia
- **Demanda**: 9+ expositores NAB con IA como eje central. Broadcast pivota a AI-native masivamente. Fuente: Iker via standup CEO.
- **No-compra**: Leads B2B son el segmento con mayor ticket medio potencial pero D1 (paquete B2B) sigue sin aprobacion de Elena.
- **Cruce**: NAB generara oleada de interes corporativo en formacion IA audiovisual la semana del 18-22 abril. Si D1 (paquete B2B) no esta listo, 35mm pierde la ventana de activacion post-NAB. Empresas broadcast que vean las novedades NAB buscaran upskilling — quien tenga oferta B2B lista captura primero.
- **Gap identificado**: Trigger de demanda inminente (NAB) + oferta B2B no activada (D1 pendiente).
- **Confianza**: Media-Alta (NAB es trigger probable, no confirmado hasta que se midan busquedas post-evento)

### Hallazgo 4: Contraccion SEPE x precio-sensitivity = ajuste narrativo necesario
- **Demanda**: SEPE ene-feb 2026 confirma contraccion CNAE 59: -14,2% enero, -23,5% febrero YoY. 70-73% contratos artistas (proyecto). Fuente: Sofia Blanco via Marcos.
- **No-compra**: Precio motivo #1. TAI a €13.530/ano (benchmark Iker) da contexto comparativo.
- **Cruce**: Menos contratos + mas competitividad = el candidato percibe mayor riesgo. Precio-sensitivity se amplifica. Pero tambien refuerza argumento de diferenciacion via IA. Benchmark TAI (€13.530/ano, 4 anos, >€50k total, sin IA, sin FUNDAE) permite reframing: 35mm ofrece mas valor por menos inversion.
- **Gap identificado**: Narrativa de ventas necesita ajuste para entorno contractivo — pasar de "insercion laboral" a "diferenciacion competitiva via IA en mercado que se profesionaliza".
- **Confianza**: Alta

## Senales Detectadas

| Senal | Valor | Delta vs D1 (13-abr) | Fuente |
|-------|-------|-----------------------|--------|
| Lost Leads BD total | 14 | 0 | API localhost:3200 |
| Lost Leads sin procesar | 0 | 0 | API localhost:3200 |
| `curso IA video` Trends ES | 100 (pico) | Nuevo pico | Noa via CEO standup |
| `runway ml` Trends ES | 52-55 | Estable post-pico | Marina via CEO standup |
| LinkedIn AI Video Editor ES | 53 | Estable (serie 4d) | Raul FAS-21 |
| SEPE CNAE 59 feb 2026 | -23,5% YoY | Dato nuevo | Sofia via Marcos |
| Competidores con IA curricular | 0/5 monitorizados | Sin cambio | Iker via CEO standup |
| Decisiones D1-D4 Elena | 0/4 resueltas | Sin cambio | CEO standup |
| FAS-19 (Lost Leads mejora) | todo | Sin cambio | Pablo Navarro |

## Decisiones pendientes Elena — impacto en demanda/no-compra

| Decision | Impacto | Urgencia (mi valoracion) |
|----------|---------|--------------------------|
| D1: Paquete B2B | Desbloquea monetizacion demanda corporativa. NAB en 4 dias amplifica urgencia | **Critica** |
| D2: Approach PRISA | Canal corporativo de alto volumen. Sofia prepara tabla comparativa | Alta |
| D3: CRM/prospects | Desbloquea cruce targets BOE x leads existentes | Alta |
| D4: FUNDAE homologacion | Neutraliza objecion precio (#1 motivo no-compra). Diferenciador vs toda la competencia | **Critica** |

## Bloqueos activos

1. **Lost Leads volumen**: 14/50+ objetivo. Sin nuevas ingestas desde W15. FAS-19 (Pablo) sin avance. Escalar si sigue sin movimiento en W16.
2. **CRM inaccesible (D3)**: Imposible cruzar targets BOE de Raul con contactos existentes de 35mm.
3. **FUNDAE desconocida (D4)**: Sin requisitos claros, no se puede disenar estrategia B2B bonificable.

## Pendiente para manana
- [ ] Verificar si Raul deposita nota diaria en daily-notes (pedir via comentario FAS-21)
- [ ] Consultar Lost Leads API — cualquier nuevo lead es prioridad inmediata
- [ ] Monitorizar si Elena formaliza alguna decision D1-D4
- [ ] Preparar alerta NAB: a 3 dias del inicio, verificar cobertura de Noa e Iker
- [ ] Evaluar si FAS-19 necesita escalada formal a Elena (Lost Leads sin mejora desde W15)
