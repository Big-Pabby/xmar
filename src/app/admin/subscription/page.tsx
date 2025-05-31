"use client"; // Required for Next.js App Router

import React from "react";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { FaPlus } from "react-icons/fa6";
import Table from "@/components/Table";
import { TiArrowSortedUp } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import Modal from "@/components/Modal";
import { useQuery } from "react-query";
import { get_escrow_list } from "@/services/apiService";
import { EscrowTransaction } from "@/types/escrow";
import debounce from "lodash/debounce";

const Subscription = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Fetch escrow transactions
  const { data: escrowData, isLoading } = useQuery<EscrowTransaction[]>({
    queryKey: ["escrow"],
    queryFn: get_escrow_list,
  });

  // Client-side search and filter
  const filteredTransactions =
    escrowData?.filter((transaction) => {
      const matchesSearch =
        searchTerm === "" ||
        transaction.transaction_id
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.recipient_username
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.sender_username
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        filterStatus === "" || transaction.status === filterStatus;

      return matchesSearch && matchesStatus;
    }) || [];

  // Pagination
  const totalPages = Math.ceil(
    (filteredTransactions?.length || 0) / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const columns = [
    { key: "sender", label: "Sender" },
    { key: "recipient", label: "Recipient" },
    { key: "transaction_id", label: "Transaction ID" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "created_at", label: "Date" },
  ];
  // Debounced search handler
  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, 500);

  // Filter handler
  const handleFilter = (status: string) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };
  // Format transactions for table
  const formattedTransactions = paginatedTransactions.map((transaction) => ({
    transaction_id: transaction.transaction_id,
    sender: {
      name: transaction.sender_username,
      image: transaction.buyer.profile_photo || "/images/chat/bot-1.svg",
      user_type: "Buyer",
    },
    recipient: {
      name: transaction.recipient_username,
      image: transaction.seller.profile_photo || "/images/chat/bot-2.svg",
      user_type: "Seller",
    },
    amount: transaction.amount,
    status: transaction.status,
    created_at: transaction.created_at,
  }));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Escrow Overview</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            View all Subscriptions
          </h4>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary text-white rounded-[8px]"
        >
          <FaPlus className="text-[20px] text-white" /> Update Escrow Fee
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-2xl text-center">Subscription Fee</h2>
          <p className="mt-2 text-center">Set subscription fee</p>
          <form>
            <div className="mb-4">
              <label htmlFor="account_type" className="block mb-1">
                Account Type
              </label>
              <input
                type="text"
                className="outline-none w-full bg-[#F1F1F1] rounded-[5px] p-[18px]"
                placeholder="Select account type"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="account_type" className="block mb-1">
                Amount
              </label>
              <input
                type="text"
                className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                placeholder="Amount"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="account_type" className="block mb-1">
                Discount
              </label>
              <input
                type="text"
                className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                placeholder="15%"
              />
            </div>
            <button className="btn btn-primary w-full text-white rounded-[8px]">
              Save
            </button>
          </form>
        </Modal>
      </div>
      <div className="flex gap-6 mt-8">
        <div className="flex-1 border-[1px] border-[#A2A1A833] bg-white rounded-[10px] p-4">
          <p className="font-light mb-2">Download Escrow Transactions</p>
          <div className="flex items-stretch gap-4">
            <div className="flex-1 border-[1px] border-[#A2A1A833] rounded-[8px] p-3">
              <select
                className="border-none w-full bg-transparent m-0 p-0 outline-none"
                name=""
                id=""
              >
                <option value="All Account">All Accounts</option>
              </select>
            </div>
            <button className="font-medium  btn btn-primary h-full text-white rounded-[8px] py-4 px-8">
              Download File
            </button>
          </div>
        </div>
        <div className="w-[310px] border-[1px] border-[#A2A1A833] bg-white rounded-[10px]">
          <div className="border-b-[1px] border-[#A2A1A833] p-3">
            <p className="font-light mb-1">Escrow Fee</p>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">$2,000 cap price</h4>
              <div className="flex items-center gap-2 bg-[#30BE821A] rounded-[5px] p-[5px] text-[11px] text-[#30BE82]">
                <TiArrowSortedUp /> 5.0% Discount
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-[12px] font-light text-[#A2A1A8]">
              Updated: July 16, 2023
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white rounded-[10px] border-[1px] border-[#A2A1A833] p-3">
          <div className="flex justify-between items-center mb-4">
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
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <Table columns={columns} rows={formattedTransactions} />
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
              {Math.min(startIndex + itemsPerPage, filteredTransactions.length)}{" "}
              out of {filteredTransactions.length} records
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
  );
};

export default Subscription;
