import React from "react";

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
}

const ColorBar: React.FC<{ segments: BarSegment[] }> = ({ segments }) => {
  return (
    <div className="flex w-full h-[8px] rounded-full overflow-hidden border">
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`h-full ${segment.color}`}
          style={{ width: `${segment.size}%` }}
        ></div>
      ))}
    </div>
  );
};

export default ColorBar;
