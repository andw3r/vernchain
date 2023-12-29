import SectionHeader from "../components/SectionHeader";
import Image from "next/image";
import systempic from "@/app/assets/imgs/system.svg";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className="xs:h-[600px] sm:h-[800px] w-full relative">
      <div className="absolute top-0 left-0 xl:opacity-100 xs:opacity-60">
        <Image src={systempic} alt="system" />
      </div>
      <div className="container w-full relative z-10 xl:pt-[185px] lg:pt-[135px] md:pt-[95px] sm:pt-[75px] xs:pt-[55px]">
        <div className="xl:w-1/2 sm:w-2/3 xs:w-full ml-auto">
          <SectionHeader
            subtitle="about us"
            title="Crypto Saving Base of Your Choice"
            desc="Lorem ipsum dolor sit amet consectetur. Pharetra mi quis arcu felis porttitor eget consectetur. Sed amet ridiculus sit nullam euismod. At mattis diam dui duis felis sem posuere lectus. Tincidunt a quis ornare mauris mauris aliquet interdum. Ac volutpat dolor quam adipiscing amet vitae in."
          />
          <div className="mt-[26px]">
            <Button filled={false} large={false} text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
