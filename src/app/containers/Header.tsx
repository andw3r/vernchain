"use client";
import Button from "../components/Button";
import ParallaxImage from "../components/AnimatedHeader/ParallaxImage";

const Header = () => {
  return (
    <>
      <section className="relative container grid 2xl:mt-[180px] xl:mt-[160px] lg:mt-[150px] md:mt-[120px] sm:mt-[90px]">
        <header className="relative xl:w-[45%] md:w-[55%] sm:w-[90%] xs:w-auto z-20">
          <div className="relative z-0">
            <h1 className="text-white font-bold xs:text-4xl sm:text-6xl">
              Trusted Crypto Preservation
            </h1>
            <p className="text-silver md:text-xl xs:mt-[20px] xs:mb-[35px] sm:mt-[40px] sm:mb-[48px]">
              Lorem ipsum dolor sit amet consectetur. Duis morbi scelerisque
              lectus sodales rhoncus.
            </p>

            <div>
              <Button
                classes="xs:mr-[15px] sm:mr-[32px]"
                filled={true}
                large={false}
                text="Get Started"
              />
              <Button filled={false} large={false} text="Learn More" />
            </div>
          </div>
        </header>

        {/* imgs */}
        <div className="absolute z-10 xs:top-1/4 md:-top-1/3 right-1/4">
          <ParallaxImage />
        </div>
      </section>
    </>
  );
};

export default Header;
