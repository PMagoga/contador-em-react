import { useState } from "react";
import "./App.css";

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="titulo">Contador de Cliques</h1>

        <div className="display-contador">
          <p className="numero">{contador}</p>
          <p className="texto-cliques">
            {contador === 1 ? "clique" : "cliques"}
          </p>
        </div>

        <div className="botoes">
          <button onClick={incrementar} className="botao-principal">
            Clique Aqui!
          </button>

          <button onClick={resetar} className="botao-reset">
            Resetar
          </button>
        </div>
      </div>
    </div>
  );
}
