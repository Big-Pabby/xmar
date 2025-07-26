import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#121D30] w-full p-20 text-white">
      <div className="flex justify-between gap-6 flex-wrap mb-20">
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-xl mb-6">Products</h4>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Payme
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Transfer
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Wallet
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Virtual Cards
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Bill Payment
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-xl mb-6">Quick Actions</h4>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Why Choose Xmarr
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Pricing
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            See Demo
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Use Cases
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Tutorials
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-xl mb-6">Company</h4>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            About Us
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Stories
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Blog
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            FAQ
          </Link>
          <Link href={"/payme"} className="text-[#E1E1E1] text-[15px] ">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-xl mb-6">Legals</h4>
          <Link
            href={"/legals?legal=Anti-money laundering"}
            className="text-[#E1E1E1] text-[15px] "
          >
            AML Policy
          </Link>
          <Link
            href={"/legals?legal=Terms and Condition"}
            className="text-[#E1E1E1] text-[15px] "
          >
            Terms of Service
          </Link>
          <Link
            href={"/legals?legal=Privacy Policy"}
            className="text-[#E1E1E1] text-[15px] "
          >
            Privacy Policy
          </Link>
          <Link
            href={"/legals?legal=Consent Agreement"}
            className="text-[#E1E1E1] text-[15px] "
          >
            Consent Agreement
          </Link>
          <Link
            href={"/legals?legal=Dispute Resolution"}
            className="text-[#E1E1E1] text-[15px] "
          >
            Dispute Resolution
          </Link>
        </div>
      </div>
      <hr className="text-[#AAAAAA]" />
      <div className="mt-16 flex justify-between gap-5 flex-wrap items-center">
        <div className="flex items-center flex-wrap gap-4">
          <Image
            src="/images/landing/logo-white.svg"
            alt="Xmarr logo"
            width={166}
            height={32}
          />
          <p className="text-sm m-0">
            © Xmarr Technologies Limited, All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="w-[39px] h-[39px] rounded-full bg-white hover:bg-primary hover:text-white text-black  flex items-center justify-center cursor-pointer">
            <FaInstagram className=" text-xl" />
          </div>
          <div className="w-[39px] h-[39px] rounded-full bg-white hover:bg-primary hover:text-white text-black flex items-center justify-center cursor-pointer">
            <BsTwitterX className=" text-xl" />
          </div>
          <div className="w-[39px] h-[39px] rounded-full bg-white hover:bg-primary hover:text-white text-black flex items-center justify-center cursor-pointer">
            <FaLinkedinIn className=" text-xl" />
          </div>
          <div className="w-[39px] h-[39px] rounded-full bg-white hover:bg-primary hover:text-white text-black flex items-center justify-center cursor-pointer">
            <FaFacebookF className=" text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
