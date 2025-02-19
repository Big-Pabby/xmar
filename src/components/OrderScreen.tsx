"use client"; // Required for Next.js App Router

import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import OrderCard from "@/components/OrderCard";

const rows = [
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "confirm",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "shipped",
  },
  {
    order_id: "#567766",
    full_name: "John Doe",
    date: "2025-03-01T13:46:45.553Z",
    phone: "+900 564 7327 67",
    shipping: "Logistics",
    payment_method: "Paypal",
    address: "274, Fold Street, Newcastle london",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    order_status: "completed",
  },
];

const OrderScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = rows.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full bg-secondary rounded-[8px] border-[1px] border-[#A2A1A833] p-[20px]">
      <div className="flex justify-between items-center mb-4">
        <div className="py-[13px] bg-secondary w-[330px] px-[16px] rounded-[10px] border-[1px] border-[#A2A1A81A] flex items-center gap-1">
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
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <div key={index}>
            <OrderCard order={item} />
          </div>
        ))}
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
  );
};

export default OrderScreen;
