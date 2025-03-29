"use client"; // Required for Next.js App Router
import Image from "next/image";
import UserMetrics from "@/components/UserMetrics";
import React, { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { CiSearch } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { LuFilePlus2 } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
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

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
  name?: string;
  value?: number;
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
    { key: "entry_date", label: "Registration Date" },
    { key: "expiry_date", label: "Last Seen" },
    { key: "kyc_validation", label: "KYC Validation" },
    { key: "no_of_trades", label: "No of trades" },
    { key: "account_status", label: "Account status" },
    { key: "action", label: "Action" },
  ];
  const selectUser = (data: User) => {
    user ? setUser(undefined) : setUser(data); // eslint-disable-line @typescript-eslint/no-unused-expressions
  };
  const data = {
    active_users: 100,
    inactive_users: 64,
    suspended_users: 50,
    deleted_account: 30,
  };
  const total =
    data.active_users +
    data.inactive_users +
    data.suspended_users +
    data.deleted_account;
  const barSegments: BarSegment[] = [
    {
      color: "#48AE6D",
      size: (data.active_users / total) * 100,
      name: "Active Users",
      value: data.active_users,
    },
    {
      color: "#BDC0C4",
      size: (data.inactive_users / total) * 100,
      name: "Inactive Users",
      value: data.inactive_users,
    },
    {
      color: "#3C70F5",
      size: (data.suspended_users / total) * 100,
      name: "Suspended Users",
      value: data.suspended_users,
    },
    {
      color: "#FF7262",
      size: (data.deleted_account / total) * 100,
      name: "Deleted Account",
      value: data.deleted_account,
    },
  ];

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
          <h2 className="text-[28px] font-medium">Users Log</h2>
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
          <div className="mt-4">
            <UserMetrics metric_data={barSegments} total_value={total} />
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
                        Users Details
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
                        Documents
                      </h4>
                    </div>
                    {userNav === "User Details" ? (
                      <div>
                        <div className="mt-2 flex justify-between gap-8">
                          <div className=" w-[110px]">
                            <Image
                              width={110}
                              height={0}
                              src={`/images/user.svg`}
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                          <div className="flex-1 items-end">
                            <h2 className="text-lg font-medium uppercase mb-3">
                              {user.name}
                            </h2>
                            <h4 className="text-base font-medium mb-3">
                              Email:{" "}
                              <span className="text-sm font-normal">
                                {user.email}
                              </span>
                            </h4>
                            <h4 className="text-base font-medium ">
                              Phone:{" "}
                              <span className="text-sm font-normal">
                                {user.phone_no}
                              </span>
                            </h4>
                          </div>
                        </div>
                        <hr className="my-6" />
                        <div>
                          <h4 className="text-base font-medium mb-4">
                            Gender:{" "}
                            <span className="text-sm font-normal">
                              {user.gender}
                            </span>
                          </h4>
                          <h4 className="text-base font-medium mb-4">
                            Date of Birth:{" "}
                            <span className="text-sm font-normal">
                              {user.date_of_birth}
                            </span>
                          </h4>
                          <h4 className="text-base font-medium">
                            Address:{" "}
                            <span className="text-sm font-normal">
                              {user.address}
                            </span>
                          </h4>
                        </div>
                        <hr className="my-6" />
                        <div>
                          <h2 className="text-lg font-medium mb-6">
                            Users Bank Details
                          </h2>
                          <h4 className="text-base font-medium mb-4">
                            Bank Name:{" "}
                            <span className="text-sm font-normal">
                              {user.bank_details.bank_name}
                            </span>
                          </h4>
                          <h4 className="text-base font-medium mb-4">
                            Account No:{" "}
                            <span className="text-sm font-normal">
                              {user.bank_details.account_no}
                            </span>
                          </h4>
                          <h4 className="text-base font-medium">
                            Account Name:{" "}
                            <span className="text-sm font-normal">
                              {user.bank_details.account_name}
                            </span>
                          </h4>
                        </div>
                        <hr className="my-6" />
                        <div>
                          <h2 className="text-lg font-medium mb-6">
                            Send a message
                          </h2>
                          <textarea
                            id="description"
                            placeholder="Provide additional details, such as what happened, when it occurred, and any other relevant information"
                            name="description"
                            className="w-full h-[230px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
                          />
                          <button className="w-full btn btn-primary my-8 text-white">
                            Send
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <div className="flex gap-3 items-center mb-3">
                          <h3 className="text-base font-medium">Passport</h3>
                          <FiExternalLink className="text-[#D94823] text-xl" />
                        </div>
                        <div className=" w-full h-full mb-20">
                          <Image
                            width={0}
                            height={0}
                            src={`/images/passport.svg`}
                            alt=""
                            className="w-full object-cover h-full"
                          />
                        </div>
                        <div className="flex gap-6 mb-8">
                          <div className="md:w-6/12 w-full">
                            <div className="flex gap-3 items-center mb-3">
                              <h3 className="text-base font-medium">NIN ID</h3>
                              <FiExternalLink className="text-[#D94823] text-xl" />
                            </div>
                            <div className=" w-full h-[260px] mb-8">
                              <Image
                                width={0}
                                height={260}
                                src={`/images/nin.svg`}
                                alt=""
                                className="w-full object-cover h-full"
                              />
                            </div>
                          </div>
                          <div className="md:w-6/12 w-full">
                            <div className="flex gap-3 items-center mb-3">
                              <h3 className="text-base font-medium">
                                Proof of Address
                              </h3>
                              <FiExternalLink className="text-[#D94823] text-xl" />
                            </div>
                            <div className=" w-full h-[260px] mb-8">
                              <Image
                                width={0}
                                height={260}
                                src={`/images/bill.svg`}
                                alt=""
                                className="w-full object-cover h-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" flex gap-3">
                          <button className="md:w-6/12 btn btn-[#EBECF3] rounded-[8px]">
                            Reject KYC
                          </button>
                          <button className="md:w-6/12 btn btn-primary text-white rounded-[8px]">
                            Approve KYC
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
