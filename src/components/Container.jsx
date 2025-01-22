import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <>
      <div
        className={twMerge(
          "mx-auto max-w-[1290px] px-[20px] md:px-[30px] lg:px-[20px]",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
