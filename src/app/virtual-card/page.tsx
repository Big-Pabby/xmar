import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <NavBar />
      <div className=" bg-[#FFEACD] pt-[100px] md:px-36 px-5 flex items-center justify-center gap-6 pb-16  flex-col">
        <div className="flex items-center gap-3 my-8">
          <Image
            src="/images/landing/virtual-icon.svg"
            alt="Wallet icon"
            width={119}
            height={130}
            className="md:w-[119px] w-[50px]"
          />
          <h1 className="font-black text-[#410D00] md:text-8xl text-3xl">
            Virtual Card
          </h1>
        </div>
        <button className="btn bg-gradient-to-br from-[#D73F18] via-[#FF823F] to-[#FD9909] text-white rounded-full mb-8">
          Make your first transfer
        </button>
      </div>
      <div className="md:px-36 px-5 py-20">
        <div className=" w-full mx-auto flex flex-col items-center gap-4 justify-center text-center pt-12">
          <h3 className="font-bold md:text-6xl text-3xl">
            No limits, no borders.{" "}
          </h3>
          <div className="flex items-center gap-4 text-primary ">
            <FaArrowRight className="text-6xl" />
            <h3 className="font-bold  md:text-6xl text-3xl">Go global.</h3>
            <Image
              src="/images/landing/virtual-toogle.svg"
              alt="Virtual card"
              width={127}
              height={66}
              className="md:w-[127px] w-[50px]"
            />
          </div>
        </div>
        <div className=" w-full mx-auto mt-12">
          <div className="w-full rounded-[20px] px-12 pt-12 flex justify-between items-center bg-[url('/images/landing/virtual-bg.svg')] bg-cover bg-center bg-no-repeat">
            <div className="md:w-6/12 w-full">
              <h4 className="text-primary font-medium text-base">
                FOREIGN VIRTUAL CARDS
              </h4>
              <h2 className="font-black text-[#3E1100] md:text-5xl text-2xl my-6">
                Get a USD virtual card
              </h2>
              <p className="font-medium mb-8">
                Why keep sending bank details every time a customer wants to
                pay? With Xmarr PayMe, you get one secure, professional link{" "}
              </p>
              <button className="btn bg-gradient-to-br from-[#D73F18] via-[#FF823F] to-[#FD9909] text-white rounded-full mb-8">
                Get your virtual card now!
              </button>
            </div>
            <div className="md:w-5/12 md:flex flex-col justify-end  hidden h-full mt-16">
              <Image
                src="/images/landing/app-home.png"
                alt="brand1"
                width={350}
                height={650}
                className="h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="md:w-4/12 w-full bg-[#FFD4B9] border-[2px] border-[#FFDAC3] rounded-[20px] px-4 pt-8">
              <h3 className="font-black md:text-4xl text-2xl mb-24">
                Shop and Spend Globally
              </h3>
              <Image
                src="/images/landing/Artboard.svg"
                alt="brand1"
                width={315}
                height={257}
                className="h-auto object-cover"
              />
            </div>
            <div className="md:w-8/12 w-full bg-[#FFE9DB] border-[2px] border-[#FFDAC3] rounded-[20px] px-4 pt-8 relative">
              <div className="md:w-8/12 w-full flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-medium text-primary text-base mb-12">
                    FOREIGN VIRTUAL CARDS
                  </h3>
                  <h3 className="font-black md:text-4xl text-2xl mb-8">
                    Convert money at the best rate
                  </h3>
                  <p>
                    Why keep sending bank details every time a customer wants to
                    pay? With Xmarr PayMe, you get one secure, professional link{" "}
                  </p>
                </div>
                <div>
                  <button className=" btn bg-gradient-to-br from-[#D73F18] via-[#FF823F] to-[#FD9909] text-white inline-block rounded-full mb-8">
                    Get your virtual card now!
                  </button>
                </div>
              </div>
              <Image
                src="/images/landing/female-virtual.svg"
                alt="brand1"
                width={553}
                height={382}
                className="h-auto absolute bottom-0 -right-8 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF9ED] md:px-36 px-5 py-20">
        <div className="md:w-6/12 w-full mx-auto text-center">
          <h2 className="font-black md:text-6xl text-3xl">
            Put Your <span className="text-primary">Money to Work</span>{" "}
          </h2>
          <p className="text-[#485B60] mt-6">
            Experience effortless control over your finances—deposit funds,
            transfer instantly, and settle bills without breaking a sweat. XMARR
            Wallet makes money management smooth, smart, and secure.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="rounded-[10px] bg-white shadow-2xl overflow-hidden">
            <Image
              src="/images/landing/zero.svg"
              alt="Wallet icon"
              width={317}
              height={98}
              className="h-auto object-cover"
            />
            <div className="px-6 py-6">
              <h4 className="text-[#7B7878] font-normal md:text-2xl text-xl mb-4">
                01-
              </h4>
              <h3 className="font-semibold text-[#292F39] md:text-2xl text-xl">
                Zero account & card maintenance fees
              </h3>
            </div>
          </div>
          <div className="rounded-[10px] bg-white shadow-2xl overflow-hidden">
            <Image
              src="/images/landing/rates.svg"
              alt="Wallet icon"
              width={317}
              height={98}
              className="h-auto object-cover"
            />
            <div className="px-6 py-6">
              <h4 className="text-[#7B7878] font-normal md:text-2xl text-xl mb-4">
                02-
              </h4>
              <h3 className="font-semibold text-[#292F39] md:text-2xl text-xl">
                Competitive <br /> exchange rates
              </h3>
            </div>
          </div>
          <div className="rounded-[10px] bg-white shadow-2xl overflow-hidden">
            <Image
              src="/images/landing/subd.svg"
              alt="Wallet icon"
              width={317}
              height={98}
              className="h-auto object-cover"
            />
            <div className="px-6 py-6">
              <h4 className="text-[#7B7878] font-normal md:text-2xl text-xl mb-4">
                03-
              </h4>
              <h3 className="font-semibold text-[#292F39] md:text-2xl text-xl">
                Instant transaction notifications
              </h3>
            </div>
          </div>
          <div className="rounded-[10px] bg-white shadow-2xl overflow-hidden">
            <Image
              src="/images/landing/iban.svg"
              alt="Wallet icon"
              width={317}
              height={98}
              className="h-auto object-cover"
            />
            <div className="px-6 py-6">
              <h4 className="text-[#7B7878] font-normal md:text-2xl text-xl mb-4">
                04-
              </h4>
              <h3 className="font-semibold text-[#292F39] md:text-2xl text-xl">
                An IBAN for your business needs
              </h3>
            </div>
          </div>
          <div className="rounded-[10px] bg-white shadow-2xl overflow-hidden">
            <Image
              src="/images/landing/p2p.svg"
              alt="Wallet icon"
              width={317}
              height={98}
              className="h-auto object-cover"
            />
            <div className="px-6 py-6">
              <h4 className="text-[#7B7878] font-normal md:text-2xl text-xl mb-4">
                05-
              </h4>
              <h3 className="font-semibold text-[#292F39] md:text-2xl text-xl">
                P2P for free and faster payments
              </h3>
            </div>
          </div>
          <div className="rounded-[10px] bg-white shadow-2xl overflow-hidden">
            <Image
              src="/images/landing/expense.svg"
              alt="Wallet icon"
              width={317}
              height={98}
              className="h-auto object-cover"
            />
            <div className="px-6 py-6">
              <h4 className="text-[#7B7878] font-normal md:text-2xl text-xl mb-4">
                06-
              </h4>
              <h3 className="font-semibold text-[#292F39] md:text-2xl text-xl">
                Expense <br /> management
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-[#FFE0ED] p-[32px] flex items-center justify-between rounded-[20px] gap-8 md:flex-row flex-col-reverse">
          <div className="md:w-6/12 w-full">
            <h3 className="text-[#3E1100] font-black md:text-5xl text-2xl mb-4">
              Making a difference together
            </h3>
            <p>
              At Xmarr, we believe in giving back and supporting meaningful
              causes. Through our dedicated social impact programs and corporate
              social responsibility initiatives, we strive to make a difference
              in the communities we serve. By choosing Xmarr, you’re not just
              simplifying your global transactions but contributing to a better
              world
            </p>
          </div>
          <div className="md:w-6/12 w-full">
            <Image
              src="/images/landing/together.svg"
              alt="brand1"
              width={439}
              height={304}
              className="h-auto w-full object-cover"
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
