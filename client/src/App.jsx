import React, { useRef } from 'react';
import './App.css'
import Head from "./page/CustomCard.jsx"
import Navbar from './components/Navbar.jsx'
import QuienesSomos from './page/QuienesSomos.jsx'
import NuestroTrabajo from './page/NuestroTrabajo.jsx'
import Seccion from './page/Seccion.jsx'
import Testimonios from './page/Testimonios.jsx'
import Footer from './page/Footer.jsx'
import 'animate.css';

export default function App() {

  const inicioRef = useRef(null);
  const nuestroTrabajoRef = useRef(null);
  const quienesSomosRef = useRef(null);
  const testimoniosRef = useRef(null);
  const footerRef = useRef(null);
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
      <div ref={nuestroTrabajoRef} id="quienes-somos">
        <NuestroTrabajo />
      </div>
      <div ref={quienesSomosRef} id="como-ayudar">
        <QuienesSomos/>
      </div>
      <Seccion/>
      <div ref={testimoniosRef} id="testimonios">
      <Testimonios/>
      </div>
      <div ref={footerRef} id="contacto">
      <Footer/>
      </div>
    </div>
  );
}

