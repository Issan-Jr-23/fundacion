
import "../css/testimonios.css"
import agradecimiento from "../../public/agradecimiento-01.png"
import agradecimiento02 from "../../public/agradecimiento-02.png"
import agradecimiento03 from "../../public/agradecimiento-03.png"
import agradecimiento04 from "../../public/agradecimiento-04.png"

const Testimonios = () => {
  return (
    <div className="testimonios-00">
        <h2 className="testimonios-00-title">TESTIMONIALES</h2>
        <section className="testimonios-01">
            <article className="testimonios-01-card" >
                <img src={agradecimiento} alt="" />
                <h2 className="testimonios-01-card-title" >Lorem, ipsum.</h2>
                <span><p className="testimonios-01-card-descripcion" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repellendus?</p></span>
            </article>
            <article className="testimonios-01-card">
                <img src={agradecimiento02} alt=""/>
                <h2 className="testimonios-01-card-title">Lorem, ipsum.</h2>
                <span><p className="testimonios-01-card-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repellendus?</p></span>
            </article>
            <article className="testimonios-01-card" >
                <img src={agradecimiento03} alt="" />
                <h2 className="testimonios-01-card-title" >Lorem, ipsum.</h2>
                <span><p className="testimonios-01-card-descripcion" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repellendus?</p></span>
            </article>
            <article className="testimonios-01-card" >
                <img src={agradecimiento04} alt="" />
                <h2 className="testimonios-01-card-title" >Lorem, ipsum.</h2>
                <span><p className="testimonios-01-card-descripcion" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repellendus?</p></span>
            </article>

        </section>
    </div>
  )
}

export default Testimonios