import React from "react";

const Map = () => {
  return (
    <section id="mapa" className=" info-section flex w-full items-center ">
      <div className="max-w-6xl mx-auto map__height w-11/12">
        <h3 className=" text-center mb-12 md:text-xl lg:text-2xl">
          Zona Metropolitana del Sur de Tamaulipas: Altamira, Tampico y Cd.
          Madero
        </h3>
        <iframe
          className="w-full h-full"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=13390135c37743f5937459c653c09d2f&extent=-98.6514,22.021,-97.2149,22.6434&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
