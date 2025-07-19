import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  TbCreditCardPay,
  TbCreditCardRefund,
  TbFileDollar,
  TbShoppingCart,
  TbTicket,
  TbReceipt2,
} from "react-icons/tb";
import Link from "next/link";

const QuickAction = () => {
  const actions = [
    {
      name: "Notification",
      link: '/admin/notification',
      icon: <TbCreditCardPay />,
    },
    {
      name: "Escrow",
      link: '/admin/escrow',
      icon: <TbCreditCardRefund />,
    },
    {
      name: "Transaction",
      link: '/admin/transactions',
      icon: <TbFileDollar />,
    },
    {
      name: "Disputes",
      link: '/admin/dispute',
      icon: <TbShoppingCart />,
    },
    {
      name: "Users Log",
      link: '/admin/users',
      icon: <TbTicket />,
    },
    {
      name: "Kyc",
      link: '/admin/kyc',
      icon: <TbReceipt2 />,
    },
  ];
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Quick Chats & Support</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <p className="text-accent mt-1 text-[14px]">Quick actions list</p>
      <div className="flex justify-around flex-wrap mt-4">
        {actions.map((item, index) => (
          <Link href={`${item.link}`} key={index} className="flex flex-col gap-2 items-center">
            <div className="btn btn-secondary bg-none p-[14px] border-[1px] border-[#E8E8E9] rounded-[8px] text-[24px] text-accent">
              {item.icon}
            </div>
            <p className="text-accent font-semibold">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickAction;
