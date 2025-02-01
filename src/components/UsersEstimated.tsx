"use client";

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import GaugeChart from "react-gauge-chart";
import { FaArrowUp } from "react-icons/fa";

const UsersEstimated = () => {
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Users</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <p className="text-accent mt-1 text-[14px]">Estimated users on hairsby</p>
      <div className="mt-6">
        <div className="relative">
          <GaugeChart
            id="gauge-chart2"
            colors={[
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F9A000",
              "#F1F2F4",
              "#F1F2F4",
              "#F1F2F4",
              "#F1F2F4",
              "#F1F2F4",
            ]}
            nrOfLevels={15}
            arcWidth={0.3}
            arcPadding={0.06}
            hideText={true} // Hides the text value
            needleColor="transparent" // Makes the needle invisible
            needleBaseColor="transparent" // Hide needle base
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-2 mt-4">
            <h4 className="text-[20px] font-medium">75k</h4>
            <div className="flex items-center gap-2">
              <p className="text-[#15AC77] font-bold flex gap-1 items-center">
                10% <FaArrowUp className="text-[#009DA2] text-sm" />
              </p>
              <p className="text-accent">+5 today</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 items-center flex-wrap mt-4">
          <p className="text-accent font-bold">Specialist: 7854</p>
          <p className="text-accent font-bold"> Business: 745</p>
          <p className="text-accent font-bold"> Customers: 786478</p>
        </div>
      </div>
    </div>
  );
};

export default UsersEstimated;
