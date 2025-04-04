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
    initiator: {
      name: "John Doe",
      image: "/images/chat/bot-1.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Jane Smith",
      image: "/images/chat/bot-2.svg",
      user_type: "Seller",
    },
    amount: "1,300",
    date: "2025-03-01T13:46:45.553Z",
    status: "Completed",
  },
  {
    id: 2,
    initiator: {
      name: "GitHub Copilot",
      image: "/images/chat/bot-3.svg", // My own entry
      user_type: "Buyer",
    },
    recipient: {
      name: "Michael Brown",
      image: "/images/chat/bot-4.svg",
      user_type: "Seller",
    },
    amount: "1,500",
    date: "2025-03-02T10:30:12.553Z",
    status: "Pending",
  },
  {
    id: 3,
    initiator: {
      name: "Mohammed Fatima",
      image: "/images/chat/bot-1.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "GitHub Copilot",
      image: "/images/chat/bot-3.svg", // My own entry
      user_type: "Buyer",
    },
    amount: "15,000",
    date: "2025-03-03T09:15:45.553Z",
    status: "Cancelled",
  },
  {
    id: 4,
    initiator: {
      name: "Markurdi",
      image: "/images/chat/bot-2.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Chris Johnson",
      image: "/images/chat/bot-4.svg",
      user_type: "Buyer",
    },
    amount: "320,000",
    date: "2025-03-04T14:20:30.553Z",
    status: "New Deal",
  },
  {
    id: 5,
    initiator: {
      name: "Alice Green",
      image: "/images/chat/bot-3.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Bob White",
      image: "/images/chat/bot-1.svg",
      user_type: "Seller",
    },
    amount: "2,500",
    date: "2025-03-05T11:45:00.553Z",
    status: "Completed",
  },
  {
    id: 6,
    initiator: {
      name: "David Black",
      image: "/images/chat/bot-4.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Sophia Blue",
      image: "/images/chat/bot-2.svg",
      user_type: "Buyer",
    },
    amount: "7,800",
    date: "2025-03-06T16:10:15.553Z",
    status: "Pending",
  },
  {
    id: 7,
    initiator: {
      name: "Ethan Gray",
      image: "/images/chat/bot-1.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Olivia Red",
      image: "/images/chat/bot-3.svg",
      user_type: "Seller",
    },
    amount: "12,000",
    date: "2025-03-07T08:25:45.553Z",
    status: "Cancelled",
  },
  {
    id: 8,
    initiator: {
      name: "Liam Yellow",
      image: "/images/chat/bot-2.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Emma Purple",
      image: "/images/chat/bot-4.svg",
      user_type: "Buyer",
    },
    amount: "45,000",
    date: "2025-03-08T13:50:30.553Z",
    status: "New Deal",
  },
  {
    id: 9,
    initiator: {
      name: "Noah Orange",
      image: "/images/chat/bot-3.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Ava Pink",
      image: "/images/chat/bot-1.svg",
      user_type: "Seller",
    },
    amount: "9,000",
    date: "2025-03-09T12:00:00.553Z",
    status: "Completed",
  },
  {
    id: 10,
    initiator: {
      name: "James Indigo",
      image: "/images/chat/bot-4.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "GitHub Copilot",
      image: "/images/chat/bot-3.svg", // My own entry
      user_type: "Buyer",
    },
    amount: "18,000",
    date: "2025-03-10T15:30:45.553Z",
    status: "Pending",
  },
  {
    id: 11,
    initiator: {
      name: "Lucas Cyan",
      image: "/images/chat/bot-1.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Mia Magenta",
      image: "/images/chat/bot-2.svg",
      user_type: "Seller",
    },
    amount: "22,000",
    date: "2025-03-11T10:15:30.553Z",
    status: "Cancelled",
  },
  {
    id: 12,
    initiator: {
      name: "Henry Lime",
      image: "/images/chat/bot-3.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Amelia Teal",
      image: "/images/chat/bot-4.svg",
      user_type: "Buyer",
    },
    amount: "30,000",
    date: "2025-03-12T14:45:15.553Z",
    status: "New Deal",
  },
  {
    id: 13,
    initiator: {
      name: "Alexander Gold",
      image: "/images/chat/bot-2.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Harper Silver",
      image: "/images/chat/bot-1.svg",
      user_type: "Seller",
    },
    amount: "5,000",
    date: "2025-03-13T09:30:00.553Z",
    status: "Completed",
  },
  {
    id: 14,
    initiator: {
      name: "Sebastian Bronze",
      image: "/images/chat/bot-4.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Evelyn Copper",
      image: "/images/chat/bot-3.svg",
      user_type: "Buyer",
    },
    amount: "8,000",
    date: "2025-03-14T11:20:45.553Z",
    status: "Pending",
  },
  {
    id: 15,
    initiator: {
      name: "Daniel Platinum",
      image: "/images/chat/bot-1.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Charlotte Ruby",
      image: "/images/chat/bot-2.svg",
      user_type: "Seller",
    },
    amount: "14,000",
    date: "2025-03-15T13:10:30.553Z",
    status: "Cancelled",
  },
  {
    id: 16,
    initiator: {
      name: "Matthew Sapphire",
      image: "/images/chat/bot-3.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Abigail Emerald",
      image: "/images/chat/bot-4.svg",
      user_type: "Buyer",
    },
    amount: "60,000",
    date: "2025-03-16T16:40:15.553Z",
    status: "New Deal",
  },
  {
    id: 17,
    initiator: {
      name: "Joseph Quartz",
      image: "/images/chat/bot-2.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Sofia Jade",
      image: "/images/chat/bot-1.svg",
      user_type: "Seller",
    },
    amount: "3,000",
    date: "2025-03-17T08:50:00.553Z",
    status: "Completed",
  },
  {
    id: 18,
    initiator: {
      name: "Samuel Amber",
      image: "/images/chat/bot-4.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Ella Topaz",
      image: "/images/chat/bot-3.svg",
      user_type: "Buyer",
    },
    amount: "25,000",
    date: "2025-03-18T12:30:45.553Z",
    status: "Pending",
  },
  {
    id: 19,
    initiator: {
      name: "Andrew Pearl",
      image: "/images/chat/bot-1.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: "Grace Opal",
      image: "/images/chat/bot-2.svg",
      user_type: "Seller",
    },
    amount: "10,000",
    date: "2025-03-19T14:15:30.553Z",
    status: "Cancelled",
  },
  {
    id: 20,
    initiator: {
      name: "Christopher Diamond",
      image: "/images/chat/bot-3.svg",
      user_type: "Seller",
    },
    recipient: {
      name: "Chloe Garnet",
      image: "/images/chat/bot-4.svg",
      user_type: "Buyer",
    },
    amount: "100,000",
    date: "2025-03-20T17:00:15.553Z",
    status: "New Deal",
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
    { key: "initiator", label: "Initiator" },
    { key: "status", label: "Status" },
    { key: "recipient", label: "Recipient" },
    { key: "id", label: "ID" },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
  ];

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Escrow Overview</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            View all Subscriptions
          </h4>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary text-white rounded-[8px]"
        >
          <FaPlus className="text-[20px] text-white" /> Update Escrow Fee
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
          <p className="font-light mb-2">Download Escrow Transactions</p>
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
              Download File
            </button>
          </div>
        </div>
        <div className="w-[310px] border-[1px] border-[#A2A1A833] bg-white rounded-[10px]">
          <div className="border-b-[1px] border-[#A2A1A833] p-3">
            <p className="font-light mb-1">Escrow Fee</p>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">$2,000 cap price</h4>
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
