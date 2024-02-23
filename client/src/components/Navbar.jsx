import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/menu.css'; // Importa el archivo de estilos CSS
import logo from "../../public/logo-obrart.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav-00-container w-full" style={{ position: "fixed" }}>
      <nav className="nav-00">
        <figure className="nav-01-figure">
          <span className="nav-01-figure-span">
            {/* Cambia esto con tu imagen del logo */}
            <img className="nav-01-figure-img" src={logo} alt="" />
          </span>
        </figure>
        <ul className="nav-01-lista flex">
          <li>
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-white pr-3 pl-3 pt-1 pb-1 cursor-pointer ${activeLink === 1 ? 'active-navBar-link' : ''}`}
              onClick={() => handleClick(1)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="quienes-somos"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-white pr-3 pl-3 pt-1 pb-1 cursor-pointer ${activeLink === 2 ? 'active-navBar-link' : ''}`}
              onClick={() => handleClick(2)}
            > Quienes Somos
            </Link>
          </li>
          <li>
            <Link
              to="como-ayudar"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-white pr-3 pl-3 pt-1 pb-1 cursor-pointer ${activeLink === 2 ? 'active-navBar-link' : ''}`}
              onClick={() => handleClick(2)}
            > Como ayudar
            </Link>
          </li>
          <li>
            <Link
              to="testimonios"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-white pr-3 pl-3 pt-1 pb-1 cursor-pointer ${activeLink === 2 ? 'active-navBar-link' : ''}`}
              onClick={() => handleClick(2)}
            > Testimonios
            </Link>
          </li>
          {/* Asegúrate de cerrar los <li> correctamente aquí */}
          <li>
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              className={`text-white pr-3 pl-3 pt-1 pb-1 cursor-pointer ${activeLink === 5 ? 'active-navBar-link' : ''}`}
              onClick={() => handleClick(5)}
            > Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
