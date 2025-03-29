"use client"; // Required for Next.js App Router

import React from "react";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { FaPlus } from "react-icons/fa6";
import Table from "@/components/Table";
import { TiArrowSortedUp } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import Modal from "@/components/Modal";

const rows = [
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Doe",
    amount: "300",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    status: "Success",
  },
  {
    id: 2,
    name: "David Doe",
    amount: "500",
    accountType: "Business",
    title: "Card",
    image: "/images/chat/bot-4.svg",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 3,
    name: "John Mark",
    amount: "400",
    image: "/images/chat/bot-1.svg",
    accountType: "Customer",
    title: "Transfer",
    titleBy: "*8080",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
  {
    id: 4,
    name: "Eric Doe",
    amount: "600",
    image: "/images/chat/bot-2.svg",
    accountType: "Specialist",
    title: "Subscription",
    titleBy: "Admin",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Success",
  },
  {
    id: 5,
    name: "James Eric",
    amount: "350",
    image: "/images/chat/bot-3.svg",
    accountType: "Business",
    title: "Transfer",
    titleBy: "*9090",
    entry_date: "2025-02-01T13:46:45.553Z",
    expiry_date: "2025-03-01T13:46:45.553Z",
    status: "Pending",
  },
];

const Subscription = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = rows.slice(startIndex, startIndex + itemsPerPage);
  const columns = [
    { key: "name", label: "Name" },
    { key: "amount", label: "Amount" },
    { key: "title", label: "Title" },
    { key: "entry_date", label: "Entry Date" },
    { key: "expiry_date", label: "Expiry Date" },
    { key: "days_left", label: "Days Left" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Subscription</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            View all Subscriptions
          </h4>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary text-white rounded-[8px]"
        >
          <FaPlus className="text-[20px] text-white" /> Update Subscription Fee
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-2xl text-center">Subscription Fee</h2>
          <p className="mt-2 text-center">Set subscription fee</p>
          <form>
            <div className="mb-4">
              <label htmlFor="account_type" className="block mb-1">
                Account Type
              </label>
              <input
                type="text"
                className="outline-none w-full bg-[#F1F1F1] rounded-[5px] p-[18px]"
                placeholder="Select account type"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="account_type" className="block mb-1">
                Amount
              </label>
              <input
                type="text"
                className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                placeholder="Amount"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="account_type" className="block mb-1">
                Discount
              </label>
              <input
                type="text"
                className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                placeholder="15%"
              />
            </div>
            <button className="btn btn-primary w-full text-white rounded-[8px]">
              Save
            </button>
          </form>
        </Modal>
      </div>
      <div className="flex gap-6 mt-8">
        <div className="flex-1 border-[1px] border-[#A2A1A833] bg-white rounded-[10px] p-4">
          <p className="font-light mb-2">Download Subscriptions</p>
          <div className="flex items-stretch gap-4">
            <div className="flex-1 border-[1px] border-[#A2A1A833] rounded-[8px] p-3">
              <select
                className="border-none w-full bg-transparent m-0 p-0 outline-none"
                name=""
                id=""
              >
                <option value="All Account">All Accounts</option>
              </select>
            </div>
            <button className="font-medium  btn btn-primary h-full text-white rounded-[8px] py-4 px-8">
              Download Subscriptions
            </button>
          </div>
        </div>
        <div className="w-[310px] border-[1px] border-[#A2A1A833] bg-white rounded-[10px]">
          <div className="border-b-[1px] border-[#A2A1A833] p-3">
            <p className="font-light mb-1">Subscription Fee</p>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">$1,500</h4>
              <div className="flex items-center gap-2 bg-[#30BE821A] rounded-[5px] p-[5px] text-[11px] text-[#30BE82]">
                <TiArrowSortedUp /> 5.0% Discount
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[12px] font-light text-[#A2A1A8]">
              Updated: July 16, 2023
            </p>
          </div>
        </div>
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

export default Subscription;
