# Ctrl+Alt+Elite 🚀

Proyecto del equipo **Ctrl+Alt+Elite** para Sabana Hack 2025 💙
# **Ficha técnica: Sabana dining connect**

## Descripción
Optimizar la experiencia de compra y atención en los puntos de venta de Unisabana Dining mediante la digitalización del proceso de facturación y pedidos, para reducir el uso de papel térmico y promoviendo prácticas sostenibles, sin afectar los tiempos de servicio ni el cumplimiento normativo. 
## **Nivel de desarrollo**
Prototipo Funcional (MVP)
## **Link al video**
https://youtu.be/bg_-1q-Qd2A?feature=shared
## **ventajas o fortalezas de nuestra  propuesta**
### 1. Sostenibilidad y reducción del impacto ambiental
- Elimina completamente el uso de papel térmico, reduciendo el consumo de recursos no renovables y la generación de residuos difíciles de reciclar.
- Contribuye directamente a los objetivos de sostenibilidad de la Universidad de La Sabana, alineándose con su compromiso institucional con el medio ambiente.
- Promueve una cultura de responsabilidad ecológica entre estudiantes, empleados y proveedores, al reemplazar procesos físicos por digitales.

### 2. Eficiencia operativa
- Optimiza los tiempos de atención al permitir que los usuarios realicen sus pedidos y registro de facturación de manera autónoma antes de pagar.
- Reduce las filas y cuellos de botella en los puntos de venta, especialmente en horas pico.
- Facilita la gestión de pedidos para el personal de cocina, con una interfaz táctil que actualiza los pedidos en tiempo real.
- Disminuye los errores manuales en el proceso de facturación y despacho.

### 3. Innovación tecnológica
- Implementa una PWA (Progressive Web App) accesible desde pantallas, tablets y dispositivos móviles, sin necesidad de instalaciones complejas.
- Integra Next.js, React, Firebase y Java Spring Boot, garantizando un entorno moderno, escalable y eficiente.
- Utiliza infraestructura en la nube con recursos dimensionados para la carga real del sistema, asegurando disponibilidad y rendimiento constante.
- Ofrece una experiencia omnicanal, permitiendo que los usuarios interactúen tanto desde el punto físico como desde la app móvil.

### 4. Experiencia del usuario y satisfacción del cliente
- Ofrece un proceso intuitivo, rápido y sin fricciones, desde el pedido hasta la recepción de la factura.
- Mejora la percepción de innovación y sostenibilidad en la comunidad universitaria.
- Aumenta la autonomía del usuario, permitiendo que cada cliente gestione su pedido y facturación desde la pantalla o su propio celular.
- Brinda transparencia y trazabilidad, ya que cada transacción queda registrada y accesible digitalmente.
### 5. Escalabilidad y proyección institucional
- El prototipo es escalable a toda la red de puntos de venta de Unisabana Dining y puede adaptarse a otros entornos universitarios o corporativos.
- Su arquitectura modular facilita la integración con futuros servicios, como sistemas de fidelización, pagos electrónicos ampliados o analítica de consumo.
- Posiciona a Unisabana como una institución líder en transformación digital sostenible dentro del sector educativo.
##  **Desventajas o debilidades de nuestra propuesta**
### 1. Optimización de costos e infraestructura
- Se puede trabajar en la reducción progresiva de costos de implementación mediante acuerdos con proveedores o la adopción de hardware más eficiente energéticamente.

### 2. Robustez tecnológica y resiliencia del sistema
- Se puede incluir un modo offline temporal para garantizar que las pantallas sigan operativas ante caídas de red.
- La incorporación de monitoreo en tiempo real y alertas automatizadas permitirá anticipar y corregir fallos antes de que impacten al usuario final.

