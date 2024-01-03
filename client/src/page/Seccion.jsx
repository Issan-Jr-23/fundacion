import { Button } from "@nextui-org/react"
import "../css/seccion.css"

const Seccion = () => {
  return (
    <div className="section-component-00" >
        <article className="section-component-01">
            <p className="section-component-01-parrafo mb-5" >¡Actúa ahora y sé parte de este cambio positivo!</p>
            <Button className="text-base font-semibold rounded-full text-white" style={{backgroundColor:"#ffa500"}}>Donar Ahora</Button>
        </article>

    </div>
  )
}

export default Seccion