"use client";
import { Variants, motion } from "framer-motion";

interface MenuItemProps {
  title: string;
}

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    zIndex: 40,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    zIndex: -10,
    transition: {
      duration: 0.5,
    },
  },
};

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <>
      {isMobile ? (
        <motion.li variants={menuItemVariants} className="p-[30px]">
          <a href="#" className="text-3xl text-grey">
            {title}
          </a>
        </motion.li>
      ) : (
        <li className="mr-[40px]">
          <a href="#" className="text-white text-lg">
            {title}
          </a>
        </li>
      )}
    </>
  );
};

export default MenuItem;
