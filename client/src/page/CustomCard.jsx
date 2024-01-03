// import { Button } from "@nextui-org/react"
import dall from "../../public/DALLE.png"
import "../css/card.css"
const CustomCard = () => {
  return (
    <div className="flex class-00-fondo" >
      <div className=" class-00  min-h-screen w-6/12">
        <section className="section-01">
          <h1 className="section-01-title">OBRART Manos que Alimentan Corazones</h1>

          <p className="section-01-parrafo" >Nos dedicamos a brindarle apoyo nutricional a los ancianos, ofreciendo alimentos, cariño y asistencia para mejorar su calidad de vida y bienestar</p>

          <span className="section-01-span-btn">
            <button className="section-01-span-btn-01 text-white font-semibold rounded-full" style={{backgroundColor:"#ffa500"}}>Ver Acciones</button>
            <button className="section-01-span-btn-02 text-white  font-semibold rounded-full" style={{backgroundColor:"#ffa500"}}>Transforma Vidas</button>
          </span>

        </section>
      </div>
      <div className=" cont-dall-img  w-6/12" >

        <section className="section-container-dall">
          <img src={dall} alt="" className="dall-img" />

        </section>
      </div>
    </div>
  )
}

export default CustomCard