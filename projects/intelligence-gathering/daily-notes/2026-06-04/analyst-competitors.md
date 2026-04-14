# Iker Molina — Nota Diaria 2026-06-04 (W23 Día 4 — Jueves)

## Resumen

W23D4. **EPA T1 2026 SIN PUBLICAR — ≥D31 laborable. W23D4 negativo. Penúltimo día de W23.** The BIG IA: **D-1 para arranque** — inicio mañana viernes 5 junio, €1.797 confirmado, sin sold out, sin countdown. CEI pre-arranque 29 junio: dos programas audiovisuales confirmados con fecha 29 jun. Hallazgo menor: WebSearch detecta URL separada para `master-produccion-postproduccion-audiovisual` Y `master-avanzado-en-produccion-postproduccion-3d-y-gestion-audiovisual` — posible nivel adicional CEI pendiente de verificación directa. Sector estable. Mapa: **32 competidores** (sin cambios).

---

## Hallazgos

### Hallazgo 1: EPA T1 2026 — ≥D31. W23D4 negativo. Penúltimo día W23

- **Fuente**: INE WebFetch ultiDatos (consultado 2026-06-04)
- **Dato**: Sin publicar. Q4 2025 (27 enero 2026) sigue siendo el último dato EPA. Décimo primer día laborable consecutivo sin publicación post-escalada (contando desde W21D5). Nota CNAE-2025 presente.
- **Estado**: **≥D31 laborables — W23D4 NEGATIVO**.
- **Umbral mañana**: W23D5 es el último día de W23. Si cierra sin dato → retraso ≥D32 laborables. Propuesta de escalada para Lucía preparada.
- **Próxima acción**: Verificación W23D5 (viernes 5 junio — cierre semanal).

---

### Hallazgo 2: The BIG IA — D-1. Sin sold out. Arranque confirmado mañana

- **Fuente**: WebFetch thebigschool.com/master-ia/ (consultado 2026-06-04)
- **Dato**:
  - Inicio **5 de junio** — mañana — confirmado
  - **€1.797** ("Desde 1.797€") — sin cambio de precio
  - **Sin sold out** — sin mensajes de capacidad agotada, sin waitlist
  - **Sin countdown** — no hay urgencia artificial en la página
  - CTA estándar: "Reserva Tu Plaza" (€150 depósito), "Solicita Información"
  - Sin nueva convocatoria adicional anunciada
- **Interpretación**: The BIG IA arranca mañana con plazas disponibles. No hay señal de sold out pre-arranque, lo que sugiere que la edición no se ha llenado por completo antes del inicio o que no comunican sold out públicamente. La verificación definitiva es mañana (W23D5).
- **Decisión**: Sin cambios en config. Verificar mañana: ¿comunicación de lanzamiento? ¿Sold out post-inicio? ¿Nueva convocatoria anunciada?

---

### Hallazgo 3: CEI pre-arranque 29 junio — Dos URLs audiovisuales confirmadas. Posible nivel adicional pendiente

- **Fuente**: WebSearch cei.es (consultado 2026-06-04)
- **Dato**:
  - **Máster en Diseño Gráfico y Postproducción Audiovisual** (URL: `master-diseno-grafico-video`): próx 29 jun 2026 ✓ — en config como €3.200
  - **Máster en Producción y Postproducción Audiovisual** (URL: `master-produccion-postproduccion-audiovisual`): próx 29 jun 2026 ✓ — candidato a €3.750 en config
  - **Máster Avanzado en Producción, Postproducción 3D y Gestión Audiovisual** (URL: `master-avanzado-en-produccion-postproduccion-3d-y-gestion-audiovisual`): próx 29 jun 2026 — **URL distinta al anterior** ⚠️
  - **Pregunta abierta**: ¿Son el "Máster en Producción y Postproducción Audiovisual" y el "Máster Avanzado en Producción, Postproducción 3D y Gestión Audiovisual" dos programas diferentes o el mismo con nombre largo? Si son dos programas distintos, CEI tendría **11 niveles** (3 audiovisuales con FUNDAE).
  - **Precios confirmados por síntesis**: Máster IA Big Data €4.150 confirmado (ya en config). Máster IA general 360h: 4 conv/año (oct, ene, abr, jun) — ya en config.
- **Decisión**: No actualizar config sin verificación directa. Pendiente WebFetch de ambas URLs en W24D1 para determinar si son programas distintos.

---

### Hallazgo 4: Sector sweep W23D4 — Estable

- **Fuente**: WebSearch (consultado 2026-06-04)
- **Dato**: Sin nuevos competidores de impacto. Sin lanzamientos de última hora. The BIG IA domina mañana viernes. Sector tranquilo.
- **Estado del mapa W23D4**: **32 competidores** (sin cambios).

---

## Señales Detectadas

| Señal | Valor | Delta vs 2026-06-03 | Fuente |
|-------|-------|---------------------|--------|
| EPA T1 2026 | **Sin publicar — ≥D31; W23D4 negativo; penúltimo día W23** | +1 día laborable | INE WebFetch |
| The BIG IA | **D-1** — €1.797, inicio 5 jun confirmado, sin sold out, sin countdown | Sin cambio en datos; D-1 | thebigschool.com |
| CEI 29 junio | Dos programas audiovisuales confirmados; **posible 11º nivel pendiente verificación** (URL adicional `master-avanzado`) | Nuevo hallazgo menor | WebSearch CEI |
| Sector | Estable — 32 competidores | Sin cambio | WebSearch |

**Mapa de competidores**: **32 competidores** (sin cambios).

---

## Actualizaciones aplicadas en competitors-config.md

- [x] **Fecha**: 2026-06-03 → 2026-06-04
- [x] **EPA señal**: ≥D31; W23D4 negativo; próxima verificación W23D5 cierre semanal + The BIG IA arranque
- [x] **Header amenaza**: W23D4 (actualizado 2026-06-04)

---

## Prioridades W23D5 (viernes 5 junio — cierre semanal)

- [ ] **EPA T1 2026** — verificación W23D5. Si negativo → retraso ≥D32 laborables → escalada con Lucía: ¿umbral actualizado? ¿contacto INE?
- [ ] **The BIG IA** — verificación día de arranque (5 jun): ¿comunicación lanzamiento? ¿Sold out? ¿Nueva convocatoria?
- [ ] **Balance W23** — resumen semanal (EPA, MCS, The BIG IA)
- [ ] **W24D1** — pending: WebFetch directo CEI URLs audiovisuales para determinar si hay 11 niveles

---

*Actualizado al cierre del día 2026-06-04. W23D4.*
