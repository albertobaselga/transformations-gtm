# ANEXO F — Cumplimiento legal y regulatorio del pricing dinámico y el uso de IA conversacional

**Documento vinculado a:** Estrategia de Transformación del Modelo de Comercialización — Northius  
**Versión:** 1.0 | Abril 2026  
**Autor:** Alberto  
**Estado:** Borrador para revisión por el equipo Legal

---

> **AVISO IMPORTANTE — DISCLAIMER**
>
> Este documento **no constituye asesoramiento jurídico** ni sustituye la opinión de un abogado o del departamento Legal de la organización. Su único propósito es trazar un **mapa de áreas de riesgo regulatorio** que el equipo Legal y los asesores externos deben validar, completar y actualizar antes de que cualquier componente del nuevo modelo entre en producción.
>
> La normativa citada puede haber sido modificada, desarrollada reglamentariamente o interpretada por autoridades de control con posterioridad a la redacción de este texto. Las referencias legales se incluyen como orientación estructural, no como interpretación vinculante.
>
> **Ninguna decisión operativa sobre pricing, becas o uso de IA debe tomarse basándose exclusivamente en este anexo.**

---

## 1. Alcance y propósito

La Estrategia de Transformación Comercial propone tres palancas que tienen implicaciones legales directas y que no están cubiertas en el documento principal:

1. **Pricing personalizado y dinámico**: la propuesta económica al lead varía en función de zona geográfica, perfil, comportamiento en el funnel, ocupación de cupo, historial de interacción y valor estratégico.
2. **Becas gobernadas por el sistema**: la elegibilidad a descuentos con nombre de "beca" la decide (en parte) un motor automatizado con reglas de negocio.
3. **IA conversacional como primera capa de atención**: un agente de IA gestiona la primera comunicación con el lead, clasifica intención, propone precio, acompaña el enrollment y ejecuta nurturing por WhatsApp y otros canales.

Este anexo recorre los marcos normativos aplicables, identifica los riesgos específicos de cada palanca, propone reglas operativas internas, establece checkpoints legales en el cronograma y define la documentación obligatoria.

---

## 2. Marco regulatorio aplicable (España + UE)

### 2.1 LGCU — Ley General para la Defensa de los Consumidores y Usuarios (RDL 1/2007)

La LGCU es el marco de referencia para la relación con el consumidor en España. Sus implicaciones sobre el modelo propuesto son múltiples:

- **Información precontractual** (art. 60): el consumidor tiene derecho a recibir información clara, comprensible y suficiente sobre el precio total, las condiciones del contrato y las características del servicio *antes* de quedar vinculado. Un sistema de pricing dinámico debe garantizar que el precio que ve el lead en cada momento es el que efectivamente se le va a cobrar, sin sorpresas en el checkout.
- **Oferta vinculante** (art. 61): las condiciones difundidas en publicidad o comunicadas por chat se incorporan al contrato aunque no figuren expresamente en él. Si la IA conversacional comunica un precio o una beca, ese comunicado puede tener valor contractual.
- **Derecho de desistimiento** (arts. 102-108): aplicable en contratos a distancia y fuera del establecimiento. Los plazos (14 días naturales) y las condiciones deben estar claramente recogidos en el flujo de auto-enrollment.
- **Cláusulas abusivas** (arts. 82-91): cualquier condición sobre caducidad de oferta, limitación de devolución o urgencia de decisión que resulte desproporcionada puede ser considerada abusiva.

**Área de riesgo alto**: el uso de "urgencia real" como palanca de pricing (recogido en §7.3 de la estrategia) debe estar fundado en hechos verificables (cupo efectivamente limitado, fecha de inicio real). La urgencia ficticia o artificialmente inducida puede constituir práctica comercial desleal.

### 2.2 Educación reglada vs. no reglada — diferencia de régimen

Este es uno de los ejes de mayor varianza regulatoria del modelo:

