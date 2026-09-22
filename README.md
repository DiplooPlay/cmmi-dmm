# cmmi-dmm

Caso de Estudio y Modelamiento BPMN para el curso de **CMMI** y **DMM (Data Management Maturity)**: Análisis As-Is / To-Be del proceso de gestión de pedidos y corte de melamina en la empresa **MelamiCut S.A.C.**

## 🚀 Tecnologías

- **Framework**: [Astro 5](https://astro.build/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Modelamiento**: Notación BPMN 2.0 (Bizagi Modeler / bpmn-js)
- **Despliegue**: Cloudflare Pages (100% estático, sin backend ni base de datos)

## 📁 Estructura del Proyecto

```text
uni/
├── Docs/                  # Documento fuente en PDF y modelos BPMN originales
│   ├── Analisis_AsIs_ToBe_BPMN_Melamina_APA7.docx.pdf
│   ├── MelamiCut_AsIs.bpmn
│   └── MelamiCut_ToBe.bpmn
├── public/
│   └── evidencias/        # Carpeta para colocar imágenes (evidencia1.jpg, etc.)
├── src/
│   ├── components/        # Componentes Astro (BPMN interactivo, Evidencias, TOC)
│   ├── data/bpmn/         # Modelos BPMN integrados en el código estático
│   ├── layouts/           # Layout principal minimalista
│   ├── pages/             # Página principal del informe académico
│   └── styles/            # Estilos globales y Tailwind CSS
├── .node-version          # Versión 22 fijada para Cloudflare Pages
├── astro.config.mjs
└── package.json
```

## 🛠️ Comandos

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción (sitio estático para Cloudflare Pages)
pnpm build

# Previsualizar build local
pnpm preview
```

## 📸 Subida de Evidencias

Para que las imágenes aparezcan automáticamente en la sección 16:
Colocar los archivos en `public/evidencias/` con los nombres asignados:
- `evidencia1.jpg`
- `evidencia2.jpg`
- `evidencia3.jpg`
- `evidencia4.jpg`
- `evidencia5.jpg`
- `evidencia6.jpg`
