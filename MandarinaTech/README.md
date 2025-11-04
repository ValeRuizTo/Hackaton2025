# Ficha técnica del proyecto 🔹 Sabana_Hack

🔹 Nombre del proyecto

SIRC

🔹 Descripción breve

SIRC es un prototipo web para la identificación y priorización de riesgos y oportunidades a nivel local. Combina visualización geoespacial, reglas heurísticas y soporte de modelos generativos para estimar probabilidad de eventos y ofrecer explicaciones, facilitando la toma de decisiones en entornos comunitarios o educativos.

🔹 Nivel de desarrollo

Prototipo funcional / pre-integración.
Implementado hasta ahora:
- Frontend en Vite + React + TypeScript con componentes UI y mapa interactivo.
- Motor de consulta/heurística y proxy AI en Node.js/Express (carpeta `server/`) que integra lógica para llamar a modelos generativos (Gemini) y una ruta API `/api/ai/gemini`.
- Recursos de datos locales y componentes para AVCD / CMRC (carpeta `src/` y `data/`).

🔹 Video de presentación

🔗 (https://www.canva.com/design/DAG3hZB_jsA/YtU_g-pfovfeJajdYffw4g/edit?utm_content=DAG3hZB_jsA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

🔹 Ventajas o fortalezas

- Prototipo modular: frontend y backend separados, facilita pruebas y despliegue incremental.
- Visualización geoespacial (Leaflet + react-leaflet) para análisis por zona y soporte de componentes reutilizables.
- Integración inicial con modelos generativos vía un proxy controlado (maneja rate limit y fallback heurístico).
- Uso de herramientas modernas (Vite, TypeScript, Tailwind) que aceleran el desarrollo y mantienen buena experiencia de DX.
- Digitalización de formularios con validación de tipo de usuario (Voluntario o Lider), lo que permite optimizar tiempo y tener persistencia de datos.

🔹 Desventajas o debilidades

- Muchas decisiones están basadas en heurísticas o datos de prueba.
- Integraciones externas (p. ej. API de modelos, bases de datos en producción) requieren configuración y credenciales; actualmente la proxy admite API key o GoogleAuth pero necesita secretos y despliegue seguro.


🔹 Detalles técnicos

Lenguajes / frameworks:
- Frontend: TypeScript, React 18, Vite
- Backend: Node.js (ES modules), Express

Dependencias y librerías detectadas (no exhaustivo):
- Frontend: react, react-dom, @tanstack/react-query, react-hook-form, recharts, leaflet, react-leaflet, clsx, zod
- Estilado: tailwindcss, postcss, autoprefixer
- Backend: express, cors, dotenv, express-rate-limit, node-fetch, google-auth-library
- Otros: @supabase/supabase-js (dependencia presente, revisar uso)

Herramientas / configuración:
- Bundler / dev: Vite
- Typechecking: TypeScript (tsconfig con strict=true)
- Control de versiones: Git (repositorio local en el equipo)

Alcance del prototipo:
- Interfaz completa con: solicitud de ubicación, mapa interactivo, paneles AVCD/CMSR, tarjetas y secciones informativas.
- API proxy para generación de análisis de riesgo (ruta `/api/ai/gemini`) que intenta usar Gemini (o heurística de fallback) y aplica rate limiting.
- Datos de ejemplo y componentes listos para añadir fuentes reales (por ejemplo, Supabase/Postgres o un servicio de datos).

Presupuesto estimado

Rango aproximado: USD 5,000 — 25,000 (dependerá del alcance de validación en campo, integración con datos reales, equipo y despliegue en producción). Este estimado cubre: desarrollo adicional, pruebas en campo, infraestructura (hosting, certificados, bases de datos) y equipo mínimo de QA/ops.

🔹 Repositorio del proyecto


🔗 Remoto: https://github.com/gevengood/Sabana_Hack.git

---


## Cómo ejecutar (desarrollo)

Requisitos: Node.js (v16+ o v18+ recomendado), npm y PowerShell en Windows.

- Levantar el frontend (desde la raíz del proyecto):

```powershell
npm install
npm run dev
# Por defecto Vite sirve en http://localhost:5173
```

- Levantar el proxy AI (servidor) en otra terminal:

```powershell
cd server
npm install
# Crear un archivo .env en el directorio server o exportar variables según .env.example
npm start
# Proxy por defecto: http://localhost:3001
```

- Chequeo rápido de TypeScript (desde la raíz):

```powershell
npm run typecheck
```

Nota: el servidor proxy requiere credenciales para llamar a la API de Gemini. Configure `GEMINI_API_KEY` (flujo de API key) o `GOOGLE_APPLICATION_CREDENTIALS` (ruta al JSON de la cuenta de servicio) según prefieras. Usa `.env.example` como plantilla.

