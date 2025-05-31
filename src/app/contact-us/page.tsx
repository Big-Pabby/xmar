import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const page = () => {
  return (
    <>
      <NavBar />
      <div className=" bg-[#FFEACD] pt-[100px] md:px-36 px-5 flex items-center justify-center gap-6 pb-16  flex-col">
        <div className="md:w-5/12 w-full mx-auto text-center mt-12">
          <h1 className="md:text-5xl font-black text-[#410D00] text-3xl mb-8">
            Feel Free <span className="text-primary">to Send us</span> a Message
          </h1>
        </div>
      </div>
      <div className="md:px-36 px-5  py-16">
        <form className="bg-[#F4F4F4] rounded-[30px] p-[50px] flex items-center justify-between gap-16 flex-col md:flex-row">
          <div className="md:w-7/12 w-full mx-auto">
            <h2 className="font-bold md:text-4xl text-2xl mb-4">
              Leave Us Your Info.
            </h2>
            <div>
              <input
                type="text"
                className="border-[1px] border-[#D6D6D6] py-[12px] px-[20px] rounded-[10px] mb-4 w-full outline-primary bg-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="email"
                className="border-[1px] border-[#D6D6D6] py-[12px] px-[20px] rounded-[10px] w-full mb-4 outline-primary bg-white"
                placeholder="Email Address"
              />
            </div>

            <textarea className="border-[1px] border-[#D6D6D6] py-[12px] px-[20px] rounded-[10px] h-[145px] w-full outline-primary"></textarea>
            <div className="flex items-center gap-4 mt-6">
              <input type="checkbox" className="accent-primary" />
              <p className="text-[#808080]">
                You agree to our friendly{" "}
                <span className="text-primary font-semibold">
                  privacy policy.
                </span>
              </p>
            </div>
            <button className="btn btn-primary text-white mt-8">
              Send Message <FaArrowRightLong className="text-2xl" />
            </button>
          </div>
          <div className="md:w-5/12 w-full mx-auto p-[50px]  bg-white rounded-[20px]">
            <div className="flex gap-4 items-start border-b-[1px] border-[#D6D6D6] pb-[32px]">
              <div className="w-[45px] h-[45px] rounded-full border-[1px] border-primary flex items-center justify-center text-primary">
                <MdOutlineEmail className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium mb-2">Send Us an Email</h4>
                <p className="text-[#808080] mb-2">
                  We love to hear from you! feel free to reach out to us via
                  mail.
                </p>
                <button className="btn btn-primary text-white">
                  support@xmarr.com
                </button>
              </div>
            </div>
            <div className="flex gap-4 items-start pt-[32px]">
              <div className="w-[45px] h-[45px] rounded-full border-[1px] border-primary flex items-center justify-center text-primary">
                <IoMdCall className="text-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium mb-2">Give Us a Call</h4>
                <p className="text-[#808080] mb-2">
                  We are here to help! Do not hesitate to reach out to us by
                  phone.
                </p>
                <button className="btn btn-primary text-white">
                  0814 550 5152
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-16">
          <Image
            src="/images/landing/map.svg"
            alt="Wallet icon"
            width={1120}
            height={496}
            className="w-full object-cover"
          />
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default page;
