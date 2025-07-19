import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbArrowBarToDown } from "react-icons/tb";
import { TbArrowBarUp } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import LineChart from "./LineChart";

interface BarSegment {
  title: string;
  newRate: number; // Percentage of the bar
  prevRate: number;
}

const Statistics = () => {
  const barSegments: BarSegment[] = [
    { title: "Outflow", newRate: 7500, prevRate: 7750 },
    { title: "Inflow", newRate: 10000, prevRate: 9000 },
  ];

  const calculatePercentageChange = (
    oldValue: number,
    newValue: number
  ): string => {
    if (oldValue === 0) return "N/A"; // Avoid division by zero

    const change = ((newValue - oldValue) / Math.abs(oldValue)) * 100;
    const formattedChange = change.toFixed(); // Keep 2 decimal places

    return change > 0 ? `+${formattedChange}%` : `${formattedChange}%`;
  };
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Statistics</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <p className="text-accent mt-1 text-[14px]">Income and Expenses</p>
      <div className="mt-4 flex gap-5">
        {barSegments.map((item, index) => (
          <div
            key={index}
            style={{
              borderRight:
                index === barSegments.length - 1 ? "none" : "1px solid #E8E8E9",
            }}
            className="pr-6"
          >
            <div className="flex items-center gap-2 text-accent font-medium">
              {item.title === "Expenses" ? (
                <TbArrowBarToDown className="text-primary text-[20px]" />
              ) : item.title === "Income" ? (
                <TbArrowBarUp className="text-[#FE5B65] text-[20px]" />
              ) : (
                <TbArrowsExchange className="text-primary text-[20px]" />
              )}
              {item.title}
            </div>
            <div className="flex mt-2 items-center gap-2 font-medium text-[20px] pl-6">
              {item.title === "Transactions" ? (
                <h4>{item.newRate}</h4>
              ) : (
                <h4>${item.newRate}</h4>
              )}
              <span
                className={`${
                  item.newRate > item.prevRate
                    ? "text-[#15AC77]"
                    : "text-[#FE5B65]"
                } flex gap-1 items-center font-bold text-sm`}
              >
                {calculatePercentageChange(item.prevRate, item.newRate)}{" "}
                {item.newRate > item.prevRate ? <FaArrowDown /> : <FaArrowUp />}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <LineChart />
      </div>
    </div>
  );
};

export default Statistics;
