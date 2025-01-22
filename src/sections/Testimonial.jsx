import React from "react";
import { Container, SectionHead, SectionSubHead } from "../components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { testySects } from "../constants";

const Testimonial = () => {
  return (
    <>
      <section className="bg-[var(--text-color-white)] py-[80px]">
        <Container>
          <div className="text-center">
            <div>
              <SectionHead text={"Customer Say!"} />
            </div>
            <div>
              <SectionSubHead
                text={
                  "Our customers adore our products, and we constantly aim to delight them."
                }
              />
            </div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween: 30,
                slidesPerView: 1.5,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
            }}
            pagination={{
              clickable: true,
            }}
            className="testiSwiper"
          >
            {testySects.map((testySect) => (
              <SwiperSlide key={testySect.id}>
                <div className="flex flex-row border-[1px] border-[#E9E9E9] rounded-[8px] overflow-hidden">
                  <div className="relative flex min-w-[200px] md:min-w-[240px]">
                    <img src={testySect.src} alt="user" />
                    <span className="absolute flex"></span>
                  </div>
                  <div className="flex flex-col p-[10px] md:p-[20px] gap-[8px]">
                    <div className="flex flex-row text-[15px] text-[#FFA534]">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div className="text-[var(--text-color-inActive)] text-[14px] leading-[20px] md:text-[16px] md:leading-[23px]">
                      <p>{testySect.text}</p>
                    </div>
                    <div className="flex flex-row text-[21px] gap-[6px] items-center mb-[22px]">
                      <h6 className="text-[var(--text-color)] text-[16px]">
                        {testySect.name}
                      </h6>
                      <i className="bx bx-check-circle text-[#34B233]"></i>
                    </div>
                    <div className="flex flex-row gap-[8px] pt-[20px] pb-[10px] border-t-[1px] border-t-[#E9E9E9] items-center">
                      <div className="flex overflow-clip rounded-full min-w-[50px] min-h-[50px]">
                        <img
                          src={testySect.srcUser}
                          alt="user"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col text-[var(--text-color)] text-[16px]">
                        <h6 className="font-[500]">{testySect.title}</h6>
                        <p className="font-[600]">{`$${testySect.price}.00`}</p>
                      </div>
                    </div>
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

export default Testimonial;
