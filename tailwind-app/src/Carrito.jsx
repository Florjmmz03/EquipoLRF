import React, { useState } from "react";
import amex from './assets/img/AMEX-Logo.jpg';
import master from './assets/img/logo-Mastercard.jpg';
import visa from './assets/img/VISA-Logo.jpg';


const ProcesoCompra = () => {
  const [paso, setPaso] = useState(1);

  const productos = [
    { id: 1, nombre: "Camisa Oversize", talla: "M", precio: 399, imagen: "../img/Producto1.png" },
    { id: 2, nombre: "Pantalón Cargo", talla: "32", precio: 599, imagen: "../img/Producto2.png" },
  ];

  const total = productos.reduce((acc, p) => acc + p.precio, 0);

  const [datosEnvio, setDatosEnvio] = useState({
    nombre: "",
    direccion: "",
    cp: "",
    metodoPago: "",
  });

  const [datosTarjeta, setDatosTarjeta] = useState({
    nombreTarjeta: "",
    numeroTarjeta: "",
    vencimiento: "",
    cvv: "",
  });

  const handleEnvioChange = (e) => {
    setDatosEnvio({ ...datosEnvio, [e.target.id]: e.target.value });
  };

  const handleTarjetaChange = (e) => {
    setDatosTarjeta({ ...datosTarjeta, [e.target.id]: e.target.value });
  };

  const validarMetodoPago = (e) => {
    e.preventDefault();
    if (!datosEnvio.metodoPago) {
      alert("Por favor selecciona un método de pago");
      return;
    }
    if (datosEnvio.metodoPago === "tarjeta") {
      setPaso(3);
    } else {
      setPaso(4);
    }
  };

  const confirmarPago = (e) => {
    e.preventDefault();
    // Podrías agregar validación adicional aquí
    setPaso(4);
  };

  return (
    <main className="contenedor" style={{ paddingTop: "100px" }}>
      {paso === 1 && (
        <section id="paso1">
          <h1 className="titulo">Resumen de tu compra</h1>
          <section className="product-grid">
            {productos.map((p) => (
              <div key={p.id} className="card">
                <img src={p.imagen} alt={p.nombre} />
                <div className="card-body">
                  <h3>{p.nombre}</h3>
                  <p>Talla: {p.talla}</p>
                  <p>Precio: ${p.precio}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="resumen-compra">
            <h2>Total: ${total}</h2>
            <button className="btn" onClick={() => setPaso(2)}>
              Continuar al pago
            </button>
          </section>
        </section>
      )}

      {paso === 2 && (
        <section id="paso2">
          <div className="form-box">
            <h2>Datos de envío</h2>
            <form onSubmit={validarMetodoPago}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  required
                  className="input-custom"
                  value={datosEnvio.nombre}
                  onChange={handleEnvioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  id="direccion"
                  required
                  className="input-custom"
                  value={datosEnvio.direccion}
                  onChange={handleEnvioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cp">Código Postal</label>
                <input
                  type="text"
                  id="cp"
                  required
                  className="input-custom"
                  value={datosEnvio.cp}
                  onChange={handleEnvioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="metodoPago">Método de pago</label>
                <select
                  id="metodoPago"
                  required
                  className="input-custom"
                  value={datosEnvio.metodoPago}
                  onChange={(e) => setDatosEnvio({ ...datosEnvio, metodoPago: e.target.value })}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="tarjeta">Tarjeta</option>
                  <option value="oxxo">OXXO</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <button type="submit" className="button-custom">
                Finalizar compra
              </button>
            </form>
          </div>
        </section>
      )}

      {paso === 3 && (
        <section id="paso3">
          <div className="form-box">
            <h2>Información de tu tarjeta</h2>
            <div className="form-group text-center mb-4">
              <img src={amex} alt="Amex" className="w-12 inline-block mx-2" />
              <img src={master} alt="Mastercard" className="w-12 inline-block mx-2" />
              <img src={visa} alt="Visa" className="w-12 inline-block mx-2" />
            </div>
            <form onSubmit={confirmarPago}>
              <div className="form-group">
                <label htmlFor="nombreTarjeta">Nombre en la tarjeta</label>
                <input
                  type="text"
                  id="nombreTarjeta"
                  required
                  placeholder="Ej. Juan Pérez"
                  className="input-custom"
                  value={datosTarjeta.nombreTarjeta}
                  onChange={handleTarjetaChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="numeroTarjeta">Número de tarjeta</label>
                <input
                  type="text"
                  id="numeroTarjeta"
                  required
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="input-custom"
                  value={datosTarjeta.numeroTarjeta}
                  onChange={handleTarjetaChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="vencimiento">Vencimiento</label>
                <input
                  type="month"
                  id="vencimiento"
                  required
                  className="input-custom"
                  value={datosTarjeta.vencimiento}
                  onChange={handleTarjetaChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  maxLength={4}
                  required
                  placeholder="Ej. 123"
                  className="input-custom"
                  value={datosTarjeta.cvv}
                  onChange={handleTarjetaChange}
                />
              </div>
              <button type="submit" className="button-custom">
                Confirmar pago
              </button>
            </form>
          </div>
        </section>
      )}

      {paso === 4 && (
        <section id="paso4" className="text-center pt-10">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu pedido ha sido procesado con éxito.</p>
          <img
            src="../img/check.png"
            alt="Compra completada"
            className="mx-auto mt-4"
            style={{ maxWidth: "150px" }}
          />
        </section>
      )}
    </main>
  );
};

export default ProcesoCompra;
