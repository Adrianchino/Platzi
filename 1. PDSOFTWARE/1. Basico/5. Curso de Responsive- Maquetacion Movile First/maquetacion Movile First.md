# Curso Responsive Desing

## 1. Introduccion 

### ¿Por qué diseñar para móviles?

Más del 50% del tráfico se realiza a través de dispositivos como celulares o tablets, ya que es mucho más cómodo abrir un sitio web desde el móvil que abrir una laptop y buscarlo. No se trata de una moda, sino de un estándar con el que debemos trabajar.

### ¿Qué aprenderás en este curso?

Algunos de los conocimientos que adquirirás son los siguientes:

-   Analizar la arquitectura de tu proyecto partiendo desde un wireframe
-   Aplicar estilos por cada breakpoint
-   Evaluar la calidad de tu diseño con Lighthouse
-   ¡Y mucho más!

## 2. Analizando el diseño: proyecto del curso

### ¿Qué necesitas para trabajar en tu primer proyecto?

Vas a crear un proyecto real completo que se adapte a distintos tamaños de pantallas. Este será un proyecto que podrás agregar a tu portafolio para mostrar tus habilidades en el Desarrollo Web.

Estos son algunas de las herramientas que necesitas usar.

### Figma

Uno de los softwares más utilizados para construir wireframes o prototipos de alta calidad es Figma.

Los proyectos web se analizan desde los wireframes que comparte el equipo de diseño. Los wireframes son prototipos que nos permiten tener una estructura clara de lo que será el proyecto real que como desarrolladores tendremos que crecer a código.

