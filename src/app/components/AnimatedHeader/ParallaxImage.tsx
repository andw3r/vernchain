"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import mainSphere from "@/app/assets/imgs/header-spheres/main.svg";
import planet from "@/app/assets/imgs/header-spheres/planet.svg";
import Satellite from "./Satellite";

const ParallaxImage = ({}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const controls = useAnimation();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 992;

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxSphereVariants = {
    initial: { opacity: 0 },
    move: !isMobile
      ? {
          x:
            (-mouseX -
              (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
            25,
          y:
            (-mouseY -
              (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
            25,
          opacity: 1,
        }
      : { opacity: 1 },
  };

  const parallaxPlanetVariants = {
    initial: { opacity: 0 },
    move: !isMobile
      ? {
          x:
            (mouseX -
              (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
            100,
          y:
            (mouseY -
              (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
            100,
          opacity: 1,
        }
      : { opacity: 1 },
  };

  useEffect(() => {
    controls.start(parallaxSphereVariants.move);
    controls.start(parallaxPlanetVariants.move);
  }, [controls, parallaxSphereVariants.move, parallaxPlanetVariants.move]);

  return (
    <>
      <motion.div
        initial="initial"
        animate="move"
        variants={parallaxSphereVariants}
        className="relative w-[200px] h-[200px]"
      >
        <Image
          src={mainSphere}
          alt="Parallax Swing Image"
          className="absolute max-w-none max-h-none top-[15%] left-[15%] overflow-hidden pointer-events-none"
        />

        <Satellite
          position={-10}
          speed={70}
          styles="left-[10%] top-[-5%]"
          imgStyles="scale-125"
        />

        <Satellite
          position={-60}
          speed={45}
          reversed={true}
          styles="left-[10%] top-[-5%]"
          imgStyles="scale-50"
        />

        <Satellite
          position={180}
          speed={20}
          reversed={true}
          styles="left-[10%] top-[-5%]"
        />
      </motion.div>

      <motion.div
        initial="initial"
        animate="move"
        variants={parallaxPlanetVariants}
        className="absolute xs:hidden md:block top-fullright-full overflow-hidden"
      >
        <Image
          src={planet}
          alt="Parallax Swing Image"
          className="max-w-none max-h-none overflow-hidden pointer-events-none"
        />
      </motion.div>
    </>
  );
};

export default ParallaxImage;
