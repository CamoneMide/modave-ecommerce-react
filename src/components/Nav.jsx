import React from "react";
import Logo from "./Logo";
import { allProducts, navLinks } from "../constants";
import Container from "./Container";
import { Link, useLocation } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import {
  addProductToCart,
  removeProductFromCart,
} from "../utils/someFunctions";
import CustBtnModv from "./CustBtnModv";
import {
  PiGiftThin,
  PiNotePencilThin,
  PiTagThin,
  PiTrashLight,
  PiTruckThin,
} from "react-icons/pi";

const Nav = ({ setLogoPosition, cart, setCart }) => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [navToggle, setNavToggle] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const location = useLocation();
  const logoDivRef = React.useRef(null);

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

  React.useEffect(() => {
    const getLogoPosition = () => {
      if (logoDivRef.current && setLogoPosition) {
        const rect = logoDivRef.current.getBoundingClientRect();
        setLogoPosition(rect.left);
      }
    };

    getLogoPosition();
    window.addEventListener("resize", getLogoPosition);

    return () => {
      window.removeEventListener("resize", getLogoPosition);
    };
  }, [setLogoPosition]);

  return (
    <>
      <header>
        <div
          className={`text-[var(--text-color)] bg-[var(--text-color-white)] flex items-center justify-center w-full fixed navTrans z-50 ${
            visible ? "top-0" : "-top-[68px]"
          }`}
        >
          <Container
            className={`min-h-[64px] bg-[var(--text-color-white)] flex items-center justify-between w-full`}
          >
            <div
              className="flex lg:hidden w-[30px] h-[25px] flex-col space-y-1 cursor-pointer group/navLine"
              onClick={() => setNavToggle(true)}
            >
              <span className="w-[100%] h-[3px] bg-[var(--text-color)] group-hover/navLine:w-[100%] transition-all duration-300"></span>
              <span className="w-[50%] h-[3px] bg-[var(--text-color)] group-hover/navLine:w-[100%] transition-all duration-300"></span>
              <span className="w-[70%] h-[3px] bg-[var(--text-color)] group-hover/navLine:w-[100%] transition-all duration-300"></span>
            </div>
            <div className="flex logoDiv" id="logoDiv" ref={logoDivRef}>
              <Logo />
            </div>
            <div className="hidden lg:flex text-[16px] gap-[22px] font-[600] ">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.label}
                  to={navLink.href}
                  className={`hover:text-[var(--text-color-active)] h-full navTrans ${
                    location.pathname === navLink.href
                      ? // location.pathname.startsWith(navLink.href)
                        "text-[var(--text-color-active)]"
                      : "text-[var(--text-color)]"
                  }`}
                >
                  {navLink.label}
                </Link>
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
              <div
                className="relative flex cursor-pointer"
                onClick={() => {
                  setIsCartOpen(true);
                }}
              >
                <i className="bx bx-shopping-bag"></i>
                <span className="text-[10px] text-[var(--text-color-white)] bg-[var(--text-color-active)] absolute right-0 px-[4px] rounded-full">
                  {cart.length}
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div className="flex lg:hidden fixed h-[70px] w-full bottom-0 bg-[var(--text-color-white)] z-[30] py-[15px]">
          <Container className="flex flex-row items-center justify-between w-full">
            <Link
              to="/product"
              className="flex flex-col text-[20px] text-[var(--text-color)] pr-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-grid-alt"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Shop
              </span>
            </Link>
            <Link
              to="/collection"
              className="flex flex-col text-[20px] text-[var(--text-color)] px-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-menu"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Categories
              </span>
            </Link>
            <Link
              to="/"
              className="flex flex-col text-[20px] text-[var(--text-color)] px-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-search"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Search
              </span>
            </Link>
            <Link
              to="/"
              className="flex flex-col text-[20px] text-[var(--text-color)] px-[10px] gap-[4px] items-center"
            >
              <i className="bx bx-heart"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Wishlist
              </span>
            </Link>
            <div
              onClick={() => {
                setIsCartOpen(true);
              }}
              className="flex flex-col text-[20px] text-[var(--text-color)] pl-[10px] gap-[4px] items-center cursor-pointer"
            >
              <i className="bx bx-shopping-bag"></i>
              <span className="text-[12px] text-[var(--text-color-inActive)] font-[500]">
                Cart
              </span>
            </div>
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
                    className="w-full h-[48px] flex text-[14px] leading-[22px] p-[12px] pl-[44px] font-[400] bg-[var(--text-color-white)] text-[var(--text-color-reduced)] border-[2px] border-[#E9E9E9] rounded-[8px]"
                  />
                  <div className="absolute flex text-[var(--text-color)] text-[24px] top-[14px] left-[14px] cursor-pointer">
                    <i className="bx bx-search"></i>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-full pb-[30px]">
                  <div className="flex flex-col items-center w-full">
                    {navLinks.map((navLink) => (
                      <div
                        key={navLink.label}
                        className="flex items-center w-full h-[48px] border-b-[1px] border-b-[rgb(233 233 233)] last:border-b-0"
                      >
                        <Link
                          onClick={() => setNavToggle(false)}
                          to={navLink.href}
                          className={`hover:text-[var(--text-color-active)] navTrans text-[16px] font-[500] leading-[24px] ${
                            location.pathname === navLink.href
                              ? // location.pathname.startsWith(navLink.href)
                                "text-[var(--text-color-active)]"
                              : "text-[var(--text-color)]"
                          }`}
                        >
                          {navLink.label}
                        </Link>
                      </div>
                    ))}
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
                          <p className="text-[16px]">
                            ayomidemejidade@gmail.com
                          </p>
                        </li>
                        <li className="flex flex-row gap-[12px] text-[var(--text-color-inActive)]">
                          <i className="bx bx-phone text-[20px]"></i>
                          <p className="text-[16px]">090-3003-2512</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-[110%] flex h-[1px] bg-[var(--text-color-inActive)] -ml-[16px]" />
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-[14px] font-[500] text-[var(--text-color)] pt-[16px]">
                  <p>
                    Copyright &copy; {new Date().getFullYear()}, Modave~React.
                  </p>
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
                    <a
                      rel="noreferrer"
                      href="https://github.com/CamoneMide"
                      target="_blank"
                      className=" text-[#0077B5]"
                    >
                      <BsGithub size={14} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart */}
        <section
          className={`fixed inset-0 z-[60] bg-[rgba(24,24,24,0.2)] transition-all duration-500 ${
            isCartOpen
              ? "translate-x-[0] opacity-100"
              : "translate-x-[100%] opacity-50"
          }`}
        >
          <div className="absolute right-0 top-0 w-[92%] h-full max-w-[710px] bg-[var(--text-color-white)]">
            <div className="flex flex-col md:flex-row size-full">
              <div className="flex flex-col w-full md:w-[228px] px-[15px] pt-[15px] md:p-[24px] bg-[#FFF] shrink-0 gap-[12px] md:border-r-[1px] border-r-[#E9E9E9]">
                <h6 className="text-[var(--text-color)] text-[16px] font-[500]">
                  You May Also Like
                </h6>
                <div className="flex overflow-hidden h-[218px] w-full md:w-[180px] md:h-full">
                  <div className="overflow-x-scroll md:overflow-y-scroll flex flex-row gap-[15px] md:gap-[16px] md:flex-col w-full md:w-[180px] h-[218px] md:h-full scrollbar-hide">
                    {allProducts.slice(4, 11).map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col h-full w-[120px] md:w-full md:h-[325px] group/ymalk border-b-[1px] border-b-[#E9E9E9] md:pb-[16px]"
                      >
                        <div className="flex w-[120px] md:w-full h-[150px] md:h-[240px] mb-[12px] rounded-[8px] overflow-hidden">
                          <img
                            src={item.srcFront}
                            alt="prod-img"
                            className="object-cover size-full"
                          />
                        </div>
                        <Link
                          to={`/product/${item.id}`}
                          className="flex w-full h-[26px] items-center text-[var(--text-color)] hover:text-[var(--text-color-active)] text-[14px] font-[500] transition-all duration-300 cursor-pointer whitespace-nowrap truncate"
                        >
                          {item.name}
                        </Link>
                        <div className="overflow-hidden flex flex-col w-full h-[26px]">
                          <div className="h-[52px] w-full flex flex-col items-start group-hover/ymalk:-translate-y-[50%] transition-all duration-300">
                            <div className="flex flex-col w-full h-[26px] text-[var(--text-color)] text-[16px] font-[600]">
                              ${item.price}
                            </div>
                            <div
                              className="flex flex-col w-full h-[26px] text-[var(--text-color)] hover:text-[var(--text-color-active)] text-[16px] font-[600] transition-all duration-300 cursor-pointer"
                              onClick={() => {
                                addProductToCart(item.id, setCart);
                              }}
                            >
                              Add to cart
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full bg-[#FFF]">
                <div className="flex flex-col w-full">
                  <div className="p-[12px] md:px-[24px] md:pt-[24px] flex flex-row w-full h-[60px] md:h-[70px] justify-between items-center">
                    <h6 className="text-[var(--text-color)] text-[20px] font-[500] flex-1">
                      Shopping Cart
                    </h6>
                    <div
                      className="text-[var(--text-color)] text-[26px] hover:rotate-90 navTrans hover:text-[var(--text-color-active)] cursor-pointer"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <div className="px-[12px] md:px-[24px] w-full">
                    <div className="flex flex-col justify-between h-[78px] md:h-[94px] p-[12px] md:p-[16px] w-full bg-[#F5F6EC] rounded-[12px]">
                      <div className="flex h-[8px] w-full bg-[#FFF] mt-[12px]">
                        <div
                          className={`flex h-full ${
                            isCartOpen ? "w-[80%]" : "w-0"
                          } bg-gradient-to-r from-[#19450f] to-[#3dab25] relative transition-all duration-1000 delay-300`}
                        >
                          <div className="flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 rounded-full size-[32px] bg-[#FFF] text-[rgba(24,24,24,0.8)] border-[2px] border-[#3DAB25] text-[20px]">
                            <PiTruckThin />
                          </div>
                        </div>
                      </div>
                      <h6 className="text-[var(--text-color)] text-[14px] font-[400]">
                        Congratulations! You've got free shipping!
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col size-full bg-[#FFF] overflow-hidden">
                  <div className="flex flex-col overflow-scroll scrollbar-hide px-[12px] md:px-[24px]">
                    {cart?.map((item) => (
                      <div
                        key={item.id}
                        className="py-[12px] md:py-[20px] border-b-[1px] border-b-[#E9E9E9] flex flex-row items-center gap-[12px] md:gap-[24px] h-[124px]"
                      >
                        <div className="flex size-[100px] rounded-[10px] overflow-hidden">
                          <img
                            src={item.srcBack}
                            alt="prod-img"
                            className="object-contain size-full rounded-[10px]"
                          />
                        </div>
                        <div className="flex flex-col gap-[10px] md:gap-[16px] flex-1">
                          <div className="flex flex-row items-center justify-between gap-[12px]">
                            <Link
                              to={`/product/${item.id}`}
                              className="text-[var(--text-color)] hover:text-[var(--text-color-active)] text-[16px] font-[500] transition-all duration-300 cursor-pointer whitespace-nowrap truncate"
                            >
                              {item.name}
                            </Link>
                            <div
                              className="text-[var(--text-color-active)] text-[22px] cursor-pointer"
                              onClick={() => {
                                removeProductFromCart(item.id, setCart);
                              }}
                            >
                              <PiTrashLight />
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between gap-[12px]">
                            <h6 className="text-[var(--text-color-reduced)] text-[16px] font-[400]">
                              XL/Blue
                            </h6>
                            <p className="text-[var(--text-color)] text-[16px] font-[600] flex gap-[4px]">
                              <span>{item.quantity}</span>X
                              <span>${item.price}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col shadow-[5px_5px_18px_5px_rgba(64,72,87,0.15)]">
                  <div className="px-[12px] md:px-[24px] grid grid-cols-4 items-center justify-evenly h-[40px] md:h-[58px] w-full border-b-[1px] border-b-[#E9E9E9]">
                    <div className="flex size-full items-center justify-center gap-[6px] md:gap-[12px] text-[18px] cursor-pointer">
                      <PiNotePencilThin />
                      <p className="text-[var(--text-color)] text-[10px] md:text-[14px] font-[400]">
                        Note
                      </p>
                    </div>

                    <div className="flex size-full items-center justify-center gap-[6px] md:gap-[12px] text-[18px] cursor-pointer">
                      <PiTruckThin />
                      <p className="text-[var(--text-color)] text-[10px] md:text-[14px] font-[400]">
                        Shipping
                      </p>
                    </div>

                    <div className="flex size-full items-center justify-center gap-[6px] md:gap-[12px] text-[18px] cursor-pointer">
                      <PiGiftThin />
                      <p className="text-[var(--text-color)] text-[10px] md:text-[14px] font-[400]">
                        Gift
                      </p>
                    </div>

                    <div className="flex size-full items-center justify-center gap-[6px] md:gap-[12px] text-[18px] cursor-pointer">
                      <PiTagThin />
                      <p className="text-[var(--text-color)] text-[10px] md:text-[14px] font-[400]">
                        Coupon
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] h-[168px] md:h-[220px] p-[12px] md:p-[24px] md:pb-[20px]">
                    <div className="flex justify-between items-center text-[var(--text-color)] text-[18px] md:text-[24px] font-[500]">
                      <h6>Subtotal</h6>
                      <p>$186.99</p>
                    </div>
                    <label
                      htmlFor=""
                      className="flex items-center gap-[8px] text-[var(--text-color)] text-[13px] md:text-[16px] font-[400]"
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="size-[18px]"
                      />
                      I agree with{" "}
                      <span className="underline">Terms & Conditions</span>
                    </label>
                    <div
                      className="grid grid-cols-2 w-full gap-[10px] md:gap-[16px] md:mb-[4px]"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <CustBtnModv
                        href={"/cart"}
                        border
                        text={"View Cart"}
                        lite
                        xtraPadng
                      />
                      <CustBtnModv
                        href={"/cart"}
                        border
                        text={"Check Out"}
                        xtraPadng
                      />
                    </div>
                    <p className="flex justify-center items-center text-[var(--text-color)] text-[12px] font-[400] uppercase">
                      Or continue shopping
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Nav;
