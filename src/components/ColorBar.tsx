import React from "react";

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
  name?: string;
}

const ColorBar: React.FC<{ segments: BarSegment[] }> = ({ segments }) => {
  return (
    <div className="flex w-full h-[16px] overflow-hidden ">
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`relative h-full bg-[${segment.color}] rounded-[4px] mr-2`}
          style={{ width: `${segment.size}%`, backgroundColor: segment.color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorBar;
