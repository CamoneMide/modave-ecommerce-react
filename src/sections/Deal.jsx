import {
  AnchorBtn,
  Container,
  CustBtnModv,
  SaleCountdownTime,
} from "../components";
import banner1 from "../assets/images/banner-cls1.jpg";
import banner2 from "../assets/images/banner-cls2.jpg";
import imgCount1 from "../assets/images/img-countdown1.png";
import { FadeUp, SplitText } from "../animations";

const Deal = () => {
  return (
    <>
      <section className="pb-[60px] lg:pb-[80px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[15px]">
          <div className="flex flex-col justify-between">
            <div className="overflow-hidden">
              <img
                src={banner1}
                alt="banner1"
                className="hover:scale-[1.1] imgTrans"
              />
            </div>
            <div className="flex flex-col overflow-hidden">
              <FadeUp
                distance={"50%"}
                duration={0.4}
                delay={0.1}
                className="h-fit"
              >
                <a
                  href=""
                  className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans"
                >
                  Crossbody bag
                </a>
              </FadeUp>
            </div>
            <div className="flex overflow-hidden">
              <FadeUp
                distance={"50%"}
                duration={0.4}
                delay={0.2}
                className="h-fit"
              >
                <p className="text-[16px]  font-[400] text-[var(--text-color)] my-[10px] md:my-[0]">
                  From beach to party: Perfect styles for every occasion.
                </p>
              </FadeUp>
            </div>
            <div className="flex overflow-hidden">
              <FadeUp
                distance={"50%"}
                duration={0.4}
                delay={0.3}
                className="h-[30px]"
              >
                <AnchorBtn href={"/product"} color="black" text="Shop Now" />
              </FadeUp>
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
              <div className="flex overflow-hidden">
                <FadeUp
                  distance={"50%"}
                  duration={0.4}
                  delay={0.1}
                  className="h-fit"
                >
                  <a
                    href=""
                    className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color-white)] hover:text-[var(--text-color-active)] navTrans"
                  >
                    Capsule Collection
                  </a>
                </FadeUp>
              </div>
              <div className="flex overflow-hidden">
                <FadeUp
                  distance={"50%"}
                  duration={0.4}
                  delay={0.2}
                  className="h-fit"
                >
                  <p className="text-[16px] font-[400] mt-[10px] mb-[30px]">
                    Reserved for special occasions
                  </p>
                </FadeUp>
              </div>

              <div className="flex overflow-hidden">
                <FadeUp
                  distance={"50%"}
                  duration={0.4}
                  delay={0.3}
                  className="h-[30px]"
                >
                  <AnchorBtn href={"/product"} color="white" text="Shop Now" />
                </FadeUp>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-[60px] lg:py-[80px] bg-[var(--area-background-color)] relative">
        <Container className="flex flex-col justify-between lg:items-center lg:flex-row">
          <div className="flex flex-col justify-center gap-[24px]">
            <div className="flex w-full overflow-hidden cursor-pointer">
              <SplitText
                text={"Limited-Time Deals On!"}
                className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans"
                delay={8}
                duration={2}
                ease="elastic.out(1,0.3)"
                rootMargin="40px"
              />
            </div>

            <div className="flex overflow-hidden">
              <FadeUp
                distance={"50%"}
                duration={0.4}
                delay={0.1}
                className="h-fit"
              >
                <p className="text-[16px]  font-[400] text-[var(--text-color)]">
                  Up to 50% Off Selected Styles. Don't Miss Out.
                </p>
              </FadeUp>
            </div>

            <div className="flex overflow-hidden">
              <FadeUp
                distance={"50%"}
                duration={0.4}
                delay={0.2}
                className="flex h-fit"
              >
                <CustBtnModv
                  href={"/product"}
                  text={"Shop Now"}
                  lite={false}
                  borderFull
                  border
                  icon
                />
              </FadeUp>
            </div>
          </div>
          <div className="p-6">
            <SaleCountdownTime days={11} hours={15} minutes={52} seconds={0} />
          </div>
        </Container>
        <div className="absolute hidden md:flex top-0 bottom-0 lg:right-[40%] md:right-0">
          <img src={imgCount1} alt="imgCount1" className="" />
        </div>
      </section>
    </>
  );
};

export default Deal;
