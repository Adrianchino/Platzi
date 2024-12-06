# Curso de Introducción a Empaquetadores Web

> Oscar Barajas
> 28/04/2024

## 1. Bienvenida al curso de Empaquetadores Web

Son herramientas con las cuales se prepara el proyecto para producción o entorno de desarrollo local. El proyecto tendrá unas series de elementos necesarios y serán unidos mediante un proceso automatizado. Este proceso organiza las imágenes, fuentes, estilos, etc. Estas herramientas surgen de las necesidades del ecosistema de desarrollo. 

**Historia:** 

1995 - Nacimiento de JavaScript (Netscape)

- Batalla de los navegadores Netscape vs Microsoft
- Google nos demuestra el poder de JavaScript

2009 - Nacimiento de Node

- Node nos permite ejecutar JS al servidor.

2010 - Lanzamiento de NPM

- Trabajar con módulos.

2011 – Browserify

- Ayudaba a organizar y preparar nuestro proyecto.

2013 – Gulp

- Preparar nuestros proyectos.

2014 - Babel

- Permite utilizar JavaScript moderno.

Muchas de estas herramientas ya no se usan, pero sí todo lo que aportaron. En el curso se tendrá 5 proyectos.

## 2. ¿Qué es un empaquetador de módulos de JavaScript?

**Módulos:** Es algo muy importante que nos vamos a encontrar en el ecosistema de JavaScript, existen diferentes términos: CJS, ESM, AMD, IIFE, UMD, y otros más, que no son más que propuestas que a lo largo del tiempo de vida de JS y de la web han existido para resolver una particularidad, poder preparar nuestros proyectos para que lleguen a los usuarios. .

- **Immediately invoked function expression (IIFE):** Forma en la que, dentro de JS, se podrá invocar inmediatamente una función, lo que se hace es encapsularla en una función anónima y llamarla al final.

```js
var module = (function () {
  /* Data */
  /* Methods */
  // Revealing module
  return {
    /* Public data/methods */
  };
})();

module.data;
module.method();
```

- **CommonJS (CJS):** Propuesta que nace en el 2009, alternativa para crear módulos en JS. Tiene una funcionalidad particular para trabajar de forma asíncrona con los módulos.

```js
// module-name.js
module.exports = {
  /* ... */
};

// index.js
const module = require("./module-name.js");
const package = require("package");

module.method();
```

- **AMD (Asynchronous Module Definition):** Permite cargar módulos del lado del cliente.

```js
define(["dep1", "dep2"], function (dep1, dep2) {
  /* ... */
  
  return {
    /* ... */
  };
});
```

- **ES Modules (ESM):** Forma en la que vamos a poder incorporar, importar o exportar.

```js
// module.js
export const data = 42;
export const method = () => console.log("Hello");

// index.js
import { data, method } from "./module.js";
```

Otros:
- CJS : Sistema por defecto utilizado por Node.js
- ESM: Sistema oficial de JS para la gestión de módulos.

**¿Qué es un empaquetador de módulos de JavaScript?**

No es más que una pieza de software que nos permite tener todo un proyecto bien dividido en diferentes elementos que pueden ser también imágenes, estilos, entre otros recursos, y trabajar con la división de nuestro proyecto que esté construido en JS en diferentes módulos y con ello generar un único archivo con la unión de todos estos.

**Resumen** Un módulo son piezas de código que vamos a separar dentro de nuestro proyecto, pueden ser componentes, utilerías, y diferentes recursos que tendrá nuestro proyecto. Y un empaquetador es poder tener nuestro código muy bien organizado, independientemente de como va a llegar al usuario.

## 3. Empaquetadores de módulos más populares

Webpack

- Gestión de dependencias
- Ejecución de tareas
- Conversión de formatos
- Servidor de desarrollo

Parcel

- Gestión de dependencias
- Ejecución de tareas
- Servidor de desarrollo
- Diagnóstico
- Tree shaking

ESBiuild

- Velocidad extrema
- Ejecución de tareas
- Tree shaking
- ES6 and CommonJS modules

Rollup

- Ejecución de tareas
- Tree shaking
- ES6 and CommonJS modules

Vite

## 4. ¿Por qué necesitamos un empaquetador de módulos?

Optimizan todo nuestro código y recursos para llevarlo a producción.