- **Formación no reglada** (cursos, programas propios, títulos privados): el operador tiene amplia libertad para fijar precios, aplicar descuentos y diseñar condiciones comerciales. Es el espacio donde el modelo de pricing dinámico tiene mayor margen de maniobra.
- **Formación reglada** (títulos oficiales, ciclos formativos, grados, másteres universitarios oficiales, FP reglada): el marco es mucho más restrictivo. Los precios pueden estar tasados o limitados por la administración competente (comunidad autónoma, universidades). La posibilidad de aplicar descuentos "comerciales" sobre precios reglados es muy limitada o directamente inexistente.
- **Becas en formación reglada**: si el programa tiene acceso a becas del sistema público (MEFP, comunidades autónomas), existe riesgo de confusión entre la beca comercial interna de Northius y las becas oficiales. La comunicación debe ser inequívoca para evitar que el lead entienda que está accediendo a una beca pública cuando en realidad se trata de un descuento comercial.

**Acción requerida por Legal**: para cada programa del portfolio, clasificar si es reglado o no reglado, e identificar qué restricciones específicas aplican al pricing y a los descuentos.

### 2.3 Transparencia de precios — Directiva Omnibus (2019/2161/UE) y su transposición española

La Directiva Omnibus, transpuesta en España mediante el RDL 24/2021 y modificaciones posteriores a la LGCU, establece obligaciones relevantes para el modelo:

- **Precio anterior en descuentos**: cuando se anuncia una reducción de precio, debe indicarse el precio más bajo aplicado en los 30 días anteriores. Esto afecta directamente a los descuentos tácticos y becas con precio de referencia.
- **Personalización de precios**: cuando el precio se adapta mediante perfilado automatizado, el consumidor debe ser informado de ello. No es suficiente con indicar que "el precio puede variar"; es necesario informar de que el precio mostrado es personalizado.
- **Reseñas y valoraciones**: si el sistema utiliza prueba social (testimonios, valoraciones) como parte del proceso de persuasión, estas deben ser auténticas y verificables.

### 2.4 RGPD (Reglamento UE 2016/679) y LOPDGDD (LO 3/2018)

El tratamiento de datos personales en el modelo propuesto es extenso y abarca varias bases legales:

- **Base jurídica del tratamiento** (art. 6 RGPD): el perfilado del lead para determinar su propuesta económica requiere una base jurídica sólida. La base más frecuente en relaciones precontractuales es la ejecución del contrato (art. 6.1.b) o el interés legítimo (art. 6.1.f), pero el perfilado con fines de pricing personalizado puede requerir consentimiento explícito (art. 6.1.a), especialmente si implica decisiones automatizadas con efectos significativos.
- **Decisiones automatizadas** (art. 22 RGPD): si el motor de intención toma decisiones con efectos jurídicos o significativos para el interesado (por ejemplo, denegarle el acceso a una beca o mostrarle un precio más alto que a otro lead), el interesado tiene derecho a:
  - no ser objeto de decisiones basadas únicamente en tratamiento automatizado;
  - solicitar intervención humana;
  - expresar su punto de vista;
  - impugnar la decisión.
- **Datos de categoría especial**: si el sistema infiere situación económica, discapacidad u otras características sensibles para determinar elegibilidad a becas, puede estar tratando datos de categoría especial indirectamente, lo que exige bases jurídicas reforzadas.
- **Principio de minimización**: el motor de intención debe usar solo los datos estrictamente necesarios para cada finalidad. No es admisible acumular datos "por si acaso".
- **Derechos del interesado**: acceso, rectificación, supresión, portabilidad, oposición y limitación deben ser ejercibles de forma efectiva, también respecto a los perfiles generados por el motor de intención.
- **LOPDGDD**: complementa al RGPD en aspectos como el tratamiento de datos de menores (especialmente relevante si hay programas dirigidos a jóvenes), el régimen de sanciones y la figura del Delegado de Protección de Datos (DPO), cuya designación puede ser obligatoria si el tratamiento implica perfilado a gran escala.

### 2.5 AI Act europeo (Reglamento UE 2024/1689)

El AI Act clasifica los sistemas de IA por nivel de riesgo. En el contexto del modelo propuesto:

