# Estrategia de Transformación del Modelo de Comercialización

**Documento estratégico de transformación comercial**  
Propuesta elaborada por Alberto | Versión 1.0 | Abril 2026

---

## Resumen ejecutivo

Northius debe evolucionar desde un modelo de comercialización homogéneo, apoyado en secuencias relativamente estándar, precio casi fijo y entrevista comercial como paso central, hacia un sistema comercial adaptativo, multicanal y gobernado por intención.

La transformación propuesta no consiste en digitalizar el funnel actual. Consiste en sustituirlo por un **sistema de atención inmediata y personalizada**, capaz de responder al lead desde el primer minuto, entender su intención, acompañarlo por chat durante todo el proceso y decidir cuándo debe avanzar por auto-enrollment, cuándo necesita voz humana o IA, cuándo conviene presencialidad y qué propuesta económica maximiza conversión sin romper margen.

Uno de los síntomas más claros del problema es el bajo **aprovechamiento del cupón**, actualmente en el entorno del **35%**. Con la operativa actual resulta estructuralmente difícil elevarlo porque el cupón primero debe repartirse para equilibrar la red comercial. La lógica dominante termina siendo la asignación de carga a la red, no la atención inmediata y personalizada al lead con mayor intención.

La captación del lead no tiene por qué cambiar en su formato básico. El lead puede seguir naciendo de un formulario simple de contacto, de una llamada a los teléfonos publicados, de un chat/WhatsApp o de una visita presencial residual. La transformación empieza en la **post-captura**: primera gestión inbound-outbound con IA, envío de un enlace personalizado por chat y email, continuidad conversacional y realimentación del motor de intención con cada interacción del lead.

El modelo se articula sobre cuatro capacidades transversales, que no son fases sino componentes activos durante todo el journey:

- **Motor de intención**: clasifica al lead dentro de cada fase y detecta señales reales de readiness, madurez, urgencia, fricción y propensión de compra.
- **Chat e IA siempre disponibles**: sostienen una conversación bidireccional, responden, acompañan, explican qué está ocurriendo y mantienen contexto en todo momento.
- **Auto-enrollment personalizado**: permite matrícula, reserva, pago o financiación por web o IA, en cualquier momento, sin intervención humana cuando el tipo de formación lo permite.
- **Intervención selectiva humana, de voz y presencial**: activa comercial humano, voz IA o presencialidad cuando aumenta confianza, conversión o margen.

La tesis central es sencilla: **no todos los leads deben ser tratados igual, no todos deben pasar por la misma secuencia y ningún lead con potencial debe perderse por una objeción de precio sin que el sistema haya agotado primero las palancas de valor, financiación, beca y timing**.

El resultado esperado es un modelo comercial más preciso, más flexible y más escalable: atención inmediata sin convertir todo en venta agresiva, mayor uso del auto-enrollment asistido, mejor foco del equipo humano en oportunidades de alto impacto, y una política económica más dinámica sin perder control sobre el margen.

---

## Glosario de estados y taxonomía canónica

Este documento y el one-pager ejecutivo utilizan dos niveles de granularidad para describir el viaje del lead. Ambas son coherentes pero no intercambiables. Esta tabla las reconcilia y declara la taxonomía canónica.

**Taxonomía canónica: 5 estados operativos del one-pager.** Es la versión que debe usarse en toda comunicación ejecutiva, presentaciones, KPIs de alto nivel y narrativa organizativa. El detalle operativo de §8 se entiende como subestados dentro de estos 5.

| Estado canónico (one-pager) | Subestados operativos (§8 del plan) | Qué decide el sistema en este estado |
|---|---|---|
| **1. Clasificar** | §8.2 Estado 0 — Entrada y normalización | Identidad, fuente, marca, formación, historial, primera ruta |
| **2. Madurar** | §8.3 Exploración + §8.4 Consideración | Educación, orientación, prueba social, acompañamiento sin presión comercial |
| **3. Activar** | §8.5 Activación | Capturar momentum, decidir ruta autónoma/asistida, canal, actor y propuesta económica inicial |
| **4. Convertir** | §8.6 Cierre + §8.7 Enrollment en progreso | Llevar a matrícula: reserva, pago, financiación, documentación, evaluación |
| **5. Rescatar** | §8.8 Rescate (5 subtipos) + §11 flujo de rescate económico (4 fases) | Recuperar por causa concreta: económico, operativo, confianza, timing, competidor |

**Reglas de uso:**

- En comunicación ejecutiva, roadmaps y dashboards de dirección: usar siempre los **5 estados canónicos**.
- En documentación operativa, diseño de workflows, CRM y scripting de IA: usar los **subestados de §8** para precisión.
- **Nunca mezclar** en un mismo documento: Cierre + Convertir, o Exploración + Madurar, como si fueran categorías distintas — son niveles de granularidad del mismo estado.
- Un lead **no retrocede** de estado canónico salvo en Rescatar (que por definición puede devolver a Madurar o Activar). Un lead sí puede retroceder entre subestados operativos (p. ej. de Consideración a Exploración).
- Los subestados de Rescate (económico / operativo / confianza / timing / competidor) son dimensiones paralelas, no secuencia. Un mismo lead puede tener dos subtipos simultáneos.

**Nota sobre el estado "Nurturing":** nurturing no es un estado en esta taxonomía. Es un **modo de intensidad** (ritmo de push bajo) aplicable a cualquier estado canónico, más frecuentemente en Madurar y en Rescate de timing. El §12 describe los eventos que lo disparan.

---

## Índice

