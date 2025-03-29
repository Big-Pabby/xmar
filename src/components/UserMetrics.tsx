import React from "react";
import ColorBar from "@/components/ColorBar";
import { RiBarChartHorizontalFill } from "react-icons/ri";

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
  name?: string;
  value?: number;
}
const UserMetrics = ({
  metric_data,
  total_value,
}: {
  metric_data: BarSegment[];
  total_value: number;
}) => {
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[8px]  p-[24px]">
      <h4 className="text-sm font-medium text-[#39434F] mb-2">Users Metrics</h4>
      <div className="flex items-center justify-between mb-6">
        <div className="btn btn-outline text-[12px] text-[#39434F] py-[4px] px-[8px] rounded-[8px] border-[#D7D9DC]">
          This Year
        </div>
        <div className="btn btn-[#F5F5F5] py-[4px] px-[8px] rounded-[8px] text-[12px] text-[#39434F]">
          View Users report
        </div>
      </div>
      <ColorBar segments={metric_data} />
      <div className="flex justify-between items-center w-full my-4">
        <div className="flex items-center gap-3">
          <RiBarChartHorizontalFill className="text-xl text-[#D94823]" />
          <h4 className="text-[12px] text-[#39434F]">Total Users</h4>
        </div>
        <h4 className="text-[12px] font-semibold text-[#D94823]">
          {total_value} users
        </h4>
      </div>
      <hr />
      {metric_data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center w-full mt-4"
        >
          <div className="flex items-center gap-3">
            <RiBarChartHorizontalFill
              style={{ color: `${item.color}` }}
              className={`text-xl text-[${item.color}]`}
            />
            <h4 className="text-[12px] text-[#39434F]">{item.name}</h4>
          </div>
          <h4 className="text-[12px] font-medium">{item.value}</h4>
        </div>
      ))}
    </div>
  );
};

export default UserMetrics;
