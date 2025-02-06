import React from "react";
import { FaPlus } from "react-icons/fa6";

const subscription = () => {
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Subscription</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            View all Subscriptions
          </h4>
        </div>
        <button className="btn btn-primary text-white rounded-[8px]">
          <FaPlus className="text-[20px] text-white" /> Update Subscription Fee
        </button>
      </div>
    </div>
  );
};

export default subscription;
