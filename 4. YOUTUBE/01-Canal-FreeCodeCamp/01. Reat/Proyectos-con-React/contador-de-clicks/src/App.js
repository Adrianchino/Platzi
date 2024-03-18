import "./App.css";
import Boton from "./Componentes/Boton";
import Contador from "./Componentes/Contador";
import freeCodeCampLogo from "./Imgs/freecodecamp-logo.png";
import { useState } from "react";

function App() {

  const [numClics, setNumclics ] =useState(0) ;

  const manejarClick = () => {
    setNumclics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumclics(0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="logo de freeCodeCamp" />
      </div>

      <div className="contenedor-principal">
        <Contador
          numClics={numClics}
        />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
