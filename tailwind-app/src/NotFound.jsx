// NotFound.jsx
import notFoundImage from './assets/img/404.webp'; // Coloca tu imagen en assets/img

function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f7faf7] px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-xl">
        <img
          src={notFoundImage}
          alt="404 Página no encontrada"
          className="w-64 h-auto mx-auto mb-6"
        />
        <p className="text-base font-semibold text-[#779977]">404</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
          Página no encontrada
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Lo sentimos, no pudimos encontrar la página que estás buscando. Por favor, verifica la URL o vuelve a la página principal.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="inline-block rounded-full bg-[#779977] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6b8d6b] transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
