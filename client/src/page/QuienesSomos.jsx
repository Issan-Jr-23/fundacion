import "../css/quienesSomos.css"
import quienesSomos from "../../public/quienes-somos.png"
import ParallaxYContainer from "../components/ParallaxY.jsx"
import ParallaxYElement from "../components/ParallaxElementY.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const QuienesSomos = () => {
  return (
    <ParallaxYContainer>
      <ParallaxYElement>
        <div className="quienes-somos-00 min-h-screen ">
          <div className="quienes-somos-01 " data-aos="zoom-in-right" data-aos-duration="1000">
            <img className="quienes-somos-01-img" src={quienesSomos} alt="" />
          </div>
          <div className="quienes-somos-02">
            <article className="quienes-somos-02-article">
              <h2 className="quienes-somos-02-article-title" data-aos="fade-left" data-aos-duration="800">Únete a Nosotros en la Misión de Apoyar a los Ancianos</h2>
              <div data-aos="fade-up" data-aos-duration="800">
                <p className="quienes-somos-02-article-parrafo"  >En la Fundación ObrArt, creemos que el cuidado de los ancianos es una responsabilidad compartida. Tu apoyo es fundamental para continuar con nuestra misión. Aquí te mostramos cómo puedes contribuir:</p>
                <p className="mt-3"><span className="span-parrafo-00">Donaciones Monetarias: </span>Cada aporte, grande o pequeño, ayuda a cubrir los costos de las comidas y operaciones.</p>
                <p className="mt-3"><span className="span-parrafo-00">Donaciones en Especie:</span> Aceptamos alimentos, materiales y otros bienes que puedan ser útiles en nuestro servicio diario.</p>
                <p className="mt-3"> <span className="span-parrafo-00"> Comparte Nuestra Causa:</span> Habla de nosotros en tus redes sociales, con amigos y familiares. La difusión es clave para ampliar nuestro alcance y atraer más apoyo.</p>
              </div>
            </article>
          </div>
        </div>
      </ParallaxYElement>
    </ParallaxYContainer>
  )
}

export default QuienesSomos