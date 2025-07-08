

# Astro SSR en Node.js y cPanel

Este proyecto sirve para probar en un servidor con cPanel si funciona correctamente Astro con SSR (Server Side Rendering) y Node.js, y como ejemplo de cómo desplegarlo en cPanel usando el Node.js Selector.

Incluye guía paso a paso para el despliegue y buenas prácticas para evitar errores comunes en este entorno.

## Instalación local

1. Clona el repositorio o descarga el código.
2. Instala las dependencias:

   ```sh
   npm install
   ```
3. Inicia el entorno de desarrollo:

   ```sh
   npm run dev
   ```

   Accede a [http://localhost:4321](http://localhost:4321)

## Build y producción local

1. Compila el proyecto:

   ```sh
   npm run build
   ```

2. Arranca el servidor SSR:

   ```sh
   npm start
   ```

   Accede a [http://localhost:4321](http://localhost:4321)

## Despliegue en cPanel (Node.js Selector)

> **¡Importante!** No subas la carpeta `dist/`. El build debe hacerse en el servidor.

### Pasos para desplegar Astro SSR en cPanel

1. **Sube solo el código fuente** (NO subas la carpeta `dist/`).
2. En Node.js Selector:
   - **Application startup file:**

     ```text
     dist/server/entry.mjs
     ```
3. Haz clic en **Run NPM Install** para instalar dependencias.
4. Haz clic en **Run JS script** y ejecuta:

   ```sh
   npm run build
   ```
5. Reinicia la aplicación desde el panel.
6. Accede a tu dominio: la app debería funcionar.

#### Notas

- Si cambias el código, repite los pasos 3-5.
- Si necesitas variables de entorno, configúralas en el panel o usa un `.env`.
- Si tu hosting requiere un `Procfile`, pon:

  ```text
  web: node ./dist/server/entry.mjs
  ```
- Si necesitas cambiar el puerto, usa la variable de entorno `PORT` en cPanel (por defecto es 4321).

---

## 📄 Rutas de prueba

- `/` Página de inicio con enlaces y estado SSR
- `/ssr-test` Página SSR con info de Node.js
- `/api/hello` Endpoint API SSR
- `/user/[id]` Página dinámica de usuario (ejemplo: `/user/astrofan`)
- `/doc` Documentación generada desde este README

## 📦 Scripts útiles

- `npm run dev` — Desarrollo local
- `npm run build` — Compilar para producción SSR
- `npm start` — Arrancar servidor SSR

## 📝 Notas

- La documentación de `/doc` se actualiza automáticamente con este README.
- Si tienes problemas, revisa la configuración de Node.js en tu hosting y que el puerto esté permitido.

---


### Recursos útiles

- [Astro Docs](https://docs.astro.build/)
- [Astro Node Adapter](https://docs.astro.build/en/guides/integrations-guide/node/)
- [cPanel Node.js Selector](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/)
