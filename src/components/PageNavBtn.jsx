import { Link } from "react-router-dom";

const PageNavBtn = ({ to, active, children }) => {
  return (
    <>
      <Link
        to={to}
        className={`text-[16px] border-[1px] rounded-[5px] font-[600] size-[40px] flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[var(--text-color)] hover:text-[var(--text-color-white)] ${
          active
            ? "bg-[var(--text-color)] text-[var(--text-color-white)] border-[var(--text-color)]"
            : "bg-[var(--text-color-white)] text-[var(--text-color)] border-[#E9E9E9]"
        }`}
      >
        {children}
      </Link>
    </>
  );
};

export default PageNavBtn;
