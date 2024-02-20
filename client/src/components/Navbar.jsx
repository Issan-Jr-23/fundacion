import "../css/menu.css"
import logo from "../../public/logo-obrart.png"
import { Link } from "@nextui-org/react"

const Navbar = (scrollToSection, inicioRef, nuestroTrabajoRef, quienesSomosRef) => {
  return (
    <div className=" nav-00-container w-full" style={{position:"fixed"}}>
      <nav className="nav-00">
        <figure className="nav-01-figure">
          <span className="nav-01-figure-span" >

          <img className="nav-01-figure-img" src={logo} alt="" />
          </span>
        </figure>
      <ul className=" nav-01-lista flex">
        <li onClick={() => scrollToSection(inicioRef)} ><Link className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Inicio</Link></li>
        <li ><Link  to="nuestro-trabajo" spy={true} smooth={true} duration={500} className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Quienes Somos</Link></li>
        <li ><Link className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Nuestro trabajo</Link></li>
        <li ><Link className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Como ayudar</Link></li>
        <li ><aLink className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Noticias</aLink></li>
        <li ><Link className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Contacto</Link></li>
      </ul>

      </nav>
    </div>
  )
}

export default Navbar