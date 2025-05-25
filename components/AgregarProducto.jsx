import React from "react";

const AgregarProducto = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-black">
        Agregar Nuevo Producto
      </h2>
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
            defaultValue=""
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]"
          >
            <option value="" disabled>
              Seleccione una categoría
            </option>
            <option value="1">Hombre</option>
            <option value="2">Mujer</option>
            <option value="3">Niños</option>
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
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default AgregarProducto;
