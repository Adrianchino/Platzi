import "./App.css";
import freeCodeCampLogo from "./Imgs/freecodecamp-logo.png";
import ListaDeTareas from "./Componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
        alt="Logo de freecodecamp"
        src={ freeCodeCampLogo } 
        className="freecodecamp-logo" />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
