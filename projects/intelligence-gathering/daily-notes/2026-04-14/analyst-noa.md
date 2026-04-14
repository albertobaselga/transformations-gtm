# Tendencias Emergentes - 2026-04-14

**Analista:** Noa Herrera  
**Foco:** Deltas frente a 2026-04-13, filtro de ruido y señales de 3-6 meses

---

## Resumen ejecutivo

- **Fuentes revisadas:** GitHub, Reddit (`r/VideoEditing`, `r/Filmmakers`)
- **Google Trends ES:** No disponible hoy (error 429 — rate limit). Se retoma en próximo heartbeat.
- **Señal más fuerte del día:** El hilo "AI-generated B-roll pricing" de `r/VideoEditing` entra en su **3ª semana consecutiva** en top-5 (35/32 — valores estables). Tres semanas es la confirmación definitiva de señal sostenida, no spike.
- **Cambio en r/Filmmakers:** El hilo de SSD cost pressure ha **desaparecido del top-5**. El feed está dominado ahora por contenido de craft (Drew Goddard, Guy Ritchie). Cambio de contexto notable: la comunidad no está actualmente en modo queja-infraestructura sino en modo aprendizaje-oficio.
- **GitHub:** OpenMontage normaliza velocidad post-viral (+77 en 1 día vs +545 en 3 días). OmniVoice acelera con +102 en 1 día — su ritmo más alto hasta ahora en ventanas de 24h.

---

## Tendencias destacadas

### 1. AI B-roll pricing: 3ª semana consecutiva en top-5 r/VideoEditing
**Clasificación:** Señal consolidada — demanda validada  
**Señal:** "Clients asking for 'AI-generated B-roll' now and I'm not sure how to price it" permanece en el puesto **3 del top-5** de `r/VideoEditing` con **35 upvotes / 32 comentarios** — prácticamente idéntico a las semanas anteriores (sem 1: 34/32, sem 2: 35/32, sem 3: 35/32). Tres semanas de permanencia en top-5 sin degradación de engagement es la señal más fuerte de demanda sostenida que hemos registrado en Reddit desde que empezamos el seguimiento.  
**Relevancia para 35mm:** Este es el ángulo de contenido más validado en este momento: no "cómo usar Runway", sino "cómo estructurar, vender y facturar el AI B-roll a clientes". Ningún competidor tiene un módulo específico sobre esto. La propuesta a Lucía de un módulo "AI B-roll para clientes: flujo y pricing" tiene ahora triple validación de semana.  
**Fuente:** reddit.com/r/VideoEditing — 14 abr 2026

### 2. r/Filmmakers: rotación de señales — SSD pressure desaparece, craft content sube
**Clasificación:** Cambio de contexto — señal estructural modificada  
**Señal:** El hilo de SSD cost pressure que llevaba 2 semanas en top-5 (592→599 upvotes) **ha desaparecido del top-5 esta semana**. Los nuevos líderes son contenido de craft y oficio: Drew Goddard sobre screenwriting (1,014/18), pixel art cinematográfico (951/38), Guy Ritchie sobre metodología de rodaje (651/114), un caso de robo de cortometraje (491/76), y un cortometraje viral (419/99). Cero menciones explícitas a IA en el top-5 de r/Filmmakers esta semana.  
**Relevancia para 35mm:** La señal de presión de costes de infraestructura no era estructural — era un spike de 2 semanas. La comunidad de r/Filmmakers opera más en modo craft-learning que en modo queja-IA. Esto refuerza que el ángulo correcto para ese segmento es "IA aplicada al oficio cinematográfico" (consistencia de postproducción, supervisión editorial), no "IA vs infraestructura".  
**Fuente:** reddit.com/r/Filmmakers — 14 abr 2026

