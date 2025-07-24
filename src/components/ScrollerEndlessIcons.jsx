import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ScrollerEndlessIcons = ({
  children,
  direction,
  baseSpeed = 50,
  className = "",
  pauseOnHover,
  colrRight = "#000000",
  colrLeft = "#000000",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const x = useMotionValue(0);
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);

  // Responsive breakpoints
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLg = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !contentRef.current) return;

    const startAnimation = () => {
      const contentWidth = contentRef.current.scrollWidth / 2;
      let speed = baseSpeed;
      let targetX = direction === "left" ? -contentWidth : contentWidth;

      // Adjust speed based on screen size
      if (isMd) speed = baseSpeed * 0.7;
      if (isLg) speed = baseSpeed * 0.5;

      // Adjust speed on hover
      if (isHovered && pauseOnHover) speed *= 0.5;

      // For right direction, start from -contentWidth to create seamless loop
      if (direction === "right") {
        x.set(-contentWidth);
        targetX = 0;
      }

      const animation = animate(x, targetX, {
        duration: contentWidth / speed,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onUpdate: (latest) => {
          if (direction === "left" && latest <= -contentWidth) {
            x.set(0);
          } else if (direction === "right" && latest >= 0) {
            x.set(-contentWidth);
          }
        },
      });

      return () => animation.stop();
    };

    const timer = setTimeout(startAnimation, 50);
    return () => clearTimeout(timer);
  }, [direction, baseSpeed, isMd, isLg, isHovered, pauseOnHover, x, isMounted]);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left fade effect */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[80px] z-[8] pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${colrRight}, transparent)`,
        }}
      />

      {/* Scrolling content */}
      <motion.div
        ref={scrollerRef}
        className="flex items-center w-max"
        style={{ x }}
      >
        <div ref={contentRef} className="flex gap-[40px]">
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              key: `scroller-item-${index}`,
              className: `${child.props.className || ""} flex-shrink-0`,
            })
          )}
        </div>
      </motion.div>

      {/* Right fade effect */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[80px] z-[8] pointer-events-none"
        style={{
          background: `linear-gradient(to left, ${colrLeft}, transparent)`,
        }}
      />
    </div>
  );
};

export default ScrollerEndlessIcons;
