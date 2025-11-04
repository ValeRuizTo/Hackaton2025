# SABANA DINING SYSTEM

## Ficha Técnica

### Nombre de la solución
**Sabana Dining System** - Sistema Integrado de Gestión Transaccional y Analítica

### Breve descripción de la solución
Sabana Dining System es un *sistema* que digitaliza todo el proceso de venta y preparación, elimina el uso de papel y transforma los registros diarios en información estratégica, *priorizando la mejora de la experiencia y la calidad del servicio para el usuario final*.

### Link del pitch en YouTube
https://youtu.be/3y9To5Ui3ps?si=KBHlMsxUzN18H8_1

### Link Unisabana Dining System
https://sabana-hack-proyect.vercel.app

### Link de la presentación
https://www.canva.com/design/DAG3jnDrBRw/gNFsWGZq4DUP1fwdg88Dgg/edit?utm_content=DAG3jnDrBRw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

### Link PDF de la documentación
https://drive.google.com/file/d/1qt1nxDD3Du5wlpEAQBjYY1LW862s7c_a/view?usp=sharing

### Link Repositorio Frontend
https://github.com/sam200630/sabana-hack.git

### Link Repositorio Backend
https://github.com/JuanGomePer/BackEnd-SabanaHack2025

---

## Detalles Técnicos del Prototipo

### Arquitectura del Sistema

#### **Backend (Railway)**
- **URL de producción:** `https://backend-sabanahack2025-production.up.railway.app`
- **Base de Datos:** PostgreSQL
- **Tablas principales:**
  - `productos` → Catálogo de items vendibles
  - `usuarios` → Clientes Simulados (6,650 usuarios)
  - `ordenes` → Transacciones de compra con estado (PREPARANDO → LLAMANDO → COMPLETADA)

#### **Frontend (React + TypeScript)**
- **Framework:** React 18 con TypeScript
- **Routing:** React Router v6
- **Estado:** React Hooks (useState, useEffect)
- **Estilos:** CSS modular con diseño responsivo
- **Visualización:** Chart.js 4.4.0 para gráficos interactivos

#### **Módulos Funcionales**

##### 1. **Registro de Usuarios** (`formulario/formulario.tsx`)
- Validación de email y teléfono en frontend
- Verificación de duplicados vía `GET /usuarios/:cedula`
- Registro con `POST /usuarios` (cédula como PK)
- Campos: nombre, cédula/NIT, correo, celular

##### 2. **Punto de Venta - Cajero** (`cajero/caja.tsx`)
- Carga dinámica de productos desde `GET /productos`
- Carrito de compras en estado local React
- Cálculo de total en tiempo real
- Interfaz táctil optimizada para tablets

##### 3. **Generación de Facturas** (`cajero/factura/factura.tsx`)
- Autocompletado de datos del usuario por cédula
- Generación de orden con `POST /ordenes`
- Almacenamiento de detalle como JSONB
- Factura imprimible con número de orden autoincremental
- Formato COP con separadores de miles

##### 4. **Sistema de Entregas** (`entregas/entregas.tsx`)
- Gestión de estados de órdenes (Preparando/Llamando/Completada)
- Filtros por estado y punto de venta
- Búsqueda por número, cédula o nombre
- Actualización optimista con sincronización backend
- Acciones:  Llamar →  Completar →  Eliminar

##### 5. **Dashboard de Analytics** (`admin/admin.tsx`)
**Módulo estrella del proyecto**

**Tab 1: Dashboard Principal**
- Métricas en tiempo real: Ventas totales, Transacciones, Ticket promedio
- Filtros interactivos por punto de venta
- Gráficos con Chart.js:
  - Evolución de ventas diarias (últimos 30 días)
  - Ventas por hora del día (identificación de horarios pico)
  - Variación porcentual entre puntos
  - Comparativa interactiva entre 2 puntos seleccionables
  - Top productos más vendidos por punto

**Tab 2: Análisis Predictivo**
- Modelo Random Forest con R² = 0.963
- Proyección de ventas a 30 días
- Alertas automáticas de riesgo para puntos en declive
- Identificación de puntos en alto riesgo:
  - Punto Café Zona Central: -15.5% proyectado
  - Punto Cipreses: -8.2% proyectado
- Selector de hasta 3 puntos para análisis comparativo
- Desactivación automática de checkboxes al alcanzar límite