Si quieres profundizar tu conocimiento puedes tomar el [Curso de Figma](https://platzi.com/cursos/figma/) de Platzi.

### Proyecto

El proyecto que vas a construir lo puedes encontrar [aquí](https://www.figma.com/proto/sMmlQaZldfDcLERYYWe6h4/Bata-Bit?node-id=44:594&scaling=scale-down).

Nota: Crearse primero una cuenta de **FIGMA**

Se trata de una landing page estática con un header, un footer y cuatro secciones de contenido. Para poder revisar cómo está diseñado, vamos a la pestaña de arriba y seleccionamos “Abrir en editor”.

## 3. El valor de Mobile First

### ¿Quiénes se ven beneficiados?

-   **Para desarrolladoras y desarrolladores: escalar es más sencillo**

Pasar un desarrollo con vista de escritorio a móvil requiere de realizar diversas consideraciones, puede tornarse complejo pues además esto implica tener que eliminar elementos de la vista y generalmente es más fácil añadirlos.

-   **Para usuarios: menos es más y para más personas**

La simplicidad en el diseño también ayuda a que tu comunicación sea efectiva hacia tus usuarios, brindando una experiencia de navegación agradable y que junto a un diseño accesible tu alcance aumente considerablemente.

Esto también añade valor a tus usuarios con una velocidad de conexión limitada y/o dispositivos de gama baja.

-   **Para negocios: mejor posicionamiento en buscadores**

Google comenzó trabajar a inicios de 2018 con un algoritmo que otorga de mayor relevancia a aquellos sitios optimizados para móviles. Esto no afectará a aquellos sitios que tengan una versión de escritorio y móvil, pero sí penalizará a los que carezcan de una alternativa móvil.

Para fines de SEO esto puede significar un menor rebote de usuarios si el contenido es lo suficientemente atractivo para retener la atención de los usuarios.

### Evolución progresiva

Así como avanza la tecnología también podemos apreciar los cambios en tendencias del desarrollo frontend que incluso llegan a convertirse en estándares, como ha sido Mobile First.

Primero desarrollamos para escritorio donde nuestro sitio web podía consumirse desde una computadora de escritorio y monitores en laptops. Después surgió la necesidad de adaptar estos sitios a dispositivos portátiles como teléfonos inteligentes y tablets.

### Conclusión

Ahora sabes cuál es la razón por la que este estándar es tan importante actualmente en tus conocimientos como desarrolladora o desarrollador web. Además de que estás asegurándote de que tus sitios lleguen a más dispositivos y personas, también estás haciendo que tu código sea más fácil de escalar y de hacer modificaciones en el futuro.

## 4. Arquitectura inicial

La arquitectura web se puede definir como la forma en que las páginas de un sitio web están estructuradas y enlazadas entre sí _(de manera lógica y coherente)_. Una arquitectura web ideal ayuda a los usuarios y a los motores de búsqueda a encontrar fácilmente lo que están buscando en un sitio web.

**Arquitectura del proyecto:**

-   Header    
-   4 secciones
-   Footer

```html
<body> 
	<header></header> 
		<main> 
			<section></section>
			<section></section>
			<section></section>
			<section></section>
		</main> 
		<footer></footer>
</body>
```

### Tips para estructurar tu arquitectura web

**Recuerda**:

-   Debes tener tu archivo index.html y .css dentro en carpetas organizadas.
-   index es el nombre de archivo que primero lee el navegador.
-   Para abreviar la escritura de código HTML puedes usar Emmet. En este caso para escribir la estructura base usamos: **header^main>section*4^footer**

## 5. Assets de nuestro proyecto

Los assets son todos los **recursos estáticos** que utilizaremos en nuestro proyecto, tales como:

- Imágenes  
- Logotipos/Isotipos (Si el logotipo y el nombre de la empresa/marca se encuentran en elementos separados, es preferible descargarlos agrupados)  
- Íconos

En este link les  ahorrare  un poquito el tiempo, acá subí los assets.

[https://drive.google.com/file/d/1Jg6m-DyDNPlsPc6HgzJFdwmJH3-BYC-z/view?usp=sharing](https://drive.google.com/file/d/1Jg6m-DyDNPlsPc6HgzJFdwmJH3-BYC-z/view?usp=sharing)

### ¿Cómo organizar nuestros assets?

¿Ya descargaste todos los reursos del proyecto? ¡Muy bien! Como desarrolladores sabemos que el orden es una cualidad muy importante en nuestro trabajo. Todos los archivos deben estar organizados dentro de la carpeta principal del proyecto.  

-   Para este caso vamos a crear una carpeta de assets que contenga dos carpetas en las que diferenciemos muy bien cuáles vamos a usar como íconos y cuáles como imágenes.
-   Renombra los archivos para que te sean fáciles de recordar, eliminando espacios para evitar conflictos con el navegador al momento de interpretarlos.

📌En este caso solo copiamos la carpeta y la pegamos en nuestro proyecto que estamos realizando

## 6. Fuentes de nuestro proyecto

### ¿Cómo descargar las fuentes para un proyecto?

Como recordarás, una de las mejores páginas para encontrar fuentes es [Google Fonts](https://fonts.google.com/). Para descargar las de nuestro proyecto, hacemos lo siguiente:

1.  Copia el nombre encontrado en la pestaña “Inspeccionar” de la fuente seleccionada. Haz clic sobre la fuente.
2. Encontrarás varios grosores de fuentes. Vamos a seleccionarlos con base a los hallados en la inspección de nuestro proyecto haciendo clic en “Seleccionar este estilo”. Hacemos los mismos pasos con la otra fuente en caso de ecnontrar.
3. Una vez seleccionadas las fuentes y grosores que vamos a usar, seleccionamos la pestaña “Embeber” del panel derecho. Copiamos el link que nos da Google Fonts.

### Cómo insertar fuentes en un proyecto

Para linkear el enlace que copiamos en el paso anterior, abrimos nuestro archivo index.html y vamos hasta hasta la sección del head. Pegamos el enlace justo debajo de la etiqueta title.

El enlace generado para el proyecto en que estamos trabajando es el siguiente:

```html
<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@300;500&display=swap" rel="stylesheet">
```

📌**Nota**: El tag de link con el valor de atributo **rel=“proconnect”** permite notificarle al navegador que la página requiere establecer una conexión a otro dominio y que esta debe realizarse de la forma más rápida posible. De esta forma cuando el navegador requiera hacer uso de los recursos (_en este caso los tipos de fuente_), la descarga de recursos será más rápido porque la conexión ya existirá de forma previa. Esto permite mejorar el performance de la página.

## 7. Estilos base

### Cómo hacer el posicionamiento de contenido

Como parte de las buenas prácticas tenemos un orden en que es recomendable escribir el código dentro de CSS. Te ayudarán a tener todas las secciones organizadas y saber dónde regresar cuando necesites hacer un cambio o solucionar un problema.

1.  **Posicionamiento** --> static, absolute, relative, fixed.
2.  **Modelo de caja** (_Box model_) --> margin, border, padding, content.
3.  **Tipografía** --> tipos, tamaños de fuente, etc.
4.  **Estilos visuales** --> box-shadow, border-radius, gradient, etc.
5.  **Otros** --> misceláneos, reglas CSS y más.

Recordemos que para declarar una variable en CSS debemos usar la función :root y añadir un nombre a la variable que contendrá el valor que vamos a usar repetidas veces en nuestro código. Seleccionando todos los colores, tendríamos:

```css
:root {
--bitcoin-orange: #f7931a;
--soft-orange: #ffe9d5;
--secondary-blue: #1a9af7;
--soft-blue: #e7f5ff;
--warm-black: #282623;
--black: #201e1c;
--grey: #bababa;
--off-white: #faf8f7;
--just-white: #fff;
}
```

### Cómo hacer el reinicio de estilos

Una vez declarada la sección de variables que va hasta arriba, es hora de reiniciar los estilos que el navegador trae por defecto con las prácticas que ya conocemos.

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

También cambiaremos el tamaño de fuente a 62.5% para que sea sencillo de usar con las medidas REM. Y cambiaremos el estilo de fuente que hemos embebido desde Google Fonts.

```css
html {
    font-size: 62.5;
    font-family: 'DM Sans', sans-serif;
}
```

Acabas de aplicar los primeros estilos al reiniciar los que vienen por defecto, aplicar el estilo de fuente y crear las primeras variables del proyecto. ¡Avanzamos rápido y seguro!

## 8. Maquetación del header

### Cómo hacer la maquetación en Figma

Lo primero es crear una etiqueta img dentro del header para el logo.  
Luego un contenedor div que contenga:

-   h1 para el título principal
-   p para el párrafo
-   Una etiqueta a para el call to action, que contenga también una etiqueta span para el pequeño ícono a su lado.

Tendríamos un código así:

```html

<header>
        <img src="" alt="">
        <div>
            <h1>La próxima revolución en el intercambio de criptomonedas</h1>
            <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias </p>
            <a href="">Conoce nuestros planes <span></span></a>
        </div>
    </header>

```

El siguiente paso es aplicar clases para llamarlas desde CSS y empezar a aplicar estilos.

## 9. Implementando BEM

### ¿Qué es BEM?

BEM (Block, Element, Modifier o Bloque, Elemento, Modificador) es una metodología ágil de desarrollo basada en componentes. Divide toda la interfaz en bloques que se pueden reutilizar y escalar.

![Bem](https://i.postimg.cc/RVHwjrXH/BEM.png)

### Consejos para el nombre de las clases

-   Como no va a haber otra etiqueta **img** dentro del **header**, podemos no colocarle una clase y llamarla siendo específicos.
-   La etiqueta **div** es muy común, por lo que una clase es necesario. La podemos llamar así: **_header–title-container_** en el que **header** es el contenedor principal y **title-container** el contenido.
-   Como la etiqueta **h1** es única en toda la página, tampoco es necesario colocarle una clase.
-   Los botones también son comunes, así que aplicamos la clase: **_header–button_**.

**No olvides**:  
Establecer la ruta de la imagen en tu etiqueta **img**.

```html
<img src="./assets/img/logo.svg" alt="logo_batatabit">
```

### Cómo aplicar estilos de las clases

Recuerda que estamos diseñando para móviles primero, por lo que nuestra vista debe centrarse en eso. Cuando compruebes los resultados en el navegador, asegúrate de tener activada la opción de **Dimensión: responsive** en las DevTools.  

![image.png](https://static.platzi.com/media/articlases/Images/image%28161%29.png)

#### Header

-   Aplicamos un **_position: relative_**.
-   Usamos **_display: flex_** y **_flex-direction: colum_** para poder acomodarlo por medio de columnas.
-   Ajustamos el ancho al 100% de la pantalla y el alto a **_334px_**.
-   Limitamos el ancho a **_320px_** como mínimo.
-   Centramos el texto con **_text-align: center_**.

```css
header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-width: 324px;
    height: 334px;
    text-align: center;
}
```

### Img

-   Definimos las dimensiones del logo con un ancho de **_150px_** y un alto de **_24px_**.
-   Ajustamos el margen superior en **_60px_**.
-   Como estamos usando **_display: flex_** en el contenedor padre, centramos el logo con **_align-self: center_**.

```css
header img {
    width: 150px;
    height: 24px;
    margin-top: 60px;
    align-self: center;
}
```

### Div

-   Llamamos al contenedor directamente por el nombre de su clase.
-   Ajustamos el ancho del contenedor para que siempre se mantenga el 90% entre **_288px_** y **_900px_**. Es decir, no va a crecer más de 900px ni se encogerá menos de 288px.
-   Ajustamos la altura a **_218px_**.
-   Añadimos un margen superior de **_40px_**.
-   Centramos el texto con **_text-align: center_**.
-   Centramos el contenedor con **_align-self: center_**.

```css
.header--title-container {
    width: 90%;
    min-width: 288px;
    max-width: 900px;
    height: 218px;
    margin-top: 40;
    text-align: center;
    align-self: center;
}
```

## 10. Uso de linear-gradient

### Cómo dar estilos al fondo

Vamos al prototipo del [proyecto en Figma](https://www.figma.com/file/sMmlQaZldfDcLERYYWe6h4/Bata-Bit?node-id=68%3A168). Si hacemos clic sobre el fondo observamos los colores que tiene. En la sección de código css encontramos un **_linear-gradient_** con la información que necesitamos. Lo copiamos y lo agregamos dentro de los estilos del **header**.

```css
background: linear-gradient(207.8deg, #201E1C 16.69%, #F7931A 100%);
```

El código nos muestra el pocentaje de color que le da a cada uno. 16.69% al negro hasta un 100% de naranja. Al renderizarlo en el navegador vemos que el naranja ocupa un mayor espacio que el negro, posicionándose cada uno en esquinas opuestas.

**Nota**: Si quieres crear degradados de manera sencilla, te recomiendo usar [CSS Gradient](https://cssgradient.io/). Es muy sencillo e intuitivo de usar.

### Cómo dar estilos al título

-   Llamamos la etiqueta **_h1_** usando el nombre de la clase contenedora **_.header–title-container_**. Y sí, podríamos llamar solo la etiqueta h1, después de todo sólo debe existir una en todo el documento, ¿verdad? Es así, sin embargo, ser específicos es parte de las buenas prácticas. Cuando avances más usarás librerías como **Bootstrap** que pueden traer consigo estilos para ciertas etiquetas. Siendo específicos los estilos que apliquemos no se verán afectados por estas. Ya sabes, siempre trata de ser específico.
-   Ajustamos el tamaño de fuente con **_font-size: 2.4rem_** (24px) y el ancho con **_font-weight: bold_**.
-   Ajustamos la dimensión entre líneas o interlineado con **_line-height: 2.6rem_**.
-   Cambiamos su color con la variable correspondiente, ***color: var(–just-white)***.

```css
.header--title-container h1 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--just-white);
}
```

### Cómo dar estilos al párrafo

-   Añadimos un margen superior para separarla un poco del título con **_margin-top: 25px_**.
-   Ajustamos el tamaño con **_font-size: 1.4rem_** y su grosor con **_font-weight: 500_**.
-   Le damos un interlineado con **_line-height 1.8rem_**.
-   Cambiamos el color de fuente con la variable correspondiente, ***color: var(–soft-orange)***.

```css
.header--title-container p {
    margin-top: 25px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    color: var(--soft-orange)
}
```

En el navegador deberíamos poder ver este resultado:
![Pagina web](https://i.postimg.cc/bJ82v26h/Pagina-ewbv.png)

## 11. Uso de position para botón flotante

### Cómo aplicar astilos al botón

Sigue estos pasos:

-   Llamamos la clase del botón desde la clase contenedora con **_.header–title-container .header–button_**.
-   Definimos su posición como **_absolute_**. Al hacerlo toma como posición relativa a su padre directo (en este caso el **header**) y nos permite posicionar el contenido en cualquier parte del contenedor. Recuerda que sólo cuando la posición es absoluta es que podemos añadir un **_top, bottom, left_** y **_right_**, debido a que está fijo. Esto no pasa si su posición fuera relativa.
-   Con **_left: calc(50% - 118px)_** le decimos que queremos mantenerlo en el centro con el **50%**, pero como el botón es muy grande, que reste **118px** a la izquierda, centrándolo.
-   Desplazamos hacia abajo el botón del contenedor con un **_top_** de **_270px_**.
-   Añadimos un margen superior de **_35px_**.
-   Añadimos espacio interno con **_padding: 15px_**.
-   Definimos su ancho en **_229px_** y su altura en **_48px_**.
-   Le damos el color de fondo correspondiente con la variable **_–off-white_**.
-   Agregamos la sombra que le da el efecto de flotar.
-   Con **_border: none_** quitamos cualquier posible borde que agregue el navegador por defecto.
-   Redondeamos los bordes con un **_border-radius: 5px_**.
-   Ajustamos el tamaño de la fuente en **_1.4rem_** y la hacemos negrita con **_font-weight: bold_**.
-   Le quitamos el subrayado con **_text-decoration: none_** y le damos un color negro con la variable que creamos.
```css
.header--title-container .header--button {
    position: absolute;
    left: calc(50% - 118px);
    top: 270px;
    display: block;
    margin-top: 35px;
    padding: 15px;
    width: 229px;
    height: 48px;
    background-color: var(--off-white);
    /*Sombra*/
    box-shadow: 0px 4px 8px rgba(89, 73, 30, 0.16);
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--black);
}
```

### Cómo dar estilos al ícono

-   Llamamos la etiqueta span donde crearemos el ícono desde su clase contenedora con **_.header–button span_**.
-   Definimos el **_display_** en **_inline-block_** para que se mantenga en el mismo espacio que el texto que lo acompaña.
-   Definimos su ancho en **_13px_** y su alto en **_8px_**.
-   Añadimos un **_margin-left: 10px_** para separarlo un poco horizontalmente del texto.
-   Llamamos el archivo del ícono con **_background-image_**.

### ¿Cómo llamar un asset desde otra carpeta?

Si el archivo que quieres llamar está contenido en una carpeta distinta a la de tu documento .css, debes hacerlo llamando a la capeta principal.

Colocas **…/** en la **url** para llevarte a la carpeta anterior y desde ahí buscar el asset. En este caso el archivo está en una carpeta dentro de la carpeta en que está el archivo .css, por lo que pondríamos ***url("./assets/icons/down-arrow.svg")***.

Recuerda que la **url** siempre va entre comillas.

```css
.header--button span {
    display: inline-block;
    width: 13px;
    height: 8px;
    margin-left: 10px;
    background-image: url("./assets/icons/down-arrow.svg");
}
```

Así quedaría nuestro resultado final:

![Header-Termonado](https://i.postimg.cc/CxW4mfRW/Header-terminado.jpg)

## 12. Estructura base de la sección de intercambio

### Cómo hacer la división de secciones

Lo primero es agregar una clase indentificadora a la primera de cuatro secciones que tenemos. Usando [la metolodología BEM](https://platzi.com/clases/2030-mobile-first/32306-implementando-bem/), class=“main-exchange-container”,  
creamos dentro el primer contenedor div en el que tendremos la imagen. Añadimos la clase backgroundImg.

![Secciones](https://i.postimg.cc/nhHj0Wqj/Secciones.jpg)

Creamos el segundo contenedor div para el título h2 y el párrafo p, en el que añadimos el contenido escrito en el diseño. Añadimos la clase main-exchange-container–title, en que main-exchange-container es el bloque y title el elemento.  
Las tablas que muestra el valor de las monedas es una sección en sí, por lo que es más correcto crear un section en lugar de un div. El div lo colocamos dentro.

```html
<section class="main-exchange-container">
            <div class="backgroundImg"></div>
            <div class="main-exchange-container--title">
                <h2>Visibilizamos todas las tazas de cambio.</h2>
                <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
            </div>
            <section class="main-tables-container">
                <div></div>
            </section>
        </section>
```

### Cómo aplicar estilos a las secciones

Hay 3 elementos que debes tener en cuenta:

#### main

Ajustamos el ancho al 100% y la altura en auto porque el mismo contenido que agreguemos definirá el espacio que vaya a ocupar.

Agregamos un min-width: 320px para que no se distorcione si llega a medidas más pequeñas.

Le damos un color de fondo con la variable --off-white.

```css
main {
    width: 100%;
    min-width: 320px;
    height: auto;
    background-color: var(--off-white);
}
```

#### .main-exchange-container

Llamamos al primer contenedor principal en que estamos trabajando y ajustamos de igual manera el ancho al 100% y la altura en auto.

Añadimos un padding-top: 80px y un padding-bottom: 30px para agregar espacio tanto arriba como abajo.

Alineamos el texto al centro.

```css
.main-exchange-container {
    width: 100%;
    height: auto;
    padding-top: 80px;
    padding-bottom: 30px;
    text-align: center;
}
```

#### .main-exchange-container–title

Llamamos al contenedor de la sección de texto y le damos un ancho del 90%. Limitamos el ancho mínimos a 288px y un máximo de 900px.

Añadimos un margin: 0 auto, para que, pese a no ocupar el 100% del ancho, esté siempre en el centro.

```css
.main-exchange-container--title {
    width: 90%;
    min-width: 288px;
    max-width: 900px;
    margin: 0 auto;
}
```

## 13. # Imagen de background

### Pasos para agregar imagen de fondo

Una vez estés en el proyecto:

- Llamamos la etiqueta **_div_** desde el contenedor principal de la sección.
- Primero debemos crear el espacio que va a ocupar que exista. De otra manera no lo podremos ver. Añadimos un ancho y alto de **_200px_**.
- Centramos el contenido con **_margin: 0 auto_**.
- Añadimos un **_margin-bottom: 50px_** para alejarla un poco del texto.
- Agregamos la imagen con **_background-image_**.
- **_background-size: cover_** permite que la imagen cubra todo el ancho conservando su proporción original, es decir, no crece más del límite.
- **_background-position: center_** para que siempre, sin importar el tamaño del contenedor, tengamos una vista del centro de la imagen.
- **_background-repeat: no-repeat_** para evitar que se repita en caso que la imagen sea más pequeña que el contenedor.

```css
main-exchange-container .backgroundImg {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 50px;
    background-image: url("./assets/img/Bitcoin.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

### Pasos para agregar texto

Dentro del texto tienes dos elementos importantes:

#### Título

- Llamamos la etiqueta **_h2_** desde el contenedor principal de la sección.
- Añadimos un **_margin-bottom: 30px_** para separarlo del párrafo.
- Ajustamos su tamaño a **_2.4rem_** y la hacemos negrita con **_font-wight: bold_**.
- Le damos un interlineado de **_2.6rem_**.
- Le damos color con la variable **_–black_**.

```css
.main-exchange-container h2 {
    margin-bottom: 30px;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--black);
}
```

### Párrafo

- Llamamos la etiqueta **_p_** desde el contenedor principal de la sección.
- Añadimos un **_margin-bottom: 50px_** para alejarla del final del contenedor.
- Ajustamos su tamaño a **_1.4rem_** y le damos un ancho con **_font-wight: 500_**.
- Le damos un interlineado de **_2.6rem_**.
- Le damos color gris con **_color: #757575_**. En este caso el color no está en una variable porque lo usamos una sola vez en todo el documento **.css**.

```css
.main-exchange-container p {
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.6rem;
    color: #757575;
}
```

En el navegador podremos observar esta imagen renderizada:

![Main-parte-1](https://i.postimg.cc/x8S2TLxJ/main-parte-1.jpg)

## 14. Estructura de tabla de monedas

### Pasos para hacer la maquetación

- Vamos a la sección que creamos anteriormente con la clase de **_main-tables-container_**.
- Dentro del **_div_**, creamos una etiqueta **_p_** para el texto “**Monedas**”.
- Abajo creamos otra etiqueta div que contendrá la etiqueta **_table_**, que la tabla en sí.
- Trabajamos con dos etiquetas más: **_tr_** (table row) para las filas y **_td_** (table data) que va dentro, para la información de cada fila.
- Agregamos la información correspondiente, en base al diseño sobre el que trabajamos.

```html
            <section class="main-tables-container">
                <div>
                    <p>Monedas</p>
                    <div>
                        <table>
                            <tr>
                                <td>Bitcoin</td>
                                <td>$1.96</td>
                            </tr>
                            <tr>
                                <td>Ethereum</td>
                                <td>$0.07</td>
                            </tr>
                            <tr>
                                <td>Ripple</td>
                                <td>$2.15</td>
                            </tr>
                            <tr>
                                <td>Stellar</td>
                                <td>$4.96</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
```

### Cómo añadir las clases

Empezamos a añadir las clases para poder aplicar estilos.

- Al primer **_div_** lo nombramos **_main-currency-table_** porque se trata de la tabla de valores actuales.
- Nombramos **_currency-table–title_** a la etiqueta **_p_** como título del contenedor.
- **_currency-table–container_** al **_div_** por ser el contenedor directo de la tabla.
- No necesitamos agregarle clases a la etiqueta tabla o a las filas, pero sí al contenido. Por ejemplo, la primera sería **_table__top left_**. Agregamos un doble guión bajo porque según [la metodología BEM](https://platzi.com/clases/2030-mobile-first/32306-implementando-bem/), es para diferenciar un elemento (**table**) de un bloque y modificador (**top_left**).
- Al precio le añadimos dos clases: **_table__top-right table-right_**. Esto es porque tanto la columna de nombres como la de precios tienen estilos distintos. De esta manera podremos llamar una sola clase y aplicar los estilos a todos los que la contienen.
- Añadimos la clase **_table-right_** a todas las celdas con precios de la tabla. A la última celda colocamos antes la clase **_table__bottom-right_** por ser la última.
- Añadimos la clase **_table__buttom-left_** a la última fila de la tabla. Como ves, sólo la primera y última fila tienen clases adicionales.
- Ya sólo nos falta el contenedor en el que se actualiza la información. Lo creamos fuera del **_div_** que contiene la tabla y le agregamos una etiqueta **_p_** para el texto que contiene.
- Resaltamos la palabra mostrada en negritas colocándola dentro de la etiqueta **_b_**.
- Por último le añadimos la clase **_currency-table–date_** al nuevo contenedor creado para poder aplicarle estilos

```html
            <section class="main-tables-container">
                <div class="main-currency-table">
                    <p class="currency-table--title">Monedas</p>
                    <div class="currency-table--container">
                        <table>
                            <tr>
                                <td class="table__top-left">Bitcoin</td>
                                <td class="table__top-right table-right">$1.96 <span></span></td>
                            </tr>
                            <tr>
                                <td>Ethereum</td>
                                <td class="table__right">$0.07</td>
                            </tr>
                            <tr>
                                <td>Ripple</td>
                                <td class="table__right">$2.15</td>
                            </tr>
                            <tr>
                                <td class="table__buttom-left">Stellar</td>
                                <td class="table__bottom-right table__right">$4.96</td>
                            </tr>
                        </table>
                    </div>
                    <div class="currency-table--date">
                        <p><b>Actualizado:</b> 19 de julio 23:45</p>
                    </div>
                </div>
            </section>
```

El resultado renderizado en el navegador mostraría:

![Maquetación](https://i.postimg.cc/ZKsZmRTH/Maquetacion.jpg)

## 15. Estilos base de tabla de monedas

### Aplicar estilos al contenedor principal

- Lo primero es llamar la clase del contenedor principal de la tabla con **_main-currency-table_**.
- Le damos un ancho del **_70%_** porque no lo ocupa todo.
- Limitamos el ancho mínimo de **_235px_** y máximo de **_500px_**.
- La damos una altura de **_360px_**.
- Centramos el contenido con **_margin: 0 auto_**.
- Añadimos la fuente que usan las tablas con **_font-family: “Inter”, sans-serif_**.

```css
.main-currency-table {
    width: 70%;
    min-width: 235px;
    max-width: 500px;
    height: 360px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
}
```

### Aplicar estilos al título

- Podríamos llamar la clase del título y empezar a aplicar estilos, sin embargo, recordemos que tenemos dos tablas con títulos distintos. Por lo tanto, conviene ser específicos y llamar primero el contenedor principal de la tabla y luego el título, de esta manera: **_.main-currency-table .currency-table–title_**.
- Separamos el título de la tabla con **_margin-bottom: 15px_**.
- Ajustamos el tamaño de fuente a **_1.8rem_** y la tornamos negrita con **_bold_**.
- Agregamos un interlineado de **_2.3rem_**.

```css
.main-currency-table .currency-table--title {
    margin-bottom: 15px;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2.3rem;
    color: var(--bitcoin-orange);
}
```

### Aplicar estilos al contenedor directo

- Llamamos al **_div_** que contiene la tabla con **_.currency-table–container_**.
- Le damos un ancho del **_90%_** de su contenedor padre.
- Establecemos un ancho mínimo de **_230px_** y un máximo de **_300px_**.
- Ajustamos la altura en **_250px_**.
- Centramos el contenido con **_margin: 0 auto_**.

```css
.currency-table--container {
    width: 90%;
    min-width: 230px;
    max-width: 300px;
    height: 250px;
    margin: 0 auto;
}
```

### Aplicar estilos a la tabla

- Llamamos a la etiqueta **_table_** desde su contenedor padre con **_.currency-table–container table_**.
- Le damos un ancho y alto del 100% para ocupar todo el espacio del contenedor padre.

```css
.currency-table--container table {
    width: 100%;
    height: 100%;
}
```

### Celdas

- Llamamos a la etiqueta **_td_** desde su contenedor padre con **_.currency-table–container td_**
- Le damos un ancho del **_50%_** porque ocupan la mitad de espacio que las filas.
- Ajustamos el tamaño de fuente a **_1.6rem_** y su ancho en **_500_**.
- Agregamos un interlineado de **_1.9rem_**.
- Cambiamos el color con la variable **_–grey_**.
- Agregamos un color de fondo con la variable **_–just-white_**.

```css
.currency-table--container td {
    width: 50%;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.9rem;
    color: var(--grey);
    background-color: var(--just-white);
}
```

## 16. Detallando estilos de tabla de monedas

### Cómo agregar bordes de la tabla

¿Recuerdas que creamos clases específicas para los botones situados en las esquinas? Pues es momento de llamarlos.

- Empezemos por el lado izquierdo de la tabla, y lo llamamos desde su contenedor con **_.currency-table–container .table__top-left_**.
- Le agregamos un **_border-radius: 15px 0 0 0_** en donde cada una de las cuatro posiciones representa una esquina de la caja que estamos estilando: esquina superior izquierda, esquina superior derecha, esquina inferior derecha y esquina inferior izquierda, respectivamente.
- Aplicamos estos valores a cada una de las esquinas.

```css
.currency-table--container .table__top-left {
    border-radius: 15px 0 0 0;
}
.currency-table--container .table__top-right {
    border-radius: 0 15px 0 0;
}
.currency-table--container .table__bottom-left {
    border-radius: 0 0 0 15px;
}
.currency-table--container .table__bottom-right {
    border-radius: 0 0 15px 0;
}
```

### Cómo aplicar texto de precios

- Llamamos la clase que aplicamos a todos los textos de la columna derecha con **_.currency-table–container .table__right_**.
- Ajustamos su tamaño a **_1.4rem_** y le damos un ancho normal.
- Agregamos un interlineado de **_1.7rem_**.
- Ajustamos el **_color_** usado en el diseño **_#757575_**.

```css
.currency-table--container .table__right {
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 1.7rem;
    color: #757575;
}
```

### Cómo agregar íconos

Observando el diseño, nos damos cuenta que hay dos tipos de flechas: hacia arriba y abajo. Entonces tenemos que dividir y aplicar a las etiquetas **_span_** estas dos clases: **_up_** y **_down_**.

- Llamamos a las etiquetas **_span_** con su clase desde el contenedor de la tabla con **_.currency-table–container .down_**.
- Usamos **_display: inline-block_** para mantener el ícono en la misma línea que el texto.
- Le damos un ancho y alto de **_15px_**.
- Agregamos un **_margin-left: 10px_** para separarlo del texto.
- Llamamos la imagen desde su dirección con ***background-image: url("")***.
- Ajustamos su tamaño al del contenedor con **_cover_**, lo centramos y especificamos que no se repita la imagen.
- Aplicamos los mismos estilos para la clase **_.currency-table–container .up_**. Sólo cambiamos la **_url_** del ícono.

```css
.currency-table--container .down {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    background-image: url("./assets/icons/trending-down.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.currency-table--container .up {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    background-image: url("./assets/icons/trending-up.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
```

Este sería nuestro resultado en pantalla:

![Precios](https://i.postimg.cc/zXkhkhBC/precios.jpg)

## 17. Finalizando estilos de tabla de monedas

### Cómo agregar estilos

- Primero le damos un ancho de **_190px_** y alto de **_30px_** para que exista el espacio.
- Lo centramos con **_margin: 0 auto_**.
- Lo separamos de la tabla con **_margin-top: 15px_**.
- Creamos un espaciado interno con **_padding: 8px_**.
- Ajustamos su color de fondo con la variable **_–soft-orange_**.
- Redondeamos los bordes con **_border-radius: 8px_**.
- Para darle estilos al texto llamamos la etiqueta p desde el contenedor de la tabla con **_.currency-table–date p_**.
- Ajustamos su tamaño a **_1.2rem_** y le damos un interlineado de **_1.5rem_**.
- Por último, le cambiamos el color con la variable **_–warm-black_**.

```css
.currency-table--date {
    width: 190px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    padding: 8px;
    background-color: var(--soft-orange);
    border-radius: 8px;
}
.currency-table--date p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--warm-black);
```

Nota: Agregamos el ` font-weight: 300;` en `.currency-table--date p` para que la caja padre no obstruya con la caja hijo y así determinar el peso de la fuente.

## 18. Estructura base de la sección de beneficios

### Análisis de la estructura

Al inicio nos encontramos con un logo flotante que ya aprendimos a posicionarlo con **_position: absolute_**. Tenemos algunos otros íconos que podemos almacenar en etiquetas span y varios contenedores con cajas de texto.

![18.jpg](https://static.platzi.com/media/articlases/Images/18.jpg)

La imagen solo toma la primera caja, ya que las siguientes tienen la misma estructura. Mientras que aquí aprenderás a construir todo el diseño de la imagen, te harás cargo de terminar las otras tres cajas. ¡Vamos a nuestro archivo **_index.html_**!

### Cómo hacer la maquetación

- Abrimos la segunda sección y le damos una clase con base a su contenido. Como detalla lo que es el producto Batatabit, el nombre podría ser **_main-product-detail_**.
- Creamos la clase para el contenedor del título principal con **_product-detail–title_**.
- Creamos las etiquetas que anteriormente encontramos en el diseño como **_span_**, **_h2_**, **_p_**, **_section_** y **_article_**.
- Creamos la clase **_product-detail–batata-logo_** para la etiqueta span que contendrá nuestro logo.

Dentro del primer artículo:

- La primera etiqueta **_p_** será el título de la tarjeta, y el nombre de su clase será **_product–card-title_**, con la estructura bloque–elemento.
- La segunda etiqueta **_p_** será el cuerpo de la tarjeta, y el nombre de su clase será **_product–card-body_**.
- Por último, agregamos el contenido dentro de cada etiqueta de texto.

```html
        <section class="main-product-detail">
            <span class="product-detail--batata-logo"></span>
            <div class="product-detail--title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <section class="product-cards--container">
                <article class="product-detail--card">
                    <span class="clock"></span>
                    <p class="product--card-title">Tiempo real</p>
                    <p class="product--card-body">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
                </article>
            </section>
        </section>
```

## 19. Estilos de la sección de beneficios

### Aplicar estilos en el contenedor principal

- Llamamos la clase del contenedor de la sección con **_.main-product-detail_**.
- Le asignamos un **_position: relative_**. Esto es porque el contenedor del logo flotante se creará con **_position: absolute_**. Para que un **_position: absolute_** pueda posicionarse, busca al primer contenedor padre que tenga un **_position: relative_**. Por esto lo colocamos aquí y se mantenga en este contenedor.
- Ajustamos su ancho en un **_100%_** y lo limitamos en un mínimo de **_320px_**.
- Colocamos la altura en **_auto_** para que se ajuste a lo que necesite el contenedor.
- Añadimos un padding **_20px_** arriba y abajo y **_10px_** a los lados.

```css
.product-detail--title {
    position: relative;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 20px 10px;
    background-color: var(--warm-black);
}
```

### Pasos para aplicar estilos al logo

- Llamamos la clase directa de la etiqueta span del logo con **_.product-detail–batata-logo_**.
- Le asignamos un **_position: absolute_** para que esté por encima de los demás elementos.
- Ajustamos un ancho en **_40px_** y un alto en **_25px_**.

Para centrarlo entre las dos secciones:

- Elevamos la mitad del logo hacia fuera del contenedor con **_top: -10px_**.
- Lo centramos con ***left: calc(50% - 20px)***, donde 50% lo coloca en la mitad, pero no lo centra. Esto se debe a que el logo tiene dimensiones (40px para ser precisos), y como queremos que esté justo en la mitad, le quitamos la mitad de su ancho (20px), posicionándolo justo en el centro.
- Llamamos la imagen con ***background-image: url("")***.

```css
.product-detail--batata-logo {
    position: absolute;
    width: 40px;
    height: 25px;
    top: -10px;
    left: calc(50% - 20px);
    background-image: url("./assets/icons/batata.svg");
}
```

### Agregar estilos al título

Ten en cuenta estos 3 elementos:

#### Contenedor

- Llamamos la clase del contenedor de nuestro título con **_.product-detail–title_**.
- Ajustamos su ancho para que ocupe el **_90%_** de su contenedor principal.
- Establecemos el ancho mínimo en **_288px_**.
- Colocamos el alto en **_auto_** para que ocupe lo que necesite el texto. Esto es una buena práctica para que el texto reaccione bien sin importar que tanto se vea comprimido por el ancho.
- Lo centramos con un **_margin: 0 auto_**.
- Separamos el texto del extremo superior con un **_margin-top: 50px_**.
- Centramos el texto con **_text-align: center_**.

```css
.product-detail--title {
    width: 90%;
    min-width: 288px;
    height: auto;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
}
```

#### H2

- Llamamos la etiqueta **_h2_** desde su contenedor directo con **_.product-detail–title h2_**.
- Aplicamos un **_margin-bottom: 20px_** para separarlo del párrafo de abajo.
- Ajustamos el tamaño de la fuente a **_2.4rem_** y aplicamos un grosor **_bold_**.
- Ajustamos el interlineado en **_2.6rem_**.
- Cambiamos el color con la variable **_–just-white_**.

```css
.product-detail--title h2 {
    margin-bottom: 20px;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 2.6rem;
    color: var(--just-white);
}
```

#### p

- Llamamos la etiqueta **_p_** desde su contenedor directo con **_.product-detail–title p_**.
- Aplicamos un **_margin-bottom: 20px_** para separarlo de las secciones de abajo.
- Ajustamos el tamaño de la fuente a **_1.4rem_** y aplicamos un grosor de **_500_**.
- Ajustamos el interlineado en **_1.8rem_**.
- Cambiamos el color a **_#808080_** como nos indica el diseño en Figma.

```css
.product-detail--title p {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    color: #808080;
}
```

## 20. 