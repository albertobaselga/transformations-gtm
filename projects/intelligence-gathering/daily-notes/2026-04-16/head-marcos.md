# Marcos Aldana — Nota Diaria [2026-04-16]

## Resumen

W16 D4 (jueves). Día de pre-síntesis semanal. **Adrián Torres reactivado** — FAS-72 funcionó, ha producido nota de alta calidad (día 7 de serie de estabilidad). **Sofía Blanco sin nota** — detectado mismo problema que Adrián: 0 issues asignados, estado `idle`. Creado [FAS-77](/FAS/issues/FAS-77) para reactivarla con prioridad SEPE marzo (desbloqueado ayer).

Consolidación de 3 fuentes: (1) nota Adrian 16/04, (2) nota Sofía 15/04, (3) hallazgos propios del heartbeat anterior. **5 señales de alto valor** para la síntesis W16.

## Corrección — Escalada FAS-71 sobre Adrián

Elena señala en standup 16/04: el gap real de Adrián era **2 días laborables** (15-16/04), no 6. Existen notas de Adrián para 04-11, 04-13 y 04-14 — la del 14/04 es detallada y de alta calidad. **Causa raíz**: Adrián estaba `idle` con 0 issues asignados, no heartbeats. **Lección**: antes de escalar ausencia de un analista, verificar directamente el directorio `daily-notes/` y el estado en Paperclip (issues asignados), no solo la ausencia percibida.

## Revisión de analistas

### Adrián Torres — analyst-job-postings.md (16/04) ✅

**Calidad**: Alta. Nota completa con métricas, 5 hallazgos, tabla de serie IA tools actualizada, pendientes claros.

**Hallazgos clave que valido**:

1. **Ruptura serie Tecnoempleo motion graphics**: de 1 a 0. Valido pero irrelevante para tendencia — base demasiado pequeña (1 oferta expirada). La serie en portales con volumen (Indeed 100, Tecnoempleo audiovisual 7) sigue en meseta. **Conclusión**: la meseta de empleo audiovisual se mantiene en día 7.

2. **ElevenLabs como empleadora de motion designers**: Señal inversa valiosa. No es "empresa que usa IA tools en el JD" sino "empresa de IA que demanda perfil motion". Esto refuerza el argumento de 35mm: "formamos a quienes van a trabajar para las empresas que construyen las herramientas de IA". **Valido para síntesis W16 como señal cualitativa.**

3. **Domestika — 2 P1 directas nuevas de Sandav (15/04)**: Motion Graphics Designer + Video Editor & Motion Designer, ambas Madrid, tiempo completo. Domestika sigue siendo el portal con más rotación de P1 audiovisuales. Estable vs D2.

4. **LinkedIn sin sesión — ruptura metodológica**: Adrián lo documenta correctamente como NC (no comparable). Los conteos sin sesión (7,000+, 2,000+, 3,000+) no sirven para la serie. Nuevo baseline público: 109 empleos "motion designer" en LI ES. **Pendiente**: restaurar sesión LinkedIn para retomar métricas comparables.

5. **Notodoanimación — 510 registros totales G&M**: Primer conteo total obtenido. Batch de Craft/Moon/Fever rotó fuera de p.1. Sin nuevas herramientas IA en títulos esta semana.

**Observación de calidad**: Adrián mantiene la disciplina de la serie (día 7), documenta rupturas metodológicas con transparencia, y encuentra señales creativas (ElevenLabs). Nota de nivel Head.

### Sofía Blanco — Sin nota 16/04 ⚠️

**Última nota**: 15/04 — coste de oportunidad (€130k TAI vs €12k 35mm B2B) y registro de SHIFTA como competidor P1. Alta calidad.

**Diagnóstico**: 0 issues asignados en Paperclip, estado `idle`. Sin heartbeats = sin producción. Misma causa raíz que Adrián.

**Acción tomada**: Creado [FAS-77](/FAS/issues/FAS-77) asignado a Sofía con prioridades:
- SEPE marzo 2026 CNAE 59 (desbloqueado ayer tras 5+ días HTTP 403)
- Input para pre-síntesis W16
- Nota diaria 16/04

## Hallazgos consolidados (Head)

### Hallazgo 1: Meseta de empleo audiovisual confirmada — día 7

- **Fuente**: Serie de Adrián (5 portales) + señales propias
- **Dato**: Indeed 100 (estable 7 días), Tecnoempleo audiovisual 7 (estable), Domestika P1 ~5 (estable), Notodoanimación ~5-6 (volátil). La única ruptura (Tecnoempleo motion graphics 1→0) es estadísticamente irrelevante.
- **Relevancia**: 7 días de meseta confirman que el mercado de empleo audiovisual en España no está en caída ni en crecimiento — selectividad estable. Esto soporta el argumento de que 35mm forma para un mercado activo pero exigente.
- **Confianza**: Alta (serie de 7 días, múltiples portales convergentes)

### Hallazgo 2: SHIFTA FUNDAE confirmado — diferenciadores 35mm reducidos a 2

- **Fuente**: weareshifta.com (heartbeat anterior, validado)
- **Dato**: SHIFTA Posgrado IA Audiovisual es bonificable FUNDAE. Precio no publicado. Sin prácticas en productora.
- **Diferenciadores remanentes de 35mm sobre SHIFTA**: (1) prácticas en productora real, (2) formato intensivo (semanas vs 6 meses). FUNDAE ya no diferencia.
- **Acción**: Daniel necesita pivotar el brief B2B: "35mm = velocidad (semanas) + prácticas reales + FUNDAE. SHIFTA = 6 meses online sin prácticas + FUNDAE."
- **Confianza**: Alta

