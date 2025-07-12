# Material UI desde Cero

## 01. ¡Domina la creación de interfaces atractivas!

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

## 2. Instalación y configuraciones previas

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

## 03. Container y the "sx" prop (CSS fácil y rápido en tus componentes)

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

## 04: Typography

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

## 05. Box

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

## 06. Introducción a Theming

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

## 07. Button & Icons

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

## 08. Grid

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

## 9. MiniPráctica Card Product

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

## 10. Card component

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

