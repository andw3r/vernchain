import Image from "next/image";

interface ServicesOfferProps {
  img: any;
  title: string;
  desc: string;
}
const ServicesOffer = ({ img, title, desc }: ServicesOfferProps) => {
  return (
    <article>
      {/* img */}
      <div className="flex justify-center">
        <Image src={img} alt="offer pic" />
      </div>

      {/* content */}
      <div className="text-center">
        <h6 className="text-xl text-white font-bold mt-[20px] mb-[24px]">
          {title}
        </h6>

        <p className="text-lg text-silver font-normal">{desc}</p>
      </div>
    </article>
  );
};

export default ServicesOffer;
