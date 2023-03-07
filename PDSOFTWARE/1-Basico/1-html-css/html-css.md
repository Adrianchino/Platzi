# Curso Definitivo de HTML y CSS

## Introduccion 

Entonces, el **HTML** es un lenguaje que permite definir la estructura del contenido de una página web a través del uso de elementos envueltos en etiquetas compatibles universalmente. Esto permite que cualquier persona en el mundo con acceso a internet pueda visualizarlo.

El **lenguaje CSS** es el que describe cómo nuestros elementos en HTML serán **mostrados en una pantalla de computadora**, celular u otro dispositivo multimedia. Las hojas de estilos CSS pueden controlar el aspecto de múltiples páginas dentro del sitio a la vez con una sola hoja de estilos o documento de CSS. Entonces, a través del CSS tendrás la capacidad de **determinar el diseño**, color, fuente, entre otras características de tus elementos.

## 1. ¿Que es Fronted?

El fronted son programas que el usuario podra visualizar directamente.

Un programador Frontend debe saber de código que entienda el navegador (HTML, CSS y JavaScript) para poder usar algunos frameworks o librerías que expanden sus capacidades para crear cualquier tipo de interfaces de usuarios. 

### ⚡Herramientas que trabaja el desarrollador:

-  HTML: [Mas informacion](https://devdocs.io/html/)
-  CSS: [Mas informacion](https://devdocs.io/css/)  
- JavaScript: [Mas informacion](https://devdocs.io/javascript/)

### ⚡Los Frameworks de CSS que suelen utilizar:

-   Bootstrap: [Mas informacion](https://getbootstrap.com/)
-   Foundation CSS: [Mas informacion](https://get.foundation/)
-   Materialize CSS: [Mas informacion](https://materializecss.com/)

### ⚡Los Frameworks de JavaScript:

-   React JS: [Mas informacion](https://es.reactjs.org/)
-   Angular JS: [Mas informacion](https://angular.io/)
-   Vue JS: [Mas informacion](https://vuejs.org/)

### ⚡Preprocesadores de CSS:

-   Stylus: [Mas informacion](https://stylus-lang.com/)
-   SASS: [Mas informacion](https://sass-lang.com/)

### ⚡Compiladores / empaquetadores de JS:

-   BABEL: [Mas informacion](https://babeljs.io/)
-   Webpack: [Mas informacion](https://webpack.js.org/)

## 2. ¿Que es Backend?

**Backend** en programación corresponde al _lado opuesto_ a un Front-end en un sitio web o aplicación, ya que el Backend trabaja en el lado del servidor.

Practicamente seria lo opuesto al Front-end, manejaria lo que es la logica y progamacion hacia el servidor.

### ⚡Lenguajes de Programacion que trabaja un Backend:

-   Django  -> trabaja con Python
-   Lavarel  -> trabaja con PHP
-   Rails  -> trabaja con Ruby
-   Express  -> trabaja con JavaScript
-   Spring -> trabaja con Java

### ⚡El Backend también tiene en cuenta la infraestructura donde va a realizarse el deploy de su aplicación las cuales son: 

-   Google Cloud
-   DigitalOcean
-   AWS
-   Heroku, entre otras.

### ⚡¿Qué es deploy?

Deploy es un término famoso entre los desarrolladores web. Sin embargo, los significados que más se refieren a la práctica y pueden resumir su función son: **implantar, colocar en posición, habilitar para uso o, simplemente, publicar.**

Por último, entramos en **bases de datos**, que son las encargadas de almacenar toda la información del proyecto. Los principales tipos son:

-   Bases de datos relacionales (como MySQL)
-   Bases de datos no relacionales (como mongoDB).

##  3. ¿Qué es Full Stack?

Principalmente, el **desarrollo full stack** se refiere al uso de JavaScript en el backend y de HTML/CSS/JavaScript en el frontend para crear nuevas plataformas.

Las y los **desarrolladores Full Stack** son profesionales que se encargan tanto de la parte visual y de interacción de un sitio (frontend), como de su lógica y funcionamiento del lado del servidor (backend).

![full-stack|300](https://i.postimg.cc/3NsjFY1Q/FULL-STACK.webp)

## 4. Páginas Estáticas vs. Dinámicas

### ⚡Sitos Web Estáticos

La información que contiene se mantiene constante y estática. No se actualiza con la interacción del usuario. Es conveniente para realizar landing pages (páginas informativas o de aterrizaje) o blogs. Se mostrarán siempre iguales para todos los usuarios.

Practicamente el usuario tendra una vizualizacion de la pagina, y asi mismo no generara ningun cambio, no cuenta con una base de datos basicamente seria una pagina informativa.

Ejemplo de páginas estáticas:

-   Menú de un restaurante
-   Blog de viajes
-   Página informativa de un negocio

### ⚡Sitios Web Dinámicos (Aplicaciones Web):

Se actualizan su información con respecto a la interacción del usuario. Dependen de una base de datos, de donde extrae e ingresa información. Serán diferentes, dependiendo del usuario que la use y la información que se ingrese.

En este resumen nos afirma que se necesitara una conexion a internet  que dependiendo de la base de datos la informacion se va actualizando, con registros, fechas, etc.

Ejemplo de paginas dinamicas:

-   Sistema de reporte de ventas
-   LinkedIn
-   banca en linea

![Estatico-Dinamico](https://i.postimg.cc/T2Hz6y02/Estatico-diamico.jpg)

## Prueba

1.  ¿Qué hace un desarrollador Full Stack?  
    Maneja tecnologías específicas tanto Back-end como Front-end, pero se especializa en un lado en particular.
    
2.  ¿Qué tecnologías maneja principalmente un desarrollador Back-end?  
    Lenguajes de programación/frameworks que corran del lado del servidor, infraestructura en la nube y bases de datos.
    
3.  ¿Qué tecnologías maneja principalmente un desarrollador Front-end?  
    Estándares web: HTML, CSS y JavaScript.
    
4.  HTML da la estructura a la información que ven los usuarios y CSS el estilo a esta información ¿Qué analogía los representa mejor?  
    HTML es el esqueleto de una persona y CSS su apariencia al exterior.

##  5. HTML: anatomía de una página web

HTML (HyperText Markup Language) es un lenguaje de marcado de texto. Se utiliza para darle una estructura al sitio web que estás visitando.

### ⚡Caracteristicas básicas de HTML en una página Web:

-   Container -> contenedor principal
-   Header(cabecera de la página) -> Aquí usualmente encuentras el logo y el menú de navegación del sitio.
-   Main content(estructura principal) -> Por ejemplo, lista de publicaciones de una red social.
-   Sidebar(contenido secundario de una página) -> que usualmente se encuentra a los lados del contenido principal.
-   Footer -> pie de página. Esto se encuentra al fondo del sitio web.

![Container](https://i.postimg.cc/L5LT2NFd/container.webp)

Las etiquetas en HTML nos ayudan a diferenciar en qué parte del contenido nos encontramos.

La web se conforma de tres conceptos:

-   URL: Uniform Resource Locator. El identificador único del sitio en el navegador (por ejemplo: [https://platzi.com](https://platzi.com/)).
-   HTTP: Protocolo de transferencia de hipertexto. Es el estándar que se utiliza para enviar datos a través de paquetes entre el cliente y el servidor.
-   HTML: es el código que se emplea para estructurar el contenido de tu web, y darle sentido y propósito.

HTML son siglas que corresponden a Hyper Text Markup Language (Lenguaje de Marcado de Hipertexto).

-   Hyper Text significa que el texto tiene interactividad, conexión con otros documentos.
-   Markup significa que le pone etiquetas a los elementos. Por eso también se le conoce como un lenguaje de etiquetas.

## 6. Index y su estructura básica: Cabeza

### ⚡Índice y su estructura básica:

```html
<!-- Indica que es HTML 5 -->

<!DOCTYPE html>
<!-- Contenedor padre + Lenguaje del proyecto -->
<html lang="en"> 👈👀
<!-- Importante para el navegador y no es visual para el usuario -->
<head>
	<!-- UTF-8 para que el navegador entienda caracteres especiales -->
	<meta charset="UTF-8">
	<!-- Ayuda en la parte de SEO y define descripción de la página web -->
	<meta name="description" content="Esta página muestra gatitos">
	<!-- Posicionamiento de webs en busquedas (Mayor visibilidad en la web) -->
	<meta name="robots" content="index,follow">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Webs responsive -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Titulo de la pestaña en el navegador -->
	<title>Document</title>
	<!-- Vinvular otros archivos -->
	<link rel="stylesheet" href="./style.css">
</head>
<!-- Esto si es visible para el usuario -->
<body>

</body>
</html> 👈👀
```

👨‍💻 Alt + shift + A:  
Comentarios en Visual Studio Code.

### Resumen 

Index es la parte principal de una pagina web y cuando el index se habra en el servidor, apareceran los contenedores **Html(Padre)** y **Head y Body(Hijo)** todo lo necesario para que el proyecto corra en el navegador.

## 7. Índice y su estructura básica: Cuerpo

### ⚡Hay 2 tipos de etiquetas:

-   De contenido.- Son las etiquetas que llevan el texto, las imágenes y todo lo que se pueda renderizar en el proyecto.
-   Contenedoras.- Llevan más etiquetas adentro y nos ayudan a llevar la estructura del proyecto.

Tenemos que utilizar un HTML semántico.

```html

<!--Todo lo que viene es HTML, en DOCTYPE la etiqueta se cierra automáticamente-->

<!DOCTYPE html>
<!-- lang es el tipo de lenguaje en la que está la página -->
<html lang="es">
 
    <!--En head va todo lo que necesita el navegador para ejecutar la página-->
    <head>
        <!--Las etiquetas meta le dan información al navegador, se cierran solas-->
            <!-- charset ayudará al navegador a entender caracteres especiales -->
        <meta charset="UTF-8">
            <!-- name ayuda al CEO, content  -->
        <meta name="description" content="Esta página te mostrará fotos de gatos">
            <!-- Autorizar a los robots en buscadores para encontrar esta página -->
        <meta name="robots" content="index, follow">
            <!-- title, título de la pestaña -->
        <title>Es mi página</title>
            <!-- Dimensiones de la página -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Carga las hojas de estilo -->
        <link rel="stylesheet" href="./css/style.css">
    </head>
 
    <!--En body va todo lo que el usuario verá - texto, imágenes, etc-->
    <body>
        <!-- Header: etiqueta para el encabezado de la página-->
        <header>
            <!-- Nav se usa para la barra de navegación-->
            <nav></nav>
        </header>
        <!-- main contenido principal-->
        <main>
            <section>
                <article>
 
                </article>
            </section>
            <!-- ul Listas ordenadas-->
            <ul>
                <li>Soy una manzana</li>
            </ul>
            <!-- ol Listas desordenadas-->
            <ol>
                <li>Soy una manzana</li>
            </ol>
        </main>
        <!-- Pie de página -->
        <footer>
 
        </footer>
        <p>
            Soy un texto
        </p>
        <h1>Soy un título</h1>
        <h2>Soy otro título</h2>
        <h3>Soy otro título más</h3>
        <!--Agregar hipervínculos-->
        <a href="">Soy un link</a>
    </body>
</html>

```

### Resumen 
**Body** es la parte visible de nuestro website 😃. Es muy importante usar HTML semántico y no llenar todo de **div** para que nuestro sitio sea mejor interpretado por el navegador y por lo tanto más accesible.

## 8. ## Reto: crea tu lista de compras del supermercado:

### ⚡Desafío en html:

Soy la lista del super!

-   frutas
    1.  Manzanas
    2.  Plátano
-   Carnes
    1.  pollo
    2.  carne molida
-   Verduras
    1.  limon
    2.  Zanahoria (Enlace receta)  
        💚Creado con amor

## 9.  Anatomía de una etiqueta de HTML

![Anatomia](https://i.postimg.cc/4dFzKYCr/anatomia.png)

-   No todas las etiquetas llevan una etiqueta de cierre. Las que llevan un cierre son aquellas que albergan un contenido que nos dice a dónde nos va a llevar (nombre de la página, nombre del link).
-   Lo que va dentro de la etiqueta de apertura es un atributo (nombre del atributo = href y el valor del atributo es la url).
-   El contenido + la etiqueta = Elemento

## Prueba

1.  ¿Qué significa utilizar HTML semántico?  
    Que debo utilizar las etiquetas correspondientes para la parte del sitio que corresponda. Por ejemplo, cree un pie de página con la etiqueta `<footer>`.
    
2.  Son etiquetas básicas que van dentro de `body`:  
    header, nav, main, section, article, div, y footer.
    
3.  Son las partes de una etiqueta HTML:  
    Etiqueta de apertura, atributo, nombre de atributo, valor de atributo y etiqueta de cierre (si la tiene).
    
4.  Todas las etiquetas de HTML tienen una etiqueta de apertura y cierre.  
    Falso.
    
5.  La anatomía de una página web generalmente tiene estas partes:  
    Encabezado, Contenido principal, Barra lateral y Pie de página.
    
6.  ¿Qué significa HTML?  
    Lenguaje de marcado de hipertexto.

## 10. Tipos de imágenes

### ⚡Lossless(Sin perdida)

Son formatos sin pérdida, la calidad de imagen no se cambia, las imágenes suelen ser pesadas.

-   Capturan todos los datos del archivo original.
-   No se pierde nada del archivo original.
-   Puede comprimirse, pero podrá reconstruir su imagen al estado original

### ⚡Lossy(Con perdida)

Pierde calidad, pero se mejora el tamaño y la carga en el navegador. Las imágenes que pierden calidad llegan a ser más pequeñas pero se cargan más rápido.

-   Se aproximan a su imagen original.
-   Reduzca la cantidad de colores en su imagen o analice la imagen en busca de datos necesarios.
-   Por consiguiente, puede reducir su tamaño, lo que mejora el tiempo de carga de la página, pero pierde su calidad.

### 👉Formatos:
-   **GIF (Graphics Interchange Format)** : Formato de imagen sin pérdida, no se puede comprimir
-   **PNG 8 (Portable Network Graphics)** : Formato de imagen sin pérdida, uso de colores de 256, se utiliza para logotipos e iconos para la página (tienen transparencia).
-   **PNG 24 (Portable Network Graphics)** : Formato de imagen sin pérdida, uso de colores ilimitados, alta calidad, si intentamos comprimir no ayudará demasiado por la gran cantidad de colores (tienen transparencia).
-   **JPG / JPEG (Photographic Experts Group)** : Formato de imagen con pérdida, perdemos calidad a la hora de comprimirlas, pero llegan a ser óptimas para la carga en la página web.
-   **SVG - Vector (Scalable Vector Graphics)** : Formato de imagen muy ligero sin pérdida, con svg no perdemos calidad ya que esta compuesta por vectores.

⚡Tabla de diferencias

| ----- | Categoría | Paleta | Uso |
| - | - | - | - |
| GIF | sin pérdidas | Máximo 256 colores | Animaciones simples - Gráficos con colores planos |
| PNG-8 | sin pérdidas | Máximo 256 colores | Uso de transparencias - Sin animación - Ideal para íconos |
| PNG-24 | sin pérdidas | Colores ilimitados | Similar a PNG-8 - Maneja imágenes fijas de más colores y transparencia |
| JPG | con pérdida | Millones de colores | Imágenes fijas - Fotografía |
| SVG | Vectorial/sin pérdidas| Colores ilimitados | Gráficos / logotipos para web - Retina / pantalla de alta- Resolución |

## 11. Optimización de imágenes

No es óptimo cargar imágenes de 3 megas en nuestros proyectos, va a tardar mucho tiempo en renderizar.

Tamaño óptimo:  
- En promedio una imagen debe pesar al rededor de 70 kb.

Optimizacion de imagenes:

-   Mejora el tamaño de tus imágenes
    -   [PNG diminuto](https://tinypng.com/)
-   Retira metadatos de tus imágenes
    -   [verexif](https://www.verexif.com/)

## 12. Etiqueta img

```html
<body>
	<main>
		<section>
			<figure>
				<img src="./pics/cafe-expres.gif" alt="Descripción de un cafe-expres">
			</figure>
		</section>
	</main>
</body>

```

 -  Descargar Imágenes:
 
    -   [https://www.pexels.com/es-es/](https://www.pexels.com/es-es/)
    -   [https://unsplash.com/](https://unsplash.com/)
    -   [https://www.pexels.com/es-es/](https://www.pexels.com/es-es/)

-   Reducir el tamaño de las imagenes:

    -   [https://tinypng.com/](https://tinypng.com/)

La etiqueta img cuenta con dos atributos, el atributo “src” y el segundo atributo es “alt” ambos son importantes.

El atributo de “src” es para decir dónde se encuentra la imagen que queremos mostrar, las imágenes se pueden sacar de alguna carpeta o alguna URL que tengamos en internet.

## 13. Etiqueta figura

**_Figure_** `<figure><img /> </figure>` es una etiqueta que permite almacenar una imagen en su interior. Es una mejor práctica comparada con usar solamente un contenedor _div_. Como complemento al contenedor _figure_, se utiliza la etiqueta _figcaption_ `<figcaption></figcaption>`, que permite darle una pequeña descripción a la imagen, como el autor, fuente o algo por el estilo, que se mostrará usualmente abajo de la imagen.

### ⚡Y se veria de la siguiente forma:

```html
<body>
	<main>
		<section>
			<figure>
				<img src="./pics/cafe-expres.gif" alt="Descripción de un cafe-expres">
				<figcaption>Es una imagen de un cafe express</figcaption>
			</figure>
		</section>
	</main>
</body>

```

## 14. Etiqueta de Video

### ⚡Queda de la siguiente forma:


``` html

<body>
    <main>
        <section>
            <video controls preload="auto">
                <!-- Diferentes formatos de video -->
                <source src="./algo-mejor.mp4#t=10,15"/>
                <source src="./algo-mejor.m4v#t=10,15"/>
            </video>
        </section>
    </main>
</body>

```


La etiqueta `<video>`, tiene algunos atributos como:

-   `controls:` agrega al video los controles necesarios para reproducir, pausar y adelantar.
-   `preload = auto:` hace que el navegador cargue el video, en el momento en el que se acceda a la página.

La etiqueta `<source>`, se puede colocar dentro de una etiqueta `<video>` varias veces, para especificar diferentes rutas. Esto para asegurar que cualquier navegador pueda mostrar el video.

`src=./algo-mejor.mp4#t=6,11` -> `#t=6,11` hace referencia al segundo que quiero que empiece y finalice la reproducción de un video.

## Prueba

1.  ¿Cuál es la diferencia entre la etiqueta `<img>` y `<figure>`?  
    `<img>` nos permite solo colocar una imagen y `<figure>` permite colocar varias `<img>` con una descripción opcional.
    
2.  Son formas de optimizar el peso de las imágenes:  
    Comprimir el tamaño y retirar los metadatos de las imágenes.
    
3.  ¿De dónde nos permite traer imágenes el atributo src de la etiqueta `<img>`?  
    De una URL de internet o desde un directorio.
    
4.  Configurar la etiqueta `<video>` para que reproduzca automáticamente videos es:  
    Una mala práctica, esto es penalizado en múltiples navegadores y el usuario debe decidir reproducirlo.
    
5.  Son los dos tipos de imágenes con los que trabajarás:  
    Lossy (con pérdida) y Lossless (sin pérdida).

## 15. Etiqueta form e input

Es importante utilizar la etiqueta `<form></form>` para indicar que utilizaremos un formulario, además de la semántica y buenas practicas.

Dentro de estas etiquetas indicaremos los elementos del Formulario como lo son…  
`<label></label>` que será como nuestro “Contenedor” en esta ocasión. dentro de el pondremos la etiqueta `<span></span>` (No es necesario) para colocar un texto haciendo alusión al contenido esperado (nombre, contraseña, fecha etc…) y viene una de las etiquetas importantes la cual es `<input>` aquí es importante aclarar que hay muchos tipos de Input, los que verán en este ejemplo son text, password, date, time pero hay muchos mas… También esta el atributo placeholder para colocar un texto como guía dentro de la caja (Input) y este al hacer click sobre el se eliminara.

### ⚡Queda de la siguiente forma:

```html 
<body>
	<form action="">
		<label for="name">
			<span>What's your name?</span>
			<input type="text" id="name" placeholder="Your name">
		</label>
		<label for="start-platzi">
			<span>What date do you start in Platzi</span>
			<input type="date" id="start-platzi">
		</label>
		<label for="schedule">
			<span>What's your study schedule?</span>
			<input type="time" id="schedule">
		</label>
	</form>
</body>

```

## 16. Etiqueta de form e input con Calendario:

Se usa para recibir datos de hora, día, mes, año.  
El input tipo “submit” genera un botón para enviar los datos.

### ⚡Queda de la siguiente forma:

```html

<body>
	<form action="">
		<label for="time">
			<span>Time</span>
			<input type="time" id="time" name="time">
		</label>
		<label for="day">
			<span>Day</span>
			<input type="date" id="day" name="day">
		</label>
		<label for="week">
			<span>week</span>
			<input type="week" id="week" name="week">
		</label>
		<label for="month">
			<span>Month</span>
			<input type="month" id="month" name="month">
		</label>
		<input type="submit">
	</form>
</body>

```

### ⚡Otra forma:

```html

<form action="">
	<label for="calendario">
		<span>Calendario</span>
		<input type="datetime-local" id="calendario" name="calendario">
	</label>
	<input type="submit">
</form>

```

- `name=""` Se usa en las peticiones HTTP enviadas desde el navegador al servidor, estas asocian los names y sus valores, es por eso que el URL se actualiza cuando pulsabamos el submit.

- `id=""` Este atributo se usa para identificar este valor del input en cuestión para luego ser tratado por JavaScript o CSS.

### 👨‍💻Mas tipos de input:

```html
<input type=“button”>  
<input type=“checkbox”>  
<input type=“color”>  
<input type=“date”>  
<input type=“datetime-local”>  
<input type=“email”>  
<input type=“file”>  
<input type=“hidden”>  
<input type=“image”>  
<input type=“month”>  
<input type=“number”>  
<input type=“password”>  
<input type=“radio”>  
<input type=“range”>  
<input type=“reset”>  
<input type=“search”>  
<input type=“submit”>  
<input type=“tel”>  
<input type=“text”>  
<input type=“time”>  
<input type=“url”>  
<input type=“week”>

```

Convertir el código en comentarios:

-   Alt + Mayús + A

Seleccionar varias palabras iguales y modificarlas al mismo tiempo:

-   Controlar + D


## 17. Autocompletar y requerir

`Autocomplete:`  
Te ayudara a completar datos dentro de un formulario que ya hayas llenado anteriormente como nombre, código postal, correo, etc.

`Require:`  
Funciona para solicitarle al usuario un dato que no lleno de forma correcta o que hace falta para que la información pueda ser enviada.

```html

<body>
	<main>
		<form action="">
			<label for="name">
				<span>What's your name?</span>
				<input type="text" id="name" name="name" autocomplete="name" required>
			</label>
			<label for="mail">
				<span>What's your email</span>
				<input type="email" id="mail" name="mail" autocomplete="email" required>
			</label>
			<label for="country">
				<span>Where are your from?</span>
				<input type="text" id="country" name="country" autocomplete="country" required>
			</label>
			<label for="pc">
				<span>What's your Postal Code?</span>
				<input type="text" id="pc" name="pc" autocomplete="postal-code" required>
			</label>
			<input type="submit">
		</form>
	</main>
</body>

```

## 18. Seleccionar

`select` nos permite elegir una opción entre una lista de elementos posibles, pero por buenas practicas no debería usarse con muchos elementos de lo contrario nos crearía un scroll muy grande, o en si no usarse debido a que tenemos la etiqueta `input` con un atributo `“list =” "` que se comporta igual, pero le brinda una mejora experiencia al usuario ayudándolo a encontrar esa opción solo con escribir las primeras letras.

### ⚡Opción no tan buena:

```html
<select name="courses" id="">
	<option value="HTML5">HTML5</option>
	<option value="JavaScript">JavaScript</option>
	<option value="CSS3">CSS3</option>
	<option value="Python">Python</option>
</select>

```

### ⚡La manera correcta:


```html

<input list="courses">
<datalist id="courses">
	<option value="HTML5"></option>
	<option value="Java Script"></option>
	<option value="CSS3"></option>
	<option value="Python"></option>
</datalist>

```

## 19. Tipo de entrada enviar vs. Etiqueta de botón

#### ⚡Tipo de entrada enviar:

> `<input type="submit" value="Nombre" />`  
> Se usa únicamente para formularios  
> // Con el atributo value podremos cambiar el texto que se vera en el

#### ⚡Botón:

> `<button type="submit">Qué color te gusta?</button>`  
> Para cualquier otro tipo de botón en nuestro proyecto  
> // Para usar button en formularios debes agregar el type="submit"

## Prueba:

1.  ¿Cuál es la mejor práctica para generar listas de opciones en HTML?
    
    -   Con `<select>` cuando hay pocas opciones y con `<datalist>` en caso de que sean muchas.
2.  ¿De qué formas podemos crear campos de calendario con HTML?
    
    -   Creando distintos inputs para campos específicos o con un solo `<input>` que incluya fecha y hora.
3.  ¿Cuál es la forma correcta de crear formularios con HTML?
    
    -   Con las etiquetas `<form>`, `<label>` e `<input>`.
4.  ¿En qué tipo de interacciones es mejor utilizar la etiqueta `<button>` ?
    
    -   En acciones de cualquier tipo como compartir, like, etc. que no correspondan a "enviar" en un formulario.
5.  Los valores del atributo `autocomplete` se fijan automáticamente en nuestros campos de formulario.
    
    -   Falso.
6.  ¿Por qué se dice que el mejor formulario es el que no existe?
    
    -   Porque un formulario mal diseñado se vuelve una molestia para el usuario.

## 20. ¿Qué es CSS?

### ⚡Hojas de estilo en cascada:

-   Cascading style sheet, es el complemento que necesitamos para poder dar estilos a nuestras etiquetas de html.
-   Función en forma de cascada
-   Su extensión es “.css”

> HTML sería el lápiz, CSS los colores, adornos, tijeras, etc.

La analogía de la carta es perfecta! HTML para escribirla y CSS para darle estilos, pegar imágenes, fotos, crear objetos circulares y mucho mas!

## 21. ¿Cómo utilizamos CSS?: por etiqueta, selector, class y por ID

Tres metodos para hacer css:

1.  En otro archivo .css usando una etiqueta `link`en el html
2.  usando la etiqueta `style`dentro del mismo html y dentro del head -> La cual es una mala practica.
3.  Usando el atributo `style="color:aqua"`dentro de las etiquetas (embeber / inyectar) -> Tambien es una mala practica

Usando el método 1: Mandar llamar por elementos, clases o IDs desde el nuevo archivo .css para agregarle los estilos

-   Selector por elemento

```css
p {
    color: blue;
    font-size: 30px;
}
````

-   Selector por clases

```html 
<p class="nombre">Soy un texto</p>
```

```css 
.nombre {
    color: aqua;
}
```

-   Selector por DNI

```html
<p id="nombre">Otro pequeño texto</p>
```

```css
#nombre {
    color: yellow;
    font-size: 24px;
}
```

Nota: comentarios en css`/*comentario*/`

[Cheatsheet - Hoja de trucos](https://i.emezeta.com/weblog/css3-cheatsheet/css3-cheatsheet-2017-emezeta.pdf)

Páginas web para practicar Flexbox y Css Grid:

-   Flexbox: [https://flexboxfroggy.com/#es](https://flexboxfroggy.com/#es)
-   Cuadrícula CSS: [https://cssgridgarden.com/#es](https://cssgridgarden.com/#es)
-   Otra: [https://mastery.games/flexboxzombies/](https://mastery.games/flexboxzombies/)

## 22.  Pseudo clases y pseudo elementos

El nombre de archivo de estilos lo definimos nosotros pero casi siempre es principal o estilos o **estilos** . Cuando se trabaja con proyectos más grandes normalmente hay un archivo de CSS por pantalla y lleva el nombre de la pantalla.

## ¿Cómo podemos nombrar nuestras clases?

Tienen que ser acorde con lo que estamos trabajando. Vamos a usar la **Metodología BEM** que nos va a ayudar a entender como nombrar las clases.

### Metodología **BEM** 🐰

Tutorial: [https://www.youtube.com/watch?v=YaAkV--25fg](https://www.youtube.com/watch?v=YaAkV--25fg)

1.  ¿Qué es BEM?  
    `BEM (Block, Element, Modifier)`  
    Es una metodología de CSS, que nos ayuda a crear componentes reutilizables, código claro y mantener la especificidad al mínimo.  
    Esto gracias a su nomenclatura.

-   Mantener la especificación al mínimo.
-   Codigo modular.
-   Código limpio.
-   Nomenclatura (Bloque, Elemento, Modificador)

2.  ¿Qué es un bloque?  
    Un bloque en BEM, es una entidad independiente, no necesita de nadie más para existir. (Encabezado, Navegación, Formulario, Pie de página, Contenedor)
    
3.  ¿Cómo nombramos a los bloques?  
    Se les nombra con la funcionalidad del bloque.
    

```html
<nav class="nav"></nav>

<header class="header"></header>

<section class="container"></section>
```

4.  ¿Qué es un elemento?  
    Un elemento en BEM, depende directamente de un Bloque, por lo que este debe estar dentro de un bloque. (Es dependiente a un bloque y está ligado a él.)
    
5.  ¿Cómo nombramos a los elementos?  
    Se les nombra con el nombre de su bloque contenedor, dos guiones bajos y la descripción (funcionalidad) del elemento.
    

```html
<form class="form">
	<input type="text" class="form__input">
	<input type="submit" class="form__send" >
</form>

<nav class="nav">
	<a href="#" class="nav__item">Inicio</a>
	<a href="#" class="nav__item">Inicio</a>
</nav>
```

6.  ¿Qué es un modificador?  
    Un modificador en BEM, puede ser un bloque o un elemento, indican estos una modificación a dicho elemento o bloque.
    
7.  ¿Cómo nombrar a los modificadores?  
    Se les nombra, con el nombre que tenían anteriormente (bloque o elemento) se le agrega dos guiones medios y la descripción de la modificación.
    

```html
<nav class="nav">
	<a href="#" class="nav__link"></a>
	<a href="#" class="nav__link nav__link--disabled"></a>
</nav>

<header class="header header--blue">
	<input type="text" class="form__input form__input--color-gray"/>
</header>														  
```

8.  Curiosidades BEM  
    8.1 ¿Qué pasa si tengo un hijo dentro de un elemento?  
    Se nombran como un elemento

```html
<header class="block">
	<section class="block__elem1">
		<div class="block__elem2">
		</div>
	</section>
	<div class="block__elem3">
	</div>
</header>
```

8.2 ¿Una etiqueta puede tener 2 clases de un bloque? Se le llama mix en BEM y si se puede.

```html
<div class="block1 block2">
</div>
```

8.3 ¿Podemos usar modificadores globales?  
No se recomienda porque puede generar especificidad extra.

```html
<button class="button disabled"></button>
```

Documentación: [http://getbem.com/naming](http://getbem.com/naming)

### Ejemplo de nombres de clases: contenedor y contenido

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEM</title>
    <link rel="stylesheet" href="./estilos.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="nav__logo">
                <img src="./logo-spotify.png" class="nav__img">
            </div>
            <div class="nav__links">
                <a href="#" class="nav__link nav__link--color">Inicio</a>
                <a href="#" class="nav__link">Acerca de</a>
                <a href="#" class="nav__link">Contacto</a>
            </div>
        </nav>
    </header>
    <nav class="nav">
        <div class="nav__logo">
            <img src="./logo-spotify.png" class="nav__img">
        </div>
        <div class="nav__links">
            <a href="#" class="nav__link nav__link--color">Inicio</a>
            <a href="#" class="nav__link">Acerca de</a>
            <a href="#" class="nav__link">Contacto</a>
        </div>
    </nav>
</body>
</html>
```

### CSS:

```css
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body{
	font-family: Arial, Helvetica, sans-serif;    
}
.nav{
	background: slateblue;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.nav__logo {
	height: 100%;
	background: #fff;
}

.nav__img {
	height: 100%;
}   

.nav__link{
	color: #fff;
}

.nav__link--color{
	color: #000;
}
```

### Ejemplo de clase:

```html
<header>
	<nav>
		<ul class="main-nav">
			<li class="main-nav__item"><a href="">Home</a></li>
			<li class="main-nav__item"><a href="">Courses</a></li>
			<li class="main-nav__item"><a href="">Instructors</a></li>
			<li class="main-nav__item"><a href="">Blog</a></li>
		</ul>
	</nav>
</header>
```

### ⚡Algunos estilos:

-   `margin-top:`Margen arriba.
-   `list-style:`Le quita los puntos a las listas desordenadas.
-   `padding:`Espacio interno (relleno) de un contenedor/elemento(ul). Un espacio dentro de la caja.
-   `background-color:`Le da color de fondo.
-   `display: inline-block:`Coloca todo en lineal (fila) y no en bloque uno sobre otro (columna).

Nota: El navegador por si solo agrega algunos estilos a los elementos.

### ⚡Estilos agregados:

```css
.main-nav {
margin-top: 10px;
padding-left: 0;
list-style: none;
background-color: #13A4A4;
}

.main-nav__item {
	display: inline-block;
}

.main-nav__item a {
	color: white;
	padding: 5px;
	border-radius: 2px;
	text-decoration: none;
	background-color: aqua;
}
```

Ser especifico en CSS:  
Aplicar estilos solo a las etiquetas “a” usando Pseudo clases.

#### Pseudo Clases

Definir el estilo de un estado especial de un elemento.  
Agregar al final de la clase :nombreAcción

```css
.main-nav__item a:hover {
    color: blue;
}
.main-nav__item a:active {
    color: red;
}
```

-   `a:hover`Genera efecto al posicionar el cursor del mouse arriba del elemento. Es un efecto, un estado.
    
-   `a:active`Efecto al dar clic
    

#### Pseudo Elementos

Mandamos llamar a un elemento con “::”  
Define el estilo de una parte específica de un elemento.  
Agregar al final de la clase ::nombreAcción

```css
.main-nav__item a::after {
    content: " | "; /* despues del elemento, agrega esto */
}
```

-   `a::after`Agrega contenido después de la etiqueta señalada.

⚡Diferencias:

**Pseudo Classes: (:class)**  
Define el estilo `un estado`de un elemento especial [https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)

**Pseudo Elementos: (::element)**  
Define el estilo `una parte`de un elemento específico. [https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements)

**Metodología BEM**  
[https://en.bem.info/methodology/faq/#why-bem](https://en.bem.info/methodology/faq/#why-bem) [https://blog.interactius.com/metodolog%C3%ADa-css-block-element-modifier-bem-f26e69d1de3](https://blog.interactius.com/metodolog%C3%ADa-css-block-element-modifier-bem-f26e69d1de3)

**página oficial**

-   [http://getbem.com/](http://getbem.com/)
-   [http://getbem.com/naming](http://getbem.com/naming)

## 23. Anatomía de una regla de CSS

![Anatomia](https://i.postimg.cc/85yFQcbq/anatomia.png)

-   p{} Selector
-   color: Propiedad
-   rojo; El valor de la propiedad
-   color rojo; declaración

```css
Selector { /*Define que pieza será afectada */
	Property: Property value;  <- Declaration 
}
```

## 24. Modelo de caja

Los elementos se renderizan como cajas (contenedores) a las que se les pueden agregar ciertos estilos “Modelo de caja”.

![Modelo de Caja](https://i.postimg.cc/7Y21nfm5/Caja-content.webp)

-   `Margin:`puede ser un espacio externo, de la caja hacia afuera.
-   `Border:`es la linea que define a cada uno de los elementos, puede estar o no estar. Por defecto viene transparente pero le podemos poner color y ancho.
-   `Padding (relleno):`es un espacio interno, de la caja hacia dentro y nos ayuda a posicionar un poco el contenido de la caja.
-   `Content:`puede ser cualquier elemento, texto, imagen, video, etc.
-   `Width:`largo o ancho, el tamaño del contenido.
-   `Height:`el alto que queremos que tenga.

### Aqui podemos jugar con las posiciones de las cajas 

![Propiedades](https://i.postimg.cc/s2h1thGW/Especificacion.webp)

#### ⚡Otros casos:

-   `h1 {margin: 5px 10px 5px;}`: arriba - derecha e izquierda - abajo
    -   5px de arriba, 10px de derecha a izquierda y 5px hacia abajo.
-   `h1 {margin: 5px 10px}`: arriba y abajo - derecha e izquierda
    -   5px de arriba hacia abajo y 10px de derecha a izquierda.

Nota: Si solo colocamos 20px el navegador entiendo que debe colocar los 20px arriba abajo ya los costados.

### 👨‍💻Hay que tener cuidado con las dimensiones extra, siempre hay que tomarlas en cuenta

```css
* {/*selector universal*/
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
```

## 25. Herencia