### 3. Adopción y formación de usuarios
- Se puede desarrollar un plan de capacitación y sensibilización para chefs, personal operativo y consumidores, asegurando un uso eficiente del sistema.
- La implementación gradual acompañada de campañas de comunicación interna fortalecerá la aceptación y confianza en la solución digital
### 4. Seguridad y manejo de datos
- Se plantea como mejora la fortificación de la seguridad digital, incorporando cifrado avanzado y autenticación multifactor para los módulos administrativos.
### 5. Expansión funcional y escalabilidad
- A futuro, el sistema puede ampliarse con nuevos módulos, como historial de consumo, sugerencias personalizadas, programas de fidelización y pagos sin contacto.
## Detalles Técnicos
El prototipo desarrollado corresponde a una aplicación web progresiva (PWA) diseñada para funcionar en múltiples dispositivos, incluyendo pantallas táctiles de 27 pulgadas, tablets y teléfonos móviles. La solución fue construida utilizando un frontend en React con el framework Next.js, donde además se implementó la lógica de negocio, ya que es un MVP.  

El backend fue implementado con Java Spring Boot, encargado de gestionar la lógica de negocio, la conexión con la base de datos y la integración con los servicios de facturación electrónica.  

Como plataforma de desarrollo y despliegue continuo se utilizó GitHub Pages, mientras que la autenticación, el almacenamiento en tiempo real y la mensajería fueron gestionadas mediante Firebase.  

Además, se incluye un módulo para los chefs con visualización en tiempo real de los pedidos y su respectivo número de identificación.  
Esta arquitectura permite un rendimiento optimizado y experiencia fluida tanto en dispositivos móviles como en kioscos físicos, asegurando escalabilidad y fácil mantenimiento del sistema.

La solución se implementó sobre una infraestructura en la nube escalable, configurada para soportar la carga transaccional promedio estimada de 17 transacciones por minuto en un entorno con 48 pantallas activas simultáneamente. Se utilizaron dos instancias EC2 tipo t4.xlarge, cada una con 8 vCPUs, 32 GB de RAM y 50 GB de almacenamiento, para balancear la carga del backend y garantizar alta disponibilidad. Además, se empleó un servicio de Amazon S3 con capacidad de 1 TB, configurado para admitir aproximadamente 100.000 operaciones PUT y GET mensuales, destinado al almacenamiento de registros, facturas electrónicas y archivos temporales. Esta arquitectura garantiza escalabilidad, rendimiento y confiabilidad para el entorno de pruebas del prototipo.

Evaluación financiera:  https://unisabanaedu-my.sharepoint.com/:x:/g/personal/davidloji_unisabana_edu_co/Ee948TwaWBZMgYSvCDuco44BWMULJzDGCadJvdiPCxBFNg?e=tIhHEN

Imagenes de la aplicacion:  
![WhatsApp Image 2025-11-02 at 11 24 15 AM](https://github.com/user-attachments/assets/0d66e264-5213-4982-ac11-e3dedd7c2fa1)

![WhatsApp Image 2025-11-02 at 11 22 08 AM](https://github.com/user-attachments/assets/bad24301-6f25-4265-88a1-da004ade2ced)

![WhatsApp Image 2025-11-02 at 11 21 41 AM](https://github.com/user-attachments/assets/b0b98e84-7231-45cd-8790-3ed9966a16ab)

![WhatsApp Image 2025-11-02 at 11 21 17 AM](https://github.com/user-attachments/assets/a8762c9e-5d63-4915-9c03-6b502b9ffb49)

![WhatsApp Image 2025-11-02 at 11 20 57 AM](https://github.com/user-attachments/assets/978b10b7-c97e-4c81-85b9-4b0a75aff70f)

![WhatsApp Image 2025-11-02 at 11 20 33 AM](https://github.com/user-attachments/assets/30966263-69ad-4c44-8ccd-85c3bf5ff4bd)

![WhatsApp Image 2025-11-02 at 11 20 15 AM](https://github.com/user-attachments/assets/f674f049-70d4-4a74-a159-30c18a770615)

![WhatsApp Image 2025-11-02 at 11 19 44 AM](https://github.com/user-attachments/assets/bcb3015b-517f-49b2-8721-14659954e71f)

![WhatsApp Image 2025-11-02 at 11 19 16 AM](https://github.com/user-attachments/assets/970491b7-d509-4c1d-8fdc-f545ef1ef5b3)

## **Link del repositorio**:
https://github.com/Julizzy/UnisabanaDiningv
## **Link de la diapositivas del pitch** 
https://www.canva.com/design/DAG3iEHJcmc/H9I6lcien0h5BswlWg_95Q/edit?utm_content=DAG3iEHJcmc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
