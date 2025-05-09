import { Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  imgSrcFront,
  imgSrcBack,
  productName,
  productPrice,
}) => {
  return (
    <>
      <div className="flex flex-col w-full group">
        <Link
          to={`/product/${id}`}
          className="relative flex overflow-hidden rounded-[8px]"
        >
          <img
            src={imgSrcFront}
            alt="Front"
            className="group-hover:opacity-0 group-hover:scale-[0.9] navTrans1  opacity-100 scale-[1]"
          />
          <img
            src={imgSrcBack}
            alt="Back"
            className="opacity-0 scale-[1] navTrans1 group-hover:opacity-100 group-hover:scale-[1.1] absolute size-full"
          />
          <div className="absolute z-[5] right-3 top-3 flex flex-col gap-[6px] group-hover:translate-x-0 group-hover:opacity-100 translate-x-0 lg:translate-x-[200%] opacity-100 lg:opacity-50 navTrans">
            <Tooltip
              content="Wishlist"
              placement="left"
              animation="duration-1000"
              className="bg-[var(--text-color)] rounded-[2px] text-[12px] px-[8px] leading-[22px] py-[0] cursor-pointer"
            >
              <a
                href=""
                className="flex items-center justify-center w-[40px] h-[40px] text-[22px] bg-[var(--text-color-white)] rounded-full text-[var(--text-color)] navTrans box-border font-[400] hover:bg-[var(--text-color)] hover:text-[var(--text-color-white)] cursor-pointer"
              >
                <i className="bx bx-heart"></i>
              </a>
            </Tooltip>
            <Tooltip
              content="Compare"
              placement="left"
              animation="duration-1000"
              className="bg-[var(--text-color)] rounded-[2px] text-[12px] px-[8px] leading-[22px] py-[0] cursor-pointer"
            >
              <a
                href=""
                className="flex items-center justify-center w-[40px] h-[40px] text-[22px] bg-[var(--text-color-white)] rounded-full text-[var(--text-color)] navTrans box-border font-[400] hover:bg-[var(--text-color)] hover:text-[var(--text-color-white)] cursor-pointer"
              >
                <i className="bx bx-git-compare"></i>
              </a>
            </Tooltip>
            <Tooltip
              content="Quick View"
              placement="left"
              animation="duration-1000"
              className="bg-[var(--text-color)] rounded-[2px] text-[12px] px-[8px] leading-[22px] py-[0] cursor-pointer"
            >
              <a
                href=""
                className="flex items-center justify-center w-[40px] h-[40px] text-[22px] bg-[var(--text-color-white)] rounded-full text-[var(--text-color)] navTrans box-border font-[400] hover:bg-[var(--text-color)] hover:text-[var(--text-color-white)] cursor-pointer"
              >
                <i className="fa-regular fa-eye"></i>
              </a>
            </Tooltip>
          </div>
          <a
            href=""
            className="absolute z-[5] inset-x-3 bottom-3 group-hover:translate-y-0 group-hover:opacity-100 translate-y-0 lg:translate-y-[200%] opacity-100 lg:opacity-50 navTrans rounded-full uppercase justify-center items-center flex py-2 text-[var(--text-color)] bg-[var(--text-color-white)] hover:text-[var(--text-color-white)] hover:bg-[var(--text-color)]"
          >
            <span>Quick Add</span>
          </a>
        </Link>
        <div className="flex flex-col w-full pt-[10px] lg:pt-[16px] gap-[4px]">
          <Link
            to={`/product/${id}`}
            className="text-[16px] font-[500] text-[var(--text-color)] hover:text-[var(--text-color-active)] navTrans cursor-pointer"
          >
            {productName}
          </Link>
          <p className="text-[16px] font-[600] text-[var(--text-color)]">
            <span className="line-through text-[14px] text-[var(--text-color-reduced)] mr-1 font-[400]">
              98.00
            </span>{" "}
            ${productPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
