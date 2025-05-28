import React, { useState } from 'react';
import './assets/css/2custom.css';
import logo from './assets/img/logo.jpeg';
import p1 from './assets/img/p1.png';
import p2 from './assets/img/p2.png';
import p3 from './assets/img/p3.png';
import p4 from './assets/img/p4.png';
import p5 from './assets/img/p5.png';
import p6 from './assets/img/p6.png';
import { Link } from 'react-router-dom';


const productos = [
  { id: 1, nombre: 'Sudadera Montecarlo', precio: '$350.00', categoria: 'sudaderas', img: p1 },
  { id: 2, nombre: 'Playera SpiderGirl', precio: '$250.00', categoria: 'playeras', img: p2 },
  { id: 3, nombre: 'ToteBag Pug', precio: '$200.00', categoria: 'totebags', img: p3 },
  { id: 4, nombre: 'ToteBag Olivia Rodrigo', precio: '$150.00', categoria: 'totebags', img: p4 },
  { id: 5, nombre: 'TouchePad', precio: '$100.00', categoria: 'otros', img: p5 },
  { id: 6, nombre: 'Taza Morat', precio: '$150.00', categoria: 'otros', img: p6 },
];

const DespliegueProyecto = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

  const filtrarProductos = () => {
    if (categoriaSeleccionada === 'todos') return productos;
    return productos.filter(producto => producto.categoria === categoriaSeleccionada);
  };

  return (
    <div className="py-8">
      <div className="w-11/12 max-w-[1200px] mx-auto">
        <header className="text-center my-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3a4c3a]">Productos</h1>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { label: 'Todos', value: 'todos' },
            { label: 'Sudaderas', value: 'sudaderas' },
            { label: 'Playeras', value: 'playeras' },
            { label: 'Tote Bags', value: 'totebags' },
            { label: 'Otros', value: 'otros' },
          ].map((filtro) => (
            <button
              key={filtro.value}
              onClick={() => setCategoriaSeleccionada(filtro.value)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 font-medium text-sm md:text-base
                ${
                  categoriaSeleccionada === filtro.value
                    ? 'bg-[#779977] text-white shadow-md'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
            >
              {filtro.label}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtrarProductos().map((producto) => (
            <div
            key={producto.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/producto/${producto.id}`}>
              <img
                src={producto.img}
                alt={producto.nombre}
                className="w-full h-[220px] md:h-[250px] object-cover rounded-md"
              />
              <p className="mt-4 text-lg md:text-xl font-semibold text-[#3a4c3a]">{producto.nombre}</p>
              <p className="text-[#5c5c5c] text-sm md:text-base">{producto.precio}</p>
            </Link>
          
            {(producto.categoria === 'sudaderas' || producto.categoria === 'playeras') && (
              <a href="/GuiaTallas" className="text-sm text-[#2b5c38] hover:underline block mt-2">
                📏 Ver guía de tallas
              </a>
            )}
          </div>
          
          ))}
        </section>
      </div>
    </div>
  );
};

export default DespliegueProyecto;