**Tab 3: Comportamiento del Usuario** 
- Segmentación K-Means en 4 perfiles:
  - **Cliente Premium**: Gasto $45,800, Recompra 0.266, +8%
  - **Cliente Leal**: Gasto $28,500, Recompra 0.195, -12% 
  - **Cliente Ocasional**: Gasto $15,600, Recompra 0.065
  - **Cliente Nuevo**: Gasto $12,300, Recompra 0.083, +18%
- Filtros por punto de venta, perfil de cliente y período
- Gráficos: Top 10 productos por perfil, distribución por categoría, puntos de venta frecuentes
- Scatter plot: Gasto promedio vs. Índice de recompra
- Evolución del índice de recompra (últimos 3 meses)
- Alertas dinámicas con variaciones mensuales

#### **Stack Tecnológico**
```javascript
// Frontend
- HTML5, CSS3, JavaScript ES6+
- React 18 + TypeScript
- Chart.js 4.4.0
- React Router v6

// Backend
- Node.js / Express (inferido)
- PostgreSQL
- Railway (hosting)

// Analytics & ML
- Python 3.11
- Pandas, NumPy
- Scikit-learn (K-Means, Random Forest)
- StandardScaler para normalización

```

#### **Flujo de Datos Completo**
```
Usuario registra datos → Cajero procesa pedido → Sistema genera factura electrónica DIAN → 
Envío automático por email → Orden aparece en pantalla de cocina → 
Personal actualiza estado (Preparando/Llamando/Completada) → 
Dashboard consume datos en tiempo real → Modelos ML analizan y predicen → 
Alertas automáticas para gerencia
```

---

## La Solución tiene como Ventajas:

### **1. Valor Agregado Real:

Registramos sin fila, cobramos sin repetir datos, cocinamos sin papel y administramos en tiempo real. Y por eso SABANA DINING SYSTEM no es un gasto, es una inversión inteligente: sustituye costos diarios por un sistema que se autofinancia en menos de un año, mantiene el ahorro y convierte a la universidad en oferente de tecnología.
Mientras otros sistemas solo capturan transacciones, nosotros **convertimos cada orden en insights accionables**. El diferencial no es el punto de venta, es el **Dashboard de Analytics con IA** que multiplica el valor de cada dato capturado.

### **2. ROI Demostrable en Menos de 1 Año**
- **Inversión inicial:** $61,200,000 COP
- **Ahorro anual proyectado:** $75,000,000 COP/año
- **Payback:** 9 y 10 meses
- **Ahorro acumulado a 3 años:** $163,800,000 COP
- La universidad recupera la inversión con el mismo dinero que hoy gasta en papel térmico

### **3. Impacto Ambiental Medible - Campus 3S**
- **Eliminación del 65% de papel térmico** (6,500 rollos/año = 390 kg de residuos no reciclables)
- Teniendo en cuenta que el 65% corresponde a lo impreso actualmente.
- Cumplimiento con principios **Seguro, Saludable, Sostenible**
- Mantenimiento de la Prioridad del Servicio

### **4. Cumplimiento Normativo Automático**
- Integración con **Resolución DIAN 000165/2023**
- Sin fricción para el usuario: un clic y recibe factura por email

### **5. Modelos de Machine Learning con Precisión Comprobada**
- **Random Forest:** R² = 0.963 (96.3% de precisión en predicciones)
- **K-Means Clustering:** Segmentación automática de 6,650 usuarios en 4 perfiles accionables
- Predicciones a 30 días que permiten **decisiones proactivas**, no reactivas
- En ambos modelos se ejecutan reportes mensuales.

### **6. Escalabilidad Comercial Futura**
- Arquitectura lista para **SaaS** (Software as a Service)
- Replicable a otras universidades, comedores institucionales, empresas de catering
- Potencial de **monetización externa** post-implementación

### **7. UX/UI Pensada para Adopción Real**
- Interfaz intuitiva sin curva de aprendizaje pronunciada
- Capacitación del personal: solo 2-3 días
- Cajeros solo necesitan preguntar el número de cédula (todo lo demás es automático)

### **8. Dashboards Interactivos en Tiempo Real**
- Filtros dinámicos por punto, fecha, perfil de cliente
- Gráficos que responden a la selección del usuario
- Comparativas entre puntos con 2 selectores independientes
- Exportación de reportes para gerencia

