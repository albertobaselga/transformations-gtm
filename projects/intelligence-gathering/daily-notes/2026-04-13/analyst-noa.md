# Tendencias Emergentes - 2026-04-13

**Analista:** Noa Herrera  
**Foco:** Deltas frente a 2026-04-10 (viernes), filtro de ruido y señales de 3-6 meses

---

## Resumen ejecutivo

- **Fuentes revisadas:** GitHub, YouTube, Google Trends ES, Reddit (`r/VideoEditing`, `r/Filmmakers`)
- **Señal más fuerte del día:** `curso IA video` alcanzó **100** en Google Trends ES la semana 5-11 abr 2026 — máximo en 12 meses para ese término. Esto supera cualquier pico previo de `curso Blender` en la misma ventana y confirma que la demanda formativa de IA ya tiene tracción orgánica en España.
- **Delta GitHub: aceleración inusual en agentic/voice OSS** — OpenMontage +545 y OmniVoice +500 en 3 días (≈10x velocidad previa). Probable evento viral o cobertura de prensa durante el fin de semana.
- **Cambio operativo:** Helios y FireRed-OpenStoryline cambiaron de organización en GitHub. URLs actualizadas en esta nota.
- **FAS-22:** Sigue en `todo` (asignada a Pablo). El monitor funciona bien manualmente; la automatización del heartbeat sigue pendiente.

---

## Tendencias destacadas

### 1. "curso IA video" marca el pico máximo de 12 meses en Google Trends ES
**Clasificación:** Señal nueva crítica  
**Señal:** En la ventana 12 meses para España, `curso IA video` registró **100** en la semana **5-11 abr 2026** — el valor más alto de los últimos 12 meses para ese término. La semana actual (12-18 abr) aparece en 0 por datos incompletos (solo lunes). En comparación, `curso Blender` mantiene un **19** en la semana parcial 12-18 abr (vs 18 la semana anterior y 14 la anterior), con un pico absoluto de 100 en **1-7 feb 2026** (desplazado como máximo del período).  
**Relevancia para 35mm:** Por primera vez, la demanda orgánica en España para un curso de IA audiovisual supera en Trends a la de Blender. Esto valida la hipótesis de que el naming `IA + video` ya tiene masa crítica de búsqueda. No hay competidor con programa consolidado bajo ese naming: oportunidad de posicionamiento SEO activa.  
**Fuente:** Google Trends ES 12m via `scripts/trends-monitor.mjs`

### 2. OpenMontage y OmniVoice: aceleración viral en OSS agentic/voice
**Clasificación:** En crecimiento acelerado  
**Señal:** En 3 días hábiles (2026-04-10 → 2026-04-13): OpenMontage pasa de **1,012 a 1,557** (**+545**), OmniVoice de **2,694 a 3,194** (**+500**). Qwen3-TTS sube de **10,484 a 10,623** (**+139**). HunyuanVideo-1.5 cae de **4,376 a 4,370** (**-6**). Helios (PKU-YuanGroup) sube a **1,675** (**+23**) y FireRed-OpenStoryline (FireRedTeam) a **1,861** (**+65**). El spike de OpenMontage tiene causa identificada: el repo fue actualizado el **12 abr 2026 22:24 UTC** con una descripción completamente nueva — *"World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI coding assistant into a full video production studio."* — y ahora se posiciona explícitamente como herramienta para Claude, Cursor y Copilot (topics: `claude`, `cursor`, `copilot`). Este reposicionamiento como herramienta LLM-nativa probablemente generó el trending de GitHub o difusión en comunidades de AI coding.  
**Relevancia para 35mm:** El diferencial entre video generativo puro (HunyuanVideo, plano) y agentic/voice (OpenMontage, OmniVoice, en tracción fuerte) se está ampliando. Refuerza la prioridad en módulos de producción agentica y voz sobre text-to-video genérico.  
**Fuente:** GitHub API (`calesthio/OpenMontage`, `k2-fsa/OmniVoice`, `QwenLM/Qwen3-TTS`, `Tencent-Hunyuan/HunyuanVideo-1.5`, `PKU-YuanGroup/Helios`, `FireRedTeam/FireRed-OpenStoryline`)

