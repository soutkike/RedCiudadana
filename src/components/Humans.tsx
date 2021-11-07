import React from "react";
import TeamCard from "./TeamCard";
import imageEnrique from "../images/colaboradores/enrique.png";
import imageErika from "../images/colaboradores/erika.png";
import imageFelipec from "../images/colaboradores/felipec.png";
import imageDavid from "../images/colaboradores/david.jpg";
import imageMayte from "../images/colaboradores/mayte.png";

const Humans = () => (
  <>
    <section className="flex flex-col w-full justify-center info-section">
      <div className="mb-8 text-center">
        <p className="text-sm lg:text-md text-gray-500">
          Conoce a quienes hacen realidad este proyecto
        </p>
        <h3 className="text-xl lg:text-3xl text-blueTheme font-semibold">
          Colaboradores
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto max-w-6xl">
        <TeamCard
          fullName="Dr. David Rivas"
          occupation="Profesor e Investigador"
          photo={imageDavid}
          about={
            "CICESE, Departamento de Oceanografía Biológica, Investigador Titular y Jefe de Departamento.Nivel I del SNI, Investigación: Modelos numéricos oceánicos de interacción físico-biológica, análisis de datos geofísicos, variabilidad climática."
          }
        />

        <TeamCard
          fullName="Dr. Felipe Caballero"
          occupation="Profesor e Investigador"
          photo={imageFelipec}
          about="Instituto Politécnico Nacional
Líder del Grupo de Materiales y Tecnologías
para Energía, Salud y Medio Ambiente (GESMAT)
CICATA Altamira
Investigador Nacional Nivel 2
Miembro de la Academia Mexicana de Ciencias
"
        />

        <TeamCard
          fullName="Dra. Erika Alarcón"
          occupation="Profesora"
          photo={imageErika}
          about={
            "TECNM, Instituto Tecnológico de Cd. Madero, Departamento de Ingeniería Química y Bioquímica. Profesor de Enseñanza Superior de Tiempo Completo. Líder del Cuerpo Académico Prospectiva Ambiental"
          }
        />

        <TeamCard
          fullName="Mayte Lima"
          occupation="TSU Nanotecnología Área Materiales"
          photo={imageMayte}
          about={""}
        />

        <TeamCard
          fullName="Enrique Castillo"
          occupation="Desarrollador de Software en zeti.ai"
          photo={imageEnrique}
          about={
            "Desarrollador web frontend, entusiasta de las tecnologías descentralizadas basadas en blockchain y futuro ingeniero."
          }
        />

        <TeamCard
          fullName="Lorem Ipsum"
          occupation="Lorem Ipsum"
          photo=""
          about="Lorem Ipsum"
        />
      </div>
    </section>
  </>
);

export default Humans;
