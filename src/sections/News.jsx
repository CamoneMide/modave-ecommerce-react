import { Container, SectionHead, SectionSubHead } from "../components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { newsSects } from "../constants";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <section className="bg-[var(--text-color-white)] pb-[60px] lg:-pb[80px]">
        <Container>
          <div className="text-center pb-[10px]">
            <div className="mb-[8px]">
              <SectionHead text={"News insight"} />
            </div>
            <div>
              <SectionSubHead
                text={
                  "Browse our Top Trending: the hottest picks loved by all."
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
                slidesPerView: 2,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            className="testiSwiper"
          >
            {newsSects.slice(0, 4).map((newsSect) => (
              <SwiperSlide key={newsSect.id}>
                <div className="flex flex-col w-full h-full gap-[12px] newsMain">
                  <div className="flex flex-col overflow-hidden rounded-[12px] mb-[4px]">
                    <img
                      src={newsSect.src}
                      alt="blog-pic"
                      className="object-cover w-full h-full newsImg"
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h6 className="flex text-[12px] text-[var(--text-color-reduced)] font-[600] gap-[12px]">
                      {newsSect.day}
                      {"   "}
                      {newsSect.month}
                    </h6>
                    <Link
                      to={`/blog/${newsSect.id}`}
                      className="text-[var(--text-color)] navTrans hover:text-[var(--text-color-active)] text-[16px] md:text-[18px] lg:text-[20px] newsLink p-0"
                    >
                      {newsSect.title}
                    </Link>
                    <p className="text-[16px] text-[var(--text-color-inActive)]">
                      {newsSect.text}
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

export default News;
