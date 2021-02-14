# Static website

Este es un sitio web estático construido: html, scss/css, js and bootstrap.

<br>

## Antes de comenzar

Asegurarse de tener instalado sass para realizar los cambios en los archivos scss y compilarlos.

> Link para instalar: [Sass](https://sass-lang.com/install)

<br>

## Servir arhivos locales

Utilizar algun servidor web o extension; como [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para poder ver los cambios en el browser.

Ejecutar en la terminal:

```
sass scss/index.scss styles/index.css
```

Incluir el flag `--watch` si se quiere activar el reload de los estilos.

```
sass --watch scss/index.scss styles/index.css
```

El comando genera una carpeta styles con los archivos necesarios.
