import React from "react";

export const Encuestas = () => {
  return (
    <div>
      <section className="h-screen w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-11/12  h-3/6 gap-y-10 gap-x-14">
          <div className="flex flex-col justify-center">
            <h3 className="text-center md:text-left text-2xl lg:text-4xl text-blueTheme mb-3">
              Encuestas
            </h3>
            <p className="text-center lg:text-left text-lg">
              Colabora con el proyecto realizando una encuesta
            </p>
          </div>
          <div className="flex flex-col justify-center  gap-y-8">
            <button className="flex justify-center items-center bg-blue-700 max-w-sm py-4 text-white text-lg mx-auto w-80 rounded-lg">
              <p className="">Encuesta 1</p>
            </button>

            <button className="flex justify-center items-center bg-blue-700 max-w-sm py-4 text-white text-lg mx-auto w-80 rounded-lg">
              <p className="">Encuesta 2</p>
            </button>
            <button className="flex justify-center items-center bg-blue-700 max-w-sm py-4 text-white text-lg mx-auto w-80 rounded-lg">
              <p className="">Encuesta 3</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Encuestas;
