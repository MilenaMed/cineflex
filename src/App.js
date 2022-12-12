import Cabeçario from "./componentes/Cabeçario";
import PagInicial from "./componentes/Rota";
import Sessoes from "./componentes/Sessoes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Cabeçario />
        <Routes>
          <Route path="/" element={<PagInicial/>}/>
          <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
