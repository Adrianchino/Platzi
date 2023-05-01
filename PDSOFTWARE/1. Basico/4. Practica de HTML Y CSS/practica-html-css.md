
# Curso Practico de HTML Y CSS

## 1. Introduccion 

En este Curso se tendra 4 puntos esenciales y un reto especial para que se pueda lograr aprender a programar desde cero o vencer este bloqueo que te ah impedido a seguir aprendiendo 

### Comienza preguntándote ¿qué quieres programar?

Ten claridad de qué quieres programar, pero no te demores en tomar la decisión elige un objetivo y aprende sobre qué tecnologías se utilizan, si me lo preguntas yo te recomiendo que aprendas [HTML, CSS y JavaScript](https://platzi.com/web) ya que el Desarrollo Web es hoy en día uno de los campos con mayor demanda y crecimiento, los navegadores te permiten llevar tus aplicaciones web a móviles, tablets, computadores y estos van a continuar mejorando como plataforma e incluso las [naves espaciales](https://www.youtube.com/watch?v=co9zWYa2N0c&feature=youtu.be) utilizan estas tecnologías. Si tienes otras ideas, en los siguientes enlaces puedes aprender más de diferentes temáticas que puedes aprender en Platzi, [¿Aplicaciones móviles?](https://platzi.com/apple-fullstack/) ¿[Videojuegos](https://platzi.com/videojuegos/)? ¿[Ciencia de Datos](https://platzi.com/datos/)?

## 2. Lo que aprenderás sobre HTML y CSS

Como proyecto, crearemos un clon de la página principal de Google, esa que ves cada que abres tu navegador Chrome. Para ello necesitaremos lo siguiente:

-   Editor de texto
-   Navegador

Aplicamos los diseños usando reglas. Empleamos una declaración para un selector (casi siempre una etiqueta), que está compuesta por una propiedad y su valor.

**Recordatorio**: HTML y CSS no son lenguajes de programación.

## Algunas librerías de las que puedes aprender:

**Documentación sobre HTML, CSS y JS:**  
[https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)  
**Guía para entender las propiedades de CSS son ejemplos animados:**  
[https://cssreference.io/](https://cssreference.io/)  
**Guía completa de Flexbox:**  
[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
**Aprende HTML con ejercicios:**  
[https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)

**Aprende sobre Flexbox jugando:**  
[https://flexboxfroggy.com/#es](https://flexboxfroggy.com/#es)

## 3. Análisis del proyecto Google Clone

Notamos que no es la versión original porque en la URL se refleja el localhost. Sin embargo, es casi idéntica. Piensa en cómo pudo haber sido creada su estructura.

-   Podríamos usar un _header_ con una etiqueta _nav_.
-   En el body crearíamos una _section_ con una etiqueta _icon_ o _img_.
-   Un _input_ para poder ingresar información en él.
-   Además de un par de _button_ para enviar la información.
-   En el _footer_ tenemos dos etiquetas _nav_ que están alineadas a la izquierda y derecha, cada una con hiperenlaces dentro de sus textos.

A continuación, vamos a configurar nuestro proyecto para empezar a escribir código.

_**Contribución creada con aportes de:** José Miguel Veintimilla._

## 4. Configuración del proyecto

### Creación de carpetas y subcarpetas

Lo primero que necesitamos es abrir nuestro editor de texto y crear una carpeta para nuestro archivo HTML, una subcarpeta para nuestro archivo CSS y otra para las imágenes que vayamos a utilizar. Recuerda que puedes llamar tu hoja de estilos como prefieras, pero siempre debe ser clara su importancia si tienes más de una.

### Generación del esqueleto HTML básico

Usamos un _shortcut_ para generar todo nuestro esqueleto HTML básico y empezar a modificarlo a partir de allí. Te dejo una lista con otros atajos de teclado para _Visual Studio Code_ [acá](https://carontestudio.com/blog/atajos-de-teclado-en-visual-studio-code/).

#### **Recordemos**:

-   **!DOCTYPE html**  sirve para avisar al navegador que estamos hablando de la versión HTML5.
-   **head** es una etiqueta contenedora, y no es visible para el usuario, pero es necesaria para manejar dependencias.
-   **body** es una etiqueta contenedora, y contiene todo lo visual con lo que el usuario puede interactuar.
-   **link** es una etiqueta de contenido que sirve para referenciar ciertos assets y por medio de esta invocaremos nuestro archivo css.

## 5. Qué son las Chrome Dev Tools

Son un conjunto de herramientas para desarrolladores web integradas en los navegadores. Prácticamente, todos los navegadores tienen Dev Tools instaladas. Nos permite ver el comportamiento de nuestro código para depurarlo y poder implementar mejoras.

### ¿Cómo acceder a las Dev Tools?

Lo primero es tener abierto en el navegador el proyecto que queremos trabajar. Para ello hacemos clic derecho en una parte vacía de la página y seleccionamos la opción “**inspeccionar**”.

Una vez abiertas las Dev Tools nos encontramos con varias pestañas y opciones. Nosotros nos centraremos en la pestaña elementos para visualizar y modificar nuestro proyecto.

## 6. Qué es el Header y cómo hacer su maqueteado

Continuemos justo donde nos quedamos en nuestro archivo _index.html_, donde ya teníamos el esqueleto básico para empezar. Vamos a crear las etiquetas una dentro de otra en el orden mostrado abajo.

1.  Lo primero, por supuesto, es abrir una etiqueta **header** dentro de nuestro body para delimitar toda el encabezado.
2.  **nav** nos indica que hay una barra de navegación dentro. Tenemos enlaces en nuestra barra de navegación.
3.  **ul** la usamos para crear una lista desordenada para colocar dentro los ítems.
4.  **li** son los ítems de una lista, sin embargo, lo que buscamos son enlaces. Para ello colocamos dentro una etiqueta ancla o **a**. En nuestro proyecto tenemos cuatro: Gmail, Imágenes, un ícono y una foto.
5.  **a** es una etiqueta para agregar enlaces a un texto.

Este es el resultado final que deberías tener dentro de tu etiqueta **body** hasta ahora:

```html
<body>

    <header>

        <nav>

            <ul>

                <li><a href="">Gmail</a></li>

                <li><a href="">Imagenes</a></li>

                <li><a href="">Icon</a></li>

                <li><a href="">Photo</a></li>

            </ul>

        </nav>

    </header>

  

</body>
```

**Nota**: No olvides que puedes instalar el Live Server desde la pestaña de Extensiones dentro de _Visual Studio Code_.

## 7. # Agregando estilos al Header

### Tipos de display

El display es la forma en que las etiquetas contenedoras se comportan entre ellas y posicionan su contenido. Existen tres tipos:

-   **layout**: El elemento expone su contenido utilizando el diseño de flujo (diseño en bloque y en línea).
-   **grid**: El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el modelo de cuadrícula.
-   **flex**: El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el modelo de flexbox.

### plicando estilos

Le aplicamos estilos al body, al header y al nav.

### Estilos al body

- Lo primero que haremos es abrir nuestro archivo _CSS_ enlazado a nuestro _html_ del proyecto y resetear los espacios dentro de la etiqueta _body_.

- Eliminamos el margin y el padding. Cambiamos el tipo de fuente y su tamaño.

- En caso de que quieras aplicar estilos a todas las etiquetas del proyecto, debes hacer anteponiendo un asterisco.

-   Usamos **display: flex** para alterar sus dimensiones y llenar el espacio disponible.
-   Usamos **justify-content: flex-end** para que mande el contenido a un extremo de la   página. En este caso el derecho.

```css
* {

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;

} 

html {

    font-size: 62.5%;

}

header {

    width: 100%;
    height: 60px;
    font-size: 1.6rem;

} 

header nav {

    display: flex;
    justify-content: flex-end;

}

```

## 8. Posicionar una lista en horizontal

### Editar una lista en HTML

Primero, vamos a modificar el 100% de nuestra etiqueta de lista no ordenada (ul). Para ello, necesitamos agregarle un identificador a esta etiqueta. Te recomendamos leer sobre la [metodología BEM](http://getbem.com/introduction/), que es una arquitectura que te permite, entre otras cosas, colocar nombres más claros a las clases y atributos.

**Recuerda**: las clases son genéricas, mientras que los id, únicos. Colocamos clases a elementos que se repetirán a lo largo del código, es decir, tendrán la misma clase. Los id no se pueden repetir.

### Estilos de la lista

Seguimos usando la metodología BEM para ser específicos al llamar a las clases y asegurarnos que no haya otra estructura parecida. Fíjate cómo está detallado.

-   Invocamos la clase como: la etiqueta _header_ que contenga un _nav_ con una clase llamada _nav-right-section_
-   **width**: tiene un ancho específico para que no tenga el 100% como el header
-   **height**: como ya definimos una altura a su padre (header) y no puede ser mayor, la colocamos automática, para que tome la altura de su padre
-   **display**: para posicionar los elementos
-   **list-style**: quitamos los bullets, ya que no los necesitamos
-   **justify-content**: centramos el contenido para que no se quede únicamente a la derecha
-   **align-items**: alineamos los elementos para no mantenerlos en la parte de arriba

### Eliminar el subrayado

Ahora solo nos falta eliminar el subrayado que tiene el texto. Como no lo queremos en ninguna etiqueta ancla, aplicamos los cambios a la etiqueta de manera general en la parte de arriba. La llamamos directamente.  

-   **text-decoration**: para quitar el subrayado.
-   **cursor: pointer**: para agregar la imagen de una mano al posicionar el cursor sobre el texto.

```css

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
} 

html {
    font-size: 62.5%;
} 

a {
    text-decoration: none;
    cursor: pointer;
}

header {
    width: 100%;
    height: 60px;
    font-size: 1.6rem;
}

header nav {
    display: flex;
    justify-content: flex-end;
}

header nav .barra-menu{

    width: 300px;
    height: auto;
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
}

nav .barra-menu a {
    margin-right: 15px;
    color: #000000;
}

nav .barra-menu li {
    margin-top: 15px;
}

```

## 9. Manejo de íconos e imágenes en etiquetas

Lo primero es aplicar una clase a la etiqueta en que se encuentra nuestro ícono y eliminar el texto para que no entre en conflicto con el ícono.

### Estilos a la imagen de perfil

Para empezar este paso, debemos obtener el enlace de nuestra imagen de perfil de Google.

1.  Vayamos a [google.com](https://www.google.com/) y hagamos clic derecho en nuestra foto.
    
2.  Clic en inspeccionar.  
    
3.  Vemos que la consola nos posiciona justo en la url de nuestra foto.  
    
4.  Copiamos ese enlace.
    
5.  Vamos a nuestro archivo HTML y cambiamos el contenido de nuestra barra de navegación Photos e insertamos una etiqueta img en su lugar.
    
6.  Pegamos el enlace en el atributo src.  
    

**Nota**: probablemente la URL sea demasiado larga para que la veas completa en la pantalla de tu editor. Para evitar ese molesto scroll, ve a la pestaña _View_ de tu editor y activa la función _Word Warp_.

Como te podrás dar cuenta, faltan algunos detalles para que se parezca a la página original de Google. Vamos a nuestro archivo CSS.  

-   Llamamos a nuestra etiqueta **_img_** dentro de la clase **_.nav-right-section_** de la etiqueta **_nav_**
-   Aplicamos un **_border-radius_** del **_50%_** para que sea completamente redondo
-   También aplicamos un **_margin-left_** de **_10_** píxeles para que no esté tan pegada al ícono de menú

📌Adicionalmente, te dejo una lista de sitios en los que puedes encontrar íconos para tus proyectos:

-   [Google Font Icons](https://fonts.google.com/icons?selected=Material+Icons)
-   [Flaticon](https://www.flaticon.es/)
-   [Fontawesome](https://fontawesome.com/icons?d=gallery)
-   [Iconos8](https://iconos8.es/)

## 10. Maquetado de la sección principal

### Creando la estructura

En la etiqueta _main_ colocamos todo el contenido que es principal en nuestro proyecto. Puedes considerarlo como todo lo que esté por debajo del _header_ y antes del _footer_. Así es, el cuerpo de la página.  
Generamos tres secciones: una para el logo, otra para la barra de búsqueda y el último para los botones de “buscar” y “me siento con suerte”.

Como tenemos varias secciones, es importante que las diferenciemos con clases.

-   En la primera sección añadimos una clase. En este caso **_main-logo_**.
-   Agregamos una etiqueta **_img_** para el logo. Después lo agregamos, no te preocupes.
-   En la segunda sección añadimos una clase. En este caso **_main-input_** (por ser el contenedor principal)
-   Notamos que hay tres elementos: un ícono de lupa, un input para ingresar texto, y un botón para comando por voz
-   Creamos dos etiquetas **_div_**. En la primera añadimos una clase. En este caso **_main-input-container_** (porque es el contenedor que lleva el input)
-   Hacemos un **_span_** para colocar un ícono y le añadimos una clase. En este caso **_search-icon_** (por la lupa).
-   Generamos un **_input_**
-   Creamos una etiqueta **_a_** para ligar el ícono de micrófono a una acción y le añadimos una clase. En este caso **_micro-icon_**
-   En la tercera sección añadimos una clase. En este caso **_main-buttons_**
-   Necesitamos dos contenedores, por lo que creamos dos **_div_**
-   Añadimos una etiqueta **_button_** en cada una y escribimos el texto que lleva cada una

#### Deberías tener un resultado como este:

```html

<main>
        <section class="main-logo">
            <img src="" alt="">
        </section>

        <section class="main-input">
            <div class="main-input-container">
                <span class="search-icon">
                
                </span>
                <input type="text">
                <a class="micro-icon" href=""></a>
            </div>

        </section>
        <section class="main-buttons">
            <div>
                <button>Buscar con Google</button>
            </div>
            <div>
                <button>Me siento con Suerte</button>
            </div>
        </section>

    </main>

```

## 11. Estilos en la sección principal

### Pasos para darle estilos al _main_:

1.  Luego de llamar a nuestra etiqueta **_main_**, lo primero es separarla un poco del **_header_**.
2.  Añadimos un **_margin-top_** de **_150_** píxeles.
3.  Centramos el contenido con un **_text-align: center_**.

### Pasos para poner la sección Logo de Google

1.  Llamamos la clase desde la etiqueta padre para ser específicos: **_main .main-logo_**
2.  Le definimos un **_width_** de 530 píxeles, que serán las dimensiones que tendrá el logo.
3.  Le damos un **_margin: 0 auto_**. Cuando agregamos un ancho a una etiqueta, pero aún hay espacio sobrante y queremos que se posicione de manera automática, aplicamos **_auto_**. Esto hace que divida el espacio sobrante entre dos y coloca a los lados. Así nos aseguramos que se mantenga siempre en el centro
4.  Le damos un **_margin-bottom_** de **_35_** pixeles.

Además, si queremos que el logo tenga exactamente las dimensiones que tiene el logo original de Google, podemos crear otro estillo llamando a la etiqueta **_img_** y aplicando un **_width_** de **_272px_** y un **_height_** de **_92px_**.

```css

/* Trabajar con el Main */
main {
    margin-top: 150px;
    text-align: center;
}
 
 main .main-logo {
    width: 530px;
    margin: 0 auto;
    margin-bottom: 35px;
}
  
main .main-logo img {
    height: 92px;
    width: 300px;
}

```

## 12. Estilos en la sección del input


Al observar la barra de búsqueda de Google, nos damos cuenta de los varios asuntos que debemos resolver: una barra más ancha, dos botones dentro del input y un efecto de sombra al posicionar el cursor encima. Resolvamos todos uno por uno.

### Cómo darle estilos al input

-   Llamamos la clase **_main. main-input_**.
-   Ajustamos el **_width_** a **_530_** píxeles.
-   Colocamos el **_margin: 0 auto_** para que se posicione en la mitad.
-   **_margin-bottom: 35px_** para que la sección del input empuje la sección de botones a la parte de abajo.
-   Llamamos la clase que contiene a los íconos **_main .main-input-container_**. Recuerda que creamos un contenedor dentro de un contenedor para manejar correctamente sus estilos.
-   Ajustamos un **_width: 525px_** para que no tenga el mismo tamaño que su padre.
-   Colocamos un **_border-radius: 100px_** para redondear los extremos.
-   Generamos un borde de un pixel con el color del borde del input original de Google con **_border: 1px solid #dfe1e5_**.
-   Colocamos **_display: flex_** para que los elementos se posicionen de manera lineal.
-   Colocamos **_justify-content: center_** para situarlos en el centro.
-   Alineamos los elementos al centro con **_align-items: center_**.

### Redimensionando el input

-   Llamamos una clase **_main-input_** que llegue a la etiqueta input con **_main .main-input input_**.
-   Ajustamos el **_width: 450px_** y el **_height: 40px_** para que sea mas pequeño que su contendor padre.
-   Quitamos el borde permanente con **_boder: none_** y el que se genera al hacer clic sobre el input con **_outline: none_**.

### Propiedades que puedes usar para distintos estilos de bordes

**Adicional, te dejo una lista de propiedades que puedes usar para distintos estilos de bordes.**  
La **_border-stylepropiedad_** especifica qué tipo de borde mostrar.  
Se permiten los siguientes valores:

-   **_dotted_** - Define un borde punteado
-   **_dashed_** - Define un borde punteado
-   **_solid_** - Define un borde sólido
-   **_double_** - Define un doble borde
-   **_groove_**- Define un borde acanalado en 3D. El efecto depende del valor del color del borde.
-   **_ridge_**- Define un borde ondulado en 3D. El efecto depende del valor del color del borde.
-   **_inset_**- Define un borde insertado en 3D. El efecto depende del valor del color del borde.
-   **_outset_**- Define un borde de inicio 3D. El efecto depende del valor del color del borde.
-   **_none_** - Define sin borde
-   **_hidden_** - Define un borde oculto
-   La **_border-stylepropiedad_** puede tener de uno a cuatro valores (para el borde superior, el borde derecho, el borde inferior y el borde izquierdo).

```css
main .main-input {
    width: 530px;
    margin: 0 auto;
    margin-bottom: 35px;
}

main .main-input-container {
    width: 525px;
    border-radius: 100px;
    border: 1px solid #dfe1e5;
    display: flex;
    justify-content: center;
    align-items: center;
}

main .main-input input {
    width: 450px;
    height: 40px;
    border: none;
    outline: none;
}

```

## 13. 