### **9. Arquitectura Probada y Estable**
- Backend desplegado en **Railway** (alta disponibilidad)
- Base de datos **PostgreSQL** robusta y escalable
- Frontend responsivo (funciona en desktop, tablets, móviles)

### **10. Valor Inmediato para Gerencia**
- **Día 1:** Reducción de errores en órdenes (cocina digital)
- **Mes 1:** Visibilidad total de ventas por punto/hora/producto
- **Mes 2:** Reducción de rollos de papel termico
- **Mes 3:** Predicciones activas y alertas de riesgo
- **Mes 6:** Optimización completa de inventarios y personal

---

## Las Oportunidades de Mejora y Necesidades son:

### **1. Dependencia de Conectividad**
- El sistema requiere conexión a internet estable para funcionar
- En caso de caída de red, el POS actual debe seguir operando como respaldo
- **Mitigación:** Modo offline con sincronización posterior (futuro)

### **2. Curva de Adopción Inicial**
- Aunque mínima (2-3 días), existe resistencia al cambio en personal de mayor edad
- Primeras semanas pueden tener lentitud en caja mientras se familiarizan
- **Mitigación:** Capacitaciones prácticas, guías visuales, soporte on-site

### **3. Inversión Inicial Concentrada**
- $61M COP puede verse como gasto grande (aunque se recupera en <10
- . meses)
- Requiere aprobación de múltiples instancias administrativas
- **Mitigación:** Implementación por fases (piloto en 2 puntos primero)

### **4. Datos Históricos Limitados para ML**
- Los modelos predictivos mejoran con más datos (primeros meses tendrán menor precisión)
- K-Means requiere recalibración periódica según cambios en comportamiento
- **Mitigación:** Usar datos simulados realistas + ajuste continuo con feedback

### **5. Integración con POS Actual Puede Ser Compleja**
- Dependiendo del sistema POS existente, la integración puede tomar más tiempo
- Sistemas legacy pueden no tener APIs abiertas
- **Mitigación:** Desarrollo de middleware de adaptación en Fase 1

### **6. Necesidad de Mantenimiento Continuo**
- Dashboards requieren actualización de datos en tiempo real (carga de servidor)
- Modelos ML necesitan reentrenamiento cada mes
- **Mitigación:** Contrato de soporte técnico post-implementación mensual

### **7. Privacidad de Datos del Usuario**
- Almacenar datos tributarios (cédula, correo, nombre) implica responsabilidad RGPD/HABEAS DATA
- Requiere políticas claras de uso y protección de información
- **Mitigación:** Cumplimiento de Ley 1581 de 2012, encriptación de datos sensibles

### **8. Hardware Adicional Requerido**
- 32 tablets Samsung Galaxy Tab A8 ($38M COP) son costo significativo
- Posible robo/daño de equipos en cocina (ambiente de alto tráfico)
- **Mitigación:** Seguros, soportes anti-robo, fundas resistentes

### **9. Dashboard Analytics Actualmente con Datos Sinteticos**
- El panel administrativo tiene métricas con datos simulados
- Requiere implementación con datos reales de ventas
- **Mitigación:** Visualización de datos desde el dia 1
---

## Cifras Clave del Proyecto y Entrenamiento (Simulación)

| Métrica | Valor |
|---------|-------|
| Transacciones diarias | 11,147 |
| Puntos de venta | 11 |
| Usuarios simulados | 6,650 |
| Plazas operativas | 266 |
| Proveedores | 136 |
| Materia prima/día | 4,000 kl |
| Soluciones almuerzo/día | 3,617 |
| Precisión Random Forest | 96.3% (R² 0.963) |
| Ahorro anual proyectado | $75,000,000 COP |
| Payback period | 9-10 meses |
| ROI a 3 años | $163,800,000 COP |

## Nivel de Madurez 

Prototipo Funcional Avanzado con backend desplegado en producción (Railway + PostgreSQL), frontend React completo en módulos operativos (registro, caja, facturación, entregas), y Dashboard de Analytics 100% desarrollado funcionando con datos sintéticos. Los modelos ML están validados conceptualmente y listos para entrenamiento con datos reales. El sistema está preparado para piloto inmediato en 2-3 puntos de venta.

---

## Equipo:

- **Juan Andres Gomez Perez**
- Juan Felipe Cordero Ramos
- Sofia Nuñez Rodriguez
- Samuel Andres Rodriguez Ulloa
- Nicolas Lopez Sanchez

---
**Desarrollado con 💚 para Sabana Hack 2025**
