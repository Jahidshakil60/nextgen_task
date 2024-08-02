"use client";
import React from "react";
import SectionHead from "./shared/SectionHead";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "./shared/Button";

function Section7() {
  return (
    <section className="g__container py-14">
      <SectionHead />
      <div className="mt-14">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
          {[...Array(6)].map((data, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div className="relative">
                  <img src="/landingPage/hero.png" alt="slide_image" />
                  <span className="bg-[#FFE600] px-6 py-2 text-base rounded-full absolute bottom-10 left-[50%] translate-x-[-50%]">
                    Branch {i + 1}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Button data="See More " />
      </div>
    </section>
  );
}

export default Section7;
