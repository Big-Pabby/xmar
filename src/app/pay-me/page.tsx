import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import CTASection from "@/components/CTASection";

const Page = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-[70vh] bg-[#FFEAE4CE] md:px-20 px-5 py-20 flex items-center justify-center gap-6  flex-col">
        <div className="flex items-center gap-4">
          <Image
            src="/images/landing/pay.svg"
            alt="brand1"
            width={175}
            height={160}
            className="md:w-[175px] w-[100px]"
          />
          <h2 className="font-bold text-[#410D00] md:text-9xl text-3xl">
            PayMe
          </h2>
        </div>
        <button className="btn bg-gradient-to-br from-[#D73F18] via-[#FF823F] to-[#FD9909] text-white rounded-full mt-8">
          Generate a PayMe Link
        </button>
      </div>
      <div className="md:px-20 px-5 py-20">
        <div className="md:w-8/12 w-full mx-auto">
          <h3 className="text-primary text-center font-bold md:text-6xl mb-8 text-3xl">
            XMARR PayMe <br />
            One Link. Every Customer.
          </h3>
          <p className="text-center md:text-2xl text-lg font-normal">
            Why keep sending bank details every time a customer wants to pay?
            With Xmarr PayMe, you get one secure, professional link that never
            changes. Share it anywhere—Instagram, WhatsApp, your online
            store—and start receiving payments instantly. Built for serious
            sellers who want to look sharp, earn faster, and focus on what
            matters: selling.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center mt-20 gap-4">
          <div className="md:w-5/12 w-full">
            <Image
              src="/images/landing/alert.svg"
              alt="brand1"
              width={405}
              height={205}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-6/12 w-full">
            <h3 className="font-semibold text-[#434343] md:text-4xl mb-4 text-2xl">
              Instant Notification on Payment.
            </h3>
            <p className="md:text-lg">
              With XMARR, you will know the moment a payment is made—no delays,
              no guesswork. Funds move into escrow within 60 seconds, and you
              receive instant notifications in under 5. Whether you are a
              seller, freelancer, or business owner, XMARR ensures you are never
              left in the dark. Get paid, get notified, and stay in
              control—every single time.
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-5 py-20 bg-[#FDFBF7]">
        <div className="md:w-8/12 w-full mx-auto flex flex-col items-center justify-center">
          <h3 className=" text-center font-semibold md:text-5xl text-3xl mb-4">
            How Xmarr <span className="text-primary">PayMe Works</span>
          </h3>
          <div className="font-semibold mb-4 flex gap-2 items-center">
            <p>CREATE</p>
            <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
            <p>SHARE</p>
            <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
            <p>GET PAID</p>
          </div>
          <p className="md:w-8/12 w-full mx-auto text-center text-[#485B60]">
            Generate a custom payment link, send it to your customers, and
            receive payments instantly—secure, seamless, and stress-free.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 ">
          <div className="flex flex-col items-center justify-center border-r-[1px] border-[#E6E6E6] p-8">
            <h3 className="font-bold text-[#C9C9C9] text-4xl mb-4">1</h3>
            <h2 className="font-medium text-3xl mb-6">Create PayMe Link</h2>
            <p className="mb-8 md:text-left text-center">
              Set up your personalized, secure payment link in seconds—no code,
              no hassle. Just you, your business, and a professional way to get
              paid.
            </p>
            <button className="flex gap-4 items-center text-primary">
              Get Started
              <FaArrowRight />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center border-r-[1px] border-[#E6E6E6] p-8">
            <h3 className="font-bold text-[#C9C9C9] text-4xl mb-4">2</h3>
            <h2 className="font-medium text-3xl mb-6">Share Link Anywhere</h2>
            <p className="mb-8 md:text-left text-center">
              Send your link via DM, bio, website, or even on your business
              card. However you hustle, XMARR moves with you.
            </p>
            <button className="flex gap-4 items-center text-primary">
              Get Started
              <FaArrowRight />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center p-8">
            <h3 className="font-bold text-[#C9C9C9] text-4xl mb-4">3</h3>
            <h2 className="font-medium text-3xl mb-6">Get Paid, Instantly</h2>
            <p className="mb-8 md:text-left text-center">
              Say goodbye to payment delays. With XMARR, your funds are
              protected, verified, and settled in real-time.
            </p>
            <button className="flex gap-4 items-center text-primary">
              Get Started
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default Page;
