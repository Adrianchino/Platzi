
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

## 13. Íconos y manejo de background hover

### Cómo añadir el efecto hover

1.  Llamamos la etiqueta contenedora del **_input_** con el pseudo-elemento **_hover_**. Es decir, los diseños con hover que apliquemos solo se mostrarán cuando coloquemos el cursor encima del elemento.
2.  Con **_box-shadow: 0 1px 6px 0 #20212447_** agregamos una sombra paralela con un color en tono oscuro.
3.  Con **_border-color: #dfele500_** añadimos un borde más oscuro, es decir, resalta más como el input original.

### Cómo agregar íconos

Vamos a agregar dos íconos: el de lupa y el de micrófono.

### Pasos para agregar el ícono de lupa

1.  Primero, llamamos la clase **_.search-icon_** desde nuestra clase **_.main input_**.
2.  Añadimos un **_background-image_** e insertamos la **_url_** del ícono entre comillas. Te dejo el enlace: “[https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_search_48px-512.png](https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_search_48px-512.png)”.
3.  **_background-repeat: no-repeat_** para evitar que el navegador repita la imagen por rellenar espacio.
4.  **_background-position: center_** para centrarlo.
5.  **_background-size: contain_** para que tome el tamaño del contenedor padre.
6.  Añadimos un **_width: 18px_** y un **_height: 18px_** para redimensionar el ícono.

### Pasos para agregar el ícono de micrófono

1.  Llamamos la clase **_.micro-icon_** desde n***uestra clase .main input***.
2.  Copiamos el código de arriba y cambiamos la url del ícono de micrófono. Te dejo el enlace: “[https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/726px-Google_mic.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/726px-Google_mic.svg.png)”.
3.  -   Añadimos **_cursor: pointer_** para que el cursor adopte la forma de la manita al colocarlo sobre el ícono.

Deberíamos tener renderizado en nuestro navegador algo como esto:

```css
main .main-input-container:hover {
    box-shadow: 0 1px 6px 0 #20212447;
    border-color: #dfe1e500;
}

main .main-input .search-icon {
    background-image: url('https://img.icons8.com/android/24/000000/search.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

main .main-input .micro-icon {
    background-image: url('https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png');
	background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
```

## 14. Estilos en los botones

### Cómo aplicar los estilos de los botones

1.  Llamamos la clase que contiene los botones dentro de la etiqueta **_main_**.
2.  Ajustamos el **_width: 530px_**.
3.  Ajustamos el **_margin: 0 auto_** para que se posicione siempre en el centro.

### Definir la posición de los botones

1.  Llamamos la clase que contiene los botones que contenga una etiqueta **_div_** con **_main .main-buttons div_**.
2.  Ajustamos el **_display_** en **_inline-block_**. Esto es porque por defecto el navegador le asigna a las cajas **_display: block_**, lo que hace que esté una encima de otra. Al usar **_inline-block_** las ponemos una a lado de otra. Por esto le asignamos la misma propiedad a las dos cajas.

### Pasos para darle diseño de caja a los botones

1.  Llamamos la clase que contiene los botones que contenga la etiqueta **_button_** con **_main .main-buttons button_**.
2.  Le damos una altura con **_height: 36px_**.
3.  Ajustamos el color de fondo con **_background-color: #f2f2f2_**.
4.  Cambiamos el borde para que no se desplaze al colocar el cursor encima con **_border: 1px solid #f2f2f2_**.
5.  Cambiamos el tamaño de fuente con **_font-size: 14px_**.
6.  Cambiamos el color de la fuente con **_color: #5f6368_**.
7.  Redondeamos los bordes con **_border-radius: 5px_**.
8.  Añadimos espacio interno a los lados con **_padding: 0 15px_**.
9.  Añadimos una separación entre los botones con **_margin-right: 15px_**.

### Cómo poner el efecto _hover_ en los botones

Ahora necesitamos que al pasar el cursor sobre los botones, cambie el color del texto y se cree una sombra alrededor de la caja. Para ello:

1.  Llamamos la clase que contiene los botones con el pseudo-elemento **_hover_**. Así: **_main .main-buttons button:hover_**.
2.  Generamos un borde sólido con **_border: 1px solid #c6c6c6_**.
3.  Generamos una sombra con **_box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1_)**.
4.  Cambiamos el color del texto con **_color: #222_**.
5.  Añadimos un color de fondo con **_background-color: #f8f8f8_**.
6.  Agregamos **_cursor: pointer_** para que el ícono del cursor cambie a una manita al posicionarlo sobre los botones.

En nuestro navegador deberíamos tener un resultado como este:

```css
main .main-buttons {
    width: 530px;
    margin: 0 auto;
}

main .main-buttons div {
    display: inline-block;
}

main .main-buttons button {
    height: 36px;
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    font-size: 1.5rem;
    color: #5f6368;
    border-radius: 5px;
    padding: 0 25px;
    margin: 0 10px;
} 

main .main-buttons button:hover {
    border: 1px solid #c6c6c6;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    color: #222;
    background-color: #f8f8f8;
    cursor: pointer;
}
```

## 15. Maquetado del Footer

### Pasos para poner la estructura del footer

1.  Primero abrimos nuestra etiqueta **_footer_**. Necesitamos seccionarla en dos partes: contenedores izquierdos y derechos.
2.  Creamos dos listas no ordenadas (**_ul_**) con cuatro y tres elementos (**_li_**) respectivamente.
3.  Creamos una etiqueta ancla (**_a_**) a cada elemento (**_li_**) de nuestra lista.
4.  Asignamos la clase **_footer-left_** a la primera lista y **_footer-right_** a la segunda.
5.  Ahora solo agregamos el texto dentro de cada una de los elementos (**_li_**) de las listas.

