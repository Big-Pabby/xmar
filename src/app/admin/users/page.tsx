"use client";
import UserMetrics from "@/components/UserMetrics";
import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { CiSearch } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { LuFilePlus2 } from "react-icons/lu";
import SkeletonCard from "@/components/Skeleton";
import { useUser } from "@/hooks/useUser";
import debounce from "lodash/debounce";

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
  name?: string;
  value?: number;
}

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  // const [filterStatus, setFilterStatus] = useState("");
  // const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const { data, isLoading, error } = useUser({
    page: currentPage,
    limit: itemsPerPage,
    search: searchTerm,
    // status: filterStatus,
    // startDate: dateRange.start,
    // endDate: dateRange.end,
  });
  const filteredUsers =
    data?.["users account details"]?.filter((user) => {
      // Handle search
      const matchesSearch =
        searchTerm === "" ||
        (user.first_name?.toLowerCase() || "").includes(
          searchTerm.toLowerCase()
        ) ||
        (user.last_name?.toLowerCase() || "").includes(
          searchTerm.toLowerCase()
        ) ||
        (user.email?.toLowerCase() || "").includes(searchTerm.toLowerCase());

      // Handle status filtering
      const matchesStatus = () => {
        if (!filterStatus) return true;

        switch (filterStatus) {
          case "Active":
            return user.is_active;
          case "Inactive":
            return !user.is_active;
          default:
            return true;
        }
      };

      return matchesSearch && matchesStatus();
    }) || [];
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const columns = [
    { key: "name", label: "Name" },
    { key: "date_joined", label: "Registration Date" },
    { key: "last_seen", label: "Last Seen" },
    { key: "no_of_trades", label: "No of Trades" },
    { key: "is_active", label: "Account Status" },
    { key: "action", label: "Action" },
  ];

  const stats = {
    active_users: data?.user_stats.active_users ?? 100,
    inactive_users: data?.user_stats.inactive_users ?? 64,
    deleted_account: data?.user_stats.deleted_accounts ?? 30,
  };
  const total = data?.user_stats.total_users ?? 0;
  const barSegments: BarSegment[] = [
    {
      color: "#48AE6D",
      size: (stats.active_users / total) * 100,
      name: "Active Users",
      value: stats.active_users,
    },
    {
      color: "#BDC0C4",
      size: (stats.inactive_users / total) * 100,
      name: "Inactive Users",
      value: stats.inactive_users,
    },
    {
      color: "#FF7262",
      size: (stats.deleted_account / total) * 100,
      name: "Deleted Account",
      value: stats.deleted_account,
    },
  ];

  // Debounced search handler
  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
  }, 500);
  const handleFilter = (status: string) => {
    setFilterStatus(status);
    setCurrentPage(1); // Reset to first page on filter change
  };

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

      <div>
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
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <select
                className="btn btn-secondary"
                onChange={(e) => handleFilter(e.target.value)}
                value={filterStatus}
              >
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex items-start gap-6">
              <div
                className={`${"w-full"} bg-white rounded-[10px] border-[1px] border-[#A2A1A833] p-3`}
              >
                <div className={`${"w-full"}`}>
                  <div className=" min-w-[1000px]">
                    <Table columns={columns} rows={paginatedUsers} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