- **Sistemas de IA de alto riesgo** (Anexo III del AI Act): los sistemas de IA que se utilizan para la admisión o evaluación de personas en instituciones de educación y formación profesional están clasificados explícitamente como de **alto riesgo**. Si el motor de intención interviene en decisiones de admisión, elegibilidad o acceso a programas formativos, puede quedar bajo este régimen.
- **Obligaciones para sistemas de alto riesgo**: gestión de riesgos documentada, datos de entrenamiento de calidad, trazabilidad y registro de logs, transparencia ante el usuario, supervisión humana, exactitud y robustez, y registro en la base de datos de la UE.
- **Sistemas de riesgo limitado** (IA conversacional): los chatbots y agentes de IA que interactúan con personas tienen obligaciones de **transparencia**: el usuario debe saber que está interactuando con una IA, especialmente si lo pregunta o si podría creer razonablemente que habla con un humano.
- **Sistemas de riesgo mínimo**: el nurturing automatizado o la clasificación interna de leads puede quedar en esta categoría si no tiene efectos significativos directos sobre el individuo, pero conviene que Legal lo valide caso a caso.

**Calendario**: el AI Act entró en vigor en agosto de 2024. Las obligaciones para sistemas de alto riesgo son aplicables progresivamente; Legal debe confirmar qué fechas son relevantes para el perfil de Northius.

### 2.6 Normativa sobre becas oficiales — no confundir con descuento comercial

Las becas del sistema público (convocatorias del MEFP, becas autonómicas, becas de entidades financieras con respaldo institucional) tienen un régimen propio que no puede ser emulado ni confundido con los descuentos comerciales internos:

- Llamar "beca" a un descuento comercial no está prohibido per se, pero la denominación puede inducir a error si el consumidor cree que se trata de una ayuda pública o que tiene derechos asociados a una beca oficial.
- Si Northius colabora con entidades que gestionan becas oficiales, los requisitos de esa colaboración (publicidad, criterios de selección, no discriminación) deben respetarse escrupulosamente.
- La política de becas internas debe tener criterios objetivos documentados, públicos y aplicados de forma consistente.

### 2.7 Publicidad engañosa y comparativa — Ley 3/1991 de Competencia Desleal y Ley 34/1988 General de Publicidad

- **Publicidad engañosa**: cualquier afirmación del chatbot sobre precio, plaza disponible, titulación, empleabilidad o condiciones de la beca que no sea veraz y verificable puede constituir publicidad engañosa.
- **Urgencia artificial**: la presión de "solo quedan X plazas" o "oferta válida hasta hoy" cuando no es cierto es una práctica comercial agresiva prohibida (art. 8 y 9 Ley 3/1991).
- **Prácticas engañosas por omisión**: no informar al lead de que el precio que ve está personalizado y puede ser diferente al que vería otro usuario puede ser una omisión engañosa (art. 7 Ley 3/1991).

### 2.8 Ley de Servicios Digitales — DSA (Reglamento UE 2022/2065)

El DSA aplica a plataformas online que intermedian en la oferta de servicios. Dependiendo del volumen de usuarios activos de Northius, pueden aplicar obligaciones de:

- transparencia en sistemas de recomendación y personalización;
- información sobre publicidad dirigida;
- mecanismos de reclamación y revisión interna;
- cooperación con autoridades.

Legal debe determinar si Northius es un "proveedor de plataformas en línea" a efectos del DSA y qué nivel de obligaciones le corresponde.

---

## 3. Riesgos específicos del pricing personalizado

### 3.1 Discriminación por precio

El pricing basado en código postal, perfil demográfico o comportamiento puede, si no está correctamente parametrizado, derivar en trato desigual vinculado a características protegidas (origen nacional o étnico inferido por zona geográfica, situación económica inferida por comportamiento). Aunque la discriminación de precios como tal no está prohibida de forma general en el derecho de consumo, sí lo está cuando se basa en características protegidas (raza, sexo, origen, discapacidad, edad) o cuando genera un perjuicio injustificado al consumidor.

**Regla operativa**: el sistema no debe usar como variable de pricing ningún atributo que sea proxy de una característica protegida sin validación legal explícita.

### 3.2 Precio de referencia y descuentos anunciados

Cuando el sistema muestra un precio con descuento ("precio normal X, precio para ti Y"), está activando la obligación de la Directiva Omnibus: el precio de referencia debe ser el precio más bajo aplicado en los 30 días anteriores. Si el "precio normal" es un precio que en la práctica nunca se cobra, el descuento es ficticio y constituye una práctica engañosa.

### 3.3 Becas como descuentos encubiertos

Si las "becas" del sistema se conceden de forma masiva, sin criterio objetivo documentado y con el único fin de cerrar ventas, existe riesgo doble:
- **Legal**: puede interpretarse como precio de referencia ficticio (el precio sin beca nunca se cobra realmente).
- **Reputacional**: si un lead descubre que otro recibió la misma "beca" sin criterio aparente, la percepción de valor y la confianza en la institución se dañan.

