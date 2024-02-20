import React, { useEffect, useRef } from 'react';
import './App.css'
import Head from "./page/CustomCard.jsx"
import Navbar from './components/Navbar.jsx'
import QuienesSomos from './page/QuienesSomos.jsx'
import NuestroTrabajo from './page/NuestroTrabajo.jsx'
import FormularioDeContacto from './page/FormularioDeContacto.jsx'
import Seccion from './page/Seccion.jsx'
import Testimonios from './page/Testimonios.jsx'
import Footer from './page/Footer.jsx'
import 'animate.css';
import { Element } from 'react-scroll';

export default function App() {

  const inicioRef = useRef(null);
  const nuestroTrabajoRef = useRef(null);
  const quienesSomosRef = useRef(null);
  // Continúa agregando referencias según sea necesario

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className='overflow-hidden'>
      <Navbar scrollToSection={scrollToSection} inicioRef={inicioRef} nuestroTrabajoRef={nuestroTrabajoRef} quienesSomosRef={quienesSomosRef} />
      <div ref={inicioRef} id="inicio">
        <Head />
      </div>
      <div ref={nuestroTrabajoRef} id="nuestro-trabajo">
        <NuestroTrabajo />
      </div>
      <div ref={quienesSomosRef} id="quienes-somos">
        <QuienesSomos />
      </div>
      <Seccion />
      <Testimonios />
      <Footer />
    </div>
  );

}

