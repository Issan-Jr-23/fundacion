
import { Button } from "@nextui-org/react"
import "../css/formulario.css"
import info from "../../public/informacion.png"
import imgAnciano from "../../public/anciano-formulario.png"
 
const FormularioDeContacto = () => {
  return (
    <div className=" formulario-00 flex min-h-screen">
      <div className=" formulario-01">
          <article className="formulario-01-article">
            <img className="formulario-01-article-img" src={imgAnciano} alt="" />
          </article>
      </div>
      <div className=" formulario-02">
        <article className="formulario-02-article">
          <h2 className="formulario-02-article-title">Regístrate ahora</h2>
          <form action="" className="formulario-02-article-title-form flex flex-col">
            <input type="text" placeholder="Tu Nombre" className="pl-5 bg-gray-100 mb-5 h-12 rounded border-1" />
            <input type="text" placeholder="Tu correo electrónico" className="pl-5 bg-gray-100 mb-5 h-12 rounded border-1" />
            <input type="text" placeholder="Número de teléfono" className="pl-5 bg-gray-100 mb-5 h-12 rounded border-1" />
            <textarea className="formulario-02-article-title-form-textarea bg-gray-100 border-1 rounded" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
            <span>
              <p className="flex items-center " > <img className="info-icon-formulario" src={info} alt="" /> Nunca compartiremos tu información personal.</p>
              <span className="formulario-02-article-form-span" >
                <Button type="submit" className="formulario-02-article-form-span-button rounded-full" style={{backgroundColor:"#ffa500"}}>
                  Enviar
                </Button>
              </span>
            </span>
          </form>
        </article>
      </div>

    </div>
  )
}

export default FormularioDeContacto