import React from "react";
import Logo from "./Logo";
import { navLinks } from "../constants";
import Container from "./Container";

const Nav = () => {
  return (
    <>
      <header>
        <Container className="text-[var(--text-color)] min-h-[64px] bg-[--text-color-white] flex items-center justify-between ">
          <div className="flex lg:hidden w-[30px] h-[25px] flex-col space-y-1">
            <span className="w-[100%] h-[3px] bg-[var(--text-color)]"></span>
            <span className="w-[50%] h-[3px] bg-[var(--text-color)]"></span>
            <span className="w-[70%] h-[3px] bg-[var(--text-color)]"></span>
          </div>
          <div className="flex">
            <Logo />
          </div>
          <div className="hidden lg:flex text-[16px] gap-[22px] font-[600] ">
            {navLinks.map((navLink) => (
              <a
                key={navLink.label}
                href={navLink.href}
                className="hover:text-[var(--text-color-active)] h-full navTrans"
              >
                {navLink.label}
              </a>
            ))}
          </div>
          <div className="flex text-[24px] items-center space-x-[10px] lg:space-x-[16px]">
            <div className="flex cursor-pointer">
              <i className="bx bx-search"></i>
            </div>
            <div className="hidden cursor-pointer md:flex">
              <i className="bx bx-user"></i>
            </div>
            <div className="hidden cursor-pointer md:flex">
              <i className="bx bx-heart"></i>
            </div>
            <div className="relative flex cursor-pointer">
              <i className="bx bx-shopping-bag"></i>
              <span className="text-[10px] text-[var(--text-color-white)] bg-[var(--text-color-active)] absolute right-0 px-[3px] rounded-full">
                0
              </span>
            </div>
          </div>
        </Container>
        <div className="flex lg:hidden fixed h-[70px] w-full bottom-0 bg-[var(--text-color-white)] z-[30] py-[15px]">
          <Container className="flex flex-row items-center justify-between w-full">
            <a
              href=""
              className="flex flex-col text-[20px] text-[var(--text-color)] pr-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-grid-alt"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Shop
              </span>
            </a>
            <a
              href=""
              className="flex flex-col text-[20px] text-[var(--text-color)] px-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-menu"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Categories
              </span>
            </a>
            <a
              href=""
              className="flex flex-col text-[20px] text-[var(--text-color)] px-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-search"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Search
              </span>
            </a>
            <a
              href=""
              className="flex flex-col text-[20px] text-[var(--text-color)] px-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-heart"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Wishlist
              </span>
            </a>
            <a
              href=""
              className="flex flex-col text-[20px] text-[var(--text-color)] pl-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-shopping-bag"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Cart
              </span>
            </a>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Nav;
