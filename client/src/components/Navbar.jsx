import "../css/menu.css"
import logo from "../../public/logo-obrart.png"

const Navbar = () => {
  return (
    <div className=" nav-00-container w-full h-12 border-2 border-red-500  bg-white" style={{position:"fixed"}}>
      <nav className="nav-00">
        <figure className="nav-01-figure">
          <span className="nav-01-figure-span" >

          <img className="nav-01-figure-img" src={logo} alt="" />
          </span>
        </figure>
      <ul className=" nav-01-lista flex">
        <li ><a className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Inicio</a></li>
        <li ><a className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Quienes Somos</a></li>
        <li ><a className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Nuestro trabajo</a></li>
        <li ><a className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Como ayudar</a></li>
        <li ><a className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Noticias</a></li>
        <li ><a className=" text-white pr-3 pl-3 pt-1 pb-1" href="">Contacto</a></li>
        <li ><a className=" text-white pr-3 pl-3 pt-1 pb-1" href="">FAQs</a></li>
      </ul>

      </nav>
    </div>
  )
}

export default Navbar