import React from "react";
import { AnchorBtn, Button, Container } from "../components";
import banner1 from "../assets/images/banner-cls1.jpg";
import banner2 from "../assets/images/banner-cls2.jpg";
import imgCount1 from "../assets/images/img-countdown1.png";

const Deal = () => {
  return (
    <>
      <section className="pb-[80px] lg:pb-[60px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[15px]">
          <div className="flex flex-col justify-between">
            <div className="overflow-hidden">
              <img
                src={banner1}
                alt="banner1"
                className="hover:scale-[1.1] imgTrans"
              />
            </div>
            <div>
              <a
                href=""
                className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans"
              >
                Crossbody bag
              </a>
            </div>

            <p className="text-[16px]  font-[400] text-[var(--text-color)] my-[10px] md:my-[0]">
              From beach to party: Perfect styles for every occasion.
            </p>
            <div>
              <AnchorBtn href={"/"} text="Shop Now" />
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src={banner2}
                alt="banner2"
                className="hover:scale-[1.1] imgTrans"
              />
            </div>
            <div className="absolute top-[40%] translate-x-[25%] flex flex-col items-center justify-center text-[var(--text-color-white)]">
              <div>
                <a
                  href=""
                  className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color-white)] hover:text-[var(--text-color-active)] navTrans"
                >
                  Capsule Collection
                </a>
              </div>

              <p className="text-[16px] font-[400] mt-[10px] mb-[30px]">
                Reserved for special occasions
              </p>
              <div>
                <AnchorBtn href={"/"} text="Shop Now" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-[80px] bg-[var(--area-background-color)] relative">
        <Container className="flex flex-col justify-between lg:items-center lg:flex-row">
          <div className="flex flex-col justify-center gap-[24px]">
            <div>
              <a
                href="/"
                className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans"
              >
                Limited-Time Deals On!
              </a>
            </div>

            <p className="text-[16px]  font-[400] text-[var(--text-color)]">
              Up to 50% Off Selected Styles. Don't Miss Out.
            </p>
            <div className="flex">
              <Button href={"/"} text={"Shop Now"} lite={false} />
            </div>
          </div>
          <div>Time</div>
        </Container>
        <div className="absolute hidden md:flex top-0 bottom-0 lg:right-[40%] md:right-0">
          <img src={imgCount1} alt="imgCount1" className="" />
        </div>
      </section>
    </>
  );
};

export default Deal;
