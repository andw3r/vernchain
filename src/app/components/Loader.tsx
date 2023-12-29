"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Loader = () => {
  const circleVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 3 } },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start(circleVariants.animate);
  }, [controls, circleVariants.animate]);

  return (
    <motion.div
      variants={circleVariants}
      animate={controls}
      className="flex items-center justify-center w-screen h-screen z-50 bg-grey fixed top-0 left-0 min-w-full min-h-full"
    />
  );
};

export default Loader;
