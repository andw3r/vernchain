"use client";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import PriceOffer from "../components/PriceOffer";

const Price = () => {
  return (
    <section className="container xs:py-[60px] lg:py-[100px]">
      <div className="flex xl:flex-row xs:flex-col gap-12">
        <div className="">
          <SectionHeader
            subtitle="price"
            title="Flexible Pricing for Every Project"
            desc="Lorem ipsum dolor sit amet consectetur. Sapien tortor purus vivamus mi non commodo pellentesque iaculis. Enim pellentesque maecenas mauris varius."
          />
          <div className="flex mt-12">
            <Button text="Learn more" large={false} filled={false} />
          </div>
        </div>

        <div className="flex md:flex-row xs:flex-col gap-[27px] mx-auto">
          <PriceOffer
            filled={false}
            title="$600"
            subtitle="Basic Edition"
            desc="Lorem ipsum dolor sit amet consectetur. Eu eget ornare."
            including={["Lorem ipsum dolor", "Lorem ipsum dolor"]}
          />

          <PriceOffer
            filled={true}
            title="$1000"
            subtitle="Enterprise Edition"
            desc="Lorem ipsum dolor sit amet consectetur. Eu eget ornare."
            including={[
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Price;
