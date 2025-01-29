import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Wallet = () => {
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Wallet Balance</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <p className="text-accent mt-4 text-[14px]">
        Admin estimated wallet Balance
      </p>
      <div className="mt-6 rounded-[12px] bg-primary w-full h-[180px] p-[12px] flex flex-col justify-between">
        <div>
          <p className="text-white opacity-80 mb-3">Balance</p>
          <h4 className="text-[24px] text-white font-medium">$11,240.00</h4>
        </div>
        <p className="font-medium text-[16px] text-white">
          This is the total wallet balance
        </p>
      </div>
      <div className="mt-4 w-full border-[1px] btn btn-outline rounded-[8px] hover:bg-primary hover:border-none border-[#E8E8E9] text-accent font-semibold py-[10px] px-[14px] flex justify-center gap-4 items-center">
        <FiPlus className="text-[20px]" />
        Fund Admin Wallet
      </div>
    </div>
  );
};

export default Wallet;
