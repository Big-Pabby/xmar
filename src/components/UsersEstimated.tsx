"use client";

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import GaugeChart from "react-gauge-chart";

const UsersEstimated = () => {
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Users</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <p className="text-accent mt-4 text-[14px]">Estimated users on hairsby</p>
      <div className="mt-6">
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
      </div>
    </div>
  );
};

export default UsersEstimated;
