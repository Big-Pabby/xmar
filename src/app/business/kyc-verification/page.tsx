"use client"; // Required for Next.js App Router
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const [get_started, setGetStarted] = useState(false);
  return (
    <div className="min-h-screen flex flex-col  w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">KYC Verification</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            Get your profile Verified
          </h4>
        </div>
        <button className="btn btn-primary text-white rounded-[8px]">
          Book an Appointment
        </button>
      </div>
      {!get_started ? (
        <div className=" bg-white rounded-[8px] w-full h-[600px]  mt-6 relative">
          <Image
            src="/images/kyc/kyc background.svg"
            alt="KYC Background"
            layout="fill"
            objectFit="cover"
            className="rounded-[8px] -mt-8"
          />
          <div className="flex flex-col items-center justify-end  w-full z-10 absolute bottom-[24px] mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#684300]">
              KYC Verification
            </h3>
            <p className="mb-12 text-[#364154]">
              Help us keep your account safe! Verify your identity in just 5
              minutes—it’s quick and easy
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn bg-[#EBECF3]  rounded-[8px] font-semibold">
                Skip for Later
              </button>
              <button
                onClick={() => setGetStarted(true)}
                className="btn btn-primary text-white rounded-[8px] font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full bg-white rounded-[8px] px-12 py-20 mt-6 border-[1px] border-[#E8E8E9] flex flex-col items-center">
            <div className="bg-gray-300 w-[78px] h-[78px] rounded-full "></div>
            <h4 className="my-4 text-2xl font-medium">Captain Barbershop</h4>
            <p className="text-sm font-semibold text-accent">
              Help us keep your account safe! Verify your identity in just 5
              minutes—it’s quick and easy
            </p>
            <div className="mt-12 grid grid-cols-2 gap-12">
              <div className="border-[1px] border-[#A2A1A833] rounded-[10px] bg-neutral py-[16px]">
                <div className="px-[16px] justify-between flex items-center gap-[32px]">
                  <div className="md:w-6/12">
                    <h4 className="text-xl font-medium mb-6">
                      Personal Information
                    </h4>
                    <p className="text-accent text-sm">
                      Help us keep your account safe! Verify your identity in
                      just 5 minutes—it’s quick and easy Help us keep your{" "}
                    </p>
                  </div>
                  <img src="/images/kyc/kyc_icon.svg" alt="" />
                </div>
                <hr className="my-[24px]" />
                <div className="flex justify-between items-center px-[16px]">
                  <Link
                    className="text-primary font-medium text-2xl"
                    href={`/business/kyc-verification/set-up`}
                  >
                    Get Started
                  </Link>
                  <FaArrowAltCircleRight className="text-primary text-2xl" />
                </div>
              </div>
              <div className="border-[1px] border-[#A2A1A833] rounded-[10px] bg-neutral py-[16px]">
                <div className="px-[16px] justify-between flex items-center gap-[32px]">
                  <div className="md:w-6/12">
                    <h4 className="text-xl font-medium mb-6">
                      Document Upload
                    </h4>
                    <p className="text-accent text-sm">
                      Help us keep your account safe! Verify your identity in
                      just 5 minutes—it’s quick and easy Help us keep your{" "}
                    </p>
                  </div>
                  <img src="/images/kyc/kyc_icon.svg" alt="" />
                </div>
                <hr className="my-[24px]" />
                <div className="flex justify-between items-center px-[16px]">
                  <Link
                    className="text-primary font-medium text-2xl"
                    href={`/business/kyc-verfication/set-up`}
                  >
                    Get Started
                  </Link>
                  <FaArrowAltCircleRight className="text-primary text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
