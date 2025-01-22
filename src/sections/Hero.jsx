import React from "react";
import { heroSects } from "../constants";
import { Button, Container } from "../components";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <>
      <section></section>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // effect={"fade"}
        autoplay={{ delay: 5000 }}
        loop
      >
        {heroSects.map((heroSect) => {
          return (
            <SwiperSlide key={heroSect.id}>
              <div className="relative dynaImg lg:h-[calc(100dvh - 50) px]">
                <div className="h-full">
                  <img
                    src={heroSect.src}
                    alt="heroImg"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Container className="absolute inset-0 flex flex-col justify-end text-[--text-color-white] gap-[12px] px-[20px] md:px-[30px] pb-[50px] absDiv">
                  <p className="text-[12px] font-[600]">{heroSect.heroP}</p>
                  <div className="text-[30px] md:text-[50px] lg:text-[80px] font-[500] leading-[40px] md:leading-[58px] lg:leading-[88px]">
                    {heroSect.heroText1}
                    <br />
                    {heroSect.heroText2}
                  </div>
                  <div className="flex mt-[14px] lg:mt-[24px]">
                    <Button
                      href={heroSect.heroBHref}
                      text={"Explore Collection"}
                      lite={true}
                    />
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
