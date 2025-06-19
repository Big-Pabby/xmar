"use client";

import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import Toaster from "@/components/Toaster";
import { add_admin } from "@/services/apiService";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";
import { get_admins } from "@/services/apiService";
// import SkeletonCard from "@/components/Skeleton";
import { AxiosError } from "axios";

interface Admin {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  profile_photo: string | null;
  date_joined: string;
  last_seen: string;
  no_of_trades: number;
  is_active: boolean;
  admin_role: string;
}
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const { data: admins, isLoading } = useQuery<Admin[]>({
    queryKey: ["admins"],
    queryFn: get_admins,
  });

  // Filter and search admins
  const filteredAdmins =
    admins?.filter((admin) => {
      const matchesSearch =
        searchTerm === "" ||
        admin.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole = filterRole === "" || admin.admin_role === filterRole;

      return matchesSearch && matchesRole;
    }) || [];

  // Get unique roles for filter dropdown
  const uniqueRoles = [
    ...new Set(admins?.map((admin) => admin.admin_role) || []),
  ];

  const [formData, setFormData] = useState({
    email: "",
    role: "",
  });
  const [toaster, setToaster] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [formLoader, setFormLoader] = useState<boolean>(false);

  const inputs = [
    {
      name: "Email address",
      id: "email",
      type: "email",
    },
    {
      name: "Select Role",
      id: "role",
      options: ["Support", "Human Resource", "Help Desk", "Tech Support"],
      type: "select",
    },
  ];
  const columns = [
    { key: "name", label: "Name" },
    { key: "last_seen", label: "Last Seen" },
    { key: "admin_role", label: "Role" },
    { key: "admin_action", label: "Action" },
  ];

  // Pagination calculation
  const totalPages = Math.ceil((filteredAdmins?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAdmins = filteredAdmins.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Search handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Filter handler
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRole(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };
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
      const response = await add_admin(formData);

      setToaster({ message: response.data.message, type: "success" });
    } catch (error) {
      if (error instanceof AxiosError) {
        // Handle Axios-specific error
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        console.error(errorMessage, error);
        setToaster({ message: errorMessage, type: "error" });
      } else {
        // Handle non-Axios errors
        console.error("An unknown error occurred", error);
        setToaster({ message: "An unknown error occurred", type: "error" });
      }
    } finally {
      setFormLoader(false);
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen w-full pt-[100px] pb-10">
  //       <SkeletonCard />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen w-full pt-[100px] pb-10">
  //       <p className="text-red-500">
  //         Error loading data. Please try again later.
  //       </p>
  //     </div>
  //   );
  // }
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
                value={searchTerm}
                onChange={handleSearch}
                className="w-full border-none m-0 p-0 outline-none bg-transparent"
                placeholder="Search"
              />
            </div>
            <select
              value={filterRole}
              onChange={handleFilter}
              className="btn btn-secondary bg-none border-[1px] border-[#E8E8E9] p-[15px] flex items-center gap-2 font-medium text-[16px] rounded-[10px]"
            >
              <option value="">All Roles</option>
              {uniqueRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-white w-full rounded-[10px] border-[1px] border-[#A2A1A833] p-3">
              {isLoading ? (
                <div className="flex justify-center items-center h-[400px]">
                  <div className="loading loading-spinner"></div>
                </div>
              ) : (
                <>
                  <div className="w-full">
                    <div className=" min-w-[1000px]">
                      <Table columns={columns} rows={paginatedAdmins} />
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
                      {Math.min(
                        startIndex + itemsPerPage,
                        filteredAdmins.length
                      )}{" "}
                      out of {filteredAdmins.length} records
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
        </div>
      </div>
    </div>
  );
};

export default Page;
