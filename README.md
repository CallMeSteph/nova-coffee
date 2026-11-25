# NOVA COFFEE

**Cada taza, un ritual.**

> **Proyecto conceptual. Marca ficticia.**
> NOVA COFFEE no es una cafetería real: no tiene local, productos a la venta ni
> canales de atención.

## Concepto

NOVA COFFEE es una pieza de portafolio que explora el diseño editorial y la
identidad visual de una cafetería imaginaria. El sitio se lee como una revista:
titulares amplios, fotografías con pie de figura y una invitación constante a
hacer una pausa.

La marca, la carta y los precios existen únicamente para esta demostración de
diseño y desarrollo web.

## Dirección visual

- **Composición editorial:** retículas asimétricas, numeración de páginas y
  figuras, y mucho espacio en blanco.
- **Paleta cálida:** crema `#f6f1e9`, espresso `#2a1d16` y un acento terracota
  `#b3603f`, junto a tonos intermedios definidos en `src/app/globals.css`.
- **Tipografía:** Fraunces para los titulares y DM Sans para el texto y la
  interfaz, integradas con `next/font`.
- **Fotografía:** imágenes cálidas con un grano sutil.
- **Iconografía:** una «N» propia, trazada a partir de Fraunces, para el favicon
  y los iconos.

## Tecnologías

| Tecnología | Versión |
| --- | --- |
| Next.js (App Router y Turbopack) | 16.4.6 |
| React y React DOM | 19.3.0 |
| TypeScript | 5.9.3 |
| Tailwind CSS | 4.3.3 |
| ESLint | 9.39.5 |
| clsx | 2.1.1 |
| tailwind-merge | 3.7.1 |

Son las versiones instaladas según `package-lock.json`.

## Páginas y funcionalidades

| Ruta | Contenido |
| --- | --- |
| `/` | Portada, filosofía y el café |
| `/carta` | Doce productos ficticios en cuatro categorías, con precios en soles |
| `/nosotros` | La idea detrás de la marca, en formato de ensayo fotográfico |
| `/contacto` | Información del proyecto y formulario de demostración |

Además:

- Diseño adaptable a móvil, tableta y escritorio.
- Página 404, página de error y error global, con opciones para continuar.
- Aparición progresiva del contenido al desplazarse.
- Aviso de marca ficticia y autoría en el pie de todas las páginas.

En accesibilidad se han trabajado el enlace para saltar al contenido, la gestión
del foco en el menú móvil, la preferencia de movimiento reducido, los textos
alternativos y los mensajes del formulario. El proyecto no ha pasado una
auditoría formal de accesibilidad.

## Estructura del proyecto

```text
src/
├── app/            Rutas, metadatos, páginas de error, iconos y estilos globales
│   ├── carta/
│   ├── contacto/
│   └── nosotros/
├── assets/
│   └── images/     Fotografías del sitio
├── components/
│   ├── about/      Secciones de Nosotros
│   ├── contact/    Secciones de Contacto y formulario
│   ├── home/       Secciones de Inicio
│   ├── layout/     Cabecera, menú móvil, logotipo y pie
│   ├── menu/       Secciones de Carta
│   └── ui/         Piezas reutilizables
├── config/         Contenido y datos del sitio
└── lib/            Fuentes, utilidades y lógica del formulario
```

## Instalación en Windows

**Requisitos**

- Node.js 20.9 o superior, con npm.
- Conexión a Internet para instalar las dependencias y para la primera
  compilación, en la que `next/font` descarga las fuentes.

No hace falta configurar variables de entorno.

**Pasos**

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
node --version
npm ci
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilación de producción |
| `npm run start` | Servidor de producción; requiere una compilación previa |
| `npm run lint` | Revisión con ESLint |
| `npx tsc --noEmit` | Comprobación de tipos |

En una instalación nueva, ejecuta `npm run build` antes de `npx tsc --noEmit`:
el proyecto utiliza tipos que Next.js genera al compilar.

Para ver la versión de producción en otro puerto:

```powershell
npm run build
npx next start -p 3001
```

El proyecto no incluye pruebas automatizadas.

## Contenido e imágenes

Los datos principales se editan en `src/config`:

| Archivo | Contenido |
| --- | --- |
| `src/config/site.ts` | Nombre, descripción, navegación y avisos |
| `src/config/menu.ts` | Categorías, productos y precios ficticios |
| `src/config/about.ts` | Textos y pies de figura de Nosotros |
| `src/config/contact.ts` | Información del proyecto en Contacto |

El resto de los textos está en los componentes de cada sección.

Las nueve fotografías de `src/assets/images` son **imágenes originales generadas
con IA** para este proyecto y no representan un establecimiento real. Son JPEG de
1536 × 1024 píxeles que Next.js redimensiona y sirve en formatos optimizados.

Las carpetas `backups/` y `nova-coffee-images-ready/` son recursos locales
excluidos de Git; no son necesarias para ejecutar el proyecto.

## Formulario de contacto

El formulario es una **demostración**. Valida los campos en el navegador, pero
**no envía ni almacena mensajes**: no hay servidor, correo ni servicio externo
conectado. La interfaz lo indica antes y después de probarlo.

## SEO y seguridad

### SEO e indexación

- Título y descripción propios en cada página, con Open Graph y Twitter Cards.
- **Indexación desactivada temporalmente:** las páginas principales incluyen
  `noindex, follow`, configurado en `src/app/layout.tsx`. La página 404 utiliza
  su propia instrucción `noindex`.
- `robots.txt` permite el rastreo para que los buscadores puedan leer esa
  instrucción.
- Todavía no hay sitemap, direcciones canónicas ni dominio. Sin él, la URL de la
  imagen Open Graph apunta al entorno local.

El `noindex` depende de que cada buscador lo respete y no restringe el acceso al
sitio.

### Cabeceras de seguridad

Se configuran en `next.config.ts`:

| Cabecera | Alcance |
| --- | --- |
| `Content-Security-Policy` | Producción, salvo el optimizador de imágenes, que aplica la suya |
| `X-Content-Type-Options` | Todas las rutas |
| `Referrer-Policy` | Todas las rutas |
| `Permissions-Policy` | Todas las rutas |

La política de contenido limita los recursos al propio sitio e impide mostrarlo
dentro de otras páginas. Permite scripts y estilos en línea, necesarios para las
páginas estáticas de Next.js, por lo que **no protege frente a scripts inyectados
en el HTML**. HSTS no está activado.

## Pendiente antes de publicar

- [ ] Elegir el dominio y la plataforma de despliegue.
- [ ] Configurar `metadataBase`, las direcciones canónicas y la URL de Open Graph.
- [ ] Crear el sitemap y añadirlo a `robots.txt`.
- [ ] Decidir si se retira el `noindex` temporal.
- [ ] Valorar HSTS cuando exista HTTPS en producción.
- [ ] Comprobar las cabeceras en la plataforma de despliegue.
- [ ] Revisar el sitio en navegadores y dispositivos reales.

## Autoría

**Crafted by CallMeSteph**

Concepto, dirección y desarrollo de CallMeSteph, con el apoyo de herramientas de
inteligencia artificial durante el proceso.

Este proyecto no incluye una licencia de código abierto.
