import React from "react";
import { leaderboardData } from "./index";
import { PiMedalFill } from "react-icons/pi";

const LeaderBoard = () => {
  return (
    <div className="bg-white/10 flex flex-col gap-2 rounded-md">
      <div className="bg-white/10 shadow-box-shadow-inside rounded-md p-2 w-full">
        Leaderboard
      </div>
      <div className="flex gap-2 md:gap-1  flex-col overflow-y-auto h-40">
        {leaderboardData.map((data, index) => (
          <div
            className="flex justify-between bg-white/10 shadow-box-shadow-inside mx-2 mb-2 rounded-lg p-2 hover:cursor-pointer hover:shadow-box-hover-inside hover:bg-gradient-to-b from-[#6B795E] to-[#5C7772]  transition-all duration-500 ease-in-out"
            key={index}
          >
            <div className="flex justify-center items-center gap-1">
              <p className="text-[#EDFE86] md:text-sm lg:text-base">{data.rank}.</p>
              <PiMedalFill color="yellow" size={15} />
              <div className="rounded-full w-3 h-3 bg-white"></div>
              <p className="md:text-sm lg:text-base">{data.name}</p>
            </div>
            <div className="flex items-center">
              <p className="md:text-sm lg:text-base">
                {data.xp} <span className="text-[#EDFE86] lg:text-base">XP</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
