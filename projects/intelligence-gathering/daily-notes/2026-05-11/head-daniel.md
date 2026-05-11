# Daniel Ruiz — Nota Diaria 2026-05-11

## Resumen

W20D1. Raul entrego nota completa HB26: BOE estable (W14-W20 sin resoluciones), EPA dia 13 retraso con CNAE-2025 confirmada en INE, SEPE 404 persistente, 3 competidores nuevos analizados. Senal critica de posicionamiento: Runway ya NO es diferenciador exclusivo (3 instituciones ES lo usan) — el unico diferenciador confirmado es Dalet Dalia + MAM + flujo broadcast. Alba sin produccion desde 2026-04-09 (32 dias). Lost Leads: n=14 estancado, 0 leads sin procesar, 0 recientes. Pipeline ingesta roto. FAS-19 bloqueado en Pablo Navarro sin avance.

---

## Revision de Analistas

### Raul Vega — Demanda Corporativa

**Estado**: Activo. Nota HB26 entregada con 4 hallazgos solidos.

| Hallazgo | Dato clave | Confianza |
|----------|-----------|-----------|
| CLA: BOE 11 mayo | 0 resoluciones. W14-W20 sin cambio. 18 concesiones estables | Alta |
| CLB: EPA T1 2026 | Dia 13 retraso. INE confirma CNAE-2025. Verificacion mie 13 + jue 14 mayo | Alta |
| CLC: SEPE CNAE 59/60 | 404 persistente. Lag >6,5 semanas. Reintentar mie 13 | Alta |
| CLD: Nuevos competidores | OFF ESCAC baja, CEV pendiente FUNDAE, EOI Malaga baja pero senal Runway | Alta |

**Evaluacion**: Calidad alta. Formato correcto, fuentes verificadas, cruces con equipo documentados. Raul sigue siendo el analista mas consistente del equipo.

### Alba Moreno — Inteligencia de No-Compra

**Estado**: INACTIVA. Ultima nota: 2026-04-09 (32 dias sin produccion).

**Causa raiz**: Pipeline de ingesta de Lost Leads roto. n=14 desde el lote semilla de abril. FAS-19 (mejora operativa: arranque persistente, healthcheck) bloqueado y asignado a Pablo Navarro. Sin nuevos leads entrando al sistema, Alba no tiene materia prima.

**Verificacion directa Lost Leads (localhost:3200)**:
- Total leads: 14
- Sin procesar: 0
- Leads ultima semana: 0
- Ultimo lead del lote: 2026-04-02

**Evaluacion**: El bloqueo no es de Alba — es de infraestructura. Pero 32 dias sin output es inaceptable. Escalado necesario.

---

## Cruce Demanda Corporativa x No-Compra

### Gap 1: Diferenciador de posicionamiento — Runway vs Dalet Dalia

| Dimension | Demanda corporativa (Raul) | No-compra (Alba, abril) |
|-----------|---------------------------|------------------------|
| Senal | EOI es 3a institucion ES con Runway explicito. Diferenciador "incluimos Runway" ya invalido | "competidor" = 2o motivo no-compra (3/14, 21.4%). Competidores elegidos: Too Many Flash, Lightbox, Ironhack, ECAM, CPA Salduie |
| Implicacion | Posicionamiento 35mm debe pivotar a "flujo broadcast profesional con Dalet Dalia y MAM" — exclusivo en ES | Los leads que eligen competidores no mencionan Dalet Dalia como factor — confirma que 35mm no ha comunicado este diferenciador |
| Accion | Actualizar messaging de ventas y marketing: eliminar Runway como USP, destacar Dalet Dalia + MAM | Cuando pipeline se desbloquee: verificar si leads futuros mencionan broadcast/Dalet como factor de decision |

### Gap 2: Precio x ECAM asimetria

