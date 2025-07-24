import React from "react";
import { Container, Logo } from "../components";
import { socsIcons } from "../constants";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const [accState1, setAccState1] = React.useState(false);
  const [accState2, setAccState2] = React.useState(false);
  const [accState3, setAccState3] = React.useState(false);

  function handleAccState1() {
    setAccState1((prev) => !prev);
  }
  function handleAccState2() {
    setAccState2((prev) => !prev);
  }
  function handleAccState3() {
    setAccState3((prev) => !prev);
  }

  return (
    <>
      <footer className="py-[40px] lg:pt-[80px] lg:pb-[10px] border-t-[var(--text-color-reduced)] border-t-[1px] mb-[40px] lg:mb-0">
        <Container>
          <div className="flex flex-col lg:grid lg:grid-cols-3">
            <div className="flex flex-col gap-[16px] mb-[30px] lg:mb-[0]">
              <Logo />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[16px] text-[var(--text-color-inActive)]">
                  549 Oak St.Crystal Lake, IL 60014
                </p>
                <a
                  href=""
                  className="text-[12px] text-[var(--text-color)] hover:text-[var(--text-color-active)] font-[600] flex gap-[4px] navTrans"
                >
                  GET DIRECTION
                  <i className="bx bx-arrow-back rotate-[135deg] font-[500] text-[18px] lg:text-[20px]"></i>
                </a>
              </div>
              <ul className="flex flex-col gap-[8px]">
                <li className="flex flex-row gap-[12px] text-[var(--text-color-inActive)]">
                  <i className="bx bx-envelope text-[20px]"></i>
                  <p className="text-[16px]">ayomidemejidade@gmail.com</p>
                </li>
                <li className="flex flex-row gap-[12px] text-[var(--text-color-inActive)]">
                  <i className="bx bx-phone text-[20px]"></i>
                  <p className="text-[16px]">090-3003-2512</p>
                </li>
              </ul>
              <ul className="flex flex-row gap-[8px] footerSocIcons">
                {socsIcons.map((socsIcon) => (
                  <li key={socsIcon.id}>
                    <a
                      href={socsIcon.href}
                      className={`text-[20px] flex items-center justify-center w-[44px] h-[44px] border-[var(--text-color)] border-[1px] cursor-pointer rounded-full navTrans ${socsIcon.color}`}
                    >
                      <i className={socsIcon.iconClass}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[18px] md:flex-row">
              <div className="w-full">
                <div
                  className="flex flex-row items-center justify-between w-full text-[var(--text-color)] h-[26px] mb-[12px]"
                  onClick={handleAccState1}
                >
                  <h6 className="text-[16px] font-[600]">Infomation</h6>
                  <div className="relative flex items-center md:hidden">
                    <span
                      className={`navTrans accSpan1 h-[1.5px] w-[12px] right-[10px] bg-[var(--text-color)]  absolute ${
                        accState1 ? "rotate-[180deg]" : "rotate-[90deg]"
                      }`}
                    ></span>
                    <span
                      className={`navTrans accSpan2 h-[1.5px] w-[12px] right-[10px] bg-[var(--text-color)] absolute ${
                        accState1 ? "rotate-[360deg]" : "rotate-[0deg]"
                      }`}
                    ></span>
                  </div>
                </div>
                <div
                  className={`grid md:grid-rows-[1fr] navTrans ${
                    accState1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-[8px] text-[14px] font-[400]">
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Our Stories
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Size Guide
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Career
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          My Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div
                  className="flex flex-row items-center justify-between w-full text-[var(--text-color)] h-[26px] mb-[12px] cursor-pointer"
                  onClick={handleAccState2}
                >
                  <h6 className="text-[16px] font-[600]">Customer Services</h6>
                  <div className="relative flex items-center md:hidden ">
                    <span
                      className={`navTrans accSpan1 h-[1.5px] w-[12px] right-[10px] bg-[var(--text-color)]  absolute ${
                        accState2 ? "rotate-[180deg]" : "rotate-[90deg]"
                      }`}
                    ></span>
                    <span
                      className={`navTrans accSpan2 h-[1.5px] w-[12px] right-[10px] bg-[var(--text-color)] absolute ${
                        accState2 ? "rotate-[360deg] " : "rotate-[0deg]"
                      }`}
                    ></span>
                  </div>
                </div>
                <div
                  className={`grid md:grid-rows-[1fr] navTrans ${
                    accState2 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-[8px] text-[14px] font-[400]">
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Shipping
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Return & Refund
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          Orders FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="h-[22px] cursor-pointer text-[var(--text-color-inActive)] flex hover:text-[var(--text-color-active)] navTrans"
                        >
                          My Wishlist
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-[18px] lg:my-[0]">
              <div className="w-full">
                <div
                  className="flex flex-row items-center justify-between w-full text-[var(--text-color)] h-[26px] mb-[12px]"
                  onClick={handleAccState3}
                >
                  <h6 className="text-[16px] font-[600]">Newletter</h6>
                  <div className="relative flex items-center md:hidden">
                    <span
                      className={`navTrans accSpan1 h-[1.5px] w-[12px] right-[10px] bg-[var(--text-color)] absolute ${
                        accState3 ? "rotate-[180deg]" : "rotate-[90deg]"
                      }`}
                    />
                    <span
                      className={`navTrans accSpan2 h-[1.5px] w-[12px] right-[10px] bg-[var(--text-color)] absolute ${
                        accState3 ? "rotate-[360deg]" : "rotate-[0deg]"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`grid md:grid-rows-[1fr] navTrans ${
                    accState3 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-[16px] text-[14px] font-[400] text-[var(--text-color-inActive)]">
                      <p className="h-[22px] flex">
                        Sign up for our newsletter and get 10% off your first
                        purchase
                      </p>
                      <div className="relative flex w-full h-[56px] p-[3px]">
                        <input
                          type="email"
                          name="email-form"
                          placeholder="eg.johndoe@gmail.com"
                          className="w-full h-full rounded-full bg-[var(--text-color-white)] border-[1.4px] border-[var(--text-color)] py-[9px] pr-[56px] pl-[16px] focus:shadow-none"
                        />
                        <span className="absolute flex justify-center items-center font-[600] right-[6px] top-[4px] border-[1.4px] border-[var(--text-color)] h-[48px] w-[48px] bg-[var(--text-color)] rounded-full text-[var(--text-color-white)] hover:text-[var(--text-color)] hover:bg-[var(--text-color-white)] navTrans">
                          <i className="bx bx-arrow-back rotate-[135deg] font-[500] text-[18px] lg:text-[20px]"></i>
                        </span>
                      </div>
                      <label
                        htmlFor=""
                        className="font-[400] text-[14px] text-[var(--text-color)]"
                      >
                        <input type="checkbox" name="" id="" className="mr-2" />
                        By clicking subcribe, you agree to the{" "}
                        <a
                          href=""
                          className="font-[600] underline underline-offset-2 text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href=""
                          className="font-[600] underline underline-offset-2 text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-[100%] hidden lg:flex h-[1px] bg-[var(--text-color-reduced)] mt-[40px]" />
        <Container>
          <div className="hidden lg:flex flex-col md:flex-row items-center justify-center md:justify-between text-[14px] font-[500] text-[var(--text-color)] pt-[16px]">
            <p>Copyright &copy; {new Date().getFullYear()}, Modave~React.</p>
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
        </Container>
      </footer>
    </>
  );
};

export default Footer;
