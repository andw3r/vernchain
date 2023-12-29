"use client";

import { motion, useAnimation, useCycle } from "framer-motion";
import ToggleButton from "./ToggleButton";
import Navigation from "./Navigation";
import { useEffect } from "react";

const sidebarVariants = {
  open: {
    clipPath: `circle(1200px at 25px 50px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(30px at calc(100% - 50px) 50px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const Menu = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const controls = useAnimation();
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }

    return () => {
      body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    !isMobile ?? controls.start(sidebarVariants.closed && sidebarVariants.open);
  }, [isMobile, controls]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="flex items-center"
      >
        <motion.div
          className="md:hidden bg-silver absolute w-screen h-screen min-w-full min-h-full z-30 top-0 right-0"
          variants={sidebarVariants}
        />
        <ToggleButton toggle={() => toggleOpen()} />
        <Navigation />
      </motion.nav>
    </>
  );
};

export default Menu;
