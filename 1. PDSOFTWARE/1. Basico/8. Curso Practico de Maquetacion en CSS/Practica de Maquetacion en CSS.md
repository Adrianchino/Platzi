# Maquetacion en CSS

## 1. Lo que aprenderás sobre maquetación en CSS

La maquetación CSS tiene como objetivo ofrecer al usario una estructura visual de página avanzada, personalizada y atractiva visualmente, donde sea fácil identificar cada parte del contenido, destacando los elementos que sean importantes en cada caso.

Ya desde el punto de vista del desarrollador, la maquetación CSS sirve para permitir **la separación del contenido y la presentación, o aspecto, con el que se debe mostrar**. Debemos tener en cuenta que, cuanto más separemos estos dos elementos, más sencillo será el mantenimiento de las páginas y el procesamiento de la información. Con ello también podremos obtener páginas más limpias y claras en lo que respecta al código.

## 2. Chrome Devtools:

**CCS**  
No es un lenguaje de programación, es un lenguaje que me permite dar estilos a lo que maquetamos en HTML.  
Usamos selectores de etiquetas solo por la palabra, selectores de clase mediante .nombredeClase, y por ID mediante #nombreId  

**DevTools**:  
Es una serie de herramientas que facilitan el proceso de desarrollo. Podemos ver en tiempo real que estamos haciendo con CSS,JS, podemos ver peticiones, imágenes y demás. Incluso podemos hacer debuggin para hallar problemas al momento de renderizarse.

## 3. Diseño del proyecto

Aqui les dejo todo lo que se va a utilizar en el curso en una sola carpeta de Dropbox. Antes estaba un link por parte de Platzi pero ya no funciona.

