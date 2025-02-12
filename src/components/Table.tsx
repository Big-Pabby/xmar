"use client"; // Required for Next.js App RouterDate.now()

import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);



interface Column {
  key: string;
  label: string;
}
interface TableProps<T> {
  columns: Column[];
  rows: T[];
}

const Table = <T extends Record<string, any>>({
  columns,
  rows,
}: TableProps<T>) => {
  const formatDate = (isoString: string) => {
    return dayjs.utc(isoString).format("DD MMM YYYY"); // Ensures UTC consistency
  };
  
  const formatTime = (isoString: string) => {
    return dayjs.utc(isoString).format("HH:mm"); // Ensures UTC consistency
  };
  
  const getDaysLeft = (date1: string, date2: string) => {
    const d1 = dayjs(date1);
    const d2 = dayjs(date2);
  
    return d1.diff(d2, "day"); // Directly get the difference in days
  };

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr className="bg-none ">
          {columns.map((col) => (
            <th
              key={col.key}
              className="text-[#707A8F] border-b px-4 py-2 font-medium text-left"
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="">
            {columns.map((col) => (
              <td key={col.key} className="border-b px-4 py-4">
                {col.key === "name" ? (
                  <div className="flex items-center gap-2">
                    <div className="h-[44px] w-[44px]">
                      <Image
                        src={row.image}
                        alt="Logo Image"
                        width={44}
                        height={44}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div>
                      <h4 className="text-medium">{row[col.key]}</h4>
                      <div className="bg-[#F1F2F4] mt-1 border-[1px] border-[#D3D6DC] rounded-full py-[2px] px-[8px] text-[12px] font-medium text-[#666F82]">
                        {row.accountType}
                      </div>
                    </div>
                  </div>
                ) : col.key === "amount" ? (
                  <div className="font-medium text-[#15AC77] ">
                    +${row[col.key]}
                  </div>
                ) : col.key === "title" ? (
                  <div className="font-medium">
                    <h3>{row[col.key]}</h3>
                    <p className="text-[12px] text-[#707A8F]">
                      By {row.titleBy}
                    </p>
                  </div>
                ) : col.key === "status" ? (
                  <div
                    className={`py-[2px] px-[10px] text-center rounded-full border-[1px] font-semibold ${
                      row[col.key] === "Success"
                        ? "bg-[#E8F7F1] border-[#B6E5D5] text-[#15AC77]"
                        : row[col.key] === "Pending"
                        ? "bg-[#FFF4EA] border-[#FFDEBF] text-[#F48534]"
                        : "bg-[#FFEFF0] border-[#FFCCCF] text-[#FE5B65]"
                    }`}
                  >
                    {row[col.key]}
                  </div>
                ) : col.key === "entry_date" ? (
                  <div className="font-medium">
                    <h3>{formatDate(row[col.key])}</h3>
                    <p className="text-[12px] text-[#707A8F]">
                      {formatTime(row[col.key])}
                    </p>
                  </div>
                ) : col.key === "expiry_date" ? (
                  <div className="font-medium">
                    <h3>{formatDate(row[col.key])}</h3>
                    <p className="text-[12px] text-[#707A8F]">
                      {formatTime(row[col.key])}
                    </p>
                  </div>
                ) : col.key === "days_left" ? (
                  <div className="font-medium">
                    <h3>{getDaysLeft(row.expiry_date, row.entry_date)}</h3>
                  </div>
                ) : (
                  row[col.key]
                )}
                {}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
