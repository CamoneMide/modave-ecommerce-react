import {
  Container,
  CustBtnModv,
  ScrollerEndlessIcons,
  SectionHead,
  SectionSubHead,
  TopHeroReUse,
} from "../components";
import aboutUsImg from "../assets/images/about-us.jpg";
import ShopIcons from "./ShopIcons";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BiLogoFacebook } from "react-icons/bi";
import { MdOutlineFormatQuote } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { aboutTabs, abtPgRevs, patnrIcons, teams } from "../constants";
import { FadeUp } from "../animations";

const AboutUs = () => {
  return (
    <section className="">
      <div>
        <TopHeroReUse text={"About"} />
      </div>

      <div className="pt-[60px] lg:pt-[80px] w-full bg-[var(--text-color-white)] px-[20px] md:px-[30px] lg:px-0">
        <div className="mx-auto w-full max-w-[1290px]">
          <section data-scroll-section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px]">
              <div className="flex size-full max-h-[412px]">
                <img
                  src={aboutUsImg}
                  alt="aboutUs-HeroImg"
                  className="size-full object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col overflow-hidden">
                <FadeUp distance={40} duration={0.5} delay={0.1}>
                  <div className="flex flex-col gap-[20px]">
                    <h4 className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color)]">
                      Modave – Offering rare and beautiful items worldwide
                    </h4>
                    <div className="w-full overflow-hidden">
                      <Tabs defaultValue={aboutTabs[0].id} className="w-full">
                        <TabsList className="categTabs flex justify-start items-center bg-transparent p-0 gap-[15px] lg:gap-[30px] mb-[16px]">
                          {aboutTabs.map((tab) => (
                            <TabsTrigger
                              key={tab.id}
                              value={tab.id}
                              className="relative font-[600] text-[16px] m-0 py-1 ring-0 text-[var(--text-color-inActive)] hover:text-[rgba(24,24,24,0.8)] data-[state=active]:text-[var(--text-color)] shadow-none transition-all duration-300 ease-in-out focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:shadow-none abtPgElmnt"
                            >
                              {tab.title}
                            </TabsTrigger>
                          ))}
                        </TabsList>

                        {aboutTabs.map((tab) => (
                          <TabsContent
                            key={tab.id}
                            value={tab.id}
                            className="abtPgCont"
                          >
                            <div>{tab.itemText}</div>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                    <div className="mt-[12px] flex">
                      <CustBtnModv
                        href={"/"}
                        text={"Read More"}
                        borderFull
                        border
                        lite={false}
                      />
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
            <div>
              <ShopIcons />
            </div>
            <section className="bg-[var(--text-color-white)] pb-[60px] lg:pb-[80px]">
              <div className="flex flex-col items-center gap-[12px] mb-[40px]">
                <div>
                  <SectionHead text={"Meet Our Teams"} />
                </div>
                <SectionSubHead
                  text={
                    "Discover exceptional experiences through testimonials from our satisfied customers."
                  }
                />
              </div>
              <section className="bg-[var(--text-color-white)]">
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
                  {teams.map((team) => (
                    <SwiperSlide key={team.id}>
                      <div className="flex flex-col gap-[20px] group/team">
                        <div className="flex rounded-[12px] overflow-hidden">
                          <img
                            src={team.imgSrc}
                            alt={`team-${team.id}`}
                            className="object-cover size-full group-hover/team:scale-[1.12] imgTrans"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between gap-[10px] w-full h-[54px]">
                          <div className="flex flex-col gap-[4px]">
                            <div className="relative group/teamL">
                              <a
                                href={team.href}
                                className="text-[16px] md:text-[20px] text-[var(--text-color)] group-hover/teamL:text-[var(--text-color-active)] font-[500] navTrans leading-[0%] group-hover/team:font-[600]"
                              >
                                {team.name}
                              </a>
                              <span className="absolute bottom-[3px] left-0 h-[1.2px] w-[0%] group-hover/team:w-[100%] bg-[var(--text-color)] group-hover/teamL:bg-[var(--text-color-active)] transition-all duration-300 ease-in-out" />
                            </div>
                            <h6 className="text-[14px] text-[var(--text-color-reduced)] font-[400] -mt-[3px]">
                              {team.position}
                            </h6>
                          </div>
                          <div className="flex size-[48px] items-center justify-center rounded-full border-[1px] border-[#E9E9E9] bg-[var(--text-color-white)] hover:bg-[rgb(59,89,152)] text-[var(--text-color)] hover:text-[var(--text-color-white)] transition-all duration-300 cursor-pointer">
                            <BiLogoFacebook size={24} />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </section>
            </section>
          </section>
        </div>
      </div>
      <div className="w-full overflow-hidden py-[30px] lg:py-[40px] bg-[#F7F7F7] cursor-pointer">
        <ScrollerEndlessIcons
          direction="left"
          baseSpeed={60}
          pauseOnHover={true}
          colrRight="#F7F7F7"
          colrLeft="#F7F7F7"
        >
          {patnrIcons.map((item) => (
            <div key={item.id} className="w-full max-w-[140px] h-[40px]">
              <img
                src={item.imgSrc}
                alt={`patnIcon-${item.id}`}
                className="object-fill size-full"
              />
            </div>
          ))}
          {patnrIcons.map((item) => (
            <div key={item.id} className="w-full max-w-[140px] h-[40px]">
              <img
                src={item.imgSrc}
                alt={`patnIcon-${item.id}`}
                className="object-fill size-full"
              />
            </div>
          ))}
        </ScrollerEndlessIcons>
      </div>
      <section className="py-[60px] lg:py-[80px] w-full bg-[var(--text-color-white)]">
        <Container>
          <div className="flex flex-col items-center gap-[12px] mb-[10px]">
            <div>
              <SectionHead text={"Customer Review"} />
            </div>
          </div>
          <section className="bg-[var(--text-color-white)]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              breakpoints={{
                575: {
                  spaceBetween: 15,
                  slidesPerView: 1,
                },
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
              className="testiSwiper cursor-grab"
            >
              {abtPgRevs.map((rev) => (
                <SwiperSlide key={rev.id}>
                  <div className="flex flex-col p-[32px] gap-[8px] border-[2px] border-[#E9E9E9] hover:border-[var(--text-color)] duration-300 ease-in-out transition-all rounded-[12px]">
                    <div className="size-[40px] rounded-full bg-[var(--text-color)] flex items-center justify-center text-[var(--text-color-white)]">
                      <MdOutlineFormatQuote size={24} />
                    </div>
                    <h4 className="text-[16px] font-[500] text-[var(--text-color)]">
                      {rev.title}
                    </h4>
                    <p className="text-[16px] font-[400] text-[var(--text-color-inActive)]">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                    <div className="flex flex-col gap-[4px] mt-[8px] mb-[20px]">
                      <h6 className="text-[16px] font-[500] text-[var(--text-color)] ">
                        {rev.name}
                      </h6>
                      <div className="flex flex-row gap-[2px] items-center text-[var(--text-color-active)] text-[15px]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </Container>
      </section>
    </section>
  );
};

export default AboutUs;
