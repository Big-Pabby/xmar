"use client";
import Image from "next/image";
import Link from "next/link";
import { FiChevronsLeft, FiUsers } from "react-icons/fi";
import { LuLayoutGrid, LuWallet } from "react-icons/lu";
import {
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiDotsVertical,
} from "react-icons/hi";
import { TbArrowsExchange2, TbReceipt } from "react-icons/tb";

import React from "react";

const SideBar = () => {
  return (
    <div className="fixed w-[275px] z-[120] top-0 h-[100vh] left-0 bg-white py-8 px-6">
      <div className="flex justify-between items-center mb-8">
        <Image
          src="/images/Logo.svg" // Path to the image in the public folder
          alt="Logo Image"
          width={200}
          height={32}
        />
        <div className="bg-[#F1F2F4] rounded-[6px] p-[6px] text-[20px]">
          <FiChevronsLeft />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Link
          className="hover:bg-[#F9A000] hover:text-[white] text-[#505766] py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3"
          href="/about"
        >
          {" "}
          <LuLayoutGrid className="font-bold text-[24px]" /> Dashboard
        </Link>
        <Link
          className="hover:bg-[#F9A000] hover:text-[white] text-[#505766] py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3"
          href="/about"
        >
          {" "}
          <HiOutlineCreditCard className="font-bold text-[24px]" /> Managements
        </Link>
        <Link
          className="hover:bg-[#F9A000] hover:text-[white] text-[#505766] py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3"
          href="/about"
        >
          {" "}
          <LuWallet className="font-bold text-[24px]" /> Subscription
        </Link>
        <Link
          className="hover:bg-[#F9A000] hover:text-[white] text-[#505766] py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3"
          href="/about"
        >
          {" "}
          <TbArrowsExchange2 className="font-bold text-[24px]" /> Products
        </Link>
        <Link
          className="hover:bg-[#F9A000] hover:text-[white] text-[#505766] py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3"
          href="/about"
        >
          {" "}
          <HiOutlineChartPie className="font-bold text-[24px]" /> Analytics
        </Link>
        <Link
          className="hover:bg-[#F9A000] hover:text-[white] text-[#505766] py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3"
          href="/about"
        >
          {" "}
          <TbReceipt className="font-bold text-[24px]" /> Notifications
        </Link>
        <Link
          className="hover:bg-[#F9A000] hover:text-[white] text-[#505766] py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3"
          href="/about"
        >
          {" "}
          <FiUsers className="font-bold text-[24px]" /> Chats & Support
        </Link>
      </div>
      <div className="absolute w-full bottom-0 left-0 border-t-[1px] border-[#E8E8E9] p-[16px]">
        <div className="w-full border-[1px] border-[#E8E8E9] rounded-[12px] p-[12px] flex justify-between gap-4 items-center">
          <div className="flex items-center gap-3 ">
            <div className="relative">
              <Image
                src="/images/avatar.svg" // Path to the image in the public folder
                alt="Logo Image"
                className="rounded-full"
                width={34}
                height={34}
              />
              <div className="absolute right-0 bottom-0 w-[10px] h-[10px] rounded-full bg-[#15AC77]"></div>
            </div>
            <div>
              <h4 className="font-medium">Sylva Harris</h4>
              <h5 className="font-medium text-[#707A8F]">Admin</h5>
            </div>
          </div>
          <HiDotsVertical className="text-[16px] text-[#707A8F]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
