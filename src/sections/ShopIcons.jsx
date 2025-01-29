import { Container } from "../components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { shopIconsSects } from "../constants";

const ShopIcons = () => {
  return (
    <>
      <section className="bg-[var(--text-color-white)] py-[60px] lg:py-[80px]">
        <Container>
          <Swiper
            modules={[Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              575: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
            }}
            className="testiSwiper"
          >
            {shopIconsSects.map((shopIconsSect) => (
              <SwiperSlide key={shopIconsSect.id}>
                <div className="flex flex-col w-full h-full justify-center items-center gap-[20px]">
                  <div className="flex text-[39px] text-[var(--text-color)]">
                    <i className={shopIconsSect.iconClass}></i>
                  </div>
                  <div className="text-center flex flex-col gap-[8px]">
                    <h6 className="text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[var(--text-color)]">
                      {shopIconsSect.textH6}
                    </h6>
                    <p className="text-[16px] font-[400] text-[var(--text-color-inActive)]">
                      {shopIconsSect.textP}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default ShopIcons;
