import React from "react";

const Button = ({ href, text, lite }) => {
  return (
    <>
      <a
        href={href}
        className={`relative overflow-hidden z-[1]  text-[14px] lg:text-[16px] py-[12px] px-[20px] lg:py-[15px] lg:px-[32px] aBtn-btn rounded-full font-[600] gap-[4px] ${
          lite
            ? "text-[var(--text-color)] bg-[var(--text-color-white)]"
            : "bg-[var(--text-color)] text-[var(--text-color-white)]"
        }`}
      >
        <div className="flex items-center relative z-[3]">
          <span className="text-[14px] lg:text-[16px]">{text}</span>
          <i className="bx bx-arrow-back rotate-[135deg] font-[500] text-[18px] lg:text-[20px]"></i>
        </div>
        <div
          className={`absolute bottom-0 left-0 z-[2] aBtn-base ${
            lite
              ? "bg-[var(--text-color-active)]"
              : "bg-[var(--text-color-white)]"
          }`}
        />
      </a>
    </>
  );
};

export default Button;
