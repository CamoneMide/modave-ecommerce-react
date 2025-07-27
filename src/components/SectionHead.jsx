import { SplitText } from "../animations";

const SectionHead = ({ text }) => {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <SplitText
          text={text}
          className="text-[24px] md:text-[30px] lg:text-[40px] text-[var(--text-color)] font-[500]"
          delay={8}
          duration={2}
          ease="elastic.out(1,0.3)"
          rootMargin="50px"
        />
      </div>
      {/* <h3 className="text-[24px] md:text-[30px] lg:text-[40px] text-[var(--text-color)] font-[500]">
        {text}
      </h3> */}
    </>
  );
};

export default SectionHead;
