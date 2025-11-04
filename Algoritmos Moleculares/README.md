# Algoritmos Moleculares
Proyecto del equipo **Algoritmos Moleculares** para Sabana Hack 2025

# Integrantes del equipo
Camilo Arciniegas  
Mariana Ardila  
Nicolás Clavijo  
Ángel Hernández  
Mauricio Suárez  

# Mentor
Luz Barrera

## Nombre de la solución
SCAPI

## Descripción del proyecto
El objetivo de la solución es promover la resiliencia comunitaria mediante la reducción de la vulnerabilidad frente a las inundaciones, a través de la implementación de herramientas digitales y acciones educativas orientadas a la prevención, respuesta y recuperación ante emergencias, de la mano con la cruz roja y el gobierno.

## Link del pitch en Youtube
[Youtube](https://www.youtube.com/watch?v=Y9dpdcZ9m6s)

## Link de la presentación
[Presentación](https://www.canva.com/design/DAG3iJQfiiA/AOgCWqTK3DtJBf5T9FZ8Zw/edit?utm_content=DAG3iJQfiiA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Documentación

### Fuentes de información
Se empleó un mapa interactivo que da a conocer el comportamiento de las lluvias y la predicción de inundaciones en los sectores de riesgo, se ha utilizado como fuente de información una base de datos que contiene la misma problemática a la que queremos solucionar, pero en otro contexto geográfico. No se hizo uso de datos nacionales ya que estos no proporcionan información significativa, los datos no están estandarizados, no tienen un mínimo de calidad, adquirirlos puede tomar varios días (por los permisos para tener cierta información) y porque en algunas páginas se cobra por descargar las bases de datos, que además, no sepuede estar 100% seguros de que van a sernos muy útiles. Teniendo en cuenta lo anterior, los modelos y las predicciones no podrían ser óptimas con datos nacionales.

### Arquitectura técnica
Para dar cumplimiento a los objetivos planteados se desarrolló una plataforma web que se divide en:

- **Front-end:** Implementado en React, destacándose por su diseño visual interactivo y su facilidad de uso para los habitantes de la comunidad.

- **Back-end:** Desarrollado con Next.js y TypeScript, teniendo un rendimiento óptimo, modularidad y seguridad al manejar información.

- **Modelos de Machine Learning:** Desarrollados en Python para la predicción de inundaciones. El entrenamiento se hizo con un dataset en formato .csv.

- **Base de datos:** Se usó la base de datos NoSQL, MongoDB, para tener más velocidad al momento de llamar y mostrar los datos.

- **Sistema de alertas:** Integración con la infraestructura comercial Genasys (por red móvil), compatible con el formato CAP requerido para la emisión oficial de señales de alerta. Esta plataforma utiliza el protocolo de comunicación Cell Broadcast, lo que posibilita la transmisión de notificaciones sin necesidad de conexión a internet, garantizando así que en una situación de emergencia todos puedan estar enterados.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión recomendada 18 o superior)  
- npm  
- MongoDB (local o remoto)  

---

### Configuración

1. Clonar los repositorios:  
[Link al repositorio de la pagina web](https://github.com/maosuarez/sabana-hack-webpage.git)  
[Link al repositorio del modelo machine learning y chatbot](https://github.com/maosuarez/sabana-hack-chatbot.git)

2. Instalar las dependencias del proyecto:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias. Por ejemplo:

```
MONGODB_URI=<tu_uri_de_mongodb>
NODE_ENV="development"
```

---

### Inicialización de la base de datos

El proyecto incluye un script de seed para poblar la base de datos con datos de ejemplo. Ejecuta el siguiente comando:

```bash
npx ts-node ./src/scripts/seed.ts
```

Esto insertará los datos iniciales en tu base de datos MongoDB.

---

### Ejecución del proyecto

Para iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```

El proyecto se ejecutará normalmente en `http://localhost:3000` a menos que se indique otra configuración en las variables de entorno.

---

### Scripts disponibles

* `npm run dev` - Inicia el proyecto en modo desarrollo.
* `npm run build` - Construye el proyecto para producción.
* `npm start` - Ejecuta el proyecto en producción después de construirlo.

---

### Archivo de Genasy  
[Genasys_v1.docx](https://github.com/user-attachments/files/23291570/Genasys_v1.docx)

### Notas adicionales

* Asegúrate de configurar correctamente las variables de entorno antes de ejecutar cualquier comando que interactúe con la base de datos.
* El proyecto está desarrollado con Next.js, por lo que cualquier cambio en la estructura de páginas o API requiere reiniciar el servidor de desarrollo para reflejarse correctamente.

---

## Ventajas

### Fortalecimiento de la resiliencia comunitaria
La solución fortalece la resiliencia comunitaria a través del trabajo colaborativo y la participación social al hacer sentir escuchada a la comunidad, permitiendo que las personas aprendan a prevenir, reaccionar y recuperarse frente a una inundación. De esta forma, los habitantes ganan confianza en la organización y cooperan para convertirse en actores activos del proceso, capacitarse y actuar con el apoyo de la plataforma.

### Ventajas tecnológicas
Ofrece ventajas tecnológicas significativas, pues incorpora un sistema de alerta que no depende de la conexión a internet, ampliando así el alcance en la población y reduciendo las pérdidas ocasionadas por la falta de información durante la emergencia. Además, al utilizar un lenguaje claro, la herramienta garantiza que el mensaje de alerta pueda ser comprendido por cualquier persona, sin importar su nivel educativo o edad.

### Ventajas operativas
La plataforma cuenta con una base de datos que permite identificar con precisión a los factores que pueden generar un incidente y alertar a las familias en riesgo y coordinar de manera más eficiente la ayuda humanitaria con entidades como la Cruz Roja. Este componente también abre la posibilidad de replicar el modelo en otras zonas vulnerables, optimizando la gestión y respuesta ante futuras emergencias.

## Desventajas

El principal reto radica en fortalecer la confianza de la comunidad para que se motiven cada vez más a participar en distintas jornadas de capacitación. Asimismo, el éxito del sistema depende de una coordinación interinstitucional efectiva entre la comunidad, las autoridades locales y la Cruz Roja. Finalmente, existe cierta dependencia de la infraestructura tecnológica, ya que, aunque la alerta por Cell Broadcast no requiere conexión a internet, otras secciones como el mapa interactivo o la base de datos sí dependen de una conexión estable para su funcionamiento.

## Modelo de Negocio  
[ModeloDeNegocio](https://www.canva.com/design/DAG3f15GycI/EXXsjtxECLUqzcFTf-nmGA/view?utm_content=DAG3f15GycI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0d6e7b07dc)