![](https://i.postimg.cc/bvKcnWZG/webpack.png)

## 5. Primeros pasos en Webpack

**Webpack**

Es un empaquetador de módulos que nació en 2012, por un desarrollador alemán Tobias Koppers, y es la herramienta más utilizada actualmente dentro de los empaquetadores que existen en JS.

- **bundle** → Si tenemos muchos elementos o módulos con dependencias que tendremos separados por archivos (arquitectura amigable para poder encontrar los elementos), pero al final cuando queramos enviar nuestro producto a producción usamos Webpack para poder empaquetar los diferentes archivos. 

- **`node_modules`** → Carpeta donde se instalan las dependencias que agregamos.

- `package-lock.json` → Historial y el árbol de cada una de las dependencias que se han instalado.

- `package.json` → Archivo principal donde tenemos información del proyecto.

```bash
mkdir webpack
cd webpack
# git init
npm init -y
npm install webpack webpack-cli -D
code .
```

Creamos las siguientes carpetas y archivos, igual a la siguiente estructura:

```bash
.
├── node_modules
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── src
│   └── index.js
└── webpack.config.js
```

## 6. Configuración de Webpack

```bash
npm i html-webpack-plugin copy-webpack-plugin @babel/core babel-loader -D
```

`webpack.config.js`

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
```

Conceptos de Webpack que pueden encontrar en su [documentación oficial](https://webpack.js.org/concepts/) .

### Conceptos de Webpack

#### Entry

Un entry point indica qué módulo Webpack debería empezar a utilizar para empezar a construir el **gráfico de dependencias**.

Webpack luego se encargará de verificar qué otros módulos y librerías, aquel punto de entrada depende de (directa o indirectamente).

Por defecto, su valor es `./src/index.js`, pero se puede especificar otro, o múltiples, punto de entrada:

```js
//webpack.config.js 
module.exports = { 	
  entry: './src/index.js' 
}
```

#### Output

La propiedad output le indica a Webpack hacia dónde cargar los ‘paquetes’ ya creados y cómo deberían llamarse. Por defecto, los paquetes tendrán el nombre de `main.js` y se cargarán en la carpeta `./dist`:

```js
//webpack.config.js 
const path = require('path'); 

module.exports = { 	
  entry: './src/index.js', 	
  output: { 		
    path: path.resolve(__dirname, 'dist'), 		
    filename: 'main.js' 	
  }
}
```

`path` Es un módulo de `node.js` que nos permite manipular los paths de los archivos.

#### Loaders

Por defecto, Webpack solamente entiende archivos `.js` y `.JSON`. Los loaders nos permiten especificar otro tipo de archivos para que Webpack los pueda procesar y convertir en módulos válidos que pueden ser consumidos por nuestra aplicación y ser añadidos en el gráfico de dependencias. 

Los loaders tienen tres propiedades:

- `test`: identifica cuál o cuáles archivos serán transformados.
- `use`: indica cuál loader debería ser utilizado para transformar los archivos.
- `exclude`: indica archivos o carpetas que deberían ser ignoradas por el loader

```js
//webpack.config.js 
const path = require('path'); 

module.exports = { 	
  entry: './src/index.js', 	
  output: { 		
    path: path.resolve(__dirname, 'dist'), 		
    filename: 'main.js' 	
  }, 	
  modules: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/
        use: 'ts-loader', 
      }
    ] 	
  }
}
```

#### Plugins

Los `plugins` son similares a los `loaders`, pero nos permiten hacer cosas que no podríamos con los `loaders`, como optimización de los paquetes, inyección de variables y manejo de activos.

Para usar plugins, necesitamos traerlos con `require()` para agregarlos al array de `plugins`. Como podemos usar un mismo plugin con diferentes configuraciones para distintos propósitos, necesitamos crear instancias de los plugins utilizando el operador `new`.

```js
//webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  modules: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
```

Existe una gran cantidad de plugins que webpack nos provee. [Acá una lista de plugins](https://webpack.js.org/plugins) .

#### Mode

Al colocar la propiedad `mode` en `development`, `production` o `none`, podemos activar las optimizaciones internas de Webpack dependiendo del valor de `mode` que hayamos especificado. El valor por defecto es `production`.

Extra:

```js
/**@type 
{import('webpack').Configuration} 
*/ 
```

Coloca esa línea encima de tu `module.exports` y te va a autocompletar las props de la configuración.

## 7. Proyecto a empaquetar: Tu propio árbol de links

Debemos copiar el contenido del `index` de este repositorio
[gndx.io](https://github.com/gndx/gndx.io) dentro del `index.html`.

Además, necesitamos añadir esto en el archivo `index.js` [webpack-data.json](https://gist.github.com/gndx/304bb80d7d4cc10e1d9faddd6eeb2fac)

Queda algo así:

```js
const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Oscar Barajas",
  nickname: "gndx",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "",
    },
  ],

  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Colombia",
};
```

## 8. Lógica del árbol de links tipo linktree

Dentro del `index.html` buscamos usando `Ctrl + f` la clase `bg-yellow` y comentamos todo ese `div` y creamos una etiqueta `main`.

`index.html`

```html
<main id="links"></main>
<!-- 
<div
  class="bg-yellow-200 px-4 py-5 w-full flex justify-between"