📌**Tip**: puedes usar _emmet_ para abreviar la creación de las listas. De esta manera:
```html
ul*2>li*4>a
```

Deberíamos tener una imagen así en nuestro navegador:

```html
	<footer>
        <ul class="footer-right">
            <li><a href="">Publicidad</a></li>
            <li><a href="">Negocios</a></li>
            <li><a href="">Acerca de</a></li>
            <li><a href="">Como funcuina la busqueda</a></li>
        </ul>

        <ul class="footer-right">
            <li><a href="">Privacidad</a></li>
            <li><a href="">Condiciones</a></li>
            <li><a href="">Preferencias</a></li>
        </ul>
    </footer>
```

## 16. Estilos en Footer

### Etiqueta footer

1.  Llamamos la etiqueta _footer_.
2.  Le asignamos el **_width_: 100%** para que ocupe todo el ancho de la página y un **_height_: 50px**.
3.  Para asegurarnos que el _footer_ siempre esté al final de la página y no se mueva, le damos **_position: absolute_**.
4.  Además, quitamos el espacio de abajo con **_bottom:_ 0**.
5.  Usamos **_display: grid_** para generar la cuadrícula en que estará el contenido de nuestro proyecto. La propiedad grid-template-colums: 1fr 1fr nos permite dividir el _footer_ en dos fracciones.
6.  Alineamos los elementos con _**align-items: center.**_
7.  Cambiamos el tamaño de fuente con _**font-size: 13px.**_
8.  Le damos un color de fondo con _**background-color: #f2f2f2.**_
9.  Añadimos un borde superior con _**border-top: 1px solid #e4e4e4**_.

### Etiqueta ul

1.  Llamamos la etiqueta ul desde el _footer_.
2.  Le damos un **margin: 10px** para que el contenido no esté tan pegado al contenedor padre.
3.  Le quitamos los _bullets_ con _**list-style: none**_.
4.  Posicionamos el contenido en horizontal con _**display: flex**_.
5.  Quitamos el espaciado interno izquierdo con _**padding-left: 0**_.

### Contenedor izquierdo

1.  Llamamos la clase _footer-left_ desde nuestra etiqueta _footer_ con _footer .footer-left._
2.  Movemos los elementos a la izquierda con _**justify-self: left.**_

### Contenedor derecho

1.  Llamamos la clase _footer-left_ desde nuestra etiqueta _footer_ con _footer .footer-right._
2.  Movemos los elementos a la derecha con _**justify-self: right.**_

### Agregar estilos a los elementos

1.  Llamamos a las etiquetas ancla dentro de los elementos li de las listas no ordenadas de nuestra etiqueta _footer_ con _footer ul li a_.
2.  Agregamos un **_margin: 10px_** para separar los elementos entre sí.
3.  Cambiamos su color con _**color: #5f6368**_.

Nuestro proyecto final se debería ver así:

```css
/* Trabajar con el Footer */

footer {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    font-size: 1.3rem;
    background-color: #f2f2f2;
    border-top: 1px solid #e4e4e4;
}
  
footer ul {
    margin: 10px;
    list-style: none;
    display: flex;
    padding-left: 0;
}

  
footer .footer-left {
    justify-self: left;
} 

footer  .footer-right {
    justify-self: right;
}

footer ul li a {
    margin: 10px;
    color: #5f6368;
}
```

## 17.  Cierre: diferencias entre CSS Grid y Flexbox

### Diferencias entre Grid y flexbox

Lo cierto es que ambos son complementos. Veamos esta imagen para tenerlo más claro:  

Los espacios en las etiquetas no son visibles, pero posicionan el contenido en un lugar determinado. Solo podemos ver qué tanto ocupan cuando abrimos las DevTools de nuestro navegador. Entonces, ¿qué hace cada una?

-   **Grid**: genera una cuadrícula que nos ayuda a dividir las cajas que son etiquetas contenedoras.
-   **Flex**: nos ayuda a posicionar el contenido de las etiquetas contenedoras.

👉 Es un ejercicio 100% personal y autónomo. **Ingresa [aquí](https://platziform.typeform.com/to/uy7tRTV5) para hacerla, te tomará 3 minutos**.

## Examen

Resumen

1.

¿Cómo se le llama al patrón de elementos HTML, clases y IDs usado en CSS para agregar estilos?

`Selector'

2.

¿Cómo se le llama al conjunto de elementos que agregan estilos a etiquetas de HTML?

`Reglas` 

REPASAR CLASE

3.

¿Cuál es la declaración correcta para colocar una imagen de fondo en CSS?

`background-image: url(" ");`

4.

¿Para que nos ayuda la propiedad de "display" en CSS?

``Es la forma en que las etiquetas/elementos HTML se comportan, ya sea como elementos de bloque o elementos en linea.``

5.

¿Qué elemento utilizarías en tu archivo de CSS para poder seleccionar y resetear todos los estilos que genera el navegador por defecto?

``*``

6.

¿De qué forma podría posicionar con CSS el contenido que esté dentro de algún elemento de HTML hacia algún extremo?

`Justify-conten: Flex-end`

REPASAR CLASE

7.

¿Para qué nos ayudan las clases y IDs en CSS?

``Para seleccionar uno o varios elementos HTML y agregarles estilos de forma especifica.``

8.

¿Cuál es la diferencia entre una clase y un ID de CSS?

``Las clases nos ayudan a crear estilos para grupos de elementos de HTML, son genéricas. En cambio, los IDs nos ayudan para aplicar estilos de manera única a algún elemento especifico..``


REPASAR CLASE

9.

¿Cuál es la propiedad para agregar una sombra de fondo en CSS?

``box-shadow``

10.

¿Cuál de las siguientes opciones sería una pseudoclase en CSS?

``:hover``

