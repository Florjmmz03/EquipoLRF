import { useState } from "react";
import logo from './assets/img/Logo.png';
import './assets/css/custom.css';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navigation = [
    { title: "INICIO", href: "/" },
    { title: "PRODUCTOS", href: "/Productos" },
    { title: "OFERTAS", href: "/ofertas" },
    { title: "CONTACTO", href: "/Contactanos" }
  ];

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-[#cbddc5]/80 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="/">
            <img
              src={logo}
              alt="TINTART"
              className="h-20 transition-transform duration-300 hover:scale-105"
            />
          </a>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="border border-black text-black bg-white rounded-full px-4 py-1 pr-10 focus:outline-none focus:ring-2 focus:ring-[#779977] transition-all duration-300"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#779977] hover:scale-110 transition-all duration-300">
                🔍
              </button>
            </div>

            <a
              href="/Login"
              className="hidden md:block font-semibold text-black hover:text-[#779977] transition-colors duration-300"
            >
              Iniciar Sesión
            </a>
            <a
              href="/Carrito"
              className="hidden md:block font-semibold text-black hover:text-[#779977] transition-colors duration-300"
            >
              🛒 Carrito
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="border border-black text-black bg-white rounded-full px-3 py-1 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
              aria-label="Menú"
            >
              {open ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      <div className="h-20"></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 rounded-l-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-black text-2xl hover:text-red-500 transition-all duration-300"
            >
              ✖
            </button>
          </div>
          <ul className="mt-10 space-y-6">
            {navigation.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="block text-black font-semibold text-lg rounded-md hover:bg-[#cbddc5] hover:text-[#779977] px-3 py-2 transition-all duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
