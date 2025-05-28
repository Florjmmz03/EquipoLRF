import { useParams } from 'react-router-dom';
import p1 from './assets/img/p1.png';
import p2 from './assets/img/p2.png';
import p3 from './assets/img/p3.png';
import p4 from './assets/img/p4.png';
import p5 from './assets/img/p5.png';
import p6 from './assets/img/p6.png';


const productos = [
  { id: 1, nombre: 'Sudadera Montecarlo', precio: '$350.00', categoria: 'sudaderas', img: p1 },
  { id: 2, nombre: 'Playera SpiderGirl', precio: '$250.00', categoria: 'playeras', img: p2 },
  { id: 3, nombre: 'ToteBag Pug', precio: '$200.00', categoria: 'totebags', img: p3 },
  { id: 4, nombre: 'ToteBag Olivia Rodrigo', precio: '$150.00', categoria: 'totebags', img: p4 },
  { id: 5, nombre: 'TouchePad', precio: '$100.00', categoria: 'otros', img: p5 },
  { id: 6, nombre: 'Taza Morat', precio: '$150.00', categoria: 'otros', img: p6 },
];

const VistaProducto = () => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <div className="text-center text-red-600 mt-20">Producto no encontrado</div>;
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={producto.img} alt={producto.nombre} className="w-full h-auto rounded-lg" />

        <div>
          <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
          <p className="text-xl text-[#2b5c38] mb-4">{producto.precio}</p>

          {(producto.categoria === 'sudaderas' || producto.categoria === 'playeras') && (
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
                <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#2b5c38]">
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
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default VistaProducto;