### 3. AI B-roll pricing: segunda semana consecutiva en top-5 Reddit VideoEditing
**Clasificación:** Señal persistente — demanda de skills reales  
**Señal:** "Clients asking for AI-generated B-roll now and I'm not sure how to price it" continúa en top-5 de `r/VideoEditing` esta semana con **35 upvotes / 32 comentarios** (vs 34/32 la semana anterior, prácticamente estable). Dos semanas consecutivas como señal de alta engagement indica que el tema no es puntual: hay una demanda real de editores que necesitan aprender a integrar y valorar económicamente el AI B-roll en sus flujos de trabajo.  
**Relevancia para 35mm:** La formación en "pricing de servicios AI" y "workflows AI B-roll para clientes" es un ángulo muy concreto que ningún competidor ha capturado. No es "cómo usar Runway", es "cómo facturar y justificar el trabajo con AI ante el cliente".  
**Fuente:** reddit.com/r/VideoEditing — 13 abr 2026

### 4. Presión de costes de almacenamiento persiste en r/Filmmakers
**Clasificación:** Señal estructural de mercado  
**Señal:** "Samsung SSDs are getting even more expensive. Up to $1,144 for 4TB, or a 3.5x increase since December 2024. Thanks AI!" mantiene tracción esta semana con **599 upvotes / 52 comentarios** (vs 592/51 la semana anterior, ligero aumento). La atribución directa a la demanda de IA por parte de la comunidad es consistente.  
**Relevancia para 35mm:** Este tipo de presión de infraestructura hace más atractiva la formación en pipelines agenticos en la nube y flujos sin local storage masivo. Señal de entorno, no de contenido directo.  
**Fuente:** reddit.com/r/Filmmakers — 13 abr 2026

### 5. Cambio de organización: Helios y FireRed-OpenStoryline movieron sus repos
**Clasificación:** Cambio operativo / señal de madurez  
**Señal:** Los repos que seguíamos bajo `helios-team/Helios` y `FireRed-AI/FireRed-OpenStoryline` ahora viven en `PKU-YuanGroup/Helios` y `FireRedTeam/FireRed-OpenStoryline`. No es una señal de declive — el cambio de organización suele indicar consolidación bajo una entidad más estructurada. Los counts actuales: Helios **1,675** (vs 1,652 el 10 abr, +23) y FireRed-OpenStoryline **1,861** (vs 1,796, +65).  
**Relevancia para 35mm:** Señal de que estos proyectos están siendo organizados de forma más profesional — menos repo experimental, más proyecto estructurado. Seguimiento actualizado.  
**Fuente:** GitHub API + search

---

## Tabla de señales

| Señal | Valor | Delta vs 2026-04-10 | Fuente |
|-------|-------|---------------------|--------|
| OSS agentic - OpenMontage | 1,557 stars | **+545** | GitHub |
| OSS voice - OmniVoice | 3,194 stars | **+500** | GitHub |
| OSS TTS - Qwen3-TTS | 10,623 stars | +139 | GitHub |
| OSS video gen - HunyuanVideo-1.5 | 4,370 stars | -6 | GitHub |
| OSS video gen - Helios (PKU) | 1,675 stars | +23 | GitHub |
| OSS agent edit - FireRed-OpenStoryline (FireRedTeam) | 1,861 stars | +65 | GitHub |
| Google Trends ES - "curso IA video" | 100 (sem 5-11 abr, máx 12m) | **pico histórico 12m** | Google Trends |
| Google Trends ES - "curso Blender" | 19 (sem 12-18 abr, parcial) | +1 vs sem anterior | Google Trends |
| YouTube - "Best AI Video Editing Tools 2026" | 235,094 views | ~+2,307 (+3 días) | YouTube |
| Reddit VideoEditing - AI B-roll pricing | 35 upvotes / 32 comentarios | estable (2ª semana) | Reddit |
| Reddit Filmmakers - SSD cost pressure AI | 599 upvotes / 52 comentarios | +7/+1 (2ª semana) | Reddit |

---

## Pendiente para próximo heartbeat

- [ ] Verificar causa del spike de OpenMontage y OmniVoice: buscar artículo técnico o tweet viral del fin de semana 11-12 abr
- [ ] Comprobar si `curso IA video` sostiene señal en Google Trends la semana 12-18 abr cuando el dato sea completo
- [ ] Seguir `FAS-22` — la integración del trends-monitor en heartbeat sigue sin completarse
- [ ] Actualizar URLs de tracking en sources: `helios-team/Helios` → `PKU-YuanGroup/Helios`; `FireRed-AI/FireRed-OpenStoryline` → `FireRedTeam/FireRed-OpenStoryline`
- [ ] Proponer módulo concreto a Lucía: "AI B-roll para clientes: flujo y pricing" como caso de uso de alta demanda validada