### 3.4 Trazabilidad del descuento

Todo descuento o beca aplicada debe poder ser reconstruida: quién la autorizó, bajo qué regla, en qué fecha, con qué motivo y cuál fue el precio final pagado. Esta trazabilidad no es solo buena práctica; puede ser requerida ante reclamaciones del consumidor, inspecciones de consumo o litigios.

### 3.5 Transparencia contractual antes del pago

El precio final, las condiciones de pago, la caducidad de la oferta y las condiciones de desistimiento deben ser presentados de forma clara e inequívoca antes de que el lead confirme la compra. El auto-enrollment no puede agilizar el proceso eliminando este paso.

---

## 4. Riesgos específicos de la IA conversacional

### 4.1 Obligación de identificación como IA

El AI Act (art. 50) y las interpretaciones en curso del RGPD establecen que un sistema de IA que interactúa con personas físicas debe **informar al usuario de que está interactuando con una IA** cuando este lo pregunte o cuando pueda razonablemente creer que habla con un humano. El incumplimiento de esta obligación es una infracción específica del AI Act.

**Regla operativa**: el agente de IA debe identificarse como IA al inicio de la conversación o en el primer momento en que el usuario lo pregunte, sin ambigüedad.

### 4.2 Responsabilidad por afirmaciones del chatbot

Si la IA conversacional comunica un precio incorrecto, una plaza disponible que no existe, una titulación que el programa no otorga o condiciones de beca que no son exactas, Northius puede quedar vinculada contractualmente por esas afirmaciones (art. 61 LGCU) y expuesta a reclamaciones por publicidad engañosa. Los errores del chatbot no son un eximente de responsabilidad; son responsabilidad del operador.

**Regla operativa**: el chatbot no debe afirmar nada que no pueda ser verificado en tiempo real contra los sistemas de registro de la organización. Las respuestas sobre precio, plaza, titulación y condiciones deben tener fuente de verdad única.

### 4.3 Perfilado automatizado y derecho a intervención humana

Si el motor de intención toma decisiones con efectos significativos sobre el lead (denegarle una beca, mostrarle un precio más alto, no escalarle a un comercial humano), el lead tiene derecho bajo el art. 22 RGPD a solicitar intervención humana. El sistema debe hacer este derecho efectivo, no solo mencionarlo en la política de privacidad.

### 4.4 Consentimiento para comunicación por WhatsApp

El envío de mensajes comerciales por WhatsApp requiere consentimiento previo, expreso e informado del destinatario bajo la LOPDGDD y la normativa de servicios de la sociedad de la información (LSSI). No es suficiente con que el lead haya proporcionado su número de teléfono en un formulario de contacto. El consentimiento para recibir comunicaciones comerciales por WhatsApp debe ser específico, separado de otros consentimientos y revocable en cualquier momento.

**Área de riesgo alto**: el plan propone WhatsApp como "capa persistente" durante todo el journey. Si el consentimiento no está correctamente recogido, cada mensaje enviado puede constituir una infracción de la LSSI.

### 4.5 Registro y conservación de conversaciones

Las conversaciones con la IA son registros que contienen datos personales. Su conservación, acceso, uso y eliminación deben estar regulados por la política de privacidad y cumplir los principios de limitación de la finalidad y minimización. El período de conservación debe estar justificado y no puede ser indefinido.

---

## 5. Reglas operativas internas propuestas

Las siguientes reglas deben quedar recogidas en los documentos de gobernanza del sistema antes de su puesta en producción. Legal debe validarlas, completarlas y darles el formato adecuado:

