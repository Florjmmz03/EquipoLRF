import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { CarritoContext } from "./carritoContext";

const VistaProducto = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CarritoContext); // ¡Mueve esto aquí!

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo obtener el producto');
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar el producto');
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <div className="text-center mt-20 text-[#2b5c38]">Cargando producto...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-20">{error}</div>;
  }

  const handleTallaChange = (e) => {
    setTallaSeleccionada(e.target.value);
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={producto.image}
          alt={producto.title}
          className="w-full h-auto rounded-lg object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{producto.title}</h1>
          <p className="text-xl text-[#2b5c38] mb-4">${producto.price}</p>
          <p className="text-gray-600 mb-4">{producto.description}</p>

          {(producto.category === "men's clothing" || producto.category === "women's clothing") && (
            <>
              <a
                href="/GuiaTallas"
                className="text-sm text-[#2b5c38] hover:underline mb-4 block"
              >
                📏 Ver guía de tallas
              </a>

              <label className="block mb-2 mt-4 text-sm font-medium text-gray-700">
                Selecciona tu talla:
              </label>
              <select
                value={tallaSeleccionada}
                onChange={handleTallaChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#2b5c38]"
              >
                <option value="">-- Elige una talla --</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </>
          )}

          <button
            className="mt-6 bg-[#2b5c38] hover:bg-[#1f422a] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            onClick={() => {
              agregarAlCarrito({
                id: producto.id,
                nombre: producto.title,
                talla: tallaSeleccionada || "única",
                precio: producto.price,
                imagen: producto.image,
              });
              alert('¡Producto agregado al carrito!');
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default VistaProducto;
