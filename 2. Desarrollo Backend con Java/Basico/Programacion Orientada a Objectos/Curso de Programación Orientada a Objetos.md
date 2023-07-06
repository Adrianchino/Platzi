# Curso de Programación a Objetos

## 1. ¿Por qué aprender Programación Orientada a Objetos?

- **Vas a programar más rápido**. Tener un análisis previo de lo que estás realizando te ayudará a generar código mucho más veloz
    
- **Dejas de ser Programador Jr**. Podrás responder preguntas como ¿Qué es encapsulamiento?, ¿Qué es Abstracción?, ¿Qué es Herencia?, ¿Qué es Polimorfismo? en futuras entrevistas de trabajo
    
- **Dejar de Copiar y Pegar Código**.

Programación orientada a objetos tiene cuatro características principales:  
 
**Encapsulamiento**. Quiere decir que oculta datos mediante código.  
**Abstracción**. Es como se pueden representar los objetos en modo de código.  
**Herencia.** Es donde una clase nueva se crea a partir de una clase existente.  
**Polimorfismo**. Se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos.  
En este curso, los pasos a seguir será.  
_Analisis_  
_Plasmar_  
_Programar_  
La mayoría solo aprende a hacer esto en un lenguajes de programación,aquí se tiene una variabilidad. ❤️

## 2. ¿Qué resuelve la Programación Orientada a Objetos?

La programación Orientada a Objetos nace de los problemas creados por la programación estructurada y nos ayuda a resolver cierto problemas como:

- Código muy largo: A medida que un sistema va creciendo y se hace más robusta el código generado se vuelve muy extenso haciéndose difícil de leer, depurar, mantener.
    
- Si algo falla, todo se rompe: Ya que con la programación estructurada el código se ejecuta secuencialmente al momento de que una de esas líneas fallara todo lo demás deja de funcionar.
    
- Difícil de mantener.

## 3. Paradigma Orientado a Objetos

}La **Programación Orientada a Objetos** viene de una filosofía o forma de pensar que es la **Orientación a Objetos** y esto surge a partir de los problemas que necesitamos plasmar en código.

Es analizar un problema en forma de objetos para después llevarlo a código, eso es la **Orientación a Objetos**.

Un **paradigma** es una teoría que suministra la base y modelo para resolver problemas. La paradigma de Programación Orientada a Objetos se compone de 4 elementos:

- Clases
- Propiedades
- Métodos
- Objetos

Y 4 Pilares:

- Encapsulamiento
- Abstracción
- Herencia
- Polimorfismo

## 4. Lenguajes Orientados a Objetos

Algunos de los lenguajes de programación Orientados a Objetos son:

- **Java**:  
    – Orientado a Objetos naturalmente  
    – Es muy utilizado en Android  
    – Y es usado del lado del servidor o Server Side
- **PHP**  
    – Lenguaje interpretado  
    – Pensado para la Web
- **Python**  
    – Diseñado para ser fácil de usar  
    – Múltiples usos: Web, Server Side, Análisis de Datos, Machine Learning, etc
- **Javascript**  
    – Lenguaje interpretado  
    – Orientado a Objetos pero basado en prototipos  
    – Pensado para la Web
- C#
- Ruby
- Kotlin

## 5. # Instalando Visual Studio Code

