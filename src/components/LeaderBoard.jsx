import React from "react";
import { leaderboardData } from "./index";
import { PiMedalFill } from "react-icons/pi";

const LeaderBoard = () => {
  return (
    <div className="flex gap-2 flex-col rounded-md bg-white/10">
      <div className="bg-white/10 shadow-box-shadow-inside rounded-md p-2">
        Leaderboard
      </div>
      {leaderboardData.map((data, index) => (
        <div
          className="flex justify-between bg-white/10 shadow-box-shadow-inside mx-2 mb-2 rounded-lg p-2 hover:cursor-pointer hover:shadow-box-hover-inside  transition-all duration-500 ease-in-out"
          key={index}
        >
          <div className="flex justify-center items-center gap-1">
            <p className="text-[#ADFF2F]">{data.rank}.</p>
            <PiMedalFill color="yellow" size={15} />
            <div className="rounded-full w-3 h-3 bg-white"></div>
            <p>{data.name}</p>
          </div>
          <div>
            <p>
              {data.xp} <span className="text-[#ADFF2F]">XP</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderBoard;