| Dimension | Demanda corporativa | No-compra |
|-----------|-------------------|-----------|
| Senal | ECAM escalado a ROJA ALTA: Master Postproduccion con IA, precio subvencionado CAM | "precio" = top motivo no-compra (4/14, 28.6%), concentrado en animacion (2/3 leads animacion con price_sensitivity=high) |
| Implicacion | ECAM con precio subvencionado compite asimetricamente. 35mm sin RSEF no puede ofrecer FUNDAE como contrapeso de precio | La objecion de precio en animacion se agravara si ECAM captura ese segmento con precio subsidiado |
| Accion | RSEF es urgencia maxima (SHIFTA arranca en 14 dias). Sin RSEF, canal FUNDAE Q2-Q3 2026 perdido | Pipeline Medida 3 (productoras madrilenas) como canal alternativo B2B que no depende de RSEF |

### Gap 3: Contenido x competidores emergentes

| Dimension | Demanda corporativa | No-compra |
|-----------|-------------------|-----------|
| Senal | CEV tiene "IA aplicada a Fotografia y Video" — pendiente verificar FUNDAE W20D2 | "contenido" = 3er motivo (2/14, 14.3%): motion graphics para RRSS y sonido inmersivo/Dolby Atmos |
| Implicacion | Si CEV tiene FUNDAE, entra como 5o competidor canal empresa en segmento foto/video adyacente | Los gaps de contenido que 35mm pierde (motion graphics RRSS, Dolby Atmos) son nichos de empleabilidad contemporanea |
| Accion | Verificar CEV W20D2. Si FUNDAE activo: evaluar solapamiento con catalogo 35mm | Cluster-05 (motion graphics) ya identificado como cash cow — validar que el curriculo cubre RRSS/publicidad |

---

## Senales Detectadas

| Senal | Valor | Delta vs anterior | Fuente |
|-------|-------|-------------------|--------|
| Lost Leads n total | 14 | Sin cambio (32 dias) | localhost:3200/api/stats |
| Lost Leads leads recientes | 0 | Sin cambio | localhost:3200/api/stats |
| Top motivo no-compra | precio (28.6%) | Sin cambio | localhost:3200/api/stats |
| Competidores en mapa FUNDAE | 4 activos + 1 pendiente (CEV) | +1 pendiente | Raul HB26 |
| Runway como diferenciador | INVALIDADO (3 instituciones ES) | Nuevo — critico | Raul HB26 |
| Dalet Dalia exclusividad ES | CONFIRMADO | Sin cambio | Raul HB26 |
| RSEF status | BLOQUEADO | Sin cambio | Standup CEO |
| FAS-19 Lost Leads mejora | BLOQUEADO (Pablo Navarro) | Sin cambio (>30 dias) | Paperclip |
| EPA T1 2026 | Dia 13 retraso | +3 dias | Raul HB26 |
| SHIFTA arranque | 14 dias (25 mayo) | -3 dias | Raul HB26 |

---

## Bloqueos Activos

| Bloqueo | Owner | Dias bloqueado | Impacto |
|---------|-------|---------------|---------|
| FAS-19 Lost Leads operativa | Pablo Navarro (CTO) | >30 dias | Alba sin produccion. Inteligencia no-compra congelada. Sin datos frescos para cruzar con demanda |
| RSEF FUNDAE | Operaciones | Indefinido | Canal FUNDAE Q2-Q3 inaccesible. SHIFTA arranca en 14 dias. Ventana critica |
| Trends D9 cookie | Pablo Navarro (CTO) | 33+ dias | 10 sesiones congeladas. Impacto NAB sin medir |

---

## Pendiente para manana (12 mayo — W20D2)

- [ ] CEV FUNDAE: verificar si tiene FUNDAE activo (Raul, Iker)
- [ ] Pipeline Medida 3: iniciar lista productoras audiovisuales madrilenas activas (LinkedIn + ICAA 2025-2026)
- [ ] EPA/SEPE: preparar protocolo extraccion para mie 13 mayo
- [ ] Escalar FAS-19 a CEO: 32 dias sin avance en Lost Leads. Pipeline ingesta roto. Alba sin materia prima

---

*Actualizado al cierre 2026-05-11 — W20D1.*
