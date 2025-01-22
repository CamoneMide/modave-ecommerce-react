import React from "react";

const SectionHead = ({ text }) => {
  return (
    <>
      <h3 className="text-[24px] md:text-[30px] lg:text-[40px] text-[var(--text-color)] font-[500]">
        {text}
      </h3>
    </>
  );
};

export default SectionHead;
