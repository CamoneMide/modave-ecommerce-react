import React from "react";
import { allProducts } from "../constants";
import { PageNavBtn, ProductCard, TopHeroReUse } from "../components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { getPageArray, scrollToSection } from "../utils/someFunctions";

const Collection = ({ setCart }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  // const [pscrolLoad, setPscrolLoad] = React.useState(false);

  const totalItems = allProducts.length;
  const itemsPerPage = 12;
  const skip = (currentPage - 1) * itemsPerPage;
  const pageNumbers = getPageArray(totalItems, itemsPerPage);

  // if (pscrolLoad) {
  //   return (
  //     <>
  //       <div className="flex flex-col items-center justify-center size-full">
  //         Loading...
  //       </div>
  //     </>
  //   );
  // }

  return (
    <section>
      <div id="colScrolTop" className="w-full" />
      <div>
        <TopHeroReUse text={"Women"} />
      </div>

      <div className="py-[80px] w-full bg-[var(--text-color-white)] px-[20px] md:px-[30px] lg:px-0">
        <div className="mx-auto w-full max-w-[1290px]">
          <div
            className="h-[36px] flex flex-row items-center justify-between mb-[30px]"
            data-scroll-section
          >
            <div className="flex flex-row items-center gap-[16px]">
              <div className="h-[36px] flex flex-row items-center border-[2px] border-[#E9E9E9] hover:border-[var(--text-color)] cursor-pointer gap-[4px] py-[3px] px-[10px] rounded-[4px] bg-[var(--text-color-white)] text-[var(--text-color)] transition-all duration-200">
                <span className="text-[16px] font-[400]">
                  <i className="fa-solid fa-sliders"></i>
                </span>
                <span className="text-[16px]">Filter</span>
              </div>
              <div className="flex-row items-center hidden lg:flex gap-[4px]">
                <span className="text-[20px] text-[var(--text-color-reduced)]">
                  <i className="bx bx-check-circle"></i>
                </span>
                <p className="text-[14px] font-[400] leading-[22px]">
                  Shop sale items only
                </p>
              </div>
            </div>
            <div className="flex-row items-center flex gap-[12px]">
              {/* Grid 1 2/2 */}
              <span className="flex-row items-center flex gap-[1px] cursor-pointer">
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] bg-[var(--text-color)] md:bg-transparent" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] bg-[var(--text-color)] md:bg-transparent" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] bg-[var(--text-color)] md:bg-transparent" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] bg-[var(--text-color)] md:bg-transparent" />
                </span>
              </span>
              {/* Grid 2 2/3 */}
              <span className="flex-row items-center flex gap-[1px] cursor-pointer">
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] md:bg-[var(--text-color)] lg:bg-transparent" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] md:bg-[var(--text-color)] lg:bg-transparent" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] md:bg-[var(--text-color)] lg:bg-transparent" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] md:bg-[var(--text-color)] lg:bg-transparent" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] md:bg-[var(--text-color)] lg:bg-transparent" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] md:bg-[var(--text-color)] lg:bg-transparent" />
                </span>
              </span>
              {/* Grid 3 2/4 */}
              <span className="flex-row items-center hidden md:flex gap-[1px] cursor-pointer">
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)] lg:bg-[var(--text-color)]" />
                </span>
              </span>
              {/* Grid 3 2/5 */}
              <span className="flex-row items-center hidden lg:flex gap-[1px] cursor-pointer">
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                </span>
                <span className="flex flex-col gap-[1px]">
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                  <span className="size-[6px] border-[1px] rounded-full border-[var(--text-color)]" />
                </span>
              </span>
            </div>
            <div className="flex flex-row items-center gap-[12px] text-[var(--text-color)] text-[14px] font-[400]">
              <p className="hidden lg:flex">Sort by:</p>
              <select
                name=""
                id=""
                className="outline-none focus:ring-0 border-[2px] border-[#E9E9E9] hover:border-[var(--text-color)] focus:border-[var(--text-color)] rounded-[4px] py-[5px] px-[12px] transition-all duration-200 text-[12px]"
              >
                <option value="">Best selling</option>
                <option value="">Alphabetically, A-Z</option>
                <option value="">Alphabetically, Z-A</option>
                <option value="">Price, low to high</option>
                <option value="">Price, high to low</option>
              </select>
            </div>
          </div>

          <section data-scroll-section>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[30px] gap-x-[15px] lg:gap-x-[24px]">
              {allProducts.slice(skip, skip + itemsPerPage).map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    imgSrcFront={item.srcFront}
                    imgSrcBack={item.srcBack}
                    productName={item.name}
                    productPrice={item.price}
                    setCart={setCart}
                  />
                );
              })}
            </div>
          </section>

          <div className="mt-[40px] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center gap-[8px]">
              {pageNumbers.slice(0, 3).map((pageNo) => {
                let mActive = pageNo === currentPage ? true : false;
                return (
                  <div
                    key={pageNo}
                    onClick={() => {
                      scrollToSection("colScrolTop");
                      setCurrentPage(pageNo);
                    }}
                  >
                    <PageNavBtn to={"/product"} active={mActive}>
                      {pageNo}
                    </PageNavBtn>
                  </div>
                );
              })}

              <div
                onClick={() => {
                  scrollToSection("colScrolTop");
                  if (currentPage < pageNumbers.length) {
                    setCurrentPage((prev) => prev + 1);
                  } else if (currentPage >= pageNumbers.length) {
                    setCurrentPage(1);
                  }
                }}
              >
                <PageNavBtn to={"/product"}>
                  <MdOutlineArrowForwardIos />
                </PageNavBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
