import React, { useState } from 'react';

const Comentarios = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userComment, setUserComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName.trim() && userEmail.trim() && userComment.trim()) {
      alert(`¡Gracias por tu comentario, ${userName}!`);
      setUserName('');
      setUserEmail('');
      setUserComment('');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="form-box">
      <img
        src="../img/logo.png"
        alt="Logo de la marca"
        className="logo-custom"
      />
      <h2 className="form-title">Tu opinión nos ayuda mucho:</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Nombre:</label>
          <input
            type="text"
            id="userName"
            className="input-custom"
            placeholder="Tu nombre"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="userEmail">Correo:</label>
          <input
            type="email"
            id="userEmail"
            className="input-custom"
            placeholder="Tu correo"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="userComment">Comentario:</label>
          <textarea
            id="userComment"
            rows="4"
            className="input-custom"
            placeholder="Escribe tu comentario aquí"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button-custom">
          Enviar Comentario
        </button>
      </form>
    </div>
  );
};

export default Comentarios;
