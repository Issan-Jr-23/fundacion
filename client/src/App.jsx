import './App.css'
import Head from "./page/CustomCard.jsx"
import Navbar from './components/Navbar.jsx'
import QuienesSomos from './page/QuienesSomos.jsx'
import NuestroTrabajo from './page/NuestroTrabajo.jsx'
import FormularioDeContacto from './page/FormularioDeContacto.jsx'
import Seccion from './page/Seccion.jsx'
import Testimonios from './page/Testimonios.jsx'
import Footer from './page/Footer.jsx'

export default function App() {

  return (
    <div className=''>
      <Navbar/>
      <Head />
      <NuestroTrabajo/>
      <QuienesSomos/>
      <Seccion/>
      <FormularioDeContacto/>
      <Testimonios/>
      <Footer/>
    </div>
  )
}

