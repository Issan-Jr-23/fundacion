import './App.css'
import Meco from "../public/doctor.webp"
import Logo from "../public/logo.webp"
import { Button } from '@nextui-org/react'
// import {Spacer,Button} from "@nextui-org/react";
import cajacopi from "./pdf/EPS-CAJACOPI.pdf"
import sanitas from "./pdf/EPS-SANITAS.pdf"

export default function App() {

  
  const handleOpenPDFC = () => {
    window.open(cajacopi, '_blank');
  };
  
  const handleOpenPDFS = () => {
    window.open(sanitas, '_blank');
  };

  return (
    <div className=''
      style={{minHeight:"100vh"}}
    >
      {/* <h1 className='text-5xl uppercase absolute font-semibold  mt-2 w-full text-center'>ips medigroup</h1> */}
      <section className=' flex hola'
        style={{
          minHeight: "100vh"
        }}
      >


    <div className='hola01 lg:w-6/12  flex flex-col items-center justify-center lg:justify-center'
      style={{display:"flex"}}
    >
        <section className='flex justify-evenly items-center lg:h-2/6  w-full flex-col'>
          <img className='hola-img lg:w-40' src={Logo} alt="" />
          <article className='hola-article text-center flex justify-center flex-col items-center'>
            <h2 className="hola-title font-semibold lg:text-4xl w-9/12"
            >Selecciona Tu EPS Asociada</h2>
            <p className='hola-p w-9/12 text-3xl lg:text-base font-medium mt-3 text-justify'>Descubre en <span className='underline text-green-700'>IPS MediGroup</span> la guía completa de servicios de salud para usuarios de EPS Sanitas y ESP Cajacopi, facilitando el acceso a información esencial y detallada.</p>
          </article>
        <article className='hola-art items-center w-full flex justify-evenly'
        >
        <Button className='button01 lg:w-40 lg:h-10 text-base uppercase mt-5' color='primary' onClick={handleOpenPDFS}>
          eps sanitas
        </Button>

       
            <Button className='button02 lg:w-40 lg:h-10  text-base uppercase mt-5' color='danger' onClick={handleOpenPDFC}>
              <div className='button02'>

              EPS Cajacopi
              </div>
            </Button>
        </article>
        </section>
    </div>
    <div className='hola-cont-img-meco w-6/12 flex items-center justify-center'

    >
      {/* <div className='flex justify-center items-center flex-col'>

        <h2 className='text-5xl font-semibold'>IPS MEDIGROUP</h2>
        <p className='w-9/12 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam nam laudantium iste numquam ad alias obcaecati impedit! Fugiat earum voluptates animi.</p>
      </div> */}
        <img className='hola-img-meco w-96 lg:w-72' src={Meco} alt="" />
    </div>

      </section>
    
    </div>
  )
}

