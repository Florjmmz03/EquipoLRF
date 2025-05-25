import React from 'react';

const Componentes = () => (
  <div>
    {/* Contenedor de la tabla */}
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl mb-8">
      <h2 className="text-2xl font-semibold text-center mb-6 text-black">Lista de Productos</h2>
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
          <tr>
            <td className="border border-gray-300 px-4 py-2">{/* Aquí el nombre del producto */}</td>
            <td className="border border-gray-300 px-4 py-2">{/* Descripción */}</td>
            <td className="border border-gray-300 px-4 py-2">{/* Precio */}</td>
            <td className="border border-gray-300 px-4 py-2">{/* Categoría */}</td>
            <td className="border border-gray-300 px-4 py-2">
              <img src="" alt="Imagen del producto" className="w-12" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Contenedor del formulario */}
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-black">Agregar Nuevo Producto</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-black mb-2">
            Nombre del Producto
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-sm font-medium text-black mb-2">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
            placeholder="Ingrese una descripción"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="precio" className="block text-sm font-medium text-black mb-2">
            Precio
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
            placeholder="Ingrese el precio"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoria" className="block text-sm font-medium text-black mb-2">
            Categoría
          </label>
          <select
            id="categoria"
            name="categoria"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
          >
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="niños">Niños</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="imagen" className="block text-sm font-medium text-black mb-2">
            Imagen del Producto
          </label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#779977] text-white font-bold py-2 rounded-lg hover:bg-[#0c5f31] transition-colors"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  </div>
);

export default Componentes;
