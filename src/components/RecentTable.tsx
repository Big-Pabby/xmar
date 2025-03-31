import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Table from "./Table";

const RecentTable = () => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "amount", label: "Amount" },
    { key: "title", label: "Title" },
    { key: "entry_date", label: "Date" },
    { key: "status", label: "Status" },
  ];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      amount: "300",
      accountType: "Specialist",
      title: "Subscription",
      titleBy: "Admin",
      entry_date: "2025-02-01T13:46:45.553Z",
      image: "images/chat/bot-3.svg",
      status: "Success",
    },
    {
      id: 2,
      name: "David Doe",
      amount: "500",
      accountType: "Business",
      title: "Card",
      image: "images/chat/bot-4.svg",
      titleBy: "*9090",
      entry_date: "2025-02-01T13:46:45.553Z",
      status: "Success",
    },
    {
      id: 3,
      name: "John Mark",
      amount: "400",
      image: "images/chat/bot-1.svg",
      accountType: "Customer",
      title: "Transfer",
      titleBy: "*8080",
      entry_date: "2025-02-01T13:46:45.553Z",
      status: "Pending",
    },
    {
      id: 4,
      name: "Eric Doe",
      amount: "600",
      image: "images/chat/bot-2.svg",
      accountType: "Specialist",
      title: "Subscription",
      titleBy: "Admin",
      entry_date: "2025-02-01T13:46:45.553Z",
      status: "Success",
    },
    {
      id: 5,
      name: "James Eric",
      amount: "350",
      image: "images/chat/bot-3.svg",
      accountType: "Business",
      title: "Transfer",
      titleBy: "*9090",
      entry_date: "2025-02-01T13:46:45.553Z",
      status: "Pending",
    },
  ];
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Recent Transactions</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <div className="mt-4">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default RecentTable;
