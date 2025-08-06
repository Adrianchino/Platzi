# Material UI desde Cero
## 00 ¡Domina la creación de interfaces atractivas!

### Introducción

[Material UI es una biblioteca de componentes React](https://m2.material.io) de código abierto que implementa Material Design de Google .

Incluye muchos componentes ya listos para usarse en producción y permite personalizarlos fácilmente para crear tu propio estilo de diseño.

>Material UI es compatible con Material Design 2. Puedes seguir [este problema de GitHub](https://github.com/mui/material-ui/issues/29345 "este problema de GitHub") para futuras actualizaciones relacionadas con el diseño.

### Ventajas de Material UI

- 🚀 Envíos más rápidos: Más de 2500 personas han contribuido, así que puedes enfocarte en tu lógica y no en crear componentes desde cero.

- 🎨 Diseño atractivo por defecto: Sigue los principios de Material Design, pero también ofrece opciones mejoradas cuando es necesario.

- 🛠️ Fácil personalización: Tiene muchas funciones para adaptar los componentes a tu estilo.

- 🤝 Colaboración fluida: Diseñado para que desarrolladores y diseñadores trabajen juntos fácilmente, incluso si no son expertos en UI.

- 🌍 Amplio respaldo comunitario: Usado por miles de organizaciones y con soporte continuo gracias a su gran comunidad desde 2014.

### Material UI frente a MUI Base

| Material UI  |  MUI Base |
| ------------ | ------------ |
|  Incluye componentes listos para usar con estilos predeterminados y está optimizado para funcionar con librerías como Emotion. Es una solución completa para construir interfaces con diseño incorporado. |  En cambio, ofrece los mismos componentes pero sin estilos, funcionando como una versión "esquelética" o sin cabeza. Es la base sobre la que se construirá Material UI en el futuro, usando sus componentes y hooks como estructura principal.  |

## 01. Instalación y configuraciones previas

### Instalación 

Instale Material UI, el marco de interfaz de usuario React más popular del mundo.

### Instalación predeterminada

Ejecute uno de los siguientes comandos para agregar Material UI a su proyecto:

|  npm |
| ------------ | 
|  `npm install @mui/material @emotion/react @emotion/styled` |

|  pnpm |
| ------------ | 
|  `pnpm add @mui/material @emotion/react @emotion/styled` |

|  yarn |
| ------------ | 
|  `yarn add @mui/material @emotion/react @emotion/styled` |

#### Dependencias entre pares

>*Tenga en cuenta que react y react-dom son dependencias de pares, lo que significa que debe asegurarse de que estén instalados antes de instalar Material UI.*

```javascript
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
  "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
},
```

### Con componentes con estilo

Material UI usa Emotion como motor de estilo predeterminado. Si prefiere usar componentes con estilo , ejecute uno de los siguientes comandos:

|  npm |
| ------------ | 
|  `npm install @mui/material @mui/styled-engine-sc styled-components` |

|  pnpm |
| ------------ | 
|  `pnpm add @mui/material @mui/styled-engine-sc styled-components` |

|  yarn |
| ------------ | 
|  `yarn add @mui/material @mui/styled-engine-sc styled-components` |

> A finales de 2021, styled-components no es compatible con proyectos de Material UI renderizados en servidor. Esto se debe a que babel-plugin-styled-componentsno puede funcionar con la styled()utilidad dentro de @muilos paquetes. [Consulta este problema de GitHub](https://github.com/mui/material-ui/issues/29742 "Consulta este problema de GitHub") para obtener más información.

Recomendamos encarecidamente el uso de Emotion para proyectos SSR.

### Roboto font

Material UI usa la fuente Roboto por defecto. Añádela a tu proyecto a través de Fontsource o con la CDN de Google Fonts.

|  npm |
| ------------ | 
|  `npm install @fontsource/roboto` |

|  pnpm |
| ------------ | 
|  `pnpm add @fontsource/roboto` |

|  yarn |
| ------------ | 
|  `yarn add @fontsource/roboto` |

Luego puedes importarlo en tu punto de entrada de la siguiente manera:

```javascript 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

> ❕ Fontsource se puede configurar para cargar subconjuntos, grosores y estilos específicos. La configuración tipográfica predeterminada de Material UI solo se basa en los grosores de fuente 300, 400, 500 y 700.

### Fuentes web de Google

Para instalar Roboto a través del CDN de Google Web Fonts, agregue el siguiente código dentro de `<head />`la etiqueta de su proyecto:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

### Iconos

Para usar el [componente de fuente Icono](https://mui.com/material-ui/icons/#icon-font-icons) o los iconos prediseñados de Material Icons (como los que se encuentran en las [demostraciones de iconos](https://mui.com/material-ui/icons/) ), primero debe instalar la fuente [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) . Puede hacerlo con npm o con la CDN de Google Web Fonts.

|  npm |
| ------------ | 
|  `npm install @mui/icons-material` |

|  pnpm |
| ------------ | 
|  `pnpm add @mui/icons-material` |

|  yarn |
| ------------ | 
|  `yarn add @mui/icons-material` |

### Fuentes web de Google

Para instalar la fuente Material Icons en su proyecto mediante el CDN de Google Web Fonts, agregue el siguiente fragmento de código dentro de `<head />`la etiqueta de su proyecto:

Para usar el `Icon`componente de fuente, primero debe agregar la fuente [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) . Aquí tiene [algunas instrucciones](https://mui.com/material-ui/icons/#icon-font-icons) sobre cómo hacerlo. Por ejemplo, a través de Google Web Fonts:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

#### Para nuestro Proyecto hacemos lo siguiente: 

```bash
npm create vite@latest . 
npm i
```

Instalación de Material UI:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material

npm install @mui/lab #LoadingButton etc
```

Material UI utiliza [Emotion](https://emotion.sh/docs/introduction) como su motor de estilos predeterminado. Emotion es una biblioteca de estilos CSS-in-JS que se puede utilizar con React, React Native, Vue, Angular, Ember, Svelte, Preact, Inferno, etc.

> importamos en la carpeta  `src/app.jsx`

```javascript
import { Button } from "@mui/material"; 👈🏼


export const App = () => {
  return (
    <>
      <h1>App</h1>
      <Button variant="contained">Mi primer Boton</Button> 👈🏼
      
    </>
  );
};

```

##### CssBaseline

- El componente **CssBaseline** de Material UI es una herramienta opcional que ayuda a estandarizar el diseño visual de una aplicación web. Su principal función es corregir las diferencias de estilo que pueden surgir entre distintos navegadores y dispositivos, ofreciendo una base más coherente que soluciones como _normalize.css_.
- Este componente aplica reglas CSS globales que ajustan propiedades como márgenes, paddings y tipografía. Al hacerlo, garantiza una apariencia uniforme en todos los componentes de la aplicación, facilitando así un diseño más limpio y consistente desde el inicio del desarrollo.

> importamos en la carpeta `src/main.jsx`

```javascript

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from "@mui/material"; 👈🏼
import './index.css'
import { App } from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline /> 👈🏼
    <App/>
  </StrictMode>,
)

```

## 02. Container y the "sx" prop (CSS fácil y rápido en tus componentes)

### Container

- ####  [Container](https://mui.com/material-ui/react-container/)

```js
import { Container } from "@mui/material"; 👈🏼

<Container>  👈🏼
  <h1>Material UI</h1>
  <Button variant="contained">mi primer componente</Button>
</Container> 👈🏼
```

> **maxWidth:** Determina el ancho máximo del contenedor. El ancho del contenedor crece con el tamaño de la pantalla. Establézcalo en falso para deshabilitar maxWidth.

[The sx prop](https://mui.com/system/getting-started/the-sx-prop/): es un atajo para definir ***estilos personalizados*** que tienen acceso al tema.

```js 
import { Button, Container } from "@mui/material"  <-------
export const App = () => {
  return (
    <Container  <------
      sx={{
        border: 3,
        boxShadow: 2,
        pb: 2
      }}
    >
      <h1>App</h1>
      <Button variant="contained">Mi primer Boton</Button>
      
    </Container>
  );
};
```

## 03: Typography

- #### [typography](https://mui.com/material-ui/react-typography/)

Recordar que instalamos: `npm install @fontsource/roboto` y en nuestro main.jsx importamos:

```js
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
```

Ejemplo:

```js
<Typography variant="h1">Soy un h1</Typography>
<Typography variant="h2">Soy un h2</Typography>
<Typography variant="h3">Soy un h3</Typography>
```

- #### Cambiar el elemento semántico

 La variante está asociada con un elemento semántico HTML predeterminado. Puede cambiar el elemento semántico predeterminado utilizando el `component` prop.

```js
<Typography
  variant="h1"
  component="h2"
>
  Soy un h1
</Typography>
```

- #### Accesorios del sistema

Este componente es compatible con todos [system props](https://mui.com/system/properties/), por ejemplo podemos aplicar un margin top:

```js
<Typography
  variant="h1"
  component="h2"
  mb={2}
  color="primary"
  align="center"
  boxShadow={2}
  pb={2}
>
  Soy un h1
</Typography>
```

##### Ejemplo del código

```js
import { Button, Container, Typography } from "@mui/material";  <---------
export const App = () => {
  return (
    <Container
      sx={{
        border: 3,
        boxShadow: 2,
        pb: 2,
      }}
    >
      <h1>App</h1>
      <Typography variant="h1">Titulo 1</Typography>  <----------
      <Typography variant="h1">Titulo 2</Typography>  <----------
      <Typography                                     <----------
        variant="body1" 
        textAlign={"center"}                          <----------
        mt={20}
      >
        Titulo 3
      </Typography>
      <Button variant="contained">Mi primer Boton</Button>
    </Container>
  );
};
```

## 04. Box

- El componente Box sirve como un componente contenedor para la mayoría de las necesidades de la utilidad CSS.
- [box](https://mui.com/material-ui/react-box/)
- The sx prop: es un atajo para definir estilos personalizados que tienen acceso al tema.
- [properties](https://mui.com/system/properties/)
- [example](https://mui.com/system/palette/)

```js
<Box
  sx={{
    border: 2,
    borderColor: "peru",
    p: 2,
    bgcolor: "#111",
    color: "white",
  }}
>
  <Typography align="center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe quas
    laudantium, enim praesentium maiores beatae impedit vero dolorum
    dignissimos, assumenda ipsam? Similique, mollitia commodi ducimus aliquid
    voluptate molestias laborum!
  </Typography>
</Box>
```

#### Ejemplo del código: 

```js
import { Box, Button, Container } from "@mui/material";  <----------
export const App = () => {
  return (
    <Container>
      <h1>App</h1>
      <Box                  <-------------
        sx={{
          border: 2,
          p: 5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
          mb: 1
        }}
      >
        MUI es muy facil de usar 
      </Box>
      <Button variant="contained">Mi primer Boton</Button>
    </Container>
  );
};
```

## 05. Introducción a Theming

Vamos a cambiar la personalización de nuestro tema por defecto.

- Este link nos da a saber como se estructura o que cosas mas se podria añadir **[theme-provider](https://mui.com/material-ui/customization/theming/#theme-provider)**

- En este link tenemos podemos ver temas ya resueltos gracias a la comunidad, podríamos cambiar cualquier color **[mui-theme-creator](https://zenoo.github.io/mui-theme-creator/) **

```js
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";   <---------

const theme = createTheme({   <--------
  palette: {
    primary: {
      main: "#000e35",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>    <-----------
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### Ejemplo del código

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";  <--------
import './index.css'
import { App } from './App';

const theme = createTheme({  <---------
   palette: {
    primary: {
      main: '#5126',
    },
    secondary: {
      main: '#4e2947',
    },
  },
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
      <ThemeProvider theme={theme}>   <------------
        <App/>
      </ThemeProvider>
  </StrictMode>,
)

```

## 06. Button & Icons

Compartiremos unos links para mas información y así echen un vistazo a la documentación  

- [Button & Icons](https://mui.com/material-ui/react-button/#buttons-with-icons-and-label)
- `npm install @mui/icons-material`
- [listado de iconos](https://mui.com/material-ui/material-icons/)

```js
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";  <-------
import AndroidIcon from "@mui/icons-material/Android";

export default function App() {
  return (
    <Container>
      <Button
        variant="contained"
        color="info"
        startIcon={<AirplanemodeActiveIcon />}
      >
        Botón personalizado
      </Button>

      <Button
        variant="contained"
        color="secondary"
        endIcon={<AndroidIcon />}
      >
        Botón 2
      </Button>
    </Container>
  );
}
```

### Ejemplo del código 

```js
import { Button, Container, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive"; <-------
import AndroidIcon from "@mui/icons-material/Android";  <------------
export const App = () => {
  return (
    <Container>
      <h1>App</h1>
      <Typography variant="h3" color="primary"> H3 titulo</Typography>
      <Button variant="contained" color="error" endIcon={<AndroidIcon />}>Mi primer Boton</Button>  <-------------
      <Button   <-------------
        variant="contained"
        color="secondary"
        startIcon={<AirplanemodeActiveIcon />}
      >
        Botón 2
      </Button>
    </Container>
  );
};

```

## 07. Grid

Se basa en 12 columnas al igual que Bootstrap. De esta manera podemos crear un layout responsive a través de Flexbox.

- En este link podemos ver mas acerca de [grid](https://mui.com/material-ui/react-grid/)

#### Ejemplo:

```js
import Grid from "@mui/material/Grid";   <-------
import Container from "@mui/material/Container";  

export default function App() {
  return (
    <Container>
      <Grid           <-----------
        container
        spacing={2}
      >
        <Grid          <------------
          item
          xs={12}
          sm={6}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
```  

## 08 MiniPráctica Card Product

#### Documentación para practicar mas en los estilos de la libreria MUI

- [flexbox mui](https://mui.com/system/flexbox/)
- [paper mui](https://mui.com/material-ui/react-paper/)
- [styled mui](https://mui.com/system/styled/)
- [object-fit css](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [background-size css](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

**Paper** es un componente de Material-UI que actúa como un contenedor con efecto elevado y sombreado, ideal para resaltar contenido en una interfaz. Su diseño versátil permite usarlo en tarjetas, diálogos, menús u otros elementos que requieran jerarquía visual. Además, su apariencia puede personalizarse fácilmente mediante las propiedades de Material-UI o estilos CSS, adaptándose a distintas necesidades de diseño.

Este componente también admite anidamiento, lo que facilita la creación de layouts complejos al combinar múltiples capas de Paper. Su simplicidad y flexibilidad lo convierten en una herramienta fundamental para organizar contenido de manera visualmente atractiva y coherente dentro de aplicaciones modernas.

#### Ejemplo de uso:

> styled()
> `styled()` es una función en Material-UI que permite crear componentes personalizados con estilos.
> Es una forma de agregar estilos a componentes personalizados con una sintaxis similar a los componentes CSS.
> La función `styled()` se utiliza en conjunto con el paquete `@emotion/styled`, que proporciona una forma sencilla de aplicar estilos CSS en JavaScript.

```js 
import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Product() {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://via.placeholder.com/200"
        alt="random"
      />
      <Box sx={{ flexGrow: 1 }}>
        <h2>Product Name</h2>
        <p>Product Description</p>
        <Button variant="contained">Add cart</Button>
      </Box>
      <Box
        component="p"
        sx={{ mr: 2 }}
      >
        $19.99
      </Box>
    </Paper>
  );
}
``` 

## 09. Card component

#### Documentación para practicar mas en los estilos de la libreria MUI

- [card mui](https://mui.com/material-ui/react-card/)
- [inspiration examples](https://mui-treasury.com/components/card/)

#### Ejemplo del Codigo:

```js
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function MyCard() {
  return (
    <Card          <----------
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>   <---------
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="Card Image"
        />
        <CardContent>   <----------
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            deserunt optio exercitationem, fugit enim saepe iusto magnam ipsam
            est cumque hic deleniti sequi neque soluta quas! Accusamus voluptate
            alias optio.
          </p>
        </CardContent>
      </CardActionArea>

      <CardActions>  <----------
        <Button variant="contained">Add</Button>
        <Button>Remove</Button>
      </CardActions>
    </Card>
  );
}
```


## 10. Navbar responsive (Parte #01) List component

#### Documentación para practicar mas en los estilos de la libreria MUI

- [list mui](https://mui.com/material-ui/react-list/)

#### aria-label:

- El atributo aria-label es un atributo ARIA (Accessible Rich Internet Applications) que proporciona una descripción textual para un elemento.

- En este caso, el valor "main mailbox folders" proporciona una descripción de la sección de navegación que contiene enlaces a las carpetas principales de correo. Esto puede ser útil para los usuarios que utilizan lectores de pantalla o tecnologías de asistencia para mejorar la accesibilidad.

#### NavListDrawer.jsx: 

```js
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 250, bgcolor: "lightsalmon" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Draft" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary trash spam">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#trash"
            >
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#spam"
            >
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
```

#### Otra forma mas simplificada:

```js
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const mainList = [
  {
    text: "Inbox",
    icon: <InboxIcon />,
    href: "#inbox",
  },
  {
    text: "Drafts",
    icon: <DraftsIcon />,
    href: "#drafts",
  },
];

const secondaryList = [
  {
    text: "Trash",
    href: "#trash",
  },
  {
    text: "Spam",
    href: "#spam",
  },
];

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 250, bgcolor: "lightsalmon" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {mainList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
            >
              <ListItemButton
                href={item.href}
                component="a"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary trash spam">
        <List>
          {secondaryList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
            >
              <ListItemButton
                component="a"
                href={item.href}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
``` 


## 11. Navbar responsive (Parte #02) Drawer component

#### Documentación para practicar mas en los estilos de la libreria MUI

- [drawer mui](https://mui.com/material-ui/react-drawer/)

> **==role="presentation"==:**
> 
> **`role="presentation"`** es un atributo en HTML que indica que un elemento es solo decorativo, es decir, no tiene un significado importante ni función específica para los usuarios.
> 
> En **Material-UI**, se usa este atributo para señalar que un elemento solo sirve para mostrar algo visualmente, y que no debe ser interpretado como un botón, enlace u otro componente interactivo. Esto mejora la accesibilidad, ya que evita confusiones para tecnologías como lectores de pantalla.

#### App.jsx :

```js
import { Container, Button, Drawer } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./components/NavListDrawer";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ display: "grid", gap: 4 }}>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Open Drawer
      </Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavListDrawer onClick={() => setOpen(false)} />
      </Drawer>
    </Container>
  );
}
```

#### NavListDrawer.jsx :

```js
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 250, bgcolor: "lightsalmon" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Draft" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary trash spam">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#trash"
            >
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#spam"
            >
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
```

## 12. Navbar responsive (Parte #03) AppBar component

#### Documentación para practicar mas en los estilos de la libreria MUI

- [app-bar](https://mui.com/material-ui/react-app-bar/)
- [material-icons](https://mui.com/material-ui/material-icons/)

 **AppBar:** El atributo `position` en `AppBar` se utiliza para especificar la posición del AppBar. El valor **"static"** indica que la barra de aplicaciones se mantendrá en su posición original en la página, sin flotar o estar fijada en la parte superior de la página. Esto significa que la barra de aplicaciones no se moverá mientras se desplaza por la página.

Los otros valores posibles para position son **"fixed"** y **"sticky"**, que fijan la barra de aplicaciones en la parte superior de la página mientras se desplaza por ella.

Toolbar: proporciona un área de contenido para elementos como títulos, botones, menús, formularios y otros elementos. Además tiene configurado un `display: flex`.

> **IconButton:** El atributo `edge` en `IconButton` se utiliza para especificar la ubicación de un botón con icono en un AppBar. En este caso se ubicará en la esquina superior izquierda.

#### Ejemplo del codigo:

```js
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          News
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
```

#### Ejemplo con Responsive para el Nav:

```js
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";
import { AppRegistration, Home, Login, Menu } from "@mui/icons-material";

const navLinks = [   <------- 
  {
    title: "Home",
    path: "#",
    icon: <Home />,
  },
  {
    title: "Login",
    path: "#login",
    icon: <Login />,
  },
  {
    title: "Register",
    path: "#register",
    icon: <AppRegistration />,
  },
];

export const Nabvar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{display: {sx: 'flex', sm: 'none'}}}   <----------
            edge="start"
          >
            <Menu />
          </IconButton>
          <Typography variant="h7" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box sx={{ display: {xs: "none", sm:"block"}}}>  <----------
            {navLinks.map((item) => (     <---------
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{display: {sx: 'flex', sm: 'none'}}}>      <----------
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
``` 

#### Ejemplo de NavListDrawer:

```js
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const NavListDrawer = ({navLinks}) => {
  return (
    <Box
      sx={{
        width: 280,
        maxWidth: 340,
      }}
    >
      <nav>
        <List>
          {navLinks.map((item) => (      <---------
            <ListItem disablePadding key={item.title}>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

```

## 13. AppBar + React Router v.6 en Material UI (Navbar responsive)

#### Documentación para practicar mas en los estilos de la libreria MUI

- [Código final github](https://github.com/bluuweb/curso-mui-materil-ui-2023-code/tree/01-router)
- [reactrouter](https://reactrouter.com/en/main)

### Instalacion

|`npm install react-router-dom@6`|   
| --- |

### BrowserRouter

BrowserRouter es un componente que se utiliza en React para permitir la navegación por una aplicación web utilizando la [API de Historial HTML5]. Cuando se utiliza BrowserRouter, se establece una correspondencia entre las rutas definidas en la aplicación y las URL que se utilizan en el navegador.

#### main.jsx

```js
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
```

### Routes & Route

El componente `Routes` es el encargado de definir y organizar todas las rutas que puede manejar una aplicación. Dentro de él, se estructuran tanto las rutas principales como las secundarias, permitiendo controlar qué contenido se muestra según la URL. Es el contenedor general que agrupa todas las rutas mediante múltiples instancias del componente `Route`.

Por su parte, el componente `Route` define una ruta específica. Utiliza la propiedad `path` para indicar la URL correspondiente y la propiedad `element` para determinar qué componente se renderizará al acceder a esa ruta. De este modo, cada `Route` asocia una dirección específica con un componente que se mostrará en la interfaz.

#### App.jsx

```js
import { Route, Routes } from "react-router-dom";

<Routes>
  <Route
    path="/"
    element={<Home />}
  />
  <Route
    path="/login"
    element={<Login />}
  />
  <Route
    path="/register"
    element={<Register />}
  />
</Routes>
```

### NavLink

El componente `NavLink` es un componente proporcionado por la librería "react-router-dom" que se utiliza para crear enlaces de navegación en una aplicación de React.

#### Navbar.jsx

```js
import { NavLink } from "react-router-dom";

// navegationLinks.map
<Button
  color="inherit"
  key={item.title}
  component={NavLink}
  to={item.path}
>
  {item.title}
</Button>

// Drawer
<NavListDrawer
  navegationLinks={navegationLinks}
  component={NavLink}
  setOpen={setOpen}
/>
```

#### NavListDrawer.jsx

```js
<ListItemButton
  component={component}
  to={item.path}
  onClick={() => setOpen(false)}
>
```

## 14. Crear alertas personalizadas con MUI (Alert, Snackbars y Notistack)

### Alert

- [alert mui](https://mui.com/material-ui/react-alert/)

```js
<Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>
```

#### Separación con grid

```js
<Box sx={{ display: "grid", gap: "1rem" }}>
  <Alert severity="error">Esta es una alerta</Alert>
  <Alert severity="warning">This is a warning alert — check it out!</Alert>
  <Alert severity="info">This is an info alert — check it out!</Alert>
  <Alert severity="success">This is a success alert — check it out!</Alert>
</Box>
```

#### Con título

```js
<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  Esta es una alerta
</Alert>
```

#### Actions

```js
import { Alert, Button, Collapse } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Alert
          severity="warning"
          action={<Button color="inherit">Cerrar</Button>}
        >
          This is a warning alert — check it out!
        </Alert>
        <Collapse in={open}>
          <Alert
            severity="info"
            onClose={() => {
              setOpen(false);
            }}
          >
            This is an info alert — check it out!
          </Alert>
        </Collapse>
        <Alert
          severity="warning"
          action={<Button color="inherit">Cerrar</Button>}
        >
          This is a warning alert — check it out!
        </Alert>
      </Box>
    </>
  );
}
```

#### Dos botones

```js
<Alert
  severity="warning"
  action={
    <>
      <Button color="primary">Update</Button>
      <Button color="error">Delete</Button>
    </>
  }
>
  This is a warning alert — check it out!
</Alert>
```

[Icon](https://mui.com/material-ui/material-icons/)

```js
import { Alert } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Alert
        severity="warning"
        icon={<AutorenewIcon fontSize="inherit" />}
      >
        This is a warning alert — check it out!
      </Alert>
    </>
  );
}
```

#### Variante: outlined & filled

```js
<Alert
  severity="warning"
  variant="outlined"
>
  This is a warning alert — check it out!
</Alert>z
```

### Snackbars

- [Snackbar MUI](https://mui.com/material-ui/react-snackbar/)

```js
import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>

      <Button
        onClick={() => setOpen(true)}
        variant="contained"
      >
        Open
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity="warning"
          variant="filled"
        >
          This is a warning alert — check it out!
        </Alert>
      </Snackbar>
    </>
  );
}
```

### notistack

- [notistack](https://github.com/iamhosseindhv/notistack)
- [config notistack](https://notistack.com/features/basic)

```
npm i notistack
```

```js
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
```

En el componente donde se quiere usar:

```js
import { useSnackbar } from "notistack";
```

```js
const { enqueueSnackbar } = useSnackbar();

const handleClick = () => {
  enqueueSnackbar("Product added to cart", {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};

// anchorOrigin:
// Type: { horizontal: left | center | right, vertical: top | bottom }
// Default: { horizontal: left, vertical: bottom }

// variant:
// Type: default | error | success | warning | info
// Default: default
```

```js
<Button
  variant="contained"
  onClick={handleClick}
>
  Add cart
</Button>
```

### mui/lab

- [Loading Button mui](https://mui.com/material-ui/react-button/#experimental-api)
- [about-the-lab](https://mui.com/material-ui/about-the-lab/)

```js
npm install @mui/lab
```

```js
import LoadingButton from "@mui/lab/LoadingButton";
```

```js
const { enqueueSnackbar } = useSnackbar();
const [loading, setLoading] = useState(false);

const handleClick = () => {
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    enqueueSnackbar("Product added to cart", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  }, 2000);
};
```

```js
<LoadingButton
  variant="contained"
  onClick={handleClick}
  loading={loading}
>
  Add cart
</LoadingButton>
```

## 15. Text Field y Validación de Formulario

### Text Field

- [Text Field](https://mui.com/material-ui/react-text-field/)

```js
<TextField
  id="outlined-basic"
  label="Outlined"
  variant="outlined"
/>
```

Formulario:

```js
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <>
      <h1>Register</h1>
      <Box
        component="form"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <TextField
          label="Email"
          variant="outlined"
          id="email"
          type="email"
          fullWidth
          required
          error={error.error}
          helperText={error.message}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
```

## 16. Práctica Weather App

### Links

- [weatherapi.com](https://www.weatherapi.com/)
- [variables de entorno en Vite](https://vitejs.dev/guide/env-and-mode.html)

### Install

```js
npm create vite@latest .
npm i
```

```js
npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material @mui/lab notistack
```

#### main.jsx

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
```

### .env.local

```js
VITE_API_KEY=YOUR_API_KEY
```

```js
console.log(import.meta.env.VITE_API_KEY);
```

### API

- [query](https://www.weatherapi.com/docs/#intro-request)

```js
https://api.weatherapi.com/v1/current.json?key=tuApiKey&lang=es&q=london
```

```js
const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;
```

### Code

App.jsx

```js
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;

export default function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }

      console.log(data);

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      console.log(error);
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ mt: 2 }}
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
      >
        Weather App
      </Typography>
      <Box
        sx={{ display: "grid", gap: 2 }}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Buscando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      {weather.city && (
        <Box
          sx={{
            mt: 2,
            display: "grid",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
          >
            {weather.city}, {weather.country}
          </Typography>
          <Box
            component="img"
            alt={weather.conditionText}
            src={weather.icon}
            sx={{ margin: "0 auto" }}
          />
          <Typography
            variant="h5"
            component="h3"
          >
            {weather.temperature} °C
          </Typography>
          <Typography
            variant="h6"
            component="h4"
          >
            {weather.conditionText}
          </Typography>
        </Box>
      )}

      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
      >
        Powered by:{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
}
```

⭐ Apoya el canal ⭐

Si quieres demostrar todo tu amor 😊, puedes comprar el curso en 👉🏽 [Udemy: React + Firebase by bluuweb](https://bit.ly/3JCSsht).

## 17. 💀 Skeleton

- [react-skeleton mui](https://mui.com/material-ui/react-skeleton/)
- [código tutorial](https://github.com/bluuweb/simple-skeleton-mui-react-rick-and-morty)


---

Agradecer a BluuWeb por compartir un curso y dejarnos una buena enseñanza con el tema de Material MUI. Visiten su [canal](https://www.youtube.com/@bluuweb)  y el [curso](https://www.youtube.com/playlist?list=PLPl81lqbj-4J2xx_YAb97dpCG1rxl2wv-) que nos ha brindado