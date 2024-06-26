import React from 'react';
import "./App.css";
import Boton from "./Componentes/Boton";
import Contador from "./Componentes/Contador";
import freeCodeCampLogo from "./Imgs/freecodecamp-logo.png";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick(){
    this.setState(({ numClics }) => ({ numClics: numClics + 1}));
  }

  reiniciarContador(){
    this.setState({ numClics: 0});
  }

  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="logo de freeCodeCamp" />
        </div>
  
        <div className="contenedor-principal">
          <Contador
            numClics={this.state.numClics}
          />
          <Boton
            texto="Click"
            esBotonDeClick={true}
            manejarClick={this.manejarClick}
          />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}



export default App;
