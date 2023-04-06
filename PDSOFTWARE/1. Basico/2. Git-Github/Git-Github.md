# Curso Profesional de Git y GitHub

## . ¿Qué es Git?

Sistema que guarda solo cambios de un archivo, maneja los cambios que otras personas hacen sobre los mismos archivos, así múltiples personas pueden trabajar en un mismo proyecto sin pisar. Cuando hay errores se puede saber quien hizo los cambios y recuperar versiones viejas.

**Git:**  
Usada en la maquina local, funciona en la terminal o linea de comandos.

-   agregar .
-   cometer -soy " "
-   unir
-   extraer maestro de origen

**GitHub:** ![:octogato:](https://github.githubassets.com/images/icons/emoji/octocat.png ":octogato:")  
Para colaborar con otros, usar interfaz web o publicar proyectos.

-   Guarda proyectos
-   sus cambios
-   Cada una de sus versiones

## 2. ¿Por qué usar un sistema de control de versiones como Git?

Para solo guardar los cambios y no guardar todo el archivo de nuevo.

**Control de versiones:**

-   solo guarda cambios
-   Donde ocurrieron
-   Cuando ocurrieron
-   Sabe quien los hizo
-   Volver a ellos en el pasado

**Comandos para iniciar repo y enviar cambios**  
`git init`

-   Arranca el repositorio📂.git
-   Crea una carpeta / repositorio que es una Base de Datos donde se van a guardar los cambios o versiones de cualquier archivo.

`git add algo.txt`o`git add .`

-   Envía uno o todo los archivos a **_Staging_**
-   **_Staging_** zona previa antes de enviar todo al repositorio local.

`git commit -m "Mensaje de referencia v01"`

-   Agrega cambios de los archivos al repositorio local (DB del sistema de control de versiones).

**Comandos para ver cambios**  
`git status`

-   Muestra el estado del directorio de trabajo.
-   🔴o🟢

`git show`

-   Muestra todos los cambios históricos.

`git log algo.txt`

-   Muestra la historia entera de un archivo.

**Comandos para traer y enviar cambios a distancia**  
`git pull origin master`

-   Trae tus archivos de algún repositorio remoto.
-   `origin`nombre del repositorio remoto.
-   `master / main`nombre del repositorio local principal.

`git push origin master`

-   Llevar archivo al repositorio remoto para que lo vea todo el mundo.
-   `origin`nombre del repositorio remoto.
-   `master / main`nombre del repositorio local principal.

📌Solo admite archivos de _texto.md plano.txt_ o archivos que se pueden abrir en un editor de código.📋📎👩‍💻

📌Iconos/imágenes

-   [Flaticon - Iconos - Imgs](https://www.flaticon.com/)
-   [Archivo de iconos](http://www.iconarchive.com/)
-   [desdibujar](https://undraw.co/illustrations)
-   [Svgporn - Marcas](https://svgporn.com/)
-   [buscador de iconos](https://www.iconfinder.com/)

## 3. Instalando Git y GitBash en Windows

**Buscar en Google:**  
[Descargar Git](https://git-scm.com/downloads)

**instalacion**

-   Ejecutar como administrador
-   Siguiente (dos veces)✔✔
-   Git Bash aquí
-   Use una fuente TrueType en todas las ventanas de la consola
-   Compruebe diariamente si hay actualizaciones de Git para Windows
-   Siguiente (tres veces)✔✔✔
-   Deja que Git decida: Maestro
-   Git desde la línea de comandos y también desde software de terceros
-   Próximo✔
-   Usar OpenSSH incluido
-   Utilice la biblioteca Open SSL
-   Próximo✔
-   Verifique el estilo de Windows, confirme los finales de línea de estilo Unix
-   Próximo✔
-   Use MinTTY (el terminal predeterminado de MSYS2)
-   Predeterminado (avance rápido o fusión)
-   Administrador de credenciales de Git
-   Próximo✔
-   Habilitar el almacenamiento en caché del sistema de archivos
-   Habilitar enlaces simbólicos
-   Instalar

Una vez culminada la instalación, verificamos que git esta instalado:

-   Abrimos Git Bash
-   Ejecutamos el comando:`git --version`
-   Versión 17/10/2022: Git para Windows 2.38.0.windows.1 (64 bits)

Actualizar Git en Windows

-   `git update-git-for-windows`

📌Windows: Por defecto no trae una configuración para Git, por eso los pasos llegan a ser más extensos. 📌La configuración hecha en la instalación es la más recomendada para no tener inconvenientes, pero si se desea se pueden cambiar algunas cosas según el usuario.

🎲

## 4. Instalando Git en OSX

La instalación de GIT en Mac es un poco más sencilla. No debemos instalar GitBash porque Mac ya trae por defecto una consola de comandos (la puedes encontrar como “Terminal”). Tampoco debemos configurar OpenSSL porque viene listo por defecto.

OSX está basado en un Kernel de UNIX llamado BSD. Estos significan que hay algunas diferencias entre las consolas de Mac y Linux. Pero no vas a notar la diferencia a menos que funcione con acceso profundo a las interfaces de red o los archivos del sistema operativo. Ambas consolas funcionan muy parecido y comparten los comandos que vamos a ver durante el curso.

**Buscar en Google:**  
[Descargar Git](https://git-scm.com/downloads)

**instalacion**

-   abrir paquete
-   Caja Amarilla: Clic derecho - Abierto
-   Abierto
-   Continuar
-   Instalar
-   Contrasena
-   Mover a la papelera

🎲

## 5. Instalando Git en Linux

**Instalación en Consola**

-   `sudo apt-get update`
    -   Superusuario Hacer: Superusuario hacer🦸‍♀️🦸‍♂️
    -   apt: poderes de administrador / actitud
    -   Actualiza los paquetes instalados
-   `sudo apt-get upgrade`
    -   Actualiza los archivos viejos
-   `sudo apt-get install git`

**Verificar la instalacion**

-   `git --version`

**Actualizar git a su última versión**

-   `sudo add-apt-repository ppa:git-core/ppa`
-   `sudo apt update; sudo apt install git`
-   `git --version`

📌Es importante actualizar y mejorar los paquetes antes de cada instalación. Es una buena práctica.✌

🎲

## 6. Editores de código, archivos binarios y de texto plano

**Editores de código**

-   Átomo
-   Texto sublime
-   código de estudio visual

Son programas que permiten crear y modificar archivos de texto plano.

**Tipos de archivos y sus diferencias:**  
_**Archivos de Texto (.txt):**_ 📝  
Texto plano normal y sin nada especial. Se ve igual en un bloque de notas o en editores de texto avanzados.

_ **Archivos RTF (.rtf):** _📚  
Texto con diferentes tamaños, estilos y colores. Se distorsiona al abrirlos en editores de texto avanzados.

_**Archivos de Word (.docx):**_ 🖼🖍  
Podemos guardar imágenes y texto con diferentes tamaños, estilos y colores. Al ser código binario se distorsiona al abrirlo en un editor de código.

**Habilitar las Extensiones de Archivos:**

-   Abriendo cualquier carpeta
-   Vista
    -   Mostrar u ocultar
        -   Extensiones de nombre de archivo

## 7. Introduccion a la terminal y linea de comandos

**Comandos Usados ​​en la terminal**

-   `pwd`Imprimir directorio de trabajo
    
    -   Muestra la ruta de nuestra ubicación
-   `cd`Cambio de directorio
    
    -   `cd ..`Retroceder una carpeta
    -   `cd /algo/`Adelanta para entrar a la siguiente carpeta
    -   `cd ../../`Retroceder dos carpetas
-   `ls`Lista de archivos
    
    -   `ls -al`Muestra archivos ocultos y ordena en una lista
-   `clear`limpia la consola
    
-   `mkdir carpeta01`Hacer directorio / Crear carpetas
    
-   `touch vacio.txt`
    
    -   Crear archivos que no tengan nada por dentro
-   `cat vacio.txt`catenar / encadenar
    
    -   Muestra el contenido de un archivo
-   `history`
    
    -   Muestra el historial completo de todos los comandos que escribieron hasta ahora.
    -   `!72`
        -   Usando el comando anterior podemos invocar un comando usando su numero de orden.
-   `rm vacio.txt`Quitar / Retirar / Borrar archivos
    
    -   `rm -ri vacio.txt`Interactivo recursivo
    -   `rm --help`Muestra serie de explicacion de como funciona el comando

📌ventanas

-   La mayúscula y minúscula no importan
-   Puedes escribir todo pegado: cd..

📌Grifo de tecla

-   Autocompletas coincidencias existentes

🎲

## 8. Crea un repositorio de Git y haz tu primer commit

**Configurar git bash**  
Primero debemos decir quienes somos

-   `git config --list`
    -   Configuración por defecto de git
    -   Podemos ver que aun no esta nuestro nombre ni correo
-   `git config --global user.name "John Lennon"`
    -   Cambiar usuarios globales
-   `git config --global user.email "john.l@mail.com"`
    -   Cambiar correo electrónico

**Otros comandos de configuracion**

-   `git config`
    -   Lista de las funciones de este comando y sus configuraciones
-   `git config --list --show-origin`
    -   Ver donde se guardaron las configuraciones

**Crear repositorio / Primer commit**  
Para crear un repositorio debemos tener una carpeta especificando donde se hará el control de versiones.

**1. flujo normal**

-   `mkdir proyecto01`
-   `cd proyecto01`
-   `pwd` `/c/Users/OneUser/proyecto01`
-   `git init` 🔥
-   `ls -al`
    -   Ver carpetas ocultas (.git)

En este punto creas tus archivos y les agregas contenido para luego enviarlos al repositorio local como la primera versión o el primer avance de tu trabajo.

-   `code .`
    -   Abre VSC: Creas y guardas archivo.
-   `git status` 🔥
    -   Ver cual es el estado del proyecto (Untracked)
-   `git add algo.txt` 🔥
-   `git commit -m "Primer commit de este archivo"` 🔥

**2. Otro escenario**

-   `mkdir proyecto01`
-   `cd proyecto01`
-   `pwd` `/c/Users/OneUser/proyecto01`
-   `git init` 🔥
    -   Crear repositorio (directorio .git)
-   `ls -al`
    -   Ver carpetas ocultas (.git)
-   `code .`
    -   Abrir el código de Visual Studio
    -   Control + n: Crea un archivo nuevo - Escribe algo
    -   Crea un archivo algo.txt
    -   Control + s: Guardar cambios - Activar autoguardado
-   `git status` 🔴🔥
    -   Ver cual es el estado del proyecto (Untracked)
-   `git add algo.txt` 🔥
    -   Los cambios fueron enviados a _Staging_
-   `git status` 🟢🔥
-   `git rm algo.txt`
    -   En caso de que no quieras enviar los cambios al repositorio, puedes remover de _staging_ y retroceder hasta antes de `add .`y dejar el archivo _Untracked_
-   `git status` 🔴🔥
-   `git rm --cached algo.txt`
    -   Si con el comando `git rm`anterior no fue suficiente, puede quitar el archivo de la lista de archivos con cambios por enviar así git no lo tomará en cuenta.
-   `git status`
-   `git log algo.txt`

📌Diferencia entre `rm`con y sin `cached`:  
- `cached`significa que está en memoria ram y está sin guardar en la base de datos del repositorio y con este comando se le quita ese add.

📌Los comandos con un solo guion solo llevan letras y los comandos con doble guion son usados ​​en palabras.

-   `ls -al`
-   `git config --list`

Si quieres configurar un repositorio como local y agregar otro correo, debes [leer esto](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository#:~:text=Para%20crear%20un%20nuevo%20repositorio,tu%20directorio%20de%20trabajo%20actual.)

-   `git config --local user.email "email"`

🎲

## 9. Analizar cambios en los archivos de tu proyecto con Git

**Comandos para visualizar y comparar cambios** Para probar estos comandos usar un archivo que ya tiene varios cambios ( `git add .`y `git commit`).

-   `git show algo.txt`
    -   Muestra los cambios que han sufrido un archivo.
-   `git log algo.txt`
-   `git diff 3b58a9086121... a780a1c17e69...`
    -   Para usar este comando necesitas extraer los commits con el comando anterior git log.
    -   Sirve para ver las diferencias entre un cambio y otro.

![Cambios](https://camo.githubusercontent.com/857d5ec8cce43bad04f5cbfa8894767135e563e564fc663163c3f920e016f548/68747470733a2f2f692e706f7374696d672e63632f78317358444d58592f392d636f6d6d6974732e706e67)

📌Diferencias entre `git show`y`git log`

-   `show`Muestra uno o mas objetos (blobs, arboles, etiquetas y confirmaciones).
-   `log`Enumera confirmaciones (commits).

📌Si solo hacemos commit sin comentarios nos aparecerá un editor llamado Vim, para este caso necesitas saber lo siguiente:

-   Para escribir: Esc + i
-   Dejemos un comentario, esto es muy importante
-   Para salir: Esc + shift + zz

🎲

## 10. ¿Qué es la puesta en escena y los repositorios? Ciclo básico de trabajo en Git

Para iniciar un repositorio, o sea, activar el sistema de control de versiones de Git en tu proyecto, solo debes ejecutar el comando `git init`.

Este comando se encargará de dos cosas:

-   Primero, crear una **_carpeta .git_** , donde se guardará toda la base de datos con cambios atómicos de nuestro proyecto;
-   Segundo, crear un **_área_** que conocemos como **_Staging_** , que guardará temporalmente nuestros archivos (cuando ejecutemos el comando especial `git add .`) que luego nos permitirá, guardar estos cambios en el repositorio (con un comando especial llamado `git commit -am ""`).

**Ciclo de vida o estados de los archivos en Git:**

Cuando trabajamos con Git nuestros archivos pueden vivir y moverse entre **_4 diferentes estados_** (cuando trabajamos con repositorios remotos pueden ser más estados, pero lo estudiaremos más adelante):

-   **Archivos Tracked:** son los archivos que viven dentro de Git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos `git add`y `git commit`.
    
-   **Archivos Escenificados:** son archivos en **_Escenificados_** . Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando `git add`, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.
    
-   **Archivos Unstaged:** entiéndelos como archivos “Tracked pero Unstaged”. Son archivos que viven dentro de Git pero no han sido afectados por el comando git add ni mucho menos por git commit. _Git tiene un registro de estos archivos, pero está desactualizado_ , sus últimas versiones solo están guardadas en el disco duro.
    
-   **Archivos Untracked:** son archivos que NO viven dentro de Git, solo en el disco duro. _Nunca han sido afectados por git add, así que Git no tiene registros de su existencia._
    

📌Recuerda que hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: **_staged y untracked_** . Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de Staging (en realidad, todo sigue funcionando igual pero es un poco divertido).

**Comandos para mover archivos entre los estados de Git:**

-   `git status`nos permite ver el estado de todos nuestros archivos y carpetas.
    
-   `git add`nos ayuda a mover archivos del Untracked o Unstaged al estado **_Staged_** . Podemos usar `git add nombre-del-archivo-o-carpeta`para agregar archivos y carpetas individuales o `git add .`para mover todos los archivos de nuestro proyecto (tanto Untrackeds como unstageds).
    
-   `git reset HEAD`nos ayuda a sacar archivos del estado Staged para devolverlos a su estado anterior. Si los archivos vienen de Unstaged, vuelven allí. Y lo mismo se vendrían de Untracked.
    
-   `git commit`nos ayuda a mover archivos de Unstaged a Tracked. Esta es una ocasión especial, los archivos han sido guardados o actualizados en el repositorio. Git nos pedirá que dejemos un mensaje para recordar los cambios que hicimos y podemos usar el argumento -m para escribirlo ( `git commit -m "mensaje"`).
    
-   `git rm`este comando necesita alguno de los siguientes argumentos para poder ejecutarse correctamente:
    
    -   `git rm --cached`Mueve los archivos que le indiquemos al estado Untracked.
    -   `git rm --force`Elimina los archivos de Git y del disco duro. Git guarda el registro de la existencia de los archivos, por lo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

![Git](https://camo.githubusercontent.com/14a230f60af698d92b6a478d51a192e973891774999d47dfc8c92a6b822d99c7/68747470733a2f2f692e706f7374696d672e63632f4e3054586d6273442f31302d6369636c6f2d62617369636f2d64652d74726162616a6f2d656e2d6769742e706e67)

## 11. ¿Qué es un Branch (rama) y cómo funciona un Merge en Git?

Git es una base de datos muy precisa con todos los cambios y crecimiento de nuestro proyecto. Los `commits`son la única forma de tener un registro de los cambios. Pero las ramas amplifican mucho más el potencial de Git.

Todos los commits se aplican sobre una rama. Por defecto, siempre empezamos en la rama `master`(puedes cambiarle el nombre si no te gusta). Podemos crear nuevas ramas, a partir de esto, para crear flujos de trabajo independientes.

Crear una nueva rama se trata de **_copiar un commit_** (de cualquier rama), pasarlo a otro lado (a otra rama) y continuar el trabajo de una parte específica de nuestro proyecto sin afectar el flujo de trabajo principal (que continúa en la rama master o la rama principal).

**estandar en equipos de desarrollo**

-   `Branch master`Todo lo que está en la rama master va a producción.
-   `Branch development`Las nuevas características (características) y experimentos van en esta rama, para unirse a un maestro cuando estén definitivamente listas.
-   `Branch hotfix`Los issues (problemas) o errores se solucionan en esta rama, para unirse a un maestro tan pronto como sea posible.

📌Crear una nueva rama lo conocemos como `Checkout`. Unir dos ramas lo conocemos como `Merge`.

Podemos crear todas las ramas y commits que queramos. De hecho, podemos aprovechar el registro de cambios de Git para crear ramas, traer versiones viejas del código, arreglarlas y combinarlas de nuevo para mejorar el proyecto.

Solo ten en cuenta que combinar estas ramas (sí, hacer “merge”) puede generar conflictos. Algunos archivos pueden ser diferentes en ambas ramas. Git es muy inteligente y puede intentar unir estos cambios automáticamente, pero no siempre funciona. En algunos casos, somos nosotros los que debemos resolver estos conflictos “a mano”.

![Git](https://camo.githubusercontent.com/a40d8e7e4aca8ca4a5ddf9181f1396f361b8f94168204d2d3715baf2437efa71/68747470733a2f2f692e706f7374696d672e63632f70725233545a474c2f31312d6272616e63682d6d657267652e706e67)

## 12. Volver en el tiempo en nuestro repositorio usando reset y checkout

El comando `git checkout id-commit`nos permite **_viajar en el tiempo._** Podemos volver a cualquier versión anterior de un archivo específico o incluso del proyecto entero. Esta también es la forma de crear ramas y movernos entre ellas.

📌Para extraer commit debemos usar el comando`git log`

**Pago Git:**  
Opción 1

-   `git checkout 83d73c4a2eb79az10a40b1309a algo.txt`
    -   Volvemos a una versión anterior.
    -   Con la **_opción 2_** podemos volver al punto antes de este pago.
-   `git add .`
-   `git commit -am "mensaje"`
    -   Con esto el cambio hecho con checkout se vuelve permanente.

opción 2

-   `git checkout master algo.txt`
    -   Habiendo usado `git checkout` **_la opción 1_** , la opción 2 nos regresa a la versión más reciente registrada en el repositorio, a la última versión antes de haber hecho checkout.

También hay una forma de hacerlo un poco más “ruda”: usando el comando `git reset`. En este caso, no solo “volvemos en el tiempo”, sino que **_borramos los cambios que hicimos después de este compromiso_** .

Hay dos formas de usar`git reset:`

-   Con el argumento `--hard`, borrando toda la información que tengamos en el área de puesta en escena (y perdiendo todo para siempre).
-   O, un poco más seguro, con el argumento `--soft`, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.

**Restablecimiento de Git:**  
Opción 1

-   `git reset 83d73c4a2eb79az03b1b130574e9e706c99a --hard`
    -   Permite volver a una versión anterior de forma permanente.

opción 2

-   `git reset 83d73c4a2eb79az03b1b130574e9e706c99a --soft`
    -   Volvemos a una versión anterior pero lo que está en puesta en escena sigue ahí.

📌 `git log`

-   Muestra como si lo trabajado anteriormente hubiera desaparecido.
-   Ejecutar con cuidado.

📌Comando para ver las estadísticas del trabajo:`git log --stat`

-   Muestra los cambios específicos en los archivos existentes a partir del compromiso.↕para moverse yq para salir.

🎲

## 13. Reinicio de Git frente a Git rm

`Git reset`y `git rm`son comandos con utilidades muy diferentes, pero aún así se confunden muy fácilmente.

🔥 `git rm`  
Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. Esto quiere decir que si necesitamos recuperar el archivo solo debemos “viajar en el tiempo” y recuperar el último compromiso antes de borrar el archivo en cuestión.

Este comando no puede usarse así nada más. Debemos usar uno de los flags para indicarle a Git cómo eliminar los archivos que ya no necesitamos en la última versión del proyecto:

-   `git rm --cached`: Elimina los archivos del área de Staging y del next commit pero los mantiene en nuestro disco duro.
-   `git rm --force`: Elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

🔥 `git reset`  
Este comando nos ayuda a volver en el tiempo. Pero **_no como git checkout_** que nos deja ir, mirar, pasear y volver. Con `git reset`volvemos al pasado sin la posibilidad de volver al futuro. Borramos la historia y la debemos sobre escribir. No hay vuelta atrás.

Este comando **_es muy peligroso_** y debemos usar solo en caso de emergencia. Recuerda que debemos usar alguna de estas dos opciones:

-   `git reset --soft`: Borramos todo el historial y los registros de Git pero guardamos los cambios que tengamos en Staging, así podemos aplicar las últimas actualizaciones a un nuevo commit.
-   `git reset --hard`: Borra toda la información que tengamos en el área de puesta en escena (perdiendo todo para siempre). Toda la información de los commits y del área de staging se borra del historial.

¡Pero todavía falta algo!

-   `git reset HEAD`: Este es el comando para sacar archivos del área de Staging. No para borrarlos ni nada de eso, solo para que los últimos cambios de estos archivos no se envíen al último commit, a menos que cambiemos de opinión y los incluyamos de nuevo en staging con por supuesto `git add,`.

¿Por qué esto es importante?🤔

✨Imagina el siguiente caso:  
Hacemos cambios en los archivos de un proyecto para una nueva actualización. Todos los archivos con cambios se mueven al área de staging con el comando git add. Pero te das cuenta de que uno de esos archivos no está listo todavía. Actualizaste el archivo pero ese cambio no debe ir en el próximo compromiso por ahora.

¿Qué podemos hacer?😵

Bueno, todos los cambios están en el área de Staging, incluido el archivo con los cambios que no están listos. Esto significa que debemos sacar ese archivo de Staging para poder hacer commit de todos los demás.

💀¡Al usar `git rm`lo que haremos será eliminar este archivo completamente de git! Todavía tendremos el historial de cambios de este archivo, con la eliminación del archivo como su última actualización. Recuerda que en este caso no buscábamos eliminar un archivo, solo dejarlo como estaba y actualizarlo después, no en este commit.☠❌💀

😊En cambio, si usamos `git reset HEAD`, lo único que haremos será mover estos cambios de Staging a Unstaged. Seguiremos teniendo los últimos cambios del archivo, el repositorio conservará el archivo (no con sus últimos cambios pero sí con los últimos en los que hicimos commit) y no habremos perdido nada.😄😊

**Conclusión:** Lo mejor que puedes hacer para salvar tu puesto y evitar un incendio en tu trabajo es conocer muy bien la diferencia y los riesgos de todos los comandos de Git.🤩

🎲

## 14. Flujo de trabajo básico con un repositorio remoto

Por ahora, nuestro proyecto vive únicamente en nuestra computadora. Esto significa que no hay forma de que otros miembros del equipo trabajen en él.

Para solucionar esto están los servidores remotos: un nuevo estado que deben seguir nuestros archivos para conectar y trabajar con equipos de cualquier parte del mundo.

Pueden estar alojados en:

-   `GitHub`
-   `GitLab`
-   `BitBucket`
-   Otros

Estos servidores guardan el mismo repositorio que tienen en su computadora, además brindan una URL con la que todos podrán acceder a los archivos del proyecto para descargarlos, hacer cambios y volverlos a enviar al servidor remoto para que otras personas vean los cambios, comparen sus versiones y creo nuevas propuestas para el proyecto.

Esto significa que debes aprender algunos nuevos comandos:

-   `git clone url_del_servidor_remoto`: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.
    
-   `git push`: Luego de hacer `git add`y `git commit`debemos ejecutar este comando para mandar los cambios al servidor remoto.
    
-   `git fetch`: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto).
    
-   `git merge`: También usamos el comando git merge con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.
    
-   `git pull`: básicamente, `git fetch`y `git merge`al mismo tiempo.✨
    

**Otros Comando**  
Algunos comandos que pueden ayudar cuando colaboran con **_proyectos muy grandes_** de GitHub:

-   `git log --oneline`: Te muestra el id commit y el título del commit.
-   `git log --decorate`: Te muestra donde se encuentra el head point en el log.
-   `git log --stat`: Explica el número de líneas que se cambiaron probablemente.
-   `git log -p`: Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
-   `git shortlog`: Indica que commits ha realizado un usuario, mostrando el usuario y el titulo de sus commits.
-   `git log --graph --oneline --decorate`y
-   `git log --pretty=format"%cn hizo un commit %h el dia %cd"`: Muestra mensajes personalizados de los commits.
-   `git log -3`: Limitamos el número de compromisos.
-   `git log --after=“2018-1-2”`,
-   `git log --after=“today`” y
-   `git log --after=“2018-1-2” --before=“toda y”`: Confirma para localizar por fechas.
-   `git log --author=“Name Author”`: se compromete a realizar por autor que cumple exactamente con el nombre.
-   `git log --grep=“INVIE”`- Busca los commits que cumplan tal cual está escrito entre las comillas.
-   `git log --grep=“INVIE” –i`: Busca los compromisos que cumplen sin importar mayúsculas o minúsculas.
-   `git log – index.html`: Busca los compromisos en un archivo en específico.
-   `git log -S “Por contenido”`: Buscar los commits con el contenido dentro del archivo.
-   `git log > log.txt`: Guarda registros en un archivo txt.