import React from "react";
import mainImage from "../images/ciudadanos.svg";
const Citizens = () => (
  <section className="h-screen w-full flex items-center justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-11/12  h-3/6 gap-y-10 gap-x-14">
      <div className="self-center flex flex-col">
        <h2 className="text-4xl text-blueTheme font-semibold mb-2 text-center md:text-left">
          Ciudadanos
        </h2>
        <p className="pr-6 text-lg mb-4 text-center md:text-left">
          Con tu ayuda seguimos construyendo una cultura del cuidado del aire en
          la zona conurbada.
        </p>
        <button className="rounded-lg px-4 py-2 bg-blueTheme text-white text-lg hover:bg-blue-700 w-24 mx-auto md:mx-0">
          Unirse
        </button>
      </div>
      <img
        src={mainImage}
        alt="Ciudadanos"
        className="w-10/12 mx-auto my-auto  "
      />
    </div>
  </section>
);

export default Citizens;
