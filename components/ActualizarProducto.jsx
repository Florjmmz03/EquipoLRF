import React from "react";

const EditarProducto = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#cbddc5] font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">
          Editar Producto
        </h2>

        <table className="table-auto w-full border-collapse border border-gray-300 mb-8">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Descripción</th>
              <th className="border border-gray-300 px-4 py-2">Precio</th>
              <th className="border border-gray-300 px-4 py-2">Categoría</th>
              <th className="border border-gray-300 px-4 py-2">Imagen</th>
              <th className="border border-gray-300 px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Camiseta</td>
              <td className="border border-gray-300 px-4 py-2">
                Camiseta de algodón
              </td>
              <td className="border border-gray-300 px-4 py-2">$15</td>
              <td className="border border-gray-300 px-4 py-2">Hombre</td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src="/src/assets/img/camiseta.jpg"
                  alt="Camiseta"
                  className="w-12"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-[#779977] text-white font-bold px-4 py-2 rounded hover:bg-[#0c5f31] transition-colors">
                  Editar
                </button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Vestido</td>
              <td className="border border-gray-300 px-4 py-2">
                Vestido elegante
              </td>
              <td className="border border-gray-300 px-4 py-2">$30</td>
              <td className="border border-gray-300 px-4 py-2">Mujer</td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src="/src/assets/img/vestido.jpg"
                  alt="Vestido"
                  className="w-12"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-[#779977] text-white font-bold px-4 py-2 rounded hover:bg-[#0c5f31] transition-colors">
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">
            Modificar Producto
          </h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-black mb-2"
              >
                Nombre del Producto
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Ingrese el nombre"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="descripcion"
                className="block text-sm font-medium text-black mb-2"
              >
                Descripción
              </label>
              <textarea
                id="descripcion"
                rows="3"
                placeholder="Ingrese una descripción"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="precio"
                className="block text-sm font-medium text-black mb-2"
              >
                Precio
              </label>
              <input
                type="number"
                id="precio"
                placeholder="Ingrese el precio"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="categoria"
                className="block text-sm font-medium text-black mb-2"
              >
                Categoría
              </label>
              <select
                id="categoria"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
              >
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
                <option value="niños">Niños</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="imagen"
                className="block text-sm font-medium text-black mb-2"
              >
                Imagen del Producto
              </label>
              <input
                type="file"
                id="imagen"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#779977] text-white font-bold py-2 rounded-lg hover:bg-[#0c5f31] transition-colors"
            >
              Actualizar Producto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
