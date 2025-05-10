"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorBubble() {
  // raw pointer coords (start offscreen)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // spring-smoothed coords
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // visible only when pointer is “in” the window
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };
    const outHandler = (e: MouseEvent) => {
      // when the pointer moves out of the window, relatedTarget is null
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseout", outHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseout", outHandler);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      // semi-transparent fill that shows on both themes
      className="
        pointer-events-none
        fixed top-0 left-0 z-50
        w-6 h-6
        rounded-full
        bg-black dark:bg-white
        backdrop-blur-sm
      "
      // toggle opacity based on isVisible
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 0.6 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
    />
  );
}
