import { Link } from "react-router-dom";
import { FadeUp } from "../animations";

const TopHeroReUse = ({ text }) => {
  return (
    <>
      <div className="h-[212px] lg:h-[240px] w-full bg-[url(/src/assets/images/collection-imgBg1.jpg)] bg-[60%] md:bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
        <h3 className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color)]">
          {text}
        </h3>
        <div className="flex flex-row items-center gap-1 text-[14px] font-[400]">
          <Link
            to="/"
            className="text-[var(--text-color)] hover:text-[var(--text-color-active)] cursor-pointer navTrans"
          >
            Homepage
          </Link>
          <div className="text-[14px] mt-1 text-[var(--text-color-reduced)]">
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="flex flex-col overflow-hidden">
            <FadeUp
              distance={"50%"}
              duration={0.5}
              delay={0.2}
              className="h-fit"
            >
              <p className="text-[var(--text-color-reduced)]">{text}</p>
            </FadeUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeroReUse;
