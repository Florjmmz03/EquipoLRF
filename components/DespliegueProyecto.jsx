import React from 'react';

const DespliegueProyecto = () => (
  <div>
    {/* Logo principal */}
    <div className="text-center my-6">
      <img
        src="../img/logo.jpeg"
        alt="Creando arte juntos"
        className="w-full max-w-[600px] mx-auto"
      />
      <p className="mt-4 text-2xl font-semibold">Creando arte juntos</p>
    </div>

    {/* Contenedor principal */}
    <div className="w-11/12 mx-auto">
      {/* Título */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Productos</h1>
      </header>

      {/* Grilla de productos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Producto 1 */}
        <div className="bg-[#779977] rounded-lg text-center p-4 shadow-md">
          <img
            src="../img/p1.png"
            alt="Sudadera Montecarlo"
            className="max-w-[350px] h-[250px] object-cover rounded-lg mx-auto"
          />
          <p className="mt-4 text-2xl">Sudadera Montecarlo - $350.00</p>
        </div>

        {/* Producto 2 */}
        <div className="bg-[#779977] rounded-lg text-center p-4 shadow-md">
          <img
            src="../img/p2.png"
            alt="Playera SpiderGirl"
            className="max-w-[350px] h-[250px] object-cover rounded-lg mx-auto"
          />
          <p className="mt-4 text-2xl">Playera SpiderGirl - $250.00</p>
        </div>

        {/* Producto 3 */}
        <div className="bg-[#779977] rounded-lg text-center p-4 shadow-md">
          <img
            src="../img/p3.png"
            alt="ToteBag Pug"
            className="max-w-[350px] h-[250px] object-cover rounded-lg mx-auto"
          />
          <p className="mt-4 text-2xl">ToteBag Pug - $200.00</p>
        </div>

        {/* Producto 4 */}
        <div className="bg-[#779977] rounded-lg text-center p-4 shadow-md">
          <img
            src="../img/p4.png"
            alt="ToteBag Olivia Rodrigo"
            className="max-w-[350px] h-[250px] object-cover rounded-lg mx-auto"
          />
          <p className="mt-4 text-2xl">ToteBag Olivia Rodrigo - $150.00</p>
        </div>

        {/* Producto 5 */}
        <div className="bg-[#779977] rounded-lg text-center p-4 shadow-md">
          <img
            src="../img/p5.png"
            alt="TouchePad"
            className="max-w-[350px] h-[250px] object-cover rounded-lg mx-auto"
          />
          <p className="mt-4 text-2xl">TouchePad - $100.00</p>
        </div>

        {/* Producto 6 */}
        <div className="bg-[#779977] rounded-lg text-center p-4 shadow-md">
          <img
            src="../img/p6.png"
            alt="Taza Morat"
            className="max-w-[350px] h-[250px] object-cover rounded-lg mx-auto"
          />
          <p className="mt-4 text-2xl">Taza Morat - $150.00</p>
        </div>
      </section>
    </div>
  </div>
);

export default DespliegueProyecto;
