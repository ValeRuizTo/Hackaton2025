# Ficha Técnica Renace Soacha
## Descripción de la solución
Renace Soacha conecta a la comunidad y a las instituciones de Soacha en un sistema colaborativo de prevención de inundaciones. Mediante alertas tempranas, visualización de datos y asistencia digital inclusiva, fomenta la participación ciudadana y fortalece la capacidad local para anticipar y reducir los impactos del riesgo hídrico.
## Nivel de madurez
### Prototipo
* Se ha desarrollado una plataforma web funcional accesible desde navegadores, con diseño responsivo y módulos interconectados.

* El dashboard interactivo ya permite visualizar capas georreferenciadas con información de riesgo y cantidad de personas a las que se le brindó el apoyo delimitandolo por comunidad.

* El Sistema de Alertas Tempranas (SAT) está operativo, con notificaciones push en tiempo real y categorización de niveles de severidad (alta, media, baja).

* El chatbot inclusivo, basado en inteligencia artificial, responde consultas y genera recomendaciones de prevención; además, integra texto a voz (TTS) para garantizar accesibilidad visual.

* Se han cargado y probado datos reales del IDEAM y de los diagnósticos CRMC/AVCA en el entorno del mapa interactivo.

* El prototipo está en proceso de validación comunitaria y técnica con la Cruz Roja Colombiana, previo a la fase piloto en campo.

## Link del pitch en Youtube

https://youtu.be/aB6fgcopbTM?si=7p3jN25oK5bbsYgV

## Ventajas o fortalezas
1. Participación comunitaria: Involucra directamente a los habitantes en el reporte de
alertas y observaciones locales.
2. Inclusión digital: Integra funciones de accesibilidad como texto a voz, garantizando la
participación de personas con discapacidad visual.
3. Interoperabilidad institucional: Facilita la comunicación entre la Cruz Roja, la Alcaldía
de Soacha y los organismos de gestión del riesgo.
4. Fortalecimiento de la resiliencia local: Promueve la educación climática y la acción
temprana ante riesgos de inundación.
## Desventajas o debilidades
1. Dependencia tecnológica: Requiere conexión estable a internet y dispositivos digitales.
2. Mantenimiento continuo: Necesita soporte técnico y actualización constante.
3. Riesgo de saturación de alertas: Si no se gestionan adecuadamente los niveles de
reporte, puede generarse sobrecarga informativa en las entidades de respuesta
## Detalles 
### Lenguajes o Tecnologías

El desarrollo de Renace Soacha – Plataforma Inteligente de Resiliencia Climática integra una arquitectura tecnológica moderna basada en software de código abierto, interoperable y escalable.
Los principales lenguajes y frameworks empleados son:

React 19 (librería base para componentes dinámicos)

Next.js 16 (renderizado híbrido SSR/CSR y optimización de rendimiento)

Python 3.11 (análisis de datos climáticos, modelado de riesgo y scripts geoespaciales)

### Mapas y Georreferenciación:

Leaflet.js + OpenStreetMap (visualización cartográfica interactiva)

GeoPandas y Shapely (procesamiento de geometrías y análisis espacial en Python)

Inteligencia Artificial y Analítica Predictiva:

Integración con Ollama Cloud (modelo gpt-oss:120b-cloud)

Modelos de predicción de riesgo basados en series temporales (precipitación, temperatura, humedad)

IA generativa para análisis automático de vulnerabilidades y generación de reportes interpretativos

### Alertas y Comunicación:

Web Push API con VAPID Encryption (notificaciones en tiempo real en navegadores y móviles)

Service Workers (soporte offline y persistencia de alertas locales)

#### Herramientas

Para el diseño, control de versiones, documentación y colaboración institucional se utilizaron las siguientes herramientas:

Diseño y prototipado: Figma, Canva

Gestión del código y versiones: Git, GitHub

Gestión de API y datos abiertos: IDEAM (datos hidrometeorológicos), DANE (demografía), datos.gov.co (fuentes públicas)

Documentación técnica: Markdown y Google Docs

Dashboard Interactivo: Looker Studio, con el fin de poder conectarla a la pagina web.

### Infraestructura y despliegue:

Vercel (hosting web para frontend y dashboard)

Colaboración institucional: Google Workspace (Drive, Sheets, Meet) y repositorio compartido con Cruz Roja Colombiana y Universidad de La Sabana.

#### Alcance del Prototipo

El prototipo de Renace Soacha se encuentra en una fase funcional avanzada, cumpliendo los siguientes alcances técnicos:

### Mapa interactivo georreferenciado:

Visualización en tiempo real de zonas de riesgo, puntos críticos, infraestructura pública y rutas seguras.

Capas configurables con niveles de amenaza (alta, media, baja).

### Sistema de Alertas Tempranas (SAT):

Emisión de alertas comunitarias categorizadas por severidad (roja, amarilla, verde).

Envío automático de notificaciones push a instituciones vinculadas (Cruz Roja, Alcaldía de Soacha).

Contador de reportes ciudadanos con umbrales configurables.

### Dashboard de Resiliencia Climática:

Visualización de indicadores e impacto comunitario en tiempo real.

Análisis comparativo de vulnerabilidades (por género, edad y localización).

### Chatbot inclusivo basado en IA:

Asistente virtual que ofrece orientación preventiva y soporte informativo.

Integración con Text-to-Speech (TTS) para accesibilidad visual.

### Módulo de análisis de riesgo climático:

Procesamiento de datos históricos del IDEAM y registros comunitarios (CRMC/AVCA).

Identificación de patrones de riesgo por temporalidad y territorio.

### Interfaz web unificada:

Accesible desde cualquier dispositivo.

Diseño responsive, intuitivo y adaptado a usuarios no técnicos.

## Presentación
https://www.canva.com/design/DAG3jd7WwUI/cNTbsLxRQbNLi6oXVckXcw/edit?utm_content=DAG3jd7WwUI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton


## Repositorío del proyecto

### Aplicación web desplegada

https://algorythm-iota.vercel.app/

### GitHub

https://github.com/Kapum357/algorythm

### Documentación

https://drive.google.com/file/d/1GoWL52ysmYH2VfgMsNRyVzrL8zXUJAUt/view?usp=sharing
