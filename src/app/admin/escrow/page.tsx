"use client"; // Required for Next.js App Router

import React from "react";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { FaPlus } from "react-icons/fa6";
import Table from "@/components/Table";
import { TiArrowSortedUp } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import Modal from "@/components/Modal";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  get_escrow_list,
  get_escrow_fee,
  update_escrow_fee,
} from "@/services/apiService";
import { EscrowTransaction, EscrowFee } from "@/types/escrow";
import debounce from "lodash/debounce";
import Image from "next/image";
import PercentageInput from "@/components/PercentageInput";

const Escrow = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [roller, setRoller] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [escrowFee, setEscrowFee] = useState({
    capped_amount: 0,
    higher_amount: 0,
    lower_amount: 0,
  });
  const [percentage, setPercentage] = useState<number>(0);
  const queryClient = useQueryClient();

  // Fetch escrow transactions
  const { data: escrowData, isLoading } = useQuery<EscrowTransaction[]>({
    queryKey: ["escrow"],
    queryFn: get_escrow_list,
  });
  const { data: escrowFees } = useQuery<EscrowFee>({
    queryKey: ["escrowFees"],
    queryFn: get_escrow_fee,
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

  const open_level_fee = (level: string) => {
    setCurrentLevel(level);
    setIsOpen(true);
  };
  const updateFeeMutation = useMutation({
    mutationFn: update_escrow_fee,
    onMutate: () => {
      setRoller(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["escrowFee"]);
      // Add success toast/notification here if needed
    },
    onError: (error) => {
      // Handle error notification here
      console.error("Failed to update fee:", error);
    },
    onSettled: () => {
      setRoller(false);
    },
  });

  const handleUpdateFee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateFeeMutation.mutate({
      level: currentLevel,
      percentage: percentage,
      ...escrowFee,
    });
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
          <FaPlus className="text-[20px] text-white" /> Download history
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex gap-3 items-center mb-4">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#FFF6F4] rounded-full">
              <Image
                src="/images/Bank.png"
                alt="Hairsby logo"
                width={22}
                height={22}
                className="h-[20px] w-[20px]"
              />
            </div>
            <div>
              <h4 className="text-primary capitalize font-bold text-base">
                {currentLevel}
              </h4>
              <p className="text-sm text-[#7D7C93] mt-1">Escrow Fee</p>
            </div>
          </div>

          <form onSubmit={handleUpdateFee}>
            <div className="mb-4">
              <label
                htmlFor="percentage"
                className="block font-semibold text-base text-[#344054] mb-1"
              >
                Percentage
              </label>
              <PercentageInput
                className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                value={percentage}
                onChange={setPercentage}
              />
            </div>
            <div className="mb-4 ">
              <label
                htmlFor="capped_amount"
                className="block font-semibold text-base text-[#344054] mb-1"
              >
                Capped Amount
              </label>
              <input
                id="capped_amount"
                onChange={(e) =>
                  setEscrowFee((prev) => ({
                    ...prev,
                    capped_amount: e.target.value
                      ? parseFloat(e.target.value)
                      : 0,
                  }))
                }
                type="number"
                className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                placeholder="Enter the capped amount"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="md:w-6/12">
                <label
                  htmlFor="amount_from"
                  className="block font-semibold text-base text-[#344054] mb-1"
                >
                  Amount from
                </label>
                <input
                  id="amount_from"
                  onChange={(e) =>
                    setEscrowFee((prev) => ({
                      ...prev,
                      lower_amount: e.target.value
                        ? parseFloat(e.target.value)
                        : 0,
                    }))
                  }
                  type="number"
                  className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                  placeholder="From"
                />
              </div>
              <div className="md:w-6/12">
                <label
                  htmlFor="amount_to"
                  className="block font-semibold text-base text-[#344054] mb-1"
                >
                  Amount to
                </label>
                <input
                  id="amount_to"
                  onChange={(e) =>
                    setEscrowFee((prev) => ({
                      ...prev,
                      higher_amount: e.target.value
                        ? parseFloat(e.target.value)
                        : 0,
                    }))
                  }
                  type="number"
                  className="outline-none bg-[#F1F1F1] w-full rounded-[5px] p-[18px]"
                  placeholder="To"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={roller}
              className={`btn btn-primary w-full text-white ${
                roller ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {roller ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Updating...</span>
                </div>
              ) : (
                "Update Fee"
              )}
            </button>
          </form>
        </Modal>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div
          onClick={() => open_level_fee("level one")}
          className=" cursor-pointer border-[1px] border-[#A2A1A833] bg-white rounded-[10px]"
        >
          <div className="border-b-[1px] border-[#A2A1A833] p-3">
            <p className="font-light mb-1">Escrow Fee</p>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">
                ₦{Number(escrowFees?.level_one_capped_amount).toLocaleString()}{" "}
                cap price
              </h4>
              <div className="flex items-center gap-2 bg-[#30BE821A] rounded-[5px] p-[5px] text-[11px] text-[#30BE82]">
                <TiArrowSortedUp /> {escrowFees?.level_one}% fee
              </div>
            </div>
          </div>
          <div className="p-3 flex items-center justify-between">
            <p className="text-[12px] font-light text-[#A2A1A8]">
              Updated: {escrowFees?.updated_at}
            </p>
            <h4 className="text-sm text-primary font-bold">LEVEL 1</h4>
          </div>
        </div>
        <div
          onClick={() => open_level_fee("level two")}
          className=" cursor-pointer border-[1px] border-[#A2A1A833] bg-white rounded-[10px]"
        >
          <div className="border-b-[1px] border-[#A2A1A833] p-3">
            <p className="font-light mb-1">Escrow Fee</p>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">
                ₦{Number(escrowFees?.level_two_capped_amount).toLocaleString()}{" "}
                cap price
              </h4>
              <div className="flex items-center gap-2 bg-[#30BE821A] rounded-[5px] p-[5px] text-[11px] text-[#30BE82]">
                <TiArrowSortedUp /> {escrowFees?.level_two}% Fee
              </div>
            </div>
          </div>
          <div className="p-3 flex items-center justify-between">
            <p className="text-[12px] font-light text-[#A2A1A8]">
              Updated: {escrowFees?.updated_at}
            </p>
            <h4 className="text-sm text-primary font-bold">LEVEL 2</h4>
          </div>
        </div>
        <div
          onClick={() => open_level_fee("level three")}
          className=" cursor-pointer border-[1px] border-[#A2A1A833] bg-white rounded-[10px]"
        >
          <div className="border-b-[1px] border-[#A2A1A833] p-3">
            <p className="font-light mb-1">Escrow Fee</p>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg">
                ₦
                {Number(escrowFees?.level_three_capped_amount).toLocaleString()}{" "}
                cap price
              </h4>
              <div className="flex items-center gap-2 bg-[#30BE821A] rounded-[5px] p-[5px] text-[11px] text-[#30BE82]">
                <TiArrowSortedUp /> {escrowFees?.level_three}% Fee
              </div>
            </div>
          </div>
          <div className="p-3 flex items-center justify-between">
            <p className="text-[12px] font-light text-[#A2A1A8]">
              Updated: {escrowFees?.updated_at}
            </p>
            <h4 className="text-sm text-primary font-bold">LEVEL 3</h4>
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

export default Escrow;
