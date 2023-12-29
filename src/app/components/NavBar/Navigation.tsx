"use client";
import Button from "../Button";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const Navigation = () => {
  const MenuItems: string[] = ["Home", "About", "Services", "Price", "News"];

  const navigationVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <>
      <motion.ul
        className="flex md:flex-row xs:flex-col xs:absolute md:static top-0 left-0"
        variants={navigationVariants}
      >
        {[...MenuItems].map((item) => (
          <MenuItem key={item} title={item} />
        ))}
      </motion.ul>
      <Button
        text="Get Started"
        filled={false}
        large={false}
        classes="xs:hidden md:flex"
      />
    </>
  );
};

export default Navigation;
