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
    <div className='border-2 border-red-500'
      style={{minHeight:"100vh"}}
    >
      <section className='border-4 border-green-500 flex flex-wrap'
        style={{
          minHeight: "100vh"
        }}
      >


    <div className=' w-6/12  flex flex-col items-center justify-center'>
        <section className='flex justify-evenly items-center h-2/6  w-full flex-col'>
          <img src={Logo} alt="" />
          <article className='text-center flex justify-center flex-col items-center'>
            <h2 className="font-semibold"
              style={{fontSize: "40px"}}
            >SELECCIONA LA ESP A LA QUE PERTENECES</h2>
            <p className='w-9/12 text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et fuga quos ducimus, impedit tenetur recusandae nisi minus praesentium nemo.</p>
          </article>
        <article className=' w-full flex justify-evenly '
        >
        <Button className='w-32 text-base uppercase mt-5' color='primary' onClick={handleOpenPDFS}>
          eps sanitas
        </Button>

       
            <Button className='w-32 text-base uppercase mt-5' color='danger' onClick={handleOpenPDFC}>
              EPS Cajacopi
            </Button>
        </article>
        </section>
    </div>
    <div className=' w-6/12 flex items-center justify-center'

    >
      {/* <div className='flex justify-center items-center flex-col'>

        <h2 className='text-5xl font-semibold'>IPS MEDIGROUP</h2>
        <p className='w-9/12 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam nam laudantium iste numquam ad alias obcaecati impedit! Fugiat earum voluptates animi.</p>
      </div> */}
        <img className='w-96' src={Meco} alt="" />
    </div>

      </section>
    
    </div>
  )
}

