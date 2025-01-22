import React from "react";

const AnchorBtn = ({ href, text }) => {
  return (
    <>
      <a
        href={href}
        className="pb-1 font-[600] text-[var(--text-color)] text-[16px] a-btn-line relative"
      >
        {text}
        {/* <span className="h-[2px] absolute left-0 bottom-0 bg-[var(--text-color)] w-[100%]"></span> */}
      </a>
    </>
  );
};

export default AnchorBtn;
