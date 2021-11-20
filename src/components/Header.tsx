import * as React from "react";
const { useState } = React;
import logo from "../images/isotipo_recortado.png";

const Header = () => {
  const [hidden, setHidden] = useState(true);

  const toggleHiden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-white border-1 border-gray-600 flex justify-between items-center px-4 pt-2">
        <div>
          <img src={logo} alt="Mocaaltama logo" className="h-14" />
        </div>
        <div className="hidden lg:block text-sm">
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme ">
            Inicio
          </a>
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme  ">
            Antecedentes
          </a>
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme  ">
            Equipo
          </a>
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme  ">
            Ciudadanos
          </a>
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme  ">
            Recursos
          </a>
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme  ">
            Documentacion
          </a>
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme  ">
            Encuestas
          </a>
          <a href="" className="text-gray-500 mr-7 hover:text-blueTheme  ">
            Mapa
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => toggleHiden()}
            className="outline-none mobile-menu-button"
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-blueTheme"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className={hidden && "hidden"}>
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="
                block
                text-sm
                px-2
                py-4
                font-semibold
                text-center
              "
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="
                block
                text-sm
                px-2
                py-4
                hover:blueTheme
                transition
                duration-300
                text-center
              "
            >
              Antecedentes
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="
                block
                text-sm
                px-2
                py-4
                hover:blueTheme
                transition
                duration-300
                text-center
              "
            >
              Equipo de Trabajo
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="
                block
                text-sm
                px-2
                py-4
                hover:blueTheme
                transition
                duration-300
                text-center
              "
            >
              Ciudadanos
            </a>
            <a
              href="#contact"
              className="
                block
                text-sm
                px-2
                py-4
                hover:blueTheme
                transition
                duration-300
                text-center
              "
            >
              Recursos
            </a>
            <a
              href="#contact"
              className="
                block
                text-sm
                px-2
                py-4
                hover:blueTheme
                transition
                duration-300
                text-center
              "
            >
              Documentación
            </a>
            <a
              href="#contact"
              className="
                block
                text-sm
                px-2
                py-4
                hover:blueTheme
                transition
                duration-300
                text-center
              "
            >
              Encuestas
            </a>
            <a
              href="#mapa"
              className="
                block
                text-sm
                px-2
                py-4
                hover:blueTheme
                transition
                duration-300
                text-center
              "
            >
              Mapa
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
