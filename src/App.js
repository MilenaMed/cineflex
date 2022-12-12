import Cabeçario from "./componentes/Cabeçario";
import PagInicial from "./componentes/Rota";
import Sessoes from "./componentes/Sessoes";
import Assentos from "./componentes/Assentos";
import Sucesso from "./componentes/Sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Cabeçario />
        <Routes>
          <Route path="/" element={<PagInicial/>}/>
          <Route path="/sessoes/:FilmeId" element={<Sessoes/>} />
          <Route path="/assentos/:SessaoId" element={<Assentos/>} />
          <Route path="/sucesso" element={<Sucesso/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
