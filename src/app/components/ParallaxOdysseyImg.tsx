"use client";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import clsx from "clsx";

interface ParallaxOdysseyImgProps {
  classes: string;
  src: string;
  sectionRef: any;
  speed?: number;
}

const ParallaxOdysseyImg = ({
  classes,
  src,
  sectionRef,
  speed = 1,
}: ParallaxOdysseyImgProps) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 5], [0, 100 * speed]);

  return (
    <motion.div style={{ y: imgY }} className={clsx("absolute", classes)}>
      <Image src={src} alt="Parallax img" />
    </motion.div>
  );
};

export default ParallaxOdysseyImg;
