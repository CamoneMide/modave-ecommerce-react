import React from "react";
import { Link } from "react-router-dom";
import { FadeUp } from "../animations";
import { PageNavBtn, TopHeroReUse } from "../components";
import { categories } from "../constants";
import { getPageArray, scrollToSection } from "../utils/someFunctions";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const CategoriesPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalItems = categories.length;
  const itemsPerPage = 8;
  const skip = (currentPage - 1) * itemsPerPage;
  const pageNumbers = getPageArray(totalItems, itemsPerPage);

  return (
    <section>
      <div id="categScrolTop" className="w-full" />
      <div>
        <TopHeroReUse text={"Categories"} />
      </div>

      <div className="py-[80px] w-full bg-[var(--text-color-white)] px-[20px] md:px-[30px] lg:px-0">
        <div className="mx-auto w-full max-w-[1290px]">
          <section data-scroll-section>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[30px] gap-x-[15px] lg:gap-x-[30px]">
              {categories.slice(skip, skip + itemsPerPage).map((category) => (
                <FadeUp
                  distance={40}
                  duration={0.4}
                  delay={0.06 * category.id}
                  key={category.id}
                  className="relative flex flex-col group/categPg"
                >
                  <div className="flex size-full overflow-clip rounded-[20px] lg:rounded-[40px]">
                    <img
                      src={category.src}
                      alt={`CategoryImg-${category.id}`}
                      className="object-cover w-full h-full group-hover/categPg:scale-[1.12] imgTrans"
                    />
                  </div>
                  <div className="absolute bottom-0 p-[20px] flex flex-col justify-end w-full">
                    <Link
                      to="/product"
                      className="w-full bg-[#FFF] py-[12px] px-[24px] flex justify-center md:justify-between items-center rounded-full group/catLnk cursor-pointer relative overflow-hidden"
                    >
                      <h6 className="text-[var(--text-color)] text-[16px] md:text-[18px] lg:text-[20px] font-[500] group-hover/catLnk:text-[var(--text-color-active)] transition-all duration-500 ease-in-out">
                        {category.textH6}
                      </h6>
                      <span className="relative hidden overflow-hidden md:flex">
                        <p className="text-[var(--text-color-inActive)] text-[16px] flex font-[400] group-hover/catLnk:opacity-0 transition-all duration-500 ease-in-out">
                          {category.count} items
                        </p>
                        <i className="bx bx-arrow-back rotate-[135deg] font-[500] text-[18px] md:text-[20px] -ml-[14px] text-[var(--text-color-active)] absolute right-0 top-0 translate-x-[100%] group-hover/catLnk:translate-x-0 transition-all duration-500 ease-in-out"></i>
                      </span>

                      <i className="bx bx-arrow-back rotate-[135deg] font-[500] text-[18px] md:text-[20px] -ml-[14px] text-[var(--text-color-active)] absolute right-[18px] top-[45%] translate-x-[100%] group-hover/catLnk:translate-x-0 transition-all duration-500 ease-in-out flex md:hidden w-[25%]"></i>
                    </Link>
                  </div>
                </FadeUp>
              ))}
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
                      scrollToSection("categScrolTop");
                      setCurrentPage(pageNo);
                    }}
                  >
                    <PageNavBtn to={"/collection"} active={mActive}>
                      {pageNo}
                    </PageNavBtn>
                  </div>
                );
              })}

              <div
                onClick={() => {
                  scrollToSection("categScrolTop");
                  if (currentPage < pageNumbers.length) {
                    setCurrentPage((prev) => prev + 1);
                  } else if (currentPage >= pageNumbers.length) {
                    setCurrentPage(1);
                  }
                }}
              >
                <PageNavBtn to={"/collection"}>
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

export default CategoriesPage;
