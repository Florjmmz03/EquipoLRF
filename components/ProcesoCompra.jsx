import React, { useState } from "react";

const ProcesoCompra = () => {
  const [paso, setPaso] = useState(1);

  // Datos para mostrar (puedes obtenerlos dinámicamente)
  const productos = [
    { id: 1, nombre: "Camisa Oversize", talla: "M", precio: 399, imagen: "../img/Producto1.png" },
    { id: 2, nombre: "Pantalón Cargo", talla: "32", precio: 599, imagen: "../img/Producto2.png" },
  ];

  const total = productos.reduce((acc, p) => acc + p.precio, 0);

  // Manejo simple de formulario (puedes expandirlo)
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
    // Aquí podrías validar datosTarjeta antes de continuar
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
                  className="input-custom"
                  required
                  value={datosEnvio.nombre}
                  onChange={handleEnvioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  id="direccion"
                  className="input-custom"
                  required
                  value={datosEnvio.direccion}
                  onChange={handleEnvioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cp">Código Postal</label>
                <input
                  type="text"
                  id="cp"
                  className="input-custom"
                  required
                  value={datosEnvio.cp}
                  onChange={handleEnvioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="metodoPago">Método de pago</label>
                <select
                  id="metodoPago"
                  className="input-custom"
                  required
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
            <div className="form-group" style={{ textAlign: "center", marginBottom: "20px" }}>
              <img src="../img/AMEX-Logo.jpg" alt="Visa" style={{ width: 50, margin: "0 10px" }} />
              <img src="../img/logo-Mastercard.jpg" alt="Mastercard" style={{ width: 50, margin: "0 10px" }} />
              <img src="../img/VISA-Logo.jpg" alt="American Express" style={{ width: 50, margin: "0 10px" }} />
            </div>

            <form onSubmit={confirmarPago}>
              <div className="form-group">
                <label htmlFor="nombreTarjeta">Nombre en la tarjeta</label>
                <input
                  type="text"
                  id="nombreTarjeta"
                  className="input-custom"
                  placeholder="Ej. Juan Pérez"
                  required
                  value={datosTarjeta.nombreTarjeta}
                  onChange={handleTarjetaChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="numeroTarjeta">Número de tarjeta</label>
                <input
                  type="text"
                  id="numeroTarjeta"
                  className="input-custom"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                  value={datosTarjeta.numeroTarjeta}
                  onChange={handleTarjetaChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="vencimiento">Vencimiento</label>
                <input
                  type="month"
                  id="vencimiento"
                  className="input-custom"
                  required
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
                  placeholder="Ej. 123"
                  required
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
        <section
          id="paso4"
          style={{ display: "block", textAlign: "center", paddingTop: "50px" }}
        >
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu pedido ha sido procesado con éxito.</p>
          <img
            src="../img/check.png"
            alt="Compra completada"
            style={{ maxWidth: 150, marginTop: 20 }}
          />
        </section>
      )}
    </main>
  );
};

export default ProcesoCompra;
