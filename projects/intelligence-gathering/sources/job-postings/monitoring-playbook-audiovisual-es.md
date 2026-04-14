# Playbook de Monitorizacion — Ofertas Audiovisuales España

Fecha baseline: 2026-04-10  
Responsable operativo: Adrián Torres

## Objetivo

Estandarizar el rastreo diario de ofertas audiovisuales para que las series d/d y w/w sean comparables aunque cambien los portales disponibles o aparezcan bloqueos operativos.

## Baseline comparable activo [2026-04-10]

| Senal | Portal | Query / URL | Regla de conteo | Baseline 2026-04-10 |
|-------|--------|-------------|-----------------|---------------------|
| LinkedIn `AI Video Editor` Espana | LinkedIn Jobs | https://es.linkedin.com/jobs/search?keywords=AI+Video+Editor&location=Spain | Tomar el total visible en la cabecera de resultados y anotar tambien `ultimas 24h` si aparece | 95 |
| LinkedIn `Motion Graphics Designer` Espana | LinkedIn Jobs | https://es.linkedin.com/jobs/motion-graphics-designer-empleos | Tomar el total visible en la cabecera y anotar tambien `ultimas 24h` | 37 |
| Indeed `motion designer` Espana | Indeed Espana | https://es.indeed.com/q-motion-designer-empleos.html | Tomar el total visible de resultados | 100 |
| Tecnoempleo `audiovisual` | Tecnoempleo | https://www.tecnoempleo.com/ofertas-trabajo/audiovisual | Tomar el total visible en listado/cabecera | 8 |
| Tecnoempleo `motion graphics` | Tecnoempleo | https://www.tecnoempleo.com/ofertas-trabajo/motion-graphics | Tomar el total visible en listado/cabecera | 1 |
| Domestika pagina 1 `publicados este mes` audiovisual/contenido | Domestika Jobs | https://www.domestika.org/es/jobs | Contar solo vacantes relevantes en la primera pagina | 6 |
| Notodoanimacion `motion puro verificado por URL directa` | Notodoanimacion | https://www.notodoanimacion.es/ofertas-de-empleo-para-artistas-digitales/ofertas-de-empleo-graphic-design-motion/ | Contar solo ofertas activas verificadas por URL directa y claramente centradas en motion | 3 |
| InfoJobs creativo audiovisual | InfoJobs | https://www.infojobs.net/ofertas-trabajo/creacion-contenidos | Registrar estado operativo del portal; no usar en baseline mientras haya captcha | bloqueado |

## Regla de relevancia por portal

### LinkedIn Jobs
- Priorizar titulos exactos o semanticamente cercanos a `AI Video Editor` y `Motion Graphics Designer`.
- Extraer geografia cuando el portal la agregue en la pagina de resultados.
- Usar fichas individuales solo para validar skills y salarios de muestra.

### Indeed Espana
- Usar `motion designer` como query de control principal.
- Validar fichas individuales cuando el titulo sugiera IA aplicada, motion senior o salario visible.

### Tecnoempleo
- Mantener solo para audiovisual tecnico y cruces de hardware, soporte multimedia o software especializado.
- No usarlo como fuente principal de creatividad pura.

### Domestika Jobs
- Contar solo roles con contenido, video, motion, IA aplicada o social video.
- Excluir puestos de marketing general sin componente audiovisual claro.

### Notodoanimacion
- Contar solo ofertas `motion puro` o hibridos directos de `video + motion`.
- Requiere URL directa verificable de la oferta, no solo tarjeta de categoria.
- No mezclar con VFX, videojuegos o animacion 3D salvo que haya seguimiento especifico por cluster.

### InfoJobs
- Mientras exista captcha, registrar solo el estado del bloqueo y los `Request ID`.
- Cuando vuelva el acceso, correr 5 dias de solape con el proxy de Notodoanimacion antes de cambiar la serie comparable.

## URLs de referencia verificadas [2026-04-10]

### LinkedIn
- https://es.linkedin.com/jobs/view/filmmaker-ai-video-editor-at-thecube-4399249804
- https://es.linkedin.com/jobs/view/motion-designer-at-treatwell-4400247025
- https://es.linkedin.com/jobs/view/senior-motion-designer-at-scopely-4399471295

### Indeed
- https://es.indeed.com/viewjob?jk=a24de73f92262835

### Tecnoempleo
- https://www.tecnoempleo.com/fpga-engineer-audiovisual-industry-page-personnel/xilinx-vivado/rf-7731148b921c832b6046
- https://www.tecnoempleo.com/tecnico-soporte-multimedia/multimedia/rf-6f971f4a229de32b6042

### Domestika
- https://www.domestika.org/es/jobs/111667-social-media-content-creator-madrid-espana
- https://www.domestika.org/es/jobs/111642-creador-a-de-contenido-con-ia-y-avatares-experto-en-veo3-heygen-en-remoto
- https://www.domestika.org/es/jobs/111637-motion-graphic-designer-diseno-video-digital-madrid-espana

### Notodoanimacion
- https://www.notodoanimacion.es/ofertas-de-empleo/senior-motion-designer-paid-advertisement-2/
- https://www.notodoanimacion.es/ofertas-de-empleo/senior-video-editor-motion-designer-7/
- https://www.notodoanimacion.es/ofertas-de-empleo/motion-designer-director-a-de-arte-midweight/

## Secuencia diaria recomendada

1. Leer primero los valores del ultimo dia en la nota diaria anterior.
2. Medir las 6 senales base y, mientras InfoJobs siga bloqueado, mantener el proxy de Notodoanimacion.
3. Verificar 2-3 fichas individuales nuevas para capturar skills, geografia y salario.
4. Registrar cualquier titulo emergente nuevo de IA, motion o contenido.
5. Actualizar la nota diaria y la memoria del dia con deltas exactos.

## Alertas de cambio

- Si `AI Video Editor` supera 110 en LinkedIn, revisar si hay crecimiento real o inflado semantico.
- Si Domestika sube de 6 a 7+ en pagina 1, revisar aceleracion en content + motion.
- Si el proxy de Notodoanimacion baja de 3 a 1 o 0, tratarlo como enfriamiento del nicho motion senior.
- Si InfoJobs desbloquea acceso, reintroducirlo con serie paralela antes de compararlo contra dias previos.
