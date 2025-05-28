import React, { useState, useEffect } from 'react';
import './assets/css/2custom.css';
import logo from './assets/img/logo.jpeg';

const DespliegueProyecto = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);

        // Extrae categorías únicas
        const categoriasUnicas = ['todos', ...new Set(data.map(p => p.category))];
        setCategorias(categoriasUnicas);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  const filtrarProductos = () => {
    if (categoriaSeleccionada === 'todos') return productos;
    return productos.filter(producto => producto.category === categoriaSeleccionada);
  };

  return (
    <div className="py-8">
      <div className="w-11/12 max-w-[1200px] mx-auto">
        <header className="text-center my-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3a4c3a]">Productos</h1>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 font-medium text-sm md:text-base
                ${
                  categoriaSeleccionada === cat
                    ? 'bg-[#779977] text-white shadow-md'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtrarProductos().map((producto) => (
            <div
              key={producto.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={producto.image}
                alt={producto.title}
                className="w-full h-[220px] md:h-[250px] object-contain rounded-md"
              />
              <p className="mt-4 text-lg md:text-xl font-semibold text-[#3a4c3a]">{producto.title}</p>
              <p className="text-[#5c5c5c] text-sm md:text-base">${producto.price}</p>
              <button
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => alert(`Producto ${producto.title} agregado al carrito`)}
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DespliegueProyecto;