Visual Studio Code lo puedes encontrar en las tres versiones básicas de Sistema Operativo (Windows, Mac y Linux) y lo puedes descargar directo en este enlace: [https://code.visualstudio.com/download](https://code.visualstudio.com/download). Es muy ligero y basta con un Siguiente, siguiente, siguiente para instalar.

Primero ubica la sección de **Extensiones** o en inglés **Extensions**, además de la barra de Search porque estaremos buscando la extensión para cada lenguaje.

![Visual code](https://i.postimg.cc/DfcMR42n/Instalacion.jpg)


### Java

En la barra de Search Extensions escribe: **Java Extension Pack** y da clic en el botón verde **Install**.

Ahora, para tener una mejor experiencia en Debugging, instala el Debugger for Java, el cual encuentras siguiendo el procedimiento anterior.

Listo, terminamos con Java. Aprende más en este enlace: [https://code.visualstudio.com/docs/languages/java](https://code.visualstudio.com/docs/languages/java)

Ahora vamos por Python.

### Python

Comencemos instalando Python en nuestra computadora. Dirígete al sitio [python.org](https://www.python.org/) y dale clic en el botón de Descargar.

![Pytho](https://i.postimg.cc/ZYXpRLFJ/python.jpg)

erminaremos la configuración de Python en Visual Studio Code más adelante. Aprende más [aquí](https://code.visualstudio.com/docs/python/python-tutorial).

Mientras tanto sigamos con PHP.

### PHP

Primero necesitamos instalar el intérprete de PHP, la forma más fácil es descargando XAMPP:

[Descarga XAMPP](https://www.apachefriends.org/es/index.html)

Puedes descargarlo tanto para Linux, Windows o macOS.

![php](https://i.postimg.cc/mD212CN4/php.jpg)

Nos dirigimos a Visual studio Code y con el intérprete instalado, para configurar PHP buscaremos la extensión **PHP Server** y pulsamos “Instalar” 

Luego seleccionamos Configuraciones y buscamos php server y nos quedaría así:

![php server](https://i.postimg.cc/Hss2r8z6/xamp.jpg)

- En el apartado `Phpserver: PHP Config Path` debe decir: `C:\xampp\php\php.ini`.
- En el apartado `Phpserver: PHP Path` debe decir: `C:\xampp\php\php.exe`.

❗ _Estas rutas pueden variar si durante la instalación de XAMPP cambiaste el directorio de instalación, o si tu Windows está instalado en otro disco que no sea el disco `C:`._

¡Con esto ya tienes PHP instalado!. Puedes aprender más en la ruta de [Desarrollo Web Backend con PHP](https://platzi.com/desarrollo-php/)

### Comencemos nuestro proyecto

Ya está todo listo, ahora dejemos creado el proyecto.

- Para esto seleccionaremos la opción **Add workspace folder**

- A continuación creamos una carpeta llamada **CursoPOOUber** y damos clic en Add para finalizar. Ahora generemos esta estructura de carpetas para manejar los documentos correspondientes al lenguaje de programación:
- Dentro de esta carpeta creamos 4 carpetas con las cuales trabajaremos: Java, JS, PHP, Python

Ahora que tenemos listo nuestro sistema de archivos terminemos la configuración de Python en VSC, vamos al menú View -> Command Palette y escribimos python “Seleccionar intérprete”.

¡Ya terminamos, estamos listos!

## 6. Diagramas de Modelado

**OMT**: Object Modeling Techniques. Es una metodología para el análisis orientado a objetos.

**UML**: Unified Modeling Language o Lenguaje de Modelado Unificado. Tomó las bases y técnicas de OMT unificándolas. Tenemos más opciones de diagramas como lo son Clases, Casos de Uso, Objetos, Actividades, Iteración, Estados, Implementación.

Muy buen libro para aprender [UML](https://es.slideshare.net/still01/aprendiendo-uml-en-24-horas-16815956)

## 7. Qué es UML

Como ya viste UML significa Unified Modeling Language el cual es un lenguaje estándar de modelado de sistemas orientados a objetos.

Esto significa que tendremos una manera gráfica de representar una situación, justo como hemos venido viendo. A continuación te voy a presentar los elementos que puedes utilizar para hacer estas representaciones.

Las **clases** se representan así:

![clase.png](https://static.platzi.com/media/user_upload/clase-1897e6cf-84b3-4432-926b-aff4fc4db122.jpg)

En la parte superior se colocan los atributos o propiedades, y debajo las operaciones de la clase. Notarás que el primer caracter con el que empiezan es un símbolo. Este denotará la visibilidad del atributo o método, esto es un término que tiene que ver con Encapsulamiento y veremos más adelante a detalle.

Estos son los niveles de **visibilidad** que puedes tener:

**-** private  
**+** public  
**#** protected  
**~** default

Una forma de representar las relaciones que tendrá un elemento con otro es a través de las flechas en UML, y aquí tenemos varios tipos, estos son los más comunes:

### Asociación

![associacion.png](https://static.platzi.com/media/user_upload/associacion-d2e1b691-b6e9-4854-85e2-d3ffdf0a9049.jpg)

Como su nombre lo dice, notarás que cada vez que esté referenciada este tipo de flecha significará que ese elemento contiene al otro en su definición. La flecha apuntará hacia la dependencia.

![uml-relacion-asociacion.jpg](https://static.platzi.com/media/user_upload/uml-relacion-asociacion-99b916c6-1f80-4b61-889a-ebf6e74f4f23.jpg)

Con esto vemos que la ClaseA está asociada y depende de la ClaseB.

### Herencia

![herencia.png](https://static.platzi.com/media/user_upload/herencia-2eb98d5e-bcad-4162-b236-aa87eba20e76.jpg)

Siempre que veamos este tipo de flecha se estará expresando la herencia.  
La dirección de la flecha irá desde el hijo hasta el padre.

![herencia-clases.png](https://static.platzi.com/media/user_upload/herencia-clases-53cb3117-def7-433f-adc5-4ad183d6b5e7.jpg)

Con esto vemos que la ClaseB hereda de la ClaseA

### Agregación

![agregacion.png](https://static.platzi.com/media/user_upload/agregacion-6489d946-cc06-4e3c-a976-f6435531b4f2.jpg)

Este se parece a la asociación en que un elemento dependerá del otro, pero en este caso será: Un elemento dependerá de muchos otros. Aquí tomamos como referencia la multiplicidad del elemento. Lo que comúnmente conocerías en Bases de Datos como Relaciones uno a muchos.

![uml-relacion-agregacion.jpg](https://static.platzi.com/media/user_upload/uml-relacion-agregacion-adb20be8-d6c2-41d1-b002-2cfa37639240.jpg)

Con esto decimos que la ClaseA contiene varios elementos de la ClaseB. Estos últimos son comúnmente representados con listas o colecciones de datos.

### Composición

![composicion.png](https://static.platzi.com/media/user_upload/composicion-1da1dd19-6925-42d9-9727-7fd8cb031b0c.jpg)

Este es similar al anterior solo que su relación es totalmente compenetrada de tal modo que conceptualmente una de estas clases no podría vivir si no existiera la otra.

![uml-relacion-composicion.jpg](https://static.platzi.com/media/user_upload/uml-relacion-composicion-2d4cb1fa-5422-44e3-849b-3a3e2d276733.jpg)

Con esto terminamos nuestro primer módulo. Vamos al siguiente para entender cómo podemos hacer un análisis y utilizar estos elementos para construir nuestro diagrama de clases de Uber.}

## 8. Objetos

Los Objetos son aquellos que tienen propiedades y comportamientos, también serán sustantivos.

- Pueden ser Físicos o Conceptuales

Las **Propiedades** también pueden llamarse atributos y estos también serán sustantivos. Algunos atributos o propiedades son nombre, tamaño, forma, estado, etc. Son todas las características del objeto.

Los **Comportamientos** serán todas las operaciones que el objeto puede hacer, suelen ser verbos o sustantivos y verbo. Algunos ejemplos pueden ser que el usuario pueda hacer login y logout.

## 9. Abstracción y Clases

Una **Clase** es el modelo por el cual nuestros objetos se van a construir y nos van a permitir generar más objetos.

Analizamos Objetos para crear **Clases**. Las **Clases** son los modelos sobres los cuales construiremos nuestros objetos.

**Abstracción** es cuando separamos los datos de un objeto para generar un molde.

## 10. Modularidad

La **modularidad** va muy relacionada con las clases y es un principio de la Programación Orientado a Objetos y va de la mano con el Diseño Modular que significa dividir un sistema en partes pequeñas y estas serán nuestros módulos pudiendo funcionar de manera independiente.

La **modularidad** de nuestro código nos va a permitir

- Reutilizar
- Evitar colapsos
- Hacer nuestro código más mantenible
- Legibilidad
- Resolución rápida de problemas

Una buena práctica es separando las clases en archivos diferentes.

## 11. Analizando Uber en Objetos

![Analizando](https://i.postimg.cc/7ZtjY9Gy/Analizando-objectos.jpg)

En esta imagen nos demuestra como iremos analizando paso por paso, para así descubrir cuantos atributos iremos a utilizar.

##  13. Clases en UML y su sintaxis en código

![UML](https://i.postimg.cc/TwS50Z43/UML.jpg)

**Clases en UML y su sintaxis en código**  
.  
**Recuerda que el proceso es:**  
• Identificar el problema, y objetos  
• Definir las clases  
• Plasmarlas en un diagrama  
**Se lo puede plasmar en UML :**  
• **Identidad,** que será el nombre de la clase.  
• **Estado,** que serán los atributos de la clase.  
• **Comportamiento,** que serán las operaciones de la clase.

## 14. Modelando nuestros objetos Uber

![Modelos](https://static.platzi.com/media/public/uploads/modelando-nuestros-objetos-uber-1_311f8882-9610-4198-aa89-3b86c2de62b2.png)

![Modelos2](https://static.platzi.com/media/public/uploads/modelando-nuestros-objetos-uber-2_02bc1a0c-3810-48e4-947a-d05d00e3c230.png)

## 14. ¿Qué es la herencia?

**Don’t repeat yourself** es una filosofía que promueve la reducción de duplicación en programación, esto nos va a inculcar que no tengamos líneas de código duplicadas.

Toda pieza de información nunca debería ser duplicada debido a que incrementa la dificultad en los cambios y evolución

La **herencia** nos permite crear nuevas clases a partir de otras, se basa en modelos y conceptos de la vida real. También tenemos una jerarquía de **padre e hijo**.

## 16. Aplicando Herencia a nuestro proyecto Uber

#### Archivos de la clase


[aplicando-herencia-a-nuestro-proyecto-uber1.png](https://static.platzi.com/media/public/uploads/aplicando-herencia-a-nuestro-proyecto-uber1_bf088c4f-9198-4a8b-b91a-abe62debf181.png)[

[aplicando-herencia-a-nuestro-proyecto-uber2.png](https://static.platzi.com/media/public/uploads/aplicando-herencia-a-nuestro-proyecto-uber2_5ba149e0-9792-4e82-9430-84a44b7c1060.png)

[aplicando-herencia-a-nuestro-proyecto-uber3.png](https://static.platzi.com/media/public/uploads/aplicando-herencia-a-nuestro-proyecto-uber3_5e853a21-7760-4fc9-9842-3c74d390c0ba.png)[

[diagrama.jpg](https://static.platzi.com/media/public/uploads/diagrama_10b7b328-fbde-4cc2-b758-0b31ec6f0260.jpg)

## 17. Reto 2: analicemos un problema

Imagina que nuestro sistema de adopciones creció y ahora ofrece adoptar pericos, loros, gatos y hamsters.

Genera un nuevo análisis, aplica herencia para abstraer mejor el problema y lograr modularidad en el _software_.

Comparte tus resultados en la sección de discusiones.

## 18. Creando nuestras carpetas iniciales para el curso

¡Hola! Ahora sí vamos a empezar a definir nuestras clases en 4 diferentes lenguajes de programación, pero antes de ello vamos primero a crear la estructura de nuestras carpetas.

La estructura de carpetas que estaremos manejando durante el curso será la siguiente:

```
CursoPOOUber
├── Java
├── JS
├── PHP
└── Python
```

Básicamente nuestra carpeta raíz será la carpeta `CursoPOOUber` y dentro crearemos las carpetas `Java`, `JS`, `PHP` y `Python` en las cuales iremos guardando nuestros archivos a medida que avanzamos en el curso.

### Configurando el workspace para Python

En una clase anterior instalamos Python, sin embargo, como estaremos guardando todo el código de este lenguaje dentro de la carpeta `Python` debemos informarle a Visual Studio Code que el código va a estar ahí, de esta forma podemos evitar problemas a futuro cuando usemos módulos.

Para hacer esto es muy sencillo, dentro de nuestra carpeta `CursoPOOUber` vamos a crear una nueva carpeta llamada `.vscode` (ojo, el punto al inicio del nombre es importante). Dentro de esta carpeta vamos a crear un nuevo archivo llamado `settings.json` y dentro de este archivo vamos a poner la siguiente información:

```
{
    "python.autoComplete.extraPaths": ["./Python"],
}
```

De esta forma le estamos diciendo a nuestro editor de código que todos nuestros archivos de Python van a estar dentro de la carpeta `Python`, por tanto, él sabrá que cualquier módulo deberá leerlo desde esa carpeta, y no desde la carpeta raíz, lo cual evitará que te marque errores en el futuro 😄.

**Es importante** que cuando abras tu proyecto en Visual Studio Code, lo abras desde la carpeta `CursoPOOUber`, de esta forma, el editor de código te mostrará en el árbol de carpetas a tus 5 carpetas que has creado:

![folder_structure.png](https://static.platzi.com/media/user_upload/folder_structure-214fcc01-2f6a-4a61-82d1-f8688e142380.jpg)

¡Estamos listos para empezar a codear! Nos vemos en las siguiente clase donde empezaremos a definir clases con Java y Python.

## 19. Definiendo clases en Java y Python

Código para las clases de java y Python 

[DESCARGAR TODO](https://github.com/anncode1/Curso-POO-Platzi/archive/master.zip)

## 20. 



