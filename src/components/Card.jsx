"use client";
import { FaArrowTrendUp } from "react-icons/fa6";
import { cardData } from "./index";

import React from "react";

const Card = () => {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="w-[75%] md:w-[80%] lg:w-[75%] flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-col items-start w-full">
          <div className="flex gap-1">
            <p className="md:text-[20px] lg:text-3xl font-semibold">Hey, </p>
            <span className="text-[#EDFE86] md:text-[20px] lg:text-3xl font-semibold">Name!</span>
          </div>
          <div className="flex gap-1">
            <p className="lg:text-3xl md:text-[20px] font-semibold">How&#39;s your prep for the </p>
            <span className="text-[#EDFE86] md:text-[20px] lg:text-3xl font-semibold">March SAT</span>
          </div>
        </div>
        <div className="flex gap-5 w-full flex-wrap">
          {cardData.map((data, index) => (
            <div
              className="h-[200px] w-[270px] md:w-[200px] md:h-70 lg:w-72 hover:shadow-box-shadow transition-all duration-500 ease-in-out p-5 bg-[#404240]/50 rounded-xl flex justify-center flex-col gap-2 border-[1px] border-white/20 hover:cursor-pointer hover:border-none"
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