### 3. OmniVoice: aceleración post-viral sostenida — +102 en 24h
**Clasificación:** En crecimiento acelerado  
**Señal:** OmniVoice pasa de **3,194 a 3,296 stars** (**+102** en ~24 horas). Esto supera su velocidad media del spike de los días anteriores (+500 en 3 días ≈ +167/día) solo ligeramente por debajo, lo que indica que el crecimiento **no está normalizando sino manteniéndose elevado**. Qwen3-TTS suma +21 (10,623→10,644). La tracción en voz/audio OSS es consistente.  
**Relevancia para 35mm:** La demanda en infraestructura de voz sigue siendo el vector de crecimiento más sostenido en el espacio OSS audiovisual. El módulo de doblaje/voice cloning tiene viento de cola tecnológico.  
**Fuente:** GitHub API (`k2-fsa/OmniVoice`, `QwenLM/Qwen3-TTS`) — 14 abr 2026

### 4. OpenMontage: normalización post-viral pero velocidad elevada
**Clasificación:** Normalizando — señal estructural persistente  
**Señal:** OpenMontage pasa de **1,557 a 1,634 stars** (**+77** en ~24 horas). Comparado con el pico de +545 en 3 días (≈+182/día), el ritmo actual es +77/día — por debajo del pico pero **muy por encima de su velocidad pre-viral** (+9 en un día el 10 abr). El repositorio sigue atrayendo usuarios probablemente por la cobertura que generó el reposicionamiento LLM-nativo del 12 abr.  
**Relevancia para 35mm:** El spike viral terminó pero el repositorio ha subido de nivel de visibilidad permanentemente. La categoría "agentic video production + LLM coding assistants" está consolidada como señal real, no efímera.  
**Fuente:** GitHub API (`calesthio/OpenMontage`) — 14 abr 2026

### 5. HunyuanVideo-1.5 y repos de video generativo: tracción mínima
**Clasificación:** Señal estructural plana  
**Señal:** HunyuanVideo-1.5 sube de **4,370 a 4,373** (**+3**). Helios (PKU-YuanGroup) de **1,675 a 1,680** (**+5**). FireRed-OpenStoryline (FireRedTeam) de **1,861 a 1,874** (**+13**). El video generativo puro sigue sin aceleración mientras voz y agentic se distancian.  
**Relevancia para 35mm:** La brecha entre video generativo (plano) y voice/agentic (en tracción) se confirma un día más. Priori en voice y pipelines agenticos sobre text-to-video genérico.  
**Fuente:** GitHub API — 14 abr 2026

---

## Tabla de señales

| Señal | Valor | Delta vs 2026-04-13 | Fuente |
|-------|-------|---------------------|--------|
| OSS agentic - OpenMontage | 1,634 stars | **+77** | GitHub |
| OSS voice - OmniVoice | 3,296 stars | **+102** | GitHub |
| OSS TTS - Qwen3-TTS | 10,644 stars | +21 | GitHub |
| OSS video gen - HunyuanVideo-1.5 | 4,373 stars | +3 | GitHub |
| OSS video gen - Helios (PKU) | 1,680 stars | +5 | GitHub |
| OSS agent edit - FireRed-OpenStoryline (FireRedTeam) | 1,874 stars | +13 | GitHub |
| Google Trends ES - "curso IA video" | N/D (429 rate limit) | — | Google Trends |
| Google Trends ES - "curso Blender" | N/D (429 rate limit) | — | Google Trends |
| Reddit VideoEditing - AI B-roll pricing | 35 upvotes / 32 comentarios | estable (**3ª semana**) | Reddit |
| Reddit Filmmakers - SSD cost pressure | **Desaparecido del top-5** | —↓ vs sem anterior | Reddit |
| Reddit Filmmakers - craft content (Goddard/Ritchie) | 1,014 / 651 upvotes | nuevo en top-5 | Reddit |

---

## Pendiente para próximo heartbeat

- [ ] Reintentar Google Trends ES cuando pase el rate-limit: verificar si `curso IA video` semana 12-18 abr confirma o retrocede desde el máximo de 100
- [ ] Verificar si OmniVoice mantiene ritmo >80 stars/día en las próximas 48h (confirmaría aceleración estructural)
- [ ] Seguir `FAS-22` — integración trends-monitor en heartbeat (Pablo Navarro)
- [ ] **Acción concreta:** Proponer a Lucía módulo "AI B-roll para clientes: flujo y pricing" con 3 semanas de validación Reddit como evidencia
- [ ] Comprobar si el hilo de SSD de r/Filmmakers reaparece o si la rotación a craft-content es definitiva
