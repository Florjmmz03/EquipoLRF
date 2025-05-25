import React from 'react';

const EliminarProducto = () => (
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
    <h2 className="text-2xl font-semibold text-center mb-6 text-black">Eliminar Productos</h2>

    <table className="table-auto w-full border-collapse border border-gray-300 mb-8">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Nombre</th>
          <th className="border border-gray-300 px-4 py-2">Descripción</th>
          <th className="border border-gray-300 px-4 py-2">Precio</th>
          <th className="border border-gray-300 px-4 py-2">Categoría</th>
          <th className="border border-gray-300 px-4 py-2">Imagen</th>
          <th className="border border-gray-300 px-4 py-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Camiseta</td>
          <td className="border border-gray-300 px-4 py-2">Camiseta de algodón</td>
          <td className="border border-gray-300 px-4 py-2">$15</td>
          <td className="border border-gray-300 px-4 py-2">Hombre</td>
          <td className="border border-gray-300 px-4 py-2">
            <img src="img/camiseta.jpg" alt="Camiseta" className="w-12" />
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded transition-colors hover:bg-red-800">
              Eliminar
            </button>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Vestido</td>
          <td className="border border-gray-300 px-4 py-2">Vestido elegante</td>
          <td className="border border-gray-300 px-4 py-2">$30</td>
          <td className="border border-gray-300 px-4 py-2">Mujer</td>
          <td className="border border-gray-300 px-4 py-2">
            <img src="img/vestido.jpg" alt="Vestido" className="w-12" />
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded transition-colors hover:bg-red-800">
              Eliminar
            </button>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Pantalón</td>
          <td className="border border-gray-300 px-4 py-2">Pantalón para niños</td>
          <td className="border border-gray-300 px-4 py-2">$20</td>
          <td className="border border-gray-300 px-4 py-2">Niños</td>
          <td className="border border-gray-300 px-4 py-2">
            <img src="img/pantalon.jpg" alt="Pantalón" className="w-12" />
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <button className="bg-red-600 text-white font-bold px-4 py-2 rounded transition-colors hover:bg-red-800">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default EliminarProducto;
