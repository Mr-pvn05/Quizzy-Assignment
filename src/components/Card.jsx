"use client";
import { FaArrowTrendUp } from "react-icons/fa6";
import { cardData } from "./index";

import React from "react";

const Card = () => {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="w-3/4 flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-1">
            <p className="md:text-3xl font-semibold">Hey, </p>
            <span className="text-[#ADFF2F] md:text-3xl font-semibold">Name!</span>
          </div>
          <div className="flex gap-1">
            <p className="md:text-3xl font-semibold">How&#39;s your prep for the </p>
            <span className="text-[#ADFF2F] md:text-3xl font-semibold"> March SAT</span>
          </div>
        </div>
        <div className="flex gap-5 w-full flex-wrap">
          {cardData.map((data, index) => (
            <div
              className="h-[200px] w-[270px] md:h-70 md:w-72 hover:shadow-box-shadow transition-all duration-500 ease-in-out p-5 bg-[#333] rounded-xl flex justify-center flex-col gap-2 border-[1px] border-white/20 hover:cursor-pointer hover:border-none"
              key={index}
            >
              <div>
                <p className="text text-xs opacity-50 font-extralight">
                  {data.head}
                </p>
                <span className="text text-xs opacity-50 font-extralight">
                  {data.date}
                </span>
              </div>
              <FaArrowTrendUp color="white" size={50} />
              <h2 className="text-3xl md:font-semibold">{data.title}</h2>
              <p className="text-xs opacity-70 font-extralight leading-3">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
