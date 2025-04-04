"use client"; // Required for Next.js App Router

import React from "react";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { LuFilePlus2 } from "react-icons/lu";
import { IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import {
  TbArrowsExchange2,
  TbArrowBarUp,
  TbArrowBarToDown,
} from "react-icons/tb";

const rows = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/chat/bot-1.svg",
    email: "johndoe@gmail.com",
    amount: "1,300",
    date: "2025-03-01T13:46:45.553Z",
    status: "Success",
    title: "Ecrow",
    titleBy: "Seller",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/images/chat/bot-2.svg",
    email: "janesmith@gmail.com",
    amount: "2,500",
    date: "2025-03-02T10:30:12.553Z",
    status: "Pending",
    title: "Ecrow",
    titleBy: "Buyer",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/images/chat/bot-3.svg",
    email: "michaelbrown@gmail.com",
    amount: "3,200",
    date: "2025-03-03T09:15:45.553Z",
    status: "Failed",
    title: "Transfer",
    titleBy: "Account",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "/images/chat/bot-4.svg",
    email: "emilydavis@gmail.com",
    amount: "4,000",
    date: "2025-03-04T14:20:30.553Z",
    status: "Success",
    title: "Top up",
    titleBy: "Account",
  },
  {
    id: 5,
    name: "Chris Johnson",
    image: "/images/chat/bot-1.svg",
    email: "chrisjohnson@gmail.com",
    amount: "1,800",
    date: "2025-03-05T11:45:00.553Z",
    status: "Pending",
    title: "Ecrow",
    titleBy: "Seller",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    image: "/images/chat/bot-2.svg",
    email: "sophiamartinez@gmail.com",
    amount: "2,700",
    date: "2025-03-06T16:10:15.553Z",
    status: "Failed",
    title: "Transfer",
    titleBy: "Account",
  },
  {
    id: 7,
    name: "Ethan Wilson",
    image: "/images/chat/bot-3.svg",
    email: "ethanwilson@gmail.com",
    amount: "3,500",
    date: "2025-03-07T08:25:45.553Z",
    status: "Success",
    title: "Top up",
    titleBy: "Account",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    image: "/images/chat/bot-4.svg",
    email: "oliviataylor@gmail.com",
    amount: "4,200",
    date: "2025-03-08T13:50:30.553Z",
    status: "Pending",
    title: "Ecrow",
    titleBy: "Buyer",
  },
  {
    id: 9,
    name: "Liam Anderson",
    image: "/images/chat/bot-1.svg",
    email: "liamanderson@gmail.com",
    amount: "1,900",
    date: "2025-03-09T12:00:00.553Z",
    status: "Failed",
    title: "Transfer",
    titleBy: "Account",
  },
  {
    id: 10,
    name: "Ava Thomas",
    image: "/images/chat/bot-2.svg",
    email: "avathomas@gmail.com",
    amount: "2,800",
    date: "2025-03-10T15:30:45.553Z",
    status: "Success",
    title: "Top up",
    titleBy: "Account",
  },
  {
    id: 11,
    name: "Noah Jackson",
    image: "/images/chat/bot-3.svg",
    email: "noahjackson@gmail.com",
    amount: "3,600",
    date: "2025-03-11T10:15:30.553Z",
    status: "Pending",
    title: "Ecrow",
    titleBy: "Seller",
  },
  {
    id: 12,
    name: "Isabella White",
    image: "/images/chat/bot-4.svg",
    email: "isabellawhite@gmail.com",
    amount: "4,300",
    date: "2025-03-12T14:45:15.553Z",
    status: "Failed",
    title: "Transfer",
    titleBy: "Account",
  },
  {
    id: 13,
    name: "James Harris",
    image: "/images/chat/bot-1.svg",
    email: "jamesharris@gmail.com",
    amount: "1,700",
    date: "2025-03-13T09:30:00.553Z",
    status: "Success",
    title: "Top up",
    titleBy: "Account",
  },
  {
    id: 14,
    name: "Mia Clark",
    image: "/images/chat/bot-2.svg",
    email: "miaclark@gmail.com",
    amount: "2,600",
    date: "2025-03-14T11:20:45.553Z",
    status: "Pending",
    title: "Ecrow",
    titleBy: "Buyer",
  },
  {
    id: 15,
    name: "Alexander Lewis",
    image: "/images/chat/bot-3.svg",
    email: "alexanderlewis@gmail.com",
    amount: "3,400",
    date: "2025-03-15T13:10:30.553Z",
    status: "Failed",
    title: "Transfer",
    titleBy: "Account",
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = rows.slice(startIndex, startIndex + itemsPerPage);
  const columns = [
    { key: "name", label: "Name" },
    { key: "id", label: "ID" },
    { key: "title", label: "Method" },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
  ];
  const analytics = [
    {
      name: "Total no of Transactions",
      value: "$4,200",
      percentage: "10%",
      percentageIcon: <FaArrowUp />,
      percentageColor: "text-[#15AC77]",
      icon: <TbArrowsExchange2 />,
      image: "/images/Chart-yellow.svg",
    },
    {
      name: "Income",
      value: "$1,212,210",
      percentage: "5%",
      percentageIcon: <FaArrowDown />,
      percentageColor: "text-[#FF3636]",
      icon: <TbArrowBarToDown />,
      image: "/images/Chart-green.svg",
    },
    {
      name: "Expenses",
      value: "$512,000",
      percentage: "10%",
      percentageIcon: <FaArrowUp />,
      percentageColor: "text-[#15AC77]",
      icon: <TbArrowBarUp />,
      image: "/images/Chart-red.svg",
    },
  ];

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Transactions</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            <Link href={`/admin/products`} className="text-primary">
              Dashboard
            </Link>{" "}
            <IoChevronForward /> User Logs
          </h4>
        </div>
        <button className="btn btn-primary text-white rounded-[8px]">
          <LuFilePlus2 className="text-[20px] text-white" /> Export as PDF
        </button>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-6">
        {analytics.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[10px] border-[1px] border-[#E8E8E9] p-4 "
          >
            <div className="flex justify-between items-center ">
              <div>
                <h4 className="text-sm font-medium text-[#707A8F] ">
                  {item.name}
                </h4>
                <h2 className="text-3xl font-medium my-4">{item.value}</h2>
              </div>
              <div
                className={`w-[40px] h-[40px] ${
                  item.name === "Income"
                    ? "bg-[#15AC77]"
                    : item.name === "Expenses"
                    ? "bg-[#FF3636]"
                    : "bg-[#F9A000]"
                } rounded-full text-white flex items-center justify-center`}
              >
                {" "}
                {React.cloneElement(item.icon, { className: "text-[24px]" })}
              </div>
            </div>
            <div className="mb-6">
              <p
                className={`text-sm ${item.percentageColor} flex gap-1 items-center font-medium`}
              >
                {item.percentage} {React.cloneElement(item.percentageIcon)}{" "}
                <span className="text-[#707A8F]">+150 today</span>
              </p>
            </div>
            <div className="w-full relative h-[100px]">
              {" "}
              {/* Ensure relative positioning and height */}
              <Image
                src={item.image}
                alt="Filter Icon"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="bg-white rounded-[10px] border-[1px] border-[#A2A1A833] p-3">
          <div className="flex justify-between items-center mb-4">
            <div className="py-[13px] w-[330px] px-[16px] rounded-[10px] border-[1px] border-[#A2A1A81A] flex items-center gap-1">
              <CiSearch className="text-[24px]" />
              <input
                type="text"
                className="w-full border-none m-0 p-0 outline-none bg-transparent"
                placeholder="Search"
              />
            </div>
            <div className="btn btn-secondary bg-none border-[1px] border-[#E8E8E9] p-[15px] flex items-center gap-2 font-medium text-[16px] rounded-[10px]">
              <div className="w-[20px] h-[20px]">
                <img
                  src="/images/filter.svg"
                  alt="Filter Icon"
                  width={20}
                  height={20}
                />
              </div>
              <h4> Filter</h4>
            </div>
          </div>
          <Table columns={columns} rows={currentItems} />
          <div className="mt-4 flex w-full justify-between items-center">
            <div className="flex items-center gap-4">
              <p className="text-[#A2A1A8] font-light">Showing</p>
              <div className="border-[1px] border-[#A2A1A833] rounded-[10px] p-2 w-[66px] h-[36px]">
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="border-none bg-transparent p-0 m-0 outline-none w-full h-full"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
            <div className="text-[#A2A1A8] font-light">
              Showing 1 to {itemsPerPage} out of {rows.length} records
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
