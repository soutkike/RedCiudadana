import React from "react";
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";
import { GiVideoConference } from "@react-icons/all-files/gi/GiVideoConference";
import { GiPublicSpeaker } from "@react-icons/all-files/gi/GiPublicSpeaker";

const Resources = () => {
  return (
    <section
      id="recursos"
      className="h-screen w-full flex items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-11/12  h-3/6 gap-y-10 gap-x-14">
        <div className="flex flex-col justify-center">
          <h3 className="text-center md:text-left text-2xl lg:text-4xl text-blueTheme mb-3">
            Recursos
          </h3>
          <p className="text-center lg:text-left text-lg">
            Accede a todos los recursos del proyecto aqui.
          </p>
        </div>
        <div className="flex flex-col justify-center  gap-y-8">
          <button className="flex justify-center items-center bg-blue-700 max-w-sm py-4 text-white text-lg mx-auto w-80 rounded-lg">
            <GiPublicSpeaker color="#fff" size="22" />
            <p className="ml-2">Conferencias Relacionadas</p>
          </button>

          <button className="flex justify-center items-center bg-blue-700 max-w-sm py-4 text-white text-lg mx-auto w-80 rounded-lg">
            <GiVideoConference color="#fff" size="22" />
            <p className="ml-2">Talleres Virtuales</p>
          </button>
          <button className="flex justify-center items-center bg-blue-700 max-w-sm py-4 text-white text-lg mx-auto w-80 rounded-lg">
            <AiFillCamera color="#fff" size={"22"} />
            <p className="ml-2">Galería Fotográfica</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
