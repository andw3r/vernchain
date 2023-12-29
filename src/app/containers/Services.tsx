"use client";
import React from "react";
import SectionHeader from "../components/SectionHeader";
import ServicesOffer from "../components/ServicesOffer";
import imgsPath from "@/app/utils/imgsPath";

const Services = () => {
  const offersTitles = [
    { id: 1, title: "Blockchain Development" },
    { id: 2, title: "Smart Contract Development" },
    { id: 3, title: "Tokenization Services" },
    { id: 4, title: "Cryptocurrency Solutions" },
    { id: 5, title: "Security and Compliance" },
    { id: 6, title: "Tokenization Services" },
  ];

  const offerImgs = imgsPath({
    arrayLength: 6,
    srcFolder: "offers",
    imgExt: ".svg",
  });

  const offersData = offersTitles.map((offer, index) => {
    return {
      id: offer.id,
      title: offer.title,
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
      img: offerImgs[index],
    };
  });

  return (
    <section className="xs:py-[60px] md:py-[100px]">
      <SectionHeader
        subtitle="Services"
        title="Innovate with Blockchain Technology"
        textAlign="center"
        headerClasses="xs:mb-[48px]"
      />

      <div className="container grid lg:grid-cols-3 md:grid-cols-2 xs:gird-col-1 gap-5">
        {offersData.map((offer) => (
          <div key={offer.id}>
            <ServicesOffer
              title={offer.title}
              desc={offer.desc}
              img={offer.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
