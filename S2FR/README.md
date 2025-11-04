# Ficha Técnica del Proyecto — Inundaciones Soacha

  

## Nombre del proyecto

  

Resil-IA: Evitando perdidas de vidas, hogares y de información.
  

## Descripción breve

  

Resil-IA es un prototipo web que integra datos georreferenciados y visualizaciones interactivas para identificar zonas de vulnerabilidad y generar alertas preventivas en Soacha. Permite visualizar mapas con capas geoespaciales, asi como, apoyar intervenciones de gestión del riesgo, cohesión social y cambio climático. Incluye además un asistente digital llamado "Soachin" para soporte y divulgación.


## Quien es Soachin ? — Agente RAG y presencia del producto

Soachin es el asistente digital del proyecto: un agente RAG orquestado desde n8n que responde preguntas, guía a usuarios y provee contenido educativo (videos/tutoriales). Soachin aparece en la UI (avatar/tutoriales) y actúa como la "cara" del producto, apoyando la adopción y las alertas preventivas. 

  

## Nivel de desarrollo

  

Estado: Prototipo funcional (desarrollo web con backend local).

  

Implementado hasta el momento:

- Interfaz web basada en React + Vite con componentes: mapa interactivo, avatar/flood visual, chatbot, foro y secciones informativas.

- Servicios backend mínimos con Express y endpoints para posts/servicios ).

- Capacidad de cargar y mostrar GeoJSON de barrios mediante Leaflet/React-Leaflet.

- Implementación inicial del agente RAG (Soachin) orquestado desde n8n.

  

## Video de presentación

  

🔗 Enlace al video/demo: https://youtu.be/oxbx_SzfLfU

  ## Enlace a las diapositivas

  

🔗 Enlace a slides: https://www.canva.com/design/DAG3fw07N-g/GfxwC7UIDl9edQANbPYS0Q/edit?utm_content=DAG3fw07N-g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton 

## Ventajas o fortalezas

  

1.  Visibilidad temprana del riesgo. Permite identificar áreas vulnerables desde la fase conceptual, facilitando priorización de intervenciones y movilización de recursos.

2. Integración de datos geoespaciales como eje central. Combina mapas y métricas territoriales para decisiones más contextualizadas y accionables (p. ej. selección de zonas para alertas o campañas).

3. Mejora de la comunicación pública y sensibilización. Visualizaciones y el asistente RAG Soachin pueden aumentar la comprensión comunitaria y la aceptación de medidas preventivas.
4. Oportunidad para colaboración institucional y académica. Datos y visualizaciones sirven como puente para obtener información proveniente de entidades públicas, universidades y ONGs para validación y financiación.

  

## Desventajas o debilidades

  

1. Dependencia de datos oficiales y calidad de fuentes. La idea asume acceso a datos completos, fiables y frecuentes; si faltan o son de baja calidad la utilidad cae.  
2. Riesgo de falsas alarmas o alertas perdidas. Algoritmos/umbrales mal calibrados pueden generar alertas inútiles o no detectar eventos reales.
3. Fiabilidad del agente RAG (Soachin) — sesgos. El asistente, aunque sea RAG, puede dar respuestas incorrectas o sin contexto, dañando la confianza.

## Detalles técnicos

  

### Lenguajes / frameworks:

- JavaScript, JSX (React 19)

- Node.js (Express)

- Vite (bundler / dev server)

  

### Librerías:

- React, React-DOM

- Vite

- Express, cors

- Leaflet, react-leaflet (visualización geoespacial)

- @mapbox/togeojson / togeojson (transformación KML/GPX a GeoJSON)

- lucide-react (iconografía)

  

### Herramientas y plataformas:

- Git/GitHub

- n8n (orquestador de workflows)

  

## Alcance del prototipo:

- Visualización interactiva de capas geoespaciales (Barrios), identificación visual de zonas de riesgo y estimaciones simples de población afectada.

- Componentes UX: Chatbot (interfaz), Foro (gestión de posts), FloodAvatar (representación gráfica), mapas y paneles informativos.

- Soachin (Agente RAG): interfaz/voz del asistente para tutoriales y soporte dentro de la app (requiere workflows en n8n y fuente de conocimiento indexada).

  

## Costos estimados (orientativo):
| Categoría | Costo COP | Descripción |
|-----------|-----------|-------------|
|  Desarrollo Web | $12,520,000 | Frontend (React) + Backend (Node/Express) + BD PostgreSQL + Testing |
|  Datos y Contenido | $2,600,000 | Curación geodata + 15 guías + 10 infografías + 3 videos |
|  Implementación | $3,100,000 | Despliegue + capacitación + documentación |
| TOTAL INICIAL | *$18,220,000* | Inversión única de arranque |
  

## Repositorio del proyecto

  

Código fuente y assets: https://github.com/rafaelsava/S2FR_Resil-IA.git

  




## Contacto / Autores

 Equipo: Rafael Salcedo, Fermín Escalona, Santiago Gutiérrez, Luis Yanquen, Santiago Urrego.
