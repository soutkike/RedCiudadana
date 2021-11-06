import React from "react";
import itcmLogo from "../images/logos/itcm.png";
import ipnLogo from "../images/logos/ipn.png";
import ciceseLogo from "../images/logos/cicese.png";
import uvLogo from "../images/logos/uv.png";
const Team = () => {
  return (
    <section className="mt-20">
      <h3 className="text-3xl text-center  font-semibold">Equipo de Trabajo</h3>
      <p className="text-center text-sm text-blueTheme">
        Instituciones Relacionadas
      </p>
      <div className="w-10/12  mx-auto text-justify mt-6 leading-relaxed">
        <p>
          Derivado del interés en conocer y contribuir a la solución de los
          problemas regionales y nacionales, un grupo de investigadores del
          Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada
          Unidad Altamira (CICATA Altamira) del Instituto Politécnico Nacional,
          el Instituto Tecnológico de Ciudad Madero, el Centro de Investigación
          en Mcicro y Nanotecnología (MICRONA) de la Universidad Veracruzana y
          el Centro de Investigación Científica y de Educación Superior de
          Ensenada (CICESE), estamos colaborando en un Proyecto de Ciencia
          Ciudadana para conocer la calidad del aire exterior e interior en la
          Zona Metropolitana de Tampico-Madero-Altamira, en el sur del Estado de
          Tamaulipas.
        </p>
        <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-4 mt-10">
          <div className="relative h-36 w-full mx-auto">
            <img
              src={itcmLogo}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="relative h-36 w-full mx-auto">
            <img
              src={ipnLogo}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="relative h-36 w-full mx-auto">
            <img
              src={ciceseLogo}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="relative h-36 w-full mx-auto">
            <img src={uvLogo} alt="" className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
      <p></p>
    </section>
  );
};

export default Team;