>
  <a
    class="text-sm font-bold text-yellow-600 text-center hover:text-yellow-800 cursor-pointer"
    href="https://gndx.dev/"
    target="_blank"
  >
    BLOG
  </a>
  <span>📖</span>
</div> 
-->
```

`index.js`

```js
const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Oscar Barajas",
  nickname: "gndx",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "",
    },
  ],

  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Colombia",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links
    ?.map((link) => {
      return `
    <div
      class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between"
    >
      <a
        class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
        href="${link.url}"
        target="_blank"
      >
        ${link.name}
      </a>
      <span>${link.emoji}</span>
    </div>
    `;
    })
    .join("");

  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.append(newItem);
  $name.append(name);
};

main();
```

### Método `createTextNode`

En JavaScript, el método `createTextNode` se utiliza para crear un nuevo nodo de texto en el DOM (Document Object Model). Toma como parámetro una cadena de texto y devuelve un nuevo nodo de texto.

Aquí tienes un ejemplo de cómo se utiliza `createTextNode`:

```javascript
const texto = "Hola, mundo!";
const nodoDeTexto = document.createTextNode(texto);
```

En este ejemplo, se crea un nuevo nodo de texto utilizando el método `createTextNode`. El contenido del nodo de texto será la cadena de texto "Hola, mundo!". Este nodo de texto se puede utilizar posteriormente para agregarlo a algún elemento del DOM, como un párrafo, un encabezado o cualquier otro elemento que pueda contener contenido de texto.

Una vez que se ha creado el nodo de texto, se puede agregar al DOM utilizando métodos como `appendChild` o `insertBefore` en el elemento deseado.

```js
const parrafo = document.createElement("p");
parrafo.appendChild(nodoDeTexto);
```

En este ejemplo, se crea un nuevo elemento de párrafo utilizando `createElement` y luego se agrega el nodo de texto creado previamente al párrafo utilizando `appendChild`.

En resumen, `createTextNode` se utiliza para crear nodos de texto en el DOM que contengan contenido de texto específico y luego se pueden agregar a elementos existentes en el documento.

## 9. Empaquetando un proyecto con webpack


```bash
npm install webpack-dev-server -D

# No es necesario descargar ese paquete, solo con:
"start": "webpack serve --mode development --open"
```

`package.json`

```json
"build": "webpack --mode production",
"start": "webpack-dev-server --open --mode development"

"deploy": "gh-pages -d dist"
```

```bash
npm run build
npm run start

