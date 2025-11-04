# Inceptum - Resilient
## Descripción
Diseñamos un sistema de visualización y alerta temprana que integra datos climáticos, sociales y geoespaciales, permitiendo a la Cruz Roja Colombiana analizar, monitorear y comunicar el riesgo climático en Soacha de forma clara y preventiva.
El proyecto transforma datos dispersos en una herramienta analítica e interactiva, fortaleciendo la resiliencia comunitaria y la capacidad de respuesta ante eventos climáticos que puedan afectar a la comunidad.
## Nivel de desarrollo
Prototipo funcional.
Actualmente, se ha implementado un dashboard interactivo en Power BI que centraliza más de 2.000 registros del proyecto RCU (AVCA y CRMC), mostrando indicadores por género, edad, etnia, tipo de beneficiario y ubicación geográfica.
La información se organizó en cuatro grupos de intervención principales:
- Acciones de sostenibilidad
- Cambio climático
- Cohesión social
- Gestión del Riesgo (GRD)
  Cada grupo permite analizar el impacto poblacional, las actividades ejecutadas y las zonas con mayor vulnerabilidad climática.
  Además, el prototipo incluye un módulo inicial de alerta temprana conectado con fuentes abiertas (IDEAM, OpenWeather) para detectar patrones de riesgo climático y emitir alertas preventivas.
## Video de presentación
https://youtu.be/uXcoqt5sWQ8

## Ventajas o fortalezas
- Integración de datos dispersos:
El sistema centraliza información que antes estaba fragmentada en múltiples fuentes (bases de datos de campo, registros de actividades, reportes IDEAM, entre otros). Esta integración permite una lectura más completa de la realidad territorial, combinando variables climáticas, sociales y de gestión del riesgo en un solo entorno visual. Gracias a ello, los equipos pueden tomar decisiones basadas en evidencia y detectar correlaciones entre condiciones climáticas y niveles de vulnerabilidad comunitaria.
- Análisis predictivo y generación de alertas
El prototipo incorpora un módulo de análisis preventivo basado en datos históricos del clima y de afectaciones reportadas en los territorios. Este sistema facilita la detección temprana de patrones de riesgo (por lluvias intensas, inundaciones o deslizamientos) y la emisión de alertas para orientar la preparación comunitaria.
Además, el sistema contempla canales alternativos de comunicación, de modo que las personas que no cuentan con acceso a internet también puedan recibir las alertas a través de la radio comunitaria, garantizando la inclusión y el alcance efectivo del mensaje preventivo.
- Usabilidad comunitaria y enfoque participativo:
La herramienta fue diseñada con una interfaz visual, intuitiva y de fácil comprensión, lo que facilita su uso por parte de voluntarios, líderes comunitarios (JAC), docentes y funcionarios locales sin necesidad de conocimientos técnicos avanzados. Esto fortalece la apropiación social del conocimiento y promueve una cultura de prevención y resiliencia climática desde las comunidades.
- Escalabilidad y replicabilidad:
El sistema está estructurado con una arquitectura abierta que permite su adaptación a otros municipios o departamentos del país. Su lógica de integración y visualización puede replicarse en proyectos similares de sostenibilidad, cambio climático o gestión del riesgo, contribuyendo a la creación de una red nacional de tableros de resiliencia comunitaria.
- Apoyo a la planificación institucional:
La información consolidada permite a la Cruz Roja Colombiana y a las entidades territoriales planificar intervenciones basadas en evidencia, optimizar recursos y priorizar zonas con mayor vulnerabilidad climática. También aporta insumos valiosos para informes de sostenibilidad y seguimiento de proyectos ante organismos internacionales.
- Articulación interinstitucional:
El uso de fuentes abiertas (IDEAM y registros locales) y la compatibilidad con plataformas de análisis (Power BI) promueven la colaboración con universidades, entes gubernamentales y organizaciones humanitarias, fortaleciendo las alianzas técnicas para la reliencia climatica.
## Desventajas o debilidades
- Necesidad de capacitación inicial:
Aunque la herramienta es intuitiva, es recomendable realizar talleres de formación para los equipos locales y líderes comunitarios, de manera que puedan interpretar correctamente los indicadores y tomar decisiones informadas basadas en los datos.
- Mantenimiento y actualización del sistema:
Como todo sistema digital, requiere de un plan de mantenimiento técnico periódico para actualizar la información, mejorar la interfaz y asegurar la continuidad del flujo de datos. La falta de recursos para soporte técnico podría limitar su sostenibilidad a largo plazo.
## Detalles técnicos
- Lenguajes o tecnologías:
  - Frontend:
  - React 19
  - JavaScript (ES6+)
- Backend:
  - Node.js
  - Express.js
- Base de datos:
  - Firebase Realtime Database
  - Firebase Firestore
  - Firebase Authentication
- Herramientas:
  - Control de versiones: Git
  - Hosting/Cloud: Firebase (Authentication, Database, Hosting)
  - Visualización de datos: Power BI (dashboard embebido)
- Alcance del prototipo:
    - Sistema de autenticación completo
    - Registro de usuarios con datos demográficos (edad, género, discapacidad, embarazo)
- Roles (usuario normal y administrador)
    - Sistema de alertas en tiempo real
    - Envío de alertas con geolocalización
    - Visualización de total global de alertas
    - Distribución de alertas por zonas
    - Sistema de notificaciones personalizadas
    - Recomendaciones adaptadas según perfil del usuario (edad, género, discapacidad, embarazo)
    - Notificaciones browser nativas
    - Modales visuales con estilos inline (compatibilidad Android/iOS)
    - Panel administrativo
    - Mapa interactivo con Leaflet mostrando zonas de alerta
    - Envío de alertas globales desde admin
    - Tracking de ayudas recibidas por zona
    - Sistema de seguimiento de ayuda
    - Página informativa
    - Análisis de 9 tipos de vulnerabilidades (Natural, Física, Económica, Social, Política, Ideológica, Cultural, Educativa, Institucional)
    - Dashboard de Power BI
    - Tiempo real (sincronización con Firebase)
    - Geolocalización HTML5 API
## Presupuesto estimado:
- Desarrolladores Full Stack - 8 Millones de Pesos Colombianos
- Infraestructura Tecnologia - 1,5 Millones de Pesos Colombianos
- Capacitaciones - 3 Millones de Pesos Colombianos
- Total - 12,5 Millones de Pesos Colombianos

## Madurez: Prototipo

## Repositorio del proyecto
https://github.com/sabanahack-Inceptum/Sabana-Hack
