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

## 5. 