1. [El problema que hay que resolver](#1-el-problema-que-hay-que-resolver)
2. [La tesis estratégica](#2-la-tesis-estratégica)
3. [Principios rectores](#3-principios-rectores)
4. [Arquitectura del nuevo modelo comercial](#4-arquitectura-del-nuevo-modelo-comercial)
5. [Segmentación operativa de leads](#5-segmentación-operativa-de-leads)
6. [Canales y actores del sistema](#6-canales-y-actores-del-sistema)
7. [Estrategia económica: pricing personalizado y becas gobernadas](#7-estrategia-económica-pricing-personalizado-y-becas-gobernadas)
8. [Funnel operativo detallado](#8-funnel-operativo-detallado)
9. [Ruta A: auto-enrollment para programas de decisión autónoma](#9-ruta-a-auto-enrollment-para-programas-de-decisión-autónoma)
10. [Ruta B: acompañamiento para programas consultivos o selectivos](#10-ruta-b-acompañamiento-para-programas-consultivos-o-selectivos)
11. [Flujo de rescate económico](#11-flujo-de-rescate-económico)
12. [Nurturing activado por eventos](#12-nurturing-activado-por-eventos)
13. [Cuadro de mando y KPIs](#13-cuadro-de-mando-y-kpis)
14. [Gobierno operativo](#14-gobierno-operativo)
15. [Plan de implantación](#15-plan-de-implantación)
16. [Riesgos y mitigaciones](#16-riesgos-y-mitigaciones)
17. [Mensajes clave para alinear a la organización](#17-mensajes-clave-para-alinear-a-la-organización)
18. [Anexos de profundización](#18-anexos-de-profundización)

---

## 1. El problema que hay que resolver

### 1.1 Un funnel demasiado uniforme para un mercado heterogéneo

El modelo comercial tradicional trata a demasiados leads como si compartieran el mismo nivel de intención, la misma sensibilidad al precio, la misma necesidad de acompañamiento y el mismo canal preferido. Esa homogeneidad genera dos pérdidas simultáneas:

- **Fricción innecesaria** para leads que podrían avanzar de forma autónoma por auto-enrollment.
- **Falta de intensidad comercial** en leads valiosos que sí requieren voz, diagnóstico, confianza, objeciones y propuesta personalizada.

El problema no es solo de conversión. Es de asignación de recursos. La red comercial humana dedica esfuerzo a interacciones que podrían resolverse con IA o autoservicio, mientras algunos momentos de alta intención no reciben una intervención suficientemente rápida o especializada.

### 1.2 La entrevista ha absorbido funciones que deben separarse

La entrevista comercial ha operado como filtro, generador de confianza, mecanismo de urgencia, herramienta de diagnóstico y dispositivo de cierre. Esa acumulación de funciones convierte la entrevista en un ritual universal, cuando debería ser una palanca selectiva.

En el nuevo modelo, la entrevista no desaparece. Cambia de función: pasa a ser una intervención táctica de aceleración, defensa de valor y cierre cuando el lead, el programa o la objeción lo justifican.

### 1.3 El precio fijo limita conversión y aprendizaje

Un modelo de precio poco adaptable deja fuera a leads con potencial real que no convierten por barrera económica, timing o modalidad de pago. La respuesta comercial suele depender de criterio humano, presión de cierre o concesiones puntuales, lo que genera tres riesgos:

- pérdida de leads recuperables;
- descuentos poco gobernados;
- falta de aprendizaje sobre elasticidad, margen y conversión incremental.

El precio debe poder adaptarse al contexto del lead, pero con reglas explícitas, trazabilidad y límites de margen.

### 1.4 El nurturing funciona como parking, no como motor de conversión

Cuando un lead no convierte, a menudo queda en una secuencia de impactos genérica. El nuevo modelo debe tratar el no-cierre como información. Una objeción económica, una visita repetida a pricing, un abandono de matrícula o una reactivación por WhatsApp no son simples eventos: son señales para activar una siguiente mejor acción.

### 1.5 La primera gestión no explota suficiente el contexto de entrada

El lead ya suele nacer con un contexto mínimo valioso: datos de contacto, formación visualizada, marca, canal de entrada, campaña o conversación inicial. Sin embargo, si ese contexto no se convierte inmediatamente en una respuesta personalizada, el sistema pierde momentum.

La oportunidad no está solo en captar más leads. Está en que, desde el momento en que se crean, reciban una primera respuesta útil, un enlace de avance personalizado y una cadencia coherente con su intención real.

### 1.6 El aprovechamiento del cupón queda limitado por la lógica de reparto

El aprovechamiento actual del cupón se sitúa en torno al **35%**, lo que revela que una parte relevante de la demanda captada no se convierte en una gestión comercial suficientemente efectiva.

El problema no es únicamente de calidad de lead ni de ejecución individual. Es estructural: antes de activar una atención personalizada, el cupón debe repartirse para equilibrar la red comercial. Esa lógica introduce una prioridad operativa distinta a la que necesita el lead:

- primero se equilibra capacidad comercial;
- después se atiende el lead según disponibilidad;
- la personalización depende del owner y del momento;
- la velocidad de respuesta queda condicionada por la asignación;
- las señales de intención no siempre gobiernan el siguiente contacto.

En consecuencia, el sistema prioriza la red antes que el momento de compra. La transformación busca invertir esa lógica: primero interpretar intención y urgencia, después decidir si el lead necesita IA, self-service, voz, humano, presencialidad o rescate, y solo entonces asignar capacidad comercial cuando aporte conversión.

---

## 2. La tesis estratégica

Northius debe pasar de un funnel comercial lineal a una **máquina de estados orientada a intención**.

El cambio de lógica es el siguiente:

| Modelo actual | Modelo propuesto |
|---|---|
| El lead entra en una secuencia comercial relativamente estándar | El lead entra en un sistema que interpreta su estado de intención |
| La captura genera un registro de contacto | La post-captura activa IA, chat/email y enlace personalizado desde el primer minuto |
| El cupón se reparte para equilibrar la red comercial | El cupón se prioriza por intención, urgencia, valor y necesidad de intervención |
| La entrevista es un paso frecuente o estructural | La entrevista se activa cuando aporta uplift de conversión |
| El precio es principalmente fijo, con descuentos gestionados caso a caso | La propuesta económica se personaliza dentro de reglas de negocio |
| El nurturing es secuencial | El nurturing se activa por eventos y cambios de estado |
| La IA apoya tareas concretas | La IA opera como primera capa de respuesta, clasificación, seguimiento y rescate |
| El comercial trabaja muchos leads con distinto valor | El comercial se concentra en momentos donde su intervención aumenta cierre, margen o confianza |

La organización deja de pensar en "gestionar leads" y empieza a **orquestar decisiones de compra**. Esto implica que cada interacción debe tener un objetivo concreto: educar, activar, diagnosticar, cerrar, rescatar, financiar, matricular o reactivar.

---

## 3. Principios rectores

### 3.1 La intención manda

El sistema no se organiza alrededor del lead como registro estático, sino alrededor del momento real de compra. La pregunta operativa no es "¿qué lead es?", sino "¿qué está preparado para hacer ahora?".

### 3.2 El funnel no es lineal

Un estudiante puede explorar, comparar, frenar, volver, simular precio, pedir financiación, desaparecer, reactivarse y cerrar semanas después. El modelo debe aceptar ese comportamiento como normal y operar con estados reversibles.

### 3.3 La voz es selectiva

La voz debe priorizarse cuando aumenta claramente la probabilidad de cierre: alta intención, objeciones complejas, ticket alto, abandono avanzado, necesidad de confianza o decisión consultiva. Usarla como paso universal introduce fricción y consume capacidad comercial.

### 3.4 WhatsApp es la capa persistente

WhatsApp y el chat deben acompañar todo el journey porque sostienen continuidad, permiten respuestas asíncronas, facilitan retomar conversaciones y mantienen trazabilidad contextual. No son solo canales de respuesta: son la capa de acompañamiento permanente que informa al estudiante de qué está pasando, qué falta para avanzar, qué opciones tiene y cuándo se activa ayuda humana o IA.

### 3.5 El self-service es auto-enrollment, no e-commerce

El self-service no debe entenderse como e-commerce. Debe entenderse como **auto-enrollment personalizado**: una vía para reservar, pagar, financiar, subir documentación o iniciar matrícula por web o con ayuda de la IA, en cualquier momento y sin intervención humana cuando la formación lo permite.

La interfaz no debe ser igual para todos. Debe adaptarse al tipo de formación, precio, modalidad de pago, financiación, requisitos de aceptación, estado del lead y contexto conversacional.

### 3.6 Algunas formaciones requieren evaluación o aceptación

El auto-enrollment no implica que todas las formaciones sean de acceso directo. Algunas pueden requerir entrevista de evaluación, validación documental, requisitos académicos, cupo o aceptación final. En esos casos, el lead debe poder avanzar en un **pre-enrollment** inmediato, entendiendo que la aceptación queda condicionada. Esto permite mantener un mensaje de exclusividad sin dejar al lead esperando.

### 3.7 La presencialidad es una herramienta variable

La presencialidad debe considerarse una palanca comercial disponible cuando aporta confianza, prueba social o cercanía humana. No es un paso fijo. Depende del programa, del perfil del lead, de la necesidad de conversión y de la disponibilidad territorial por código postal.

### 3.8 El precio se adapta, pero se gobierna

La personalización económica debe mejorar la conversión sin destruir margen. Las reglas de beca, descuento, financiación y suelo económico deben estar definidas antes de operar.

### 3.9 Ningún lead valioso se abandona por precio

La objeción de precio no es un evento final. Es una señal de trabajo comercial pendiente. Antes de abandonar al lead, el sistema debe recorrer valor, financiación, beca y timing.

---

## 4. Arquitectura del nuevo modelo comercial

El nuevo modelo opera con una capa previa de entrada y post-captura, y cuatro capas conectadas de decisión comercial.

### Capa 0. Entrada y post-captura

El formato de entrada del lead se mantiene reconocible:

- formulario básico de datos de contacto en landing o web catálogo;
- formación visualizada en ese momento y marca asociada;
- llamada a teléfonos publicados;
- contacto por chat o WhatsApp;
- visita presencial a delegación, con peso residual en el mix actual.

La diferencia está en lo que ocurre justo después de crear el lead. El sistema debe tratar el **minuto 0** como el momento de creación del registro, no como una llamada comercial obligatoria. Desde ese instante:

1. La IA confirma contexto y atiende la primera comunicación inbound-outbound.
2. El lead recibe un enlace personalizado por chat/WhatsApp y por email.
3. Ese enlace puede llevar a auto-enrollment directo, pre-enrollment condicionado, simulador económico, documentación, reserva o solicitud de llamada.
4. La conversación puede seguir con IA sin perder continuidad.
5. El motor de intención decide si debe saltar a humano, voz IA, comercial presencial o nurturing.
6. Si el lead entra en self-service y no convierte, sus eventos alimentan de nuevo el motor: clic, simulación, abandono de cuota, financiación iniciada, documentación pendiente, error operativo o silencio.

Esto cambia la lógica de seguimiento. El ritmo de push no debe depender solo del tiempo transcurrido, sino de la naturaleza del lead, el programa, su valor esperado, sus muestras de interés y la causa probable de bloqueo.

### Capa 1. Clasificación y estado del lead

Todo lead entra en una capa de clasificación que determina:

- identidad y duplicados;
- fuente de entrada;
- marca y formación visualizada;
- canal inicial: formulario, llamada, chat/WhatsApp o presencial;
- programa o área de interés;
- estado de intención;
- valor esperado;
- sensibilidad económica;
- canal preferente;
- elegibilidad comercial;
- ruta de funnel recomendada;
- propuesta económica inicial.

Esta clasificación no es definitiva. Se actualiza con cada evento.

El motor de intención no debe producir solo una puntuación genérica. Debe clasificar al lead en estados operativos dentro de cada fase:

| Fase | Estados posibles | Decisión que habilita |
|---|---|---|
| Clasificar | nuevo, duplicado, reactivado, abandono previo, referido | qué contexto recuperar y qué primera respuesta enviar |
| Madurar | exploración, comparación, consideración avanzada, interés latente | qué contenido, prueba social o CTA enviar sin forzar venta |
| Activar | pregunta precio, pide financiación, solicita llamada, consulta inicio, inicia matrícula | qué ruta abrir: autónoma, asistida, voz, auto-enrollment o rescate |
| Convertir | propuesta enviada, pago iniciado, documentación pendiente, financiación iniciada, evaluación pendiente | qué empuje, mensaje y canal usar para completar matrícula |
| Rescatar | bloqueo precio, bloqueo timing, bloqueo confianza, bloqueo operativo, competidor | qué palanca activar: valor, pago, beca, voz, presencialidad o nurturing |

Cada estado debe alimentar cuatro decisiones: **contacto**, **canal**, **empuje** y **mensaje**. Así se evita tratar igual a un lead que explora, a uno que pide precio, a uno que necesita entrevista de aceptación y a uno que solo se ha bloqueado en la cuota.

### Capa 2. Orquestación comercial

Un motor de decisión determina en cada momento:

- si debe actuar IA, humano o ambos;
- si conviene WhatsApp, llamada, email, auto-enrollment o callback;
- qué enlace personalizado debe enviarse por chat y email;
- si conviene auto-enrollment directo o pre-enrollment condicionado;
- si la presencialidad es aplicable por código postal y aporta probabilidad de conversión;
- cuál es el siguiente CTA;
- si el lead debe escalar a comercial senior;
- qué narrativa comercial aplicar;
- cuándo pausar presión comercial y pasar a nurturing.

La orquestación debe estar conectada al CRM, al sistema de mensajería, al enrollment, al pricing y al histórico de interacciones.

### Capa 3. Motor económico

El sistema configura una propuesta económica contextual:

- precio base del programa;
- modalidad de pago;
- financiación disponible;
- beca o descuento elegible;
- caducidad o cupo aplicable;
- condiciones por zona, cohorte o convocatoria;
- suelo económico;
- siguiente tramo de oferta si no convierte;
- necesidad de aprobación manual.

El objetivo no es ofrecer siempre el precio más bajo. El objetivo es encontrar la combinación con mayor probabilidad de conversión rentable.

### Capa 4. Nurturing y rescate

Si el lead no convierte, no sale del sistema. Cambia de estado. El nurturing debe:

- aumentar readiness;
- reforzar valor;
- corregir percepción de precio;
- activar nuevas ventanas de decisión;
- recuperar abandonos de enrollment;
- recuperar abandonos de auto-enrollment con el paso exacto donde se produjo la fricción;
- detectar señales de reactivación;
- devolver el lead al funnel de cierre cuando corresponda.

---

## 5. Segmentación operativa de leads

### 5.1 Leads de marketing

Son leads con interés inicial, pero sin señal suficiente para presión comercial intensa. Deben dividirse en cuatro estados:

| Estado | Definición | Objetivo comercial |
|---|---|---|
| Exploración | Quiere información general o está descubriendo opciones | Clarificar problema, programa y aspiración |
| Consideración inicial | Compara formatos, salidas o alternativas | Educar y construir preferencia |
| Consideración avanzada | Revisa precio, inicio, financiación o testimonios | Activar intención y preparar propuesta |
| Preactivación | Muestra señales de compra, pero aún no pide cierre | Provocar siguiente acción de alto valor |

### 5.2 Leads de ventas

Son leads listos para una intervención de cierre o propuesta económica. Deben dividirse en cuatro estados:

| Estado | Definición | Objetivo comercial |
|---|---|---|
| Activación reciente | Acaba de mostrar intención fuerte | Responder rápido y capturar momentum |
| Alta intención | Pregunta por precio, plaza, financiación, matrícula o llamada | Llevar a propuesta y siguiente paso |
| Cierre en progreso | Ya tiene propuesta o enrollment iniciado | Reducir fricción y cerrar |
| Rescate de cierre | No convierte tras objeción, abandono o silencio | Recuperar con valor, pago, beca o timing |

### 5.3 Variables mínimas de scoring

El scoring debe combinar intención, encaje, valor y fricción. Propuesta de variables:

| Variable | Señales | Uso |
|---|---|---|
| Intención | pregunta por precio, inicio, plazas, financiación, matrícula, callback | Prioriza respuesta y canal |
| Encaje | programa, perfil, objetivo profesional, disponibilidad, requisitos | Decide si conviene IA, humano o diagnóstico |
| Valor esperado | ticket, margen, cohorte, probabilidad de cierre, LTV potencial | Prioriza capacidad comercial humana |
| Fricción económica | objeción de precio, simulación de cuota, abandono tras precio | Activa motor económico |
| Urgencia | fecha de inicio, cupo, beca activa, deadline personal | Define narrativa y cadencia |
| Comportamiento | visitas, aperturas, respuestas, reapariciones, abandono de enrollment | Cambia estado y CTA |
| Canal | respuesta a WhatsApp, preferencia por voz, autogestión | Decide canal principal |

---

## 6. Canales y actores del sistema

### 6.1 WhatsApp

Función: capa persistente de relación, continuidad y acompañamiento.

Usos principales:

- respuesta inmediata;
- preguntas frecuentes;
- explicación de qué está ocurriendo en el proceso;
- orientación sobre el siguiente paso;
- recuperación de contexto;
- envío de links contextuales;
- envío del enlace personalizado de auto-enrollment, simulación, documentación o pre-enrollment;
- simulación o explicación de condiciones;
- seguimiento de matrícula;
- reactivación;
- confirmación de citas;
- rescate económico.

El chat debe ser bidireccional y estar siempre activo. No debe limitarse a resolver dudas puntuales: debe acompañar al estudiante, darle contexto, explicarle qué falta, qué opciones tiene y cuándo se activa una llamada, una revisión, una entrevista o una propuesta económica.

### 6.2 Voz

Función: palanca selectiva de confianza, diagnóstico, objeción y cierre. Puede ser voz humana o voz IA, según el objetivo de la interacción.

Debe activarse cuando se cumpla una o varias condiciones:

- alta intención;
- ticket alto;
- programa de decisión consultiva;
- objeción económica compleja;
- abandono avanzado;
- indecisión entre programas;
- lead de alto valor esperado;
- necesidad explícita de hablar con una persona;
- entrevista de evaluación o requisito de aceptación;
- oportunidad de cierre inmediato.

### 6.3 Auto-enrollment

Función: matrícula, reserva, pago o financiación autónoma asistida.

El auto-enrollment no es e-commerce. Es una experiencia guiada, personalizada y siempre disponible, que permite al estudiante avanzar sin intervención humana cuando la formación y su estado lo permiten.

Normalmente se activa mediante un enlace personalizado enviado por chat/WhatsApp y email tras la primera gestión IA. Ese enlace no debe ser genérico: debe cargar la marca, la formación visualizada, el estado del lead, las condiciones económicas disponibles, los requisitos del programa y el punto de avance.

Debe permitir:

- consultar precio o rango económico;
- simular cuota;
- ver financiación;
- conocer fecha de inicio;
- reservar plaza;
- iniciar matrícula;
- realizar pago o configurar financiación;
- subir documentación si aplica;
- avanzar en pre-enrollment cuando haya requisitos de aceptación;
- guardar progreso;
- retomar proceso;
- pedir ayuda por chat;
- solicitar callback sin reiniciar el journey.

Cada interacción dentro del auto-enrollment debe alimentar al motor de intención: apertura del enlace, simulación de cuota, paso iniciado, documentación pendiente, financiación abandonada, pago no completado, solicitud de ayuda o silencio posterior. El self-service no es un canal separado del funnel; es una fuente continua de señales.

Modalidades:

| Modalidad | Cuándo aplica | Cómo se comunica |
|---|---|---|
| Auto-enrollment directo | Formación sin entrevista o requisitos previos críticos | El estudiante puede reservar, pagar o financiar de forma autónoma |
| Pre-enrollment condicionado | Formación con entrevista, cupo, documentación o requisitos de aceptación | El estudiante avanza, pero la aceptación queda condicionada a validación |
| Enrollment asistido | Lead con bloqueo operativo, económico o de confianza | IA, chat o humano acompañan el proceso hasta completar |

### 6.4 IA

Función: primera capa de disponibilidad, clasificación, seguimiento, explicación y rescate.

La IA debe:

- gestionar la primera comunicación inbound-outbound tras la creación del lead;
- responder en tiempo real;
- clasificar intención;
- detectar objeciones;
- proponer siguiente paso;
- enviar o reforzar el enlace personalizado cuando proceda;
- alimentar CRM;
- acompañar enrollment;
- activar workflows;
- preparar contexto para el comercial;
- ejecutar nurturing event-driven.

### 6.5 Presencialidad

Función: herramienta selectiva de confianza, prueba social y cercanía.

Debe activarse solo cuando:

- el código postal del lead permite una experiencia presencial;
- la cercanía humana aumenta probabilidad de conversión;
- el lead necesita prueba social o contacto local;
- el programa se beneficia de mostrar instalaciones, comunidad, asesoría o experiencia tangible;
- el coste operativo está justificado por valor esperado o probabilidad de cierre.

La presencialidad no debe ser un paso fijo del funnel. Es una palanca disponible, variable por territorio y activada por intención.

### 6.6 Comercial humano

Función: intervención de alto impacto.

Debe concentrarse en:

- cierre;
- defensa de valor;
- objeciones complejas;
- confianza;
- negociación dentro de reglas;
- leads valiosos;
- programas consultivos;
- rescate de oportunidades con potencial.

---

## 7. Estrategia económica: pricing personalizado y becas gobernadas

### 7.1 Qué significa precio personalizado

Precio personalizado no significa improvisar precios opacos. Significa que el sistema configura la mejor propuesta económica posible para convertir a un lead, dentro de reglas claras.

La propuesta puede combinar:

- precio base;
- zona;
- programa;
- convocatoria;
- ocupación o cupo;
- modalidad de pago;
- financiación;
- beca o descuento elegible;
- caducidad;
- urgencia real;
- valor estratégico del lead;
- presión competitiva;
- historial de interacción.

### 7.2 Reglas de gobernanza económica

Todo descuento o beca debe tener:

- motivo registrado;
- tramo máximo permitido;
- suelo económico;
- caducidad;
- programa o cohorte aplicable;
- impacto esperado en conversión;
- impacto en margen;
- responsable de aprobación;
- trazabilidad en CRM.

### 7.3 Tipos de palanca económica

| Palanca | Uso correcto | Riesgo si se usa mal |
|---|---|---|
| Financiación | Reducir barrera de entrada sin tocar precio nominal | Ocultar un problema real de asequibilidad |
| Beca | Capturar leads con mérito, necesidad o fit estratégico | Convertirse en descuento genérico |
| Descuento táctico | Cerrar oportunidad de alto potencial con caducidad real | Entrenar al mercado a esperar rebaja |
| Reserva de plaza | Convertir intención en compromiso | Crear falsa urgencia |
| Protección de condiciones | Facilitar decisión en ventana temporal limitada | Perder credibilidad si no hay límite real |

### 7.4 Política central

El orden de actuación debe ser:

1. Reforzar valor.
2. Reconfigurar pago.
3. Activar beca si hay elegibilidad.
4. Activar descuento táctico si protege conversión rentable.
5. Pasar a nurturing económico si el timing no permite cerrar.

La bajada de precio nunca debe ser la primera respuesta automática.

---

## 8. Funnel operativo detallado

### 8.1 Vista general

Para comunicación ejecutiva, el nuevo funnel debe leerse como el viaje del lead por cinco fases:

**Entrada/Reaparición → Clasificar → Madurar → Activar → Convertir → Matrícula**

Si no convierte:

**Rescatar → nueva señal → volver a Activar o Madurar**

La finalidad no es que todo vaya más rápido, sino que la **primera atención sea inmediata** y que el siguiente paso sea personalizado según intención, tipo de formación, requisitos, canal, fricción y valor esperado.

La vista operativa completa empieza antes de la fase comercial clásica:

| Momento | Qué ocurre | Decisión clave |
|---|---|---|
| Captura | Formulario, llamada, chat/WhatsApp o visita presencial residual | Crear lead y registrar marca, formación, fuente y canal |
| Post-captura IA | Primera gestión inbound-outbound y envío de enlace por chat/email | Decidir si el lead es exploratorio, activable, autónomo, consultivo o selectivo |
| Clasificación | Se normaliza contexto, historial, intención, encaje, valor y fricción | Elegir ruta, canal, actor, mensaje y ritmo de push |
| Journey comercial | Maduración, activación, conversión o rescate | Adaptar el siguiente paso según señales reales |
| Realimentación | Conversación, clics, auto-enrollment, abandono, pago o silencio | Cambiar estado y activar rescate, voz, presencialidad o nurturing |

El funnel no elimina estados anteriores. Los vuelve dinámicos. Un lead puede avanzar, retroceder o saltar de estado según señales reales.

### 8.2 Estado 0. Entrada y normalización

**Entrada**

- formulario web básico con datos de contacto;
- formación visualizada y marca asociada;
- WhatsApp inbound;
- llamada entrante;
- campaña paid;
- evento orgánico;
- lead antiguo reactivado;
- abandono de enrollment;
- referido;
- base existente.

**Objetivo**

Crear una vista única del lead y decidir la primera ruta.

**Acciones automáticas**

- deduplicar registro;
- identificar programa o área de interés;
- registrar marca, formación visualizada, landing o web de origen;
- recuperar histórico;
- registrar fuente y campaña;
- validar consentimiento;
- lanzar primera respuesta útil con IA;
- enviar enlace personalizado por chat/WhatsApp y email;
- preguntar objetivo, timing y preferencia de canal si falta información;
- asignar estado inicial de intención;
- registrar si el lead abre el enlace, simula cuota, inicia matrícula o abandona.

**Salida**

- Exploración, si la señal es baja o informativa.
- Consideración, si compara o evalúa opciones.
- Activación, si pregunta por precio, plaza, inicio, financiación, matrícula o callback.
- Rescate, si viene de abandono o no-cierre previo.

**SLA recomendado**

- Primera respuesta por WhatsApp o chat: inmediata.
- Envío de enlace personalizado: dentro de la primera gestión IA.
- Clasificación inicial: dentro de la primera interacción.
- Lead de alta intención: alerta comercial en menos de 5 minutos.

### 8.3 Estado 1. Exploración

**Definición**

El lead muestra interés inicial, pero todavía no expresa intención de compra. Busca información, orientación o inspiración.

**Objetivo**

Convertir curiosidad en consideración.

**Señales típicas**

- descarga guía;
- visita páginas informativas;
- pregunta por temario;
- consulta salidas profesionales de forma general;
- no pregunta precio ni fecha de inicio;
- interactúa poco o de forma asíncrona.

**Acciones**

- IA responde dudas básicas;
- WhatsApp ofrece orientación breve;
- contenido de empleabilidad y casos reales;
- CTA hacia comparador, test de encaje o guía del programa;
- captura de objetivo profesional y disponibilidad;
- no activar llamada salvo petición explícita.

**Salida**

- A Consideración: compara programas, pide detalles concretos o vuelve varias veces.
- A Nurturing: no responde o mantiene interés débil.
- A Activación: pregunta por precio, inicio, plazas o financiación.

**KPIs**

- ratio de respuesta a primer WhatsApp;
- ratio de avance a Consideración;
- tiempo hasta primera señal de intención;
- coste por lead que avanza de estado.

### 8.4 Estado 2. Consideración

**Definición**

El lead evalúa seriamente una alternativa formativa. Compara programas, duración, formato, salidas, precio o reputación.

**Objetivo**

Construir preferencia y provocar una señal clara de activación.

**Señales típicas**

- visitas repetidas a programa;
- consulta temario, modalidad, empleabilidad o requisitos;
- abre contenidos de comparación;
- pregunta por compatibilidad con trabajo;
- interactúa con simulador o contenidos económicos sin pedir cierre;
- menciona alternativas.

**Acciones**

- IA clarifica diferencias y encaje;
- WhatsApp envía recursos contextuales;
- CTA hacia simulación de cuota, fecha de inicio o reserva informativa;
- recomendación de programa si hay indecisión;
- contenido de valor por perfil: reconversión, mejora profesional, hobby avanzado, certificación;
- llamada opcional si el programa es consultivo o el lead pide diagnóstico.

**Salida**

- A Activación: pregunta por precio, financiación, inicio, matrícula, plaza o callback.
- A Exploración: baja intensidad y vuelve a información general.
- A Nurturing: no responde tras varios intentos.

**KPIs**

- ratio de avance a Activación;
- interacción con simulador de cuota;
- ratio de leads que solicitan callback;
- engagement por contenido de valor;
- conversión por canal de consideración.

### 8.5 Estado 3. Activación

**Definición**

Aparece una señal clara de intención de compra. El lead está listo para una propuesta o intervención comercial.

**Triggers de entrada**

- pregunta por precio;
- pide financiación;
- pregunta fecha de inicio;
- consulta plazas o cupo;
- solicita llamada;
- inicia matrícula;
- vuelve después de comparar;
- responde positivamente a una oferta;
- abandona justo después de ver precio.

**Objetivo**

Capturar momentum y llevar al lead a propuesta económica o enrollment.

**Acciones automáticas**

- clasificar urgencia;
- generar contexto comercial;
- preparar propuesta económica inicial;
- enviar CTA de auto-enrollment si es lead autónomo;
- reenviar o actualizar enlace personalizado si el lead ya interactuó con self-service;
- activar alerta a comercial si hay alta intención, ticket alto o objeción compleja;
- registrar objeciones y sensibilidad económica.

**Intervención humana**

Se activa si:

- el score de intención es alto;
- el programa requiere decisión consultiva;
- el lead pide hablar;
- existe objeción económica explícita;
- hay alto valor esperado;
- hay riesgo de abandono avanzado;
- el auto-enrollment muestra fricción relevante tras una señal de intención;
- hay indecisión entre programas de ticket relevante.

**Salida**

- A Cierre: propuesta económica enviada o llamada de cierre agendada.
- A Enrollment: inicia matrícula directamente.
- A Rescate económico: objeción de precio.
- A Nurturing: timing no inmediato.

**SLA recomendado**

- Alta intención por WhatsApp: respuesta inmediata.
- Callback solicitado: menos de 15 minutos en horario comercial.
- Abandono en matrícula: intervención en menos de 30 minutos.
- Primera propuesta económica: durante la misma sesión siempre que sea posible.

### 8.6 Estado 4. Cierre

**Definición**

El lead está en interacción comercial activa, con propuesta económica, conversación de objeciones o decisión final pendiente.

**Objetivo**

Convertir intención en compromiso: reserva, pago, firma, financiación o inicio de matrícula.

**Acciones**

- defender valor y ROI;
- resolver objeciones;
- ajustar modalidad de pago;
- confirmar fecha de inicio;
- presentar beca o condiciones si aplica;
- usar urgencia real: cupo, inicio, caducidad de beca, protección de condiciones;
- enviar link de enrollment contextual;
- mantener WhatsApp como continuidad tras llamada.

**Reglas económicas**

- no descontar antes de reencajar valor;
- toda beca requiere motivo y caducidad;
- toda excepción fuera de tramo requiere aprobación;
- si hay objeción económica, pasar por flujo de rescate económico antes de abandonar.

**Salida**

- A Enrollment: acepta propuesta.
- A Rescate económico: no convierte por precio.
- A Rescate de timing: no puede decidir ahora.
- A Nurturing: pierde momentum sin objeción concreta.
- A Cerrado perdido: no hay fit, no hay potencial o rechazo definitivo.

**KPIs**

- conversión de Activación a Cierre;
- conversión de Cierre a Enrollment;
- ratio de cierre con voz vs sin voz;
- ratio de cierre IA-only, humano-only y mixto;
- descuento medio por matrícula;
- margen por cohorte;
- tiempo desde activación hasta propuesta.

### 8.7 Estado 5. Enrollment en progreso

**Definición**

El lead ha iniciado el proceso de matrícula, reserva, financiación, documentación o pago.

**Objetivo**

Eliminar fricción operativa y completar matrícula.

**Señales**

- inicia formulario;
- sube documentación;
- abre link de pago;
- empieza financiación;
- reserva plaza;
- abandona paso específico;
- pide ayuda con datos o condiciones.

**Acciones**

- asistencia IA paso a paso;
- recordatorios contextuales por WhatsApp;
- guardado de progreso;
- recuperación de abandono por paso;
- escalado humano si hay bloqueo documental, pago o financiación;
- confirmación de plaza y onboarding tras completar.

**Puntos críticos de abandono**

- creación de cuenta;
- documentación;
- selección de modalidad de pago;
- financiación;
- pago inicial;
- firma o aceptación de condiciones.

**Salida**

- A Matrícula completada.
- A Rescate operativo: bloqueo técnico, documental o pago.
- A Rescate económico: abandona tras condiciones económicas.
- A Cierre: requiere conversación adicional.

**KPIs**

- ratio de inicio a completado;
- abandono por paso;
- tiempo medio de finalización;
- rescate de abandono;
- tickets de ayuda por matrícula;
- conversión de financiación iniciada a aprobada.

### 8.8 Estado 6. Rescate

**Definición**

El lead no ha convertido, pero mantiene potencial. Puede estar bloqueado por precio, timing, confianza, documentación, financiación, indecisión o silencio.

**Objetivo**

Recuperar conversión sin erosionar margen ni insistir de forma ciega.

**Subtipos**

| Subtipo | Señal | Respuesta |
|---|---|---|
| Rescate económico | "Es caro", abandono tras precio, simulación repetida | Valor, pago, beca, timing |
| Rescate operativo | abandono de matrícula, bloqueo documental, error de pago | Asistencia inmediata y simplificación |
| Rescate de confianza | dudas sobre reputación, salidas, calidad, empleabilidad | Testimonios, casos, llamada humana |
| Rescate de timing | quiere hacerlo más adelante | nurturing por convocatoria y fechas |
| Rescate competitivo | menciona otra escuela o alternativa | comparativa, diferencial y propuesta ajustada |

**Salida**

- Reactivación a Activación.
- Vuelta a Consideración.
- Nurturing económico diferido.
- Cerrado perdido con motivo trazado.

### 8.9 Matriz operativa de canal y actor

La orquestación debe traducirse en reglas simples al principio, medibles y ajustables con datos. Propuesta inicial:

| Situación del lead | Canal principal | Actor principal | Acción |
|---|---|---|---|
| Formulario básico completado | WhatsApp + email | IA | Confirmar contexto y enviar enlace personalizado según marca y formación |
| Llamada inbound registrada | Voz + WhatsApp/email | Humano o IA según disponibilidad | Dar continuidad digital con enlace personalizado y contexto de la llamada |
| Contacto por chat/WhatsApp | Chat | IA | Mantener conversación y abrir auto-enrollment sin cambiar de canal |
| Interés informativo sin urgencia | WhatsApp/email | IA | Educar, clasificar y llevar a consideración |
| Pregunta por temario o salidas | WhatsApp | IA | Resolver duda y proponer siguiente CTA |
| Compara varios programas | WhatsApp + posible voz | IA primero, humano si alto valor | Diagnóstico y recomendación |
| Pregunta por precio | WhatsApp + auto-enrollment | IA + motor económico | Simular condiciones y detectar fricción |
| Pregunta por financiación | WhatsApp + auto-enrollment | IA | Explicar opciones y llevar a simulador |
| Pide llamada | Voz | Comercial | Contacto prioritario y cierre de siguiente paso |
| Ticket alto o decisión consultiva | Voz + WhatsApp | Comercial con contexto IA | Diagnóstico, valor y propuesta |
| Formación con requisitos de aceptación | Chat + pre-enrollment + posible voz | IA + humano si aplica | Explicar requisitos, mantener exclusividad y agendar evaluación |
| CP con opción presencial relevante | WhatsApp + presencialidad | Comercial / equipo local | Activar prueba social o contacto cercano si aumenta conversión |
| Abandona matrícula | WhatsApp/callback | IA + humano si bloqueo crítico | Recuperación por paso abandonado |
| Abandona auto-enrollment sin completar | WhatsApp/email + posible voz | IA primero, humano si alta intención | Recuperar desde el paso exacto y ajustar ritmo de push |
| Objeción de precio | WhatsApp + voz selectiva | Comercial o IA según valor | Flujo de rescate económico |
| Reaparece tras semanas | WhatsApp | IA | Recalificar intención y actualizar propuesta |
| Lead sin fit | Email/WhatsApp ligero | IA | Cierre limpio o nurturing de baja intensidad |

### 8.10 Campos mínimos para CRM y orquestador

Para que el funnel funcione como máquina de estados, el CRM no debe guardar solo datos de contacto. Debe guardar decisión comercial.

**Campos de entrada**

- fuente de entrada: formulario, llamada, chat/WhatsApp, presencial, reactivación o base;
- marca de origen;
- formación visualizada;
- URL o landing de origen;
- canal inicial;
- campaña o fuente paid/orgánica si aplica;
- teléfono y email disponibles;
- timestamp de creación del lead;
- enlace personalizado enviado;
- canal por el que se envió el enlace: chat, WhatsApp, email o varios.

**Campos de estado**

- estado actual del lead;
- estado anterior;
- fecha de último cambio de estado;
- motivo de cambio;
- siguiente mejor acción;
- fecha límite de siguiente acción;
- owner actual.

**Campos de intención**

- score de intención;
- señal principal de activación;
- urgencia declarada;
- fecha objetivo de inicio;
- programa de interés;
- alternativa competidora mencionada;
- nivel de interacción reciente.

**Campos económicos**

- precio base;
- propuesta económica vigente;
- modalidad de pago propuesta;
- financiación disponible;
- beca o descuento aplicado;
- motivo de beca o descuento;
- caducidad de condiciones;
- suelo económico;
- aprobación requerida;
- margen estimado.

**Campos de fricción**

- objeción principal;
- subtipo de rescate;
- paso de abandono;
- motivo de no compra;
- último contenido o CTA enviado;
- respuesta al último CTA.

**Campos de canal**

- canal preferido;
- canal de mayor respuesta;
- llamadas realizadas;
- WhatsApps enviados y respondidos;
- interacciones de auto-enrollment;
- último paso completado en auto-enrollment;
- paso de abandono en auto-enrollment;
- simulaciones económicas realizadas;
- último contacto humano.

---

## 9. Ruta A: auto-enrollment para programas de decisión autónoma

### 9.1 Cuándo aplicar

Programas con compra más táctica, menor ticket, menor complejidad de decisión, mayor autonomía digital o menor necesidad de diagnóstico.

### 9.2 Lógica comercial

El objetivo es dar atención inmediata y permitir que el estudiante avance por auto-enrollment sin intervención humana cuando está preparado. No es e-commerce: sigue siendo una experiencia guiada, conversacional y personalizada.

Secuencia operativa:

| Paso | Acción |
|---|---|
| Lead creado | Formulario, llamada o chat registran datos, marca y formación |
| Primera gestión IA | WhatsApp/chat y email envían enlace personalizado |
| Auto-enrollment | Precio claro, simulador, reserva, pago o financiación |
| Conversación activa | IA acompaña dudas sin sacar al lead del proceso |
| Escalado selectivo | Callback solo si aparece petición, objeción o abandono relevante |

### 9.3 Reglas operativas

- La IA y WhatsApp resuelven la mayor parte de preguntas.
- El chat acompaña todo el proceso y explica qué está ocurriendo.
- El enlace de auto-enrollment se envía por chat/WhatsApp y email en la primera gestión.
- El precio o rango económico debe aparecer pronto y con claridad.
- El CTA principal es iniciar matrícula, reservar plaza o simular cuota.
- La llamada es opcional y se activa por petición, objeción o abandono.
- Si la formación tiene requisitos, se permite pre-enrollment condicionado en lugar de matrícula directa.
- La urgencia debe basarse en fecha de inicio, cupo o condiciones reales.
- El rescate se centra en pago, beca táctica y recuperación de abandono.

### 9.4 Métricas prioritarias

- conversión por auto-enrollment;
- tiempo a matrícula;
- abandono por paso;
- ratio de asistencia por IA;
- ratio de callbacks solicitados;
- coste comercial humano por matrícula;
- conversión tras abandono de enrollment.

---

## 10. Ruta B: acompañamiento para programas consultivos o selectivos

### 10.1 Cuándo aplicar

Programas de ticket alto, duración larga, reconversión profesional, mayor inseguridad, mayor implicación económica, requisitos de aceptación, entrevista de evaluación o necesidad de explicar ROI.

### 10.2 Lógica comercial

El objetivo es construir confianza, defender valor y acompañar una decisión más compleja sin perder inmediatez. La IA y el chat actúan desde el minuto cero; la voz humana, la voz IA o la presencialidad se levantan cuando aportan conversión.

Secuencia operativa:

| Paso | Acción |
|---|---|
| Lead creado | Formulario, llamada o chat registran marca, formación y canal |
| Primera gestión IA | La IA responde, recoge contexto y envía enlace personalizado |
| Diagnóstico | El motor detecta si hay ticket alto, objeción, requisito o necesidad de confianza |
| Intervención selectiva | Voz humana, voz IA o presencialidad por código postal si aporta conversión |
| Enrollment asistido | Chat sigue activo y el comercial opera con el contexto ya recogido |

### 10.3 Reglas operativas

- La IA prepara contexto antes de la llamada.
- La voz se activa con más frecuencia, pero no como ritual universal.
- La presencialidad se activa solo si el código postal y el caso lo justifican.
- El comercial trabaja valor, objetivo profesional, barreras y decisión.
- La propuesta económica debe ser personalizada y trazable.
- Los testimonios, salidas profesionales y casos similares tienen peso central.
- El enrollment puede ser asistido por comercial, IA o ambos, y puede quedar condicionado a requisitos de aceptación.
- El rescate económico debe ser más sofisticado: valor, financiación, beca y seguimiento por timing.

### 10.4 Métricas prioritarias

- show rate de llamadas;
- conversión llamada a propuesta;
- conversión propuesta a enrollment;
- ratio de objeciones resueltas;
- descuento medio y margen;
- conversión tras beca;
- ratio de rescate de no-cierre;
- productividad comercial por hora.

---

## 11. Flujo de rescate económico

La objeción de precio debe activar un flujo específico. No debe resolverse con descuento automático ni con abandono del lead.

### Fase 1. Reencaje de valor

**Objetivo**: cambiar la percepción de valor antes de tocar condiciones.

Acciones:

- reforzar salidas profesionales;
- explicar retorno esperado;
- mostrar compatibilidad con trabajo o vida personal;
- presentar testimonios o casos similares;
- comparar coste frente a alternativa de no formarse;
- vincular decisión con convocatoria o inicio real.

Salida:

- si acepta valor, vuelve a Cierre;
- si persiste bloqueo económico, pasa a reconfiguración de pago.

### Fase 2. Reconfiguración del pago

**Objetivo**: reducir barrera de entrada sin bajar precio nominal.

Acciones:

- cambiar modalidad de pago;
- ampliar financiación;
- reducir entrada;
- redistribuir cuotas;
- explicar calendario de pagos;
- verificar elegibilidad financiera.

Salida:

- si la cuota encaja, vuelve a Enrollment;
- si no encaja, pasa a beca.

### Fase 3. Activación de beca o descuento gobernado

**Objetivo**: usar palanca económica con control de margen.

Acciones:

- validar elegibilidad;
- seleccionar tramo autorizado;
- asignar motivo;
- comunicar caducidad real;
- registrar impacto esperado;
- escalar aprobación si supera umbral.

Salida:

- si acepta, Enrollment;
- si no acepta, nurturing económico diferido.

### Fase 4. Nurturing económico diferido

**Objetivo**: mantener potencial vivo hasta que cambie timing, cupo, convocatoria o condiciones.

Acciones:

- seguimiento por nueva convocatoria;
- actualización de becas disponibles;
- contenido de valor y empleabilidad;
- reactivación por hitos temporales;
- propuesta revisada si cambian condiciones;
- alerta si vuelve a visitar pricing o simulador.

Salida:

- reactivación a Activación;
- cerrado perdido si no hay fit o rechazo definitivo.

---

## 12. Nurturing activado por eventos

El nurturing deja de ser una secuencia fija. Se convierte en un conjunto de respuestas a señales.

| Evento | Interpretación | Acción recomendada | Canal | Owner |
|---|---|---|---|---|
| Visita a pricing | Intención económica | Ofrecer simulador o explicación de opciones | WhatsApp/IA | IA |
| Simulación de cuota | Sensibilidad a pago | Enviar alternativas de financiación | WhatsApp | IA |
| Abandono tras precio | Fricción económica | Activar rescate económico | WhatsApp + comercial si alto valor | IA + humano |
| Abandono de matrícula | Fricción operativa o económica | Recuperación inmediata por paso abandonado | WhatsApp/callback | IA + ops/comercial |
| Apertura reiterada de WhatsApp | Interés latente | CTA hacia llamada, cuota o matrícula | WhatsApp | IA |
| Pregunta por fecha de inicio | Urgencia potencial | Propuesta con fecha, cupo y reserva | WhatsApp/voz | IA o humano |
| Solicitud de callback | Alta intención | Llamada prioritaria | Voz | Comercial |
| Mención de competidor | Comparación activa | Diferencial, prueba social, llamada si ticket alto | WhatsApp/voz | Comercial |
| No respuesta tras propuesta | Pérdida de momentum | Secuencia breve de cierre y luego pausa | WhatsApp | IA |
| Reaparición tras semanas | Timing reabierto | Recalificar intención y condiciones | WhatsApp | IA |
| Nueva convocatoria | Ventana comercial | Reactivación segmentada | WhatsApp/email | IA |
| Beca próxima a caducar | Urgencia real | Recordatorio claro y CTA | WhatsApp | IA/comercial |

---

## 13. Cuadro de mando y KPIs

El nuevo modelo requiere medir estados, transiciones y margen. No basta con medir conversión final.

### 13.1 KPIs de velocidad

- tiempo a primera respuesta útil;
- tiempo a primera clasificación;
- tiempo a primera interacción humana;
- tiempo a primera propuesta económica;
- tiempo desde activación hasta enrollment;
- tiempo de rescate tras abandono.

### 13.2 KPIs de intención y avance

- ratio de Exploración a Consideración;
- ratio de Consideración a Activación;
- ratio de Activación a Cierre;
- ratio de Cierre a Enrollment;
- ratio de Enrollment iniciado a matrícula completada;
- ratio de reactivación desde nurturing.

### 13.3 KPIs de canal y actor

- conversión WhatsApp-only;
- conversión voz asistida;
- conversión por auto-enrollment;
- conversión IA-only;
- conversión humano-only;
- conversión modelo mixto;
- productividad comercial por lead y por hora;
- uplift de voz frente a no voz por segmento.

### 13.4 KPIs económicos

- precio medio neto;
- descuento medio;
- beca media;
- coste de beca por matrícula incremental;
- conversión tras primera objeción económica;
- conversión tras financiación;
- conversión tras beca;
- margen por programa, zona y cohorte;
- ratio de excepciones fuera de regla.

### 13.5 KPIs de calidad operativa

- abandono por paso de enrollment;
- tasa de errores o bloqueos de matrícula;
- motivos de no compra;
- motivos de rescate fallido;
- ratio de leads sin siguiente acción asignada;
- cumplimiento de SLA por estado.

---

## 14. Gobierno operativo

### 14.1 Roles necesarios

| Rol | Responsabilidad |
|---|---|
| Dirección comercial | Define prioridades, reglas de escalado y objetivos de conversión |
| Revenue Operations | Diseña estados, automatizaciones, reporting y trazabilidad |
| Marketing | Genera demanda, señales, contenidos y eventos de activación |
| Equipo comercial | Ejecuta cierre, diagnóstico, objeciones y rescate de alto valor |
| Tecnología/IA | Integra sistemas, modelos de clasificación, WhatsApp, CRM y enrollment |
| Finanzas | Define suelos, margen, becas, descuentos y aprobación económica |
| Producto/Académico | Aporta narrativa de valor, empleabilidad, contenidos y diferenciales |

### 14.2 Ritmos de gobierno

**Diario**

- revisión de leads de alta intención sin contacto;
- revisión de abandonos de enrollment;
- seguimiento de SLA críticos;
- reasignación de oportunidades bloqueadas.

**Semanal**

- análisis de conversión por estado;
- revisión de objeciones y motivos de no compra;
- ajuste de mensajes, CTAs y workflows;
- revisión de productividad comercial;
- análisis de rescate económico.

**Mensual**

- comité de pricing y becas;
- revisión de margen por programa/cohorte;
- análisis de uplift de canales;
- decisión de escalado o cambio de reglas;
- priorización de mejoras en enrollment y auto-enrollment.

### 14.3 Reglas de decisión

- Ningún lead de alta intención debe quedar sin siguiente acción.
- Ninguna beca debe concederse sin motivo, caducidad y trazabilidad.
- Ningún descuento fuera de tramo debe aplicarse sin aprobación.
- Ningún abandono de enrollment debe quedar sin recuperación.
- Ningún flujo automatizado debe operar sin medición de conversión por estado.
- Ninguna llamada debe considerarse obligatoria si no aporta uplift probado.

---

## 15. Plan de implantación

La implantación debe hacerse por pilotos controlados, no por despliegue masivo inicial. Se recomienda comenzar con una muestra de programas que incluya al menos un programa de decisión rápida y uno consultivo.

### Fase 1. Diseño operativo e instrumentación (semanas 1 a 4)

**Objetivo**: dejar preparado el modelo mínimo de estados, datos, canales y medición.

Actividades:

- definir estados comerciales y criterios de entrada/salida;
- auditar CRM, WhatsApp, call center, enrollment y pricing;
- definir campos mínimos de intención, fricción y propuesta económica;
- diseñar eventos críticos;
- establecer SLAs;
- construir dashboard inicial;
- seleccionar programas piloto.

Resultado:

Un funnel instrumentado para medir transiciones y operar pilotos sin perder trazabilidad.

### Fase 2. Piloto de orquestación por intención (semanas 5 a 10)

**Objetivo**: probar clasificación, WhatsApp persistente, IA de respuesta y activación selectiva de voz.

Actividades:

- activar clasificación automática;
- activar primera gestión IA post-captura para formularios, llamadas registradas y chat/WhatsApp;
- enviar enlaces personalizados por chat/WhatsApp y email;
- lanzar rutas de Exploración, Consideración y Activación;
- derivar a voz solo con reglas definidas;
- probar auto-enrollment en programas de decisión autónoma;
- preparar contexto para comerciales en programas consultivos;
- medir uplift de voz, IA y canal mixto.

Resultado:

Primer aprendizaje real sobre qué leads necesitan humano, cuáles convierten por auto-enrollment y dónde se pierde intención.

### Fase 3. Piloto de pricing y rescate económico (semanas 8 a 14)

**Objetivo**: activar propuesta económica personalizada bajo reglas de gobernanza.

Actividades:

- definir tramos de beca y descuento por programa;
- configurar suelos económicos;
- registrar motivos de descuento;
- activar flujo de rescate económico;
- medir conversión incremental y margen;
- revisar reglas semanalmente.

Resultado:

Un sistema económico más flexible, medible y gobernado, con datos sobre elasticidad y recuperación de leads.

### Fase 4. Enrollment asistido y recuperación de abandono (semanas 12 a 18)

**Objetivo**: reducir pérdida entre intención y matrícula completada.

Actividades:

- mapear pasos de abandono;
- activar asistencia IA paso a paso;
- enviar recordatorios contextuales;
- escalar bloqueos a humano;
- medir abandono por paso;
- simplificar pasos con mayor fricción.

Resultado:

Mayor conversión de enrollment iniciado a matrícula completada y menor pérdida operativa.

### Fase 5. Escalado controlado (semana 18 en adelante)

**Objetivo**: extender el modelo a más programas, zonas y equipos.

Actividades:

- seleccionar nuevos programas por potencial;
- ajustar reglas por tipo de funnel;
- formar equipo comercial en nuevo modelo;
- institucionalizar comité de pricing;
- ampliar dashboards;
- establecer ciclos de mejora continua.

Resultado:

El modelo deja de ser piloto y se convierte en el sistema operativo comercial.

### Vista de conjunto

```
Semana:  1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18+
         |--- Fase 1: diseño e instrumentación ---|
                         |--- Fase 2: orquestación por intención ---|
                                     |--- Fase 3: pricing y rescate económico ---|
                                                     |--- Fase 4: enrollment asistido ---|
                                                                         |--- Fase 5: escalado --->
```

---

## 16. Riesgos y mitigaciones

| Riesgo | Consecuencia | Mitigación |
|---|---|---|
| Automatizar sin buena clasificación | Leads tratados por rutas incorrectas | Piloto controlado, revisión diaria y reglas simples al inicio |
| Descontar demasiado pronto | Erosión de margen | Orden obligatorio: valor, pago, beca, descuento |
| Voz mal priorizada | Saturación comercial | Medir uplift por segmento y ajustar activación |
| Auto-enrollment incompleto | Abandono avanzado | Asistencia IA, recuperación por paso y callback selectivo |
| Falta de trazabilidad económica | Becas sin control | Motivo, tramo, caducidad, aprobación y margen por operación |
| Nurturing genérico | Baja reactivación | Activación por eventos y mensajes contextuales |
| Resistencia comercial | Uso parcial del modelo | Formación, dashboards claros y reparto de leads por valor |
| Exceso de complejidad inicial | Parálisis operativa | Empezar con pocos estados, pocos programas y reglas medibles |

---

## 17. Mensajes clave para alinear a la organización

**1. No se elimina la venta humana. Se reserva para donde más impacto tiene.**

El comercial humano sigue siendo decisivo en confianza, objeciones y cierre. El cambio es que deja de intervenir igual en todos los casos.

**2. No se elimina la entrevista. Se convierte en una palanca premium.**

La entrevista deja de ser un trámite estructural y pasa a activarse cuando acelera conversión o protege margen.

**3. El auto-enrollment no compite con comercial. Libera capacidad comercial.**

Los leads autónomos deben poder avanzar sin fricción por matrícula, reserva, pago o financiación asistida. No es e-commerce: es enrollment personalizado sin intervención humana cuando el caso lo permite. Los leads complejos reciben más acompañamiento.

**4. El precio personalizado no es descuento libre. Es una política económica gobernada.**

Cada beca o descuento debe tener regla, motivo, caducidad, suelo e impacto medido.

**5. La objeción de precio no es el final del funnel. Es el inicio de un flujo de rescate.**

Antes de perder al lead, el sistema debe trabajar valor, pago, beca y timing.

**6. El funnel deja de ser una secuencia. Pasa a ser una máquina de decisiones.**

La ventaja competitiva estará en decidir mejor y más rápido qué hacer con cada lead, en cada momento.

---

## 18. Anexos de profundización

Este plan estratégico se complementa con ocho anexos técnicos y operativos que resuelven las grietas identificadas en la revisión de robustez. Cada anexo puede leerse de forma independiente y está pensado para una audiencia específica.

| Anexo | Título | Audiencia principal | Resuelve |
|---|---|---|---|
| [A](anexos/anexo-A-linea-base-y-metricas-objetivo.md) | Línea base y métricas objetivo | Dirección comercial + Finanzas | Sin baseline, los KPIs del §13 son opinión, no gestión. Define 36 métricas, targets 12m/24m, metodología de baselining en 15 días y criterios go/no-go por fase. |
| [B](anexos/anexo-B-motor-de-intencion-arquitectura.md) | Motor de intención: arquitectura técnica | CTO + Data/ML | El motor de intención descrito en §4 Capa 1 como capacidad, sin arquitectura. Propone híbrido reglas+ML en 3 capas, 16 features, estrategia de etiquetado, MLOps y plan de 4 hitos. |
| [C](anexos/anexo-C-impacto-red-comercial-change-management.md) | Impacto en la red comercial y change management | Dirección comercial + RRHH | El riesgo político mayor (§16 lo menciona de pasada). 3 opciones de rediseño de compensación, mapa de roles, plan en 5 etapas, 7 KPIs de adopción. |
| [D](anexos/anexo-D-catalogo-programas-plantilla.md) | Catálogo operativo de programas | RevOps + Académico | Prerrequisito de Fase 2 no contemplado en Fase 1. Plantilla de 16 campos, 5 fichas ejemplo, proceso de mantenimiento y reglas de consistencia. |
| [E](anexos/anexo-E-sla-cobertura-horaria.md) | SLA y plan de cobertura horaria | Operaciones comerciales | Resuelve la tensión entre promesa 24/7 (§8.2) y SLA humano <5min (§8.5). 3 franjas, 3 patrones de handoff IA↔humano, escalation tree, activación escalonada. |
| [F](anexos/anexo-F-cumplimiento-legal.md) | Cumplimiento legal y regulatorio | Legal + DPO + Dirección | El pricing personalizado (§7) y la IA conversacional (§6.4) sin tratamiento legal. Mapa de 8 normas (LGCU, Omnibus, RGPD, AI Act...), 15 reglas internas, 7 checkpoints en cronograma. |
| [G](anexos/anexo-G-costeo-dependencias-tecnicas.md) | Costeo, dependencias técnicas y cronograma realista | CTO + CFO + COO | El plan de 18 semanas está infra-costeado. Separa piloto funcional (18 semanas) de plataforma técnica (10-14 meses), 7 proyectos de integración, OPEX estimado 134-353 k€, matriz build/buy/integrate. |
| [H](anexos/anexo-H-faq-objeciones-internas.md) | FAQ de objeciones internas | Equipo que presenta el plan | 22 objeciones anticipadas por audiencia (red comercial, dirección, marketing, académico, tech, legal) con respuesta corta y larga. Guía para distinguir objeción legítima vs. defensa de territorio. |

**Orden de lectura recomendado según rol:**

- **Comité de dirección**: One-pager + §17 Mensajes clave + Anexo A (línea base) + Anexo G (costeo).
- **Dirección comercial**: Plan completo + Anexo C (red comercial) + Anexo H (FAQ) + Anexo E (SLA).
- **CTO / Data**: Plan §4 + Anexo B (motor) + Anexo G (integraciones) + Anexo A §5 (dashboard).
- **Legal / DPO**: Anexo F completo + §7 del plan + Anexo B §4 (etiquetado y datos).
- **Operaciones**: Anexo D (catálogo) + Anexo E (SLA) + §8 del plan.

**Estado de los anexos:** todos son primera versión v1.0. Deben revisarse antes del kick-off del piloto y actualizarse tras Fase 1 con los datos reales de la línea base.

---

## Conclusión

La nueva comercialización de Northius debe operar como un sistema adaptativo de decisión comercial. El objetivo no es añadir más impactos, más llamadas o más descuentos. El objetivo es aplicar la acción correcta en el momento correcto: suficiente automatización para escalar, suficiente intervención humana para cerrar oportunidades complejas, suficiente personalización económica para capturar demanda y suficiente gobernanza para proteger margen.

El modelo propuesto convierte el funnel en una infraestructura viva. Cada lead avanza según intención, no según una secuencia fija. Cada canal se usa donde aporta más. Cada propuesta económica se adapta dentro de límites. Cada no-cierre genera aprendizaje o rescate. Esa es la base de una comercialización más precisa, rentable y defendible.
