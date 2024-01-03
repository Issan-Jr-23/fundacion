import './App.css'
import Head from "./page/CustomCard.jsx"
import Navbar from './components/Navbar.jsx'
import QuienesSomos from './page/QuienesSomos.jsx'
import NuestroTrabajo from './page/NuestroTrabajo.jsx'
import FormularioDeContacto from './page/FormularioDeContacto.jsx'

export default function App() {

  return (
    <div className=''>
      <Navbar/>
      <Head />
      <NuestroTrabajo/>
      <QuienesSomos/>
      <FormularioDeContacto/>
    
    </div>
  )
}

