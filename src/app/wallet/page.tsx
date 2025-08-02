import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { TfiReceipt } from "react-icons/tfi";
import { BsShieldLock } from "react-icons/bs";

const Page = () => {
  return (
    <>
      <NavBar />
      <div className=" bg-[#FFEACD] pt-[100px] md:px-36 px-5 flex items-center justify-center gap-6  flex-col">
        <div className="flex items-center gap-3 my-8">
          <Image
            src="/images/landing/wallet_icon.svg"
            alt="Wallet icon"
            width={119}
            height={130}
            className="md:w-[119px] w-[50px]"
          />
          <h1 className="font-black text-[#410D00] md:text-8xl text-3xl">
            Wallet
          </h1>
        </div>
        <Image
          src="/images/landing/cards_wallet.svg"
          alt="Wallet icon"
          width={600}
          height={300}
          className="md:w-[300px] w-[300px]"
        ></Image>
      </div>
      <div className="md:px-36 px-5  bg-white py-20">
        <div className="md:w-6/12 mx-auto w-full flex flex-col items-center gap-4 text-center">
          <h3 className="font-extrabold md:text-5xl text-2xl">
            Built for Speed, <br /> Secured for Trust
          </h3>
          <p className="md:text-xl text-[#485B60]">
            Pandascrow wallet is precisely how you need it to be — portable,
            virtual, and secure. You can add your credit and debit cards for
            swifter transactions on the go. Access real-time transaction history
            so nothing misses you. Be more, do less.
          </p>
          <button className="btn bg-gradient-to-br from-[#D73F18] via-[#FF823F] to-[#FD9909] text-white rounded-full mt-8">
            Get Started - It’s Free
          </button>
        </div>
      </div>
      <div className="md:px-36 px-5  bg-[#FFEACD] py-28">
        <div className="md:w-6/12 mb-8 mx-auto w-full flex flex-col items-center gap-4 text-center">
          <h3 className="font-extrabold md:text-5xl text-2xl">
            Put Your <span className="text-primary">Money to Work</span>
          </h3>
          <p className="text-[#485B60]">
            Experience effortless control over your finances—deposit funds,
            transfer instantly, and settle bills without breaking a sweat. XMARR
            Wallet makes money management smooth, smart, and secure.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-white rounded-[10px] shadow-2xl px-6 py-10">
            <div className="flex items-center gap-4 text-primary md:text-2xl text-xl font-semibold">
              <IoPaperPlaneOutline className="text-4xl" />
              <p>Deposit</p>
            </div>
            <p className="my-6 font-medium text-[#323232] md:text-xl text-lg">
              Settle bills in one tap.
            </p>
            <p className="text-[#323232]">
              From electricity and data to cable and more, pay your bills
              directly from your wallet. It is quick, reliable, and keeps your
              everyday life running smoothly.
            </p>
          </div>
          <div className="bg-white rounded-[10px] shadow-2xl px-6 py-10">
            <div className="flex items-center gap-4 text-primary md:text-2xl text-xl font-semibold">
              <IoPaperPlaneOutline className="text-4xl" />
              <p>Transfers</p>
            </div>
            <p className="my-6 font-medium text-[#323232] md:text-xl text-lg">
              Send money, your way.
            </p>
            <p className="text-[#323232]">
              Transfer funds to other users or any bank account in real time.
              With XMARR, sending money is fast, secure, and always in your
              control—no delays, no hassle.
            </p>
          </div>
          <div className="bg-white rounded-[10px] shadow-2xl px-6 py-10">
            <div className="flex items-center gap-4 text-primary md:text-2xl text-xl font-semibold">
              <TfiReceipt className="text-4xl" />
              <p>Bills Payment</p>
            </div>
            <p className="my-6 font-medium text-[#323232] md:text-xl text-lg">
              Fund your wallet instantly.
            </p>
            <p className="text-[#323232]">
              Easily fund your XMARR Wallet from your bank or linked payment
              method. Whether you are preparing for a transaction or just
              keeping your wallet ready.
            </p>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-16">
          <div className="bg-[#FFE3BB] rounded-[10px] border-[1.5px] border-[#D94823] px-12 pt-6 text-center flex flex-col items-center">
            <h3 className="md:text-4xl text-3xl font-extrabold">
              <span className="text-primary">Xmarr Card.</span> <br /> Truly
              borderless. <br /> Zero limitations.
            </h3>
            <p className="text-[#5C5C5C] md:text-lg my-6">
              Seamlessly send and receive money worldwide in seconds. Enjoy
              flexible transfer options designed for your convenience.
            </p>
            <Image
              src="/images/landing/cards_wallet.svg"
              alt="Wallet icon"
              width={400}
              height={300}
              className="mt-8 "
            ></Image>
          </div>
          <div className="bg-[#F7F7F7] rounded-[10px] border-[1.5px] border-[#D94823] px-12 pt-6 text-center flex flex-col items-center">
            <div className="md:w-[125px] md:h-[125px] w-[100px] h-[100px] rounded-full bg-[#AFE1C0] flex items-center justify-center mb-6">
              <BsShieldLock className="md:text-6xl text-4xl text-[#24A747]" />
            </div>
            <h3 className="md:text-4xl text-3xl font-extrabold">
              <span className="text-primary">The Wallet</span> <br /> The
              Protection
            </h3>
            <p className="text-[#5C5C5C] md:text-lg my-6">
              Prioritizing security, we utilize advanced encryption and
              multi-factor authentication to protect users sensitive data and
              prevent unauthorized access. With features like passwords,
              fingerprint scanning, and facial recognition, users are confident
              that their funds and personal information are safe from cyber
              threats.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#B825C9] via-[#CA629C] to-[#C985A4] rounded-[10px] mt-12 pt-16 md:px-16 md:pb-0 pb-16 px-5 pr-5 flex w-full justify-between gap-4">
          <div className="md:w-5/12 w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="md:text-4xl text-3xl font-semibold mb-4 text-white">
                Generate a virtual credit or debit card.
              </h3>
              <p className=" text-[15px] text-white">
                Create secure virtual debit or credit cards in seconds — perfect
                for online payments, subscriptions, and seamless global
                transactions. Stay protected, stay in control.
              </p>
            </div>

            <p className="font-semibold mt-28 text-[15px] text-white uppercase">
              the World most trusted escrow service
            </p>
          </div>
          <div className="md:w-5/12 md:block hidden h-full ">
            <Image
              src="/images/landing/app-home.png"
              alt="brand1"
              width={350}
              height={650}
              className="h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default Page;