1. **Trazabilidad de precio**: ningún precio comunicado a un lead puede diferir del precio registrado en el sistema de origen sin motivo documentado y autorización según el nivel de descuento.
2. **Precio de referencia real**: el precio "de lista" mostrado en comparaciones o descuentos debe haber sido el precio efectivamente aplicado en los 30 días anteriores, conforme a la Directiva Omnibus.
3. **Criterio objetivo de beca**: toda beca debe tener criterios de elegibilidad documentados, objetivos y no vinculados a características protegidas. La elegibilidad no puede depender únicamente de la disposición del lead a no pagar el precio completo.
4. **Prohibición de variables proxy de características protegidas**: el motor de pricing no puede usar como variable ningún atributo que sea un sustituto estadístico de raza, origen étnico, género, orientación sexual, discapacidad, religión o edad, salvo que Legal haya validado expresamente su uso bajo una base jurídica sólida.
5. **Identificación de la IA**: el agente conversacional debe identificarse como IA al inicio de cada conversación o cuando el usuario lo pregunte, en términos claros y sin rodeos.
6. **Fuente de verdad única para afirmaciones contractuales**: precio, plazas disponibles, titulación, fecha de inicio y condiciones de la beca solo pueden comunicarse al lead si proceden de una consulta en tiempo real al sistema de registro oficial. No se aceptan respuestas "hardcoded" del chatbot sobre estos elementos.
7. **Derecho a comercial humano siempre activo**: en cualquier punto del journey, el lead que solicite hablar con una persona debe ser conectado con un humano en un plazo razonable. El sistema no puede bloquear este derecho por estado del lead, fase del funnel o disponibilidad del equipo.
8. **Urgencia solo si es real**: las palancas de urgencia (plazas limitadas, oferta con caducidad) solo pueden activarse si el hecho que las sustenta es verificable y actual. El sistema debe tener un mecanismo para validar la veracidad de la urgencia antes de comunicarla.
9. **Consentimiento WhatsApp explícito y separado**: el consentimiento para recibir comunicaciones comerciales por WhatsApp debe obtenerse de forma separada del consentimiento general, con lenguaje claro sobre el tipo y frecuencia de mensajes, y con mecanismo de baja efectivo en cada mensaje.
10. **No denegar beca por criterio no documentado**: si el sistema deniega una beca, debe poder explicar la razón en términos comprensibles y no discriminatorios. Una denegación que no pueda ser explicada no debe ejecutarse.
11. **Registro de decisiones automatizadas significativas**: toda decisión del motor de intención que tenga un efecto relevante para el lead (precio mostrado, elegibilidad a beca, no escalado a humano) debe quedar registrada con suficiente detalle para permitir su revisión posterior.
12. **Derecho a impugnar decisión automatizada**: el lead debe tener un canal accesible para solicitar que una decisión automatizada sea revisada por una persona. Este canal debe estar descrito en la política de privacidad y ser operativo desde el día uno.
13. **No usar información de conversaciones para finalidades distintas**: las conversaciones con la IA no pueden usarse para entrenar modelos externos, ceder a terceros o utilizarse para fines distintos a los declarados en la política de privacidad, sin consentimiento explícito adicional.
14. **Conservación limitada de datos de perfilado**: los datos del motor de intención (score, segmento, historial de propuestas económicas) tienen un período de conservación máximo que debe estar definido antes del piloto y reflejado en la política de privacidad.
15. **Revisión periódica del motor**: el motor de intención y las reglas de pricing deben ser auditados periódicamente (al menos una vez al año) por una persona con capacidad de detectar sesgos, errores sistemáticos o desviaciones respecto a las reglas de gobernanza aprobadas.

---

## 6. Checkpoints legales en el cronograma

Los siguientes hitos del plan de implantación **no deben pasar a producción sin validación legal previa**:

| Hito del plan | Checkpoint legal requerido |
|---|---|
| **Fase 1 — Definición de reglas de pricing** (semanas 1-4) | Legal debe validar las variables del motor, los tramos de descuento, el precio de referencia y la denominación de las becas antes de que se configuren en el sistema. |
| **Fase 1 — Guionado de la IA conversacional** (semanas 1-4) | Legal debe revisar los scripts y las respuestas de la IA sobre precio, plazas, titulación y condiciones de beca. Aprobación escrita antes de despliegue. |
| **Fase 1 — Formulario de captura y consentimiento WhatsApp** (semanas 1-4) | Legal debe redactar o validar el texto de consentimiento para comunicaciones por WhatsApp y el aviso de tratamiento de datos para perfilado. |
| **Fase 2 — Piloto del motor de intención** (semanas 5-10) | DPIA (Evaluación de Impacto sobre Protección de Datos) debe estar completada y aprobada antes de iniciar el piloto con leads reales. |
| **Fase 2 — Dashboards con datos personales de leads** (semanas 5-10) | Legal debe verificar que el acceso a los dashboards está limitado a personas con necesidad operativa justificada y que los datos están correctamente anonimizados o pseudonimizados donde corresponda. |
| **Fase 3 — Escalado del sistema** (semanas 11-16) | Auditoría interna o externa del motor de pricing antes de escalar a toda la cartera de programas. |
| **Antes de cualquier fase — Política de privacidad** | La cláusula de perfilado automatizado y decisiones automatizadas debe estar actualizada y publicada antes del primer contacto con leads bajo el nuevo modelo. |

