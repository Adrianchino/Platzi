# Curso Gratis de Programación Básica

## Fundamentos de Programación

[Link del Curso Gratis](https://platzi.com/cursos/programacion-basica/)

### 1. Bienvenida a Platzi: ¿qué necesitas para tomar el curso?

¡Hola! Bienvenido o bienvenida a la primera clase de este curso. Antes de empezar, déjame contarte sobre el proyecto del curso y te daré algunos consejos que te ayudarán en el camino. **El proyecto de este curso consiste en crear un videojuego en línea.** Nada mejor para aprender que haciendo un proyecto interesante, ¿no crees? 😉

Tú estás a la altura de este proyecto 💪. El perfil de profesores en Platzi te enseñará a construirlo desde cero a lo largo de 6 módulos. Tendrás la oportunidad de hacer preguntas y experimentar un poco durante el camino.

#### ¿Qué aprenderás en este curso?

Los módulos que verás son los siguientes, cada uno con un profe diferente:

1. Fundamentos de programación
2. Desarrollando un juego con HTML y JavaScript
3. Estilos con CSS
4. Optimización de código
5. Mapa con Canvas
6. Backend: videojuego multijugador

Y recuerda: ver las clases no es suficiente para aprender.

> Si quieres aprender de verdad, **tienes que programar junto a los profesores, experimentar usando lo que aprendes, hacer los retos, observar los aportes de tus compañeros, realizar preguntas y responderlas si sabes como hacerlo.**

No estás solo o sola. Puedes emplear el sistema de aportes de la clase para comunicarte con tus compañeros, y también puedes unirte al [Discord de Platzi](https://platzi.com/blog/unete-al-discord-de-platzi-y-conoce-a-la-comunidad/) para interactuar un poco más con la comunidad. Ahora pasa a la siguiente clase y prepárate, porque ahí escribirás tus primeras líneas de código.

### 2. ¿Cómo aprender programación?

Si nos regalas solo unos minutos, podemos enseñarte a escribir tus primeras líneas de código 💚 Solo necesitas un navegador de Internet y la voluntad para intentarlo 😉 .

#### Abriendo la consola del navegador

Primero necesitamos un espacio dónde escribir código. Así que ve a tu navegador favorito (Google chrome, Edge, Firefox, Opera, o el que prefieras) y dirígete a la barra de direcciones (ese lugar donde escribes “`Platzi.com`”).

Ahí, vas a escribir “**about:blank**” (sin las comillas). Eso hará que la pestaña donde lo escribiste quede vacía. Debería quedar un espacio totalmente blanco. Una vez ahí, vas a hacer **clic derecho** en el espacio en blanco y luego vas a hacer clic en un botón que diga “**inspeccionar**” (algunos navegadores lo llaman “inspect element”).

Eso abrirá el **inspector de elementos**, un menú donde puedes ver la composición del sitio web dónde estás parado (muchos se espantan cuando lo abren por accidente dentro de un sitio web 😆 Más tarde puedes hacerlo por prueba si quieres 👍).

El inspector se abre por defecto en una pestaña llamada “elementos” en la parte superior. Lo que estamos buscando está justo al lado: una pestaña llamada “**consola”.**

Ahí es dónde empezarás a programar 😉

![Captura de pantalla que muestra cómo llegar a la consola](https://static.platzi.com/media/articlases/Images/Clase%2001%20-%201.png)

#### Tus primeras líneas de código

Haz clic en la consola y escribe lo mismo que te indico aquí abajo. **Recuerda pulsar [enter] luego de escribir cada línea para ver el resultado** 🙂

```jsx
1 + 1   //[enter]

9 - 5   //[enter]

12 * 4  //[enter]

30 / 5  //[enter]
```

![Captura de pantalla de cómo se ven estos cálculos en la consola](https://static.platzi.com/media/articlases/Images/Clase%2001%20-%202.png)

Seguro ya notaste que puedes usar la consola como una especie de calculadora. Realiza algunos experimentos antes de continuar 😉

#### Variables

Ahora, ¿qué tal si probamos algo diferente? Ingresa el siguiente código en la consola:

```jsx
a = 1       //[enter]

b = 2       //[enter]

c = a - b
```

¿Qué crees que ocurrirá cuando pulses [enter] en ese último comando? ¡Así es! La consola sustituirá “a” y “b” por sus valores numéricos, y los usará para calcular el valor de “c” 😃

Esto ocurre porque, cuando la consola recibe el comando “a = 1”, tu computadora guarda en su memoria RAM que la letra “a” vale “1”.

A esto lo llamamos crear una **variable,** y ocurre siempre que empleas el signo igual (=). En este escenario, a, b y c se convirtieron en variables y puedes emplearlas para calcular cosas más interesantes 🙂 De hecho, no tienes que limitarte a letras. Puedes crear variables tan locas como:

```jsx
perros = 4

gatos = 3

totalMascotas = perros + gatos
```

Ojo, en la consola, una vez que declaras una variable, basta con escribirla de nuevo para conocer de nuevo su valor. Prueba escribiendo solamente “c” y pulsando [enter] 😉

Adelante, experimenta un poco antes de seguir leyendo 😁

#### Errores

Ahora, ¿crees que la consola solo sabe interpretar números? Probemos esta vez con algo de texto 🙂

```jsx
d = texto
```

Si pulsaste [enter] al escribir eso, probablemente la consola te arrojó un error 😅 Verás: la consola te permite darle instrucciones a tu computadora de forma directa. Pero si escribes algo que tu computadora no puede entender, entonces te va a arrojar un error.

Este error que cometiste es un **error de sintaxis**, y ocurre cuando escribes algo que no sigue las reglas del lenguaje de programación que entiende tu computadora.

En este caso, nos estamos comunicando con ella usando **JavaScript**. Y en JavaScript, el texto se escribe entre comillas (”).

#### Strings

Tu computadora no puede entender texto sin ayuda de programas o extensiones. Pero si puede entender caracteres, como letras y símbolos, y **secuencias de caracteres**, como palabras o contraseñas.

A este tipo de datos se les conoce como **string**. Tu computadora los entiende del mismo modo que entiende a los números, y puedes hacer cosas con ellos como:

```jsx
d = "Hola, "

e = " ¿cómo estás?"

profesor = "Freddy"

f = d + profesor + e
```

Realiza algunos experimentos antes de continuar.

#### Funciones

Las funciones son una herramienta adicional a nuestra disposición. Estas nos permiten decirle a nuestra computadora: “cuando recibas esta señal, por favor haz esto.”

Por el momento no te explicaremos como crearlas. Pero si te enseñaremos a usarlas 😉

El navegador tiene algunas funciones por defecto. Una de ellas se llama “alert()”. Para usarla prueba escribiendo este comando en la consola:

```jsx
alert("¡Estoy programando!")
```

En ese ejemplo, lo que hiciste fue ejecutar la función. Eso se hace escribiendo el nombre de la función (”alert”) seguido por paréntesis con una señal dentro. Esta señal se llama **parámetro.**

Ojo, esos parámetros generalmente modifican el resultado cuando ejecutas una función. Tú decides cómo funciona cuando las creas, pero algunas funciones usan muchos parámetros, y pueden trabajar sin ningún parámetro.

Por ejemplo, prueba con:

```jsx
alert()
```

Fíjate en que, **a pesar de no tener parámetros, igual tuvimos que usar los paréntesis**. Esto es importante. Si no usas los paréntesis, la computadora no entiende que quieres ejecutar una función. En cambio, se confunde y piensa que le estás hablando de una variable 😅

#### ¿Cómo funciona la programación?

La consola del navegador es un espacio que nos permite comunicarnos directamente con nuestro computador a través de JavaScript. Cuando creas variables, tu computador guarda la información en la memoria RAM _(Random Access Memory)_ dónde la guarda para que accedas a ella siempre que lo necesitas, y la borra al apagar la computadora.

Todo esto de variables, funciones, strings y demás es lo que está detrás de los sitios web, apps para teléfonos, videojuegos, y todo tipo de software 🙂

Felicidades por escribir tus primeras líneas de código 🤗 Realiza todos los experimentos que quieras, y nos vemos en la próxima clase para que aprendas a [crear tu primer sitio web](https://platzi.com/clases/3208-programacion-basica/51979-crea-tu-primer-sitio-web/) 😉

#### Resumiendo la clase

Pero antes de irnos, te dejaré este pequeño resumen para que puedas revisarlo en el futuro:

💡 Puedes entrar a la **consola** siguiendo los siguientes pasos:

1. Abre el navegador (Google Chrome, Edge, Firefox, Opera, o el que prefieras).
2. Escribe “**about:blank**” en la barra de direcciones.
3. Haz clic derecho en el espacio en blanco, y selecciona “**inspeccionar**” (algunos navegadores lo muestran como “inspect element”). Eso abre el **inspector de elementos**.
4. dentro del inspector de elementos, dirígete a una pestaña llamada “**consola**”.

💡 La consola del navegador te permite comunicarte directamente con tu computador a través de un lenguaje de programación llamado **JavaScript.**

En su forma más básica, puedes utilizarlo para realizar operaciones matemáticas.

💡 Las **variables** permite almacenar valores para usarlos luego en operaciones variadas y más complejas, sin necesidad de repetirlos una y otra vez.

Más adelante aprenderás sus reglas de uso. Pero, por los momentos, puedes crearlas en la consola usando este formato:

```jsx
[variable] = [valor]
```

Por ejemplo:

```jsx
a = 1
```

💡 Las variables también pueden almacenar texto. Este tipo de datos se llaman **strings**, y puedes emplearlos siempre y cuando encierres el texto entre comillas.

Por ejemplo:

```jsx
profesor = “Freddy”
```

💡 Las **funciones** nos permiten indicarle a la computadora que ejecute una serie de pasos cuando se le dé la señal. En esta clase no aprendimos a crearlas, pero si a utilizarlas usando la función “alert()” que viene por defecto con el navegador.

Para usarla, solo tienes que escribir:

```jsx
alert(”mensaje”)
```

Esto funciona aunque el “mensaje esté en blanco. Pero es importante que escribas los paréntesis, o la función no se ejecutará.

💡 Los lenguajes de programación tienen reglas de escrituras. Si te equivocas, la computadora no entenderá lo que dices y te avisará mostrándote un error.

Los errores que derivan de errores de escritura en el código se llaman **errores de sintaxis** y son bastante comunes, en especial cuando estás aprendiendo a programar.

### 3. Crea tu primer sitio web

Un **sitio web** funciona correctamente gracias a la participación de diversos tipos de archivos. Por lo tanto, antes de empezar a crear nuestro primer sitio web debemos repasar un concepto fundamental relacionado con **la estructura de los archivos**.

Aunque en esta clase generaremos un solo archivo para lanzar nuestro primer sitio web, a lo largo del curso necesitarás crear otros tipos de archivos para su correcto funcionamiento.

#### Estructura de un archivo

Se trata de uno de los conceptos más fáciles de asimilar en el universo de los sistemas operativos. Nada más debes recordar alguno de tantos archivos que has creado desde que usas un computador.

Es muy probable que hayas pensado que _carta.docx_ o _dibujo.jpg_ eran, simplemente, nombres de archivos. Resulta que en esa descripción observamos **la estructura de un archivo**.

#### Nombre

Debes tener claro que _nombre_ es, apenas, una parte de la estructura de un archivo.

Los nombres son personalizados y descriptivos. Solo **en algunos casos deberás asignar nombres predefinidos** para que sean leídos automáticamente, como, por ejemplo, cuando produces un sitio web. La página principal, por defecto, debe llamarse _index.html_.

> Al asignar nombres a los archivos, debemos tener en cuenta una recomendación imprescindible como hispanohablantes: **no utilizar caracteres especiales** como tildes, comas o la eñe. Tampoco se deben emplear símbolos como &, $, %, !, o ". Por ejemplo, si debes crear una presentación en slides para una fecha especial, es mejor que definas el nombre de la siguiente manera: _diaDelNino.pptx_

Tal como puedes darte cuenta en el ejemplo anterior, no uso ni tilde ni la eñe. Además, también debiste haber notado que no he dejado ningún espacio en el medio. En cambio, he utilizado letras mayúsculas.

#### Punto (.)

Por más diminuto que nos parezca, **el punto es un elemento importante dentro de la estructura de un archivo**.

Este carácter **está presente en las estructuras de archivos de todos los sistemas operativos**. Tanto en Windows como en Mac, Linux, incluso, en Android se usa el punto después del nombre y antes de la extensión.

#### Extensión

La extensión de un archivo es el componente que nos permite distinguirlo antes de ejecutarlo. Por ejemplo, si la extensión es _pdf_ o _mp4_, sabemos que el primero es un documento y que el segundo es un video. Gracias a la **extensión** conocemos anticipadamente qué aplicación ejecutará el archivo.

Para el propósito del presente curso, tendremos en cuenta que un navegador como Chrome lee, entre otros archivos, aquellos cuya extensión es _html_. Por esta razón, el primer archivo que crearemos para lanzar un sitio web será uno que termine en _.html_. Pero, antes de todo, es necesario conocer acerca de esta tecnología.

#### ¿Qué es HTML?

HTML es un lenguaje de marcado o de **etiquetas**. Gracias a las etiquetas escritas dentro del archivo .html, puedes ver esta página tal y como está. Las etiquetas html son, algo así, como instrucciones que el navegador debe decodificar. Viene del inglés _HyperText Markup Language_.

Las traducciones al español tienen leves variaciones. Algunos le llaman “_lenguaje de etiquetas_” o “_marcas de hipertexto_”. Otros, simplemente, “_lenguaje de marcado_”. Un archivo con extensión _HTML_ contiene texto plano. **HTML no es un archivo de texto enriquecido** como los que producimos en editores como Microsoft Word. Al crear un archivo HTML no podemos formatear su texto con subrayado o con **negrita** o con diferentes colores.

En este punto ya te habrás preguntado, ¿por qué veo este texto en negrita y en cursiva en el navegador que solo lee archivos HTML, los cuales son archivos de texto plano?. No te preocupes que no se trata de un engaño, es una buena pregunta.

La versión actual de HTML incorpora más de un centenar de etiquetas. En este curso utilizaremos algunas de las que más se implementan en un sitio web.

#### Configurando mi sistema operativo en modo profesional

Ahora que ya sabemos lo importante que son las **extensiones**, estas deben estar siempre visibles en nuestro sistema operativo. Además, en el entorno de la programación, **es una buena práctica tener a la vista las extensiones de los archivos que están en nuestro computador**.

Por eso vamos a proceder a realizar la primera actividad de esta clase: **activar la función de _Mostrar las extensiones de los archivos_** en tu sistema operativo. Esta es una tarea muy sencilla, aunque varía de acuerdo a la versión de tu sistema operativo. Pero si trabajas en una versión reciente, el proceso es, aún, más sencillo.

#### Actividad de la clase

Después de que hayas realizado la tarea del paso anterior, realiza lo siguiente:

1. Crea la carpeta _programar_ en el escritorio o en la unidad de tu preferencia y ábrela.
2. Haz clic secundario, selecciona _Nuevo_, luego _Documento de texto_. Borra todo el texto que te aparece por defecto, es decir el nombre del archivo, el punto y la extensión. Escribe pagina.html (recuerda que no se deben usar tildes).
3. Haz clic secundario sobre el archivo pagina.html, luego en _Abrir con_ y selecciona _Bloc de notas_. No debes abrir el archivo haciendo doble clic. Eso lo haremos después. Al hacer doble clic principal, seguramente el archivo lo abra el navegador predeterminado en tu sistema operativo que puede ser Chrome, Edge o Mozilla. En cualquiera de estos solo verás una página en blanco, puesto que todavía no has ingresado contenido al archivo pagina.html.
4. Después de abrir el archivo en el _Bloc de notas_, escribe las siguientes líneas de código:

```html
<h1>Mi primer sitio web</h1>
Hola <strong>querida</strong> clase
```

En este ejemplo observa atentamente aquello que está entre los signos de menor que (<) y mayor que (>). Tanto los signos como lo que está dentro de ellos, conforman una etiqueta.

5. Ahora guarda los cambios, vuelve a la carpeta _programar_ y abre el archivo pagina.html haciendo doble clic.

Así como estás viendo tu archivo, ya no en el _Bloc de notas_, sino en el navegador, es como puedes comprender poco a poco la manera en que funcionan las etiquetas html.

En el navegador no observas los signos de menor que y mayor que ni lo que está dentro de estos. Lo que sí ves es texto que tiene un mayor tamaño que otro. Esto se debe a que la etiqueta _h1_ viene de Header o título o encabezado. El _1_ se relaciona con la jerarquía del título. Si deseas ver subtítulos en tu sitio web, debes insertar la etiqueta _h2_. Ten en cuenta que html tiene hasta la etiqueta _h6_.

### 4. Sitios web con HTML

#### Fundamentos de HTML

El **lenguaje de marcas de hipertexto (HTML)** tiene reglas como cualquier otro lenguaje. Y no son tan complicadas cuando te tomas el tiempo para explorarlas poco a poco 😉

#### 1️⃣ En HTML la información se organiza con etiquetas

Estas consisten en una palabra o una letra encerradas entre los símbolos “<” y “>”.

Ej:

```html
<title>
```

#### 2️⃣ Cada pieza contenida en tu sitio web la encierran etiquetas de apertura y de cierre

Las etiquetas de cierre tienen un “/” antes de la palabra o letra que compone la etiqueta.

Ej:

```html
<title>Este es el texto que aparece en la pestaña del navegador</title>
```

#### 3️⃣ Las etiquetas se escriben sin espacios internos ni mayúsculas

Un error de este estilo (de sintaxis) puede causar que el navegador no entienda la etiqueta.

#### 4️⃣ Existen algunas etiquetas que se cierran a sí mismas

Estas generalmente **no tienen contenido**, así que empiezan y terminan con la etiqueta de apertura. Sin embargo, son muy útiles para introducir metadatos, organizar elementos de la página, o importar elementos de otras fuentes.

[Solo hay 14 de estas etiquetas](https://www.tutorialstonight.com/self-closing-tags-in-html#:~:text=%3Carea%3E%20%2D%20HTML,for%20the%20browsers). Pero las más comunes son:

|Etiqueta|Uso|
|---|---|
|`<br>`|Introduce un salto de línea en la página.|
|`<img>`|Introduce imágenes a tu sitio web.|
|`<input>`|Introduce elementos para que el usuario te de información (cómo botones, campos de texto, listas desplegables, entre otros).|
|`<link>`|Se usa mucho para cargar hojas externas de estilos (archivos “.css”) para definir los estilos de tu sitio web.|
|`<meta>`|Se usa para darle metadata a tu sitio web (para que el navegador y buscadores cómo google puedan trabajar mejor con él).|

Ojo, hay una variante de HTML llamada XHTML que requiere que estas etiquetas terminen en “/>”. Por ese motivo, muchos developers acostumbran a terminar estas etiquetas de esa manera, incluso en el HTML común y corriente.

Esto no es obligatorio en el HTML que tú estás aprendiendo ahora, pero es bueno que lo tengas en mente para cuando trabajes con otros developers 👍

Ej:

```html
<meta charset=""utf-8"" />

<img src=""./assets/img/Logo.svg"" alt=""Logo de Batata Bit"" />
```

#### 5️⃣Hay etiquetas cuyo trabajo es contener otras etiquetas

Cuando esto ocurre, se acostumbra usar la “indentación” de código para distinguir la jerarquía de las etiquetas.

En palabras más simples: Solo tienes que pulsar la tecla “tab” en las etiquetas hijo para que estas se muevan un poquito hacia la derecha. Eso te ayudará a distinguir a los padres de los hijos con mayor facilidad.

Ej:

```html
<picture class=""logo"">
    <img src=""./assets/img/Logo.svg"" alt=""Logo de Batata Bit"" />
</picture>
```

#### 6️⃣ Muchas etiquetas HTML utilizan **atributos**

Estos son información adicional que se agrega en la etiqueta de apertura para personalizar sus propiedades y funcionalidad.

Estos siguen el siguiente patrón:

NombreDelAtributo=”ValorDelAtributo”

Aprenderás más sobre los atributos poco a poco. Por ahora lo importante es que sepas que existen 👍

Por cierto, en HTML, la combinación de etiquetas, atributos y contenido recibe el nombre de **elemento**.

![Partes de un elemento HTML](https://static.platzi.com/media/articlases/Images/Clase%204%20-%201.png)

#### 7️⃣ Puedes encontrar una lista completa de las etiquetas HTML que puedes usar

Con explicaciones y ejemplos de uso, en [este sitio web](https://htmlreference.io/).

También puedes encontrarlas en referencias oficiales como las de [W3Schools](https://www.w3schools.com/tags/) o [Mozilla Developers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

Las más comunes para escribir son:

|Etiqueta|Uso|
|---|---|
|`<p>`|“Paragraph”, te permite introducir párrafos.|
|`<a>`|“Anchor”, te permite introducir hipervínculos.|
|`<b>`|“Bold”, te permite escribir en negritas.|
|`<i>`|“Italics”, te permite escribir en cursiva.|
|`<u>`|“Underline”, te permite escribir texto subrayado.|
|`<ul>`|“Unordered list”, te permite crear una lista desordenada (con puntitos)|
|`<ol>`|“Ordered list”, te permite introducir una lista ordenada (con números o letras).|
|`<li>`|“List item”, se colocan dentro de un `<ul>` o un `<ol>`, y se convierten en los elementos de la lista.|
|`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`|“Heading”, insertan títulos y subtítulos en tu sitio web. El número que acompaña a la “h” representa el nivel del título, dónde h1 tiene la mayor jerarquía.|

#### 8️⃣ Recuerda, **los archivos HTML cargan de arriba hacia abajo, un elemento tras otro**

Esto significa que el orden en el que escribas el HTML sí importa. Esos son todos por ahora 😁 Recuerda experimentar un poco con las etiquetas que conociste el día de hoy 😉

### 5. Estructura de árbol en HTML

El lenguaje de marcas de hipertexto (HTML) se caracteriza porque su estructura es como la de un árbol 🙂 ¿Te animas a aprender cómo funciona? 😉

Imagina que cada etiqueta es una rama, y que el contenido son hojas. Por lo tanto, algunas etiquetas nacerán dentro de otras etiquetas, y podrías encontrar contenido en alguna de las etiquetas más pequeñas 😉 Ahora, explorémoslas en orden para que entiendas a qué me refiero.

#### La regla: `<!DOCTYPE html>`

Primero, cada archivo HTML empieza con una etiqueta que se cierra sola. Esto es una convención y no modifica el contenido del sitio, pero es importante que empieces con ella.

```html
<!DOCTYPE html>
```

#### El árbol: `<html>`

Debajo encontrarás el tronco del árbol: la etiqueta `<html>`. Todo el contenido del sitio va dentro de esta etiqueta, y está viene con un atributo que indica el idioma en que está escrito el sitio web.

```html
<!DOCTYPE html>
<html lang="es">

</html>
```

Después, el árbol se abre hacia dos secciones principales: la primera es `<head>`, dónde encontrarás la metadata del sitio web. Esta sección te ayudará a decirle al navegador cómo va a mostrar tu sitio web, y también te permite darle información a buscadores como google para que sepan cómo mostrar tu sitio.

Y la segunda rama principal es `<body>`, donde introducirás el contenido que los usuarios van a ver cuando visiten tu sitio web.

```html
<!DOCTYPE html>
<html lang="es">
    <head>

    </head>
    <body>
        
    </body>
</html>
```

#### Las raíces: `<head>`

La etiqueta `<head>` se parece mucho a las raíces de un árbol: el usuario no puede verlas, pero son fundamentales para que el sitio web funcione.

Suele contener muchas etiquetas `<meta>` que revelan información sobre el sitio web al navegador y a buscadores como Google.

También incluye la etiqueta `<title>` que tiene el título del sitio web (que aparece en la pestaña del navegador), y al menos una etiqueta <link> que carga la hoja de estilos de tu sitio web (el archivo “.css”; esto es lo que organiza los elementos de tu sitio web y les da forma y color).

Aquí abajo te dejo un ejemplo muy común de lo que puedes encontrar en un `<head>`.

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta/>
        <meta/>
        <meta/>
        <title></title>
        <meta/>
        <link/>
    </head>
    <body>

    </body>
</html>
```

#### Las ramas, hojas y flores: `<body>`

Mientras tanto, la etiqueta `<body>` contiene todo lo que el usuario puede ver en el sitio web, y también aquello con lo que puede interactuar. Esta puede ser tan compleja y diversa como las ramas de un arbol.

Si has visitado un sitio web antes, seguro habrás notado que está construido en diferentes secciones, y las más comunes son `<header>`, `<main>`, `<aside>` y `<footer>`.

![Estructura común de un sitio web](https://static.platzi.com/media/articlases/Images/Clase%204%20-%202.png)

#### La etiqueta `<script>`

Además de esos 4, se acostumbra agregar una etiqueta `<script>` al final de `<body>`. Esta es la que tiene todo el código en JavaScript que introduces en tu sitio web para que haga cosas divertidas 😉

Probablemente pensaste que esta etiqueta se coloca en `<head>` debido a que su contenido no se muestra al usuario. Y estás en lo cierto 🙂 En realidad funciona por igual tanto en `<head>` como en `<body>`. Pero, antes de decidir dónde colocarla, quiero que pienses en esto:

¿Recuerdas que **los archivos HTML cargan progresivamente de arriba a abajo**? Pues, por lo general, el usuario no interactúa con el sitio web hasta que este termina de cargar. Así que dejar `<script>` al final de `<body>` permite que tu sitio web cargue todo el aspecto visual antes de cargar su programa 😉

Al final queda de tu parte (o de tu equipo de trabajo) decidir dónde colocar `<script>`. Pero es una práctica común dejarlo al final de `<body>` para que el sitio web se muestre más rápido al usuario 🙂

```html
<!DOCTYPE html>
<html lang="es">
    <head>

    </head>
    <body>
        <header>

        </header>
        <main>

        </main>
        <footer>

        </footer>
        <script></script>
    </body>
</html>
```

#### HTML semántico

En este punto, ya puedes introducir etiquetas comunes de escritura como `<p>` o `<ol>`. Sin embargo, existen otras etiquetas que suelen usarse dentro de `<body>` para ordenar aún más la información, lo que beneficia a la accesibilidad, al posicionamiento de tu sitio web en buscadores, y en ocasiones también a la aplicación de estilos.

Algunas etiquetas comunes de este estilo son:

|Etiqueta|Uso|
|---|---|
|`<nav>`|Se usa para identificar el panel de navegación del sitio, dónde están los links al resto del contenido de tu sitio web.|
|`<section>`|Se usa para separar un elemento html en secciones, cada una con un propósito.|
|`<article>`|Se usa para identificar artículos individuales dentro de un sitio web. Se usa mucho para identificar entradas de un blog.|
|`<figure>`|Se usa como un contenedor de imágenes, para manipular su tamaño con mayor facilidad en CSS, y para agregar un pie de foto.|
|`<div>`|Este es un comodín. Es un contenedor que puede tener lo que sea dentro. Pero no beneficia la accesibilidad o el posicionamiento en buscadores.|

Aquí abajo tienes un ejemplo de una estructura de HTML básica sin contenido. Verás que no es tan compleja luego de que conoces los elementos que la componen 😁

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta/>
        <meta/>
        <meta/>
        <title>Batata Bit</title>
        <meta/>
        <link/>
    </head>
    <body>
        <header>
            <nav>
            </nav>
        </header>
        <main>
            <section>
                <article>
                </article>
            </section>
        </main>
        <footer>
            <figure>
                <img/>
            </figure>
        </footer>
        <script></script>
    </body>
</html>
```

Por cierto, abajo te dejé el mismo código, pero con atributos 😁 Como hay más texto, quizás pienses que es más “temible” cuando los tiene. Pero la realidad es que los atributos no cambian la estructura, solo agregan información 🙂

Dale un vistazo para que te vayas acostumbrando a como se ven. Cuando empieces a usarlos te familiarizarás mucho más con ellos 😉

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="description" content="La próxima revolución en el intercambio de criptomonedas, Batatabit te ayuda a navegar entre los diferentes precios y tendencias" />
        <meta name="robots" content="index, follow" />
        <title>Batata Bit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./styles/mobile.css" />
    </head>
    <body>
        <header class="header">
            <nav>
            </nav>
        </header>
        <main class="main">
            <section class="added-value">
                <article class="added-value__cards--save-time">
                </article>
            </section>
        </main>
        <footer>
            <figure class="footer__logo">
                <img src="./assets/img/FooterLogo.svg" alt="El logo de batatabit" />
            </figure>
        </footer>
        <script src="./src/index.js"></script>
    </body>
</html>
```

Experimenta un poco con las etiquetas que conociste el día de hoy, y luego continúa tu aprendizaje aprendiendo a instalar tu primer editor de código: [Visual Studio Code](https://platzi.com/clases/3208-programacion-basica/51982-visual-studio-code/).

### 6. Instalando tu primer editor de código

#### ¿Qué es un editor de código?

En pocas palabras, un editor de código es un software que te permite escribir y editar código **en texto plano**, a la vez que te brinda herramientas varias para facilitar tu proceso de trabajo.

El código se escribe en **texto plano**. Es decir, texto simple y sin ningún tipo de formato (como negritas, cursivas y variedades de tamaño o color). Por lo tanto, no puedes escribir código usando software dedicado a aplicar estos formatos en cartas y documentos (como Microsoft word, Google docs, o Pages).

Así que necesitas un software especializado que te permita escribir texto plano, pero que al mismo tiempo te brinde herramientas para facilitar tu proceso de trabajo. Algunas de estas herramientas son: detector de errores en el código, herramientas para autocompletar, buscar y reemplazar; resaltados varios para facilitar la lectura del código, entre otros.

Además. algunas de estas herramientas admiten la instalación de extensiones que permiten personalizar y ampliar aún más las capacidades del editor de código. Van desde asistencia con colores y resaltados, a herramientas de comunicación de equipos dentro del editor de código como [CodeStream](https://www.codestream.com/).

#### ¿Qué editor de código instalo primero?

Si estás siguiendo este curso, te recomendamos que empieces probando [Visual Studio Code](https://code.visualstudio.com/).

Existen muchos editores de código en el mercado, y la mayoría son gratuitos (incluyendo el block de notas o el “notepad” que viene con tu computadora). Sin embargo, Platzi eligió esta para ti porque es gratuita, corre en windows, mac y Linux; y es una de las mejor valoradas en el entorno profesional al momento de lanzar este curso (2022).

#### ¿Cómo instalar Visual Studio Code?

1. Entra al sitio web oficial de [Visual Studio Code](https://code.visualstudio.com/) y descárgalo para tu sistema operativo.
2. Ejecuta el instalador que se descargó en tu computadora.
3. Acepta los términos y condiciones (si estás de acuerdo).
4. Luego tendrás que indicarle al instalador si deseas que realice alguna tarea adicional (abajo te explico qué significan estas opciones), y le das a siguiente.
5. Finalmente, esperas a que termine la instalación y le das finalizar 🙂

##### Tareas adicionales durante la instalación de Visual Studio Code

Te recomendamos habilitar las siguientes opciones: te recomendamos:

1. Crear el acceso directo en el escritorio (para que puedas abrirlo desde el escritorio con facilidad).
2. Agregar la acción “abrir en code” a los menu contextuales de archivo y de directorio (Esto te permite abrir archivos y carpetas desde el menú que se abre cuando haces click derecho en ellos).
3. Registrar Code como editor para los tipos de archivo admitidos (para que tu computadora abra los archivos con Visual Studio Code en lugar del Notepad).
4. Agregarlo al PATH (para que puedas abrir tus archivos y carpetas fácilmente desde la [terminal y línea de comandos](https://platzi.com/cursos/terminal/)).

Estas opciones te beneficiarán en tu carrera cómo programador, especialmente si Visual Studio Code se convierte en tu editor de texto preferido.

![Vista de la ventana de "Tareas Adicionales" durante la instalación de Visual Studio Code (2022)](https://static.platzi.com/media/articlases/Images/Clase%206%20-%201.png)

#### Usando Visual Studio Code por primera vez

Solo la práctica te hará un maestro en Visual Studio Code. Sin embargo, déjame darte algunas nociones clave para que empieces a usarlo ahora mismo 👍

![Primera impresión de la ventana de Visual Studio Code (2022)](https://static.platzi.com/media/articlases/Images/Clase%206%20-%202.png)

1. VSCode emplea ventanas al igual que el navegador de internet. Puedes trabajar con varios archivos a la vez desde la misma ventana.
2. Por defecto, VSCode suele mostrar una ventana de bienvenida y otra con las mejoras de la última versión instalada. Puedes cerrarlas cuando quieras.
3. Por defecto, VSCode te preguntará si confías en los autores de los archivos que intentes abrir. Esta es una medida de seguridad normal, y se toma para protegerte de archivos ejecutables que puedan puedan perjudicar tu computador.
4. VSCode tiene un menú superior muy similar a los de otros software, pero también tiene un menú a la izquierda que se distingue por íconos en lugar de palabras. Estos despliegan un panel lateral con diferentes funcionalidades.

- El primer botón es el explorador de archivos. Si decides abrir una carpeta entera con VSCode, este panel te permite navegar fácilmente por los diferentes archivos que se encuentran dentro de la carpeta.
- El segundo botón es un buscador. Te permite buscar palabras en cualquiera de los archivos de la carpeta que tienes abierta (y resalta todas sus iteraciones).
- El tercero tiene que ver con un software de control de versiones (algo indispensable para programar profesionalmente. Más información en el [Curso Profesional de Git y Github](https://platzi.com/cursos/git-github/)).
- El cuarto es una herramienta interna de VSCode para correr y detectar bugs en el código.
- El quinto abre un panel dónde podrás buscar e instalar extensiones para tu editor de código.

5. El editor de VSCode tiene tema oscuro por defecto para que distingas la implementación de colores dentro del código.
6. VSCode cuenta el número de líneas del archivo que tengas abierto. También destaca la indentación de código, y aplica un código de colores al texto del archivo (que depende de la extensión del archivo).
7. VSCode emplea una vista miniatura del código en el extremo derecho de la ventana. Puedes usar este para navegar fácilmente por tu código.
8. Puedes hacer zoom para aumentar el tamaño del código y facilitar su lectura. Puedes lograrlo pulsando Ctrl→”+” y Ctrl→”-”

#### Bonus: utf-8

El navegador no puede leer acentos y letras “ñ” si no indicas esto en el HTML.

Es probable que ya te hayas dado cuenta de que estos acentos no se muestran bien cuando cargas el archivo HTML común y corriente en tu navegador. Esto se debe a que los acentos no pertenecen al set de caracteres que carga por defecto el HTML.

Para usar caracteres comunes del español (como acentos y la letra “ñ”), necesitas activar el Unicode Transformation Format 8 (UTF-8) en tu archivo HTML colocando la siguiente etiqueta `<meta>` en el `<head>` de tu archivo:

```html

<meta charset="utf-8" />

```

Esta se ve así dentro del código:

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
    </head>
    <body>
       
    </body>
</html>
```

¿Qué tal si creas un nuevo archivo HTML, pero esta vez desde Visual Studio Code? 🙂

Experimenta un poco, y nos vemos a continuación en la siguiente clase: [Como declarar variables y usar prompt](https://platzi.com/clases/3208-programacion-basica/51983-prompt/) 😉

### 7. Cómo declarar variables y usar prompt

#### Cómo declarar variables en JavaScript

Sin complicarnos mucho, puedes declarar una variable en JavaScript escribiendo lo siguiente:

1. La palabra reservada “let”.
2. El nombre que quieres para tu variable.
3. El signo “=” para asignar un valor a ese nombre.
4. El valor que quieres para la variable. Puede ser texto (strings), números, y otras cosas que aprenderás si profundizas un poco más en JavaScript.

```javascript
let a = 1;
```

“Declarar una variable” consiste en reservar un nombre en la memoria de la computadora y asignarle el valor que tú indiques.

En JavaScript (el lenguaje que entienden los navegadores de internet) hay varias formas de declarar una variable. Sin embargo, cuando estas empezando, puedes declarar variables con “let” sin mayor problema 👍

#### Uso de promt()

“Prompt()” es una función nativa del navegador. Cuando la usas, esta dispara una pequeña ventana con el texto que indiques entre los paréntesis, dónde le pide al usuario que te entregue alguna información. Por lo tanto, podemos usarla para obtener información del usuario y usarla en otro lugar.

Ejemplo:

```javascript
let nombre = "";
nombre = prompt("¿Cuál es tu nombre?");
alert(nombre + ", Bienvenido a Platzi :)");
```

Prueba a correr ese código en el navegador para que veas lo que ocurre, y animate a experimentar un poco con lo que aprendiste aquí 😊

### 8.  Algoritmo de piedra, papel o tijera

Ahora que conoces lo más básico de programar ¿te animas a crear un pequeño juego de piedra papel o tijera con tu navegador?

Esta clase requiere que sepas lo fundamental sobre crear archivos HTML y escribir código JavaScript. Si aún no lo sabes, entonces visita [la primera clase del curso](https://platzi.com/clases/3208-programacion-basica/52069-que-es-platzi/) y empieza desde allí 🙂 Esta es la clase número 9 del curso gratis de programación básica de Platzi 💚

#### Tips para aprender a programar

Ahora, antes de empezar, déjame darte algunos tips que seguro te ayudarán 😉

#### Escribe comentarios con “//”

La computadora ignora todo lo que escribas después de un “//” en una línea de código. Así que puedes usar esto para dejar mensajes útiles para ti (o tus compañeros) a lo largo del código.

Por ejemplo:

```javascript
//RECOGIENDO LA ELECCIÓN DEL JUGADOR
let eleccionJugador = prompt(); // Aquí el jugador elije piedra, papel o tijera
```

#### Nombra variables

Se recomienda fuertemente usar nombres que dejen claro el propósito de la variable. Evita usar nombres sencillos como “a”, porque puedes olvidar que es lo que hace cuando trabajas con muchas variables a la vez.

La práctica más común es utilizar nombres compuestos por varias palabras en Camel Case (sin espacios, empezando en minúscula, y colocando en mayúscula la inicial de todas las palabras después de la primera).

Ojo, recuerda no emplear acentos ni “ñ” en tu código para evitar errores de lectura.

Por ejemplo:

```javascript
eleccionUsuario
nombreUsuario
primerApellidoUsuario
fechaNacimientoUsuario
```

#### Utiliza condicionales

Si lo piensas bien, el juego de piedra, papel y tijera requiere de condiciones como “si el jugador elije piedra y la computadora elije piedra, entonces el jugador gana”.

Para hacer eso en JavaScript debes seguir una formula sencilla:

```javascript
if ( variableAComparar == ValorDeComparacion ) {
    //Código a ejecutar si la condición se cumple
}
else if ( variableAComparar == ValorDeComparacion2 ) {
    //Código a ejecutar si la condición 1 no se cumple, pero la segunda sí
}
else ( variableAComparar == ValorDeComparacion3 ) {
    //Código a ejecutar si ninguna condición se cumple
}
```

En resumen:

1. Usas `if` para evaluar la primera condición. `else if`, para evaluar más condiciones si la primera no se cumple, y `else` para decir lo que ocurrirá si ninguna otra condición se cumple.
2. Entre los paréntesis escribes la condición que deseas evaluar. Por lo general se compara una variable con un valor.
3. Recuerda que `=` se utiliza para asignar valores a las variables. Si deseas comparar variables con valores dentro de un `if`, entonces debes emplear un `==`. También puedes emplear un `===`si quieres comparar tanto el valor como el tipo de dato (número, string, o *boolean).
4. El código que escribas entre `{}` es el código que se va a ejecutar si la condición entre paréntesis se cumple.

💡 Los datos tipo **Boolean** son datos “Verdadero o falso”. Puedes escribirlos como `true` / `false` o 1 / 0. Por lo regular son muy útiles 👍

#### Escribiendo el algoritmo

Esto lo vamos a hacer en dos partes. Y lo primero es crear el archivo HTML dónde vamos a escribir nuestro código, abrirlo en nuestro editor de código, y escribir la base en HTML.

Intenta hacerlo sin ayuda 😉 Y si te pierdes, aquí te dejo el código que deberías preparar de primeras.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Algoritmo piedra, papel o tijera</title>
        <script>
	      
        </script>
    </head>
    <body>
        <h1>Piedra, papel o tijera</h1>
    </body>
</html>
```

Luego escribiremos un código que nos permita saber si el jugador elije piedra papel o tijera. Intenta crear una variable que capture la elección del jugador usando un `prompt()`. Explícale que escriba 1 para piedra, 2 para papel o 3 para tijera, y luego recuérdale el número que eligió con un `alert()`.

Intenta hacerlo sin ver la solución. Cuando termines, compara lo que obtuviste con el código de abajo y sigue leyendo:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Algoritmo piedra, papel o tijera</title>
        <script>
            //OBTENIENDO LA ELECCIÓN DEL JUGADOR
            let eleccionDelJugador = 0;
            eleccionDelJugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
            alert("Elegiste " + jugador);
        </script>
    </head>
    <body>
        <h1>Piedra, papel o tijera</h1>
    </body>
</html>
```

Bien, ahora probemos con la condición. Primero convierte el recordatorio en un comentario. Vamos a crear un recordatorio más preciso, uno que le diga al usuario si eligió piedra, papel, tijera, o algo más.

Para hacerlo, inicia una condición dónde vas a hacer tres comparaciones. Primero usa un `if` para evaluar si el jugador eligió piedra. Si lo hizo, envíale un `alert()` indicándole que eligió piedra. Luego usa un par de `else if` para evaluar si eligió papel o tijeras, y envíale un `alert()` en cada uno informándole de su decisión.

Finalmente, emplea un `else` para evitar que el jugador quiera pasarse de listo al escribir algo que no sea 1, 2 o 3. En ese caso, envíale un `alert()` indicándole que elija 1, 2 o 3 (o juegale una broma. Es tu juego después de todo 😉).

Intenta hacerlo por tu cuenta. Y cuando termines, compáralo con el código de abajo antes de continuar.

¡Recuerda probar tu código en el navegador y pulirlo hasta que funcione!

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Algoritmo piedra, papel o tijera</title>
        <script>
            //OBTENIENDO LA ELECCIÓN DEL JUGADOR
            let eleccionDelJugador = 0;
            eleccionDelJugador = prompt( "Elige: 1 para piedra, 2 para papel, 3 para tijera" );
            // alert( "Elegiste " + jugador );

            //INFORMANDO LA ELECCIÓN DEL JUGADOR
            if ( eleccionDelJugador == 1 ) {
                alert( "Elegiste piedra" );
            } 
            else if ( eleccionDelJugador == 2 ) {
                alert( "Elegiste papel" )
            } 
            else if ( eleccionDelJugador == 3 ) {
                alert( "Elegiste tijera" )
            } 
            else {
                alert( "Elegiste otra cosa, así no puedes jugar >-<" )
            }
        </script>
    </head>
    <body>
        <h1>Piedra, papel o tijera</h1>
    </body>
</html>
```

Dejémoslo hasta aquí por ahora. Intenta reproducir este código por tu cuenta ahora que sabes cómo funciona. Y cuando estés listo, acompáñame a terminar este pequeño juego en: [Algoritmo avanzado de piedra, papel o tijera](https://platzi.com/clases/3208-programacion-basica/51985-algoritmo-avanzado-de-piedra-papel-o-tijera/)

### 9. Algoritmo avanzado de piedra, papel o tijera

#### ¿Dónde nos quedamos?

Aquí nos quedamos. Compáralo con tu código, o construye el tuyo para continuar la clase 🙂

> 💡 **Ojo**, no copies y pegues si no lo has hecho aún. Al contrario, aprovecha la oportunidad para practicar 😉

Sin embargo, si tienes problemas para visualizarlo por el tamaño de la ventana, prueba copiandolo y pegandolo en un archivo HTML diferente al tuyo en Visual Studio Code. Ahí deberías poder verlo bien 👍

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Algoritmo piedra, papel o tijera</title>
        <script>
            //OBTENIENDO LA ELECCIÓN DEL JUGADOR
            let eleccionDelJugador = 0;
            eleccionDelJugador = prompt( "Elige: 1 para piedra, 2 para papel, 3 para tijera" );
            // alert( "Elegiste " + jugador );

            //INFORMANDO LA ELECCIÓN DEL JUGADOR
            if ( eleccionDelJugador == 1 ) {
                alert( "Elegiste piedra" );
            } 
            else if ( eleccionDelJugador == 2 ) {
                alert( "Elegiste papel" )
            } 
            else if ( eleccionDelJugador == 3 ) {
                alert( "Elegiste tijera" )
            } 
            else {
                alert( "Elegiste otra cosa, así no puedes jugar >-<" )
            }
        </script>
    </head>
    <body>
        <h1>Piedra, papel o tijera</h1>
    </body>
</html>
```

#### La elección de la computadora

Necesitamos un oponente para este juego, así que primero debemos trabajar en la elección de la computadora.

Lógico quieres que la computadora elija una opción al azar para el juego. Pero eso lo construiremos en la clase de [aleatoriedad](https://platzi.com/clases/3208-programacion-basica/51986-aleatoriedad/) 😉 Mientras tanto, usa comentarios y espacios para crear un apartado dónde escribiremos este código más tarde; y escribe en una línea que la computadora. Elige una de las tres opciones (puede ser la que tú quieras, con los números que empleamos para la elección del jugador).

¿Ya lo hiciste? Inténtalo por tu cuenta, y luego compáralo con el código aquí abajo 😉

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Algoritmo piedra, papel o tijera</title>
        <script>
            //OBTENIENDO LA ELECCIÓN DEL JUGADOR
            let eleccionDelJugador = 0;
            eleccionDelJugador = prompt( "Elige: 1 para piedra, 2 para papel, 3 para tijera" );
            // alert( "Elegiste " + jugador );

            //INFORMANDO LA ELECCIÓN DEL JUGADOR
            if ( eleccionDelJugador == 1 ) {
                alert( "Elegiste piedra" );
            } 
            else if ( eleccionDelJugador == 2 ) {
                alert( "Elegiste papel" )
            } 
            else if ( eleccionDelJugador == 3 ) {
                alert( "Elegiste tijera" )
            } 
            else {
                alert( "Elegiste otra cosa, así no puedes jugar >-<" )
            }

            //OBTENIENDO LA ELECCIÓN DEL COMPUTADOR
            let eleccionDelComputador = 1;
			
        </script>
    </head>
    <body>
        <h1>Piedra, papel o tijera</h1>
    </body>
</html>
```

#### Anunciando la elección del computador

Antes de proceder, planteemos un momento como queremos que se produzca el juego:

1. El juego pide su elección al jugador, y luego le informa cuál fue su elección.
2. El juego asigna una elección a la computadora, y luego le informa al jugador la elección de la computadora.
3. El juego evalúa ambas elecciones, decide el ganador, y muestra un mensaje informando el veredicto.

Por lo tanto, ahora que la computadora ya eligió, crea un apartado que informe la elección de la computadora con un `alert()` 🙂 crea un apartado para esto, y recicla el código que usaste para informar la elección del jugador para que muestre ahora la elección del computador 😉

> 💡 ¡Por cierto! También puedes usar emojis en los mensajes. Puedes utilizarlos desde la [emojipedia](https://emojipedia.org/) o, si estás en windows, puedes pulsar Win+”.” para abrir la ventana de emojis 🙂

Hazlo tú y pruébalo en el navegador para validar que esté funcionando bien. Luego compáralo con el código de abajo antes de continuar 😉

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Algoritmo piedra, papel o tijera</title>
        <script>
            //OBTENIENDO LA ELECCIÓN DEL JUGADOR
            let eleccionDelJugador = 0;
            eleccionDelJugador = prompt( "Elige: 1 para 🥌, 2 para 📄, 3 para ✂️" );
            // alert( "Elegiste " + jugador );

            //INFORMANDO LA ELECCIÓN DEL JUGADOR
            if ( eleccionDelJugador == 1 ) {
                alert( "Elegiste 🥌" );
            } 
            else if ( eleccionDelJugador == 2 ) {
                alert( "Elegiste 📄" )
            } 
            else if ( eleccionDelJugador == 3 ) {
                alert( "Elegiste ✂️" )
            } 
            else {
                alert( "Elegiste otra cosa, así no puedes jugar 😣" )
            }

            //OBTENIENDO LA ELECCIÓN DEL COMPUTADOR
            let eleccionDelComputador = 1;
			
            //INFORMANDO LA ELECCION DEL COMPUTADOR
            if ( eleccionDelComputador == 1 ) {
                alert( "La computadora eligió 🥌" );
            } 
            else if ( eleccionDelComputador == 2 ) {
                alert( "La computadora eligió 📄" )
            } 
            else if ( eleccionDelComputador == 3 ) {
                alert( "La computadora eligió ✂️" )
            } 
            else {
                alert( "Cometí un error programando la elección del computador 🙃" )
            }
			
        </script>
    </head>
    <body>
        <h1>Piedra, papel o tijera</h1>
    </body>
</html>
```

#### ¿Quién gana y quién pierde?

Crea un nuevo apartado para saber si ganas o pierdes. Allí debes escribir condiciones para evaluar:

- Cuándo empatas.
- Cuándo ganas.
- Cuándo pierdes.

Luego de evaluar esto, utiliza un `alert()` para informarle al jugador si ganó, empató o perdió 👍

💡 Ojo, puedes evaluar varias condiciones a la vez en un solo `if` si separas las condiciones con un `&&`. Por ejemplo:

```javascript
if ( eleccionDelJugador = 1 && eleccionDelComputador = 3 ) {
    alert( "¡GANASTE! 🥳" );
}
```

Empieza escribiendo la condición de empate (que es la más fácil) y luego escribe las demás. Inténtalo, pruébalo en el navegador, cambia la elección del computador para validar que en serio todo funciona, y luego compara tu código con el ejemplo de abajo 👍

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Algoritmo piedra, papel o tijera</title>
        <script>
            //OBTENIENDO LA ELECCIÓN DEL JUGADOR
            let eleccionDelJugador = 0;
            eleccionDelJugador = prompt( "Elige: 1 para 🥌, 2 para 📄, 3 para ✂️" );
            // alert( "Elegiste " + jugador );

            //INFORMANDO LA ELECCIÓN DEL JUGADOR
            if ( eleccionDelJugador == 1 ) {
                alert( "Elegiste 🥌" );
            } 
            else if ( eleccionDelJugador == 2 ) {
                alert( "Elegiste 📄" )
            } 
            else if ( eleccionDelJugador == 3 ) {
                alert( "Elegiste ✂️" )
            } 
            else {
                alert( "Elegiste otra cosa, así no puedes jugar 😣" )
            }

            //OBTENIENDO LA ELECCIÓN DEL COMPUTADOR
            let eleccionDelComputador = 1;
			
            //INFORMANDO LA ELECCION DEL COMPUTADOR
            if ( eleccionDelComputador == 1 ) {
                alert( "La computadora eligió 🥌" );
            } 
            else if ( eleccionDelComputador == 2 ) {
                alert( "La computadora eligió 📄" )
            } 
            else if ( eleccionDelComputador == 3 ) {
                alert( "La computadora eligió ✂️" )
            } 
            else {
                alert( "Cometí un error programando la elección del computador 🙃" )
            }
			
            //DECIDIENDO EL GANADOR
            if ( eleccionDelJugador == eleccionDelComputador ) {
                alert( "¡EMPATE! 🤼" );
            }
            else if ( eleccionDelJugador == 1 && eleccionDelComputador == 3 ) {
                alert( "¡GANASTE! 🥳" );
            }
            else if ( eleccionDelJugador == 2 && eleccionDelComputador == 1 ) {
                alert( "¡GANASTE! 🥳" );
            }
            else if ( eleccionDelJugador == 3 && eleccionDelComputador == 2 ) {
                alert( "¡GANASTE! 🥳" );
            }
            else {
                alert( "PERDISTE... 😢" );
            }

        </script>
    </head>
    <body>
        <h1>Piedra, papel o tijera</h1>
    </body>
</html>
```

¿Te divertiste?

Existen muchos caminos para llegar a la misma solución. Puedes abordar el problema de varias formas y personalizarlo a tu gusto. Si te dio error en algún lado, no te preocupes. Resolver errores en el código es la mitad del trabajo de un programador. Desarrolla tu tolerancia a la frustración, y tómalo como parte del oficio.

Experimenta un poco con tu código, personalízalo y cuando estés listo continúa a la clase de [aleatoriedad](https://platzi.com/clases/3208-programacion-basica/51986-aleatoriedad/) para que aprendas a hacer que la computadora elija por si misma lo que va a jugar 😁

### 10. Aleatoriedad

#### El objeto “Math” en JavaScript

En JavaScript existen entidades llamadas “Objetos” que guardan dentro de ellas variables (que se llaman “propiedades” cuando viven dentro de un objeto) y funciones (que se llaman “métodos” cuando viven dentro de un objeto.

En este sentido, **Math** es un objeto especial en JavaScript que contiene dentro de él numerosas funciones y valores que son esenciales para hacer cálculos matemáticos, como el número PI o la función de redondear números decimales.

#### ¿Cómo usar el objeto Math de JavaScript?

Debes escribir “Math” (atención a la “M” en mayúscula), luego un punto (”.”) y finalmente la propiedad o método que desees invocar.

Si deseas invocar un método, recuerda que debes escribir los paréntesis “( )” para que el método se ejecute.

#### Ejemplos de propiedades

|Propiedades de Math|Para qué sirve|
|---|---|
|`Math.PI`|Cuándo el código se ejecuta, el navegador sustituye esto por el número PI.|
|`Math.E`|Cuándo el código se ejecuta, el navegador sustituye esto por la constante de Euler.|

#### Ejemplos de métodos

|Métodos de Math|Para qué sirven|
|---|---|
|`Math.ceil()`|Redondea hacia arriba el número decimal que esté entre los paréntesis, hasta convertirlo en un número entero.|
|`Math.floor()`|Redondea hacia abajo el número decimal que esté entre los paréntesis, hasta convertirlo en un número entero.|
|`Math.round()`|Redondea el número decimal entre paréntesis hacia el entero más cercano.|
|`Math.random()`|Retorna un número decimal aleatorio entre el 0 (incluido) y el 1 (excluido).|

Prueba estos valores y métodos en la consola del navegador 🙂

#### ¿Cómo declarar funciones en JavaScript?

Cuando encuentras un segmento de código que puede repetirse dentro del programa, o que ejecuta un proceso muy específico dentro de tu código, entonces lo ideal es encapsularlo en una función.

Hay varias formas de declarar una función. Pero la más básica de todas consiste en escribir la palabra reservada `function`, seguida de la función con sus parámetros entre paréntesis, y el bloque de código entre llaves `{ }`.

Ejemplo:

```javascript
function hacerAlgo( param1 , param2 ) {
    let resultado = param1 + param2;
    return resultado;
}

hacerAlgo( 3 , 4 ); //Devuelve 7
```

Cuando ejecutas la función, esta ejecuta todo el código que insertaste dentro de las llaves `{ }` cuando la declaraste. De este modo, puedes ejecutar la función tantas veces como necesites con solo declararla una vez.

Cuando la declaras, puedes indicar parámetros y usarlos dentro del bloque de código. Luego, cuando la ejecutes, esos parámetros se sustituirán con los valores que escribas entre paréntesis al momento de ejecutarla.

También puedes utilizar la palabra reservada `return` dentro del bloque de código de la función para que, al ejecutarla, recibas el valor que indiques luego de escribir `return` (ojo, cuando la función llega a un `return`, su ejecución se detiene. Los comandos que escribas después de un `return` no se van a ejecutar).

Haz algunos experimentos con esto en la consola antes de continuar 😉

#### Generando una elección aleatoria para el computador

Intentemos ahora emplear lo aprendido para hacer que la computadora elija piedra, papel o tijera por si sola. Para hacerlo, primero tenemos que entender cómo funcionaría el algoritmo que le permite hacer la selección, y luego tendríamos que introducirlo en nuestro código.

##### Algoritmo de selección aleatoria

Primero necesitamos generar un número aleatorio. Ya sabemos que `Math.random()` nos entrega un número aleatorio entre 0 y 1. Sin embargo, nuestro juego necesita un número aleatorio entre 3 y 1 para funcionar. ¿Se te ocurre cómo podrías crearlo con código?

Para lograrlo, la operación sería esta:

```javascript
Math.random() * ( max - min + 1 ) + min
```

Si consideramos que nuestro valor máximo es 3 y el mínimo es 1, esto nos garantiza que siempre obtendremos un número entre 3.9999’ y 1. Por lo tanto, solo tendríamos que meter todo dentro de un `Math.floor()` para obtener un valor aleatorio entre 3 y 1.

![Formula para emitir números aleatorios en un rango](https://static.platzi.com/media/articlases/Images/10-1%20-%20Formula%20para%20emitir%20n%C3%BAmeros%20aleatorios%20en%20un%20rango.jpg)

Por lo tanto, para conseguir que la computadora elija aleatoriamente, necesitaríamos el siguiente código:

```javascript
//OBTENIENDO LA ELECCIÓN DEL COMPUTADOR
let max = 3;
let min = 1;
let eleccionDelComputador = Math.floor( Math.random() * ( max - min + 1 ) + min );
```

Introduce esto en tu código, y prueba a ver como funciona 🙂

#### Convirtiendo el algoritmo en una función

Ahora, ¿por qué no intentas convertir eso en una función? Te dejaré una posible solución aquí abajo para que compares, pero intenta hacerlo por tu cuenta antes de fijarte en ella 😉

```javascript
//OBTENIENDO LA ELECCIÓN DEL COMPUTADOR
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
let eleccionDelComputador = numeroAleatorio( 1 , 3 );
```

Haz el cambio y prueba tu juego 😁 Sin embargo, ¿Crees que podrías escribir el mismo código en menos líneas? 🤔 No hablo de borrar espacios o líneas, hablo de emplear una lógica diferente para llegar al mismo resultado. Una que requiera menos pasos, y que aun así llegue al mismo sitio 🙂

Piensa un poco al respecto, experimenta un poco, y cuando estés satisfecho y todo funcione, acompáñame a aprender más sobre como [usar funciones para mejorar la calidad de tu código](https://platzi.com/clases/3208-programacion-basica/51987-refactoring-de-funciones/) 😉 Nos vemos allá 😁## El objeto “Math” en JavaScript

En JavaScript existen entidades llamadas “Objetos” que guardan dentro de ellas variables (que se llaman “propiedades” cuando viven dentro de un objeto) y funciones (que se llaman “métodos” cuando viven dentro de un objeto.

En este sentido, **Math** es un objeto especial en JavaScript que contiene dentro de él numerosas funciones y valores que son esenciales para hacer cálculos matemáticos, como el número PI o la función de redondear números decimales.

#### ¿Cómo usar el objeto Math de JavaScript?

Debes escribir “Math” (atención a la “M” en mayúscula), luego un punto (”.”) y finalmente la propiedad o método que desees invocar.

Si deseas invocar un método, recuerda que debes escribir los paréntesis “( )” para que el método se ejecute.

### Ejemplos de propiedades

|Propiedades de Math|Para qué sirve|
|---|---|
|`Math.PI`|Cuándo el código se ejecuta, el navegador sustituye esto por el número PI.|
|`Math.E`|Cuándo el código se ejecuta, el navegador sustituye esto por la constante de Euler.|

##### Ejemplos de métodos

|Métodos de Math|Para qué sirven|
|---|---|
|`Math.ceil()`|Redondea hacia arriba el número decimal que esté entre los paréntesis, hasta convertirlo en un número entero.|
|`Math.floor()`|Redondea hacia abajo el número decimal que esté entre los paréntesis, hasta convertirlo en un número entero.|
|`Math.round()`|Redondea el número decimal entre paréntesis hacia el entero más cercano.|
|`Math.random()`|Retorna un número decimal aleatorio entre el 0 (incluido) y el 1 (excluido).|

Prueba estos valores y métodos en la consola del navegador 🙂

#### ¿Cómo declarar funciones en JavaScript?

Cuando encuentras un segmento de código que puede repetirse dentro del programa, o que ejecuta un proceso muy específico dentro de tu código, entonces lo ideal es encapsularlo en una función.

Hay varias formas de declarar una función. Pero la más básica de todas consiste en escribir la palabra reservada `function`, seguida de la función con sus parámetros entre paréntesis, y el bloque de código entre llaves `{ }`.

Ejemplo:

```javascript
function hacerAlgo( param1 , param2 ) {
    let resultado = param1 + param2;
    return resultado;
}

hacerAlgo( 3 , 4 ); //Devuelve 7
```

Cuando ejecutas la función, esta ejecuta todo el código que insertaste dentro de las llaves `{ }` cuando la declaraste. De este modo, puedes ejecutar la función tantas veces como necesites con solo declararla una vez.

Cuando la declaras, puedes indicar parámetros y usarlos dentro del bloque de código. Luego, cuando la ejecutes, esos parámetros se sustituirán con los valores que escribas entre paréntesis al momento de ejecutarla.

También puedes utilizar la palabra reservada `return` dentro del bloque de código de la función para que, al ejecutarla, recibas el valor que indiques luego de escribir `return` (ojo, cuando la función llega a un `return`, su ejecución se detiene. Los comandos que escribas después de un `return` no se van a ejecutar).

Haz algunos experimentos con esto en la consola antes de continuar 😉

#### Generando una elección aleatoria para el computador

Intentemos ahora emplear lo aprendido para hacer que la computadora elija piedra, papel o tijera por si sola. Para hacerlo, primero tenemos que entender cómo funcionaría el algoritmo que le permite hacer la selección, y luego tendríamos que introducirlo en nuestro código.

##### Algoritmo de selección aleatoria

Primero necesitamos generar un número aleatorio. Ya sabemos que `Math.random()` nos entrega un número aleatorio entre 0 y 1. Sin embargo, nuestro juego necesita un número aleatorio entre 3 y 1 para funcionar. ¿Se te ocurre cómo podrías crearlo con código?

Para lograrlo, la operación sería esta:

```javascript
Math.random() * ( max - min + 1 ) + min
```

Si consideramos que nuestro valor máximo es 3 y el mínimo es 1, esto nos garantiza que siempre obtendremos un número entre 3.9999’ y 1. Por lo tanto, solo tendríamos que meter todo dentro de un `Math.floor()` para obtener un valor aleatorio entre 3 y 1.

![Formula para emitir números aleatorios en un rango](https://static.platzi.com/media/articlases/Images/10-1%20-%20Formula%20para%20emitir%20n%C3%BAmeros%20aleatorios%20en%20un%20rango.jpg)

Por lo tanto, para conseguir que la computadora elija aleatoriamente, necesitaríamos el siguiente código:

```javascript
//OBTENIENDO LA ELECCIÓN DEL COMPUTADOR
let max = 3;
let min = 1;
let eleccionDelComputador = Math.floor( Math.random() * ( max - min + 1 ) + min );
```

Introduce esto en tu código, y prueba a ver como funciona 🙂

#### Convirtiendo el algoritmo en una función

Ahora, ¿por qué no intentas convertir eso en una función? Te dejaré una posible solución aquí abajo para que compares, pero intenta hacerlo por tu cuenta antes de fijarte en ella 😉

```javascript
//OBTENIENDO LA ELECCIÓN DEL COMPUTADOR
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
let eleccionDelComputador = numeroAleatorio( 1 , 3 );
```

Haz el cambio y prueba tu juego 😁 Sin embargo, ¿Crees que podrías escribir el mismo código en menos líneas? 🤔 No hablo de borrar espacios o líneas, hablo de emplear una lógica diferente para llegar al mismo resultado. Una que requiera menos pasos, y que aun así llegue al mismo sitio 🙂

Piensa un poco al respecto, experimenta un poco, y cuando estés satisfecho y todo funcione, acompáñame a aprender más sobre como [usar funciones para mejorar la calidad de tu código](https://platzi.com/clases/3208-programacion-basica/51987-refactoring-de-funciones/) 😉 Nos vemos allá 😁

### 11. Refactor del código usando funciones

#### Funciones en JavaScript

Piensa en tu mente como si fuera un programa de computadora. Cepillarte los dientes es una tarea de todos los días. Entonces ¿escribirías de nuevo el código para cepillar tus dientes todos los días?

Pues, no. Lo que harías es guardar los pasos en tu memoria (con una función), y luego invocarlos cada vez que tengas que cepillarte los dientes.

Lo mismo ocurre en la programación. Solo tienes que seguir la regla de oro: **Si tienes que copiar el código y pegarlo en otro lado, entonces mejor conviértelo en una función.** Así puedes invocarlo tantas veces necesites.

#### ¿Cómo declarar funciones en JavaScript?

Hay varias formas de declarar una función. Pero la más básica de todas consiste en escribir la palabra reservada `function`, seguida de la función con sus parámetros entre paréntesis, y el bloque de código entre llaves `{ }`.

Ejemplo:

```javascript
function hacerAlgo( param1 , param2 ) {
    let resultado = param1 + param2;
    return resultado;
}

hacerAlgo( 3 , 4 ); //Devuelve 7
```

💡 Cuando ejecutas la función, esta ejecuta todo el código que insertaste dentro de las llaves `{ }` cuando la declaraste. De este modo, puedes ejecutar la función tantas veces como necesites con solo declararla una vez.

💡 Cuando la declaras, puedes indicar parámetros y usarlos dentro del bloque de código. Luego, cuando la ejecutes, esos parámetros se sustituirán con los valores que escribas entre paréntesis al momento de ejecutarla.

💡 También puedes usar la palabra reservada `return` dentro del bloque de código de la función para que, al ejecutarla, recibas el valor que indiques luego de escribir `return` (ojo, cuando la función llega a un `return`, su ejecución se detiene. Los comandos que escribas después de un `return` no se van a ejecutar).

💡 Ojo, todas las funciones deben empezar por una letra. No pueden iniciar con un número o un símbolo, siempre deben empezar por una letra (y la práctica común es que sea una letra minúscula en el caso de variables y funciones).

#### ¿Cómo usar funciones en JavaScript?

Las funciones, al momento de ejecutarlas, tienen una estructura similar: Un nombre, seguido por sus parámetros entre paréntesis.

💡 Ojo, si la función no usa parámetros, igual necesitas escribir los paréntesis para que tu computadora entienda que tiene que ejecutar la función. Por ejemplo: `alert()`.

```javascript
función( parámetro1 , parámetro2 )
```

Luego tienes dos casos de uso:

- Si la función tiene el trabajo de ejecutar procesos en tu programa (ej: `alert()`), entonces puedes ejecutarla por si sola en una línea de código (como ves en el ejemplo de arriba).
- Si la función, en cambio, tiene el trabajo de usar los parámetros para calcular algo más y devolver un valor con un `return`, entonces suele usarse para asignar valores a otra variable.

Por ejemplo:

```javascript
ganador = mejorEntre( opcion1 , opcion2 );
```

![Ejemplo de función en JavaScript](https://static.platzi.com/media/articlases/Images/11-1%20ejemplo%20de%20funci%C3%B3n%20en%20JavaScript.png){height="" width=""}

#### ¿Dónde escribo las funciones?

Es una buena práctica escribir las funciones **al inicio del código**. Los navegadores suelen ser permisivos cuando creas sitios web, pero la mayoría de los lenguajes de programación son estrictos sobre este punto.

En general, declara tus funciones antes de usarlas 👍

#### Aplicando funciones al programa de piedra, papel o tijera

Es hora de mejorar la calidad del código usando funciones.

Empecemos por optimizar las alertas que indican la elección del jugador y del computador:

##### Optimizando las alertas

Si te fijas bien, el algoritmo que nos informa nuestra elección y la del computador son muy parecidos, y podemos reemplazarlo con una función:

```javascript
//INFORMANDO LA ELECCIÓN DEL JUGADOR
if ( eleccionDelJugador == 1 ) {
    alert( "Elegiste 🥌" );
} else if ( eleccionDelJugador == 2 ) {
    alert( "Elegiste 📄" )
} else if ( eleccionDelJugador == 3 ) {
    alert( "Elegiste ✂️" )
} else {
    alert( "Elegiste otra cosa, así no puedes jugar 😣" )
}

//INFORMANDO LA ELECCION DEL COMPUTADOR
if ( eleccionDelComputador == 1 ) {
    alert( "La computadora eligió 🥌" );
} else if ( eleccionDelComputador == 2 ) {
    alert( "La computadora eligió 📄" )
} else if ( eleccionDelComputador == 3 ) {
    alert( "La computadora eligió ✂️" )
} else {
    alert( "Cometí un error programando la elección del computador 🙃" )
}
```

Intenta hacerlo por tu cuenta, luego puedes compararla con la posible solución de abajo.

💡 Ojo, esta igual necesita que la encajes bien con tu código para que el programa siga funcionando. Así que no temas experimentar y hacer ajustes poco a poco para que funcione el juego. Al final te mostraré un ejemplo con el código completo usando funciones 😉

```javascript
//FUNCIÓN PARA LAS ALERTAS
function alertaDeElecciones( quienElije , eleccion ) {
    if ( eleccion == 1 ) {
        alert( "El " + quienElije + " eligió 🥌" );
    } else if ( eleccion == 2 ) {
        alert( "El " + quienElije + " eligió 📄" )
    } else if ( eleccion == 3 ) {
        alert( "El " + quienElije + " eligió ✂️" )
    } else {
        alert( "Hubo un error con la elección del " + quienElije + " 🙃" )
    }
}
```

##### Decidiendo el ganador con una función

En estos momentos puede que no veas la necesidad de convertir esto en una función. Pero piensa por un momento que quieres convertir este juego en algo serio, que en el futuro podrías implementar un modo para dos jugadores, o una versión en línea.

En ese sentido, te conviene convertir la decisión del ganador en una función que puedas ejecutar para cualquiera de los modos de juego que implementes.

💡 Si no es por eso, al menos hazlo a modo de práctica 😅 Intenta hacerlo por tu cuenta, luego compara con la solución de abajo 👍

```javascript
//FUNCIÓN PARA DECIDIR EL GANADOR
function quienGanaEntre ( eleccionJugador , eleccionOponente ) {
    if ( eleccionJugador == eleccionOponente ) {
        alert( "¡EMPATE! 🤼" );
    } else if ( eleccionJugador == 1 && eleccionOponente == 3 ) {
        alert( "¡GANASTE! 🥳" );
    } else if ( eleccionJugador == 2 && eleccionOponente == 1 ) {
        alert( "¡GANASTE! 🥳" );
    } else if ( eleccionJugador == 3 && eleccionOponente == 2 ) {
        alert( "¡GANASTE! 🥳" );
    } else {
        alert( "PERDISTE... 😢" );
    }
}
```

##### Juego de piedra, papel o tijeras con funciones

Recuerda que, por lo general, hay varias soluciones al mismo problema. Lo que ves abajo es solo una forma de crear este pequeño videojuego.

No te preocupes si tu código aún no se ve así. Lo más importante es que lo intentes por ti mismo y llegues al resultado. Luego el tiempo y la experiencia te ayudarán a escribir código más presentable, o más optimizado 👍

```javascript
//FUNCIÓN PARA LAS ALERTAS
function alertaDeElecciones( quienElije , eleccion ) {
    if ( eleccion == 1 ) {
        alert( "El " + quienElije + " eligió 🥌" );
    } else if ( eleccion == 2 ) {
        alert( "El " + quienElije + " eligió 📄" );
    } else if ( eleccion == 3 ) {
        alert( "El " + quienElije + " eligió ✂️" );
    } else {
        alert( "Hubo un error con la elección del " + quienElije + " 🙃" );
    }
}

//FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

//FUNCIÓN PARA DECIDIR EL GANADOR
function quienGanaEntre ( eleccionJugador , eleccionOponente ) {
    if ( eleccionJugador == eleccionOponente ) {
        alert( "¡EMPATE! 🤼" );
    } else if ( eleccionJugador == 1 && eleccionOponente == 3 ) {
        alert( "¡GANASTE! 🥳" );
    } else if ( eleccionJugador == 2 && eleccionOponente == 1 ) {
        alert( "¡GANASTE! 🥳" );
    } else if ( eleccionJugador == 3 && eleccionOponente == 2 ) {
        alert( "¡GANASTE! 🥳" );
    } else {
        alert( "PERDISTE... 😢" );
    }
}

//ELECCIÓN DEL JUGADOR
let eleccionDelJugador = 0;
eleccionDelJugador = prompt( "Elige: 1 para 🥌, 2 para 📄, 3 para ✂️" );
alertaDeElecciones( "jugador" , eleccionDelJugador );

//ELECCIÓN DEL COMPUTADOR
let eleccionDelComputador = numeroAleatorio( 1 , 3 );
alertaDeElecciones( "computador" , eleccionDelComputador );

//DECIDIENDO EL GANADOR
quienGanaEntre ( eleccionDelJugador , eleccionDelComputador );
```

Contribución creada por: Jhonkar Sufia (Platzi Contributor).

### 12. Ciclos

#### ¿Cómo funcionan los ciclos?

Hay varias formas de generar ciclos en programación. Pero todos siguen la misma lógica:

1. Primero fijas las condiciones. Por ejemplo: “Mientras no sea sábado, domingo ni feriado”.
    
2. Luego indicas lo que sucederá cuando las condiciones se cumplan (operaciones, funciones a ejecutar, entre otros). Por ejemplo: “Voy a la escuela”.
    
3. Finalmente, indicas lo que sucederá cuando las condiciones dejen de cumplirse (operaciones, funciones a ejecutar, entre otros). Por ejemplo: “Me quedo en casa”.
    

![Forma estandar de ejecutar ciclos](https://static.platzi.com/media/articlases/Images/12-1%20-%20Forma%20estandar%20de%20ejecutar%20ciclos.jpg)

#### ¿Por qué usar ciclos?

En programación, en ocasiones te toparás con código que tienes que repetir varias veces para lograr el efecto deseado. Quizás puedas usar funciones para resumirlos, pero ellas no resuelven el problema cuando te ves obligado a ejecutarla una y otra vez.

En estos casos, lo mejor es programar un ciclo. De este modo, el ciclo repetirá un fragmento de código tantas veces como sea necesario hasta que deje de cumplirse la condición que indicaste.

💡 Ojo, es importante que en el código escribas un modo de que el ciclo termine. Generalmente se hace aplicando en cada repetición una pequeña modificación a la variable donde se observa la condición.

Por ejemplo, en el ciclo de ir a la escuela que vimos arriba, cada vez que evaluamos la condición va a pasar un día. De ese modo, tarde o temprano llegaríamos al fin de semana o a un día feriado, y no sería necesario ir a la escuela.

Tu computadora no se va a quemar si por error escribes un ciclo infinito. Pero tu programa fallará cuando lo ejecute.

### 13. Gana 3 veces

#### Fundamentos para la práctica

Antes de empezar a hacer modificaciones, repasemos los fundamentos que te permitirán hacerlo:

##### Operadores de comparación en JavaScript

Hay algunos operadores que te ayudarán a escribir condiciones en tu código:

|Operador|Significado|
|---|---|
|==|Retorna “verdadero” **si un lado es igual al otro** (Ojo, NO distingue entre números y strings. Por lo tanto: 3 == “3” //verdadero).|
|===|Retorna “verdadero” **si un lado es estrictamente igual al otro** (Ojo, SÍ distingue entre números y strings. Por lo tanto: 3 === “3” //falso).|
|!=|Retorna “verdadero” **si un lado es diferente del otro lado** (Ojo, NO distingue entre números y strings. Por lo tanto: 3 != “3” //falso).|
|!==|Retorna “verdadero” **si un lado es estrictamente diferente del otro lado** (Ojo, SÍ distingue entre números y strings. Por lo tanto: 3 != “3” //verdadero).|
|&&|Funciona como un “y” en la condición. Te permite juntar varias condiciones y devuelve “verdadero” **solo si todas se cumplen**.|
|<|Devuelve “verdadero” si el valor a la izquierda **es menor** que el valor a la derecha.|
|<=|Devuelve “verdadero” si el valor a la izquierda **es menor o igual** que el valor a la derecha.|
|>|Devuelve “verdadero” si el valor a la izquierda **es mayor** que el valor a la derecha.|
|>=|Devuelve “verdadero” si el valor a la izquierda **es mayor o igual** que el valor a la derecha.|

💡 También tienes el operador `||`, que funciona como un “o” en la condición. Te permite juntar varias condiciones, y devuelve “verdadero” **si alguna de ellas se cumple**.

No pudimos incluirlo en la tabla por un problema técnico, pero sientete libre de usarlo también 👍

💡 Aquí te dejo un fragmento de código que puedes copiar y pegar en la consola del navegador. Solo cambia la condición y los operadores para que experimentes como funciona cada operador 👍

```javascript
if ( X == Y ) {
	console.log( "Verdadero" );
} else {
	console.log( "Falso" );
}
```

##### Ciclos While en JavaScript

`while` es una instrucción en JavaScript (al igual que `if`) que te permite crear ciclos. Su estructura es la siguiente:

```javascript
while ( condición ) {
    //Código a ejecutar mientras se cumpla la condición
}
```

Por ejemplo:

```javascript
while ( diaDeLaSemana < 6 ) {
    irA( escuela );
    diaDeLaSemana = diaDeLaSemana + 1;
}

//El bloque de código se repetirá hasta que diaDeLaSemana = 6
```

anímate a experimentar un poco con esto, y luego acompáñame a realizar la práctica de hoy 😉

#### Cómo implementar ciclos en el juego de piedra, papel y tijera

Empecemos 😁

##### 1. Agrega variables para contar las victorias

Primero agrega un par de variables que te permitan contar cuantas victorias, derrotas y empates ha acumulado el jugador. Y también necesitas modificar el juego para que el jugador los acumule con cada partida.

Para que el juego no se sienta tan largo vamos a detenerlo luego de 2 victorias o 2 derrotas. Así que es buena idea programar una función que le informe al jugador los resultados finales, y podrías agregar una segunda función que reinicie las variables para un próximo juego.

Intenta hacerlo por tu cuenta, y cuando termines compáralo con el ejemplo de aquí abajo 🙂

```javascript
//FUNCIÓN PARA LAS ALERTAS
function alertaDeElecciones( quienElije , eleccion ) {
    if ( eleccion == 1 ) {
        alert( "El " + quienElije + " eligió 🥌" );
    } else if ( eleccion == 2 ) {
        alert( "El " + quienElije + " eligió 📄" );
    } else if ( eleccion == 3 ) {
        alert( "El " + quienElije + " eligió ✂️" );
    } else {
        alert( "Hubo un error con la elección del " + quienElije + " 🙃" );
    }
}

//FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

//FUNCIÓN PARA DECIDIR EL GANADOR
function quienGanaEntre ( eleccionJugador , eleccionOponente ) {
    if ( eleccionJugador == eleccionOponente ) {
        alert( "¡EMPATE! 🤼" );
        empates = empates + 1;
    } else if ( eleccionJugador == 1 && eleccionOponente == 3 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else if ( eleccionJugador == 2 && eleccionOponente == 1 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else if ( eleccionJugador == 3 && eleccionOponente == 2 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else {
        alert( "PERDISTE... 😢" );
        derrotas = derrotas + 1;
    }
}

//FUNCIÓN PARA NOMBRAR AL GANADOR FINAL
function mostrarResultados() {
    alert("Has acumulado " + 
        victorias + " victorias, " + 
        derrotas + " derrotas y " + 
        empates + " empates.");

    if ( victorias == 2 ) {
        alert( "TÚ eres el GANADOR" );
        resetearVariables();
    } else if ( derrotas == 2 ) {
        alert( "EL COMPUTADOR es el GANADOR" );
        resetearVariables();
    } else {
        alert( "Hubo un error... 🙃");
        resetearVariables();
    }
}

//FUNCIÓN PARA RESETEAR VARIABLES DE VICTORIAS
function resetearVariables() {
    victorias = 0;
    derrotas  = 0;
    empates   = 0;
}

//ELECCIÓN DEL JUGADOR
let eleccionDelJugador = 0;
eleccionDelJugador = prompt( "Elige: 1 para 🥌, 2 para 📄, 3 para ✂️" );
alertaDeElecciones( "jugador" , eleccionDelJugador );

//ELECCIÓN DEL COMPUTADOR
let eleccionDelComputador = numeroAleatorio( 1 , 3 );
alertaDeElecciones( "computador" , eleccionDelComputador );

//DECIDIENDO EL GANADOR
let victorias = 0;
let derrotas  = 0;
let empates   = 0;
quienGanaEntre ( eleccionDelJugador , eleccionDelComputador );
```

##### 2. Implementa el ciclo “while”

Es momento de implementar el ciclo en tu código. Para hacerlo, ten presente la siguiente información:

- El juego se detiene cuando el jugador acumule dos victorias o dos derrotas.
- La elección del jugador y del computador debe repetirse en cada ciclo.
- Al completar el ciclo, debes mostrarle los resultados al jugador y resetear las variables de juego.

Hacer esto requiere que muevas algunas cosas dentro del código. Intenta hacerlo por tu cuenta, y luego lo comparas con el código aquí abajo 😉

```javascript
//FUNCIÓN PARA LAS ALERTAS
function alertaDeElecciones( quienElije , eleccion ) {
    if ( eleccion == 1 ) {
        alert( "El " + quienElije + " eligió 🥌" );
    } else if ( eleccion == 2 ) {
        alert( "El " + quienElije + " eligió 📄" );
    } else if ( eleccion == 3 ) {
        alert( "El " + quienElije + " eligió ✂️" );
    } else {
        alert( "Hubo un error con la elección del " + quienElije + " 🙃" );
    }
}

//FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

//FUNCIÓN PARA DECIDIR EL GANADOR
function quienGanaEntre ( eleccionJugador , eleccionOponente ) {
    if ( eleccionJugador == eleccionOponente ) {
        alert( "¡EMPATE! 🤼" );
        empates = empates + 1;
    } else if ( eleccionJugador == 1 && eleccionOponente == 3 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else if ( eleccionJugador == 2 && eleccionOponente == 1 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else if ( eleccionJugador == 3 && eleccionOponente == 2 ) {
        alert( "¡GANASTE! 🥳" );
        victorias = victorias + 1;
    } else {
        alert( "PERDISTE... 😢" );
        derrotas = derrotas + 1;
    }
}

//FUNCIÓN PARA NOMBRAR AL GANADOR FINAL
function mostrarResultados() {
    alert("Has acumulado " + 
        victorias + " victorias, " + 
        derrotas + " derrotas y " + 
        empates + " empates.");

    if ( victorias == 2 ) {
        alert( "TÚ eres el GANADOR" );
        resetearVariables();
    } else if ( derrotas == 2 ) {
        alert( "EL COMPUTADOR es el GANADOR" );
        resetearVariables();
    } else {
        alert( "Hubo un error... 🙃");
        resetearVariables();
    }
}

//FUNCIÓN PARA RESETEAR VARIABLES DE VICTORIAS
function resetearVariables() {
    victorias = 0;
    derrotas  = 0;
    empates   = 0;
}

//ELECCIÓN DEL JUGADOR
let eleccionDelJugador = 0;

//ELECCIÓN DEL COMPUTADOR
let eleccionDelComputador = 0;

//DECIDIENDO EL GANADOR
let victorias = 0;
let derrotas  = 0;
let empates   = 0;

while ( victorias < 2 && derrotas < 2 ) {
    eleccionDelJugador    = prompt( "Elige: 1 para 🥌, 2 para 📄, 3 para ✂️" );
    eleccionDelComputador = numeroAleatorio( 1 , 3 );

    alertaDeElecciones( "jugador"    , eleccionDelJugador    );
    alertaDeElecciones( "computador" , eleccionDelComputador );

    quienGanaEntre ( eleccionDelJugador , eleccionDelComputador );
}

mostrarResultados();
```

---

Anímate a probarlo algunas veces y sientete orgulloso de lo que haz logrado 🥳 En el futuro te enseñaremos a crear un botón en tu sitio web que puedes configurar para que inicie el juego cuando alguien lo presione 🙂 Pero, mientras tanto, acompañame a aprender [cómo funciona la estructura de archivos de un sitio web](https://platzi.com/clases/3208-programacion-basica/51990-archivos-de-html-y-javascript/) 😉

### 14. Archivos de HTML y JavaScript

#### Estructura de archivos

Toda computadora, e incluso los teléfonos, emplean la misma estructura de archivos. Esto es un árbol de carpetas dónde se almacena toda la información del ordenador. En ese sentido, tienes carpetas dedicadas a diferentes objetivos y todo vive dentro de estas carpetas.

#### Estructura de archivos según el sistema operativo

💡 En Windows, la carpeta raíz es el disco duro (comúnmente llamado “C:”).

> ¿Por qué una “C:”? Pues, alguien le asignó la “A:” y la “B:” a los disquetes o “Floppy disc” de antes. Así que los discos duros empiezan a contar a partir de la “C:”.

💡 En el caso de Linux, la carpeta raíz es el “home”. Desde ahí parte todo, incluyendo tu carpeta de usuario donde guardas todo lo demás.

💡 el caso de una web no es muy diferente. La carpeta raíz generalmente es tu dominio web (ej.: “[www.platzi.com](http://www.platzi.com/)”). Y desde ahí parten todas las carpetas y archivos que componen tu sitio web.

💡 **Ojo**

Windows tiene una particularidad en su estructura de archivos: Windows no presta atención a las mayúsculas en los nombres de carpetas o archivos. Pero todos los demás sí. La mayoría de los servidores web son Linux. Y **en Linux, la carpeta “Documentos/” es diferente a la carpeta “documentos/”.**

Presta mucha atención al uso de mayúsculas en los nombres de archivos para tu sitio web. Y, preferiblemente, escribe todos los nombres en minúscula. En el caso de nombres compuestos, puedes utilizar “_” para separar las palabras (de_este_modo.txt).

![Estructura de archivos de tu computadora](https://static.platzi.com/media/articlases/Images/14-1%20-%20Estructura%20de%20archivos%20de%20tu%20computadora.jpg)

#### Estructura de archivos relativa

Para escribir una ruta absoluta, tienes que empezar por la carpeta raíz y escribir la dirección carpeta por carpeta, hasta llegar al archivo que estás buscando. Por ejemplo:

/home/Freddier/docs/cursito/codigo.html. Sin embargo, recuerda que naturalmente puedes navegar entre carpetas (en especial si lo haces desde la terminal de comandos, o desde el explorador de archivos).

Cuando navegas hacia una carpeta, esta se convierte en tu **posición relativa**. Y en programación, puedes aprovechar tu posición relativa para referir a todos los archivos que necesites dentro de esa carpeta, o incluso un nivel afuera. Por ejemplo, si estás dentro de la carpeta “programar/”, entonces puedes hacer referencia a un archivo dentro de ella simplemente por si nombre, o por la dirección que sigue luego.

Dentro de “programar/” puedes invocar archivos que viven dentro de ella tan fácil como escribir como “imágenes/foto.jpg” o “juego.html”

💡 Esto es importante porque tu sitio web tiene una estructura de carpetas como esta, dónde se guardan todos los archivos que vas a usar.

Sin embargo, **para que el usuario pueda observarlos, antes tienes que ejecutarlos desde el HTML**. Y eso significa que tendrás que escribir estas rutas de archivos con mucha frecuencia dentro de tu código.

![Estructura de archivos por carpeta](https://static.platzi.com/media/articlases/Images/14-2%20-%20Estructura%20de%20archivos%20por%20carpeta.jpg)

#### Estructura de archivos de un sitio web

Todo empieza por la carpeta dónde se encuentra el proyecto. Allí es dónde suelen estar los archivos HTML del sitio web.

Sin embargo, archivos complementarios como imágenes, código JavaScript o las hojas de estilos CSS suelen vivir en carpetas diferentes dentro de la carpeta del proyecto, cada una dedicada a un tipo de archivo.

💡 Aunque puedes escribir el código directamente en el archivo HTML, la mejor práctica es escribirlo en archivos separados.

Recuerda que en muchas ocasiones los archivos pueden volverse muy extensos y complejos. Por esa razón, lo ideal es tener al menos un archivo para el HTML, otro para el CSS y otro para el código JavaScript. Esto también te beneficia en tu editor de código porque si trabajas en un archivo con un solo lenguaje, le das la oportunidad al editor de código de brindarte todo el soporte que ya tiene para ese lenguaje.

💡 Puedes invocar el código en otros archivos a través de etiquetas HTML con sus respectivos atributos.

Para ejecutar un archivo CSS se usa:

```html
<link href="css/estilos.css" rel="stylesheet">
```

Y para ejecutar un archivo JavaScript, colocas:

```html
<script src="js/codigo.js"></script>
```

💡 Es importante que coloques la extensión correcta para los archivos. Si los escribes mal, el navegador no podrá cargarlos para construir tu sitio web.

Si estás en Windows, recuerda activar la opción para ver las extensiones de los archivos desde el explorador de archivos → vista → mostrar u ocultar → Extensiones de nombre de archivo.

![Activar la opción de ver las extensiones de archivos](https://static.platzi.com/media/articlases/Images/14-3%20-%20Activar%20la%20opci%C3%B3n%20de%20ver%20las%20extensiones%20de%20archivos%20.jpg)

---

Conocer y dominar la estructura de archivos es una habilidad fundamental para un programador.

De hecho, existe otra habilidad que es de mucha ayuda para programadores, que consiste en dominar la terminal y línea de comandos. Esto es relevante para dominar Git o para programar en backend. Si te interesa, puedes profundizar más en el [curso de terminal y línea de comandos de Platzi](https://platzi.com/cursos/terminal/).

Pero no dejes de completar este curso. Así que empieza por separar el código JavaScript del HTML en nuestro [juego de piedra, papel o tijera](https://platzi.com/clases/3208-programacion-basica/51984-algoritmo-de-piedra-papel-o-tijera/), y conéctalos con el atributo de la etiqueta `<script>` que conociste más arriba (y no olvides revisar la indentación luego de copiar y pegar).

Válida que tu juego aún funciona, puedes usar los archivos de la clase como punto de comparación si lo necesitas. Y cuando termines continúa a la siguiente clase, donde aprenderemos sobre [qué es el DOM](https://platzi.com/clases/3208-programacion-basica/51991-dom/).

### 15. ¿Qué es el DOM?

#### Partes del DOM

En el document es donde cargan todas las etiquetas HTML. Y el navegador es capaz de detectar todo lo que ocurre a estas etiquetas.

![Secciones del DOM](https://static.platzi.com/media/articlases/Images/15-1%20-%20Secciones%20del%20DOM%281%29.jpg)

#### Eventos

Cuando, por ejemplo, tú haces click en un botón () esto se considera un **evento** y el navegador es capaz de detectar cuando esto ocurre. Por lo tanto, tú puedes programar el sitio web para que ejecute código cuando ocurren estos eventos. Esto funciona amarrando funciones a eventos. De modo que cuando el evento ocurre, la función se ejecuta. Por ejemplo, **podrías programar un botón para que de inicio a un juego de piedra, papel o tijera en el navegador.**

> 💡 A esta capacidad del navegador de detectar eventos se le conoce como “escuchador de eventos” o “**Event Listener**”.

Tú puedes agregar los Event Listeners que quieras a tu código, y así lograr cosas como un menú desplegable en un sitio web, o un video que arranque en cuanto la página termine de cargar.

#### Proyecto del curso

¿Recuerdas el [juego de piedra, papel o tijera](https://platzi.com/clases/3208-programacion-basica/51984-algoritmo-de-piedra-papel-o-tijera/) que creamos antes? Pues vamos a llevarlo al siguiente nivel.

Crea una carpeta para un nuevo proyecto llamada “Mokepon” (cualquier parecido con la realidad es mera coincidencia), y reproduce el archivo HTML que encontrarás en los recursos de la clase.

Seguiremos trabajando en la estructura HTML del juego en la [próxima clase](https://platzi.com/clases/3208-programacion-basica/51992-maquetacion-con-html/). Pero antes, realiza el [quiz de este módulo del curso](https://platzi.com/clases/quiz/11815/). Eso te permitirá validar lo que aprendiste hasta ahora, y te ayudará a repasar 🙂

_Contribución creada por Jhonkar Sufia (Platzi Contributor)_.

### Quiz Fundamentos de Programación

1. ¿Qué hace el siguiente bloque de código?

```
Math.random()
```

📗 Devuelve un número aleatorio entre 0 y 1.

2. Analiza el siguiente bloque de código:

```
a = 10
b = 20
alert("La suma de 10 + 20 es: " + a + b)
```

Nos da como resultado el mensaje `La suma de 10 + 20 es: 1020`.

¿Por qué ocurre esto? ¿Cómo arreglarías el código para obtener el resultado correcto?

📗 Porque primero estamos sumando (concatenando) un texto (string) con un número y esta operación nos da como resultado otro texto con el número al final. Luego repetimos esta operación con el siguiente número y obtenemos el texto con los dos números al final.

Para obtener el resultado correcto debemos encapsular la suma de números entre paréntesis y luego sí sumar (concatenar) este resultado con el texto del mensaje.

```
a = 10
b = 20
alert("La suma de 10 + 20 es: " + (a + b))
```

3. Analiza el siguiente bloque de código:

```
saludo = "Hola"
profesor = "Freddy"
alert(saludo + profesor)
```

Nos da como resultado el mensaje `HolaFreddy`.

¿Por qué sale todo pegado? ¿Cómo arreglarías el código para obtener el resultado correcto?

📗 Porque en nuestro código nunca especificamos que debíamos insertar un espacio entre la suma (concatenación) de ambas variables. La forma de resolverlo sería agregar el espacio manualmente.

```
alert(saludo + " " + profesor)
```

## Desarrollando un juego con HTML y JavaScript

### 16. 
