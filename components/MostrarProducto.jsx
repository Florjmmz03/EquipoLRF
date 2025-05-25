import React, { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Camiseta",
    descripcion: "Camiseta de algodón",
    precio: 15,
    categoria: "hombre",
    imagen: "img/camiseta.jpg",
  },
  {
    id: 2,
    nombre: "Vestido",
    descripcion: "Vestido elegante",
    precio: 30,
    categoria: "mujer",
    imagen: "img/vestido.jpg",
  },
  {
    id: 3,
    nombre: "Pantalón",
    descripcion: "Pantalón para niños",
    precio: 20,
    categoria: "niños",
    imagen: "img/pantalon.jpg",
  },
];

const MostrarProducto = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState("all");

  const handleFiltroChange = (e) => {
    setCategoriaFiltro(e.target.value);
  };

  const productosFiltrados =
    categoriaFiltro === "all"
      ? productos
      : productos.filter((p) => p.categoria === categoriaFiltro);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-black">
        Lista de Productos
      </h2>

      <div className="mb-4">
        <label
          htmlFor="categoriaFiltro"
          className="block text-sm font-medium text-black mb-2"
        >
          Filtrar por Categoría
        </label>
        <select
          id="categoriaFiltro"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
          value={categoriaFiltro}
          onChange={handleFiltroChange}
        >
          <option value="all">Todos los productos</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="niños">Niños</option>
        </select>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Descripción</th>
            <th className="border border-gray-300 px-4 py-2">Precio</th>
            <th className="border border-gray-300 px-4 py-2">Categoría</th>
            <th className="border border-gray-300 px-4 py-2">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map(({ id, nombre, descripcion, precio, categoria, imagen }) => (
            <tr key={id} className="producto" data-categoria={categoria}>
              <td className="border border-gray-300 px-4 py-2">{nombre}</td>
              <td className="border border-gray-300 px-4 py-2">{descripcion}</td>
              <td className="border border-gray-300 px-4 py-2">${precio}</td>
              <td className="border border-gray-300 px-4 py-2">{categoria}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img src={imagen} alt={nombre} className="w-12" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostrarProducto;