[https://www.dropbox.com/sh/skwiu9gqkr2j6yb/AABmvWbUcTgDnr1m0U1RlcLBa?dl=0](https://www.dropbox.com/sh/skwiu9gqkr2j6yb/AABmvWbUcTgDnr1m0U1RlcLBa?dl=0)

## 4. Setup del proyecto

Vamos a crear los siguientes archivos dentro de nuestra carpeta de proyecto:

1. index.html
2. blog.html
3. blogs.html
4. perfil.html

Luego crearemos dos carpetas:

1. **assets**, y dentro de una una carpeta llamada **img**
2. **css,** y dentro un archivo llamado **main.css**

La estructura nos quedará de la siguiente manera:  

![screen1.png](https://static.platzi.com/media/user_upload/screen1-2440eef2-71b0-4926-bcb5-6d963692ce09.jpg)

## 5. Arquitectura del header en HTML

**rquitectura de elementos de una página web**  
Cuando se empieza a _**maquetar**_ o **_diseñar_** una página web, hay que tomar en cuenta un diseño preliminar. Dicho diseño deberá ser analizado para determinar sus compsiciones.  
En el desarrollo moderno web, tenemos que considerar el desarrollo **responsivo** o, inclusive, **PWA**. Determinando, en la mayoría de los casos, colores, disposiciones, etc.  
El profesor utiliza, _**section**_ y _**div**_ para agrupar elementos. Sin embargo, considero que no se debe tomar tan a la ligera ese tipo de notaciones ya que son diferentes, más en el uso estricto del texto.  
**Section**, se utiliza para agrupar elementos con algún significado y el **Div** para aquellos sin uno o como comodín.

Recuerden que la semántica al momento de crear nuestro sitio web es súper importante más adelante con fines de SEO.

![](https://stuyhsdesign.files.wordpress.com/2017/02/structuring-page2.gif)

[Construyendo la parte del Header](https://github.com/degranda/Platzi-blog/tree/master/Clase%205%20(index%20header))

## 6. Estilos en el header

Si quieren evitarse tener que hacer el “reset” de los elementos HTML a mano y que aun asi tengan las mejores prácticas en su página, les recomiendo que usen [Normalize CSS](https://necolas.github.io/normalize.css/) que les hara todo el trabajo por ustedes, es simplemente codigo css que debemos de poner en un archivo aparte (yo normalmente hago esto) e importarlo como el primer archivo css en su pagina HTML, así tendrán las mejores practicas de CSS, además de que el código viene comentado detallando que hace cada parte. se los recomiendo para sus proximos proyectos.

[Estilos al header](https://github.com/degranda/Platzi-blog/tree/master/Clase%206%20(index%20estilos%20header))

## 7. Agregando íconos

En esta parte del curso, agregamos los iconos con **fontawesome** lo cual les dejare el link.
Deben tener una cuenta registrada para poder pegar el link.
[Fontawesome](https://fontawesome.com/icons)

Parte del codigo:
[Css](https://github.com/degranda/Platzi-blog/tree/master/Clase%207%20(index%20iconos%20header))

Aquí ignoren la parte del Font en la carpeta, solo agreguen los iconos a través de link que les deje

## 8. Agregando imágenes al header

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%208%20(index%20imagen%20header))

## 9. Manejo de Grid para posicionar contenedores

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%209%20(index%20manejo%20de%20grid))

## 10. Manejo de imágenes de Background

[Entra aquí](https://github.com/degranda/Platzi-blog/tree/master/Clase%2010%20(index%20img%20background))

## 11. Agregando fuentes

[Entra aquí](https://github.com/degranda/Platzi-blog/tree/master/Clase%2011%20(index%20fuentes%20google))

Aqui obtendremos las fuentes para nuestro estilo.
[Google Fonts](https://fonts.google.com/)

## 12. Terminando el Home

[Entra aquí](https://github.com/degranda/Platzi-blog/tree/master/Clase%2012%20(index%20terminando%20el%20home))

## 13. Blog page

[Entra aquí](https://github.com/degranda/Platzi-blog/tree/master/Clase%2013%20(pagina%20blogs)))

## 14. Manejo de clases

### Metodología BEM

Son una serie de normas que buscan tener nuestro código CSS bien organizado. Existen muchas metodologías, pero BEM es de las más populares. Cubre la necesidad de tener proyectos complejos bien estructurados para evitar confusiones o redundancia.  
.  
**BEM** es una abreviación de las palabras “Block”, “Element” y “Modifier” (Bloque, elemento y modificador en español), esto es por la forma en la que trataremos cada elemento de nuestra página web.  
**Bloque**: Es un elemento que existe por si mismo, es completamente independiente. En el proyecto de este clase, el bloque bien podría ser la sección de Noticias.  
**Elemento**: Son las partes que componen el bloque; cuadros de texto, imagenes, títulos, botones, etc.  
**Modificadores**: Son las distintas versiones de un elemento; el mejor ejemplo es cuando tienes el mismo boton en varios bloques, pero con colores distintos.  
.  
Frecuentemente las clases se llaman con el siguiente formato: [`class="bloque__elemento--modificador"`], siendo el modificador opcional.  
.  
Las metodologías nos permite reciclar código y conocerlas también nos va a nos facilitará integrarnos a un equipo de trabajo.  
.  
**Puedes encontrar más información sobre BEM [aquí](http://getbem.com/)**

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2014%20(blogs%20manejo%20de%20clases))

## 15. Estilos en blogs html

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2015%20(blogs%20estilos))

**Les dejo un juego para refrescar los conocimientos de CSS grid**  
[CSS Grid Garden](https://cssgridgarden.com/#es)

## 16. Agregando imagen

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2016%20(blogs%20agregando%20imag%C3%A9n))

## 17. Estilos del botón

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2017%20(blogs%20estilos%20al%20boton))

Podemos agregar un hover para mejorar el diseño:  

![Captura de Pantalla 2020-05-16 a la(s) 19.23.55.png](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-05-16%20a%20la%28s%29%2019.23.55-424187ca-6920-45aa-89fd-98229c471ead.jpg)

```css
.blogs-button:hover {
	border: 1px solid white;
	color: white;
	background-color: #48CFAD;
}
```

## 18. Trabajando la sección de post


[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2018%20(blogs%20seccion%20posts))

## 19. Grid Container

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2019%20(blogs%20grid%20container))

## 20. Crear la pantalla de blog

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2020%20(pagina%20blog)%20)

## 21. Agregando estilos a la página de blog

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2021%20(blog%20estilos))

## 22. Sección de contacto

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2022%20(blog%20seccion%20de%20contacto))

## 23. Maquetando perfil HTML

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2023%20(pagina%20perfil))

## 24. Manejando estilos en la página de perfil

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2024%20(perfil%20estilos))

## 25. Media Queries

[Entra aqui](https://github.com/degranda/Platzi-blog/tree/master/Clase%2025%20(media%20queries))


