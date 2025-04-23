"use client"; // Required for Next.js App Router
import React, { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { CiSearch } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";
import { LuFilePlus2 } from "react-icons/lu";
import SkeletonCard from "@/components/Skeleton";

const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    kyc_validation: "Verified",
    no_of_trades: 500,
    transaction_title: "Freelancing",
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 2,
    name: "Elon Doe",
    transaction_title: "Freelancing",
    email: "elon@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1000,
    account_status: "inactive",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 3,
    name: "Jessica Pearson",
    transaction_title: "Freelancing",
    email: "jessica@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-3.svg",
    kyc_validation: "Unverified",
    no_of_trades: 1500,
    account_status: "inactive",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 4,
    name: "Harvey Specter",
    email: "harvey@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-4.svg",
    kyc_validation: "Verified",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    transaction_title: "Freelancing",
    email: "louis@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    transaction_title: "Freelancing",
    email: "louis@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    transaction_title: "Freelancing",
    email: "louis@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    transaction_title: "Freelancing",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Verified",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    transaction_title: "Freelancing",
    email: "louis@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Unverified",
    transaction_title: "Freelancing",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Verified",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
  {
    id: 5,
    name: "Louis Litt",
    email: "louis@email.com",
    transaction_title: "Freelancing",
    entry_date: "2025-02-01T13:46:45.553Z",
    last_seen: "2025-03-01T13:46:45.553Z",
    image: "/images/chat/bot-2.svg",
    kyc_validation: "Pending",
    no_of_trades: 1500,
    account_status: "Active",
    gender: "Male",
    date_of_birth: "2002-03-21T13:46:45.553Z",
    address: "Annex road sars road. Lagos state",
    bank_details: {
      bank_name: "Access Bank",
      account_no: "13278637843",
      account_name: "Victor Williams Uchemba",
    },
    phone_no: "+234 8144424920",
  },
];

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

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [user, setUser] = useState<User>();
  const [userNav, setUserNav] = useState("User Details");

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = rows.slice(startIndex, startIndex + itemsPerPage);
  const columns = [
    { key: "name", label: "Name" },
    { key: "id", label: "Transaction ID" },
    { key: "transaction_title", label: "Transaction Title" },
    { key: "kyc_validation", label: "Dispute Status" },
    { key: "no_of_trades", label: "Amount" },
    { key: "expiry_date", label: "Last Seen" },
    { key: "action", label: "Action" },
  ];
  const selectUser = (data: User) => {
    user ? setUser(undefined) : setUser(data); // eslint-disable-line @typescript-eslint/no-unused-expressions
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Dispute Resolution</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            <Link href={`/admin/products`} className="text-primary">
              Dashboard
            </Link>{" "}
            <IoChevronForward /> Dispute resolution
          </h4>
        </div>
        <button className="btn btn-primary text-white rounded-[8px]">
          <LuFilePlus2 className="text-[20px] text-white" /> Export as PDF
        </button>
      </div>
      {loading ? (
        <>
          <div className="mt-4">
            <SkeletonCard />
          </div>
          <div className="h-[500px] mt-8">
            <SkeletonCard />
          </div>
        </>
      ) : (
        <>
          <div className="mt-4 bg-secondary border-[1px] border-[#E8E8E9] rounded-[8px] py-[32px] px-[24px]">
            <div className="flex justify-between items-center">
              <h3 className="text-[#39434F] font-medium">Dispute statistics</h3>
              <div className="border-[1px] border-[#D7D9DC] py-[4px] px-[9px] rounded-[9px] text-sm text-[#39434F]">
                Aug 31, 2023
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="border-r-[1px] border-[#DFE1E5] p-[16px]">
                <h3 className="text-sm text-[#39434F] mb-2">Total Disputes</h3>
                <h4 className="text-primary text-3xl">32764 </h4>
              </div>
              <div className="border-r-[1px] border-[#DFE1E5] p-[16px]">
                <div className="mb-2 flex w-full items-center justify-between">
                  <h3 className="text-sm text-[#39434F]">Settled Disputes</h3>
                  <RiVerifiedBadgeFill className="text-[#48AE6D] text-xl" />
                </div>

                <h4 className="text-[#48AE6D] text-3xl">53 </h4>
              </div>
              <div className=" p-[16px]">
                <div className="mb-2 flex w-full items-center justify-between">
                  <h3 className="text-sm text-[#39434F]">Pending Disputes</h3>
                  <RxTimer className="text-primary text-xl" />
                </div>

                <h4 className="text-[#1F1F1F] text-3xl">53 </h4>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="">
              <div className="bg-white rounded-[10px] border-[1px] border-[#A2A1A833] p-3 flex justify-between items-center mb-4">
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
              <div className="flex items-start gap-6">
                <div
                  className={`${
                    user ? "md:w-7/12 w-full " : "w-full"
                  } bg-white rounded-[10px] border-[1px] border-[#A2A1A833] p-3`}
                >
                  <div
                    className={`${
                      user ? " w-full overflow-x-scroll" : "w-full"
                    }`}
                  >
                    <div className=" min-w-[1000px]">
                      <Table
                        columns={columns}
                        rows={currentItems}
                        onselect={selectUser}
                        selectedUser={user}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex w-full justify-between items-center">
                    <div className="flex items-center gap-4">
                      <p className="text-[#A2A1A8] font-light">Showing</p>
                      <div className="border-[1px] border-[#A2A1A833] rounded-[10px] p-2 w-[66px] h-[36px]">
                        <select
                          value={itemsPerPage}
                          onChange={(e) =>
                            setItemsPerPage(Number(e.target.value))
                          }
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
                {user ? (
                  <div className="md:w-5/12 w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-4">
                    <div className="w-full bg-[#F8F8F8] rounded-[5px] py-[16px] px-[8px] flex items-center justify-around">
                      <h4
                        onClick={() => setUserNav("User Details")}
                        className={`${
                          userNav === "User Details"
                            ? "text-[#D94823] font-bold"
                            : "text-[#1B1B1B] hover:text-[#D94823] hover:font-bold"
                        } text-base cursor-pointer`}
                      >
                        Disputer
                      </h4>
                      <div className="w-[0.5px] h-[26px] bg-[#8B8B8B]"></div>
                      <h4
                        onClick={() => setUserNav("Documents")}
                        className={`${
                          userNav === "Documents"
                            ? "text-[#D94823] font-bold"
                            : "text-[#1B1B1B] hover:text-[#D94823] hover:font-bold"
                        } text-base cursor-pointer`}
                      >
                        Recipient
                      </h4>
                    </div>
                    {userNav === "User Details" ? (
                      <div>
                        <div className="bg-[#F8F8F8] rounded-[14px] p-[18px] mt-6">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[#707070] text-base">Status</p>
                            <h4 className="font-medium text-[#F69E1E] text-base">
                              Money in escrow
                            </h4>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[#707070] text-base">
                              Transaction ID
                            </p>
                            <h4 className="font-medium text-base">
                              87866959535
                            </h4>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[#707070] text-base">
                              Transaction Title
                            </p>
                            <h4 className="font-medium text-base">
                              Freelancing
                            </h4>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[#707070] text-base">
                              Recipient
                            </p>
                            <h4 className="font-medium text-base">
                              Freelancing
                            </h4>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[#707070] text-base">Amount</p>
                            <h4 className="font-medium text-primary text-base">
                              $50,000.00
                            </h4>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[#707070] text-base">
                              Transaction Fee
                            </p>
                            <h4 className="font-medium text-base">$200.00</h4>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-[#707070] text-base">Date</p>
                            <h4 className="font-medium text-base">
                              Sep, 22nd 2024 09:19:01
                            </h4>
                          </div>
                          <h2 className="text-base font-medium mb-2 mt-6">
                            Provided details
                          </h2>
                          <textarea
                            id="description"
                            placeholder="Provide additional details, such as what happened, when it occurred, and any other relevant information"
                            name="description"
                            className="w-full h-[230px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
                          />
                          <div className="mt-4">
                            <h4 className="text-base font-medium text-[#344054] mb-2">
                              Attached Documents
                            </h4>
                            <div className="border-[1px] border-[#D0D5DD] rounded-[8px] bg-white flex items-center gap-8 p-4 justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-[30px] h-[38px] bg-[#ccc]"></div>
                                <div>
                                  <h4 className="text-base text-[#101828] font-medium mb-1">
                                    img_6r567r75.jpeg
                                  </h4>
                                  <p className="text-[#667085]">12kb</p>
                                </div>
                              </div>
                              <p className="text-primary font-medium text-base">
                                View
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 justify-between mt-4 mb-2">
                            <button className="w-6/12 btn bg-[#EBECF3] text-[#0D142C] ">
                              Send a message
                            </button>
                            <button className="w-6/12 btn btn-primary text-white">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#F8F8F8] rounded-[14px] p-[18px] mt-6">
                        <h2 className="text-base font-medium mb-2 mt-6">
                          Provided details
                        </h2>
                        <textarea
                          id="description"
                          placeholder="Provide additional details, such as what happened, when it occurred, and any other relevant information"
                          name="description"
                          className="w-full h-[230px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
                        />
                        <div className="mt-4">
                          <h4 className="text-base font-medium text-[#344054] mb-2">
                            Attached Documents
                          </h4>
                          <div className="border-[1px] border-[#D0D5DD] rounded-[8px] bg-white flex items-center gap-8 p-4 justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-[30px] h-[38px] bg-[#ccc]"></div>
                              <div>
                                <h4 className="text-base text-[#101828] font-medium mb-1">
                                  img_6r567r75.jpeg
                                </h4>
                                <p className="text-[#667085]">12kb</p>
                              </div>
                            </div>
                            <p className="text-primary font-medium text-base">
                              View
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-between mt-4 mb-2">
                          <button className="w-6/12 btn bg-[#EBECF3] text-[#0D142C] ">
                            Send a message
                          </button>
                          <button className="w-6/12 btn btn-primary text-white">
                            Send
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
