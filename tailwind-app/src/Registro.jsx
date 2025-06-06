import React, { useState } from "react";
import logo from './assets/img/Logo.png';

const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10 mb-10">
      <img src={logo} alt="Logo" className="w-36 mx-auto mb-6" />

      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Crear cuenta
      </h2>

      <form>
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

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="mt-1 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
            placeholder="Cree una contraseña"
            required
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-9 text-gray-600 text-lg"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
            placeholder="Repita la contraseña"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#779977] text-white py-3 rounded-lg hover:bg-[#0c5f31] transition-colors"
        >
          Crear cuenta
        </button>

        <p className="text-center text-sm text-gray-700 mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="Login" className="text-black font-medium hover:underline">
            Inicia sesión
          </a>
        </p>
      </form>
    </div>
  );
};

export default Registro;
