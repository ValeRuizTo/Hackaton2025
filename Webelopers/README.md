# Webelopers 🚀

Proyecto del equipo **Webelopers** para Sabana Hack 2025 💙

## Descripción
Describe aquí la idea, tecnologías y objetivos del proyecto.


# Ficha Técnica de Proyecto

🔹 **Nombre del proyecto**  
**Reto Inundaciones en Tocancipá – Alerta Temprana Comunitaria**

---

🔹 **Descripción breve**  
Sistema comunitario de alerta temprana para la vereda La Esmeralda (Tocancipá). En cada estación, un ESP32 con LoRa realiza la toma de mediciones de nivel (ultrasónico), turbidez, temperatura/humedad y precipitación, enviándolas por LoRaWAN a un servidor local (Raspberry Pi) para procesamiento en tiempo real. El sistema predice niveles a 5 días y emite alertas multicanal (SMS/llamada/WhatsApp). Funciona **offline-first** (sin internet) y prioriza operación comunitaria, mantenimiento sencillo y escalabilidad a otras veredas.

---

🔹 **Nivel de desarrollo**  
**Prototipo funcional / pre-integración**  
- **Simulaciones Arduino** listas.  
- **Dashboard en Dash** con predicciones a 5 días.  
- **Dashboard en Next.js** con histórico, UI mejorada y **activación de alertas con Twilio** (SMS, voz, WhatsApp).  
- Ingesta y procesamiento en Raspberry Pi con modelos iniciales (Python).  
- Arquitectura LoRaWAN definida y **Lista de Materiales** de hardware consolidado.

---

🔹 **Video de presentación**  
🔗 [youtube](https://youtube.com/shorts/OQHp-xRfmDc?si=bR-FdJ1WXH0Zk_Hm)

---

🔹 **Ventajas o fortalezas**  
- **Operación offline**: transmisión por LoRaWAN y servidor local; ideal donde no hay conectividad. 
- **Predicción a 5 días** e indicadores en tiempo real para decisiones no apresuradas e inesperadas.
- **Alertas multicanal**: SMS, voz, WhatsApp, alerta local (sirena/luz) y aviso a autoridades; máxima cobertura comunitaria y redundancia operativa.
- **Bajo costo y modular**: componentes estándar, mantenimiento con repuestos locales y escalamiento por etapas a nuevas zonas.

---

🔹 **Desventajas o debilidades**  
- Dependencia de energía por estación (Incluso con el panel solar hay posibilidad de daño natural como animales).
- Ancho de banda limitado de LoRaWAN (No apto para datos pesados como imágenes o video).
- Requiere capacitación para caso de reparaciones, en otro caso es completamente autónomo.


---

🔹 **Detalles técnicos**

**Lenguajes / Tecnologías**  
- **Firmware estaciones**: Arduino (ESP32 LoRa).  
- **Backend/Modelado**: Python (Pandas, NumPy, scikit-learn).  
- **Dashboards**: Dash (offline-first) y **Next.js** (UI, histórico, activación de alertas).  
- **Comunicaciones**: LoRaWAN; Twilio (SMS/voz/WhatsApp); WhatsApp Business API.  
- **Base de datos**: SQLite en Raspberry Pi.  

**Herramientas**  
- GitHub (código y versionamiento).    
- AmbientWeather (estación meteorológica local local).  
- Twilio (gateway de mensajería/voz).  

**Alcance del prototipo (actual)**  
- 5 estaciones de campo con: **ESP32 LoRa**, sensor ultrasónico (nivel), turbidez, H/T, precipitación, **buzzer luminoso**, caja IP65, **panel solar 10 W**.  
- **Gateway/Servidor local**: Raspberry Pi 5 + receptor LoRaWAN + monitor 14" + estación meteo AmbientWeather.  
- Pipeline de ingestión, almacenamiento local y generación de **alertas automáticas** al superar umbrales.  
- **Predicción a 5 días** en el dashboard de Dash; **Next.js** con histórico y gestión de alertas (Twilio).  
- Diseño **offline-first** (no hay señal a internet, sí energía). **Sin ingeniería civil**.

**Arquitectura física (resumen)**  
- Estación en tubo anclado fuera de la quebrada; **ultrasónico** apuntando a lámina de agua.  
- **Turbidez** en jaula protectora; cableado a caja estanca.  
- Pluviómetro expuesto; H/T ventilado.  
- Caja IP65 con **ESP32 LoRa**, batería, controlador de carga, **buzzer luminoso** y **panel solar 10 W**.  
- Antena LoRa con línea de vista al **gateway**.  
- **Servidor local**: Raspberry Pi 5 + LoRaWAN + AmbientWeather.

**Presupuesto estimado**  
- **Por estación (x5)**: **USD 181.50** c/u  
  - ESP32 LoRa 25.00, ultrasónico (IP66) 9.00, H/T 1.30, turbidez 11.00, precipitación 7.00, cableado 5.00, carcasa IP65 15.00, buzzer luminoso/sonoro 5.00, panel solar 10W 30.00, giroscopio MPU6050 3.20, base de montaje 70.00  
- **Total 5 estaciones:** **USD 907.50**

- **Servidor:** **USD 555.00**  
  - Raspberry Pi 5 Starter Kit 160.00, Receptor LoRaWAN (SX1302) 112.00, Monitor 14" FHD 130.00, HAT/Adaptador PCIe 13.00, Cable coaxial 70.00, Base/soporte 70.00

- **Estación meteo (AmbientWeather):** **USD 200.00**

-**Mano de obra y otros gastos:** **USD 3.160** (voluntariado y donaciones de equipo)

- **Subtotal (servidor + 5 estaciones + AmbientWeather):** **USD 1,662.50**  
> Nota: TRM de referencia utilizada en esta ficha: **3,860 COP/USD** → Subtotal ≈ **6,417,250 COP**
>- **Total estimado con mano de obra y otros gastos:** **USD 4,822.50** ≈ **18,653,850 COP**
---

🔹 **Repositorio del proyecto**  
📁 [Repositorio del Proyecto](https://github.com/joseph8884/Private_REPO_SabanaHack2025.git)

---

## Condiciones del reto
- **Facilidad de uso**: dashboards simples, iconografía y capacitación breve; alertas automáticas.  
- **Mantenible**: repuestos locales, documentación básica y roles de gestores comunitarios.  
- **Integración institucional**: contactos y flujos predefinidos con **Cruz Roja, Alcaldía y Bomberos**; reporte de **ubicación de taponamientos/sedimentos** para activar maquinaria.  
- **Escalable/replicable**: estaciones modulares; guía de despliegue para nuevas veredas.  
- **Culturalmente adecuada**: incorpora conocimiento local y liderazgo comunitario.  
- **Impacto medible**: registro de incidentes, simulacros, tiempos de respuesta y daños evitados.  
- **Participación comunitaria**: inclusión de mujeres, jóvenes y líderes locales en operación y decisiones.  
- **Limitaciones técnicas y presupuesto**: sin ingeniería civil; arquitectura viable dentro del presupuesto.


---

## Presentación de canva

canva link solo para ver:

[!link de canva](https://www.canva.com/design/DAG3kG_oz-E/pWd1OuCTZbZsfcCXvQ5zcA/edit?utm_content=DAG3kG_oz-E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


## Drive

[!link de drive](https://drive.google.com/drive/folders/1kZUFLf2Nrmv9_TAZi7WAutGpOW496Ycu?usp=drive_link)