import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi'; // Ícono de correo (opcional)

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, userEmail, userMessage } = formData;

    if (userName.trim() && userEmail.trim() && userMessage.trim()) {
      alert(`¡Gracias por contactarnos, ${userName}!`);
      setFormData({ userName: '', userEmail: '', userMessage: '' });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-xl p-8 transition-all duration-300 animate-fade-in">
        {/* Ícono e introducción */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-[#779977]/10 p-3 rounded-full mb-2">
            <FiMail className="text-[#779977] text-2xl" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-[#556b6b]">
            Contáctanos
          </h1>
          <p className="text-center text-sm text-gray-500 mt-2">
            ¿Tienes preguntas o sugerencias? ¡Escríbenos!
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5 font-sans">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-600"
            >
              Nombre
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]/40 transition-all placeholder-gray-400 bg-gray-50 focus:bg-white focus:scale-[1.02] shadow-sm"
              placeholder="Tu nombre"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-gray-600"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]/40 transition-all placeholder-gray-400 bg-gray-50 focus:bg-white focus:scale-[1.02] shadow-sm"
              placeholder="Tu correo"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="userMessage"
              className="block text-sm font-medium text-gray-600"
            >
              Mensaje
            </label>
            <textarea
              id="userMessage"
              name="userMessage"
              rows="4"
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#779977]/40 transition-all placeholder-gray-400 bg-gray-50 focus:bg-white focus:scale-[1.02] shadow-sm resize-none"
              placeholder="¿En qué podemos ayudarte?"
              value={formData.userMessage}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#779977] text-white font-medium rounded-lg py-2 hover:bg-[#6b8d6b] transition shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#779977]/50"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* Footer opcional */}
        <div className="mt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Tintart.
        </div>
      </div>

      {/* Animación */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactScreen;
