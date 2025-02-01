import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ColorBar from "./ColorBar";
import { FaArrowUp } from "react-icons/fa";

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
  name?: string;
}

const Expenses = () => {
  const barSegments: BarSegment[] = [
    { color: "bg-[#F9A000]", size: 70, name: "Withdrawals" }, // 70% Orange
    { color: "bg-[#69ABF2]", size: 15, name: "Subscription" }, // 15% Blue
    { color: "bg-[#FE7C84]", size: 15, name: "Top-up" }, // 15% red
  ];
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Expenses</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <div className="mt-4">
        <ColorBar segments={barSegments} />
        <div className="mt-4 flex gap-5">
          {barSegments.map((item, index) => (
            <div
              key={index}
              style={{
                borderRight:
                  index === barSegments.length - 1
                    ? "none"
                    : "1px solid #E8E8E9",
              }}
              className="pr-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`h-[10px] w-[10px] ${item.color} rounded-full`}
                ></div>
                <p className="text-accent text-[12px] font-medium">
                  {item.name}
                </p>
              </div>
              <div className="font-semibold flex items-center gap-2">
                $4.200 <FaArrowUp className="text-[#009DA2] text-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
