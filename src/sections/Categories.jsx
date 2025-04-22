import { AnchorBtn, Container, ProductCard, SectionHead } from "../components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Tabs
import { Tabs, Tooltip } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { categSects, tabsSection } from "../constants";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <section className="bg-[var(--text-color-white)]">
        <Container className="pt-[45px] lg:pt-[65px] relative">
          <div className="flex flex-col gap-[8px] items-center md:justify-between md:flex-row mb-[30px] md:mb-[44px] justify-self-center md:justify-self-auto">
            <div>
              <SectionHead text={"Categories you might like"} />
            </div>
            <div>
              <AnchorBtn
                href={"/collection"}
                color="black"
                text={"View All Collection"}
              />
            </div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={15}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            pagination={{
              clickable: true,
            }}
            loop
            className="categSwiper"
          >
            {categSects.map((categSect) => (
              <SwiperSlide key={categSect.id} className="relative">
                <div className="flex flex-col items-center gap-[6px]">
                  <div className="flex overflow-hidden rounded-full">
                    <img
                      src={categSect.src}
                      alt="cls-circle"
                      className="object-cover w-full h-full hover:scale-[1.12] imgTrans"
                    />
                  </div>
                  <a
                    href="/collection"
                    className="flex justify-center categLink text-[var(--text-color)] hover:text-[var(--text-color-active)]"
                  >
                    <h6 className="text-[16px] md:text-[20px] font-[500] mt-[10px]">
                      {categSect.textH6}
                    </h6>
                    <i className="bx bx-arrow-back rotate-[135deg] font-[500] text-[18px] lg:text-[20px] -ml-[14px] opacity-0 navTrans text-[var(--text-color-active)]"></i>
                  </a>

                  <span className="text-[16px] text-[var(--text-color-inActive)]">
                    {`${categSect.count} items`}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>

        <Container className="pt-[80px] pb-[90px]">
          {/* <div className="flex flex-col items-center justify-center w-full" /> */}
          <div>
            <Tabs
              aria-label="Tabs in Categories"
              variant="underline"
              className="justify-start gap-[10px] md:justify-center categTabs"
            >
              {tabsSection.map((tab) => {
                return (
                  <Tabs.Item title={tab.title} key={tab.id}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[30px] gap-x-[15px] lg:gap-x-[30px]">
                      {tab.items.map((item) => (
                        <ProductCard
                          key={item.id}
                          id={item.id}
                          imgSrcFront={item.srcFront}
                          imgSrcBack={item.srcBack}
                          productName={item.name}
                          productPrice={item.price}
                        />
                      ))}
                    </div>
                  </Tabs.Item>
                );
              })}
            </Tabs>
            {/* <div className="flex flex-row"></div>
            <div className="grid"></div> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Categories;
