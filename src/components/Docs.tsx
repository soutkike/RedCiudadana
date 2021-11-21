import React from "react";

const Docs = () => {
  return (
    <section
      id="docs"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <h3 className="text-3xl text-blueTheme font-semibold mb-1">
        Documentación
      </h3>
      <p className="text-gray-600 mb-12 text-center mx-1">
        Recibe la documentacion completa del proyecto via email
      </p>
      <div className="w-10/12 max-w-2xl flex flex-col border-2 border-blueTheme rounded-lg p-6 shadow-xl">
        <p className="text-center text-xl text-gray-800 mb">
          Completa el formulario
        </p>
        <div className="mb-3">
          <p className="font-light mb-1 ">Nombre Completo</p>
          <input
            type="text"
            className="py-2 px-1 border border-gray-300 rounded-md w-full focus:outline-blue-100"
          />
        </div>
        <div className="mb-3">
          <p className="font-light mb-1">Email</p>
          <input
            type="text"
            className="py-2 px-1 border border-gray-300 rounded-md w-full focus:outline-blue-100"
          />
        </div>
        <div className="mb-3">
          <p className="font-light mb-1">Ciudad</p>
          <input
            type="text"
            className="py-2 px-1 border border-gray-300 rounded-md w-full focus:outline-blue-100"
          />
        </div>
        <div className="mb-3">
          <p className="font-light mb-1">Interés en el Proyecto</p>
          <input
            type="text"
            className="py-2 px-1 border border-gray-300 rounded-md w-full focus:outline-blue-100"
          />
        </div>
        <button className="bg-blue-900 text-white py-2 rounded-md">
          Enviar
        </button>
      </div>
    </section>
  );
};

export default Docs;
