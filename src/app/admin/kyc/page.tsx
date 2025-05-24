"use client"; // Required for Next.js App Router
import Image from "next/image";
import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { CiSearch } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";
import { LuFilePlus2 } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import SkeletonCard from "@/components/Skeleton";
import { useKYC } from "@/hooks/useKyc";
import debounce from "lodash/debounce";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [user, setUser] = useState<User>();
  const [userNav, setUserNav] = useState("User Details");

  const { data, isLoading, error } = useKYC({
    page: currentPage,
    limit: itemsPerPage,
    search: searchTerm,
    status: filterStatus,
    startDate: dateRange.start,
    endDate: dateRange.end,
  });
  const filteredUsers =
    data?.["users account details"]?.filter((user) => {
      const matchesSearch =
        searchTerm === "" ||
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "" ||
        (filterStatus === "Verified" && user.is_kyc_tier_one_completed) ||
        (filterStatus === "Pending" && !user.is_kyc_tier_one_completed);

      return matchesSearch && matchesStatus;
    }) || [];
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const stats = {
    total_users: data?.user_stats?.total_users ?? 0,
    verified_accounts: {
      tier_one: data?.user_stats?.verified_accounts?.tier_one ?? 0,
      tier_two: data?.user_stats?.verified_accounts?.tier_two ?? 0,
    },
    pending_accounts: data?.user_stats?.pending_accounts ?? 0,
  };
  const columns = [
    { key: "name", label: "Name" },
    { key: "date_joined", label: "Registration Date" },
    { key: "last_seen", label: "Last Seen" },
    { key: "kyc_validation", label: "KYC Validation" },
    { key: "account_type", label: "Account Type" },
  ];
  const selectUser = (data: User) => {
    user ? setUser(undefined) : setUser(data); // eslint-disable-line @typescript-eslint/no-unused-expressions
  };
  // Debounced search handler
  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
  }, 500);

  // Filter handler
  const handleFilter = (status: string) => {
    setFilterStatus(status);
    setCurrentPage(1); // Reset to first page on filter
  };

  // Date range handler
  // const handleDateRange = (start: string, end: string) => {
  //   setDateRange({ start, end });
  //   setCurrentPage(1); // Reset to first page on date change
  // };
  if (isLoading) {
    return <SkeletonCard />;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">KYC Verification</h2>
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

      <div>
        <div className="mt-4 bg-secondary border-[1px] border-[#E8E8E9] rounded-[8px] py-[32px] px-[24px]">
          <div className="flex justify-between items-center">
            <h3 className="text-[#39434F] font-medium">Users KYC</h3>
            <div className="border-[1px] border-[#D7D9DC] py-[4px] px-[9px] rounded-[9px] text-sm text-[#39434F]">
              Aug 31, 2023
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-4">
            <div className="border-r-[1px] border-[#DFE1E5] p-[16px]">
              <h3 className="text-sm text-[#39434F] mb-2">Total Users</h3>
              <h4 className="text-primary text-3xl">
                {stats.total_users}{" "}
                <span className="text-xl text-[#48AE6D] -mt-3">+32</span>
              </h4>
            </div>
            <div className="border-r-[1px] col-span-2 border-[#DFE1E5] p-[16px]">
              <div className="mb-2 flex w-full items-center justify-between">
                <h3 className="text-sm text-[#39434F]">Verified Accounts</h3>
                <RiVerifiedBadgeFill className="text-[#48AE6D] text-xl" />
              </div>
              <div className="flex justify-between gap-4">
                <h4 className=" text-2xl">
                  Tier 1 :{" "}
                  <span className="text-[#48AE6D]">
                    {" "}
                    {stats.verified_accounts.tier_one} users
                  </span>
                </h4>
                <h4 className=" text-2xl">
                  Tier 2 :{" "}
                  <span className="text-[#48AE6D]">
                    {" "}
                    {stats.verified_accounts.tier_two} users
                  </span>
                </h4>
              </div>
            </div>
            <div className=" p-[16px]">
              <div className="mb-2 flex w-full items-center justify-between">
                <h3 className="text-sm text-[#39434F]">Pending Accounts</h3>
                <RxTimer className="text-primary text-xl" />
              </div>

              <h4 className="text-[#1F1F1F] text-3xl">
                {stats.pending_accounts} users{" "}
              </h4>
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
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <select
                className="btn btn-secondary"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Verified">Verified</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="flex items-start gap-6">
              <div
                className={`${
                  user ? "md:w-7/12 w-full " : "w-full"
                } bg-white rounded-[10px] border-[1px] border-[#A2A1A833] p-3`}
              >
                <div
                  className={`${user ? " w-full overflow-x-scroll" : "w-full"}`}
                >
                  <div className=" min-w-[1000px]">
                    <Table
                      columns={columns}
                      rows={paginatedUsers}
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
                    Showing {startIndex + 1} to{" "}
                    {Math.min(startIndex + itemsPerPage, totalItems)} out of{" "}
                    {totalItems} records
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
      </div>
    </div>
  );
};

export default Page;
