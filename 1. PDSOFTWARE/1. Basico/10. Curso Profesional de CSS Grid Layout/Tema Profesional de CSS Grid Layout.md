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

## 10. 



