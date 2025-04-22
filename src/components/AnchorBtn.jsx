import { Link } from "react-router-dom";

const AnchorBtn = ({ href, color, text }) => {
  return (
    <>
      <Link
        to={href}
        className={`pb-1 font-[600] text-[16px] a-btn-line a-btn-line-${color} relative`}
      >
        {text}
        {/* <span className="h-[2px] absolute left-0 bottom-0 bg-[var(--text-color)] w-[100%]"></span> */}
      </Link>
    </>
  );
};

export default AnchorBtn;