### Hallazgo 3: SEPE marzo 2026 — mercado laboral general en mínimos históricos

- **Fuente**: sepe.es nota de prensa abril 2026 (heartbeat anterior)
- **Dato**: Paro 2.419.712 (-6,2% ia), contratos 1.311.070 (+12,4% ia), mínimo de marzo en 18 años. **CNAE 59 pendiente** — Sofía debe extraer tablas sectoriales.
- **Relevancia**: Si CNAE 59 sigue la tendencia general, el empleo audiovisual también mejora → valida inserción 35mm. Si diverge, señal de alerta.
- **Confianza**: Alta macro; Pendiente sectorial

### Hallazgo 4: ElevenLabs como empleadora motion — señal de inversión en la cadena IA

- **Fuente**: Adrián Torres, analyst-job-postings.md 16/04
- **Dato**: ElevenLabs (empresa de voz IA del inventario de herramientas) contrata Motion Designer remoto España.
- **Relevancia**: Las empresas que construyen herramientas IA necesitan profesionales audiovisuales. Esto abre un segundo mercado laboral para egresados 35mm: no solo empresas que *usan* IA, sino empresas que *construyen* IA. Argumento potente para brief B2B y landing B2C.
- **Confianza**: Alta

### Hallazgo 5: NAB 2026 T-2 — IA mainstream en producción audiovisual

- **Fuente**: nabshow.com, múltiples fuentes (heartbeat anterior)
- **Dato**: Doble pabellón IA. Sesiones Google Cloud/DeepMind, Microsoft. Expositores: Adobe, AWS, NVIDIA, Vizrt. Sin anuncios aún de Runway Gen-4 ni Adobe Firefly video. Arranca 18/04.
- **Relevancia**: Valida tesis central de 35mm. Las herramientas anunciadas definirán currículo próximos 6-12 meses.
- **Confianza**: Alta

## Señales Detectadas

| Señal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| Indeed motion designer ES | 100 | 0 (día 7 meseta) | Adrián |
| Tecnoempleo audiovisual | 7 | 0 | Adrián |
| Tecnoempleo motion graphics | 0 | -1 (irrelevante) | Adrián |
| Domestika P1 relevante | ~5 | 0 | Adrián |
| ElevenLabs empleadora motion | DETECTADO | NUEVA | Adrián |
| SHIFTA FUNDAE | SÍ confirmado | Sin cambio vs ayer | Marcos |
| SEPE marzo paro | 2.419.712 (-6,2% ia) | Sin cambio vs ayer | Marcos |
| SEPE marzo contratos | 1.311.070 (+12,4% ia) | Sin cambio vs ayer | Marcos |
| SEPE CNAE 59 | PENDIENTE | Sofía debe extraer | sepe.es |
| NAB 2026 | T-2, mainstream IA | Sin cambio | Marcos |
| LinkedIn sesión | ROTA | NC métricas | Adrián |
| Sofía producción | IDLE — 0 issues | FAS-77 creado | Paperclip |

## Cruce de señales: Empleo + Empleabilidad = Estado W16

| Dimensión | Estado | Dato clave | Fuente |
|-----------|--------|------------|--------|
| Stock de empleo audiovisual | Meseta estable (día 7) | Indeed 100, Tecno 7, Domestika ~5 | Adrián |
| Flujo de nuevas ofertas | Bajo pero constante | 2 P1 Sandav + 3 Domestika hoy | Adrián |
| Mercado laboral general | Mínimos históricos | Paro -6,2% ia, contratos +12,4% ia | SEPE/Marcos |
| Empleo sectorial CNAE 59 | PENDIENTE | Sofía debe extraer | FAS-77 |
| Competencia formativa | SHIFTA entra en espacio P1 | FUNDAE confirmado, sin prácticas | Marcos + Sofía |
| IA como empleador | NUEVA dimensión | ElevenLabs busca motion | Adrián |
| Coste de oportunidad | Cuantificado | TAI ~€130k vs 35mm ~€12k | Sofía (15/04) |

**Narrativa consolidada**: El mercado de empleo audiovisual español está en meseta selectiva (no cae, no crece) mientras el mercado general mejora. Las empresas de IA empiezan a demandar perfiles motion directamente. SHIFTA entra como primer competidor directo en IA audiovisual pero sin prácticas. 35mm se diferencia por velocidad + prácticas + inserción real. Falta confirmar si CNAE 59 sigue la tendencia macro positiva.

## Pendiente para mañana (W16 D5, 2026-04-17 — viernes síntesis)

- [ ] **Síntesis semanal W16**: producir input en `projects/opportunity-synthesis/working/sintesis-semanal-input-marcos.md`
- [ ] **Sofía (FAS-77)**: verificar que produjo nota y extrajo CNAE 59
- [ ] **Adrián**: verificar nota D5 y continuidad de serie (día 8)
- [ ] **LinkedIn**: restaurar sesión para métricas comparables
- [ ] **NAB 2026**: viernes 18/04 = Day 1 sesiones. Noa + Iker cubren
- [ ] **SHIFTA precio**: pendiente Iker — sin precio no hay comparativa económica completa

---

*Marcos Aldana — Head de Inteligencia Laboral*
*"Si no lo puedes contar, no existe. Pero si lo cuentas mal, es peor que no existir."*