# Desplegar
npm install gh -pages -D
npm run deploy
```

dist no debe subirse a GitHub 

## 10. Primeros pasos en Parcel

La estructura de parcelas ofrece un marco completo para administrar, editar y compartir datos de parcelas en un entorno multiusuario (ArcGIS Enterprise) y de usuario único. En un entorno multiusuario, es posible editar y mantener la estructura de parcelas con una arquitectura basada en servicios. Una arquitectura basada en servicios le permite compartir la estructura de parcelas en todas las plataformas (escritorio, móvil y web) y es posible habilitar distintos flujos de trabajo en clientes diferentes, tanto [en el campo](https://pro.arcgis.com/es/pro-app/3.3/help/data/parcel-editing/workflow-publishpf.htm#ESRI_SECTION1_67C08BA3B9CC4959B591184C3EC8F243) como en la oficina.
[Parcel](https://pro.arcgis.com/es/pro-app/latest/help/data/parcel-editing/whatisparcelfabric.htm)

### informacion adicional 

En windows pueden poner el comando siguiente comando y les crea todo el proyecto:

`mkdir parcel && cd parcel && git init && npm init -y && npm i parcel -D  && mkdir src  && cd src && type nul>index.html && type nul>styles.css && type nul>index.js && cd .. && code .`

## 11. Proyecto a empaquetar: single page con Vanilla JavaScript

## 12. Lógica del proyecto single page

## 13. Empaquetando un proyecto con parcel

## 14.  Primeros pasos en ESBuild

Es una de las herramientas más potentes para la creación de los bundles Javascript, extremadamente rápida, creada con el lenguaje Go.

La herramienta esbuild permite hacer los **bundles de código Javascript de una manera extremadamente ágil**. Los bundles, o paquetes de código son agrupaciones de varios módulos Javascript que se colocan en un mismo archivo de código. Además habitualmente los bundles se minimizan, compactando el código con varias técnicas, por lo que consiguen ser más ligeros para su transferencia en Internet y por tanto optimizan las páginas web.

[ESBuild](https://runebook.dev/es/docs/esbuild/getting-started/index)

## 15. Proyecto a empaquetar: contador de React

## 16. Empaquetando nuestro proyecto con ESBuild

## 17. Configuración de ESBuild serve

## 18. Primeros pasos en Rollup

[**Rollup**](https://lenguajejs.com/javascript/automatizadores/rollup/) es una herramienta Javascript orientada a unir todo el Javascript de nuestra aplicación (_generalmente dividido en diferentes ficheros_) en un único fichero `.js` (_lo que se conoce como bundler_), realizando por el camino ciertas transformaciones de código para mejorar algunos aspectos.

A diferencia de otros automatizadores como [Parcel](https://parceljs.org/) o **Webpack**, **Rollup** sigue más un enfoque de configuración manual, similar a [Gulp](https://gulpjs.com/), donde el desarrollador define exactamente lo que quiere conseguir.

## 19. Configurando plugins de Rollup

## 20. Proyecto a empaquetar: Fake API

## 21. Empaquetando nuestro proyecto con Rollup

## 22. Empaquetando un proyecto con [Vite](https://es.vitejs.dev/guide/why.html)

### [Compilación en producción​](https://es.vitejs.dev/guide/build#compilacion-en-produccion)

Cuando sea el momento de implementar tu aplicación en producción, simplemente ejecuta el comando `vite build`. De forma predeterminada, este utiliza `<raíz>/index.html` como punto de entrada de compilación y produce un empaquetado de aplicación que es adecuado para ser servido a través de un servicio de alojamiento estático. Consulta [Despliegue de un sitio estático](https://es.vitejs.dev/guide/static-deploy) para obtener guías sobre servicios populares.

### [​Compatibilidad de navegadores](https://es.vitejs.dev/guide/build#compatibilidad-de-navegadores)

El empaquetado de producción asume soporte para código JavaScript moderno. De forma predeterminada, Vite apunta a los navegadores que admiten [modulos ES nativo](https://caniuse.com/es6-module), la [importación dinámica ESM nativa](https://caniuse.com/es6-module-dynamic-import) e [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta):

- Chrome >=87
- Firefox >=78
- Safari >=14
- Edge >=88

Puedes especificar objetivos personalizados a través de la [opción de configuración `build.target`](https://es.vitejs.dev/config/build-options#build-target), donde el objetivo más bajo es `es2015`.

Ten en cuenta que, de forma predeterminada, Vite solo maneja las transformaciones de sintaxis y **no cubre los polyfills**. Puedes consultar [Polyfill.io](https://polyfill.io/), que es un servicio que genera automáticamente paquetes de polyfill en función de la cadena UserAgent del navegador del usuario.

Los navegadores obsoletos pueden ser soportados a través de [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy), que generará automáticamente fragmentos y las correspondientes polyfills con características en lenguaje ES. Los fragmentos se cargan condicionalmente solo en navegadores que no tienen soporte ESM nativo.


## Resumen de todos los empaquetadores 

La mayoría de los títulos vacíos no tiene información, es porque los empaquetadores son antiguos  y el único que me pareció mas fácil de usar y que hoy en la actualidad es usado por todos los usuarios seria vite.

## Examen


1. ¿CJS, ESM, AMD, IIFE y UMD son las siglas de las diferentes alternativas para trabajar con módulos en JavaScript?

	``Verdadero``

2. ¿Qué es IIFE?

	``Siglas de (Immediately invoked function expression) Nos permite invocar inmediatamente una función``

3. ¿Qué es CommonJS (CJS)?

	``Propuesta de NodeJS para trabajar con módulos en JavaScript``

4. ¿Qué es AMD?

	``Asynchronous Module Definition: propuesta para trabajar con módulos asíncronos``

5. ¿Qué es ES Modules (ESM)?

	``Propuesta nativa de ECMAScript 6+ para trabajar con módulos en JavaScript``

6. ¿Principales empaquetadores de módulos en JavaScript?

	``Webpack, ESBuild, Parcel, Rollup``

7. ¿Cuál es el comando utilizado para inicializar un proyecto con GitHub?

	``git init``

8. ¿Cuál es el comando utilizado para inicializar un proyecto con NPM?

	``npm init``

9. ¿Cuál es el nombre del archivo de configuración de Webpack?

	``webpack.config.js``

10. ¿Con qué archivo podemos crear la configuración de desarrollo para ESBuild?

	``esbuild.config.js``❌

11. Al instalar TypeScript en un proyecto debemos de inicializar TS con el comando:

	``npx tsc --init --rootDir src --jsx react``

12. ¿Con qué comando asignamos un puerto para nuestro entorno de desarrollo local en Parcel?

	``--port 8000``

13. ¿Qué paquete es necesario para crear un entorno de desarrollo local en rollup?

	``@web/dev-server``

14. ¿Cuál herramienta es utilizada para desplegar sitio web estático de GitHub?

	``GitHub Pages``

