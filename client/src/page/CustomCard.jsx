// import { Button } from "@nextui-org/react"
import dall from "../../public/DALLE.png"
import "../css/card.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

AOS.init();




const CustomCard = () => {
  return (
    <div className="flex class-00-fondo" >
      <div className=" class-00  ">
        <section className="section-01">
          <h1 className="section-01-title"
            data-aos="fade-down"
            data-aos-duration="800"
          >OBRART Manos que Alimentan Corazones</h1>

          <p className="section-01-parrafo"
            data-aos="fade-right"
            data-aos-duration="1000"
          >Nos dedicamos a brindarle apoyo nutricional a los ancianos, ofreciendo alimentos, cariño y asistencia para mejorar su calidad de vida y bienestar</p>

          <span className="section-01-span-btn"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <button className="section-01-span-btn-01 text-white font-semibold rounded-full" style={{ backgroundColor: "#008cff" }}>Ver Acciones</button>
            <button className="section-01-span-btn-02 text-white  font-semibold rounded-full" style={{ backgroundColor: "#008cff" }}>Transforma Vidas</button>
          </span>

        </section>
      </div>
      <div className=" cont-dall-img " data-aos="fade-up"
        data-aos-duration="1200">

        <section className="section-container-dall  mt-5">
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide> <img src={dall} alt="" /></SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
          </>

        </section>
      </div>
    </div>
  )
}

export default CustomCard