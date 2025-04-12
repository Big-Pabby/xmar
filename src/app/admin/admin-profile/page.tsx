"use client";

import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import Toaster from "@/components/Toaster";
import { setAccess } from "@/services/apiService";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";
import { get_admin_profiles } from "@/services/apiService";
import SkeletonCard from "@/components/Skeleton";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const {
    data: usersData,
    isLoading,
    error,
  } = useQuery(["users", currentPage, itemsPerPage], () =>
    get_admin_profiles()
  );

  const rows = usersData?.users || [
    {
      name: "Ebubechukwu Azaman",
      email_id: "azaman@yopmail.com",
      entry_date: "2025-02-01T13:46:45.553Z",
      admin_status: "Owner",
      image: "/images/chat/bot-3.svg",
    },
    {
      name: "Chinonso Okafor",
      email_id: "chinonso@yopmail.com",
      entry_date: "2025-01-15T10:30:20.553Z",
      admin_status: "Admin",
      image: "/images/chat/bot-2.svg",
    },
    {
      name: "Amaka Eze",
      email_id: "amaka@yopmail.com",
      entry_date: "2025-03-10T08:15:45.553Z",
      admin_status: "Support",
      image: "/images/chat/bot-1.svg",
    },
    {
      name: "John Doe",
      email_id: "johndoe@yopmail.com",
      entry_date: "2025-02-20T14:50:30.553Z",
      admin_status: "Tech Support",
      image: "/images/chat/bot-4.svg",
    },
    {
      name: "Jane Smith",
      email_id: "janesmith@yopmail.com",
      entry_date: "2025-01-25T09:40:10.553Z",
      admin_status: "Help Desk",
      image: "/images/chat/bot-3.svg",
    },
    {
      name: "Michael Johnson",
      email_id: "michaelj@yopmail.com",
      entry_date: "2025-02-05T11:25:50.553Z",
      admin_status: "Owner",
      image: "/images/chat/bot-2.svg",
    },
    {
      name: "Ngozi Chukwu",
      email_id: "ngozi@yopmail.com",
      entry_date: "2025-03-01T16:10:25.553Z",
      admin_status: "Admin",
      image: "/images/chat/bot-3.svg",
    },
    {
      name: "Samuel Ade",
      email_id: "samuel@yopmail.com",
      entry_date: "2025-02-18T12:35:15.553Z",
      admin_status: "Support",
      image: "/images/chat/bot-3.svg",
    },
    {
      name: "Blessing Uche",
      email_id: "blessing@yopmail.com",
      entry_date: "2025-01-30T13:45:05.553Z",
      admin_status: "Help Desk",
      image: "/images/chat/bot-3.svg",
    },
    {
      name: "Ifeanyi Nwosu",
      email_id: "ifeanyi@yopmail.com",
      entry_date: "2025-03-12T15:20:40.553Z",
      admin_status: "Tech Support",
      image: "/images/chat/bot-3.svg",
    },
  ];

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = rows.slice(startIndex, startIndex + itemsPerPage);
  const [formData, setFormData] = useState({
    access_first_name: "",
    access_last_name: "",
    access_email_address: "",
    access_account_tag: "",
  });
  const [toaster, setToaster] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [formLoader, setFormLoader] = useState<boolean>(false);

  const inputs = [
    {
      name: "First Name",
      id: "access_first_name",
      type: "text",
    },
    {
      name: "Last Name",
      id: "access_last_name",
      type: "text",
    },
    {
      name: "Email address",
      id: "access_email_address",
      type: "email",
    },
    {
      name: "Select account tag",
      id: "access_account_tag",
      options: ["Support", "Human Resource", "Help Desk", "Tech Support"],
      type: "select",
    },
  ];
  const columns = [
    { key: "name", label: "Name" },
    { key: "email_id", label: "Email ID" },
    { key: "expiry_date", label: "Last Seen" },
    { key: "admin_status", label: "Status" },
    { key: "admin_action", label: "Action" },
  ];
  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setFormLoader(true);
      const response = await setAccess(formData);

      setToaster({ message: "Access set successfully!", type: "success" });
    } catch (error: any) {
      console.error(error.response.data.message, error);
      setToaster({ message: error.response.data.message, type: "error" });
    } finally {
      setFormLoader(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full pt-[100px] pb-10">
        <SkeletonCard />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full pt-[100px] pb-10">
        <p className="text-red-500">
          Error loading data. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      {/* Toaster */}
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={() => setToaster(null)} // Close the toaster
        />
      )}
      <h2 className="text-[28px] font-medium">Account Access</h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Manage admin users all in one place
        </h4>
      </div>
      <div className="mt-8 bg-white relative w-full rounded-[10px] border-[1px] border-[#A2A1A833] p-4">
        <div className="flex items-center text-primary gap-3">
          <FaLock className="text-2xl" />
          <h4 className="text-[16px] font-semibold">Account Access</h4>
        </div>
        <hr className="my-2" />
        <form className="mt-6 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {inputs.map((item, index) => {
              if (item.type !== "select") {
                return (
                  <div
                    key={index}
                    className="bg-secondary border-[1px] border-[#E8E8E9] rounded-[10px] w-full p-[16px]"
                  >
                    <input
                      id={item.id}
                      name={item.id}
                      type={item.type}
                      required
                      placeholder={item.name}
                      value={formData[item.id as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full p-0 m-0 outline-none border-none"
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="bg-secondary border-[1px] border-[#E8E8E9] rounded-[10px] w-full p-[16px]"
                  >
                    <select
                      id={item.id}
                      value={formData[item.id as keyof typeof formData]}
                      onChange={handleInputChange}
                      name={item.id}
                      required
                      className="w-full p-0 m-0 outline-none border-none"
                    >
                      <option value="" disabled>
                        {item.name}
                      </option>
                      {item.options &&
                        item.options.map((option, index) => {
                          return (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                );
              }
            })}
          </div>
          <div className="w-full mt-8 flex justify-end">
            <button
              disabled={formLoader}
              className="max-w-[280px] w-full btn btn-primary text-white"
            >
              Add
              {formLoader && (
                <span className="loading loading-spin loading-sm text-black"></span>
              )}
            </button>
          </div>
        </form>
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
            <div className="bg-white w-full rounded-[10px] border-[1px] border-[#A2A1A833] p-3">
              <div className="w-full">
                <div className=" min-w-[1000px]">
                  <Table columns={columns} rows={currentItems} />
                </div>
              </div>

              <div className="mt-4 flex w-full justify-between items-center">
                <div className="flex items-center gap-4">
                  <p className="text-[#A2A1A8] font-light">Showing</p>
                  <div className="border-[1px] border-[#A2A1A833] rounded-[10px] p-2 w-[66px] h-[36px]">
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
