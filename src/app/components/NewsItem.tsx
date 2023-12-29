"use client";
import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface NewsItemProps {
  img: any;
  title: string;
  desc: string;
}

const NewsItem = ({ img, title, desc }: NewsItemProps) => {
  return (
    <article className="flex flex-col border border-main rounded-normal max-w-full w-[382px] cursor-pointer bg-grey">
      {/* img */}

      <div className="">
        <Image
          src={img}
          alt="news img"
          className="overflow-hidden rounded-t-normal"
        />
      </div>

      <div className="px-[28px] pt-[32px] pb-[40px]">
        <header className="mb-[36px]">
          <h6 className="font-bold text-xl mb-4 text-white">{title}</h6>

          <p className="text-base text-white">{desc}</p>
        </header>

        <div className="flex justify-between">
          {/* date */}
          <span className="text-base text-white">Nov. 28, 2023</span>

          {/* button  */}
          <a className="flex font-bold items-center text-main" href="#">
            <span>See more</span>
            <MdArrowForwardIos className="" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsItem;
