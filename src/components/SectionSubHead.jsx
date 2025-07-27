import React from "react";
import { FadeUp } from "../animations";

const SectionSubHead = ({ text }) => {
  return (
    <>
      <FadeUp distance={40} duration={0.4} delay={0.1}>
        <p className="text-[16px] leading-[21px] text-[var(--text-color-sub)] font-[400]">
          {text}
        </p>
      </FadeUp>
    </>
  );
};

export default SectionSubHead;
