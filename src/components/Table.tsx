"use client"; // Required for Next.js App Router

import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { IoMdMore } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { TbTrash } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { Dispute } from "@/types/dispute";
dayjs.extend(utc);
dayjs.extend(timezone);

interface Column {
  key: string;
  label: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  entry_date: string; // ISO string format
  last_seen: string; // ISO string format
  image: string;
  kyc_validation: "Verified" | "Unverified"; // Assuming possible values
  no_of_trades: number;
  account_status: "Active" | "Inactive" | "Suspended"; // Assuming possible values
  gender: "Male" | "Female" | "Other"; // Assuming possible values
  date_of_birth: string; // ISO string format
  address: string;
  bank_details: {
    bank_name: string;
    account_no: string;
    account_name: string;
  };
  phone_no: string;
}
interface TableProps<T> {
  columns: Column[];
  rows: T[];
  onselect?: (data: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  selectedUser?: User | Dispute;
}

// prettier-ignore
const Table = <T extends Record<string, any>>({ // eslint-disable-line @typescript-eslint/no-explicit-any
  
  columns,
  rows,
  onselect,
  selectedUser,
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
                    {onselect ? ( <input
                      id={row.id}
                      onChange={() => onselect?.(row)}
                      checked={selectedUser?.id === row.id}
                      type="radio"
                      className="w-[20] h-[20] accent-primary border-[2px] border-[#D3D6DC]"
                    />) : null}
                   
                   
                    <div className="h-[44px] w-[44px]">
                      <Image
                        src={row.profile_photo || "/images/user.svg"}
                        alt="Logo Image"
                        width={44}
                        height={44}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-medium line-clamp-1">{row.first_name} {row.last_name}</h4>
                      {row.email ? (
                        <div className="line-clamp-1 mt-1 text-[12px] text-[#707A8F]">
                          {row.email}
                        </div>
                      ) : row.accountType ? (
                        <div className="bg-[#F1F2F4] mt-1 border-[1px] border-[#D3D6DC] rounded-full py-[2px] px-[8px] text-[12px] font-medium text-[#666F82]">
                          {row.accountType}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : col.key === "sender" || col.key === "recipient" ? (
                  <div className="inline-flex items-center gap-2">
                   
                    <div className="h-[44px] w-[44px]">
                      <Image
                        src={row[col.key].image}
                        alt="Logo Image"
                        width={44}
                        height={44}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div>
                      <h4 className="text-medium line-clamp-1">{row[col.key].name}</h4>
                      <div className="bg-[#F1F2F4] mt-1 border-[1px] border-[#D3D6DC] inline-block rounded-full py-[2px] px-[8px] text-[12px] font-medium text-[#666F82]">
                          {row[col.key].user_type}
                        </div>
                    </div>
                  </div>
                )  : col.key === "amount" ? (
                  <div className="font-medium ">
                    ${row[col.key]}
                  </div>
                ) : col.key === "title" ? (
                  <div className="font-medium">
                    <h3>{row[col.key]}</h3>
                    <p className="text-[12px] text-[#707A8F]">
                      By {row.titleBy}
                    </p>
                  </div>
                ) : col.key === "is_active" ? (
                  <div
                    className={`py-[2px] px-[10px] text-center rounded-full inline-block border-[1px] font-semibold ${
                      row[col.key] === true
                        ? "bg-[#E8F7F1] border-[#B6E5D5] text-[#15AC77]"
                        
                        :  row[col.key] === false ? "bg-[#FFEFF0] border-[#FFCCCF] text-[#FE5B65]" : "bg-[#D94823] border-[#D94823] text-white"
                    }`}
                  >
                    {row[col.key] === true ? "Active" : "Inactive"}
                  </div>
                ) : col.key === "entry_date" || col.key === "expiry_date"  || col.key === 'date' ? (
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
                ) : col.key === "kyc_validation" ? (
                  <div
                    className={`py-[2px] px-[10px] text-center rounded-full border-[1px] font-semibold ${
                       row.is_kyc_tier_one_completed && !row.is_kyc_tier_two_completed  ? 'bg-[#FFF6EA] border-[#FF9500] text-[#FF9500]' :
                      row.is_kyc_tier_two_completed
                        ? "bg-[#E8F7F1] border-[#B6E5D5] text-[#15AC77]"
                        
                        : "bg-[#F1F2F4] border-[#D3D6DC] text-[#666F82]"
                    }`}
                  >
                    {row.is_kyc_tier_two_completed  ? "Verified" : row.is_kyc_tier_one_completed && !row.is_kyc_tier_two_completed ? "Verified" : "Unverified"}
                  </div>
                ) : col.key === "account_type" ? (
                  <div>
                   { row.is_kyc_tier_two_completed
                     ? "Tier 2"
                      : row.is_kyc_tier_one_completed
                     ? "Tier 1"
                   : "Null"}
                  </div>) : col.key === "no_of_trades" ? (
                  <div className={``}>{row[col.key]}</div>
                ) : col.key === "account_status"  ? (
                  <div
                    className={`font-medium ${
                      row[col.key] === "Active"
                        ? "text-[#15AC77]"
                        : "text-[#9FA6B4]"
                    }`}
                  >
                    {row[col.key]}
                  </div>
                ) :  col.key === "status" || col.key ===  "dispute_status" || col.key ===  "escrow_status" ? (
                  <div
                    className={`font-medium capitalize p-2 text-center rounded-full  border-[1px] ${
                      row[col.key] === "Pending" || row[col.key] === "pending"? " bg-[#FFF4EA] border-[#FFDEBF] text-[#FE9431]" : row[col.key] === "Unverified" ? 'bg-[#9FA6B4]' :row[col.key] === "Cancelled" ? 'bg-[#D94823] text-white' :row[col.key] === "failed" ? 'bg-[#D94823] text-white'
                        : "bg-[#E8F7F1] border-[#B6E5D5] text-[#15AC77]"
                    }`}
                  >
                    {row[col.key]}
                  </div>
                ) : col.key === "admin_status" ? (
                  <div
                    className={`font-light uppercase inline-block py-[3px] px-[8px] rounded-[4px] text-[12px] ${
                      row[col.key] === "Owner"
                        ? "text-white bg-[#D94823]"
                        : row[col.key] === "Support"
                        ? "bg-[#EAE5FF]"
                        : row[col.key] === "Tech Support"
                        ? "bg-[#DFFFF1]"
                        : row[col.key] === "Help Desk"
                        ? "bg-[#9898981A]"
                        : "bg-[#FF68B41A]"
                    }`}
                  >
                    {row[col.key]}
                  </div>
                ) : col.key === "action" ? (
                  <IoMdMore />
                ) : col.key === "admin_action" ? (
                  <div className="flex items-center gap-2 text-xl">
                    <LuEye />
                    <BiEditAlt />
                    <TbTrash />
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
