import React, { useState } from "react";

const Tintart = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar-tintart">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#">
            <img src="img/Logo.png" alt="TINTART" className="h-24" />
          </a>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos ..."
                className="custom-input pr-10"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                aria-label="Buscar"
              >
                🔍
              </button>
            </div>

            <a href="#" className="text-black font-semibold">
              Iniciar Sesión
            </a>
            <a href="html/proceso-compra.html" className="text-black font-semibold">
              🛒 Carrito
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="text-black font-semibold"
            >
              ☰ Menú
            </button>
          </div>
        </div>
      </nav>

      {/* Menú lateral */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 menu-lateral-oculto">
          <div className="bg-white w-64 h-full p-4">
            <button
              onClick={() => setOpen(false)}
              className="text-black mb-4"
            >
              Cerrar ✖
            </button>
            <ul className="space-y-4">
              <li>
                <a href="#">INICIO</a>
              </li>
              <li>
                <a href="#">ROPA</a>
              </li>
              <li>
                <a href="#">OFERTAS</a>
              </li>
              <li>
                <a href="#">CONTACTO</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Resto de contenido: sección bienvenida, categorías, productos, footer */}
      {/* Aquí seguirías con el mismo método: JSX válido */}
    </>
  );
};

export default Tintart;
