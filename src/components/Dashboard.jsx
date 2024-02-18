"use client";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { PiMedalFill } from "react-icons/pi";
import LeaderBoard from "./LeaderBoard";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div className="md:w-[30vw] p-4 flex flex-col gap-3 bg-gradient-to-b from-[#35443F] to-[#2D2D2D]">
      <div className="flex cursor-pointer">
        <div className="bg-white rounded-full h-5 w-5 mr-2"></div>
        <p className="opacity-90">
          Chat
        </p>
        <span className="font-semibold">SAT</span>
      </div>
      <div className="whitespace-nowrap shadow-box-shadow-inside bg-white/10  hover:cursor-pointer hover:shadow-box-hover-inside px-3 py-2 rounded-lg">
        New Thread
      </div>
      <div className="bg-white/10 shadow-box-shadow-inside rounded-lg px-4 py-3 flex justify-between items-center">
        <div className="w-24 md:w-28">
          <CircularProgressbarWithChildren
            strokeWidth={10}
            styles={{
              trail: {
                stroke: "#333",
              },
              background: {
                fill: "transparent",
              },
              path: {
                stroke: "#EDFE86",
                strokeLinecap: "round",
              },
            }}
            value={66}
          >
            <p className="text-[#EDFE86] text-[1rem] md:text-[15px]">4/7</p>
            <p className="text-[1rem] md:text-[15px]">Streak</p>
          </CircularProgressbarWithChildren>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <PiMedalFill color="#EDFE86" size={25} />
            <p className="text-3xl md:text-xs lg:text-3xl">0/223</p>
            <span className="text-[#EDFE86] md:text-xl lg:text-3xl">XP</span>
          </div>
          <div className="w-full flex justify-end">
            <button className="text-[#EDFE86] md:text-xs px-4 py-2 hover:bg-white/10 rounded-md md:px-2 md:py-1 bg-white/30 lg:px-4 lg:py-2">Take a Quiz</button>
          </div>
        </div>
      </div>
      <LeaderBoard/>
      <div className="flex items-center">
        <div className="bg-white rounded-full h-7 w-7 mr-2"></div>
        <p className="">
          Name
        </p>
      </div>
      <div className="flex gap-1 cursor-pointer items-center">
        <CiLogout/>
        <p className="text-xs">Sign Out</p>
      </div>
    </div>
  );
};

export default Dashboard;