---

## 7. Documentación obligatoria

Los siguientes documentos deben existir, estar vigentes y ser accesibles antes de operar el nuevo modelo:

1. **Política de precios**: documento interno que recoge las reglas de pricing, los tramos de descuento permitidos, los suelos de margen, las variables del motor y los responsables de aprobación de cada nivel. Debe ser actualizado cada vez que se modifiquen las reglas.

2. **Política de becas**: documento público o accesible al lead que recoge los criterios de elegibilidad, el proceso de solicitud, la cuantía máxima, la vigencia y las condiciones de la beca. Debe dejar claro que se trata de un descuento comercial y no de una beca pública.

3. **Registro de decisiones automatizadas**: log del sistema que recoge, para cada lead, qué decisiones automatizadas significativas se han tomado (precio mostrado, elegibilidad a beca, nivel de escalado), bajo qué regla y en qué momento. Este registro debe ser conservado durante el período que Legal determine.

4. **DPIA — Evaluación de Impacto sobre Protección de Datos**: obligatoria bajo el art. 35 RGPD cuando el tratamiento implica perfilado sistemático a gran escala o decisiones automatizadas con efectos significativos. Debe completarse antes del piloto y revisarse ante cualquier cambio sustancial en el motor.

5. **Adenda a la política de privacidad**: debe incluir, de forma comprensible para el usuario, la información sobre perfilado automatizado, decisiones automatizadas, datos utilizados para personalizar el precio, derechos específicos (art. 22 RGPD) y cómo ejercerlos.

6. **Registro de consentimientos**: sistema técnico que permita acreditar, para cada lead, qué consentimientos otorgó, cuándo, en qué formulario y a través de qué canal. Incluye el consentimiento para WhatsApp.

7. **Guión validado de la IA**: versión aprobada por Legal de las respuestas de la IA sobre precio, plazas, titulación, becas y condiciones contractuales. Cualquier actualización del guión debe pasar por el mismo proceso de validación.

---

## 8. Mecanismo de reclamación

El nuevo modelo debe incluir, desde el día uno, un mecanismo de reclamación accesible y efectivo:

- **Canal de reclamación**: dirección de email o formulario web específico para reclamaciones relacionadas con el precio recibido, la beca denegada, el comportamiento de la IA o el tratamiento de datos personales. Debe estar claramente visible en las comunicaciones y en la web.
- **Derecho a revisión humana**: cualquier lead que haya recibido una decisión automatizada (precio personalizado, denegación de beca, no escalado a comercial) tiene derecho a solicitar que esa decisión sea revisada por una persona. La revisión debe producirse en un plazo máximo definido (se sugiere 5 días hábiles como referencia, a validar por Legal).
- **Plazo de respuesta**: el plazo de respuesta a reclamaciones debe estar definido, comunicado al reclamante y cumplido. Se sugiere un máximo de 30 días naturales para reclamaciones complejas, con acuse de recibo en 48 horas hábiles.
- **Registro de reclamaciones**: todas las reclamaciones, su resolución y el tiempo de respuesta deben quedar registrados. Este registro es necesario para demostrar conformidad ante autoridades de control y para detectar patrones sistémicos.
- **Escalado a autoridades**: el mecanismo debe incluir información sobre el derecho del consumidor a acudir a la AEPD (para cuestiones de privacidad), a la OMIC o a los servicios de consumo de la comunidad autónoma (para cuestiones de precios o prácticas comerciales).

---

## 9. Riesgo reputacional

Más allá del cumplimiento estricto, existen escenarios que, aunque legalmente admisibles, pueden generar daño reputacional severo:

