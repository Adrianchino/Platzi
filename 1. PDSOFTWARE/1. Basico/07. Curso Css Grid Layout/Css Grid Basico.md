# Curso de Css Grid Basico

## 1. ¿Qué es CSS Grid Layout?

## Qué es CSS Grid

Css grid es una especificación de CSS para realizar layouts más dinámicos. Anteriormente sólo se podía usar tablas para realizar lo que ahora podemos hacer con Grid de manera mucho más sencilla. Nos permite dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas construidas a partir de HTML

![image(266).png](https://static.platzi.com/media/user_upload/image%28266%29-b7f95173-f330-4552-ad94-a04a8418afe8.jpg)

CSS Grid introdujo un sistema de grilla que es una cuadrícula con columnas (columns) y filas (rows), con ellas podemos ubicar elementos de manera más fácil.

![image(266).png](https://static.platzi.com/media/user_upload/image%28266%29-f85cee69-f1d1-48ab-8f20-58e0c992a5e1.jpg)

Podemos crear, por ejemplo, un layout simple con el header, main y footer ya que cada bloque conforma un elemento de la grilla que se puede ubicar. Como los layouts pueden cambiar mucho, Grid nos ayuda a posicionar y reposicionar los elementos cuantas veces necesitemos.

## 2. Conceptos para comenzar

Antes de empezar a trabajar con CSS Grid, es importante que conozcamos algunos conceptos básicos y así tener un mejor entendimiento de nuestro código. Vamos a ello.

### **Qué es contenedor**

Es el elemento que se va a convertir en una grilla. Algo como una caja en la que vamos agregando elementos.

![image.png](https://static.platzi.com/media/articlases/Images/image%28268%29.png)

### **Qué son items**

Son los elementos que están dentro del contenedor. Estos elementos pueden ser de cualquier tipo como links, botones, imágenes, etc. Todos ellos se convertirán en grid items. Esto quieres decir que por defecto van a tener propiedades que los ayudan a trabajar muy bien con nuestro sistema de grilla.

![image.png](https://static.platzi.com/media/articlases/Images/image%28269%29.png)

### **Qué son líneas**

Son los elementos que limitan o dividen las filas o columnas de una grilla. Como vemos en el ejemplo, cuatro líneas dividen las tres columnas (columns), y se lee de izquierda a derecha. Tres líneas dividen las 2 filas (rows) y se enumeran de arriba hacia abajo.

![image.png](https://static.platzi.com/media/articlases/Images/image%28270%29.png)

### **Qué es celda**

Es la unidad mínima que nosotros podemos tener en una grilla. Está delimitada por 4 líneas y normalmente solo ocupa 1 fila y 1 columna.

![image.png](https://static.platzi.com/media/articlases/Images/image%28271%29.png)

### **Qué es track**

Es un grupo de celdas, que solo puede estar en una fila o en una misma columna.

![image.png](https://static.platzi.com/media/articlases/Images/image%28272%29.png)

### **Qué es área**

Es un grupo de celdas, estas pueden usar varias filas o varias columnas a la vez.

![image.png](https://static.platzi.com/media/articlases/Images/image%28273%29.png)

Bastante simple, ¿verdad? Pues ya estamos listos para empezar a codificar nuestra primera grilla.

## 3. Propiedades del contenedor

### Qué es el display grid

Define el elemento como contenedor de cuadrícula y establece un nuevo contexto de formato de cuadrícula para su contenido.

```css
<div class="contenedor">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
```

El div principal o “contenedor” va a ser el padre de nuestra grilla. Los seis div internos serán los elementos o grid items.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
}

.item {
    border: 5px solid #00bcd4;
    font-size: 4rem;
}
```

En nuestra hoja de estilos agregamos un color de fondo y un borde al contenedor principal, mientras que un borde y un tamaño de fuente a los elementos del contenedor.

Al renderizar el código en el navegador obtendríamos este resultado:

![imagen de ejemplo](https://static.platzi.com/media/articlases/Images/image%28274%29.png)

Los elementos se posicionan uno debajo de otro y funciona como un solo bloque, ya que por defecto el navegador asigna un contenedor como block. Sólo con el hecho de agregar la propiedad display: grid al código de nuestro contenedor principal, el navegador ya lo interpreta como tal, a pesar de no cambiar visualmente. Vamos a generar algunas columnas.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    grid-template-columns: 100px 200px 300px ;
}
```

### Grid-template-columns y grid-template-rows

Define las columnas y filas de la cuadrícula con una lista de valores separados por espacios. Los valores representan el tamaño de la pista y el espacio entre ellos representa la línea de la cuadrícula.

**_grid-template-columns_** nos permite especificar el número de columnas y su ancho. En este caso usamos tres tamaños, cada uno **_100px_** mayor al anterior. Vemos en el navegador que al llegar a la tercera columna, los elementos se mueven a la siguiente fila.

![grid-template-columns ejemplos](https://static.platzi.com/media/articlases/Images/image%28275%29.png)

**_grid-template-rows_** nos permite especificar el número de filas y su ancho. En este caso usamos dos tamaños, el primero de 150px y el segundo de 250px.

```css
grid-template-rows: 150px 250px;
```

![grid-template-rows](https://static.platzi.com/media/articlases/Images/image%28276%29.png)

grid-auto- Nos permite definir una altura a todas las columnas y filas. Es decir, si agregáramos otra columna o fila también tendría esta dimensión.

```css
grid-auto-rows: 150px;
```

![ejemplo de grid](https://static.platzi.com/media/articlases/Images/image%28277%29.png)

### **Grid-auto-flow**

Nos permite cambiar el orden en el que están los grid items, este valor por defecto es row (fila), pero lo podemos cambiar.

**_grid-auto-flow_** nos permite modificar cómo se está llenando la grilla. Cuando los elementos no entran en la cantidad de filas definidas, crea nuevas. **_grid-auto-flow: column_** crea nuevas columnas.

![ejemplo de Grid-auto-flow](https://static.platzi.com/media/articlases/Images/image%28278%29.png)

Como observamos, todos los elementos se han alineado en una sola fila, esto es porque no hemos definido en el código la cantidad de filas que queremos. Vamos a establecer que las filas solo tengan dos dimensiones, mientras que todas las columnas tendrán **_100px_**. De esta manera:

```css
grid-template-rows: 100px 200px;
grid-auto-columns: 100px;
grid-auto-flow: column;
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28279%29.png)

Vemos en el navegador que incluso el orden en que se organizan los elementos cambia. Todas las columnas tienen un mismo ancho. Puedes usar estas propiedades para jugar según lo que busques.

### **Qué son gaps**

Es un espacio entre filas y columnas.

**_row-gap_** nos permite definir el tamaño de la brecha entre filas. Por supuesto, también lo puedes hacer en las columnas con **_column-gap_**. En este caso usamos***😗**

```css
row-gap: 15px;
column-gap: 30px;
```

**Ojo**: los espacios solo se crean entre filas o columnas, no con los extremos del contenedor.

![image.png](https://static.platzi.com/media/articlases/Images/image%28280%29.png)

**_gap_**, por otro lado nos permite crear un espaciado tanto para filas y columnas. Por ejemplo: **_gap: 40px_** crea el mismo espaciado entre sí, tanto en filas como en columnas.

### Completa este reto

¡Aprendimos muchoooo! Ahora te toca participar. Como reto tendrás que construir un grid de tres filas y dos columnas con un gap de 20px entre ellas. Muy sencillo, ¿verdad? Como referencia, los números de los elementos deben coincidir con los de la siguiente imagen:

![ejemplo del reto](https://static.platzi.com/media/articlases/Images/image%28281%29.png)

## 4. Propiedades de alineación

### Cómo funcionan las propiedades de alineación

Vamos al editor de texto. Creamos un contenedor con lo que hemos aprendido. Usaremos este contenedor para ejemplificar cómo funcionan las propiedades de alineación.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 150px 150px 150px;
    grid-auto-rows: 150px;
    grid-auto-flow: column;
    height: 600px;
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28282%29.png)

### **Propiedades de alineación de los ítems**

#### **Justify-items**:

Todos los que empiezan con justify nos ayudan a ordenar los elementos de manera horizontal en el espacio. **_justify-items: center_** nos da:

![image.png](https://static.platzi.com/media/articlases/Images/image%28283%29.png)

#### **Align-items**:

Todos los que empiezan con align nos ayudan a alinear los elementos de manera vertical en el espacio. **_align-items: center_** nos da:

![image.png](https://static.platzi.com/media/articlases/Images/image%28284%29.png)

#### **Place-items**:

Es la mezcla de justify-items y align-items. **_place-items: center_** nos da:

![image.png](https://static.platzi.com/media/articlases/Images/image%28285%29.png)

### **Propiedades de alineación del contenedor:**

Estas propiedades son las que ajustan la grilla completa al espacio en la que ella vive. No tiene que ver nada con los elementos. La grilla funciona como un bloque.

#### Justify-content: *justify-content:

center nos da este resultado:

![image.png](https://static.platzi.com/media/articlases/Images/image%28286%29.png)

#### Align-content: *align-content:

center nos da este resultado:

![image.png](https://static.platzi.com/media/articlases/Images/image%28287%29.png)

#### Place-content: place*-content:

center nos da este resultado:

![image.png](https://static.platzi.com/media/articlases/Images/image%28288%29.png)

Además de estas propiedades de alineación, tenemos otras que dan directamente propiedades a los hijo de la grilla o grid items. Es decir, podemos alinear los elementos dentro de los contenedores de manera independiente. Estas son:

- **Justify-self**
- **Align-self**
- **Place-self**

### Completa este reto

¿Listo para poner a prueba tus conocimientos?

Como reto, tendrás que crear un grid de 2x2 en que los elementos se ubiquen en la esquina inferior derecha del contenedor. El contenedor debe estar centrado.

¡Muchos éxitos!

![image.png](https://static.platzi.com/media/articlases/Images/image%28289%29.png)

## 5. Propiedades de ubicación}

### Cuáles son las propiedades de ubicación

Imaginemos que tenemos una grilla de 4x4 con sólo dos elementos. Podemos moverlos para que ocupen más espacio que una celda, o estén en una celda distinta a la que deberían estar.

Para las columnas, las propiedades que nos van a ayudar son:

- **grid-column-start**: con esta propiedad nosotros vamos a decirle al elemento en que línea de columna debe comenzar.
- **grid-column-end**: con esta propiedad nosotros vamos a decirle al elemento hasta que línea de la columna va a llegar.
- **grid-column**: es una mezcla de grid-column-start y grid-column-end. Los valores que necesita son el valor inicial y el valor final, estos van separados de un “/” (diagonal).

Para las filas las propiedades son iguales, solo que vamos a trabajar en las filas:

- **grid-row-start**
- **grid-row-end**
- **grid-row**

Además de estas propiedades, tenemos:

- **grid-area**: con esta propiedad declaramos solo una vez donde va a comenzar tanto en columna como en fila y donde va a terminar tanto en columna como en fila.

![image.png](https://static.platzi.com/media/articlases/Images/image%28290%29.png)

### Cómo agregar las propiedades de ubicación

Vamos al editor de texto para comprender mejor estos conceptos. Primero creamos un contenedor con tres elementos a los que les agregamos clases para poder aplicar estilos individuales a cada uno.

```html
    <div class="contenedor">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
    </div>
```

En nuestro archivo CSS llamamos al contenedor con su clase y le aplicamos propiedades similares a las que hemos trabajado anteriormente.

Ajustamos el ancho de fuente en 4rem para todas las clases.  
Le damos un borde y color de fondo distinto a cada elemento del contenedor para poder diferenciarlo.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: white;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 75px 75px 75px;
    place-content: center;
}
.item {
    font-size: 4rem;
}
.item-1 {
    border: 5px solid #f8bbd0;
    background-color: #ffeeff;
}
.item-2 {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
}
.item-3 {
    border: 5px solid #b2ebf2;
    background-color: #e5ffff;
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28292%29.png)

#### Item 1

Ahora, editemos el primer elemento para que ocupe todo el ancho de la primera fila. Debe empezar a numerar los elementos de izquierda a derecha.

Mucho ojo, el número no es la columna en sí, sino la línea en que termina la columna. Entonces si queremos que ocupe hasta la tercera celda, tendremos que colocar grid-column-end: 4.

```css
.item-1 {
    border: 5px solid #f8bbd0;
    background-color: #ffeeff;
    grid-column-start: 1;
    grid-column-end: 4;
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28297%29.png)

![image.png](https://static.platzi.com/media/articlases/Images/image%28298%29.png)

#### Item 2

En este caso queremos que ocupe la primera celda de las filas 2 y 3 dentro de la primera columna. Como la primera fila ya está ocupada, debemos empezar de la fila 2 y terminar en la 4.

```css
grid-row: 2/4
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28299%29.png)

#### Item 3

El tercer item ocupa tanto filas como columnas, por lo que conviene usar grid-area. El orden en que debemos colocar el valor es: fila y columna en que empieza, fila y columna en que termina.

```css
.item-3 {
    border: 5px solid #b2ebf2;
    background-color: #e5ffff;
    grid-area: 2/2/4/4;
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28300%29.png)

### ¿Existen atajos para usar las propiedades?

Podemos usar grid-template-areas para acomodar todos los elementos con mucha más rapidez. grid-template-areas declaramos areas dentro de la grilla.

Para ello, agregamos la información a la tabla como si fuera dentro de una grilla, de esta manera:

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: white;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 75px 75px 75px;
    grid-template-areas: 
        "header header header"
        "side main main"
        "side main main";
    place-content: center;
}
```

Luego, colocamos el nombre de la celda creada anteriormente a cada item.

```css
}
.item-1 {
    border: 5px solid #f8bbd0;
    background-color: #ffeeff;
    grid-area: header;
}
.item-2 {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    grid-area: side;
}
```

### Completa este reto

Aprendiste varias formas de llegar a un mismo resultado. Ya sólo te queda jugar para seguir practicando lo aprendido. Pero adivina, te tengo un reto para ello.

Debes recrear la grilla que ves en al siguiente imagen. Estás en la total libertad de usar el método que consideres el mejor o simplemente el que quieras usar. Recuerda que en programación no hay una sola manera de lograr las cosas.  
![image.png](https://static.platzi.com/media/articlases/Images/image%28301%29.png)

## 6. Funciones especiales

### Funciones especiales en CSS grid

Primero creamos un contenedor principal con otros 9 contenedores dentro:

```html
    <div class="contenedor">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
    </div>
```

Luego, añadimos los estilos generales que hemos trabajado anteriormente.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    grid-template-columns: 30px 200px 60px;
    grid-template-rows: 100px 100px 100px;
}
.item {
    border: 5px solid #00bcd4;
    font-size: 2rem;
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28306%29.png)

### Funciones minmax y repeat

Uno de los detalles a solucionar es que al reducir el ancho de la pantalla, el tamaño de las celdas no cambia, porque es absoluto. Si agregáramos más texto a la celda, esta se rompería de todas maneras porque no hemos cambiado el tamaño.

#### **Minmax**:

Nos ayuda a declarar un tamaño mínimo y máximo para el ancho o alto de una celda. Podemos modificar el tamaño del contenedor sin importar el tamaño del contenido.

Entonces cambiamos los valores establecidos en las columnas; la primera en un ancho mínimo de 30px y un máximo de 300px, y la tercera con un mínimo de 60px y un máximo de 250px.

```css
grid-template-columns: minmax(30px, 300px) 200px minmax(60px, 250px);
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28307%29.png)

![image.png](https://static.platzi.com/media/articlases/Images/image%28308%29.png)

Como notamos, las celdas se adaptan al ancho del contenido, pero al redimensionarlas mucho más pequeñas, se desborda por el alto.

#### **Repeat**:

Imaginemos que queremos una grilla con 12 columnas del mismo ancho. No vamos a escribir 12 veces el valor del ancho, sino una vez usando **repeat**.

Entonces, para que la celda se adapte al tamaño del contenido sin importar la dimensión, definimos la cantidad de celdas en que queremos aplicar la acción (tres) y damos la propiedad de auto. Si colocáramos un valor en pixeles realmente no solucionaríamos el problema.

```css
grid-template-rows: repeat(3, auto);
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28309%29.png)

![image.png](https://static.platzi.com/media/articlases/Images/image%28310%29.png)

Notamos que ahora las celdas inicialmente son menos altas debido que sólo ocupan el espacio que ocupa el contenido. Y al dimensionarlas los contenedores no se rompen.

## 7. Keywords especiales

### Palabras clave especiales para creación de código

- **_fr_** : es una unidad relativamente nueva de medida especial de CSS Grid para darle ancho o alto a filas y columnas. 1fr representa una fracción del total de columnas o filas.
- **_min-content_** : ajusta el ancho de la celda lo mínimo posible sin romper su contenido.
- **_max-content_** : ajusta el ancho de la celda lo máximo posible para mostrar su contenido.
- **_auto-fill_** : logra que la grilla ocupe el 100% del espacio que tiene. Agrega columnas “fantasma” que rellenan el espacio sobrante del contenedor.
- **_auto-fit_** : ensancha las columnas para que ocupen todo el espacio del contenedor.
- **_auto-fill_** y **_auto-fit:_** ayudan a la grilla a ocupar el 100% del espacio disponible.

### Cómo funcionan las palabras clave especiales

Veamos cómo funcionan estas **keywords** directamente en el código:  
Primero, creamos un index.html con cuatro contenedores. Llevando el 3 y 4 distintas mezclas y espaciados.

```html
<div class="contenedor">
<div class="item item-1">1</div>
<div class="item item-2">2</div>
<div class="item item-3">3 3 33 3 3 3 3 3 3 3 3 3 3 33333 3333 333</div>
<div class="item item-4">444 4 4 4 4 4 4 4 4 4444 4444 44 4 4 4 4</div>
</div>
```

Luego aplicamos en los estilos:  
Cuatro columnas de **_100px_** sin especificar su alto.

```css
.contenedor {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    grid-template-columns: repeat(4, 100px);
  }
  
.item {
    border: 5px solid #00bcd4;
    font-size: 2rem;
  }
```

En el navegador observamos que todas las columnas tienen el mismo ancho.  
![image.png](https://static.platzi.com/media/articlases/Images/image%28334%29.png)

Piensa en las columnas como fracciones: si la grilla tiene 4 columnas, todas del mismo ancho, cada columna es igual a una fracción de la grilla.  
Entonces, si en vez de colocar **_100px_** de ancho, colocamos **_1fr_**, logramos que cada columna siempre tenga el mismo ancho, ocupando siempre el 100% del ancho de la pantalla.

```css
grid-template-columns: repeat(4, 1fr);
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28343%29.png)

También podemos agregar distintos valores proporcionales al ancho de la columa. Por ejemplo, podemos hacer que una columna sea del doble de ancho de la anterior, y así con las demás.

```css
grid-template-columns: 1fr 3fr 1fr 2fr;
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28344%29.png)

Podemos cambiar una sola columna para que use el ancho mínimo que ocupa su contenido con min-content. De esta manera, al redimensionar la pantalla, el ancho de las demás columnas cambiará, pero el de la modificada no, porque ya ocupa el ancho mínimo desde el principio.

```css
grid-template-columns: 1fr 3fr min-content 2fr;
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28345%29.png)

Lo mismo pasa si queremos que la celda use el ancho máximo. Tomará el espacio necesario para mostrar su contenido en una sola línea.

```css
grid-template-columns: 1fr 3fr max-content 2fr;
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28346%29.png)

Para explicar el **_auto-fill_** y **_auto-fit_**, creemos otro contenedor.

```html
    <div class="contenedor-1">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
    </div>
    <div class="contenedor-2">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
    </div>
```

Aplicamos estilos:

```css
.contenedor-1 {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .contenedor-2 {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
    display: grid;
    margin-top: 100px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }  
```

Para que funcione, es necesario especificar el ancho mínimo y máximo del contenedor. En este caso queremos que comience desde 100px y crezca hasta llegar a una fracción de la grilla. No colocamos valores absolutos para que el contenedor siempre se ajuste al ancho de la pantalla.

![image.png](https://static.platzi.com/media/articlases/Images/image%28347%29.png)

![image.png](https://static.platzi.com/media/articlases/Images/image%28348%29.png)

Como vemos en la grilla con **_auto-fit_** las columnas se expanden hasta ocupar todo el ancho. Mientras que en **_auto-fill_** se agregan columnas fantasma para rellenar el espacio faltante. Sin embargo, al reducir el tamaño vuelven a ocupar el mismo espacio mínimo.

## 8. Proyecto

### Proyecto de creación del curso

Demos un vistazo al template final que vamos a construir:  
![image.png](https://static.platzi.com/media/articlases/Images/image%28349%29.png)

Bien, el primer paso es imaginar cómo están divididas nuestras secciones:  
![image.png](https://static.platzi.com/media/articlases/Images/image%28350%29.png)

La celda es la unidad mínima de nuestra grilla, por lo que debemos prestarle mucha atención. En la sección de la mitad, observamos que las cuatro celdas pequeñas de la derecha nos indican que la sección tendrá cuatro columnas y dos filas.

#### Maquetación Inicial

Primero, creamos una estructura simple con un **_main_** dentro.

```html
<body>
    <main>
        
    </main>
</body>
```

- En los estilos, seteamos todo la hoja para usar la fuente **_Roboto_**.
- Le damos un ancho máximo de **_1200px_** al proyecto.
- Centramos todo el contenido con **_margin: 0 auto_**.

```css
* {
    font-family: "Roboto", sans-serif;
}

main {
    max-width: 1200px;
    margin: 0 auto;
}
```

## 9. Hagamos nuestra primera sección

El primer paso antes de crear el código es analizar las etiquetas que utilizaremos en la construcción de nuestro proyecto.

![image.png](https://static.platzi.com/media/articlases/Images/image%28352%29.png)

### Maquetación del proyecto

- Observamos un título, un párrafo y un botón del lado izquierdo, y una imagen del derecho. Con eso podemos empezar a crear las etiquetas **_h1_**, **_p_**, **_button_** e **_img_**.
- Empezamos creando una sección con una clase identificativa.
- Dentro, creamos un **_div_** con su clase identificadora para uno de los lados que contendrá el texto, mientras que el otro será la etiqueta **_img_**, también con su clase.
- Por último, agregamos el contenido que observamos en la imagen.

**Nota**: para generar un lorem ipsum en html, sólo es necesario colocar el número de palabras que deseamos seguido de la palabra lorem. Ej: **_lorem5_** generará cinco palabras.

```html
        <section class="hero">
            <div class="info">
                <h1>Check the<br>best food</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Book a table</button>
            </div>
            <img class="hero-image" src="./img/hero.png" alt="Plato de pasta y vegetales">
        </section>
```

### Estilos del proyecto

- Llamamos la primera sección desde su clase con .hero.
- Por supuesto, aplicamos display: grid para que todo el contenido herede esta propiedad.
- Ajustamos el ancho de las dos columnas, logrando que la de la imagen sea una fracción más ancha que la del texto con **_grid-template-columns: 2fr 3fr_**.
- Ajustamos el alto de las filas en un máximo de 400px con **_grid-auto-rows: 400px_**.
- Luego, llamamos la imagen desde su clase con **_.hero-image_**.
- Le damos un alto y ancho del 100% para que siempre ocupe el total del contenedor, sin crecer demasiado ni romperse.

**_object-fit: contain_** nos ayuda a que la imagen se ajuste al espacio que está ocupando. La propiedad contain permite que siempre se vea completa.  
Por último, alineamos el texto verticalmente con **_align-self: center_**.

```css
.hero {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-auto-rows: 400px;
}
.hero-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.info {
    align-self: center;
}
```

Este sería nuestro resultado visto desde el inspector de elementos:  

![image.png](https://static.platzi.com/media/articlases/Images/image%28351%29.png)

## 10. Creando la grilla con área

Ya estamos en nuestra segunda [sección del proyecto](https://platzi.com/clases/2474-css-grid/42189-proyecto/). No demoremos más y pasemos a un breve análisis del diseño antes de empezar a maquetar en código.

![image.png](https://static.platzi.com/media/articlases/Images/image%28353%29.png)

Tenemos una imagen grande a la derecha y cuatro pequeñas a la izquierda. Usamos las celdas pequeñas para definir el tamaño de las celdas de nuestra grilla, porque las celdas ocupan el espacio mínimo.

### Maquetación de la grilla

- Primero debemos crear otra sección.
- Creamos una etiqueta div con una clase a la que llamaremos con el creativo nombre de “**dishes-grid**”. Creo que no hace falta explicar el porqué.
- Como únicamente manejaremos imágenes, podemos colocar de forma directa las etiquetas **_img_** en lugar de contenerlas en algún **_div_**.
- Agregamos una misma clase para todas las imágenes, añadiendo una segunda clase a la imagen más grande. De esta manera:

```html
        <section class="dishes">
            <h2 class="dishes-title">Out services</h2>
            <div class="dishes-grid">
                <img class="dishes-item dishes-item_big" src="./img/video.png" alt="mesa con platos de pasta">
                <img class="dishes-item" src="./img/dish1.png" alt="bowl de vegetales">
                <img class="dishes-item" src="./img/dish2.png" alt="bowl de vegetales">
                <img class="dishes-item" src="./img/dish3.png" alt="bowl de vegetales">
                <img class="dishes-item" src="./img/dish4.png" alt="bowl de vegetales">
            </div>
        </section>
```

### Estilos de la grilla

- Llamamos la etiqueta de section desde su clase con **_.dishes_**.
- Añadimos un margen superior de **_100px_** y de **_0_** a los lados para separarla de la sección anterior.

```css
.dishes {
    margin: 100px 0;
}
```

- Llamamos la etiqueta de section desde su clase con **_.dishes_**.
- Ajustamos su color en **_#333_**.
- Cambiamos el tamaño de fuente en **_2rem_** y su peso en **_bold_**.
- Le damos un margen inferior de **_50px_**.
- Centramos el título con text-align: center.

```css
.dishes-title {
    color: #333;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
    font-size: 2rem;
}
```

- Llamamos la etiqueta contenedora de las imágenes con **_.dishes-grid_**.
- Por supuesto, aplicamos **_display: grid_**.
- Creamos cuatro columnas de una fracción cada una con ***grid-template-columns: repeat(4, 1fr)***.
- Creamos las filas con un alto de una fracción con **_grid-auto-rows: 1fr_**.
- Añadimos un **_gap: 25px_** para crear un espaciado entre las imágenes.
- Centramos el contenedor con **_justify-content: center_**.

```css
.dishes-grid {
    margin: 100px 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(150px, 200px));
    grid-auto-rows: 1fr;
    gap: 25px;
    justify-content: center;
}
```

- Llamamos las imágenes por sus clases con **_.dishes-item_**.
- Le damos un ancho y alto del **_100%_** de su contenedor.
- Usamos **_object-fit: cover_** para que ocupe toda la celda en que se encuentra.

```css
.dishes-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28399%29.png)

Como vemos, funciona. Ahora necesitamos que la primera imagen ocupe cuatro celdas, desde la línea uno, hasta la tres, tanto vertical como horizontalmente.

- Para ello, llamamos la clase adicional que creamos para la imagen más grande.
- Delimitamos su área desde la primera línea horizontal y vertical, hasta la tercera.

```css
.dishes-item_big {
    grid-area: 1/1/3/3;
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28400%29.png)

### Retoques de la primera sección

Recordemos que hubo varias [partes de nuestra sección anterior](https://platzi.com/clases/2474-css-grid/42190-hagamos-nuestra-primera-seccion/) sin terminar como la del título, subtítulo y botón.

- Primero, creamos una clase para las etiquetas **_h1_**, **_p_** y **_button_**.
- Llamamos la clase de la etiqueta **_h1_**.
- Ajustamos su color en **_#333_**.
- Cambiamos el tamaño de fuente en **_3rem_** y su peso en **_bolder_**.
- Le damos un margen inferior de **_24px_**.

```css
.info-title {
    color: #333;
    font-size: 3rem;
    font-weight: bolder;
    margin-bottom: 24px;
}
```

- Llamamos la clase de la etiqueta **_p_**.
- Ajustamos su color en **_#333_**.
- Cambiamos el tamaño de fuente en **_1rem_**.
- Le damos un margen inferior de **_24px_**.

```css
.info-subtitle {
    color: #333;
    font-size: 1rem;
    margin-bottom: 24px;
}
```

- Llamamos la clase de la etiqueta **_button_**.
- Redondeamos las esquinas con **_border-radius: 20px_**.
- Ajustamos su color en **_#333_** y su color de fondo en **_#fb8c00_**.
- Cambiamos el peso de fuente en **_bolder_**.
- Le damos un padding superior e inferior de **_12px_** y arriba y abajo de **_24px_**.

```css
.info-button {
    border: none;
    border-radius: 20px;
    color: #333;
    background-color: #fb8c00;
    font-weight: bolder;
    padding: 12px 24px;
}
```

¡Y listo! Hemos repasado varias funciones importantes como gap, template, auto-row y grid-area. ¿Verdad que aplicar lo aprendido refuerza mucho más que solo apuntarlo en tus notas?

## 11. Armando el listado

### Maquetación del listado

Como vemos, se trata de una sección muy simple que tiene un título y cinco elementos imagen.

![image.png](https://static.platzi.com/media/articlases/Images/image%28417%29.png)

- Primero creamos una nueva sección con la clase menú.
- Creamos un **_h2_** para el título de la sección con la clase **_menu-title_**. Agregamos el contenido.
- Creamos un contenedor para las imágenes con la clase **_menu-grid_**.
- Notamos en la muestra de arriba que cada imagen tiene un fondo rosa con los bordes redondeados. Para ello necesitamos contender cada etiqueta **_img_** en un **_div_**. A cada uno le agregamos la clase **_menu-grid-item_**.

```html
        <section class="menu">
            <h2 class="menu-title">Home menu</h2>
            <div class="menu-grid">
                <div class="menu-grid-item">
                    <img src="./img/plate1.png" alt="Plato de pasta con salsa y vegetales">
                </div>
                <div class="menu-grid-item">
                    <img src="./img/plate2.png" alt="Plato de pasta con salsa y vegetales">
                </div>
                <div class="menu-grid-item">
                    <img src="./img/plate3.png" alt="Plato de pasta con salsa y vegetales">
                </div>
                <div class="menu-grid-item">
                    <img src="./img/plate4.png" alt="Plato de pasta con salsa y vegetales">
                </div>
                <div class="menu-grid-item">
                    <img src="./img/plate5.png" alt="Plato de pasta con salsa y vegetales">
                </div>
            </div>
        </section>
```

### Estilos para el listado

#### Título

- Llamamos la clase .menu y agregamos un **_margin-bottom: 200px_** para separarla del final de la sección.
- Ahora, llamamos a la clase de nuestro título con **_.menu-title_**.
- Le damos un tamaño de **_2rem_** y un color de **_#333_**. Agregamos un peso en **_bolder_**.
- Centramos el texto con **_text-align: center_** y añadimos un margin inferior con **_margin-bottom: 50px_**.

```css
.menu {
    margin-bottom: 200px;
}
.menu-title {
    font-size: 2rem;
    color: #333;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 50px;
}
```

### Grilla

- Llamamos la clase de nuestro menú con **_.menu-grid_**. Por supuesto, aplicamos **_display: grid_**.
- Centramos el contenedor.
- Creamos 5 columnas con un ancho mínimo de **_100px_** cada una y un máximo de **_250px_**.
- Llamamos a los contenedores de imagen con **_.menu-grid-item_**.
- Le damos un color de fondo, en este caso usaremos **_coral_**.
- Sólo redondeamos una de sus esquinas con **_border-top-left-radius: 40px_**.
- Llamamos cada imagen desde su clase contenedora con **_.menu-grid-item img_**.
- Le damos un ancho y alto del 100%.
- Modificamos la imagen para que se adapte al tamaño de la caja contenedora con **object-fit: contain**.

```css
.menu-grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, minmax(100px, 250px));
}
.menu-grid-item {
    background-color: coral;
    padding: 15px;
    border-top-left-radius: 40px;
}
.menu-grid-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
```

Podremos visualizar este resultado en nuestro navegador:  
![image.png](https://static.platzi.com/media/articlases/Images/image%28450%29.png)}

## 12. ¿Cómo hacer nuestro proyecto responsivo?

Lo primero es revisar sección por sección para evaluar los cambios que podemos hacer en cada una. Es decir, redimensionar el ancho de la página para ver en qué puntos se rompe el contenido.

### Encabezado

Notamos que el texto se rompe al reducir el ancho de la página. Para ello vamos a modificar su grid-template-columns.

![image.png](https://static.platzi.com/media/articlases/Images/image%28451%29.png)

- Vamos a la clase que contiene sus estilos **_.hero_**.
- Cambiamos el valor de su **_grid-template-columns_**, de **_2fr_** a ***minmax(300px, 2fr)***.

```css
.hero {
    display: grid;
    grid-template-columns: minmax(300px, 2fr) 3fr;
    grid-auto-rows: 550px;
    border-bottom: 1px solid;
}
```

Ahora vemos que no se reduce más de 300px y no se rompe.

![image.png](https://static.platzi.com/media/articlases/Images/image%28452%29.png)

Para que se adapte al ancho pantalla, usamos los media queries.

- Creamos un media screen que sirva hasta que el ancho supere los 768px
- Llamamos la clase contenedora de la primera sección y aplicamos un mínimo y máximo fijos a sus columnas,
- Centramos el contenedor para evitar que nos sobre demasiado espacio.

```css
@media screen and (max-width: 768px) {
    .hero {
        grid-template-columns: minmax(300px, 500px);
        justify-content: center;
    }
    .hero-image {
        display: none;
    }
}
```

### Nuestros servicios

Como vemos, la caja no se adapta. Al redimensionarla se genera un scroll que es bastante molesto para el usuario. Para solucionar este problema, podemos usar **auto-fit** y que así las cajas se vayan acomodando automáticamente.

![image.png](https://static.platzi.com/media/articlases/Images/image%28455%29.png)

- Vamos a la caja contenedora con **_.dishes-grid_**.
- Reemplazamos el valor **_4_** por **_auto-fit_**.
- Reemplazamos el valor mínimo por 75px.

```css
.dishes-grid {
    display: grid;
    **grid-template-columns: repeat(auto-fit, minmax(150px, 200px));**
    grid-auto-rows: 1fr;
    gap: 25px;
    justify-content: center;
}
```

Creamos dentro del media querie:

```css
    .dishes-grid {
        grid-template-columns: repeat(auto-fit, minmax(75px, 100px));
    }
```

### Home menu

Tenemos el mismo problema que en la sección pasada. Y adivina qué, también lo podemos solucionar con **auto-fit**.

- Llamamos la clase contenedora con **_.menu-grid_**.
- Cambiamos el valor inicial por **_auto-fit_**.
- Eliminamos el ancho mínimo y máximo y lo dejamos en **_150px_** para que se mantenga siempre en ese valor.

```css
.menu-grid {
    display: grid;
    gap: 25px;
    justify-content: center;
   ** grid-template-columns: repeat(auto-fit, 150px);**
}
```

![image.png](https://static.platzi.com/media/articlases/Images/image%28456%29.png)

Hemos terminado nuestro proyecto usando CSS Grid para resolver todos las grillas.

## Examen 

1. CSS Grid Layout es una especificación de CSS para implementar grillas usando un sistema de tres dimensiones

Falso

2. En un grid usamos las filas y columnas como referencia para ubicar nuestros elementos

Verdadero

3. Para definir los espacios entre columnas o filas usas la propiedad

gap

4. place-items es la propiedad usada para alinear horizontalmente los elementos de la grilla

Falso

5. Si tenemos una grilla de 3x3 y queremos crear un área que ocupe las filas 2 y 3 completas debemos usar

grid-area: 2 / 1 / 4 / 4

6. Para crear 3 filas de un mismo ancho debes usar la función

repeat(3, 1fr)

7. Si quieres que una columna tenga un ancho mínimo de 50 pixeles y un máximo definido por la cantidad de contenido debes usar

minmax(50px, max-content)

8. Para generar columnas extra que llenen el 100% del espacio disponible pero no sean visibles se usa

auto-fill

9. Si un grid tiene la propiedad grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); su comportamiento va a ser

Sus columnas se van a ajustar al espacio disponible haciéndose mas anchas o estrechas

10. Los tracks de una grilla son conjuntos de celdas que ocupan varias filas y columnas

Falso

11. ¿Qué características tendría una grilla creada con el siguiente código? display: grid; gap: 10px; align-content: center; height: 800px; grid-template-columns: minmax(50px, 100px) minmax(100px, auto); grid-auto-rows: 50px;

Estaría centrada verticalmente-Respuesta Incorrecta

12. Para definir el tamaño de los espacios entre columnas de la grilla debes usar row-gap

Falso

13. CSS Grid Layout es una especificación de CSS para implementar grillas usando un sistema de dos dimensiones

Verdadero

14. En una grilla todos los elementos deben ocupar una sola celda

Falso

15. Ítems es el nombre que se le da a los hijos del contenedor

Verdadero