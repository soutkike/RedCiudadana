import React from "react";
import mainImage from "../images/info1.png";
import refineria from "../images/refineria.jpeg";
const About = () => {
  return (
    <>
      <section className="info-section mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
          <div className="flex flex-col justify-center w-full">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3 tracking-wide">
              ¿Qué es la Red MooCaALTAMA?
            </h3>
            <p className="leading-loose lg:text-lg text-justify">
              Es una red ciudadana de monitoreo de calidad del aire de acceso
              libre para poner al alcance de la población y de los gobiernos
              municipales una herramienta complementaria a las estaciones
              oficiales, para informar y fomentar el interés en la mejora de la
              calidad del aire de la Zona Metropolitana de los municipios de
              Altamira, Tampico y Cd. Madero en el sur de Tamaulipas.
            </p>
          </div>
          <img
            src={mainImage}
            alt=""
            className="object-cover w-full h-full mx-auto rounded-lg  "
          />

          <img
            src={refineria}
            alt=""
            className="object-cover w-full h-full mx-auto rounded-lg"
          />
          <div className="flex flex-col justify-center w-full">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3 tracking-wide">
              Antecedentes
            </h3>
            <p className=" text-justify md:text-sm lg:text-base leading-relaxed">
              La contaminación atmosférica es un grave problema provocado por la
              emisión de determinadas sustancias que provocan efectos
              perjudiciales para el medio ambiente y la salud. En la zona sur de
              Tamaulipas las enfermedades pulmonares obstructivas crónicas están
              entre las 10 principales causas de padecimientos de muerte. Las
              fuentes de emisión engloban a todas aquellas acciones,
              actividades, procesos u operaciones capaces de producir
              contaminantes del aire. La dispersión de los contaminantes en las
              zonas urbanas es un tema de suma importancia, ya que la medición
              puntual de los contaminantes típicos es influida por los factores
              meteorológicos. Para medir y evaluar el impacto de la
              contaminación del aire en la población y los recursos naturales,
              es indispensable contar con sistemas, redes y programas adecuados
              de medición de la calidad del aire y con la participación activa
              de la ciudadanía.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-semibold text-blue-500 mb-5">
              Justificacion
            </h3>
            <p className="text-justify px-5 leading-relaxed">
              El derecho a un medio ambiente sano, por lo tanto, es un derecho
              expresamente reconocido en el acervo normativo nacional y
              regional. La información es la principal herramienta para impulsar
              la participación ciudadana en la protección ambiental, por lo que
              es importante ponerla al alcance de todos, de tal manera que la
              información ambiental contribuya a propiciar la acción convergente
              de los diferentes actores a favor de una mejor calidad del aire.
              Este proyecto considera no solo el monitoreo de calidad de aire en
              la zona metropolitana de los municipios de Tampico, Cd. Madero y
              Altamira, sino que incorpora a la ciudadanía como parte esencial
              de una red de conocimiento para coadyuvar al desarrollo de
              estrategias de prevención y control, y políticas ambientales
              integrales
            </p>
          </div>
          <div className="">
            <h3 className="text-2xl text-center text-blue-500 font-semibold mb-5">
              Objetivo
            </h3>
            <p className="text-justify px-5 leading-relaxed">
              Construir una red de monitoreo ciudadana de acceso libre para
              poner al alcance de la población y de los gobiernos municipales
              una herramienta complementaria a las estaciones oficiales, para
              informar y fomentar el interés en la mejora de la calidad del aire
              de la Zona Metropolitana Tampico, Cd. Madero y Altamira.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
