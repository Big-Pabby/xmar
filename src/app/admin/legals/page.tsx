"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { useQuery } from "react-query";
import { get_admin_legals } from "@/services/apiService";
import { Blog } from "@/types/blog";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import { useLegalStore } from "@/store/useStore";

const Page = () => {
  const [currentNav, setCurrentNav] = useState<string>("Consent Agreement");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const nav: string[] = [
    "Consent Agreement",
    "Dispute Resolution",
    "Terms and Condition",
    "Privacy Policy",
    "Anti-money laundering",
  ];
  const { legals, setLegals } = useLegalStore();

  // Fetch legals using React Query
  const { data: fetchedLegals, isLoading } = useQuery<Blog[]>({
    queryKey: ["legals"],
    queryFn: get_admin_legals,
    // Only fetch if no cached data or cache is stale
    onSuccess: (data) => {
      setLegals(data); // Cache the fetched legals
    },
  });

  // Use cached legals if available, otherwise use fetched legals
  const legalsData = legals.length > 0 ? legals : fetchedLegals || [];

  // Filter legals by current navigation
  const filteredLegals =
    legalsData?.filter((legal) => legal.category === currentNav) || [];

  // Pagination
  const totalPages = Math.ceil((filteredLegals?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLegals = filteredLegals.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <h2 className="text-[28px] font-medium">Legals</h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Manage admin users all in one place
        </h4>
      </div>
      <div className="flex flex-wrap gap-6 my-8">
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
        <h4 className="text-primary font-semibold mt-8">Deployed Documents</h4>
        <hr className="my-2" />
        {isLoading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="loading loading-spinner"></div>
          </div>
        ) : (
          <>
            <div className="flex justify-start flex-wrap gap-4 mt-6">
              {paginatedLegals.map((legal) => (
                <Link
                  href={`/admin/legals/${currentNav}?id=${legal.id}`}
                  key={legal.id}
                  className="border-[1px] border-primary w-[196px] bg-[#FFF0ED]"
                >
                  <div className="flex items-center justify-center mb-4 pt-4">
                    <Image
                      src="/file-legal.svg"
                      alt="file"
                      width={83}
                      height={98}
                    />
                  </div>
                  <hr />
                  <div className="p-3">
                    <h3 className="font-medium text-base mb-2">
                      {legal.title}
                    </h3>
                    <p className="text-sm text-primary">
                      Updated on {legal.date_updated}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex w-full justify-between items-center">
              <div className="flex items-center gap-4">
                <p className="text-[#A2A1A8] font-light">Showing</p>
                <div className="border-[1px] border-[#A2A1A833] rounded-[10px] p-2 w-[66px] h-[36px]">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
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
                {Math.min(startIndex + itemsPerPage, filteredLegals.length)} out
                of {filteredLegals.length} records
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
