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

La **herencia** en CSS es el mecanismo mediante el cual determinadas propiedades de un elemento padre se transmiten a sus hijos. De hecho, se parece mucho a la herencia genética. Si los progenitores tienen los ojos azules, los hijos seguramente también tendrán los ojos azules.

### ⚡¿Por qué tiene CSS un mecanismo de herencia? 

Probablemente, la manera más sencilla de responder a esta pregunta sea pensar qué pasaría si no existiera la herencia. Se deberían especificar cuestiones como la familia de fuentes, el tamaño de la fuente y el color del texto individualmente para todos y cada uno de los tipos de elemento.

#### CSS nos permite tener un mayor control de esta herencia y nos ofrece 3 opciones para manejarla:

-   `Inherit`que le indica a la propiedad del elemento hijo que tome la propiedad del elemento padre más cercano
-   `Initial`es el valor que fuerza a que tome el valor por defecto que el navegador tiene definido.
-   `Unset`es una mezcla entre la etiqueta heredar e inicial, le dice a la propiedad del elemento que tome el valor del elemento padre más cercano y si no lo encuentra, a diferencia de lo que haría heredar qué es pasarse al próximo elemento padre y así hasta encontrar un valor en un elemento padre que tenga establecida esa propiedad, unset se va directo a tomar el valor por defecto del navegador.

### Ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Herencia</title>
</head>
<body>
    <main>
        <h1>I'm a title</h1>
        <p>I'm a paragraph</p>
    </main>
