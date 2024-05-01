import React from "react";
import userCounter from "../Hooks/userCounter";

const ContadorComponet = () => {
  const { contador, incrementar, decrementar, resetear } = userCounter(0);

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button className="btn btn-primary" onClick={() => incrementar(1)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => resetear()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrementar(1)}> {/* Para que se cumpla la funcion del negativo al lado del 1 agregamos , false. */} 
        -1
      </button>
    </>
  );
};

export default ContadorComponet;
