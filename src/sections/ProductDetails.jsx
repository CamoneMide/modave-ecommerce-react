import React from "react";
import { Link, useParams } from "react-router-dom";
import { allProducts } from "../constants";
import { Container, RecentRelatedProducts } from "../components";
import { BsEye, BsLightningChargeFill, BsStarFill } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";

const ProductDetails = ({ setCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);
  const [size, setSize] = React.useState("M");
  const [quantity, setQuantity] = React.useState(1);

  function handleSize(e) {
    setSize(e.target.innerText);
  }
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // const product = allProducts.find((p) => p.id === productId);
  React.useEffect(() => {
    const foundProduct = allProducts.find((p) => p.id === Number(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <section className="pt-[21px] bg-[#FFF]">
        <div className="h-[212px] lg:h-[240px] w-full bg-[url(/src/assets/images/collection-imgBg1.jpg)] bg-[60%] md:bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
          <h3 className="text-[28px] md:text-[30px] lg:text-[40px] font-[500] text-[var(--text-color)]">
            Women
          </h3>
          <div className="flex flex-row items-center gap-1 text-[14px] font-[400]">
            <Link
              to="/"
              className="text-[var(--text-color)] hover:text-[var(--text-color-active)] cursor-pointer navTrans"
            >
              Homepage
            </Link>
            <div className="text-[14px] mt-1 text-[var(--text-color-reduced)]">
              <i className="bx bx-chevron-right"></i>
            </div>
            <p className="text-[var(--text-color)]">Women</p>
            <div className="text-[14px] mt-1 text-[var(--text-color-reduced)]">
              <i className="bx bx-chevron-right"></i>
            </div>
            <p className="text-[var(--text-color-reduced)] text-[14px]">
              {product.name}
            </p>
          </div>
        </div>
        <Container>
          <div className="flex flex-row items-center gap-[3px] text-[14px] leading-[22px] mt-[60px]">
            <Link
              to={"/"}
              className="text-[var(--text-color)] hover:text-[var(--text-color-active)] cursor-pointer navTrans "
            >
              Homepage
            </Link>
            <div className="text-[20px] mt-1 text-[var(--text-color)]">
              <i className="bx bx-chevron-right"></i>
            </div>
            <p className="text-[var(--text-color)]">Women</p>
            <div className="text-[20px] mt-1 text-[var(--text-color)]">
              <i className="bx bx-chevron-right"></i>
            </div>
            <p>{product.name}</p>
          </div>
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[45px]">
            <div className="flex flex-col gap-[20px]">
              <div className="relative flex overflow-hidden rounded-[12px] size-full max-h-[820px] group">
                <img
                  src={product.srcFront}
                  alt="Front"
                  className="group-hover:opacity-0 group-hover:scale-[0.9] navTrans1  opacity-100 scale-[1] size-full"
                />
                <img
                  src={product.srcBack}
                  alt="Back"
                  className="opacity-0 scale-[1] navTrans1 group-hover:opacity-100 group-hover:scale-[1.1] absolute size-full"
                />
              </div>
              <div className="flex flex-row gap-[10px]">
                <div className="overflow-hidden rounded-[4px] w-[80px] h-[106px] border-[1px] border-transparent hover:border-[var(--text-color)] navTrans">
                  <img
                    src={product.srcFront}
                    alt="Front"
                    className="object-cover size-full"
                  />
                </div>
                <div className="overflow-hidden rounded-[4px] w-[80px] h-[106px] border-[1px] border-transparent hover:border-[var(--text-color)] navTrans">
                  <img
                    src={product.srcBack}
                    alt="Front"
                    className="object-cover size-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-[12px] text-[#A0A0A0] leading-[20px] font-[600] mb-[4px] uppercase">
                Clothing
              </h6>
              <h3 className="text-[28px] md:text-[30px] lg:text-[40px] text-[var(--text-color)] font-[500] mb-[12px]">
                {product.name}
              </h3>
              <div className="flex flex-row gap-[16px] items-center">
                <div className="flex flex-row gap-[4px] items-center">
                  <div className="flex flex-row gap-[2px] text-[var(--tex-color)]">
                    <BsStarFill size={16} />
                    <BsStarFill size={16} />
                    <BsStarFill size={16} />
                    <BsStarFill size={16} />
                    <BsStarFill size={16} />
                  </div>
                  <h6 className="text-[14px] text-[#4D4E4F] font-[500] leading-[22px]">
                    (134 reviews)
                  </h6>
                </div>
                <div className="flex flex-row">
                  <BsLightningChargeFill
                    size={20}
                    className="text-[#F03E3E] animate-pulse duration-300"
                  />
                  <h6 className="text-[14px] text-[#4D4E4F] font-[500] leading-[22px]">
                    18 sold in last 32 hours
                  </h6>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] my-[20px] pb-[20px] border-b-[1px] border-b-[#E9E9E9]">
                <div className="flex flex-row gap-[8px] items-center">
                  <h6 className="text-[16px] fontInst text-[#181818] font-[500] leading-[30px]">
                    ${product.price}
                  </h6>
                  <span className="line-through text-[16px] text-[var(--text-color-reduced)] mr-2 font-[400]">
                    98.99
                  </span>
                  <span className="bg-[#F03E3E] text-[#FFF] px-[8px] text-[12px] rounded-full">
                    -25%
                  </span>
                </div>
                <p className="text-[16px] text-[var(--text-color-inActive)] font-[500]">
                  The garments labelled as Committed are products that have been
                  produced using sustainable fibres or processes, reducing their
                  environmental impact.
                </p>
                <div className="flex flex-row gap-[8px] items-center">
                  <BsEye size={20} />
                  <p className="text-[14px] leading-[22px] text-[var(--text-color)] font-[500]">
                    28 people are viewing this right now
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="size flex flex-col gap-[12px]">
                  <div className="flex flex-row items-center justify-between">
                    Size: {size}
                    <p className="underline cursor-pointer">Size Guide</p>
                  </div>
                  <div className="flex flex-row gap-[12px]">
                    {["S", "M", "L", "XL", "XXL"].map((msize, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer flex justify-center items-center size-[48px] border-[2px] border-[#E9E9E9] py-[7px] px-[15px] rounded-full transition-all duration-300 text-[16px] leading-[22.4px] font-[400] ${
                          size === msize
                            ? "bg-[var(--text-color)] text-[#FFF]"
                            : "bg-[#FFF] text-[var(--text-color)]"
                        }`}
                        onClick={(e) => {
                          handleSize(e);
                        }}
                      >
                        {msize}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="size flex flex-col gap-[12px]">
                  <div className="flex flex-row items-center">Quantity:</div>
                  <div className="flex flex-row h-[48px] w-[180px] border-[2px] border-[#E9E9E9] rounded-full">
                    <span
                      onClick={handleDecrement}
                      className="h-full w-[44px] flex flex-row items-center justify-center cursor-pointer text-[var(--text-color)] hover:text-[var(--text-color-active)]"
                    >
                      <BiMinus size={24} />
                    </span>
                    <span className="w-[92px] h-full flex flex-row items-center justify-center border-x-[2px] border-[#E9E9E9]">
                      {quantity}
                    </span>
                    <span
                      onClick={handleIncrement}
                      className="h-full w-[44px] flex flex-row items-center justify-center cursor-pointer text-[var(--text-color)] hover:text-[var(--text-color-active)]"
                    >
                      <BiPlus size={24} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="py-[80px]">
          <RecentRelatedProducts setCart={setCart} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
