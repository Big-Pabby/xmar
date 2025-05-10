import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoMdPricetag, IoMdCheckmark } from "react-icons/io";

const Page = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#FFEAE4CE] pt-[100px] md:px-20 px-5 py-20 flex items-center justify-center gap-6  flex-col">
        <div className="flex items-center gap-2">
          <p className="text-[15px]">Pricing for </p>
          <button className="btn bg-[#FFE8E2] border-none h-[28px] rounded-[5px] text-[15px]">
            Nigeria <IoChevronDownOutline />
          </button>
        </div>
        <h2 className="font-black md:text-5xl text-3xl text-primary mb-1 text-center">
          <span className="text-[#410D00]">Simple,</span> fair pricing
        </h2>
        <p className="mb-8">Xmarr only makes money when you do.</p>
        <div className="md:w-10/12 mx-auto w-full grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-white rounded-[5px] p-[24px]">
            <h3 className="font-medium text-lg">For Local Transaction</h3>
            <h2 className="font-medium text-4xl my-4">1.5% + NGN 100</h2>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1">
                ₦100 fee waived for transactions under ₦2500
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1">
                Local transactions fees are capped at ₦2000, meaning that is the
                absolute maximum you will ever pay in fees per transaction
              </p>
            </div>
          </div>
          <div className="bg-white rounded-[5px] p-[24px]">
            <h3 className="font-medium text-lg">
              For International Transaction
            </h3>
            <h2 className="font-medium text-4xl my-4">1.5% + NGN 100</h2>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1">
                Get paid by your customers from all over the world
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1">
                International cards are charged and settled in Naira by default,
                but you can also choose to get settled in USD.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-5 py-20">
        <div className="md:w-10/12 mx-auto w-full mb-16">
          <h3 className="font-semibold text-3xl mb-8">Transfers</h3>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Transfers of NGN 5,000 and below
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 10 per Transfer</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Transfers between NGN 5,001 and NGN 50,000
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 25 per Transfer</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Transfers above NGN 50,000
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 50 per Transfer</h5>
          </div>
        </div>
        <div className="md:w-10/12 mx-auto w-full mb-16">
          <h3 className="font-semibold text-3xl mb-8">Escrow</h3>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Transaction below NGN 50,000
              </p>
            </div>
            <h5 className=" text-lg font-semibold">1.5% Capped at NGN 750</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Transaction between NGN 50,000 to 500,000
              </p>
            </div>
            <h5 className=" text-lg font-semibold">1.0% Capped at NGN 5,000</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Transfers above NGN 50,000
              </p>
            </div>
            <h5 className=" text-lg font-semibold">
              Transfers above NGN 50,000
            </h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                PayMe Escrow
              </p>
            </div>
            <h5 className=" text-lg font-semibold">Fixed NGN 250</h5>
          </div>
        </div>
        <div className="md:w-10/12 mx-auto w-full mb-16">
          <h3 className="font-semibold text-3xl mb-8">E-wallet</h3>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Create Virtual Wallet
              </p>
            </div>
            <h5 className=" text-lg font-semibold">Free</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                For every Pay-Ins Made
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 0 per Purchase</h5>
          </div>
        </div>
        <div className="md:w-10/12 mx-auto w-full mb-16">
          <h3 className="font-semibold text-3xl mb-8">Bill Payment</h3>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Airtime
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 0 per Purchase</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Internet (Data)
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 0 per Purchase</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Cable TV
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 100 per Purchase</h5>
          </div>
          <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[27px] rounded-full bg-[#FFCFC3] flex justify-center items-center text-primary">
                <IoMdPricetag />
              </div>
              <p className="flex-1 text-lg text-[#707070] font-medium">
                Electricity
              </p>
            </div>
            <h5 className=" text-lg font-semibold">NGN 100 per Purchase</h5>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-5 py-20 bg-[#FFF9ED] flex justify-between items-center">
        <div className="md:w-4/12 w-full">
          <h2 className="text-4xl font-semibold mb-4">Escrow Calculator</h2>
          <p>
            Do the maths, and see how much it costs to use Xmarr reliable escrow
            service. Enter an amount into the calculator to easily estimate the
            fees associated with your transaction.
          </p>
        </div>
        <div className="md:w-6/12 w-full bg-[#012648] rounded-[10px] text-white p-[32px]">
          <h4 className="text-sm font-semibold mb-4">IF YOUR CUSTOMER PAYS</h4>
          <div className="border-[1.5px] border-[#FFB29F] rounded-[10px] w-full h-[95px] flex gap-2  justify-center items-center px-[24px] text-4xl font-semibold mb-6">
            <p>NGN</p>
            <input
              type="number"
              className="border-none w-full  p-0 m-0 outline-none bg-transparent flex-1"
            />
          </div>
          <div className="flex justify-between items-center gap-4 mb-8">
            <div>
              <h5 className="text-sm font-medium mb-2">WE’LL SETTLE YOU</h5>
              <p className="text-3xl font-semibold">NGN 0.00</p>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2">XMARR FEES</h5>
              <p className="text-3xl font-semibold">NGN 0.00</p>
            </div>
          </div>
          <div className="my-4">
            <div className="flex w-full justify-between items-center gap-4 mb-4">
              <p className="font-medium text-[#E1E1E1] text-base">
                Free, Automatic settlement within 24 hours
              </p>
              <div className="bg-[#FFCFC3] w-[18px] h-[18px] rounded-full flex items-center justify-center text-primary">
                <IoMdCheckmark />
              </div>
            </div>
            <div className="flex w-full justify-between items-center gap-4 mb-4">
              <p className="font-medium text-[#E1E1E1] text-base">
                No hidden fees or charges
              </p>
              <div className="bg-[#FFCFC3] w-[18px] h-[18px] rounded-full flex items-center justify-center text-primary">
                <IoMdCheckmark />
              </div>
            </div>
            <div className="flex w-full justify-between items-center gap-4 mb-4">
              <p className="font-medium text-[#E1E1E1] text-base">
                Capped fees based on transaction tiers
              </p>
              <div className="bg-[#FFCFC3] w-[18px] h-[18px] rounded-full flex items-center justify-center text-primary">
                <IoMdCheckmark />
              </div>
            </div>
            <div className="flex w-full justify-between items-center gap-4 mb-4">
              <p className="font-medium text-[#E1E1E1] text-base">
                Zero integration fee
              </p>
              <div className="bg-[#FFCFC3] w-[18px] h-[18px] rounded-full flex items-center justify-center text-primary">
                <IoMdCheckmark />
              </div>
            </div>
            <div className="flex w-full justify-between items-center gap-4 mb-4">
              <p className="font-medium text-[#E1E1E1] text-base">
                Zero maintenance fee
              </p>
              <div className="bg-[#FFCFC3] w-[18px] h-[18px] rounded-full flex items-center justify-center text-primary">
                <IoMdCheckmark />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default Page;
