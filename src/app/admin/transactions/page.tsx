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
import { useQuery } from "react-query";
import { get_transaction_list } from "@/services/apiService";
import { Transaction } from "@/types/transaction";
import debounce from "lodash/debounce";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Fetch transactions
  const { data: transactionData, isLoading } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: get_transaction_list,
  });

  // Client-side search and filter
  const filteredTransactions =
    transactionData?.filter((transaction) => {
      const matchesSearch =
        searchTerm === "" ||
        transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.user.first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.user.last_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "" || transaction.status === filterStatus;

      return matchesSearch && matchesStatus;
    }) || [];

  // Pagination
  const totalPages = Math.ceil(
    (filteredTransactions?.length || 0) / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const columns = [
    { key: "name", label: "Name" },
    { key: "id", label: "ID" },
    { key: "title", label: "Method" },
    { key: "amount", label: "Amount" },
    { key: "date_created", label: "Date" },
    { key: "status", label: "Status" },
  ];

  const formattedTransactions = paginatedTransactions.map((transaction) => ({
    id: transaction.id,
    first_name: transaction.user.first_name,
    last_name: transaction.user.last_name,
    image: transaction.user.profile_photo || "/images/chat/bot-1.svg",
    title: transaction.type,
    amount: transaction.amount,
    date_created: transaction.date_created,
    status: transaction.status,
    type: transaction.type,
  }));
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
      name: "Inflow",
      value: "$1,212,210",
      percentage: "5%",
      percentageIcon: <FaArrowDown />,
      percentageColor: "text-[#15AC77]",
      icon: <TbArrowBarToDown />,
      image: "/images/Chart-green.svg",
    },
    {
      name: "Outflow",
      value: "$512,000",
      percentage: "10%",
      percentageIcon: <FaArrowUp />,
      percentageColor: "text-[#FF3636]",
      icon: <TbArrowBarUp />,
      image: "/images/Chart-red.svg",
    },
  ];

  // Debounced search handler
  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, 500);

  // Filter handler
  const handleFilter = (status: string) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <select
              className="btn btn-secondary"
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="success">Success</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <Table columns={columns} rows={formattedTransactions} />
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
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredTransactions.length)}{" "}
              out of {filteredTransactions.length} records
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
