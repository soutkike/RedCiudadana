import React from "react";
import heroImage from "../images/redCiudadana.svg";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";

const Hero = () => {
  return (
    <>
      <div className="relative hero flex flex-col justify-center gap-y-6 lg:gap-y-0 items-center xl:flex-row xl:justify-between xl:items-center">
        <div className="flex flex-col lg:block">
          <h1 className="text-center lg:text-left text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 font-bold">
            Red Ciudadana de Monitoreo <br /> de la Calidad del Aire
          </h1>
          <h2 className="text-center text-sm md:text-base lg:text-lg xl:text-lg text-blueTheme mb-6">
            Zona Metropolitana de Altamira, Ciudad Madero y Tampico.
          </h2>
          <button className="mx-auto lg:m-1 bg-blueTheme px-4 py-2 rounded-lg text-white text-sm md:text-base lg:text-lg xl:text-xl hover:bg-blue-600">
            Colaborar
          </button>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Red de Ciudadanos"
            className="hero-image lg:mr-4"
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center pb-4 absolute bottom-0 chevron">
        <FaChevronDown color={"5271ff"} size={44} />
      </div>
    </>
  );
};

export default Hero;
