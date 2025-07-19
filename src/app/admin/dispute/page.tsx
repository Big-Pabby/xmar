"use client"; // Required for Next.js App Router
import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { CiSearch } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";
import { LuFilePlus2 } from "react-icons/lu";
import SkeletonCard from "@/components/Skeleton";
import {
  get_dispute_list,
  get_dispute_metric,
  create_dispute_message,
} from "@/services/apiService";
import { Dispute, DisputeMetric } from "@/types/dispute";
import debounce from "lodash/debounce";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Toaster from "@/components/Toaster";
import { AxiosError } from "axios";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedDispute, setSelectedDispute] = useState<Dispute>();
  const [userNav, setUserNav] = useState("User Details");
  const [imageModalUrl, setImageModalUrl] = useState<string | null>(null);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [toaster, setToaster] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const { data: disputes, isLoading: disputesLoading } = useQuery<Dispute[]>({
    queryKey: ["disputes"],
    queryFn: get_dispute_list,
  });

  const { data: metrics, isLoading: metricsLoading } = useQuery<DisputeMetric>({
    queryKey: ["disputeMetrics"],
    queryFn: get_dispute_metric,
  });

  const queryClient = useQueryClient();

  const createMessageMutation = useMutation({
    mutationFn: create_dispute_message,
    onSuccess: () => {
      // Show success toaster
      setToaster({
        show: true,
        message: "Message sent successfully!",
        type: "success",
      });
      // Reset form
      setMessageTitle("");
      setMessageContent("");
      setShowMessageModal(false);
      // Optionally refetch disputes
      queryClient.invalidateQueries({ queryKey: ["disputes"] });
    },
    onError: (error) => {
      // Show error toaster
      if (error instanceof AxiosError) {
        // Handle Axios-specific error
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        console.error(errorMessage, error);
        setToaster({ show: true, message: errorMessage, type: "error" });
      } else {
        // Handle non-Axios errors
        console.error("An unknown error occurred", error);
        setToaster({show: true, message: "An unknown error occurred", type: "error" });
      }
    },
  });

  const handleSendMessage = () => {
    if (!selectedDispute || !messageTitle.trim() || !messageContent.trim()) {
      setToaster({
        show: true,
        message: "Please fill in both title and message content.",
        type: "error",
      });
      return;
    }

    const messageData = {
      title: messageTitle,
      message: messageContent,
      disputer_email: selectedDispute.disputer_email,
      recipient_email: selectedDispute.recipient_email || "",
    };

    createMessageMutation.mutate(messageData);
  };
  const filteredDisputes =
    disputes?.filter((dispute) => {
      const matchesSearch =
        searchTerm === "" ||
        dispute.transaction_id
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        dispute.transaction_title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        dispute.disputer_email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "" || dispute.dispute_status === filterStatus;

      return matchesSearch && matchesStatus;
    }) || [];

  const totalItems = filteredDisputes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDisputes = filteredDisputes.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const columns = [
    { key: "name", label: "Name" },
    { key: "transaction_id", label: "Transaction ID" },
    { key: "transaction_title", label: "Transaction Title" },
    { key: "dispute_status", label: "Dispute Status" },
    { key: "amount", label: "Amount" },
    { key: "escrow_status", label: "Escrow Status" },

    { key: "created_at", label: "Date" },
  ];
  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, 500);

  // Filter handler
  const handleFilter = (status: string) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  if (disputesLoading || metricsLoading) {
    return <SkeletonCard />;
  }
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      {imageModalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-lg p-4 max-w-lg w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setImageModalUrl(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={imageModalUrl}
              alt="Attachment"
              className="max-h-[70vh] max-w-full rounded"
            />
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Dispute Resolution</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            <Link href={`/admin/products`} className="text-primary">
              Dashboard
            </Link>{" "}
            <IoChevronForward /> Dispute resolution
          </h4>
        </div>
        <button className="btn btn-primary text-white rounded-[8px]">
          <LuFilePlus2 className="text-[20px] text-white" /> Export as PDF
        </button>
      </div>
      <div className="mt-4 bg-secondary border-[1px] border-[#E8E8E9] rounded-[8px] py-[32px] px-[24px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[#39434F] font-medium">Dispute statistics</h3>
          <div className="border-[1px] border-[#D7D9DC] py-[4px] px-[9px] rounded-[9px] text-sm text-[#39434F]">
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="border-r-[1px] border-[#DFE1E5] p-[16px]">
            <h3 className="text-sm text-[#39434F] mb-2">Total Disputes</h3>
            <h4 className="text-primary text-3xl">
              {metrics?.total_disputes}{" "}
            </h4>
          </div>
          <div className="border-r-[1px] border-[#DFE1E5] p-[16px]">
            <div className="mb-2 flex w-full items-center justify-between">
              <h3 className="text-sm text-[#39434F]">Settled Disputes</h3>
              <RiVerifiedBadgeFill className="text-[#48AE6D] text-xl" />
            </div>

            <h4 className="text-[#48AE6D] text-3xl">
              {metrics?.settled_disputes}{" "}
            </h4>
          </div>
          <div className=" p-[16px]">
            <div className="mb-2 flex w-full items-center justify-between">
              <h3 className="text-sm text-[#39434F]">Pending Disputes</h3>
              <RxTimer className="text-primary text-xl" />
            </div>

            <h4 className="text-[#1F1F1F] text-3xl">
              {" "}
              {metrics?.pending_disputes}{" "}
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
              <option value="Money In Escrow">Money In Escrow</option>
              <option value="Settled">Settled</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex items-start gap-6">
            <div
              className={`${
                selectedDispute ? "md:w-7/12 w-full " : "w-full"
              } bg-white rounded-[10px] border-[1px] border-[#A2A1A833] p-3`}
            >
              <div
                className={`${
                  selectedDispute ? " w-full overflow-x-scroll" : "w-full"
                }`}
              >
                <div className=" min-w-[1000px]">
                  <Table
                    columns={columns}
                    rows={paginatedDisputes}
                    onselect={setSelectedDispute}
                    selectedUser={selectedDispute}
                  />
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
            {selectedDispute ? (
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
                    Disputer
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
                    Recipient
                  </h4>
                </div>
                {userNav === "User Details" ? (
                  <div>
                    <div className="bg-[#F8F8F8] rounded-[14px] p-[18px] mt-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[#707070] text-base">Status</p>
                        <h4 className="font-medium text-[#F69E1E] text-base">
                          Money in escrow
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[#707070] text-base">
                          Transaction ID
                        </p>
                        <h4 className="font-medium text-base">
                          {selectedDispute.transaction_id}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[#707070] text-base">
                          Transaction Title
                        </p>
                        <h4 className="font-medium text-base">
                          {selectedDispute.transaction_title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[#707070] text-base">Recipient</p>
                        <h4 className="font-medium text-base">
                          {selectedDispute.recipient_user_name || "N/A"}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[#707070] text-base">Amount</p>
                        <h4 className="font-medium text-primary text-base">
                          {selectedDispute.amount}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[#707070] text-base">
                          Transaction Fee
                        </p>
                        <h4 className="font-medium text-base">
                          ${selectedDispute.charge}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[#707070] text-base">Date</p>
                        <h4 className="font-medium text-base">
                          {selectedDispute.created_at}
                        </h4>
                      </div>
                      <h2 className="text-base font-medium mb-2 mt-6">
                        Provided details
                      </h2>
                      <textarea
                        id="description"
                        value={selectedDispute.disputer_details}
                        readOnly
                        placeholder="Provide additional details, such as what happened, when it occurred, and any other relevant information"
                        name="description"
                        className="w-full h-[230px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
                      />

                      <div className="mt-4">
                        <h4 className="text-base font-medium text-[#344054] mb-2">
                          Attached Documents
                        </h4>
                        {selectedDispute.disputer_attachment.map(
                          (url: string, index: number) => (
                            <div
                              key={index}
                              className="border-[1px] border-[#D0D5DD] rounded-[8px] bg-white flex items-center gap-8 p-4 justify-between mb-2"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-[30px] h-[38px] bg-[#ccc] flex items-center justify-center">
                                  <img
                                    src={url}
                                    alt={`attachment ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-base text-[#101828] font-medium mb-1">
                                    {url.split("/").pop() ||
                                      `File ${index + 1}`}
                                  </h4>
                                  <p className="text-[#667085]">
                                    Attachment {index + 1}
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => setImageModalUrl(url)}
                                className="text-primary font-medium text-base hover:underline cursor-pointer"
                              >
                                View
                              </button>
                            </div>
                          )
                        )}
                      </div>
                      <div className="flex items-center gap-4 justify-between mt-4 mb-2">
                        <button
                          className="w-6/12 btn bg-[#EBECF3] text-[#0D142C]"
                          onClick={() => setShowMessageModal(true)}
                        >
                          Send a message
                        </button>
                        <button
                          className="w-6/12 btn btn-primary text-white"
                          onClick={handleSendMessage}
                          disabled={createMessageMutation.isLoading}
                        >
                          {createMessageMutation.isLoading
                            ? "Sending..."
                            : "Send"}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#F8F8F8] rounded-[14px] p-[18px] mt-6">
                    <h2 className="text-base font-medium mb-2 mt-6">
                      Provided details
                    </h2>
                    <textarea
                      value={
                        selectedDispute.recipient_details ||
                        "No details provided"
                      }
                      readOnly
                      id="description"
                      placeholder="Provide additional details, such as what happened, when it occurred, and any other relevant information"
                      name="description"
                      className="w-full h-[230px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
                    />
                    <div className="mt-4">
                      <h4 className="text-base font-medium text-[#344054] mb-2">
                        Attached Documents
                      </h4>
                      {selectedDispute.recipient_attachment.map(
                        (url: string, index: number) => (
                          <div
                            key={index}
                            className="border-[1px] border-[#D0D5DD] rounded-[8px] bg-white flex items-center gap-8 p-4 justify-between mb-2"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-[30px] h-[38px] bg-[#ccc] flex items-center justify-center">
                                <img
                                  src={url}
                                  alt={`attachment ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="text-base text-[#101828] font-medium mb-1">
                                  {url.split("/").pop() || `File ${index + 1}`}
                                </h4>
                                <p className="text-[#667085]">
                                  Attachment {index + 1}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => setImageModalUrl(url)}
                              className="text-primary font-medium text-base hover:underline cursor-pointer"
                            >
                              View
                            </button>
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex items-center gap-4 justify-between mt-4 mb-2">
                      <button
                        className="w-6/12 btn bg-[#EBECF3] text-[#0D142C]"
                        onClick={() => setShowMessageModal(true)}
                      >
                        Send a message
                      </button>
                      <button
                        className="w-6/12 btn btn-primary text-white"
                        onClick={handleSendMessage}
                        disabled={createMessageMutation.isLoading}
                      >
                        {createMessageMutation.isLoading
                          ? "Sending..."
                          : "Send"}
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

      {/* Toaster */}
      {toaster.show && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={() => setToaster({ ...toaster, show: false })}
        />
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setShowMessageModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Send Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={messageTitle}
                  onChange={(e) => setMessageTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter message title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowMessageModal(false)}
                  className="flex-1 btn bg-gray-300 text-gray-700 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={createMessageMutation.isLoading}
                  className="flex-1 btn btn-primary text-white"
                >
                  {createMessageMutation.isLoading
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
