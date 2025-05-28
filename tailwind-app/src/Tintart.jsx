import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import anuncio1 from './assets/img/Anuncio1.png';
import anuncio2 from './assets/img/Anuncio2.jpg';
import anuncio3 from './assets/img/Anuncio3.jpg';
import anuncio4 from './assets/img/Anuncio4.jpg';
import anuncio5 from './assets/img/Anuncio5.jpg';
import logo from './assets/img/LOGO2.png';

const images = [anuncio1, anuncio2, anuncio3, anuncio4, anuncio5];


export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  // Sacar categorías únicas
  const categoriasUnicas = [];
  productos.forEach((producto) => {
    if (!categoriasUnicas.find((cat) => cat.category === producto.category)) {
      categoriasUnicas.push(producto);
    }
  });

  return (
    <main className="bg-white text-gray-800">
      <div className="h-8"></div>

      <section className="relative bg-[#cbddc5] py-7 px-15 rounded-lg mx-30 my-6 overflow-hidden shadow">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-[#4f614f]">Bienvenido</h1>
            <p className="text-gray-700 mb-5 text-sm md:text-base max-w-md">
              Descubre nuestros productos con estilo y calidad. ¡Explora lo que tenemos para ti!
            </p>
            <Link
              to="/productos"
              className="inline-block bg-[#4f614f] text-white text-xs md:text-sm font-medium px-5 py-2 rounded-full hover:bg-[#3d4e3d] transition"
            >
              Explorar productos
            </Link>
          </div>

          <div className="flex-1 w-full md:w-auto flex justify-center items-center">
            <img
              src={logo}
              alt="Bienvenido a la tienda"
              className="rounded-lg shadow-md w-44 md:w-60 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="container mx-auto py-10 px-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#4f614f]">Categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categoriasUnicas.map((producto) => (
            <Link
              key={producto.category}
              to={`/productos?categoria=${encodeURIComponent(producto.category)}`}
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition-transform hover:scale-105"
            >
              <img
                src={producto.image}
                alt={producto.category}
                className="aspect-square w-24 sm:w-28 md:w-32 object-cover rounded-lg mb-3 shadow-sm"
              />
              <span className="text-sm sm:text-base font-medium text-gray-800">{producto.category}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Carrusel */}
      <section className="container mx-auto py-10 px-4">
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-md">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full aspect-[21/6] object-cover flex-shrink-0 rounded-2xl"
              />
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${index === current ? "bg-[#4f614f]" : "bg-gray-300"} transition-colors`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#4f614f]">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {productos.slice(0, 3).map((p) => (
            <div
              key={p.id}
              className="bg-white border rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full aspect-square object-contain rounded-t-xl p-3"
              />
              <div className="p-4 text-center">
                <h5 className="text-base md:text-lg font-semibold text-[#4f614f]">{p.title}</h5>
                <p className="text-gray-600 text-sm">${p.price}</p>
                <Link
                  to={`/producto/${p.id}`}
                  className="bg-[#4f614f] text-white font-medium px-3 py-1 rounded mt-3 inline-block text-xs hover:bg-[#3d4e3d] transition"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
