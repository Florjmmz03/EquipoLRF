import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactanos from './Contacto';
import NotFound from './NotFound';
import Tintart from './Tintart';
import Login from './InicioSesion';
import Registro from './Registro';
import Carrito from './Carrito';
import Productos from './Productos';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tintart/>}/>
        <Route path="Login" element={<Login/>} />
        <Route path="Registro" element={<Registro/>} />
        <Route path="Carrito" element={<Carrito/>} />
        <Route path="Productos" element={<Productos/>} />
        <Route path="Contactanos" element={<Contactanos/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App