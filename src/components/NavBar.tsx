import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <header className="fixed bg-[#FFEAE4] w-full z-[120] top-0 left-0  py-4 md:px-20 px-5 flex justify-between items-center">
      <Link href={"/"}>
        {" "}
        <Image
          src="/images/Logo.svg"
          alt="Hairsby logo"
          width={200}
          height={32}
        />
      </Link>

      <div className="md:flex hidden items-center gap-8 text-[#3D3D3D] font-medium text-[15px]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger> Why Xmarr </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="bg-white w-[295px] p-4 rounded-lg flex flex-col gap-3">
                  <Link href={"/why-xmarr"} className="flex items-center gap-4">
                    <div className="w-[39px] h-[39px] rounded-full bg-[#D73F18] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8-4v4H7V8zm8 0v4h-2V8zm-8.1 5.634l.5.865C9.922 15.4 10.89 16 12 16s2.08-.601 2.6-1.5l.5-.866l1.731 1.001l-.5.866A5 5 0 0 1 12 18a5 5 0 0 1-4.33-2.5l-.501-.865z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-medium text-[#D73F18]">
                        Why Choose Xmarr
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Over 300+ Business trust Xmarr. Here is why
                      </p>
                    </div>
                  </Link>
                  <Link href={"/pricing"} className="flex items-center gap-4">
                    <div className="w-[39px] h-[39px] rounded-full bg-[#D73F18] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="#fff" strokeWidth="2">
                          <path
                            strokeLinejoin="round"
                            d="M18 21V3l-3 2l-3-2l-3 2l-3-2v18l3-1.5l3 1.5l3-1.5z"
                          />
                          <path
                            strokeLinecap="round"
                            d="M10 9h4m-4 6h4m-4-3h4"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-medium text-[#14181F]">
                        Pricing
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Affordable pricing for developers, SMEs, and enterprices
                      </p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="w-[39px] h-[39px] rounded-full bg-[#D73F18] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                          <path d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-medium text-[#14181F]">
                        See a demo
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Experience how xmarr empowers your business without a
                        doubt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-[39px] h-[39px] rounded-full bg-[#D73F18] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 56 56"
                      >
                        <path
                          fill="#fff"
                          d="M19.399 19.598c3.82 0 7.007-3.188 7.007-6.985c0-3.82-3.187-7.007-7.007-7.007s-7.008 3.187-7.008 7.007c0 3.774 3.164 6.985 7.007 6.985m17.18 0c3.843 0 7.007-3.188 7.007-6.985c0-3.82-3.164-7.007-7.008-7.007c-3.82 0-6.984 3.187-6.984 7.007c0 3.797 3.164 6.985 6.984 6.985M28 35.02c3.82 0 7.008-3.188 7.008-7.008S31.82 21.004 28 21.004s-7.008 3.187-7.008 7.008c0 3.82 3.188 7.008 7.008 7.008m-17.203 0c3.844 0 7.008-3.188 7.008-7.008s-3.164-7.008-7.008-7.008c-3.82 0-6.984 3.187-6.984 7.008c0 3.797 3.14 7.008 6.984 7.008m34.383 0c3.82 0 7.007-3.188 7.007-7.008S49 21.004 45.18 21.004s-7.008 3.187-7.008 7.008c0 3.82 3.188 7.008 7.008 7.008M19.399 50.394c3.82 0 7.007-3.163 7.007-7.007c0-3.797-3.187-6.961-7.007-6.961s-7.008 3.164-7.008 6.96c0 3.798 3.164 7.008 7.007 7.008m17.18 0c3.843 0 7.007-3.163 7.007-7.007c0-3.797-3.164-6.961-7.008-6.961c-3.82 0-6.984 3.164-6.984 6.96c0 3.844 3.164 7.008 6.984 7.008"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-medium text-[#14181F]">
                        Use Cases
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Learn about Xmarr supports your industry
                      </p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger> Products </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="bg-white w-[600px] p-4 rounded-lg grid grid-cols-2 gap-6">
                  <Link href={"/pay-me"} className="flex items-center gap-4">
                    <Image
                      src="/images/landing/product-icon-1.svg"
                      alt="product1"
                      width={40}
                      height={40}
                    />
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Payme
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Direct payment link for e-commerce
                      </p>
                    </div>
                  </Link>
                  <Link href={"/wallet"} className="flex items-center gap-4">
                    <Image
                      src="/images/landing/product-icon-2.svg"
                      alt="product1"
                      width={40}
                      height={40}
                    />
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Wallet
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Secure and Save money with Xmarr
                      </p>
                    </div>
                  </Link>
                  <Link href={"/transfer"} className="flex items-center gap-4">
                    <Image
                      src="/images/landing/product-icon-3.svg"
                      alt="product1"
                      width={40}
                      height={40}
                    />
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Transfer
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Send Money across countries
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={"/virtual-card"}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src="/images/landing/product-icon-4.svg"
                      alt="product1"
                      width={40}
                      height={40}
                    />
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Virtual Card
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Pay for your online buys cross border
                      </p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/landing/product-icon-5.svg"
                      alt="product1"
                      width={40}
                      height={40}
                    />
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Bill payments
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Direct payment link for e-commerce
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/landing/product-icon-6.svg"
                      alt="product1"
                      width={40}
                      height={40}
                    />
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Crowd Funding
                      </h3>
                      <p className="text-[11px] font-medium text-[#707A8F]">
                        Direct payment link for e-commerce
                      </p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger> Learn </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="bg-white w-[160px] p-4 rounded-lg grid grid-cols-1 gap-3">
                  <Link href={"/about-us"} className="flex items-center gap-4">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#D73F18] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="#fff" strokeWidth="2">
                          <path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" />
                          <path strokeLinecap="round" d="M8 10h8m-8 4h5" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        About Us
                      </h3>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#D73F18] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                          <path d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Tutorials
                      </h3>
                    </div>
                  </div>
                  <Link href={"/blogs"} className="flex items-center gap-4">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#D73F18] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#252C38]">
                        Blogs
                      </h3>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href={"/contact-us"} className="flex items-center gap-2">
          Contact Us
        </Link>
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
