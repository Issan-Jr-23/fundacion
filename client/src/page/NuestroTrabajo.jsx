
import "../css/nuestroTrabajo.css"
import divider from "../../public/divider.png"
import ParallaxContainer from "../components/Parallax.jsx"
import ParallaxElement from "../components/ParallaxElement.jsx"

function NuestroTrabajo() {
  return (
    <ParallaxContainer>
      <ParallaxElement>
        <div className=" nuestro-trabajo-00 flex ">
          <h2 className="nuestro-trabajo-00-title">Quienes somos</h2>
          <span className="span-nuestro-trabajo-00-title">
            <p className="span-nuestro-trabajo-00-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam recusandae perspiciatis accusamus molestias nobis voluptatum explicabo aspernatur harum natus laborum nostrum ullam ratione numquam asperiores illo, deleniti tenetur. Cumque.</p>
          </span>
          <div className="nuestro-trabajo-01">
            <article className="nuestro-trabajo-article-00">
              <span className="span-numero-card">01.</span>
              <img className="nuestro-trabajo-article-00-img" src={divider} alt="" />
              <h2>La Fundación</h2>
              <span className="nuestro-trabajo-article-span-00" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aspernatur, voluptas alias perspiciatis ut illo facilis qui deserunt magni exercitationem. </span>
              {/* <p className="nuestro-trabajo-article-span-00-ver-mas">Read More...</p> */}
            </article>
            <article className="nuestro-trabajo-article-00">
              <span className="span-numero-card">02.</span>
              <img className="nuestro-trabajo-article-00-img" src={divider} alt="" />
              <h2>Misión</h2>
              <span className="nuestro-trabajo-article-span-00" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore rem est eius quidem voluptas velit ipsam optio iusto itaque ab.  </span>
              {/* <p className="nuestro-trabajo-article-span-00-ver-mas">Read More...</p> */}
            </article>
            <article className="nuestro-trabajo-article-00">
              <span className="span-numero-card">03.</span>
              <img className="nuestro-trabajo-article-00-img" src={divider} alt="" />
              <h2>Visión</h2>

              <span className="nuestro-trabajo-article-span-00" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore rem est eius quidem voluptas velit ipsam optio iusto itaque ab.  </span>
              {/* <p className="nuestro-trabajo-article-span-00-ver-mas">Read More...</p> */}
            </article>
            <article className="nuestro-trabajo-article-00">
              <span className="span-numero-card">04.</span>
              <img className="nuestro-trabajo-article-00-img" src={divider} alt="" />
              <h2>Nuestro proceso</h2>
              <span className="nuestro-trabajo-article-span-00" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore rem est eius quidem voluptas velit ipsam optio iusto itaque ab.  </span>
              {/* <p className="nuestro-trabajo-article-span-00-ver-mas">Read More...</p> */}
            </article>

          </div>
        </div>
      </ParallaxElement>
    </ParallaxContainer>
  )
}

export default NuestroTrabajo