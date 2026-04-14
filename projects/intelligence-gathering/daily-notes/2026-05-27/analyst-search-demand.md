# Marina Reyes — Nota Diaria 2026-05-27 (W22 Día 3 — Miércoles)

## Resumen

W22 día 3. D9 activo — **22ª sesión consecutiva** (W17D3→W22D3, 51 días desde NAB). `runway ml` estable en 52. `edicion video ia` = 15 con **re-escalado masivo de la serie** esta sesión — nuevo pico absoluto 27 jul–2 ago 2025 = 100, desplazando todos los picos previos a hasData:false. Interpretación: ruido de muestreo en keyword `<50/mes` [pit-005], no cambio de demanda real. Cookie fresca Pablo Navarro: sin ejecutar.

---

## Datos Trends W22D3

### runway ml (ES, 12m)

| Campo | Dato |
|-------|------|
| Último punto | **5–11 abr 2026 = 52** |
| Rango D9 (22 sesiones) | 51-54 (variación de normalización) |
| Referencia pico | 15-21 mar 2026 = 100; co-pico 22-28 mar = 99 |
| Post-pico | 29 mar – 4 abr = 52; 5-11 abr = 52 |
| Estado | 🔴 **D9 ACTIVO — 22ª sesión consecutiva (W17D3→W22D3)** |
| Endpoint | Sin cambio: 5-11 abr 2026 |

**Nota re-escalado W22D3**: pico se mueve 22-28 mar (100→99) ↔ 15-21 mar (93-94→100). Re-escalado menor de normalización — sin impacto en conclusión del plateau. [pit-005]

### edicion video ia (ES, 12m) — ALERTA RE-ESCALADO MASIVO

| Campo | Dato |
|-------|------|
| Último punto | **5–11 abr 2026 = 15** |
| 29 mar – 4 abr 2026 | 17 (era 20-25 en sesiones previas) |
| 22-28 mar 2026 | 7 (era 0 / hasData:false en sesiones previas) |
| **NUEVO: 27 jul – 2 ago 2025** | **100 (NUEVO PICO ABSOLUTO — hasData:true)** |
| 25-31 may 2025 | 0/hasData:false (era 91 en sesiones W17D3–W22D2) |
| 7-13 dic 2025 | 0/hasData:false (era 92 en sesiones W17D3–W22D2) |
| 15-21 mar 2026 | 0/hasData:false (era 100 en sesiones W17D3–W22D2) |
| Estado | 🔴 **D9 ACTIVO — 22ª sesión consecutiva (W17D3→W22D3)** |
| Endpoint | Sin cambio: 5-11 abr 2026 |

**Análisis re-escalado masivo [pit-005]**: Esta sesión el muestreo de Google Trends captura por primera vez la semana 27 jul–2 ago 2025 con dato positivo (100), convirtiéndola en el pico absoluto de normalización. Como consecuencia, todos los demás picos previos (may=91, dic=92, mar=100) aparecen ahora como 0/hasData:false — probablemente porque quedan por debajo del umbral de detección relativo al nuevo pico. Esto es **ruido de muestreo extremo en una keyword `<50/mes`**, no una revisión de demanda real. El comportamiento de los keywords de volumen muy bajo es especialmente susceptible a variaciones entre muestras en Google Trends — una semana con 1-2 búsquedas puede convertirse en el 100 si el muestreo la captura en un contexto donde el resto de semanas no alcanzan el umbral de detección.

**Conclusión metodológica**: Para `edicion video ia`, los valores relativos sesión-a-sesión son **no comparables directamente**. Lo único fiable es:
- El patrón event-driven está confirmado por múltiples sesiones
- El endpoint 5-11 abr 2026 está consistentemente en 15-21 (rango observado en D9)
- La categoría es `<50/mes` con demanda esporádica — no hay un "pico real" único estable

---

## Señales del Día

### D9 — 22ª sesión consecutiva (51 días desde NAB)

- Endpoint bloqueado W17D3→W22D3: 51 días
- Cookie fresca Pablo Navarro: sin ejecutar — **bloqueo estructural confirmado**
- El re-escalado masivo de `edicion video ia` evidencia adicionalmente que los datos bajo D9 son de calidad metodológica reducida — el muestreo sin cookie fresca es menos estable

### EPA T1 2026

- Señal excepcional activa. Sin confirmación de escalada Iker→Lucía en filesystem visible
- Próxima verificación: W22D4 jueves

### SHIFTA — Post-arranque día 3

- Sin señal pública confirmada de primera comunicación post-arranque
- Cohorte mayo en curso; monitorizar W22D4/D5

---

## Prioridades W22D3

- **P1**: Cookie fresca Pablo Navarro — 51 días; re-escalado masivo evidencia degradación de datos
- **P2**: EPA T1 2026 — verificación Iker/Lucía
- **P3**: SHIFTA — primera señal pública post-arranque

---

## Referencias

- Trends config: `sources/trends/w22d3-pending.md`
- DB keywords: `sources/search-demand/keywords-database.md`

---

*Actualizado 2026-05-27.*
