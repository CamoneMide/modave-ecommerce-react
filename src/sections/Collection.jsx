import { Link } from "react-router-dom";
import { allProducts } from "../constants";
import { ProductCard } from "../components";

const Collection = () => {
  return (
    <section className="">
      <div className="h-[212px] lg:h-[240px] w-full bg-[url(/src/assets/images/collection-imgBg1.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
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
          <p className="text-[var(--text-color-reduced)]">Women</p>
        </div>
      </div>
      <div className="py-[80px] w-full bg-[var(--text-color-white)] px-[15px]">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="h-[36px] flex flex-row items-center justify-between mb-[30px]">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[30px] gap-x-[15px] lg:gap-x-[24px]">
            {allProducts.slice(0, 16).map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  imgSrcFront={item.srcFront}
                  imgSrcBack={item.srcBack}
                  productName={item.name}
                  productPrice={item.price}
                />
              );
            })}
          </div>

          <div className="mt-[40px] flex flex-row justify-center items-center">
            <div className="flex flex-row items-center gap-[8px]">
              <a
                href=""
                className="text-[16px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] rounded-[5px] font-[600] size-[40px] flex items-center justify-center bg-[var(--text-color-white)]"
              >
                1
              </a>
              <a
                href=""
                className="text-[16px] text-[var(--text-color-white)] border-[1px] border-[var(--text-color)] rounded-[5px] font-[600] size-[40px] flex items-center justify-center bg-[var(--text-color)]"
              >
                2
              </a>
              <a
                href=""
                className="text-[16px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] rounded-[5px] font-[600] size-[40px] flex items-center justify-center bg-[var(--text-color-white)]"
              >
                3
              </a>
              <a
                href=""
                className="text-[16px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] rounded-[5px] font-[600] size-[40px] flex items-center justify-center bg-[var(--text-color-white)]"
              >
                <i className="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
