"use client";

import React, { useState, useEffect } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { RiLinkM } from "react-icons/ri";
import Wallet from "@/components/Wallet";
import UsersEstimated from "@/components/UsersEstimated";
import ChatBox from "@/components/ChatBox";
import QuickAction from "@/components/QuickAction";
import Statistics from "@/components/Statistics";
import RecentTable from "@/components/RecentTable";
import SkeletonCard from "@/components/Skeleton";
import UserMetrics from "@/components/UserMetrics";
// import { useQuery } from "react-query";
// import { fetchAdminDashboard } from "@/services/apiService";
import { useAuthStore } from "@/store/useStore";

interface DashBoard {
  totalUsers: number;
  totalCustomers: number;
  totalSpecialists: number;
  totalBusinesses: number;
  totalAdmins: number;
  verifiedSpecialists: number;
  verifiedBusinesses: number;
  totalBookings: number;
  totalRevenue: number;
  totalActiveSubscriptions: number;
}

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
  name?: string;
  value?: number;
}
const Page = () => {
  // const {
  //   data: dashboardData,
  //   isLoading,
  //   error, // eslint-disable-line @typescript-eslint/no-unused-vars
  // } = useQuery("adminDashboard", fetchAdminDashboard);
  const { user, setAuthInfo } = useAuthStore(); // eslint-disable-line @typescript-eslint/no-unused-vars

  const dashboard: DashBoard = {
    totalUsers: 30,
    totalCustomers: 30,
    totalSpecialists: 30,
    totalBusinesses: 30,
    totalAdmins: 30,
    verifiedSpecialists: 30,
    verifiedBusinesses: 30,
    totalBookings: 30,
    totalRevenue: 30,
    totalActiveSubscriptions: 30,
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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <h2 className="text-[28px] font-medium">
        Welcome Back {user?.firstName}
      </h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Here is a report on your finances
        </h4>
        <div className="flex gap-5 ">
          <div className="bg-secondary py-[10px] px-[12px] rounded-[8px] border-[1px] border-[#E8E8E9] flex items-center gap-3">
            <LuCalendarDays className="text-[20px] text-[#707A8F]" />
            <p className="text-[14px]">This Year</p>
            <FaChevronDown className="text-[15px] text-[#707A8F]" />
          </div>
          <div className="btn btn-neutral py-[10px] px-[12px] rounded-[8px] border-[1px] border-[#E8E8E9]">
            <RiLinkM className="text-[20px] text-[#707A8F]" />
          </div>
        </div>
      </div>

      <div className="flex gap-5  mt-6">
        <div className="md:w-4/12 w-full flex flex-col gap-5">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <Wallet />
              <UserMetrics metric_data={barSegments} total_value={total} />
              <UsersEstimated user_data={dashboard} />
              <div className="flex-1 flex">
                <ChatBox />
              </div>
            </>
          )}
        </div>
        <div className="md:w-8/12 w-full flex flex-col gap-5">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              {" "}
              <QuickAction />
              <Statistics />
              <RecentTable />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
