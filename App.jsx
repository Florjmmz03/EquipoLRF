import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comentarios from './components/Comentarios';
import Registro from './components/Registro';
import DespliegueProyecto from './components/DespliegueProyecto';
import ProcesoCompra from './components/ProcesoCompra';
import AgregarProducto from './components/AgregarProducto';
import MostrarProducto from './components/MostrarProducto';
import Login from './components/Login';
import ActualizarProducto from './components/ActualizarProducto';
import EliminarProducto from './components/EliminarProducto';
import Componentes from './components/Componentes';
import Tintart from './components/Tintart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tintart />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/despliegueProyecto" element={<DespliegueProyecto />} />
        <Route path="/proceso-compra" element={<ProcesoCompra />} />
        <Route path="/agregarProducto" element={<AgregarProducto />} />
        <Route path="/mostrarProducto" element={<MostrarProducto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actualizarProducto" element={<ActualizarProducto />} />
        <Route path="/eliminarProducto" element={<EliminarProducto />} />
        <Route path="/componentes" element={<Componentes />} />
      </Routes>
    </Router>
  );
}

export default App;