import React from "react";
import UploadFile from "@/components/UploadFile";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col  w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">KYC Verification Set Up</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            Get your profile Verified
          </h4>
        </div>
        <button className="btn btn-primary text-white rounded-[8px]">
          Book an Appointment
        </button>
      </div>
      <div className="mt-8 flex gap-8">
        <div className="md:w-7/12 bg-secondary p-8 rounded-[8px] border-[1px] border-[#A2A1A833]">
          <h3 className="text-2xl font-medium">Proof of Address</h3>
          <p className="italic font-medium my-6">
            Provide a valid UK address verification document (issued within the
            last 3 months).
          </p>
          <UploadFile />
        </div>
      </div>
    </div>
  );
};

export default page;