- **Precio más alto a quien más interés muestra**: si el sistema eleva el precio base para leads con alta intención de compra (porque calcula que convertirán de todas formas), y esto se hace público, el impacto mediático puede ser significativo. Este comportamiento es especialmente sensible en educación, donde existe una expectativa social de acceso equitativo.
- **Denegación de beca por modelo opaco**: si un lead solicita una beca y la deniega un modelo de IA sin poder explicar el motivo en términos comprensibles, el caso puede convertirse en un ejemplo negativo en redes sociales o medios, especialmente si el lead percibe que la denegación es arbitraria o discriminatoria.
- **IA que da información incorrecta sobre titulación o empleabilidad**: un chatbot que afirma, aunque sea por error, que un programa otorga una titulación oficial que en realidad no otorga, o que promete salidas profesionales que no están contrastadas, puede dar lugar a reclamaciones masivas y cobertura mediática negativa.
- **Urgencia falsa detectada**: si un lead verifica que las "plazas limitadas" comunicadas por el chatbot no son reales (por ejemplo, porque sigue recibiendo la misma oferta semanas después), la credibilidad del canal y de la institución queda dañada.
- **Diferencia de precio entre leads del mismo perfil**: si dos personas que se conocen comparan el precio recibido y descubren una diferencia significativa sin explicación aparente, el efecto boca a oreja puede ser muy negativo, especialmente en programas con comunidades activas.

La línea entre personalización legítima y discriminación percibida es delgada. El modelo debe poder explicar, en términos accesibles, por qué dos leads reciben propuestas económicas diferentes.

---

## 10. Recomendaciones prácticas

1. **Involucrar a Legal desde la Fase 1, no desde la Fase 5**: el riesgo de involucrar a Legal tarde es que los sistemas y procesos ya estén diseñados con lógicas que son difíciles o costosas de modificar. Legal debe participar en la definición de las reglas del motor, no solo en su revisión posterior.

2. **DPIA obligatoria antes del piloto**: la Evaluación de Impacto sobre Protección de Datos no es un trámite; es un instrumento de gestión de riesgo. Debe completarse antes de tratar datos de leads reales con el motor de intención, e incluir el análisis de las decisiones automatizadas de pricing.

3. **Auditoría externa del motor antes de escalar**: antes de extender el sistema a toda la cartera de programas, es conveniente que una entidad externa (firma legal, consultora de privacidad o auditor técnico) revise el motor de intención para detectar sesgos, errores sistemáticos o incumplimientos del AI Act.

4. **Línea roja clara entre personalización y discriminación**: el equipo que diseña las variables del motor debe recibir formación sobre qué criterios son admisibles y cuáles no. Esta formación debe estar documentada y repetirse cada vez que se incorporen nuevas variables al modelo.

5. **Versionar y archivar las reglas del motor**: cada vez que se modifiquen las reglas de pricing o eligibilidad de becas, la versión anterior debe quedar archivada con fecha de vigencia. Esto es necesario para responder a reclamaciones de leads que recibieron una propuesta bajo reglas anteriores.

6. **Separar consentimiento WhatsApp del resto**: no incrustar el consentimiento para WhatsApp en un bloque de términos y condiciones. Debe ser una casilla separada, con texto claro, y el sistema debe rechazar envíos a leads que no hayan dado ese consentimiento específico.

7. **Definir un responsable interno de cumplimiento del AI Act**: la aplicación del AI Act requiere un responsable que conozca el sistema, sus riesgos y las obligaciones regulatorias. Este rol debe estar asignado antes del piloto.

8. **Revisar la clasificación del sistema en el AI Act con asesor especializado**: la frontera entre sistemas de alto riesgo y sistemas de riesgo limitado en educación no es completamente clara en la redacción actual del AI Act. Un asesor especializado en regulación de IA debe emitir un dictamen sobre la clasificación del motor de intención de Northius.

9. **Publicar la política de becas antes de usarla como argumento comercial**: si el chatbot menciona becas disponibles, la política de becas debe estar publicada y ser accesible. No puede haber comunicaciones comerciales sobre becas sin un documento público que las respalde.

10. **Establecer un comité de revisión trimestral**: pricing, becas, comportamiento de la IA y tratamiento de datos deben revisarse trimestralmente por un comité que incluya representantes de Legal, Comercial, Tecnología y Dirección. Los hallazgos de este comité deben documentarse.

---

*Fin del Anexo F — Documento para revisión por equipo Legal de Northius*

*Este documento debe ser tratado como borrador interno de uso restringido hasta su validación por el departamento Legal.*
