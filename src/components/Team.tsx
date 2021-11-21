import React from "react";
import itcmLogo from "../images/logos/itcm.png";
import ipnLogo from "../images/logos/ipn.png";
import ciceseLogo from "../images/logos/cicese.png";
import uvLogo from "../images/logos/uv.png";
const Team = () => {
  return (
    <section
      id="equipo"
      className=" flex flex-col w-full info-section justify-center"
    >
      <div>
        <h3 className="text-4xl text-center  font-semibold text-blueTheme mt-12 lg:mt-2">
          Equipo de Trabajo
        </h3>
        <p className="text-center  text-gray-400">Instituciones Relacionadas</p>
        <div className="w-10/12 lg:w-8/12  mx-auto text-justify mt-6 mb-12 leading-relaxed">
          <p>
            Derivado del interés en conocer y contribuir a la solución de los
            problemas regionales y nacionales, un grupo de investigadores del
            Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada
            Unidad Altamira (CICATA Altamira) del Instituto Politécnico
            Nacional, el Instituto Tecnológico de Ciudad Madero, el Centro de
            Investigación en Mcicro y Nanotecnología (MICRONA) de la Universidad
            Veracruzana y el Centro de Investigación Científica y de Educación
            Superior de Ensenada (CICESE), estamos colaborando en un Proyecto de
            Ciencia Ciudadana para conocer la calidad del aire exterior e
            interior en la Zona Metropolitana de Tampico-Madero-Altamira, en el
            sur del Estado de Tamaulipas.
          </p>
          <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-4 mt-14">
            <div className="group h-36 w-full mx-auto">
              <img
                src={itcmLogo}
                alt=""
                className="object-contain w-full h-full transform transition duration-150 hover:scale-90"
              />
              <p className="text-center text-xs mt-1  hidden group-hover:block">
                {" "}
                Instituto Tecnologico de Ciudad Madero
              </p>
            </div>
            <div className="group  h-36 w-full mx-auto">
              <img
                src={ipnLogo}
                alt=""
                className="object-contain w-full h-full transform transition duration-150 hover:scale-90"
              />
              <p className="text-center text-xs mt-1 hidden group-hover:block ">
                {" "}
                Instituto Politecnico Nacional
              </p>
            </div>
            <div className="group  h-36 w-full mx-auto">
              <img
                src={ciceseLogo}
                alt=""
                className="object-contain w-full h-full transform transition duration-150 hover:scale-90"
              />
              <p className="text-center text-xs mt-1 hidden group-hover:block">
                {" "}
                Centro de Investigación Científica y de Educación Superior de
                Ensenada
              </p>
            </div>
            <div className="group relative h-36 w-full mx-auto">
              <img
                src={uvLogo}
                alt=""
                className="object-contain w-full h-full transform transition duration-150 hover:scale-90"
              />
              <p className="text-center text-xs hidden group-hover:block">
                Universidad Veracruzana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
