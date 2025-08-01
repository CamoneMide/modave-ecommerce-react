// import { useEffect, useState } from "react";

// const Loader = () => {
//   const [animate, setAnimate] = useState(false);
//   // const [hideBackground, setHideBackground] = useState(false);

//   useEffect(() => {
//     const handlePageLoad = () => {
//       setAnimate(true); // move + shrink
//       // setTimeout(() => {
//       //   setHideBackground(true);
//       // }, 1000);
//     };

//     if (document.readyState === "complete") {
//       handlePageLoad();
//     } else {
//       window.addEventListener("load", handlePageLoad);
//     }

//     return () => window.removeEventListener("load", handlePageLoad);
//   }, []);

//   return (
//     <div
//       className={`fixed inset-0 z-50 bg-[var(--text-color-white)] ${
//         animate ? "" : " "
//       }`}
//     >
//       <div className="absolute flex items-center justify-center -translate-x-5 -translate-y-5">
//         <svg
//           viewBox="0 0 600 140"
//           className="w-[24rem] lg:w-[28rem] font-[700] fontPop"
//         >
//           <text
//             x="50%"
//             y="50%"
//             dy=".32em"
//             textAnchor="middle"
//             className="text-body text-[5rem] stroke-[2] stroke-[var(--text-color)] -tracking-[6px]"
//           >
//             Modave
//           </text>
//           <text
//             x="50%"
//             y="50%"
//             dy=".32em"
//             dx="2.32em"
//             textAnchor="middle"
//             className="text-body text-[5rem] stroke-[2] stroke-[var(--text-color)] -tracking-[6px]"
//           >
//             . . .
//           </text>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Loader;

const Loader = ({ animate, logoPosition }) => {
  return (
    <div
      className={`fixed inset-0 w-full bg-[var(--text-color-white)] transition-all myLDelay ease-in-out ${
        animate ? "opacity-0 -z-[10]" : "opacity-[1] z-[60]"
      }`}
    >
      <div
        className={`fixed top-0 left-[${logoPosition}px] h-[64px] w-full px-[20px] text-[#181818] bg-none transition-all duration-1000 delay-500 ease-in-out ${
          animate
            ? "translate-y-0 translate-x-0"
            : "translate-y-[40vh] translate-x-[12vw] md:translate-x-[25vw] lg:translate-x-[32vw]"
        }`}
      >
        <svg
          viewBox="0 0 600 140"
          className={`w-[16rem] lg:w-[20rem] font-[600] fontPop transition-all duration-1000 delay-500 ease-in-out ${
            animate ? "translate-x-[42px]" : "translate-x-0"
          }`}
        >
          <text
            x="50%"
            y="50%"
            dy=".32em"
            textAnchor="middle"
            className="text-body text-[5rem] stroke-[2] stroke-[var(--text-color)] -tracking-[6px]"
          >
            Modave
          </text>
          <text
            x="50%"
            y="50%"
            dy=".32em"
            dx="2.32em"
            textAnchor="middle"
            className={`text-body text-[5rem] stroke-[2] stroke-[var(--text-color)] -tracking-[6px] navTrans ${
              animate ? "opacity-0" : "opacity-[1]"
            } `}
          >
            . . .
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
