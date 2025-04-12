"use client";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import TextEditor from "@/components/TextEditor";

const Page = () => {
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <h2 className="text-[28px] font-medium">Consent Agreements</h2>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            <Link href={`/admin/legals`} className="text-primary">
              Legals
            </Link>{" "}
            <IoChevronForward /> Consent Agreement
          </h4>
        </div>
        <button className="btn btn-primary text-white rounded-[8px]">
          Deploy document to website
        </button>
      </div>
      <div className="mt-8">
        <TextEditor />
      </div>
    </div>
  );
};

export default Page;
