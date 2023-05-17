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