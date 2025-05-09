import { Container, SectionHead, SectionSubHead } from "../components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { shopGramSects } from "../constants";

const ShopInstagram = () => {
  return (
    <>
      <section className="bg-[var(--text-color-white)]">
        <Container>
          <div className="text-center pb-[10px]">
            <div className="mb-[8px]">
              <SectionHead text={"Shop Instagram"} />
            </div>
            <div>
              <SectionSubHead
                text={"Elevate your wardrobe with fresh finds today!"}
              />
            </div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              768: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
              1200: {
                spaceBetween: 10,
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
            }}
            className="testiSwiper"
          >
            {shopGramSects.map((shopGramSect) => (
              <SwiperSlide key={shopGramSect.id}>
                <div className="flex flex-col w-full h-full shopMain">
                  <div className="relative flex overflow-hidden rounded-[12px]">
                    <img
                      src={shopGramSect.src}
                      alt={`GalleryPicture-${shopGramSect.id}`}
                      className="object-cover w-full h-full shopImg"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <a href="" className="tlTip">
                        <Tooltip
                          content="View Product"
                          animation="duration-1000"
                          className="bg-[var(--text-color)] rounded-[2px] text-[12px] px-[8px] leading-[22px] py-[0] cursor-pointer"
                        >
                          <a
                            href={shopGramSect.href}
                            className="flex items-center justify-center w-[40px] h-[40px] text-[22px] bg-[var(--text-color-white)] rounded-full text-[var(--text-color)] navTrans box-border font-[400]"
                          >
                            <i className="fa-regular fa-eye"></i>
                          </a>
                        </Tooltip>
                      </a>
                    </span>
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

export default ShopInstagram;
