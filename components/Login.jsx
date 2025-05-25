import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10">
      {/* Logo centrado */}
      <img src="../img/Logo.png" alt="Logo" className="w-36 mx-auto mb-6" />

      {/* Título */}
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Iniciar sesión
      </h2>

      <form>
        {/* Correo Electrónico */}
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

        {/* Contraseña */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="mt-1 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
            placeholder="Ingrese su contraseña"
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

        {/* Olvidé mi contraseña */}
        <p className="text-left text-sm text-gray-700 mb-4">
          <a href="#" className="hover:underline">
            Olvidé mi contraseña
          </a>
        </p>

        {/* Botón iniciar sesión */}
        <button
          type="submit"
          className="w-full bg-[#779977] text-white py-3 rounded-lg hover:bg-[#0c5f31] transition-colors"
        >
          Iniciar sesión
        </button>

        {/* Enlace a registro */}
        <p className="text-center text-sm text-gray-700 mt-4">
          ¿No tienes cuenta?{" "}
          <a href="registro.html" className="text-black font-medium hover:underline">
            Regístrate
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
