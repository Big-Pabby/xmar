"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen">
      <div className="md:w-6/12 w-full h-full gradient-overlay"></div>
      <div className="md:w-6/12 w-full flex justify-center items-center h-full">
        <form className="flex md:px-36  flex-col items-center justify-center bg-white h-full w-full">
          <Image
            src="/images/bank-2.svg"
            alt="Hairsby logo"
            width={52}
            height={52}
            className="mx-auto"
          />
          <h3 className="font-bold text-4xl text-[#470E00] text-center my-4">
            Welcome Back
          </h3>
          <p className="text-[#3D3D3D] text-center">
            Enter the details associated to your xmarr account
          </p>
          <div className="my-4 w-full">
            <label htmlFor="email" className="mb-1 block font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full border-[1px] border-[#EDEDED] bg-[#EDEDED] p-[16px] outline-none"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="password" className="mb-1 block font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full border-[1px] border-[#EDEDED] bg-[#EDEDED] p-[16px] outline-none"
            />
          </div>
          <div className="flex w-full justify-between items-center mb-8">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                className="accent-primary h-[18px] w-[18px]"
              />
              <p>Remember me</p>
            </div>
            <p>Forgot Password</p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/admin/dashboard")}
            className="btn btn-primary w-full text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
