import React from "react";

const Registro = () => (
  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
    {/* Título centrado */}
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Registro</h2>

    {/* Formulario de registro */}
    <form>
      {/* Campo: Nombre */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
          placeholder="Ingrese su nombre"
          required
        />
      </div>

      {/* Campo: Correo Electrónico */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
          placeholder="Ingrese su correo"
          required
        />
      </div>

      {/* Campo: Contraseña */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
          placeholder="Ingrese su contraseña"
          required
        />
      </div>

      {/* Campo: Confirmar Contraseña */}
      <div className="mb-6">
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="confirm-password"
          className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
          placeholder="Confirme su contraseña"
          required
        />
      </div>

      {/* Botón de registro */}
      <button
        type="submit"
        className="w-full bg-[#779977] text-white py-3 rounded-lg hover:bg-[#0c5f31] transition-colors"
      >
        Registrarse
      </button>
    </form>

    {/* Enlace para ir al login */}
    <p className="text-center text-sm text-gray-700 mt-4">
      ¿Ya tienes cuenta?{" "}
      <a href="login.html" className="text-black font-medium hover:underline">
        Inicia sesión
      </a>
    </p>
  </div>
);

export default Registro;
