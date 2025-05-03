import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const CTASection = () => {
  return (
    <div className="bg-[#FFF0DA] w-full pt-20 md:px-20 px-5">
      <div className="md:w-6/12 w-full mx-auto">
        <h2 className="text-3xl md:text-5xl text-center font-bold text-[#1B1B1B]">
          Built for Business.{" "}
          <span className="text-primary">Designed for You.</span>
        </h2>
        <p className="text-center text-[#1B1B1B] font-medium mt-4">
          Join 1k+ businesses securing their growth with the most trusted and
          reliable escrow service on the market.
        </p>
        <div className="flex w-full justify-center mt-8 gap-8">
          <button className="btn btn-primary py-[12px] px-[18px] text-white font-medium">
            Get Started - It’s free <FaArrowRight />
          </button>
          <button className="btn bg-[#FFFFFF] py-[12px] px-[18px] text-[#0D142C] font-medium">
            Schedule Demo <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/images/landing/cta-bg.svg"
          alt="brand1"
          width={414}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default CTASection;
