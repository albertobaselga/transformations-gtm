# ANEXO D — Catálogo operativo de programas: plantilla y proceso

**Documento de referencia operativa**
Proyecto: Transformación del Modelo de Comercialización — Northius
Versión: 1.0 | Abril 2026
Propietario: RevOps
Aprobación de cambios: Director Comercial + Director Académico

---

## Índice

1. [Propósito](#1-propósito)
2. [Criterio de clasificación](#2-criterio-de-clasificación)
3. [Plantilla de ficha por programa](#3-plantilla-de-ficha-por-programa)
4. [Ejemplos de clasificación](#4-ejemplos-de-clasificación)
5. [Proceso de mantenimiento](#5-proceso-de-mantenimiento)
6. [Reglas de consistencia](#6-reglas-de-consistencia)
7. [Integración técnica](#7-integración-técnica)
8. [Gaps esperables y plan de resolución](#8-gaps-esperables-y-plan-de-resolución)
9. [Checklist de validación inicial](#9-checklist-de-validación-inicial)

---

## 1. Propósito

### 1.1 Por qué existe este catálogo

El plan estratégico de transformación (§6.3) define tres modalidades de auto-enrollment —directo, condicionado y asistido— y establece que el motor de intención debe decidir, para cada lead, qué ruta activar. Sin embargo, esa decisión no puede tomarse en tiempo real si el sistema no sabe de antemano a qué modalidad pertenece el programa que el lead está evaluando.

Sin un catálogo estructurado y mantenido, el motor de intención opera con un vacío crítico: conoce la intención del lead, su scoring y su estado, pero no conoce las restricciones, el perfil esperado ni la ruta asignada al programa concreto. El resultado es una decisión de ruta por defecto —generalmente asistida— que penaliza la eficiencia y derrota el propósito de la arquitectura autónoma.

### 1.2 Por qué no está en Fase 1 del plan original

La Fase 1 del plan se centra en levantar las capacidades transversales del sistema: motor de intención, capa de IA, chat persistente, auto-enrollment como infraestructura y política económica gobernada. Esas capacidades son independientes del catálogo porque pueden construirse y probarse con un subconjunto piloto de programas catalogados manualmente.

Incorporar el catálogo completo en Fase 1 habría introducido una dependencia organizativa de alto coste —validación académica, aprobación de condiciones, levantamiento de datos de decenas de programas— que habría retrasado el arranque técnico sin añadir valor en ese momento.

El catálogo es un prerrequisito de **Fase 2** porque es en esa fase cuando el motor de intención debe operar de forma autónoma a escala, enrutar sin intervención manual y personalizar la experiencia por programa. Sin catálogo completo y validado, Fase 2 no puede desplegarse con garantías.

### 1.3 Qué habilita este catálogo

- El motor de intención lee la modalidad de auto-enrollment del programa y enruta al lead sin reglas hardcoded.
- Las landing pages cargan el flujo correcto (directo, condicionado o asistido) según el ID de programa.
- El CRM asigna SLA de primera respuesta diferenciado por tipología.
- El equipo comercial humano recibe solo los leads que corresponden a su perfil de intervención.
- RevOps puede auditar si los programas están siendo tratados según su modalidad declarada.

---

## 2. Criterio de clasificación

La modalidad de auto-enrollment de un programa se determina combinando ocho atributos. No existe un umbral único: la clasificación resulta de la combinación de señales, con las reglas de consistencia de §6 como capa de validación final.

| Atributo | Descripción | Impacto en modalidad |
|---|---|---|
| **Ticket base** | Precio de lista del programa (sin descuentos ni becas) | Ticket > 3.500 € → presunción de ruta asistida salvo excepción aprobada |
| **Duración** | Horas lectivas o semanas de la formación | Cursos < 100 h tienden a directo; programas > 1 año tienden a asistido |
| **Requisitos de acceso** | Titulación mínima, nota de corte, experiencia profesional requerida, idioma, documentación obligatoria | Cualquier requisito de verificación documental → mínimo condicionado |
| **Perfil de alumno** | Segmento dominante: recién titulado, profesional en activo, directivo, reconversión laboral | Perfiles de alta sensibilidad o decisión larga → asistido o condicionado |
| **Necesidad de diagnóstico** | Si el programa requiere entrevista de evaluación, test de nivel, portfolio u otro mecanismo de encaje | Entrevista obligatoria → condicionado o asistido; nunca directo |
| **Sensibilidad al precio** | Elasticidad observada del segmento; proporción de leads que objetan precio | Alta sensibilidad → asistido para aplicar palancas económicas |
| **Volumen de leads** | Número esperado de leads mensuales por programa | Volumen alto con ticket bajo → directo para escalar sin coste comercial |
| **Modalidad docente** | Online, presencial o híbrida | Presencial o híbrida añade fricción logística → condicionado o asistido |

### 2.1 Regla de síntesis rápida

Un programa es **directo** cuando: ticket bajo + sin requisitos de acceso + online + perfil masivo + sin entrevista.

Un programa es **condicionado** cuando: tiene requisitos académicos verificables, cupo limitado o entrevista de encaje, independientemente del ticket.

Un programa es **asistido** cuando: ticket alto, perfil de decisión larga, presencialidad relevante, objeción de precio habitual o requiere propuesta económica personalizada.

Un programa es **mixto** cuando la modalidad docente o la vía de acceso varía y la ruta debe bifurcarse según la opción elegida por el lead.

---

## 3. Plantilla de ficha por programa

Cada programa del portfolio debe tener una ficha con los siguientes campos. La plantilla se mantiene en la herramienta designada como fuente única de verdad (ver §7).

| Campo | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| **ID programa** | Código único | Identificador interno único, estable, sin espacios | `NTH-MKT-CM-001` |
| **Marca** | Texto | Marca o unidad de negocio propietaria del programa | `Northius Digital` |
| **Nombre del programa** | Texto | Nombre comercial completo | `Community Manager Profesional` |
| **Ticket base** | Numérico (€) | Precio de lista sin promociones | `690` |
| **Duración** | Texto | Horas o semanas según formato del programa | `60 horas` |
| **Modalidad docente** | Enum | `Online` / `Presencial` / `Híbrida` | `Online` |
| **Requisitos de acceso** | Texto | Descripción de requisitos obligatorios o "Sin requisitos" | `Sin requisitos mínimos` |
| **Modalidad auto-enrollment** | Enum | `Directo` / `Condicionado` / `Asistido` / `Mixto` | `Directo` |
| **Perfil dominante** | Texto | Descripción del alumno tipo | `Profesional en activo, 25-40 años, reconversión o actualización` |
| **Objeción típica** | Texto | Principal fricción observada en el proceso de venta | `Precio vs. formaciones gratuitas online` |
| **Ruta default** | Enum | `Ruta A (autónoma)` / `Ruta B (consultiva)` | `Ruta A` |
| **SLA primera respuesta** | Minutos | Tiempo máximo desde creación del lead hasta primer contacto IA | `5 min` |
| **Fuentes de fricción conocidas** | Texto | Factores que históricamente bloquean la matrícula | `Duda sobre reconocimiento del título` |
| **Contacto académico** | Nombre + email | Responsable académico del programa | `Ana García <agarcia@northius.com>` |
| **Contacto comercial** | Nombre + email | Responsable comercial o coordinador de ventas | `Luis Martín <lmartin@northius.com>` |
| **Última revisión** | Fecha | Fecha de la última validación del registro | `2026-03-15` |

---

## 4. Ejemplos de clasificación

Las siguientes fichas son programas ficticios pero representativos del portfolio de educación superior española. Ilustran cómo se aplica el criterio de clasificación a casos reales.

### 4.1 Tabla de fichas ejemplo

| Campo | CM-60 | MBA-EXE | GRADO-ADE | BOOT-DEV | AE-SALUD |
|---|---|---|---|---|---|
| **ID programa** | NTH-MKT-CM-001 | NTH-DIR-MBA-010 | NTH-UNI-ADE-020 | NTH-TECH-BD-030 | NTH-SPEC-AE-040 |
| **Marca** | Northius Digital | Northius Business School | Northius Universidad | Northius Tech | Northius Health |
| **Nombre** | Community Manager Profesional 60h | MBA Executive | Grado en Administración de Empresas | Bootcamp Full Stack Developer | Alta Especialización en Gestión Sanitaria |
| **Ticket base** | 690 € | 12.800 € | 6.200 €/año | 4.900 € (online) / 6.500 € (presencial) | 2.400 € |
| **Duración** | 60 horas | 18 meses | 4 años | 16 semanas | 180 horas |
| **Modalidad docente** | Online | Híbrida | Presencial / Online | Online o Presencial (según opción) | Online |
| **Requisitos de acceso** | Sin requisitos mínimos | Título universitario + 5 años experiencia directiva | Bachillerato + Selectividad (nota de corte: 5,5) | Sin requisitos académicos; test técnico de entrada | Titulación universitaria en ciencias de la salud |
| **Modalidad auto-enrollment** | **Directo** | **Asistido** | **Condicionado** | **Mixto** | **Condicionado** |
| **Perfil dominante** | Profesional 25-40 años; reconversión o actualización en redes sociales | Directivo o mando intermedio senior; decisión larga y consultiva | Estudiante post-Bachillerato; decisión familiar con implicación larga | Profesional en reconversión tech; motivación alta, urgencia variable | Profesional sanitario en activo; búsqueda de diferenciación |
| **Objeción típica** | Precio vs. formaciones gratuitas online | ROI a largo plazo; coste total; compatibilidad con agenda ejecutiva | Nota de corte; duda sobre salidas vs. universidad pública | Duda sobre empleabilidad real; precio si presencial | Encaje del perfil; reconocimiento del título |
| **Ruta default** | Ruta A (autónoma) | Ruta B (consultiva) | Ruta B (consultiva) | Ruta A si online; Ruta B si presencial | Ruta B (consultiva) |
| **SLA primera respuesta** | 5 min | 15 min | 10 min | 5 min (online) / 10 min (presencial) | 10 min |
| **Fuentes de fricción conocidas** | Duda sobre validez del título; precio vs. YouTube | Duración; compatibilidad laboral; aprobación de empresa | Proceso de admisión; nota de corte; financiación anual | Empleabilidad; intensidad del programa; nivel técnico requerido | Cupo limitado; requisito de titulación estricto |
| **Contacto académico** | Marta López | Carlos Vega | Beatriz Ruiz | Javier Torres | Carmen Ibáñez |
| **Contacto comercial** | Luis Martín | Sara Cano | Pedro Álvarez | Nuria Domínguez | Diego Fuentes |
| **Última revisión** | 2026-03-15 | 2026-03-20 | 2026-02-28 | 2026-03-10 | 2026-03-05 |

### 4.2 Justificación de cada clasificación

**Community Manager 60h → Directo**
Ticket bajo (690 €), sin requisitos académicos, formato online, volumen alto de leads y decisión de bajo riesgo. El lead puede completar reserva y pago de forma autónoma sin fricción relevante. La IA gestiona la primera respuesta y el enlace personalizado lleva directamente al flujo de pago.

**MBA Executive → Asistido**
Ticket de 12.800 €, perfil directivo con decisión larga, modalidad híbrida, y objeciones complejas (ROI, agenda, aprobación corporativa). La presuncción de ruta asistida se activa por ticket > 3.500 € y por la necesidad de propuesta económica personalizada. El lead necesita diagnóstico, propuesta y acompañamiento humano para cerrar.

**Grado en ADE → Condicionado**
Requiere Selectividad con nota de corte mínima. El lead puede iniciar el proceso (pre-enrollment), pero la aceptación queda condicionada a la verificación documental. El motor de intención activa flujo condicionado desde el primer contacto: el lead avanza, sube documentación y queda en espera de validación.

**Bootcamp Full Stack → Mixto**
Mismo programa con dos vías: online (ticket 4.900 €, sin presencialidad) y presencial (6.500 €, compromiso logístico mayor). Online se clasifica como directo porque el perfil tech acepta la autogestión y el ticket es asumible. Presencial se clasifica como asistido porque el compromiso es mayor y el ticket sube. El motor lee la opción elegida por el lead y bifurca la ruta en consecuencia.

**Alta Especialización en Gestión Sanitaria → Condicionado**
Requiere titulación universitaria en ciencias de la salud verificable. El cupo es limitado y hay entrevista de encaje. Aunque el ticket (2.400 €) no activa por sí solo la ruta asistida, los requisitos de acceso y la entrevista obligan a clasificarlo como condicionado. El lead puede avanzar hasta el pre-enrollment, pero la plaza se confirma solo tras la entrevista.

---

## 5. Proceso de mantenimiento

### 5.1 Responsabilidades

| Rol | Responsabilidad |
|---|---|
| **RevOps** | Propietario del catálogo. Gestiona la herramienta, valida consistencia técnica, coordina revisiones y publica versiones aprobadas. |
| **Director/a Académico/a** | Aprueba cambios en requisitos de acceso, duración, modalidad docente y perfil de alumno. |
| **Director/a Comercial** | Aprueba cambios en modalidad de auto-enrollment, ticket base, SLA y ruta default. |
| **Responsable de Marca/Unidad** | Notifica a RevOps cualquier cambio en el programa con al menos 15 días de antelación a la entrada en vigor. |
| **IT / Integraciones** | Propaga los cambios aprobados a los sistemas conectados (CRM, landing pages, motor de intención) en el plazo acordado. |

### 5.2 Ciclo de revisión ordinario

- **Frecuencia**: mensual, en la primera semana de cada mes.
- **Convocatoria**: RevOps convoca a los responsables de marca con tres días de antelación.
- **Agenda tipo**: revisión de fichas con cambios notificados; revisión de programas con conversión anómala; validación de nuevas altas; aprobación de cambios de modalidad.
- **Acta**: RevOps genera acta con los cambios aprobados y los comunica a IT para propagación en las 48 horas siguientes.

### 5.3 Revisión extraordinaria

Se activa cuando se produce alguno de los siguientes eventos:

| Evento disparador | Plazo de revisión |
|---|---|
| Cambio de precio (ticket base ±15 % o más) | 5 días hábiles desde la comunicación |
| Cambio de requisitos de acceso | 5 días hábiles desde la comunicación |
| Cambio de modalidad docente (online ↔ presencial) | 5 días hábiles desde la comunicación |
| Volumen de leads mensual cae o sube > 40 % en dos meses consecutivos | Revisión en la siguiente reunión mensual |
| Tasa de conversión del programa cae > 20 % vs. periodo anterior | Revisión en la siguiente reunión mensual |
| Alta de programa nuevo | Ficha inicial en 10 días hábiles desde la confirmación académica |
| Retire o suspensión de programa | Baja lógica en el catálogo en 3 días hábiles; los sistemas dejan de enrutar leads al programa |

### 5.4 Versionado

- El catálogo se versiona con el esquema `AAAA-MM-v{N}` (ejemplo: `2026-04-v1`).
- Cada versión aprobada queda archivada y es recuperable.
- Los sistemas consumen siempre la versión activa publicada por RevOps.
- Los cambios de modalidad de auto-enrollment requieren firma doble (Comercial + Académico) antes de publicarse en la versión activa.

---

## 6. Reglas de consistencia

Estas reglas son verificadas por RevOps antes de publicar cada versión del catálogo. Un programa que incumpla alguna de ellas no puede pasar a producción hasta que se resuelva la inconsistencia.

### 6.1 Reglas de incompatibilidad

| Regla | Descripción |
|---|---|
| **R1 — Directo + entrevista** | Un programa no puede estar clasificado como Directo si requiere entrevista de evaluación, de encaje o de admisión. Mínimo Condicionado. |
| **R2 — Directo + requisito documental obligatorio** | Un programa no puede ser Directo si exige verificación de documentos antes de la aceptación (título, expediente, cartas de recomendación). Mínimo Condicionado. |
| **R3 — Directo + cupo limitado con lista de espera** | Si el programa tiene cupo máximo con lista de espera activa, la modalidad debe ser Condicionado o Asistido. |
| **R4 — Ticket alto sin excepción aprobada** | Un programa con ticket base superior a 3.500 € debe ser Asistido por defecto. Solo puede clasificarse como Directo o Condicionado si existe una excepción documentada y aprobada por el Director Comercial. |
| **R5 — Evaluación académica → mínimo Condicionado** | Si el programa requiere cualquier forma de evaluación académica previa (nota de corte, test de nivel, prueba de acceso), la modalidad mínima es Condicionado. |
| **R6 — SLA coherente con modalidad** | SLA de primera respuesta no puede ser mayor a 5 minutos para programas Directos, 10 minutos para Condicionados ni 20 minutos para Asistidos. |
| **R7 — Mixto requiere bifurcación explícita** | Un programa clasificado como Mixto debe tener definidas explícitamente las condiciones de bifurcación (qué variable determina la sub-ruta) y las modalidades resultantes para cada rama. |

### 6.2 Proceso de resolución de inconsistencias

Cuando RevOps detecta una inconsistencia:

1. Notifica al responsable de marca y al Director Comercial con descripción de la regla incumplida.
2. El responsable propone resolución (cambio de modalidad, corrección de datos o solicitud de excepción formal) en 48 horas.
3. RevOps valida la resolución y, si requiere excepción, la somete a aprobación antes de publicar.
4. Toda excepción queda documentada en el campo de observaciones de la ficha con fecha y aprobador.

---

## 7. Integración técnica

### 7.1 Fuente única de verdad

El catálogo reside en **una única herramienta propietaria** (CRM, base de datos interna o plataforma de gestión de programas designada). Ningún sistema externo mantiene una copia local ni interpreta las reglas de clasificación de forma autónoma: todos leen del catálogo vía API o sincronización programada.

Está prohibido duplicar la clasificación de modalidad en configuraciones locales de landing pages, scripts de IA o tablas del CRM. Si un sistema necesita la modalidad de un programa, la consulta al catálogo.

### 7.2 Conexiones requeridas

| Sistema | Tipo de integración | Datos que consume | Frecuencia de sincronización |
|---|---|---|---|
| **Motor de intención** | API REST (lectura) | ID programa, modalidad auto-enrollment, ruta default, SLA, requisitos | En tiempo real por evento de lead |
| **CRM** | Sincronización bidireccional | Todos los campos de ficha; estado del programa (activo/inactivo) | Cada vez que se publica una versión nueva del catálogo |
| **Landing pages / web** | API REST (lectura) | ID programa, ticket base, modalidad docente, requisitos visibles | En tiempo real al cargar la página |
| **Plataforma de auto-enrollment** | API REST (lectura) | Modalidad auto-enrollment, requisitos de documentación, SLA | En tiempo real por sesión de lead |
| **Reporting / BI** | Extracción periódica | Todos los campos; historial de versiones | Diaria |

### 7.3 Flujo de propagación de cambios

Cuando RevOps publica una nueva versión del catálogo:

1. El sistema de catálogo notifica a IT mediante webhook o evento de publicación.
2. IT valida la recepción y ejecuta la sincronización en los sistemas conectados.
3. El motor de intención recarga la configuración de programas afectados.
4. RevOps verifica en el dashboard que los sistemas muestran los datos actualizados.
5. Si algún sistema no refleja el cambio en las 2 horas siguientes, IT abre incidencia con prioridad alta.

### 7.4 Gestión de programas inactivos

Un programa retirado o suspendido no se elimina del catálogo: se marca como `inactivo`. Los leads ya creados con ese programa mantienen su histórico. Los sistemas no enrutan nuevos leads a programas inactivos. El historial de fichas inactivas queda disponible para auditoría y referencia.

---

## 8. Gaps esperables y plan de resolución

El catálogo no arrancará completo. Los siguientes gaps son previsibles y deben gestionarse con un plan explícito.

### 8.1 Tipos de gap

| Gap | Descripción | Riesgo si no se gestiona |
|---|---|---|
| **Programas mal catalogados** | Fichas creadas con datos incorrectos o clasificación de modalidad basada en criterio individual sin validación cruzada | El motor enruta leads de forma incorrecta; leads de ticket alto van a ruta directa sin asistencia |
| **Formaciones nuevas sin ficha** | Programa lanzado antes de que RevOps haya creado y validado la ficha | El motor no puede enrutar; el lead cae en ruta por defecto (asistido), lo que satura el equipo comercial |
| **Marcas con criterios propios** | Unidades de negocio que aplican definiciones distintas de "entrevista" o "requisito de acceso" | Catálogo inconsistente por unidad; las reglas de §6 no pueden aplicarse de forma homogénea |
| **Datos desactualizados** | Fichas con ticket, duración o requisitos de una convocatoria anterior | El lead recibe información incorrecta; la tasa de fricción operativa sube |
| **Programas sin contacto académico o comercial** | Fichas sin responsable asignado | Los cambios no tienen interlocutor; las revisiones se bloquean |

### 8.2 Plan de resolución

**Para programas mal catalogados:**
RevOps realiza una auditoría de conversión en los primeros 30 días de Fase 2. Si la tasa de conversión de un programa difiere más de 15 puntos porcentuales de la media de su modalidad, se abre revisión de ficha en la siguiente reunión mensual.

**Para formaciones nuevas sin ficha:**
Se establece una regla operativa: ningún programa puede activarse en landing, CRM o motor de intención sin ficha validada en el catálogo. IT bloquea la configuración de cualquier programa sin ID de catálogo activo. RevOps se compromete a completar fichas nuevas en un máximo de 10 días hábiles desde la notificación académica.

**Para marcas con criterios propios:**
RevOps convoca un taller de alineación de definiciones en las primeras 2 semanas del proyecto de implantación. El resultado es un glosario común que queda integrado en el proceso de validación de fichas. Las discrepancias se escalan al Director Académico para resolución.

**Para datos desactualizados:**
El proceso mensual de revisión incluye una comprobación automática de fichas no revisadas en los últimos 45 días. RevOps envía recordatorio al responsable de marca. Si no hay respuesta en 5 días hábiles, la ficha pasa a estado `pendiente de validación` y el motor aplica la ruta más conservadora (asistido) hasta que se confirmen los datos.

**Para fichas sin contacto:**
Las fichas sin contacto académico o comercial asignado se bloquean antes de publicarse en producción. Es un campo obligatorio validado por el sistema de catálogo.

---

## 9. Checklist de validación inicial

RevOps debe completar esta lista antes de declarar el catálogo válido para el arranque de Fase 2. Cada ítem requiere evidencia documentada, no solo confirmación verbal.

### 9.1 Cobertura del portfolio

- [ ] El catálogo contiene ficha de cada programa activo en el portfolio.
- [ ] Todos los programas tienen ID único asignado y sin duplicados.
- [ ] No existe ningún programa activo en CRM o landing que no tenga ficha en el catálogo.
- [ ] Los programas retirados están marcados como `inactivo` y no generan enrutamiento.

### 9.2 Completitud de fichas

- [ ] Todos los campos obligatorios están rellenos en cada ficha (sin celdas vacías o con valor "pendiente").
- [ ] Cada ficha tiene contacto académico y comercial con email válido.
- [ ] El campo de última revisión tiene fecha no anterior a 60 días desde el arranque de Fase 2.

### 9.3 Consistencia de clasificación

- [ ] Ningún programa Directo tiene entrevista de evaluación o requisito documental obligatorio (R1, R2).
- [ ] Ningún programa Directo tiene cupo con lista de espera (R3).
- [ ] Ningún programa con ticket > 3.500 € está clasificado como Directo o Condicionado sin excepción aprobada y documentada (R4).
- [ ] Todos los programas con evaluación académica están clasificados como mínimo Condicionado (R5).
- [ ] Los SLA de primera respuesta son coherentes con la modalidad de cada programa (R6).
- [ ] Todos los programas Mixtos tienen bifurcación explícita documentada (R7).

### 9.4 Integración técnica

- [ ] El motor de intención lee correctamente la modalidad de auto-enrollment para una muestra representativa de programas (mínimo 20 % del portfolio).
- [ ] Las landing pages cargan el flujo correcto (directo, condicionado o asistido) para al menos 5 programas de distintas modalidades.
- [ ] El CRM muestra los datos del catálogo actualizados tras la última publicación.
- [ ] El proceso de propagación de cambios ha sido probado end-to-end al menos una vez en entorno de pre-producción.
- [ ] Los programas inactivos no generan enrutamiento en ningún sistema.

### 9.5 Proceso y gobierno

- [ ] Los responsables de cada programa conocen el proceso de notificación de cambios y los plazos.
- [ ] El calendario de revisión mensual está agendado para los próximos 6 meses con los asistentes confirmados.
- [ ] El glosario de definiciones ha sido validado por todas las marcas/unidades.
- [ ] Existe un canal de comunicación directo entre RevOps e IT para propagación urgente de cambios.
- [ ] El proceso de excepción a las reglas de consistencia está documentado y los aprobadores conocen su rol.

### 9.6 Criterio de aprobación

El catálogo se considera válido para Fase 2 cuando:

- Los ítems 9.1 y 9.2 están completados al 100 %.
- Los ítems 9.3 están completados al 100 % (cero inconsistencias sin resolver).
- Los ítems 9.4 están completados con resultado positivo en todos los casos.
- Los ítems 9.5 están completados al 100 %.

Cualquier ítem pendiente en 9.3 o 9.4 bloquea el arranque de Fase 2 hasta su resolución.

---

*Fin del Anexo D*

**Historial de versiones**

| Versión | Fecha | Cambios | Autor |
|---|---|---|---|
| 1.0 | 2026-04-14 | Versión inicial | RevOps |