</body>
</html>
```

```css
html{
    font-size: 75%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1{
    font-size: inherit;
}
```

![Herencia](https://i.postimg.cc/W4QD2zFK/herencia.png)

-   h1 recibe por el navegador un tamaño especifico
-   h1 está dentro del html pero no está tomando el 75% del tamaño de fuente que le indicamos a todo nuestro html solo está tomando el tipo de fuente, así que usamos heredar en h1 para que herede esa propiedad

## 26. Especificidad en selectores

La especificidad en CSS es un grupo de reglas aplicadas a los selectores CSS para determinar qué estilo se aplica a un elemento. Cuanto más específico sea un selector, mayor será su valor en puntos y más probable será que esté presente en el estilo del elemento.

### **¿Cómo se controla el orden al declarar CSS?**

1.  Importancia:  
    Si dos declaraciones tienen la misma importancia entonces la especificidad nos va a decir que regla se aplicará, pero si dos reglas tienen la misma especificidad es el orden el que va a decidir cual es el resultado final.
    
    -   El navegador va a cargar los estilos de forma distinta (primero aplica sus estilos).
    -   Después cumple las declaraciones de las normas que vienen en nuestros estilos (todo nuestro CSS).
    -   Por último, aplique los estilos que vienen con un `“!important”`final en nuestra hoja de estilos. NO PONERLO PORQUE SI. Hay que evitarlo porque no son buenas prácticas.

2. Especificidad: De derecha a izquierda(menos importante a más importantes para el navegador).

![Especifidad](https://i.postimg.cc/MKB5NTVp/espicifidad.webp)

**¿Qué pasa si tenemos un conflicto?**  
Por ejemplo: agregamos varios estilos y ahora tenemos un conflicto que romperá otros estilos, para esto tenemos una etiqueta de html con una clase que juntas su especificidad es 0,0,0,1,1 que es más importante que solo la clase; lo mismo con un id con clase 0.0.1.1.0

-   [Calculadora de especificidad CSS.](https://www.codecaptain.io/tools/css-specificity-calculator)
-   [CSS Specificity Graph Generator - Monitorear su especificidad](https://jonassebastianohlsson.com/specificity-graph/)
    -   Colocar código CSS para monitorear su especificidad
    -   Nota: tocar la pantalla para actualizar.

**reglas de cascada**  
![Reglas](https://i.postimg.cc/pTZrpKwL/cascada.png)

3.  Orden en las fuentes (como mandas llamar los estilos o donde colocas el estilo):  
    En los estilos, las declaraciones al final del documento anularán a las que sucedan antes en caso de conflicto. Es decir, como CSS es como una cascada, los estilos que siempre se van a aplicar son los que están hasta abajo reescribiendo los de arriba. También aplica en los .css que mandemos llamar.

📌Nota: Visual Studio Code también te ayuda en esto.  
Solo tienes que pasar el mouse por encima del selector y te dar la especificad

## 27. Demostración de especificidad y orden en selectores

Se pueden usar varias clases mientras no se exceda en la cantidad de clases y por cada etiqueta no se puede tener más de un ID. El id es único y específico, solo puede existir ese id en la página. Funciona para CSS y JS.

El inspector de elementos regresa los estilos del mas importante al menos importante. (id, clases y hasta el ultimo las etiquetas)

NOTA Las clases son genéricas y los id son únicos y específicos, no podemos tener el mismo id en dos elementos al contrario que las clases.

Ejemplo:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class="page-header">
        <h1 id="page-title" class="title">Empresa</h1>
        <nav>
            <ul id="main-nav" class="nav">
                <li><a href="">Home</a></li>
                <li><a href="">Cursos</a></li>
                <li><a href="">Instructores</a></li>
                <li>
                    <a href="" class="blog">Blog</a>
                </li>
            </ul>
        </nav>
    </header>
</body>
</html>

```

```css

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

h1 {
    color: purple;
    font-family: serif;
    margin-bottom: 10px;
}

#page-title {
    font-family: Arial, Helvetica, sans-serif;
}

.title {
    font-size: 18px;
    font-family: monospace;
}

#main-nav {
    margin-top: 10px;
    list-style-type: none;
    padding-left: 0;
}

#main-nav li {
    display: inline-block;
}

#main-nav a {
    color: white;
    background-color: #13a4a4;
    padding: 5px;
    border-radius: 2px;
    text-decoration: none;
}

#main-nav .blog {
    background-color: red;
}

```

## 28. Más sobre selectores

Use id's # para estilar no son buenas prácticas sobre todo porque son muy importantes para el estilo y son específicos.

No es buena practica utilizar !important, estilos embebidos y utilizar id's para los estilos. Los id's son únicamente para el tema de especificidad.

Todo lo podemos trabajar en CSS con clases, etiquetas y pseudo elementos.

debemos:

1.  Evitar usar !importante
2.  Evitar usar estilos embebidos (Estilos en la etiqueta html).
3.  Evite usar ID para dar estilos en CSS porque tienen más peso y dan conflictos.

📌Nota: Si usan Visual Studio Code pueden ver que peso tiene el o los selectores que están usando. Solo coloca el puntero del mouse sobre los selectores y podrá verlo de la siguiente manera (ID, Class, Elemento HTML)

---

**Malas Prácticas dichas en Clase Hasta Ahora**

-   Usar tanto id en CSS
-   Usar el !importante
-   Usar la etiqueta `<style>`dentro del archivo html
-   Usar el atributo style dentro de las etiquetas html
-   Usar div para contener todo ignorando los encabezados, navegación, sección, artículo, etc.
-   No utilizar la etiqueta `<form>`para hacer formularios
-   Usando las etiquetas `<select>`y `<option>`para hacer selectores o menús desplegables.
-   No nombrar el primer archivo html del proyecto como index.html
-   No tener archivos .css para cada pantalla de un proyecto.
-   Tener todo el css junto en un solo archivo.
-   No ponerle el atributo alt a una imagen
-   Poner imágenes dentro de `<div>`una vez de`<figure>`
-   Usando textos solo en mayúsculas en HTML, en vez de utilizar el atributo de CSS, text-transform, con el valor en mayúsculas. Ya que al hacer esto pareciera que estuvieras gritando.
-   Poner videos que se reproduzcan solos.
-   No optimizar las imágenes.
-   No tener cuidado de cuál es el formato ideal para las imágenes y su respectivo peso.
-   No tener cuidado con la respectiva semántica de HTML, y con la sintaxis adecuada para CSS.
-   No cerrar las etiquetas que se cierran en sí mismas como`<br/>`
-   No comentar partes esenciales de tu código.
-   No pongas la etiqueta `<meta name=”robots” content=”index,follow”>`en tu proyecto para que los navegadores los puedan ubicar mejor.
-   No usar la etiqueta `<meta name=”viewpor” content=”width=device-width, initial-scale=1.0”>`para hacer tu proyecto responsive.
-   No poner el atributo autocomplete=”valor” en los campos de tu formulario para hacerle la vida más fácil al usuario
-   No usar el atributo requerido en los campos obligatorios de tu formulario como una primera capa de seguridad

[Los 30 selectores CSS que debes memorizar](https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

[https://stuffandnonsense.co.uk/archives/css_specificity_wars.html](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html)

## 29. Combinadores: hermanos adyacentes (combinadores)

El combinador hermano adyacente ( +) separa dos selectores y coincide con el segundo elemento solo si sigue inmediatamente al primer elemento, y ambos son hijos del mismo padre element.

[https://flukeout.github.io/](https://flukeout.github.io/)

Los combinadores (Combinators)  
Nos permiten combinar múltiples selectores y crear una mayor especificidad.

**Hermano adyacente o cercano**

```css
div + p {
	...
}
```

**Hermano general (hermano general)**

```css
div ~ p {
	...	 /*Alt + 126 = ~*/
}
```

**hijo (niño)**

```css
div > p {
	...
}
```

**descendiente (descendiente)**

```css
div p {
	...
}
```

Esto nos permite dejar a un lado a los ID que como ya vimos no pueden generar errores conforme avance el proyecto por el peso que tienen en CSS.

---

### Hermano Adyacente o Cercano

Se representa por:`+`

Ejemplo:

```html
<body>
    <div>
        <h2>Soy un h2</h2>
        <p>Soy un p 1</p>
        <h2>Soy un h2</h2>
        <h3>Soy un h3</h3>
        <p>Soy un p 2</p>
        <h2>Soy un h2</h2>
        <p>Soy un p 3</p>        
    </div>
</body>
```
 
```css
h2 + p {
  color: red;
}
```


Aplica estilo a todas las etiquetas párrafo que están cerca y debajo de una etiqueta h2. Solo afecta a los p que estan cerca (Abajo del elemento) h2

Combinadores en CSS 
[https://medium.com/sngular-devs/combinadores-en-css-bf117a8c91f5](https://medium.com/sngular-devs/combinadores-en-css-bf117a8c91f5)

## 30. Combinadores: General Hermano

### Hermano general (hermano general)

Se representa por:`~`

```css
div ~ p {
	...
}
```

Este tipo de combinador nos ayuda a seleccionar a los hermanos generales, es decir a los que comparten un mismo padre. Se representa mediante el siguiente símbolo virgulilla: ~

#### Ejemplo:

```html
<body>
    <div>
        <h2>Soy un h2</h2>
        <p>Soy un p 1</p>
        <h2>Soy un h2</h2>
        <h3>Soy un h3</h3>
        <p>Soy un p 2</p>
        <h2>Soy un h2</h2>
        <p>Soy un p 3</p>        
    </div>
</body>
```

#### En este caso div es el padre y h2 py h3 son los hermanos generales

```css
h2 ~ p {
	color: red;
}
```

En este caso va a **modificar todas las etiquetas p** porque tienen como hermano general un h2

Virgulilla alt + 126 = ~  
[https://codigos-ascii.com/equivalencia-tilde-virgulilla/](https://codigos-ascii.com/equivalencia-tilde-virgulilla/)

## 31. Combinadores: Hijo y Descendiente (Child and Descendant)

[https://flukeout.github.io/](https://flukeout.github.io/)
hijo (niño)

Se representa por:`>`

```css
div > p {
	...
}
```

El padre div que sea mayor a una etiqueta hijo párrafo. Párrafo debe ser "hijo directo" de la etiqueta div.

Ejemplo:

```html
<body>
    <div>
        <article>
            <p>Soy un texto</p>
        </article>
        <article>
            <p>Soy un texto</p>
        </article>
        <section>
            <div>
                <p>Soy un texto</p> --> Aquí👈👀
            </div>
        </section>
        <p>Soy un texto</p> --> Aquí👈👀
    </div>
</body>
```

En este caso tenemos al primer div que es padre directo de una etiqueta py otro div mas interno que tiene como hijo a otra etiqueta p, a estas etiquetas p se les aplica el estilo requerido.

CSS

```css
div > p {
    color: red;
}
```

---

### descendiente (descendiente)

```css
div p {
	...
}
```

Todas las etiquetas que están dentro de un contenedor o clase, usando el html anterior vemos que pinta todos los párrafos.

```css
div p {
    color: red;
}
```

Selector de tipo de juego: [https://flukeout.github.io/](https://flukeout.github.io/)  
Resumen: [[type-selector]]

## 32. Medidas

Tenemos 2 tipos de medidas las **Absolutas** y las **Relativas** .

Las absolutas son aquellas que se especifican en px y estas siempre tendrán ese valor, se vean en la pantalla que se vean. En medida de lo posible es trabajar mejor con medidas relativas, además de que al hacer Responsive Design nos será más flexible el sitio para modificar a nuestro gusto.

### Medidas Absolutas:

No cambia sin importar el tamaño de la pantalla dónde estamos viendo el proyecto.

-   mm=milímetros.
-   cm=centímetros.
-   en=pulgada.
-   pc=picas.
-   px=píxel.

### Medidas Relativas:

Estás si cambia dependiendo de la pantalla del dispositivo.

-   % = Porcentaje
-   em = elemento.
-   rem = raíz em (elemento).
-   width y height (min y max): también son relativos porque varían dependiendo del tamaño de la pantalla en relación con la posición en la que se encuentra en ese momento.
-   vw y vh = ancho de ventana y altura de ventana.

Cuando se genera un scroll se le llama overflow que como pudiste adivinar NO ES BUENA PRACTICA. Es importante hacerlo flexible.

```html
<body>
    <main>
        <p>Hola soy un texto ejemplo para la clase</p>
    </main>
</body>
```

```css
main {
    background-color: red;
    width: 600px;
    height: 50%;
}
```

## 33. Medidas EM

**em** es un acrónimo de elemento y lo que hace es tomar el tamaño de fuente que tenga el "padre directo". Es decir, 1em= 16 pixeles que vienen por defecto en HTML, pero si cambia el tamaño de main (padre) se modifica el valor de em (en el hijo), que ahora valdrá el valor asignado al main.

Ejemplo1:

```html
<body>
    <main class="text-container">
        <p>Soy texto ejemplo</p>
        <div>
            <p>Soy otro texto ejemplo</p>
        </div>
    </main>
</body>
```

```css
body {
  font-size: 20px;
}
.text-container {
  font-size: 1em;
}
```

Si antes el cuerpo tomaba el tamaño del html = 16px, con este cambio el tamaño de 1em será = 20px (en el hijo) porque toma el tamaño del "padre directo". En el inspector de elementos veremos las medidas iguales en padre e hijo. Así que si le coloco a main un valor de 20px y luego al párrafo le digo que sea 1em, el valor que tome will be the 20px heredados del main padre.

Ejemplo2:

```html
<body>
    <main class="text-container">
        <p>Soy texto ejemplo</p>
        <div>
            <p>Soy otro texto ejemplo</p>
        </div>
    </main>
</body>
```

```css
.text-container { 
    font-size: 1.5em;
}
```

En este caso le estamos diciendo que main tenga un tamaño de fuente de 1.5 em = 24 pixeles (regla de 3) este valor se hereda a las etiquetas hijos.

|16 píxeles | 1 em |
| - | - |
| `24px` |1,5 em|

📌Debemos tener cuidado donde utilizamos em por lo que no es de las mejores medidas, ya que se puede comportar como una bola de nieve.

## 34. Medidas REM 

La más recomendada. Rem SIEMPRE va a tener de referencia a la etiqueta raíz, en este caso siempre será el html, por lo tanto siempre será igual a 16px.

Un truco para usar rem como si ocasionara pixeles es:

```css
html{
    font-size: 62.5%;
}

p{
    font-size: 1.6rem;
}
```

¿Qué estamos haciendo aquí?

Estamos seteando una dimensión de fuente de 62.5, quiere decir que 1rem va a ser igual SIEMPRE a 10 pixeles. Si quiero 16 pixeles pongo 1.6, si quiero 20 pixeles pongo 2 rem y así sucesivamente.

Como buenas prácticas debemos usar píxeles para el tamaño de fuente y para ciertos tamaños relativos en contendores, por eso usamos rem.

✨¿Cómo se llega al 62,5%?  
Es una regla de tres simples, si para 16px corresponden 100%, para 10px será:  

`10px * 100% / 16px = 62.5%`

![REM y EM](https://i.postimg.cc/VvtyBkTH/Rem.png)

📌 Adicional:  
En visual studio code hay una extension para convertir pixel a rem. Se llama PX to REM, y lo que tengas en px con el comando ALT GR + Z te coloca en rem las medidas (Yo instalé la de Marco N)

## 35. Max/Min width

### Viewport width + Viewport height

Para cubrir la totalidad de la pantalla de manera responsive, según el dispositivo usado:

```css
main {
    width: 100vw; --> /*viewport width (50vw)*/
    height: 100vh; --> /*viewport height (50vh)*/
    background-color: purple;
}
```

Esto lo que hace es que el contenedor de main ocupe el 100% del viewport(ventana gráfica) en el width y en el height sin importar el tamaño de la pantalla. Esto nos ayuda a poder darle ciertas dimensiones a contenedores padre como main o sections.

NOTA: 50vw o una medida menor al total de la pantalla ayuda a poder darle ciertas dimensiones a contenedores padre como main o section.

✨ ¿Qué es lo que hace el margin 0 auto?

De arriba a abajo no le agrega ningún margin pero de izquierda a derecha hace que se ajuste de manera automática, por eso lo centra.

### Max/Min width

Cuando vayamos a utilizar el min y el max en el width necesitamos tener un width base (que casi siempre va a ser en porcentaje).

Básicamente es delimitar su crecimiento colocándole un mínimo y un máximo de expansión en pantallas de dispositivos diversos.

El height funciona de manera similar solo que sin un porcentaje inicial.

Ejemplo:

```html
<body>
    <main>
        <section>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem iste quae unde dolorum quasi, nihil quod tempore debitis porro? Sequi fugiat vero optio atque nihil, tenetur rerum possimus molestiae?
            Commodi unde vel praesentium, minima aut sequi enim obcaecati aspernatur illo, vitae totam maiores accusantium doloribus natus blanditiis iste deserunt? Reiciendis, ab iusto. Cumque rerum consequuntur, neque corrupti possimus velit.
            Error ipsa minus at, inventore laudantium exercitationem consequuntur vitae nihil aperiam enim. Adipisci, corporis rem consectetur facilis nulla dolores error libero consequuntur provident neque, optio veniam totam illum, obcaecati iste.
            Corporis eius deserunt quo laboriosam, harum sequi optio cumque impedit doloremque, illum, veritatis minima similique. Suscipit inventore amet sit sint iusto. Doloribus consequatur fugit, earum itaque quo pariatur cumque esse?
            Harum, vitae eum minima non tempore vel laudantium, odio iste qui eveniet ipsa, fugiat impedit maiores incidunt tempora corporis soluta quae! Aliquid corrupti est quaerat temporibus fugiat accusantium ducimus assumenda.
            Voluptatem consequatur assumenda ipsa velit consectetur molestiae vero adipisci aliquid doloremque repudiandae beatae sed repellendus corrupti, molestias rerum pariatur expedita ratione inventore eius dolorem harum quisquam tempore vitae a! Accusantium.
            Sed aliquam officia perspiciatis corrupti at dignissimos natus illo, minus possimus hic similique quae adipisci? Consectetur eos tempora quidem sint deleniti maiores? Quas labore blanditiis optio enim dolor quaerat doloribus.
            Consequatur laboriosam molestias illo, velit, assumenda, cum impedit non temporibus expedita sequi perferendis accusamus natus labore quibusdam aut error dolore dolores qui eius sed. Alias asperiores nobis atque minus necessitatibus!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos recusandae consequatur harum illum, obcaecati nemo? Doloremque minima pariatur quaerat porro facere, saepe, tenetur ratione maxime sint, dolore reprehenderit ut hic.
            Distinctio ipsum sequi inventore quisquam, quasi ad repellat, ipsam quaerat, officiis magni vitae sunt similique asperiores! Praesentium rem repellat ratione. Quis, repellat omnis repellendus nam laudantium voluptate! Dolorum, doloribus provident?
            Enim sint quaerat expedita asperiores aspernatur doloremque esse sapiente explicabo alias? Maxime rem laborum at, odit a quisquam eveniet delectus dolores quas assumenda aliquam veniam eligendi. Quae quidem corporis quas.
            Recusandae explicabo necessitatibus ullam? Enim sit expedita voluptates, deleniti deserunt dolore? Recusandae aperiam accusamus dicta nemo facere necessitatibus autem culpa soluta ab illo voluptate quaerat, ipsam pariatur et ratione. Assumenda!
            Fuga totam sapiente ea laudantium dolorum libero magni corrupti ratione quis consequuntur nemo maxime voluptates officia, id sint, maiores ab laboriosam quae sunt voluptatem tempora est repellat fugiat. Rem, facere?
            Debitis vitae natus ad, itaque ex totam molestiae non repellat esse nihil repudiandae nam est deserunt velit labore iusto. Accusamus illum ratione quibusdam iste fuga facilis id incidunt nobis rem.
            Iusto asperiores ex similique rem beatae commodi atque recusandae, necessitatibus cupiditate, itaque dicta aut! Ex eius aspernatur ut eos ab consequatur minus esse architecto, nostrum illo quos porro tempora ad.
            Quae optio numquam atque officiis obcaecati nisi nulla quaerat dolorum! A iusto non quidem, praesentium aperiam ea esse obcaecati perspiciatis harum soluta totam blanditiis distinctio, placeat ullam error quaerat earum!</p>
        </section>
    </main>
</body>
```

Cuando el texto empieza a salir del section se le llama overflow (Desbordamiento), es decir, tenemos más contenido que el mismo espacio del contenedor padre. Esto se soluciona usando min-height que le dice, la altura mínima que vas a tener es de N px pero si llegas a tener contenido que exceda los Npx crece con el contenido hasta que este deje de crecer.

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

main {
    width: 100vw;
    height: 100vh;
    background-color: purple;
}

section {
    width: 80%; -> /*Base*/
    min-width: 320px; -> /*Pone limite al minimizar la pantalla*/
    max-width: 500px; -> /*Limitar el crecimiento a un max de...*/
    /*height: 500px; -> Esto no escala pero el siguiente sí ...*/
    min-height: 500px; -> /*Mínimo de y luego crece si lo necesitas*/
    margin: 0 auto; -> /*Centra el section*/
    background-color: red;
}
```

Usar esta técnica en el padre del contenido

## 36. Position


Es la forma en la que podemos posicionar los contenedores, las cajas, las etiquetas, etc.

### Valores de position

-   **Static:** Posición por defecto de los elementos, conservan la posición y espacio de donde son colocados (estáticos). No se puede usar top, right, bottom y left en esta posición.
    
-   **Absolute:** Permanecen en la posición de donde fueron colocados pero pierden su espacio físico (se sobreponen a los elementos que ocupan dicho espacio), se los puede posicionar mediante las propiedades top, right, bottom y left.
    
-   **Importante:** Al aplicar las propiedades top, right, bottom y left se tomará de referencia al contenedor más cercano con posición relativa.
    
-   **Relative:** Es Usable.✨ Conservan su posición original y espacio físico pero se los puede posicionar mediante las propiedades top, right, bottom y left sin perder dicho espacio físico.
    
-   **Fixed:** Pierden su espacio físico y permanecen de forma fija (siguen el scroll, se colocan al lado izquierdo del viewport), se los puede posicionar mediante las propiedades de top, right, bottom y left.
    
-   **Sticky:** Conservan su espacio físico pero cuando el scroll los alcanza lo siguen (sin perder dicho espacio físico), es muy usado para barras de navegación y se lo puede posicionar con las propiedades top, right, bottom y left.
    

Ejemplo position static:

```html
<body>
    <div class="parent">
        <div class="box" id="one">1</div>
        <div class="box" id="two">2</div>
        <div class="box" id="three">3</div>
        <div class="box" id="four">4</div>
    </div>
</body>
```

CSS

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;    
}
.parent {
    border: 2px aqua dotted;
    display: inline-block; /*se posiciona en fila*/
}
.box {
    display: inline-block; /*se posiciona en fila*/
    background-color: red;
    width: 100px;
    height: 100px;
}
#two {
    background-color: orange;
    position: relative;
    bottom: 15px;
}
```

Guía sobre Position: [https://www.youtube.com/watch?v=BVIdzytAtkg](https://www.youtube.com/watch?v=BVIdzytAtkg)

📌 Nota: La propiedad top permite desplazar un elemento respecto a su posición original tomando como referencia el borde superior del elemento. Por su propia definición, esta propiedad sólo afecta a los elementos cuya propiedad position tenga un valor de relative , absolute o fixed .

Mas sobre Top: [https://uniwebsidad.com/libros/referencia-css2/top#:~:text=La%20propiedad%20top%20permite%20desplazar,de%20relative%20%2C%20absolute%20o%20fixed%20](https://uniwebsidad.com/libros/referencia-css2/top#:~:text=La%20propiedad%20top%20permite%20desplazar,de%20relative%20%2C%20absolute%20o%20fixed%20).

Guía completa de Flexbox: [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) Juego: [https://flexboxfroggy.com/#es](https://flexboxfroggy.com/#es)

## 37. Display

**display: block;** Por default la etiqueta p (párrafo) y el div vienen con display: block, esto quiere decir que va a usar el 100% del espacio que tenga a su costado sin importar si el contenido tiene o no espacio (Se va apilando bloque sobre bloque o etiqueta sobre etiqueta). Así sea solo una letra.

**display: inline;** Hay etiquetas como span (que puede ser comodín de p) que no tienen display: block, si no que por defecto se juntan en una sola línea (una al costado del otro).

📌 NOTA: A los elementos inline no se les puede agregar margin ni padding en la parte de arriba y en la de abajo pero si a los costados, y tampoco se puede manipular el width y el height de los elementos.

**display: inline-block;** La etiqueta ul por defecto también es block pero la podemos modificar usando inline-block: que es como una fusión de lo mejor de los dos anteriores, a diferencia de inline, este si puede modificar los valores que el otro no podía. Hacen que ocupe el 100% del tamaño del contenido y si hay espacio permite que otros hermanos se coloquen al costado y si no hay espacio se bajan (inline), permite agregar margin y padding arriba y abajo, además de permitir manipular el height y el width (block).

**display: list-item;** Las etiquetas li trae por default list-item que quiere decir que son elementos de una lista y que tienen que mostrarse de forma vertical de arriba hacia abajo. Aún así las etiquetas li se comportan como un elemento block

Ejemplo:

```html
<body>
    <!--Block-->
    <div class="block-element">Etiqueta Div</div>
    <p class="block-element">Etiqueta parrafo</p>
    <div class="block-element">
        <p class="parrafo">Texto</p>
        <p class="parrafo">Texto</p>
        <p class="parrafo">Texto</p>
    </div>

    <!--Inline-->
    <span>Soy una etiqueta span</span>
    <span>Soy una etiqueta span</span>

    <!--Inline-block-->
    <ul class="nav">
        
        <li>Home</li>
        <li>Cursos</li>
        <li>Instructores</li>
        <li>Blog</li>
    </ul>
</body>
```

```css
.block-element {
    background-color: green;
    margin: 10px;
    padding: 20px;
}

.nav {
    background-color: peachpuff;
    padding: 20px;
    list-style: none;
    text-align: center;
}
.nav li {
    display: inline-block;
    font-size: 20px;
    margin: 10px 0;
    padding-left: 20px;
    padding-right: 20px;
}
```

🎉Resumen:🎊  
**inline:** El elemento no comienza en una nueva línea y solo ocupa el ancho que requiere. No puede establecer el ancho o el alto.

**inline-block** Tiene el mismo formato que el elemento en línea, donde no comienza en una nueva línea. PERO, puede establecer valores de ancho y alto.

**block:** El elemento comenzará en una nueva línea y ocupará todo el ancho disponible. Y puede establecer valores de ancho y alto.

![Display](https://i.postimg.cc/Fz8gZPBF/display.png)

## 38. Desafío: layout


### Completado

## 39. Display Flex


Ayuda a posicionar y manipular contenedores de forma responsive (más flexible). SIEMPRE debemos tener un container principal para usar flex.

**Display: flex;** Al aplicarlo en el contenedor principal muestra a cada uno de sus hijos al costado del otro (en fila-row).

A pesar de haberle aplicado Display: flex; al padre contenedor sus hijos siguen siendo block.

Por defecto al aplicar flex los hijos se acomodan en row (fila) pero esto se puede modificar:

-   flex-direction: column;
-   flex-direction: column-reverse;
-   flex-direction: row-reverse;

Siempre debemos tener un contenedor principal para utilizar flex y ese contenedor principal va a tener display flex que ayuda a cambiar las cosas.

**flex-wrap: wrap;** Hace que al hacer la pantalla mas pequeña y al no tener espacio, los bloques se van acomodando de manera automática. Al usar wrap no debemos preocuparnos por la altura o ancho del contenedor, ya que se van generando según se necesiten.

**flex-wrap: wrap-reverse;** Lo mismo pero ésta vez se mueve al revés.

**Justify-content: center;** Nos ayuda a alinear el contenido de forma horizontal (centrado). Esto lo podemos combinar con **flex-wrap: wrap;**

📑 Otros:

-   **Justify-content: flex-end;** Alineado a la derecha
-   **justify-content: flex-start;** Viene por defecto alineado hacia la izquierda
-   **justify-content: space-around;** Al aplicar flex-start y de quedar espacio vacío a la derecha, space-around divide este espacio vacío entre cada uno de los contenedores generando una separación automática. Pero no es perfecto así que aplicamos:
-   **justify-content: space-evenly;** Y así nos aseguramos que el espacio entre cada bloque sea el mismo de inicio a fin.

### Mini guía de flexbox: [[display-flex]]

Propiedades en contenedores padre:  
**display: flex;**  
`flex-direction: row | column | row-reverse | column-reverse`  
`flex-wrap: row wrap | wrap | wrap-reverse`

Esta siguiente propiedad es un atajo para escribir el flex-direction y el flex-wrap en una sola línea de código:  
`flex-flow: Primero escribes dirección | Luego escribes flex-wrap`

Posicionar horizontal:  
`justify-content: flex-star | flex-end | center | space-around | space-between`

Posicionar manera vertical:  
`align-items: flex-star | flex-end | center | stretch | baseline`

`align-content: flex-star | flex-end | center | stretch | space-around | space-between` “Align-content solo se utiliza varias filas de elementos, pero si es una sola línea usamos align-items”

Propiedades en elemento hijo:  
`order: ;` Esto se utiliza para cambiar el orden de nuestros elementos sin cambiar el orden real semántico y correcto de html. Sencillamente colocando números.

`align-self: align-items: flex-star | flex-end | center | stretch | baseline` “Muy importante, si en el padre del elemento tiene declarado flex-direction: row; esta propiedad lo acomodara verticalmente. Y si es flex-direction: column lo ordenara horizontalmente”


![Justify-conten](https://miro.medium.com/max/2562/1*6NUIFlnX9SAanhWeOwt3Bg.gif)



## 40. Flexbox layouts

Flex es un tipo de display que permite que el contenedor padre sea flexible a los cambios que puedan tener los elementos hijos en su alineación.

Una vez tengamos el elemento padre con display: flex tenemos otras propiedades que podremos usar para nuestro beneficio.

-   **Flex-direction:** Te permite elegir la alineación de los elementos hijos sea en vertical (column) u horizontal (row), esta alineación viene por defecto.
    
-   **Justify-content:** Esta propiedad nos permite alinear el contenido de forma horizontal. Valores:
    
    -   Flex-start: Alinear items del flex desde el comienzo.
    -   Flex-end: Alinear items desde el final.
    -   Center: Alinear items en el centro del contenedor.
    -   Space-between: Distribuir items uniformemente, el primer items al inicio, el último al final.
    -   Space-around: Distribuir items uniformemente, estos tienen el mismo espacio a su alrededor.
    -   Space-evenly: Distribuye uniformemente el espacio entre los items y su alrededor.
-   **Align-items:** Sirve para alinear los elementos hijos de forma vertical. Valores:
    
    -   Flex-start: Se alinean desde arriba.
    -   Flex-end: Se alinean desde abajo.
    -   Center: Alinea los item al centro del eje y del contenedor.
    -   Stretch: Estira el alto de los elementos hijos al 100% del alto del elemento padre.
    -   Baseline: Escala el alto del elemento al tamaño de su contenido.
-   **Flex-wrap:** Permite que un elemento cuyo tamaño sea mayor al de la página haga un salto de línea sin salirse del contenedor, pues este se agranda.
    
-   **Order:** Especifica el orden utilizado para disponer los elementos en su contenedor flexible. Los elementos estarán dispuestos en orden ascendente según el valor de order.
    
-   **Flex-grow:** Especifica qué cantidad del espacio restante dentro del contenedor flexible, debería ocupar el ítem en cuestión según su dirección principal, esta última determinada por flex-direction.
    
-   **Flex-basis:** Especifica el tamaño inicial de un elemento flexible.
    

Juego para aprender Flexbox: [https://flexboxfroggy.com/#es](https://flexboxfroggy.com/#es)  
Ejemplos: [https://codepen.io/yair-lira/pen/LYZVJdd](https://codepen.io/yair-lira/pen/LYZVJdd)