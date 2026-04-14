# Noa Herrera — Nota Diaria 2026-04-14

## Resumen

Causa del spike OpenMontage confirmada: campaña viral en Twitter/X y Threads (formato "🚨BREAKING") disparó 1.5k+ stars en ~2 semanas, no evento único sino momentum sostenido. OmniVoice (Xiaomi, TTS 600+ idiomas) es herramienta complementaria en el mismo stack de producción agentica, no producto del mismo ecosistema. NAB 2026 arranca el 18/04 con señal clara: segundo AI Pavilion, IA agentica en newsroom y flujos de postproducción. Señal `curso IA video` no confirmable esta semana (datos Trends incompletos para 12-18 abril, semana en curso). AI B-roll sigue siendo tema vivo en comunidades 2026.

---

## Hallazgos

### Hallazgo 1: OpenMontage — causa del spike confirmada (Twitter/X + Threads viral)

- **Fuente**: Twitter/X — @sukh_saroy ([tweet](https://x.com/sukh_saroy/status/2041304711253643693)), @heygurisingh ([tweet](https://x.com/heygurisingh/status/2042811095703031969)), @ErickSky en español ([tweet](https://x.com/ErickSky/status/2040824372793930063)); Threads — @aiagents101, @explooai; GitHub — [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)
- **Dato**: El repositorio acumula **1.5–1.6k stars** (de ~0 en ~16 días desde creación en marzo 2026). Múltiples cuentas de alto alcance publicaron en formato "🚨BREAKING: An open-source agentic video production system just dropped" destacando el claim viral: **"full product ad produced for $0.69 total"**. El post en español de @ErickSky amplificó la señal a audiencia hispanohablante. El repo no había aparecido en GitHub Trending según TrendShift — el crecimiento es 100% orgánico vía redes sociales.
- **Descripción técnica**: 12 pipelines de producción, 52 herramientas, 500+ agent skills. Funciona con Claude Code, Cursor, Copilot, Windsurf. AGPL-3.0. Python 91.4%. Pipeline completo: research → script → assets → edit → compose. Puede construir vídeos con footage real (stock + archivos abiertos), imágenes animadas vía Remotion, narración y música automatizadas.
- **Veredicto**: **Tracción real, no evento puntual.** El hook "$0.69 por un anuncio completo" es altamente compartible. El proyecto está en desarrollo activo (último commit: 1 día antes). Momentum sostenido probable dado que encaja con narrativa "AI coding assistant como estudio de producción" — framing diferenciador vs. tools text-to-video.
- **Relevancia para 35mm.es**: La frontera se desplaza de "herramientas text-to-video" a "pipelines de producción agenticos LLM-nativos". Implicación curricular: en 3-6 meses este paradigma estará en el mercado. Módulo potencial: "Producción agentica con Claude Code / Cursor — el estudio de una persona".
- **Confianza**: Alta

---

### Hallazgo 2: OmniVoice — herramienta de audio en el stack LLM-nativo

- **Fuente**: [altools.ai/15788](https://altools.ai/15788.html) · [OmniVoice vLLM docs](https://docs.vllm.ai/projects/vllm-omni/en/latest/user_guide/examples/offline_inference/omnivoice/) · [OmniVoice-Studio GitHub](https://github.com/debpalash/OmniVoice-Studio) · [Medium guide abril 2026](https://medium.com/@ammanakhtar8/%EF%B8%8F-how-to-run-omnivoice-600-language-ai-voice-model-on-free-google-colab-complete-guide-625dcdfa672e)
- **Dato**: OmniVoice es el modelo TTS multilingüe de Xiaomi AI Lab — **600+ idiomas**, arquitectura diffusion language model no-autorregresiva, entrenado en ~581.000 horas de audio. RTF 0.025 (40× más rápido que tiempo real). Zero-shot voice cloning, control de paralinguística (risa, suspiro), corrección de pronunciación a nivel fonema. OmniVoice-Studio es un proyecto independiente que lo envuelve como "cinematic audio dubbing, cloning and voice generation studio".
- **Relación con OpenMontage**: No hay integración directa confirmada. La conexión es de **stack complementario**: OpenMontage necesita generación de narración y doblaje multilingüe; OmniVoice cubre esa capa de audio. Ambos son open-source y LLM-nativos. El spike de interés en OmniVoice (~1 día antes del análisis de hoy según Medium) coincide temporalmente con el momentum de OpenMontage — probable efecto de co-descubrimiento en comunidades de AI devs.
- **Relevancia para 35mm.es**: OmniVoice habilita localización de contenido (600+ idiomas) con clonación de voz zero-shot. Módulo potencial de alta diferenciación: "Producción multilingüe con IA — doblaje, localización y voz sintética para creadores profesionales".
- **Confianza**: Media (conexión ecosistema inferida, no confirmada por integración oficial)

---

### Hallazgo 3: Google Trends `curso IA video` — semana 12-18 abril sin confirmar

- **Fuente**: Google Trends ES (semana en curso, datos parciales)
- **Dato**: El pico histórico 100 fue semana **5-11 abril** (confirmado en standup D1). La semana 12-18 abril **no puede confirmarse aún** — la semana está en curso (hoy es D3, martes 14 abril). Google Trends no publica datos semanales hasta que la semana cierra. Señal de contexto: múltiples cursos gratuitos de IA de Google activos en España en abril 2026 (AI Essentials, Cloud Skills Boost) + narrativa de "prioridad IA" en medios ES. Factores que podrían sostener el pico.
- **Relevancia para 35mm.es**: Marina Reyes tiene asignada esta validación (standup D2: "comprobar si `curso IA video` sustenta señal en semana 12-18 abril cuando dato sea completo"). Mi rol: observación cualitativa de señales que puedan anticipar la dirección.
- **Confianza**: Baja (dato semanal incompleto — verificar el viernes 17 o lunes 20 abril)

---

### Hallazgo 4: AI B-roll pricing — señal viva, 3ª semana sin hilo específico confirmado

- **Fuente**: [vidwave.ai — Top AI Video Tools Reddit 2026](https://vidwave.ai/top-ai-video-tools-according-to-reddit-communities-2026) · [opus.pro — Best AI B-Roll Generators 2026](https://www.opus.pro/blog/best-ai-b-roll-generators-short-form-video) · [aidailyshot.com — AI Video Editing 2026](https://aidailyshot.com/blog/ai-video-editing-tools-2026-state-of-the-market)
- **Dato**: No se localizó un hilo específico de r/VideoEditing para la 3ª semana consecutiva (búsquedas directas en Reddit bloqueadas por limitaciones de acceso). Señales contextuales sólidas: (1) **Kling v3** es el "Reddit darling" de 2026 para B-roll — freemium agresivo, 66 créditos diarios gratis; (2) coste por minuto de vídeo generado bajó **~65% de 2024 a 2025** (entrada de modelos chinos: Kling, Hailuo, Seedance); (3) debate activo sobre disclosure de IA ante clientes — IAB publicó marco de transparencia en enero 2026; (4) la narrativa "AI invisible en B-roll" se consolida como estándar de calidad en 2026.
- **Relevancia para 35mm.es**: La pregunta "¿cómo facturar trabajo con IA al cliente?" está abierta en comunidades. Oportunidad de contenido de alto valor diferencial: módulo "Pricing y transparencia IA para profesionales del audiovisual".
- **Confianza**: Media (señal viva confirmada, hilo específico de 3ª semana no localizable sin acceso directo a Reddit)

---

### Hallazgo 5: NAB 2026 — segunda semana crítica para IA audiovisual (arranca 18/04)

- **Fuente**: [videoproduction.news — Cuez NAB 2026](https://www.videoproduction.news/cuez-brings-four-new-innovations-to-nab-2026-from-story-centric-newsroom-to-open-ai-agent-framework/) · [videoproduction.news — DigitalGlue NAB 2026](https://www.videoproduction.news/digitalglue-challenges-ai-fatigue-at-nab-show-2026-with-creative-space-platform-the-only-creative-operating-system-built-for-video/) · [openpr.com — Cutback Selects](https://www.openpr.com/news/4469134/from-footage-to-first-draft-before-your-nle-cutback-debuts) · [tvtechnology.com — Ross Video + HighField AI](https://www.tvtechnology.com/production/ross-video-and-highfield-ai-to-deliver-ai-assisted-graphics-creation) · [videomaker.com — What's new NAB 2026](https://www.videomaker.com/featured/whats-new-at-nab-2026-all-you-need-to-know/)
- **Dato**: NAB Show 2026 (Las Vegas, 18-22 abril). Señales pre-show confirmadas:
  - **2 AI Innovation Pavilions** (vs. 1 en 2025) — señal clara de saturación/institucionalización IA en industria broadcast
  - **Cuez**: framework agentico abierto para producción en directo (Storydesk, Blockz, Browz)
  - **DigitalGlue creative.space Intelligence**: "único creative operating system construido para vídeo" — combina storage + IA en plataforma unificada
  - **Cutback Selects**: IA de edición pre-NLE — convierte horas de multi-cam en primer borrador estructurado antes de entrar al editor
  - **Ross Video + HighField AI**: gráficos asistidos por IA para broadcast — contexto de historia → gráficos on-air con consistencia de marca
  - **200% más creadores de contenido** en asistencia vs. 2025; contenido para redes sociales +150%
  - Tendencias transversales: cloud workflows, SMPTE ST 2110, HDR, streaming monetization (FAST/SVOD/AVOD)
- **Relevancia para 35mm.es**: NAB 2026 confirma que la IA en producción profesional ya no es "experimental" — es track principal del mayor congreso broadcast del mundo. Oportunidad de contenido editorial inmediata (18-22 abril): cobertura de anuncios NAB como señal de adopción masiva. Iker Molina cubre competidores; mi foco: nuevas herramientas y flujos emergentes.
- **Confianza**: Alta

---

## Señales Detectadas

| Señal | Valor | Delta vs ayer | Fuente |
|-------|-------|---------------|--------|
| OpenMontage stars GitHub | ~1.5–1.6k | +545 en 3d (D1) / sostenido | github.com/calesthio/OpenMontage |
| OpenMontage causa viral | Twitter/X + Threads "🚨BREAKING" | Confirmado hoy | @sukh_saroy, @heygurisingh, @ErickSky |
| OmniVoice idiomas | 600+ | Primer análisis | Xiaomi AI Lab / vLLM docs |
| NAB 2026 AI Pavilions | 2 (vs 1 en 2025) | +100% YoY | videomaker.com |
| NAB 2026 creadores de contenido | +200% asistencia | +200% vs 2025 | NAB/SVG |
| AI B-roll coste por minuto generado | -65% de 2024 a 2025 | Tendencia estructural | opus.pro / aidailyshot.com |
| `curso IA video` semana 12-18 abril | Sin dato (semana en curso) | Pendiente viernes 17 | Google Trends ES |

---

## Clasificación de señales

| Señal | Clasificación |
|-------|---------------|
| OpenMontage producción agentica | **En crecimiento** — tracción real, momentum sostenido |
| OmniVoice audio LLM-nativo | **Emergente** — acoplamiento con producción agentica incipiente |
| NAB 2026 institucionalización IA broadcast | **Consolidada** — 2 AI Pavilions = adopción masiva mainstream |
| AI B-roll pricing debate comunidades | **En crecimiento** — 2ª–3ª semana señal, modelos chinos aceleran |
| `curso IA video` pico histórico | **En crecimiento** — verificación semana completa pendiente (viernes) |

---

## Pendiente para mañana (W16 D3, 2026-04-15)

- [ ] Monitorizar primeros anuncios NAB 2026 (el show abre el viernes 18 — D5 es el día clave, pero mañana pueden salir pre-show announcements)
- [ ] Buscar hilo específico r/VideoEditing sobre AI B-roll pricing semana 3 (acceso directo Reddit)
- [ ] Verificar si `curso IA video` muestra datos preliminares para semana 12-18 en Google Trends (disponibilidad parcial)
- [ ] Rastrear si OpenMontage alcanza GitHub Trending (TrendShift aún sin registro) — umbral ~200 stars/día
- [ ] Comprobar si OmniVoice-Studio integra con OpenMontage en algún pipeline oficial (docs OpenMontage)
