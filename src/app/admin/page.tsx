import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { RiLinkM } from "react-icons/ri";
import Wallet from "@/components/Wallet";
import UsersEstimated from "@/components/UsersEstimated";
import ChatBox from "@/components/ChatBox";
import QuickAction from "@/components/QuickAction";
import Expenses from "@/components/Expenses";
import Statistics from "@/components/Statistics";

const page = () => {
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <h2 className="text-[28px] font-medium">Welcome Back Sylva</h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Here is a your key metrics summary
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
          <Wallet />
          <UsersEstimated />
          <ChatBox />
        </div>
        <div className="md:w-8/12 w-full flex flex-col gap-5">
          <QuickAction />
          <Expenses />
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default page;
