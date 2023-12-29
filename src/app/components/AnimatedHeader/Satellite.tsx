"use client";
import { motion, useAnimation } from "framer-motion";
import satellite from "@/app/assets/imgs/header-spheres/satellite.svg";
import { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

interface SatelliteProps {
  position: number;
  speed: number;
  reversed?: boolean;
  styles?: string;
  imgStyles?: string;
}

const Satellite = ({
  position,
  speed,
  reversed = false,
  styles,
  imgStyles,
}: SatelliteProps) => {
  const controls = useAnimation();

  const satelliteVariants = {
    initial: { rotate: position },
    rotate: {
      rotate: reversed ? 360 + position : -360 + position,
      transition: {
        ease: "easeInOut",
        duration: speed,
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    controls.start(satelliteVariants.rotate);
  }, [controls, satelliteVariants.rotate]);

  return (
    <motion.div
      initial="initial"
      animate="rotate"
      variants={satelliteVariants}
      className={clsx(
        "absolute h-full w-full translate-x-1/2 translate-y-1/2",
        styles
      )}
    >
      <Image
        src={satellite}
        alt="Satellite Image"
        className={clsx("max-w-none max-h-none", imgStyles)}
      />
    </motion.div>
  );
};

export default Satellite;
