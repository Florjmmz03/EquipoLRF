import React from 'react';
const GuiaTallas = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-6 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
            Guía de Tallas
          </h1>
  
          <p className="mb-6 text-center text-lg text-gray-600">
            Consulta la siguiente tabla para elegir la talla perfecta.
          </p>
  
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border border-gray-200">
              <thead className="bg-[#2b5c38] text-white">
                <tr>
                  <th className="px-4 py-2">Talla</th>
                  <th className="px-4 py-2">Pecho (cm)</th>
                  <th className="px-4 py-2">Cintura (cm)</th>
                  <th className="px-4 py-2">Cadera (cm)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="border px-4 py-2">XS</td><td className="border px-4 py-2">76 - 81</td><td className="border px-4 py-2">60 - 65</td><td className="border px-4 py-2">84 - 89</td></tr>
                <tr><td className="border px-4 py-2">S</td><td className="border px-4 py-2">82 - 87</td><td className="border px-4 py-2">66 - 71</td><td className="border px-4 py-2">90 - 95</td></tr>
                <tr><td className="border px-4 py-2">M</td><td className="border px-4 py-2">88 - 93</td><td className="border px-4 py-2">72 - 77</td><td className="border px-4 py-2">96 - 101</td></tr>
                <tr><td className="border px-4 py-2">L</td><td className="border px-4 py-2">94 - 99</td><td className="border px-4 py-2">78 - 83</td><td className="border px-4 py-2">102 - 107</td></tr>
                <tr><td className="border px-4 py-2">XL</td><td className="border px-4 py-2">100 - 105</td><td className="border px-4 py-2">84 - 89</td><td className="border px-4 py-2">108 - 113</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default GuiaTallas;
  