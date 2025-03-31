import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import Image from "next/image";

const Wallet = () => {
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Balance</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <p className="text-accent mt-1 text-[14px]">
        Here is a list of wallet balances
      </p>
      <div className="mt-6 rounded-[12px] bg-gradient-to-r from-[#FE315C] to-[#72B1FE] bg-primary w-full h-[180px] p-[24px] flex flex-col justify-between">
        <div className="flex w-full justify-between items-center">
          <div className="  w-[32px] h-[26px]">
            <Image
              src={"/images/card.svg"}
              alt="product Image"
              width={32}
              height={26}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="  w-[24px] h-[28px]">
            <Image
              src={"/images/logo-white.svg"}
              alt="product Image"
              width={24}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-white opacity-80 mb-1">Total Balance</p>
          <h4 className="text-[24px] text-white font-medium">
            $11,240.00 <span className="text-sm font-normal">= £798.00</span>
          </h4>
        </div>
      </div>
      <div className="mt-4 w-full border-[1px] btn btn-outline rounded-[8px] hover:bg-primary hover:border-none border-[#E8E8E9] text-accent font-semibold py-[10px] px-[14px] flex justify-center gap-4 items-center">
        <LuEye className="text-[20px]" />
        Hide Amount
      </div>
    </div>
  );
};

export default Wallet;
