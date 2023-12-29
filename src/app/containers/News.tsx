"use client";
import React, { useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import NewsItem from "../components/NewsItem";
import imgsPath from "../utils/imgsPath";
import Button from "../components/Button";
import NewsSwitch from "../components/NewsSwitch";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const News = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const newsTitles = [
    { id: 1, title: "Green Crypto: Sustainable Blockchain Trends" },
    { id: 2, title: "Rising NFT Trends: The Latest Buzz" },
    { id: 3, title: "Blockchain Boosts Supply Chain Efficiency" },
    { id: 4, title: "Blockchain Boosts Supply Chain Efficiency" },
    { id: 5, title: "Rise of Tokenization in Blockchain" },
  ];

  const newsImgs = imgsPath({
    arrayLength: newsTitles.length,
    srcFolder: "news",
    imgExt: ".png",
  });

  const newsData = newsTitles.map((item, index) => {
    return {
      id: item.id,
      title: item.title,
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquam id volutpat enim risus. Felis enim consectetur habitant mi nam nullam.",
      img: newsImgs[index],
    };
  });

  return (
    <section className="xs:mt-[60px] lg:mt-[100px] mb-[80px]">
      <div className="mb-[48px]">
        <SectionHeader
          subtitle="news"
          title="Dive into Our Dynamic News Feed"
          textAlign="center"
        />
      </div>

      {/* swiper */}
      <div className="overflow-x-hidden flex">
        <Swiper
          className="mySwiper"
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            665: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1130: { slidesPerView: 3, spaceBetween: 15 },
            1360: { slidesPerView: 4, spaceBetween: 20 },
            1536: { slidesPerView: 4, spaceBetween: 25 },
            1800: { slidesPerView: 5, spaceBetween: 25 },
          }}
          freeMode={true}
        >
          {newsData.map((item) => (
            <SwiperSlide key={item.id} className="!w-[382px]">
              <NewsItem img={item.img} title={item.title} desc={item.desc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-10">
        <Button filled={false} large={false} text="See More" />
      </div>
    </section>
  );
};

export default News;
