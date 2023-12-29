"use client";
import Image from "next/image";
// imgs imports
import smallPlanet from "@/app/assets/imgs/odyssey/smallPlanet.svg";
import bigFrame from "@/app/assets/imgs/odyssey/bigFrame.svg";
import meteor from "@/app/assets/imgs/odyssey/meteor.svg";
import speedyFrame from "@/app/assets/imgs/odyssey/speedyFrame.svg";
import { useRef } from "react";

const Odyssey = () => {
  const ref = useRef(null);

  return (
    <section
      className="relative py-[125px] bg-main text-center overflow-hidden"
      ref={ref}
    >
      <div className="relative z-20">
        <div className="mb-[48px] max-w-[800px] w-full mx-auto">
          <h3 className="font-bold text-4xl text-black mb-[24px]">
            Start Your Crypto Odyssey With Us
          </h3>
          <p className="text-grey text-xl">
            Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque
            lectus sodales rhoncus.
          </p>
        </div>
        <div className="flex justify-center gap-[32px]">
          <a
            href="#"
            className="flex bg-black text-main hover:bg-grey font-normal py-[14px] rounded-full transition-all duration-200 px-[20px]"
          >
            Get Started
          </a>

          <a
            href="#"
            className="flex text-black border-2 border-black hover:bg-black hover:text-main font-normal py-[14px] rounded-full transition-all duration-200 px-[20px]"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="">
        <Image
          src={smallPlanet}
          alt="frame"
          className="absolute bottom-14 right-36"
        />
        <Image src={bigFrame} alt="frame" className="absolute bottom-0" />
        <Image src={meteor} alt="frame" className="absolute top-16 right-6" />
        <Image
          src={speedyFrame}
          alt="frame"
          className="absolute top-6 left-12"
        />
      </div>
    </section>
  );
};

export default Odyssey;
