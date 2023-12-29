import imgsPath from "@/app/utils/imgsPath";
import Image from "next/image";

const Logos = () => {
  const logos = imgsPath({
    arrayLength: 4,
    srcFolder: "logos",
    imgExt: ".svg",
  });

  return (
    <div className="relative z-10 bg-main grid lg:gap-y-0 xs:gap-x-3 md:gap-x-0 md:gap-y-5 xs:gap-y-4 grid-flow-col lg:mt-[225px] md:mt-[165px] xs:mt-[80px] rounded-lg 2xl:mx-[120px] 2xl:px-[100px] 2xl:py-[28px] xl:px-[50px] xl:py-[20px] xl:mx-[60px] lg:px-[25px] lg:py-[16px] lg:mx-[30px] md:px-[25px] md:py-[16px] md:mx-[20px] xs:px-[15px] xs:py-[16px] xs:mx-[10px]">
      {logos.map((logoPath, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image src={logoPath} alt="logo" />
        </div>
      ))}
    </div>
  );
};

export default Logos;
