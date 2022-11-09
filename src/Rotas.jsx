import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Register from './Pages/Register';
import Admin from './Pages/Admin';
function Rotas() {
  return (
    // Lista de rotas
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={ <Register /> } />
            <Route path="/admin" element={ <Admin /> } />
        </Routes>
    </BrowserRouter>
  )
}
export default Rotas;
