import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CustBtnModv = ({
  href,
  borderFull,
  border,
  text,
  icon,
  lite,
  xtraPadng,
}) => {
  return (
    <>
      <Link to={href}>
        <div
          className={`py-[12px] px-[20px] lg:py-[15px] lg:px-[32px] relative overflow-hidden ${
            borderFull ? "rounded-full" : "rounded-[4px]"
          } z-[1] cursor-pointer group border-[1px] ${
            border ? "border-[#181818]" : "border-transparent"
          } ${
            lite && border ? "hover:border-[#E43131]" : null
          } transition-colors duration-300 delay-150 bg-transparent`}
        >
          <div
            className={`flex w-full justify-center items-center ${
              lite
                ? "text-[#181818] group-hover:text-[#FFF]"
                : "text-[#FFF] group-hover:text-[#181818]"
            }  font-[600] gap-[2px] transition-all duration-300 m-0 p-0 ${
              xtraPadng ? "px-[15px]" : "px-0"
            }`}
          >
            <span className="text-[14px] lg:text-[16px] m-0 p-0">{text}</span>
            {icon ? (
              <span className="text-[18px] lg:text-[20px] rotate-[135deg] group-hover:translate-x-[4px] transition-transform duration-[350ms] delay-[200ms] m-0 p-0">
                <FaArrowLeft />
              </span>
            ) : null}
          </div>
          <div className="absolute inset-0 -z-[1] rotate-[9deg] -translate-x-[20%] -translate-y-[60%] group-hover:-translate-y-[260%] transition-all duration-500 delay-[25ms]">
            <div
              className={`w-[200%] h-[200%] ${
                lite ? "bg-[#FFF]" : "bg-[#181818]"
              } `}
            ></div>
            <div
              className={`w-[200%] h-[200%] ${
                lite ? "bg-[#E43131]" : "bg-[#FFF]"
              } `}
            ></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CustBtnModv;
