
# Cómo escribir HTML / CSS más rápido con atajos de Emmet

Emmet es una de mis funciones integradas favoritas de VS Code. También está disponible como una extensión en otros editores de código.

Piense en Emmet como una taquigrafía. Con él, puede escribir fácilmente una gran cantidad de código rápidamente. Acelera su flujo de trabajo HTML y CSS.

Entender cómo usar Emmet es literalmente una superpotencia. ¿Algunos incluso lo han llamado un código de trucos para programar.

Y es solo una de las muchas características asombrosas integradas de VS Code.

Recientemente, se lanzó un curso completo y detallado llamado  **[Become A VS Code SuperHero.](https://courses.codestackr.com/vs-code-superhero?coupon=LAUNCH)**  (Conviértete en un super héroe de VS Code). Cubre todos los aspectos de VS Code en gran profundidad.

Este artículo se basa en una de las 11 secciones del curso:  **escritura y formato de código.**

## HTML

Con Emmet puede crear rápidamente una plantilla HTML en un abrir y cerrar los ojos. En un archivo HTML, simplemente escriba  `!` y verá que Emmet ha aparecido como sugerencia. Ahora presione  `Enter`. Ahí lo tiene, una página web HTML básica en blanco lista para usar.

Si nunca antes ha visto HTML y no tiene idea de qué es todo esto, no se preocupe. Solo estoy demostrando las capacidades de VS Code y Emmet. No es necesario que sepas qué significa todo esto en este momento.

### Etiquetas Básicas

Para crear etiquetas HTML básicas, simplemente escriba el nombre de la etiqueta y presione  `Enter`. Observe cómo Emmet coloca su cursor dentro de la etiqueta. Ahora está configurado para continuar escribiendo dentro de la etiqueta.

-   Intente escribir:  `div` y luego  `Enter`, o  `h1 Enter`, o  `p Enter`.
-   Estos también funcionan:  `bq` para un  `<blockquote>,` `hdr` para un  `<header>`,  `ftr` para un  `<footer>`,  `btn` para un  `<button>` y  `sect` para una sección.

### Clases

Si está familiarizado con CSS, Emmet usa la misma forma para referirse a las clases usando un  `.`. Para definir una clase junto con la etiqueta, simplemente agréguela así:

-   `div.wrapper` —> `<div class="wrapper"></div>`
-   `h1.header.center` —> `<h1 class="header center"></h1>`

### Identificaciones

Los Id funcionan de manera muy similar:

-   `div#hero` —> `<div id="hero"></div>`

### combinatoria

Pueden combinar estos juntos:

-   `div#hero.wrapper` —> `<div id="hero" class="wrapper"></div>`

### Atributos

También podemos especificar atributos para las etiquetas:

-   `img[src="cat.jpg"][alt="foto de gato"]` —> `<img src="cat.jpg" alt="foto de gato" />`

### contenido

Para incluir contenido dentro de la etiqueta, simplemente envolvemos el contenido entre llaves,  `{ }`.

-   `p{Esto es un párrafo}` —> `<p>Esto es un párrafo</p>`

### Etiquetas hermanos e hijos

Cada vez se pone mejor. También podemos especificar etiquetas hermanos e hijos usando los caracteres  `+` y  `>`.

-   `section+section` —> `<section></section><section></section>`
-   `ul>li` —> `<ul><li></li></ul>`

### escalando

Tienes que intentar imaginar lo que estás construyendo en tu cabeza mientras escribes la taquigrafía de Emmet. En este ejemplo, "treparemos" por la estructura HTML usando  `^`.

`div+div>p>span+em^bq`

Resultado:

```html
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

Aquí, queríamos que la etiqueta en blockquote estuviera al mismo nivel que el párrafo. Por eso, necesitábamos "trepar". De lo contrario, estaría dentro del párrafo.

### agrupar

Si su estructura es muy compleja, es posible que desee agrupar etiquetas en lugar de atravesar trepando.

En este ejemplo, crearemos un encabezado (header) y un pie de página (footer) sin escalar usando paréntesis  `( )`.

`div>(header>ul>li>a)+footer>p`

Resultado:

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

### multiplicacion y $

Podemos generar múltiples etiquetas multiplicando ( `*`) y numerando elementos en secuencia usando un signo de dólar ( `$`).

-   `ul>li*5` —> `<ul><li></li><li></li><li></li><li></li><li></li></ul>`
-   `ul>li{Item $}*3` —> `<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>`

Incluso puede personalizar la secuencia de numeración rellenando con ceros, comenzando con un número específico e incluso en la dirección inversa.

Pad con ceros: `u>li.item$$$*5`

Resultado:

```html
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```

Comience con un número específico: `ul>li.item$@3*5`

Resultado:

```html
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

Dirección inversa: `ul>li.item$@-*5`

Resultado:

```html
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

Dirección inversa desde un número específico: `ul>li.item$@-3*5`

Resultado:

```html
<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>
```

### Nombres de etiquetas implícitos

Hay ciertas etiquetas que no es necesario escribir y pueden estar implicadas.

-   Una clase definida inicialmente sin etiqueta estará indicada como  `<div>`.  
    `.wrapper` —> `<div class="wrapper"></div>`
-   Una clase definida dentro de una etiqueta de énfasis estará implícita como  `<span>`.  
    `em>.enfasis` —> `<em><span class="enfasis"></span></em>`
-   Una clase definida dentro de una lista estará implicada como un elemento de lista.  
    `ul>.item` —> `<ul><li class="item"></li></ul>`
-   Una clase definida dentro de una tabla estará indicada como  `<tr>` y dentro de una fila será un  `<td>`.    
    `table>.fila>.col` —> `<table><tr class="fila"><td class="col"></td></tr></table>`

### Envolver con etiquetas

Habrá ocasiones en las que tenga un código existente que desee envolver con una etiqueta. Podemos hacerlo fácilmente con Emmet.

Simplemente resalte el código que desea envolver y abra la paleta de comandos ( `F1`). Luego busque Emmet: Ajustar con abreviatura  `Emmet: Wrap with Abbreviation`. A continuación, se le presentará un cuadro de diálogo donde puede escribir el elemento.

`test` —> `<div>test</div>`

También puede utilizar la sintaxis estándar de Emmet en este cuadro de diálogo. Intente ajustar un poco de texto con  `span.wrapper`.

De forma predeterminada, esta funcionalidad no está apoyada a un método abreviado de teclado. Por lo tanto, si lo usa con frecuencia, es posible que desee agregar un acceso directo personalizado para él.

### lorem ipsum

"Lorem Ipsum" es un texto ficticio utilizado por los desarrolladores para representar datos en una página. Simplemente escriba  `lorem` y presione  `Enter`. Emmet generará 30 palabras de texto falso que puede usar como relleno en su proyecto.

También se puede definir la cantidad de palabras.

-   `lorem10` te dará 10 palabras de texto aleatorio.

### Poniéndolo todo junto

Usemos varias cosas que hemos aprendido hasta ahora. Prueba esto:

`ul.mi-lista>lorem10.item-$*5`

Resultado:

```html
<ul class="mi-lista">
  <li class="item-1">Lorem ipsum dolor sit amet.</li>
  <li class="item-2">Numquam repudiandae fuga porro consequatur?</li>
  <li class="item-3">Culpa, est. Tenetur, deleniti nihil?</li>
  <li class="item-4">Numquam architecto corrupti quam repudiandae.</li>
</ul>
```

## CSS

En CSS, Emmet tiene una abreviatura para cada propiedad. No voy a enumerarlos todos, pero señalé los más utilizados. Para ver la lista completa, consulte la  [hoja de referencia](https://docs.emmet.io/cheat-sheet/)  de Emmet.

### Posición

-   `pos` —>  `position:relative;` (Por defecto es relativo)
-   `pos:s` —> `position:static;`
-   `pos:a` —> `position:absolute;`
-   `pos:r` —> `position:relative;`
-   `pos:f` —> `position:fixed;`

### Mostrar

-   `d` —>  `display:block;` (Lo predetermina un bloque)
-   `d:n` —> `display:none;`
-   `d:b` —> `display:block;`
-   `d:f` —> `display:flex;`
-   `d:if` —> `display:inline-flex;`
-   `d:i` —> `display:inline;`
-   `d:ib` —> `display:inline-block;`

### Cursor

-   `cur` —> `cursor:pointer;`

### Color

-   `c` —> `color:#000;`
-   `c:r` —> `color:rgb(0, 0, 0);`
-   `c:ra` —> `color:rgba(0, 0, 0, .5);`
-   `op` —> `opacity: ;`

### Margen y relleno

-   `m` —> `margin: ;`
-   `m:a` —> `margin:auto;`
-   `mt` —> `margin-top: ;`
-   `mr` —> `margin-right: ;`
-   `mb` —> `margin-bottom: ;`
-   `ml` —> `margin-left: ;`
-   `p` —> `padding: ;`
-   `pt` —> `padding-top: ;`
-   `pr` —> `padding-right: ;`
-   `pb` —> `padding-bottom: ;`
-   `pl` —> `padding-left: ;`

### Tamaño de la caja

-   `bxz` —> `box-sizing:border-box;`

### Ancho

-   `w` —> `width: ;`
-   `h` —> `height: ;`
-   `maw` —> `max-width: ;`
-   `mah` —> `max-height: ;`
-   `miw` —> `min-width: ;`
-   `mih` —> `min-height: ;`

### Borde

-   `bd` —> `border: ;`
-   `bd+` —> `border:1px solid #000;`
-   `bd:n` —> `border:none;`

### ¡Emmet es increíble!

Con Emmet, puede crear una estructura HTML realmente compleja con una línea. Es realmente asombroso. Y también funciona con CSS.

Puede ver cómo Emmet puede aumentar su eficiencia y velocidad al escribir HTML y CSS.

Si desea aumentar aún más su eficiencia y velocidad mientras usa VS Code, consulte el curso Conviértase en un Superhéroe de VS Code ( [**Become A VS Code Super Hero**](https://courses.codestackr.com/vs-code-superhero?coupon=LAUNCH) ).

El curso profundiza mucho más en estos conceptos y te ayuda a convertirte en un desarrollador de superhéroes rápido y eficiente :)

traducido del artículo de  **[Jesse Hall](https://www.freecodecamp.org/news/author/jesse/)**  -  **[How to Write HTML/CSS Faster with Emmet Cheat-Codes](https://www.freecodecamp.org/news/write-html-css-faster-with-emmet-cheat-codes/)**

🔥🐺Esta información se obtuvo de la siguiente [página web](https://www.freecodecamp.org/espanol/news/untitled-11/)