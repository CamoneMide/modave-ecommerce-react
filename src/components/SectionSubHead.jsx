import React from "react";

const SectionSubHead = ({ text }) => {
  return (
    <>
      <p className="text-[16px] leading-[21px] text-[var(--text-color-sub)] font-[400]">
        {text}
      </p>
    </>
  );
};

export default SectionSubHead;
