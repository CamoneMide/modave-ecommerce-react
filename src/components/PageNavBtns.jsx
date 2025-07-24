const PageNavBtns = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center gap-[8px]">
          <a
            href=""
            className="text-[16px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] rounded-[5px] font-[600] size-[40px] flex items-center justify-center bg-[var(--text-color-white)] transition-all duration-300 ease-in-out hover:bg-[var(--text-color)] hover:text-[var(--text-color-white)]"
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
            className="text-[16px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] rounded-[5px] font-[600] size-[40px] flex items-center justify-center bg-[var(--text-color-white)] transition-all duration-300 ease-in-out hover:bg-[var(--text-color)] hover:text-[var(--text-color-white)]"
          >
            3
          </a>
          <a
            href=""
            className="text-[16px] text-[var(--text-color)] border-[1px] border-[#E9E9E9] rounded-[5px] font-[600] size-[40px] flex items-center justify-center bg-[var(--text-color-white)] transition-all duration-300 ease-in-out hover:bg-[var(--text-color)] hover:text-[var(--text-color-white)]"
          >
            <i className="bx bx-chevron-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default PageNavBtns;
