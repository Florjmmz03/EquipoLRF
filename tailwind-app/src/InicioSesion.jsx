import React, { useState } from "react";
import logo from './assets/img/Logo.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // Aquí va el username de la API
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: email,
          password: password
        })
      });

      if (!response.ok) throw new Error("Credenciales incorrectas");

      const data = await response.json();
      console.log("Token recibido:", data.token);//Se dio el inicio de sesion

      localStorage.setItem("token", data.token); 

      // Redireccionar a productos
      window.location.href = "/productos";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10 mb-10">
      <img src={logo} alt="Logo" className="w-36 mx-auto mb-2" />

      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Iniciar sesión
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Usuario
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779977]"
            placeholder="Ingrese su usuario"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <p className="text-left text-sm text-gray-700 mb-4">
          <a href="#" className="hover:underline">
            Olvidé mi contraseña
          </a>
        </p>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#779977] text-white py-3 rounded-lg hover:bg-[#0c5f31] transition-colors"
        >
          Iniciar sesión
        </button>

        <p className="text-center text-sm text-gray-700 mt-4">
          ¿No tienes cuenta?{" "}
          <a href="Registro" className="text-black font-medium hover:underline">
            Regístrate
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;