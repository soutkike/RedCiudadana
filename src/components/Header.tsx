import * as React from "react";
import logo from "../images/isotipo_recortado.png";

const Header = () => {
  return (
    <nav className="bg-white border-1 border-gray-600 flex justify-between items-center px-4 py-2">
      <div>
        <img src={logo} alt="Mocaaltama logo" className="h-14" />
      </div>
      <div>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme ">
          Inicio
        </a>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme  ">
          Antecedentes
        </a>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme  ">
          Equipo
        </a>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme  ">
          Ciudadanos
        </a>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme  ">
          Recursos
        </a>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme  ">
          Documentacion
        </a>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme  ">
          Encuestas
        </a>
        <a href="" className="text-gray-500 mr-8 hover:text-blueTheme  ">
          Mapa
        </a>
      </div>
    </nav>
  );
};

export default Header;
