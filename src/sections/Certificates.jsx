import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import certificates from "../certificates.js";

const Certificates = () => {
  return (
    <section className="certificates">
      <h1>Certificates</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {certificates.map((certificate) => {
          return (
            <SwiperSlide key={certificate.id}>
              <div className="certificate-card">
                <img src={certificate.image} alt={certificate.name} />
                {/* <p>{certificate.name}</p> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificates;
