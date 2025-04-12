"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

const Page = () => {
  const [currentNav, setCurrentNav] = useState<string>("Consent Agreement");
  const nav: string[] = [
    "Consent Agreement",
    "Dispute Resolution",
    "Terms and Condition",
    "Privacy Policy",
    "Anti-money laundering",
  ];
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <h2 className="text-[28px] font-medium">Legals</h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Manage admin users all in one place
        </h4>
      </div>
      <div className="grid grid-cols-5 gap-6 my-8">
        {nav.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentNav(item)}
            className={`${
              item === currentNav ? "bg-primary text-white" : "bg-white"
            } rounded-[10px] hover:bg-primary hover:text-white p-5 text-center cursor-pointer transition-all duration-200 ease-in-out`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-[10px] min-h-[700px] border-[1px] border-[#A2A1A833] p-10">
        <h4 className="text-primary font-semibold">Start a New Document</h4>
        <hr className="my-2" />
        <div className="mt-6">
          <Link
            href={`/admin/legals/${currentNav}`}
            className=" bg-[#F8F8F9] border-[1px] border-[#CCCCCC] w-[196px] h-[213px] inline-flex items-center justify-center"
          >
            <FiPlus className="text-[50px] text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
