# Conocimientos Css Grid Layout 

## 1. Tips para llevar tu conocimiento de CSS a otro nivel + Quices

#### Archivos de la clase

[sliides-curso-de-css-grid-layout.pdf](https://static.platzi.com/media/public/uploads/sliides-curso-de-css-grid-layout_5d392acf-26ce-4cf6-9fde-262064f0e019.pdf)

## 2. ¿Cómo fue pensado CSS cuando se creó?

Tim Berners Lee creó WWW y HTML en 1991:  
(el tenía un hoja de estilos **NO CSS**, pero no quería compartirlo ya que pensaba que un feature así tenia que ser NATIVO).  
**1993:**

- Viola(navegador), tenía su propio lenguaje de estilos y queria convertirlo en un lenguaje estandara para la web.  
    **1994:**
- NSCA Mosaic(navegador), tenía a Marc Andreessen como co-creador, les dijo a los desarrolladores que no había forma de trabajar con algo así(CSS).  
    -**håkon wium lie**: sacó una propuesta para algo así **CHSS** .
- Se dió a la luz presentando dicha propuesta inicial. debatiendo si cualquier usuario pudiera manipular los estilos.  
    **1995:**
- **håkon y Bert Bos:** se unen y responder al 1er borrador en la conf de WWW en 1995.(algó que término siendo muy importante fue que sacarón la “H” y término siendo CSS)
- Se siguió debatiendo el control del usuario sobre los estílos, esta idea término siendo rechazada.
- **W3C:** saca una junta, ya que era de su interés.  
    **1996:**
- **_EL NACIMIENTO DE CSS:_** La cual término naciendo por recomendación de _W3C_.  
    **Primeros navegadores Compatibles:**
- Internet Explorer 3
- NETSCAPE
- OPERA  
    **CSS 2:** nace en 1998, con correcciones con las limitaciones y el problema de los elementos **FLOTANTES.**

## 3. Limitaciones de CSS y el problema de los elementos flotantes

### 💥 Limitaciones de CSS y el problema de los elementos flotantes

<h4>**Ideas/conceptos claves**</h4>

**columnas falsas** es una técnica que hace una ilusión cuando una columna es más pequeña que otra se la rellena de un background de tipo imagen

<h4>**Apuntes**</h4>

- Los primeros diseños de CSS eran una mezcla entre elementos flotantes y posicionados
    
    - Haciendo que se tengan limitaciones de control
    - Provocando que la información no se vea uniforme
- Existía una frustración por la falta de columnas de altura completa
    
    - Para solucionarlo se creó una técnica de **columnas falsas**
- Se empieza hablar de Diseño Responsivo
    
    - Ethan Marcotte ⇒ Tecnica de diseño responsivo
    
- Se empieza a trabajar con elementos flotantes
    
    - El problema está que solo funciona cuando se calcula con precisión el ancho y si el contenido tiene la misma altura
    - La solución fue que se comenzó a trabajar con columnas a través de contenedores para cada una y no con elementos independientes
    - Tambien se comienza a usar display: table que también se pueden utilizar para elementos que no son elementos de tablas
- Existen una gran cantidad de técnicas que son simplemente trucos
    
    - Por ello CSS se ha visto difícil y frágil porque no había herramientas de diseño

**RESUMEN:** En el principio usar CSS implicaba usar trucos, comenzando desde las columnas, columnas de tamaño completo, el diseño responsivo, etc. Era de esta manera debido a que no se tenían muchas herramientas

## 4. Herramientas que nos han facilitado el camino

### <h4>**Ideas/conceptos claves**</h4>

Post procesadores son herramientas que procesan el CSS y lo transforman en una nueva hoja de CSS que le permiten optimizar y automatizar los estilos para los navegadores actuales

#### <h4>**Apuntes**</h4>

- La comunidad desarrolló herramientas para facilitar el camino como técnicas
- **Arquitecturas**
    - Es tener una regla general en CSS
    - Usando sistema de clases como ser BEM
- **Pre y Post procesadores**
    - Pre procesadores ⇒ Cambia la sintaxis de CSS permitiendo trabajar más rápido
    - Post procesadores
- **Diseño de componentes**
    - Ej. Atomic Design
    - Lo que se busca ya no es trabajar con páginas enteras sino con componentes
- **Frameworks**
    - Muchos sitios iguales se deben a frameworks como Bootstrap y Foundation
    - Nos permiten trabajar de una manera sencilla con los estilos
- **Performance**
    - Es importante revisar cuanto va ser el costo en el navegador
- **Accesibilidad**
    - Actualmente se busca que todo tipo de personas puedan acceder a nuestros sitios web
- **Evergreen Browsers**
    - Navegadores compatibles con nuevas características de la web

## 5. ¿CSS Grid es una idea nueva? La evolución de la especificación

> CSS comenzó como algo muy simple.

> Era solo una forma de crear una vista de un documento en una pantalla pequeña muy simple en ese momento.

> Hace veinte años, las pantallas eran muy pequeñas. Entonces, cuando vimos que podíamos hacer una hoja de estilo para documentos, pensamos: …

> Bueno, ¿qué más podemos hacer ahora que tenemos un sistema para hacer hojas de estilo?

- Cuando comenzaron en CSS pensaron tomar un diseño similar a las revistas
    
    - Las imágenes, textos, pie de páginas tenían ciertos lugares
    - Todo el documento tenía un sentido
- Se tenía la idea de un sistema de layout
    
- Microsoft necesitaba urgentemente una herramienta de diseño robusto y flexible para la web si la web iba a ser una opción para el desarrollo de aplicaciones nativas en windows
    
- Hubo 3 ideas fundamentales
    
    1. Idea de Microsoft
    2. Diseño avanzado de Bos
    3. Adición de líneas de cuadricula de Linss
- Antes de que una recomendación candidata (Borrador Final) pueda convertirse en una recomendación propuesta, la W3C necesita ver al menos dos implementaciones independiendientes e interoperables
    
- Hubo un cambio fundamental con CSS Grid
    
    - **Jen Simmons** ⇒ Colocó muchas demostraciones que creó para CSS Grid en la web
- Sin el entusiasmo de los desarrolladores, proveedores de navegadores son reacios a gastar dinero para ver si la idea gana terreno
    
- Los navegadores empezaron a sacar su compatible con los navegadores
    

**RESUMEN:** La adopción de CSS Grid fue progresiva, fue algo que se tenía la idea de crear un layout de este tipo. Gracias al gran recibimiento que tuvo los proveedores de navegadores decidieron invertir en esta característica.

## 6. Qué significa Grid para CSS?

<h4>**Apuntes**</h4>

- CSS Grid requiera una forma completamente de pensar sobre el diseño en CSS
- Es una de las herramientas de diseño más poderosa inventada para CSS
- Es una alternativa más simple a diferencia de técnicas del pasado

![example4-screenshot.png](https://static.platzi.com/media/user_upload/example4-screenshot-fbaed83b-b542-4ef2-86ba-06fd49a8134e.jpg)

## 7. Técnicas de alineamiento antes de CSS Grid: margin y line-height

### **Margin Collapse**  

El colapso de márgenes ocurre cuando el margen top y bottom de 2 elementos colindan y el margen final es el que sea mayor. Es decir, si un elemento tiene `margin-bottom: 20px` y el otro elemento `margin-top: 10px`, el margen final entre ambos elementos no será de 30px, si no que será de solo 20px.  
Cabe aclarar que esto ocurre cuando usamos el `display` por defecto `block`.

## 8. Técnicas de alineamiento antes de CSS Grid: table-cell y positions

Los valores que recibe la función _**translate**_ se calculan con base en el **tamaño del elemento**. Esto significa que si el elemento tiene un width de 60px, al usar `transform: translate(-100%, 0)` sería lo mismo que si pusiéramos `transform: translate(-60px, 0)`.  
Aplica de igual forma para el eje Y con respecto al height.

hay otra técnica de alineamiento usando calc(), y sería de la siguiente manera:

```css
.elemento1{
	position: absolute;
	top: calc(50% - 30px);
	left: calc(50% - 30px);
}
```

## 9. Técnicas de alineamiento antes de CSS Grid: pros y contras


Las técnicas de alineamiento vistas son pertenecientes a CSS2 pero se siguen utilizando a la fecha, claro que estas cuentan con sus ventajas y desventajas.

Margin

- Ventajas: El valor auto alinea horizontalmente cualquier elemento con cualquier ancho.
- Desventajas: Alinear verticalmente, ya que, en cada caso, deberán calcularse estos valores.

line-height

- Ventajas: correcta alineación.
- Desventajas: si el texto ocupa más de una linea el elemento toma un alto más grande de lo necesario para los cálculos.

table-cell

- Ventajas: La alineación vertical no esta condicionada por fuentes, tamaños de fuentes o alturas de linea.
- Desventajas: vertical-align sólo se aplica a elementos inline.

La mayor limitante de todas ellas es que contienen muchas propiedades físicas:

- margin-top
- padding-bottom
- border-right
- left

## 10. Modos de escritura y ejes de alineamiento + Reto

Curioso, no conocía lo de los modos de escritura 🤔, si hubiese tenido que hacer un efecto similar, lo más probable es que hubiese hecho alguna cosa rara con Flexblox y rotates jaja  
.  
Por cierto, la propiedad `overflow: hidden;` sirve para **ocultar** cualqueir elemento hijo que se salga del elemento padre (siempre y cuando el elemento padre tenga dicha propiedad). Por ejemplo, si tu elemento padre tiene una altura de 500px, pero dentro tienes un texto que rebasa esos 500px, con un `overflow: hidden;` en el padre puedes hacer que se oculte todo lo que se salga 😄.  
.  
**Sin `overflow: hidden`:**  

![soh.png](https://static.platzi.com/media/user_upload/soh-e9d1dd7d-712a-4236-941f-362b90cd5be2.jpg)  
.  
**Con `overflow: hidden`:**  

![coh.png](https://static.platzi.com/media/user_upload/coh-fd060aab-1de7-4ca8-bcf8-fc37a979a2a5.jpg)  
.  
También es muy útil para usarla como máscaras de recorte 👀.

## 11. Propiedades físicas y lógicas en CSS + Quiz

***modelo de caja logico ***

el truco es entender bien el BLOCK que de mueve de abajo hacia arriba y el INLINE que se mueve de izquierda a derecha :

📍 **block-start** se refiere al top  
📍 **block-end** se refiere al bottom  
📍 **inline-start** se refiere al left  
📍 **inline-end** se refiere al ringth

## 12. Técnicas de alineamiento con Flexbox

Quiero aportar que justify-content y align-items no se enfocan en posicionamiento horizontal y vertical respectivamente, ya que esto va a depender de la dirección que le demos. justify-content se enfoca en el eje principal y align-items se enfoca en el eje secundario.  
Cuando hacemos un display:flex; la dirección por defecto es row, por lo que nuestro eje principal es el eje horizontal y nuestro eje secundario es el vertical. Cuando cambiamos la dirección a column nuestro eje principal es el vertical y nuestro eje secundario es el horizontal.  
En este [video](https://www.youtube.com/watch?v=_YUJ37FARrU) se explica muy bien sobre como flexbox maneja los ejes.

Solo encontré una propiedad llamada `place-content` que engloba a `justify-content` y `align-content` en una sola propiedad, y lo mismo para `place-items` que engloba a `justify-items` y `align-items` en una sola propiedad, pero no encontré ninguna que englbe a `justify-content` y `align-items` en una sola propiedad… 🤔

**Código:**

- [Alignment techniques · Flexbox · inital](https://codepen.io/teffcode_/pen/mdrRzJX?editors=1100)
- [Alignment techniques · Flexbox · final](https://codepen.io/teffcode_/pen/dypNgoR)

## 13. Dibujemos con CSS + Reto

🎈 Por si a alguien le interesa… ¡Hay un profe de VueJS de Platzi que dibujó un Baby Yoda animado con CSS Puro!  
.  
La verdad es que le quedó super genial, se echó unos buenos streams en Twitch con este dibujo jaja, les dejo el enlace a su tweet po si quieren ir a verlo:  
.  
[https://twitter.com/baumannzone/status/1363949040166174725](https://twitter.com/baumannzone/status/1363949040166174725)  
.  

![baby-yoda.png](https://static.platzi.com/media/user_upload/baby-yoda-25a17ff5-e0fb-4d2b-adcd-581da2fb90a1.jpg)

### Código para que empleen su propio dibujo

En este link que les dejare, podran realizar su propio dibujo
🎯[Link](https://codepen.io/teffcode_/pen/YzGNJyE?editors=1100)

## 14. Grid y las relaciones padre e hijos inmediatos + Quíz

📌 Esta imagen me ayudo bastante. espero a a vosotros también!!! ❤️  

![Screenshot 2021-02-27 at 11.23.59.png](https://static.platzi.com/media/user_upload/Screenshot%202021-02-27%20at%2011.23.59-e1565661-1e1e-456d-9ea4-090cd3a46540.jpg)

### 🚸 Grid y las relaciones padre e hijos inmediatos

**Ideas/conceptos claves**

**CSS Grid** se puede utilizar para lograr muchos diseños diferentes. También se destaca por permitir dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas entre partes de un control construido a partir de primitivas HTML.

### **Apuntes**

- Grid nos permite crear rejillas que tenga **filas** y **columnas**
    
- En este momento se tiene una mayor complejidad en el diseño web
    
- Siempre se tendrá un Contenedor **(padre)**
    
    - Los items **(elementos hijos)** serán los que estarán dentro de este contenedor
        - Los hijos también pueden ser padres
    - Todos los padres tienen que tener:
    
    ```css
    display: grid;
    ```
    

**RESUMEN:** Usar CSS Grid consiste en tener un elemento padre el cual se definirá la propiedad display grid, sus elementos hijos serán afectados por esta regla, siendo posicionados según la forma establecida la grilla.

## 15. Lines, tracks, cell, area, gutters, grid axis, grid row, grid column + Reto

### 📌Unos “pequeños Tips”.  

1- Les recomiendo “Figma”, o “Adobe XD” para maquetar sus sitios.  
2- Éste sitio me ayudó a comprender el suo de las columnas (principio) (  
[https://chrome.google.com/webstore/detail/css-grid-overlay/hajfilceeneohkmcakehndmaeonhlack](https://chrome.google.com/webstore/detail/css-grid-overlay/hajfilceeneohkmcakehndmaeonhlack) ).  
3- Por si necesitan ver un sitio como ejemplo, y comenzar a saber cómo podrían aplicar grid ( [https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb) ).  
Por último, si quieren saber medidas ( [https://www.mydevice.io/#compare-devices](https://www.mydevice.io/#compare-devices) ).

## 16. ¡Iniciemos nuestro proyecto! Fase de creatividad e identificación de elementos


### 🎇Resumen:

**Inspiracion:**

- Pinterest
- Dribabble
- Asymetrical Grid design

**Hacer una lista de todo lo que se necesita**

- Tematica
    - Lluvia de ideas
- Figuras principales
    - Lluvia de ideas: Circulos, cuadros, overlap
- Imagenes
    - De uso libre
        - Pixabay
        - Pexels
        - Freepick
- Tipografia
    - Google Fonts
- Paleta de colores
    - ColorHunt
    - Picker

Hacer un bosquejo y plasmar las ideas

## 17. 

### 🤔 ¿display: grid o display: inline-grid?

<h4>**Ideas/conceptos claves**</h4>

**Display** ⇒ Desplegar, colocar a la vista, exhibir, lucir, Mostar, presentar

**Outer** ⇒ Denota cómo se comporta un elemento en relación a los otros

**Inner** ⇒ como se comportan los hijos directos del elemento

<h4>**Apuntes**</h4>

- Display ⇒ Define el tipo de visualización de un elemento
    - Valores:
        - Inner
        - Outer
- Los valores block e inline definen dos cosas
    - Valor externo (**Outer**)
    - Valor interno (**Inner**)
- Cuando usamos `display: grid;` estamos diciendo `display: block grid;`
    - Es decir que su comportamiento externo sera de tipo bloque
- Un elemento que tenga los atributos de bloque puede tener:
    - Margin y padding
    - width
    - height
- Si pensamos en `display: inline-flex;` su relación con otros elementos no sera de bloque sino de línea
- Siempre volvemos al flujo normal del documento

**RESUMEN:** La diferencia entre grid e inline-grid es el comportamiento externo que tienen con otros elementos, usando grid sera de tipo bloque y usando inline-grid sera de tipo inline

#### 📍Algunas diferencias entre elementos inline y block.

![diferencias.png](https://static.platzi.com/media/user_upload/diferencias-402df9ab-1921-48f4-a658-b9ea021ce7bb.jpg)

## 18. Creando filas, columnas y espaciado + Reto

### **Apuntes**

![www.canva.com_design_DAEPC3ca3BQ_Dldv9zjYSIE0LBb-BzEQng_view_utm_content=DAEPC3ca3BQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton.png](https://static.platzi.com/media/user_upload/www.canva.com_design_DAEPC3ca3BQ_Dldv9zjYSIE0LBb-BzEQng_view_utm_content%3DDAEPC3ca3BQ%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Dsharebutton-8762400f-64f9-4b0f-af71-66a794857a4f.jpg)

- Para poder crear columnas debemos usar `grid-template-columns`
- Para crear filas debemos usar `grid-template-rows`
- Para crear una grid debemos escribir en el CSS

```css
.container {
	display: grid;
	grid-template-columns: 20px 20px 20px;
	grid-template-rows: 20px 20px 20px;
}
```

- Pero si deseamos acortar esta forma podemos usar `repeat`

```css
.container {
	display: grid;
	grid-template-columns: repeat(3, 20px);
	grid-template-rows: repeat(3, 20px);
}
```

- Además, que grid cuenta con un shorthand

```css
.container {
	display: grid;
	grid-template: repeat(3, 20px);
}
```

- Si deseamos tener un espacio interno podemos usar la propiedad `gap`
    
    - Existen varias maneras de implementarlo
        
        - Antigua
        
        ```css
        .container {
        	display: grid;
        	grid-template: repeat(3, 20px);
        	grid-column-gap: 5px;
        	grid-row-gap: 5px;
        }
        ```
        
        - Antigua corta
        
        ```css
        .container {
        	display: grid;
        	grid-template: repeat(3, 20px);
        	grid-gap: 5px 5px;
        }
        ```
        
        - Standard
        
        ```css
        .container {
        	display: grid;
        	grid-template: repeat(3, 20px);
        	column-gap: 5px;
        	row-gap: 5px;
        }
        ```
        
        - Standard corta
        
        ```css
        .container {
        	display: grid;
        	grid-template: repeat(3, 20px);
        	gap: 5px 5px;
        }
        ```
        
- Tenemos el areas, para poder ubicar elementos de una manera más sencilla
    

```css
.container {
	display: grid;
	grid-template: repeat(5, 20px) / repeat(5, 20px);
	grid-template-areas: 
		"header header header header header"
		"header header header header header"
		"main main . sidebar sidebar"
		"main main . sidebar sidebar"
		"footer footer footer footer sidebar"
}
```

 ![www.canva.com_design_DAEPC3ca3BQ_Dldv9zjYSIE0LBb-BzEQng_view_utm_content=DAEPC3ca3BQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton (1).png](https://static.platzi.com/media/user_upload/www.canva.com_design_DAEPC3ca3BQ_Dldv9zjYSIE0LBb-BzEQng_view_utm_content%3DDAEPC3ca3BQ%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Dsharebutton%20%281%29-80d0810a-99e2-49d9-91c3-40034583f693.jpg)

## 19. Alineamiento en el elemento contenedor + Quiz

#### ALIGN-CONTENT

![Screenshot 2021-03-01 at 08.19.07.png](https://static.platzi.com/media/user_upload/Screenshot%202021-03-01%20at%2008.19.07-0229b35a-adf1-41bc-a0b0-874f98a67944.jpg)

#### JUSTIFY-CONTENT

![Screenshot 2021-03-01 at 08.18.41.png](https://static.platzi.com/media/user_upload/Screenshot%202021-03-01%20at%2008.18.41-b9c8bd01-9e40-4438-b02e-0ef4d226f30c.jpg)

## 20. Generación automática de tracks + Quíz

#### **Ideas/conceptos claves**

**Track** ⇒ Union de dos o más celdas dentro de una grid

### **Apuntes**

- No todas las grillas tendrán items exactamente contados
    - No contaras con filas y columnas exactas por que los datos pueden ser dinámicos
- Para ello está la **grid implícita**
    - Te crea filas o columnas si las necesitas con anchos sin tamaño
- Para que se valla ordenando según lleguen nuevos elementos se debe usar esta propiedad
    - Don especificaremos el tamaño donde agregarlo

```css
.container {
	grid-auto-columns: 60px;
}
```

- También podemos cambiar el orden visual de los elementos hijos

```css
.container {
		grid-auto-flow: row | column | row dense | column dense;
}
```

**RESUMEN:** Debido a que existen casos que nunca sabremos cuantos elementos exactamente tendrá nuestra grilla entonces podemos generarla automáticamente con grillas implícitas.

## 21. Funciones: repeat(), minmax() y fit-content()

### Un pequeño resumen:  

La función CSS **_repeat()_** representa un fragmento repetido de la lista de la pista, permitiendo un gran número de columnas o renglones que exhiben un patrón recurrente para ser escrito de una forma más compacta.  

En función Css **_minmax()_** el _min_ representa el tamaño mínimo que va a tener cada uno de los elementos de la grid y el _max_ nos indica el valor máximo de los elementos de la grid. Esto nos sirve para que el contenido se vea bien en determinados tamaños.  

Con la función de **_auto-fit()_** ADAPTA las columnas DISPONIBLES ACTUALMENTE en el espacio expandiéndolas para que ocupen cualquier espacio disponible. El navegador hace eso después de LLENAR ese espacio adicional con columnas adicionales (como con el autocompletar) y luego colapsar las vacías.  

Con la función de **_auto-fill()_** LLENA la fila con tantas columnas como pueda caber. Por lo tanto, crea columnas implícitas cada vez que cabe una nueva columna, porque está tratando de LLENAR la fila con tantas columnas como sea posible. Las columnas recién agregadas pueden estar vacías, pero seguirán ocupando un espacio designado en la fila.  
/************ Estas funciones con perfectas para el responsive design.*********/  

La función **_fit-content()_** organiza un contenido en especifico el cual lo reserva y el resto seria auto.

## 22. ¡Manos al código! Fase de construcción de la grid principal de nuestro proyecto

**Apuntes de la clase:**

[![manos al código](https://camo.githubusercontent.com/ccf6ac9aea2996cb7354441588fd080375edc470bf3736360f7b0c76a759c2e6/68747470733a2f2f692e6962622e636f2f737430675953302f494d472d323338382d322e6a7067)](https://camo.githubusercontent.com/ccf6ac9aea2996cb7354441588fd080375edc470bf3736360f7b0c76a759c2e6/68747470733a2f2f692e6962622e636f2f737430675953302f494d472d323338382d322e6a7067)

Yo pensé que las paginas con diseño Grid tenían que ser todo con grid (y puede que haya algunas que sean así), pero otras solo usan el grid para ciertas partes especificas de la pagina web. Por ejemplo esta pagina solo usa el grid para ciertas secciones. [https://slack.com/intl/es-mx/](https://slack.com/intl/es-mx/)

## 23. Ubicación

- Desde el contendor podemos ubicar a los elementos hijos
    - Todos deben estar alineados a la misma dirección
    - Pero no siempre es posible cumplir esa regla
- Existen diferentes formas de ubicar los elementos de la grilla
    1. Grupo 1
        
        - `grid-column-start` & `grid-column-end`
        
        ```css
        .item{
        	grid-column-start: 1;
        	grid-column-end: 2;
        }
        ```
        
        - **Shorthand** ⇒ `grid-column`
        
        ```css
        .item{
        	grid-column: 1 / 2;
        }
        ```
        
    2. Grupo 2
        
        - `grid-row-start` & `grid-row-start`
        
        ```css
        .item{
        	grid-row-start: 1;
        	grid-row-end: 2;
        }
        ```
        
        - **Shorthand** ⇒ `grid-row`
        
        ```css
        .item{
        	grid-row: 1 / 3;
        }
        ```
        
    3. Grupo 3
        
        - **Grid Area**
        
        ```css
        .container{
        	display: grid;
        	grid-template-columns: 1fr 1fr;
        	grid-template-area:
        	"card1 card-2"
        	"card1 card-3";
        }
        
        .item{
        	grid-area: card-1;
        }
        ```


## 24. Alineamiento en los elementos hijos

### Justify-self

![2022-07-22_19h54_31.png](https://static.platzi.com/media/user_upload/2022-07-22_19h54_31-56cc463d-058d-4697-9af3-14d0cfc48be8.jpg)

### Align Self

![2022-07-22_20h02_19.png](https://static.platzi.com/media/user_upload/2022-07-22_20h02_19-202f26a1-f5b5-408b-b032-6ea23d11743d.jpg)

### Place Self es una abreviacion de:

![2022-07-22_20h05_42.png](https://static.platzi.com/media/user_upload/2022-07-22_20h05_42-74cdf30b-7f6d-4edf-ace7-830fa39922b3.jpg)

## 25. ¡Manos al código! Fase de ubicación y alineamiento

🎯Para los que les quedo la duda de como controlar quien esta encima de quien osea controlar la sobreposición de los contenedores aqui les explico:  
Inicialmente tenemos que el contenedor verde esta debajo de los otros dos contenedores, pero yo quiero que ese este encima de los dos, para ello tenemos que recurrir al html el cual esta maquetado de esta forma  

![1.png](https://static.platzi.com/media/user_upload/1-da35bb0c-8b1b-46df-8af5-c06b1d96699b.jpg)

```html
<body>
    <main class = "principal-container">
        <div class="container1" >1</div> // contenedor verde
        <div class="container2">2</div> //contededor azul
        <div class= "container3">3</div> //contenedor cafe
    </main>
</body>
```

Para hacer que el contenedor este al frente de los dos tengo que mi “container1” mandarlo al final de los otros contenedores algo asi

```html
<body>
    <main class = "principal-container">;
        <div class="container2">2</div> //contededor azul
        <div class= "container3">3</div> //contenedor cafe
	      <div class="container1" >1</div> // contenedor verde
    </main>
</body> 
```

Y con ello la visualización me queda asi, si quieren que quede encima del uno y abajo del otro o en la disposición que deseen solo van jugando con la posición de los contenedores en el html. Espero les sirva 😃

![2.png](https://static.platzi.com/media/user_upload/2-f5bd9b8c-6d51-4022-b1d1-185528afef85.jpg)

## 26. Continuando con la fase de ubicación y alineamiento

**Apuntes de la clase:**

[![manos al código](https://camo.githubusercontent.com/217468faa0026120e914b94a9a33d5d093c7ed31d824d1c6862b6e8ad95ead15/68747470733a2f2f692e6962622e636f2f7956574a6858422f494d472d323339302d322e6a7067)](https://camo.githubusercontent.com/217468faa0026120e914b94a9a33d5d093c7ed31d824d1c6862b6e8ad95ead15/68747470733a2f2f692e6962622e636f2f7956574a6858422f494d472d323339302d322e6a7067)

## 27. Responsive y CSS Grid

- [Auto-Sizing Columns in CSS Grid: `auto-fill` vs `auto-fit`](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
- [Ejemplo de Sara Soueidan con auto-fill y auto-fill](https://codepen.io/SaraSoueidan/pen/JrLdBQ?editors=1100)
- [Ejemplo de Jen Simmons usando auto-fit (inspecciona el elemento main)](https://labs.jensimmons.com/2016/examples/spices-1.html)

**Les dejo esta web para saber su medida de pantalla y las mas utilizadas, asi podemos nosotros ver cuales son las que nos conviene para crear los breakpoints**  
[_MyDevice.io_](https://www.mydevice.io/)  

![Screenshot (52).png](https://static.platzi.com/media/user_upload/Screenshot%20%2852%29-847ca97e-6ca1-4a0d-8f06-d649941ad78a.jpg)  

![Screenshot (53).png](https://static.platzi.com/media/user_upload/Screenshot%20%2853%29-142b7c1e-697b-45da-bf8f-5f2f292aeebd.jpg)

## 28. Continúa con el Curso de Diseño Web con CSS Grid y Flexbox

En este curso aprendiste los fundamentos de CSS Grid para maquetar sitios y aplicaciones web increíbles. El próximo paso es aprobar el examen para poner a prueba tus conocimientos y obtener el diploma de certificación. Recuerda que puedes [descargar los slides del curso](https://static.platzi.com/media/public/uploads/sliides-curso-de-css-grid-layout_5d392acf-26ce-4cf6-9fde-262064f0e019.pdf) para repasar lo que aprendiste siempre que lo necesites.

El siguiente curso en tu carrera profesional como frontend developer es tomar el [Curso de Diseño Web con CSS Grid y Flexbox](https://platzi.com/flexbox), donde descubrirás como crear layouts y sistemas de diseño profesionales gracias a esta herramienta.

¡Te espero en el próximo curso! ¡Nunca pares de aprender!

## Examen

1. Evaluar el panorama actual con respecto a las herramientas que nos han facilitado el camino a lo largo de los años, nos sirve para:
    - Ver el impacto que tienen estas herramientas en la forma en la que diseñamos y desarrollamos

CAMBIAR

2. CSS Grid es una idea nueva
    - Falso

CAMBIAR

3. CSS Grid requiere una forma completamente nueva de pensar sobre el diseño en CSS
    - Verdadero

CAMBIAR

4. ¿Cuál de las siguientes propiedades no fue utilizada en la técnica de alineamiento con line-height?
    - table-cell

CAMBIAR

5. Una de las mayores limitantes de trabajar con las técnicas de alineamiento vistas en el curso es:
    - Propiedades físicas

CAMBIAR

6. En latín, el Block Flow Direction va de:
    - No es: Derecha a izquierda
    - Abajo hacia arriba
    - Es: Arriba hacia abajo 😌
    - No es: Izquierda a derecha

CAMBIAR

7. La propiedad lógica equivalente a la propiedad física margin-top es:
    - margin-block-start

CAMBIAR

8. caniuse.com es una página que nos permite:
    - Revisar la compatibilidad de las propiedades de CSS en los diferentes navegadores

CAMBIAR

9. Los elementos hijos de un contenedor también pueden ser padres
    - Verdadero

CAMBIAR

10. Uno de los tips dados en el curso para aprender a trabajar con CSS Grid es:
    - Identificar las relaciones de padre e hijos inmediatos para así saber qué propiedades implementar en cada caso

CAMBIAR

11. ¿Puedo darle width a un elemento inline? (Esto hace parte de una de las tareítas que te dejé)
    - Falso

CAMBIAR

12. A un elemento padre se le debe poner siempre la propiedad:
    - display: grid (o inline-grid)

CAMBIAR

13. La palabra "justify" hace alusión al eje:
    - inline

CAMBIAR

14. La palabra "align" hace alusión al eje:
    - block

CAMBIAR

15. place-items es una propiedad del elemento:
    - padre

CAMBIAR

16. justify-content es una propiedad del elemento:
    - padre

CAMBIAR

17. place-self es una propiedad del elemento:
    - hijo

CAMBIAR

18. ¿Qué propiedad usarías en el elemento padre, si quisieras alinear sus elementos hijos a la derecha?
    - justify-items: end;

CAMBIAR

19. Si queremos especificar el tamaño de los tracks de cuadrícula generados automáticamente, lo podemos hacer con la propiedad:
    - grid-auto-columns

CAMBIAR

20. Una de las cosas recomendadas para comenzar a trabajar con diseño responsivo es:
    - Establecer breakpoints dependiendo de los dispositivos que queremos/necesitemos abarcar


