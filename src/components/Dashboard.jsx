"use client";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { PiMedalFill } from "react-icons/pi";
import LeaderBoard from "./LeaderBoard";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div className="md:w-[30vw] flex flex-col gap-3 bg-gradient-to-b from-[#1c594f] to-[#333] p-5 md:overflow-y-auto max-h-screen">
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
      <div className="bg-white/10 shadow-box-shadow-inside rounded-lg px-4 py-3 flex justify-between">
        <div className="w-16">
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
                stroke: "greenyellow",
                strokeLinecap: "round",
              },
            }}
            value={66}
          >
            <p className="text-[#ADFF2F] md:text-[14px]">4/7</p>
            <p className="text-[10px]">Streak</p>
          </CircularProgressbarWithChildren>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <PiMedalFill color="#ADFF2F" size={25} />
            <p className="md:text-2xl">0/223</p>
            <span className="text-[#ADFF2F] md:text-2xl">XP</span>
          </div>
          <div className="w-full flex justify-end">
            <button className="text-[#ADFF2F] md:text-xs px-2 py-[6px] hover:bg-white/10 rounded-md bg-white/30">Take a Quiz</button>
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
      <div className="flex gap-2 items-center">
        <CiLogout className="cursor-pointer"/>
        <p>Sign Out</p>
      </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
    </div>
  );
};

export default Dashboard;
