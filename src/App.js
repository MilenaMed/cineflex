import Cabeçario from "./componentes/Cabeçario";
import Rota from "./componentes/Rota";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let imageid = 2;

  return (
    <>
      <BrowserRouter>
        <Cabeçario />
      <Routes>
        <Route path="/" element={<Rota/>} />
        <Route path={`/sessoes/${imageid}`} />
        <Route path="/assentos/:idSessao" />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
