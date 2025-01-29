import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import { toolLogos, technologyLogos } from "../../utils/swiperData";
import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <section className="maxWidth text-white px-5 overflow-hidden relative">
      <div>
        <motion.h1
          className="mt-20 lg:text-5xl text-2xl font-medium"
          initial={{ x: "-7rem", opacity: "0.1" }}
          animate={{ x: 0, opacity: "1" }}
          transition={{ duration: 2, type: "spring" }}
        >
          Tech Stack
        </motion.h1>
        <p className="mt-5 w-full lg:max-w-[70%] text-[#c3c0c0]">
          Technologies I've been working with recently
        </p>
      </div>

      <Swiper {...sliderSettings} className="mt-10  overflow-visible">
        <SliderButton />

        {technologyLogos.map((tech, index) => (
          <SwiperSlide key={index}>
            <img
              src={tech.url}
              style={{ width: "105px", height: "105px" }}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tools Section */}

      <div>
        <motion.h1 className="mt-8 lg:text-5xl text-2xl font-medium"
        
          initial={{ x: "-7rem", opacity: "0.1" }}
          animate={{ x: 0, opacity: "1" }}
          transition={{ duration: 2, type: "spring" }}
        >Tools</motion.h1>
      </div>

      <Swiper {...sliderSettings} className="mt-10  overflow-visible">
        <SliderButton />

        {toolLogos.map((tech, index) => (
          <SwiperSlide key={index}>
            <img
              src={tech.url}
              style={{ width: "105px", height: "105px" }}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mb-20"></div>
    </section>
  );
}

function SliderButton() {
  const swiper = useSwiper();
  return (
    <div className="lg:absolute lg:right-0 lg:-top-0 flex space-x-2 lg:my-0 mt-5 items-center justify-center z-10">
      <button
        className="bg-white text-black outline-none border-none rounded-md p-1"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        &lt;
      </button>
      <button
        className="bg-white text-black outline-none border-none rounded-md p-1"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
}
