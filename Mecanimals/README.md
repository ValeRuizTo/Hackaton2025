# Ficha Técnica – Sistema de Monitoreo y Alerta Hídrica (SIMAH)

 

## Descripción breve 

El *Sistema de Monitoreo y Alerta Hídrica (SIMAH)* es una solución tecnológica diseñada para anticipar, clasificar y comunicar riesgos de inundación en la comunidad de la vereda La Esmeralda. Combina *captura de datos en tiempo real, **modelos de predicción de lluvia, **clasificación del nivel de riesgo* y *difusión multicanal y redundante* de alertas a entidades de respuesta (Defensa Civil, Cruz Roja y Bomberos) y a la comunidad. Los resultados se exponen en un *dashboard web* que notifica en tiempo real a las entidades. Si la alerta no es confirmada en el tiempo establecido y el nivel de riesgo es crítico, el sistema puede *disparar automáticamente* la alerta comunitaria.


## Nivel de desarrollo 

El SIMAH se encuentra en fase piloto. Actualmente cuenta con un frontend y backend funcionales, integrados para la visualización y gestión de datos en tiempo real. Se han realizado pruebas simuladas de recepción de datos y generación de alertas, verificando la lógica del sistema y el flujo de comunicación entre los módulos.


## Link al video 

[Video de presentación](https://youtu.be/Pt4mMb7VQ7I)

## Presentación

[Diapositivas Canva](https://www.canva.com/design/DAG3fki9axU/I7lvVn4SPXTUuTzwS4mOpw/edit?utm_content=DAG3fki9axU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


## Ventajas o fortalezas de nuestra propuesta 

1. *Integración completa y modular*: el sistema combina captura de datos local, análisis meteorológico, modelo predictivo y alerta multicanal en una plataforma escalable y adaptable a otras zonas.

2. *Alta confiabilidad y autonomía*: cuenta con respaldo energético mediante paneles solares y comunicaciones redundantes (LoRa, LTE, SMS, WhatsApp), garantizando operación continua incluso en áreas con poca conectividad.

3. *Innovación tecnológica aplicada*: utiliza inteligencia artificial ajustada al entorno local y un modelo explicable que permite a las autoridades comprender y ajustar los criterios de alerta.
   
4. *Impacto social directo*: fortalece la gestión del riesgo en comunidades rurales al integrar tecnología con capacitación y participación comunitaria para una respuesta más rápida y efectiva ante emergencias.


## Desventajas o debilidades de nuestra propuesta 

1. *Dependencia parcial de conectividad*: aunque el sistema puede operar localmente mediante LoRa, la integración completa con datos meteorológicos y alertas institucionales requiere conexión a internet estable.

2. *Mantenimiento técnico periódico*: los sensores, cámaras, baterías y paneles solares necesitan limpieza y revisión regular para asegurar un funcionamiento confiable en entornos rurales.

3. *Necesidad de capacitación comunitaria continua*: la efectividad de las alertas depende de mantener actualizados los contactos y de que los líderes comunitarios conozcan los protocolos de respuesta.


## Tecnologías utilizadas 

*Hardware* 

- Sensor de ultrasonido para nivel de agua. 
- Pluviómetro *Hydreon RG-15*. 
- Cámara IP / industrial. 
- *Router LTE Industrial Teltonika RUT200*. 
- SIM *Nettz* multioperador. 
- Módulos *LoRa* para activación remota. 
- Postes con sirena y baliza. 
- Sistema fotovoltaico (panel + control + baterías).


*Software y servicios* 

- Modelo de *nowcasting* con *ajuste fino local*. 
- *Árbol de decisión* para clasificación de riesgo en 4 niveles. 
- Consumo de API meteorológica (*Open-Meteo* u otra equivalente). 
- Backend para ingestión y gestión de datos. 
- Dashboard web para monitoreo y control. 
- Integración con servicios de mensajería (SMS / WhatsApp).
- Motor de base de datos SQLite para desarrollo y Postgres para producción.
 

*Comunicaciones* 

- LTE/4G con reconexión automática. 
- LoRa punto a multipunto para disparo de alarmas. 
- Canales de mensajería para comunidad y líderes. 
- Lógica de “alerta por no confirmación”.  


## Alcance del prototipo 

El prototipo actual permite: 
 
- Simular el monitoreo en tiempo real de un punto crítico de la cuenca.
- Integrar un modelo de predicción de lluvia ajustado a la zona de estudio.
- Clasificar el nivel de riesgo en cuatro categorías con protocolos definidos.
- Enviar notificaciones de alerta a las entidades mediante un panel web.
- Diseñar la arquitectura de comunicación multicanal (LoRa → postes, SMS, WhatsApp) para su futura integración.
- Mostrar la información en un dashboard web para autoridades y comunidad.
- Operar de forma autónoma con energía solar, validado en pruebas de laboratorio.
 
La principal limitación del prototipo es la *dependencia de conectividad* para explotar todo el potencial (meteorología en vivo + notificación institucional). No obstante, se mantiene una *alerta mínima local* incluso en ausencia de internet. 


## Tabla de Costos

| *Categoría* | *Item* | *Precio unitario (COP)* | *Link* | *Notas* | *Cantidad* | *Subtotal (COP)* |
|---------------|-----------|----------------------------|-----------|-------------|----------------|--------------------|
| *Poste Principal* | Raspberry Pi 5 (8GB) | $500,000.00 | [Amazon](https://www.amazon.com/-/es/Raspberry-Pi-8GB-enfriador-alimentaci%C3%B3n/dp/B0D2WYFS23/ref=sr_1_4) | Cerebro del poste central | 1 | $500,000.00 |
| *Poste Principal* | Router LTE Industrial Teltonika RUT200 | $509,000.00 | [Macrotics](https://www.macrotics.com/router-4g-lte-industrial-teltonika-rut200/p) | WAN LTE, VPN, firewall | 1 | $509,000.00 |
| *Poste Principal* | Antena LTE exterior + cable | $113,000.00 | [MercadoLibre](https://www.mercadolibre.com.co/antena-4g-lte-impermeable-montaje-pared-sma-3-metros/p/MCO2040968378) | Mejorar RSRP/RSRQ | 1 | $113,000.00 |
| *Poste Principal* | Gateway LoRa MikroTik KNOT LR9 | $1,085,000.00 | [Macrotics](https://www.macrotics.com/gateway-con-tecnologia-lora-de-mikrotik-knot-lr9-con-2-puertos-fast-ethernet-wifi4-mimo-2x2-ranura-nano-sim-ranura-minipcie-puerto-rs485-ranura-usb/p) | Transmisión de alertas LoRa | 1 | $1,085,000.00 |
| *Poste Principal* | Antena LoRa 915 MHz 3 dBi + cable | $35,000.00 | [Amazon](https://www.amazon.com/Meshnology-3dBi-Conector-extensión-paquete/dp/B0FJFKW552/) | Exterior, SMA/N | 3 | $105,000.00 |
| *Poste Principal* | Sensor ultrasónico JSN-SR04T (nivel agua) | $67,000.00 | [Amazon](https://www.amazon.com/dp/B09JZCQ5QJ) | 3 unidades | 3 | $201,000.00 |
| *Poste Principal* | Hydreon RG-15 – sensor de lluvia óptico | $98,000.00 | [eBay](https://www.ebay.com/itm/376425639621) | 1 unidad | 1 | $98,000.00 |
| *Poste Principal* | Gabinete IP65 PVC/ABS 300x400x180 mm | $350,000.00 | [MercadoLibre](https://articulo.mercadolibre.com.co/MCO-571459512-gabinete-plastico-cofre-400x300x180mm-ip66-zcebox-tablero-_JM) | Caja estanca electrónica | 1 | $350,000.00 |
| *Poste Principal* | Protecciones DC/sobretensión | $67,000.00 | [MercadoLibre](https://www.mercadolibre.com.co/dispositivo-de-proteccion-contra-sobretensiones-2p-dc-fotovo/p/MCO2021418153) | Protecciones y fusibles | 3 | $201,000.00 |
| *Poste Alerta* | ESP32 | $24,000.00 | [MercadoLibre](https://www.mercadolibre.com.co/tarjeta-de-desarrollo-esp32-wifi-bluetooth-30-pines/p/MCO2038800607) | Control sirena | 2 | $48,000.00 |
| *Poste Alerta* | Módulo LoRaWAN 915 MHz (RA-02/RAK) | $48,000.00 | [MercadoLibre](https://listado.mercadolibre.com.co/lora-915mhz) | Rx de alertas | 2 | $96,000.00 |
| *Poste Alerta* | Amplificador Audio 30W 12V | $16,000.00 | [MercadoLibre](https://www.mercadolibre.com.co/modulo-amplificador-30w-x-2-tpa3110-xha232-clase-d/up/MCOU2646801196) | Audio de alerta | 2 | $32,000.00 |
| *Poste Alerta* | Bocina corneta IP66 30W | $410,000.00 | [Amazon](https://www.amazon.com/-/es/Saladulce-industrial-estrobosc%C3%B3pica-negocios-residencia/dp/B086273BRN) | Alerta audible | 2 | $820,000.00 |
| *Poste Alerta* | Luz estroboscópica LED IP65 | $131,000.00 | [Amazon](https://www.amazon.com/-/es/FMW-R014FL-30W-Reflectores/dp/B07FT97Z33) | Alerta visual | 2 | $262,000.00 |
| *Poste Alerta* | Gabinete IP65 | $182,000.00 | [MercadoLibre](https://www.mercadolibre.com.co/gabinete-plastico-en-polipropileno-tapa-gris--244x254x156mm/up/MCOU2429935577) | Caja para electrónica/batería | 2 | $364,000.00 |
| *Postes* | Panel Solar de 100W Monocristalino 12V Restar | $176,000.00 | [Emergente](https://www.emergente.com.co/producto/panel-solar-de-100w-monocristalino-12v-restar) | Autonomía 24/7 estimada ~18W prom. | 3 | $528,000.00 |
| *Postes* | Batería 12v 40Ah (plomo) | $340,000.00 | [MercadoLibre](https://www.mercadolibre.com.co/bateria-seca-12v-40amperios/p/MCO2040054333) | Batería de almacenamiento de los paneles | 3 | $1,020,000.00 |
| *Postes* | Instalación/puesta en marcha (mano de obra) | $500,000.00 | — | Montaje + pruebas | 3 | $1,500,000.00 |
| *Postes* | Material Estructural | $850,000.00 | — | — | 3 | $2,550,000.00 |
| *Costo operativo* | Plan de datos SIM Nettz (poste principal) | $66,000.00 | [Nettz](https://www.nettz.co/) | Costo mensual × 12, persistencia multioperador | 12 | $792,000.00 |
| *Costo operativo* | Alojamiento nube/VM + almacenamiento | $1,300,000.00 | [AWS](https://calculator.aws/#/estimate) | Servidor dashboards y BD | 1 | $1,300,000.00 |
| *Costo operativo* | Dominio/SSL/servicios auxiliares | $46,000.00 | [Namecheap](https://www.namecheap.com/domains/) | DNS + certificados | 1 | $46,000.00 |
| *Costo operativo* | Mantenimiento preventivo (red completa) | $750,000.00 | — | Inspección, limpieza, pruebas | 2 | $1,500,000.00 |


### *Resumen General*

| Concepto | Costo (COP) |
|-----------|--------------|
| Total montaje | *$10,382,000.00* |
| Costo operativo total (anual) | *$3,638,000.00* |
| *Costo total primer año* | *$14,020,000.00* |
 

## Repositorio del proyecto

[Repositorio SIMAH](https://github.com/andresazcona/Sabanahack/tree/front)

[Dashboard Web](https://front-six-wheat.vercel.app/)
