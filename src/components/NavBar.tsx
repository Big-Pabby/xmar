import React from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const NavBar = () => {
  return (
    <header className="fixed bg-[#FFEAE4CE] w-full z-[120] top-0 left-0  py-4 md:px-20 px-5 flex justify-between items-center">
      <Image
        src="/images/Logo.svg"
        alt="Hairsby logo"
        width={200}
        height={32}
      />
      <div className="flex items-center gap-8 text-[#3D3D3D] font-medium text-[15px]">
        <p className="flex items-center gap-2">
          Why Xmarr <IoChevronDown />
        </p>
        <p className="flex items-center gap-2">
          Products <IoChevronDown />
        </p>
        <p className="flex items-center gap-2">
          Learn <IoChevronDown />
        </p>
        <p className="flex items-center gap-2">
          Contact Us <IoChevronDown />
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="btn btn-primary py-[12px] px-[18px] text-white">
          Get Started - It’s free <FaArrowRight />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
