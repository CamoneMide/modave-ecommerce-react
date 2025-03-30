import React from "react";
import Logo from "./Logo";
import { navLinks } from "../constants";
import Container from "./Container";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [navToggle, setNavToggle] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setVisible(scrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  React.useEffect(() => {
    if (navToggle) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [navToggle]);

  return (
    <>
      <header>
        <Container
          className={`text-[var(--text-color)] min-h-[64px] bg-[var(--text-color-white)] flex items-center justify-between w-full fixed navTrans z-50 ${
            visible ? "top-0" : "-top-[68px]"
          }`}
        >
          <div
            className="flex lg:hidden w-[30px] h-[25px] flex-col space-y-1 cursor-pointer"
            onClick={() => setNavToggle(true)}
          >
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
        {/* Slide in and Out */}
        <div
          className={`fixed flex z-[60] w-dvw h-dvh inset-0 navTrans ${
            navToggle
              ? "translate-x-[0] opacity-100"
              : "-translate-x-[100%] opacity-80"
          }`}
        >
          <div className="w-full h-full bg-[rgba(0,0,0,0.1)]">
            <div className="w-[84%] max-w-[367px] h-full bg-[var(--text-color-white)] relative">
              <div className="absolute inset-0 bg-[var(--text-color-white)] h-[60px] px-[15px] py-[20px]">
                <div
                  className="text-[var(--text-color)] text-[26px] flex hover:rotate-90 navTrans hover:text-[var(--text-color-active)] w-fit cursor-pointer"
                  onClick={() => setNavToggle(false)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div className="w-full h-full px-[20px] pb-[16px] pt-[62px] flex flex-col">
                <div className="relative flex w-full mb-[14px]">
                  <input
                    type="search"
                    name="search"
                    id=""
                    placeholder="What are you looking for?"
                    className="w-full h-[48px] flex text-[14px] leading-[22px] p-[12px] pl-[44px] font-[400] bg-[var(--text-color-white)] text-[var(--text-color-reduced)] rounded-[8px]"
                  />
                  <div className="absolute flex text-[var(--text-color)] text-[24px] top-[14px] left-[14px]">
                    <i className="bx bx-search"></i>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-full pb-[30px]">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex items-center w-full h-[48px] border-b-[1px] border-b-[rgb(233 233 233)]">
                      <a
                        href=""
                        className="text-[16px] font-[500] leading-[24px] text-[var(--text-color)]"
                      >
                        Home
                      </a>
                    </div>
                    <div className="flex items-center w-full h-[48px] border-b-[1px] border-b-[rgb(233 233 233)]">
                      <a
                        href=""
                        className="text-[16px] font-[500] leading-[24px] text-[var(--text-color)]"
                      >
                        Shop
                      </a>
                    </div>
                    <div className="flex items-center w-full h-[48px] border-b-[1px] border-b-[rgb(233 233 233)]">
                      <a
                        href=""
                        className="text-[16px] font-[500] leading-[24px] text-[var(--text-color)]"
                      >
                        Products
                      </a>
                    </div>
                    <div className="flex items-center w-full h-[48px] border-b-[1px] border-b-[rgb(233 233 233)]">
                      <a
                        href=""
                        className="text-[16px] font-[500] leading-[24px] text-[var(--text-color)]"
                      >
                        Blog
                      </a>
                    </div>
                    <div className="flex items-center w-full h-[48px]">
                      <a
                        href=""
                        className="text-[16px] font-[500] leading-[24px] text-[var(--text-color)]"
                      >
                        About Us
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row gap-[10px] mt-[10px] mb-[20px]">
                      <a
                        href=""
                        className="flex flex-row items-center gap-[4px] h-[42px] px-[9px] rounded-[8px] text-[14px] font-[500] leading-[40px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] bg-[#E9E9E9] cursor-pointer"
                      >
                        <div className="text-[16px]">
                          <i className="bx bx-heart"></i>
                        </div>
                        <span>Wishlist</span>
                      </a>
                      <a
                        href=""
                        className="flex flex-row items-center gap-[4px] h-[42px] px-[9px] rounded-[8px] text-[14px] font-[500] leading-[40px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] bg-[#E9E9E9] cursor-pointer"
                      >
                        <div className="text-[16px]">
                          <i className="bx bx-user"></i>
                        </div>
                        <span>Login</span>
                      </a>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <a
                        href=""
                        className="text-[16px] font-[500] leading-[24px] text-[var(--text-color)] mt-[4px]"
                      >
                        Need Help?
                      </a>
                      <p className="text-[16px] text-[var(--text-color-inActive)]">
                        549 Oak St.Crystal Lake, IL 60014
                      </p>
                      <a
                        href=""
                        className="text-[12px] text-[var(--text-color)] hover:text-[var(--text-color-active)] font-[600] flex gap-[4px] navTrans mt-[4px]"
                      >
                        GET DIRECTION
                        <i className="bx bx-arrow-back rotate-[135deg] font-[500] text-[18px] lg:text-[20px]"></i>
                      </a>
                      <ul className="flex flex-col gap-[8px]">
                        <li className="flex flex-row gap-[12px] text-[var(--text-color-inActive)]">
                          <i className="bx bx-envelope text-[20px]"></i>
                          <p className="text-[16px]">themesflat@gmail.com</p>
                        </li>
                        <li className="flex flex-row gap-[12px] text-[var(--text-color-inActive)]">
                          <i className="bx bx-phone text-[20px]"></i>
                          <p className="text-[16px]">315-666-6688</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-[110%] flex h-[1px] bg-[var(--text-color-inActive)] -ml-[16px]" />
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-[14px] font-[500] text-[var(--text-color)] pt-[16px]">
                  <p>Copyright &copy; 2025, Modave~React.</p>
                  <p className="flex flex-row items-center flex-nowrap">
                    <strong>Developed by</strong>
                    <a href="#" target="_blank" className="ml-1">
                      <i>Camone_Mide</i>
                    </a>
                    <a
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/mide-web-developer"
                      target="_blank"
                      className="text-[18px] text-[#0077B5] px-[4px]"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
