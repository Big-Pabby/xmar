import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const Page = () => {
  // Feature badges data
  const featureBadges = [
    { text: "100% digital transfers", icon: "/vector-6.svg" },
    { text: "The best exchange rates", icon: "/vector-6.svg" },
    { text: "Speedy bank transfers", icon: "/vector-6.svg" },
    { text: "Fair and transparent transfer fees", icon: "/vector-6.svg" },
    { text: "Free p2p transfers", icon: "/vector-6.svg" },
    { text: "Multiple payment schemes", icon: "/vector-6.svg" },
    {
      text: "No virtual accounts required for transfers",
      icon: "/vector-6.svg",
    },
    { text: "Enjoy multiple daily transfers", icon: "/vector-6.svg" },
    { text: "Instant transaction notifications", icon: "/vector-6.svg" },
    { text: "Anti-fraud protection", icon: "/vector-6.svg" },
  ];

 

  return (
    <>
      <NavBar />
      <div className=" min-h-[75vh] bg-[#FFEACD] pt-[100px] md:px-36 px-5 flex items-center justify-center pb-16  flex-col">
        <div className="flex items-center">
          <Image
            src="/Group 1000011601.svg"
            alt="Wallet icon"
            width={119}
            height={130}
            className="md:w-[215px] w-[100px]"
          />
          <h1 className="-ml-4 font-black text-[#410D00] md:text-8xl text-3xl">
            Transfer
          </h1>
        </div>
        <button className="btn bg-gradient-to-br from-[#D73F18] via-[#FF823F] to-[#FD9909] border-none px-12 text-white rounded-full mb-8">
          Make your first transfer
        </button>
      </div>
      <div className="md:px-32 px-5 md:w-9/12 py-24 mx-auto w-full flex flex-col gap-2 items-center text-center">
        <div className="relative">
          <Image
            src="/Vector-6.svg"
            alt="Wallet icon"
            width={15}
            height={15}
            className="md:w-[15px] w-[15px] absolute -top-3 -left-5"
          />
          <Image
            src="/Vector-6.svg"
            alt="Wallet icon"
            width={15}
            height={15}
            className="md:w-[15px] w-[15px] absolute top-[50%] -left-28"
          />
          <Image
            src="/Vector-6.svg"
            alt="Wallet icon"
            width={15}
            height={15}
            className="md:w-[15px] w-[15px] absolute -bottom-3 -left-5"
          />
          <Image
            src="/Vector-6.svg"
            alt="Wallet icon"
            width={15}
            height={15}
            className="md:w-[15px] w-[15px] absolute -top-3 -right-5"
          />
          <Image
            src="/Vector-6.svg"
            alt="Wallet icon"
            width={15}
            height={15}
            className="md:w-[15px] w-[15px] absolute top-[50%] -right-28"
          />
          <Image
            src="/Vector-6.svg"
            alt="Wallet icon"
            width={15}
            height={15}
            className="md:w-[15px] w-[15px] absolute -bottom-3 -right-5"
          />
          <h2 className="font-semibold md:text-6xl text-3xl">
            Local and International{" "}
          </h2>
          <div className="flex gap-4 items-center text-[#D94823]">
            <ArrowRight size={56} />
            <h2 className="font-semibold md:text-6xl text-3xl">
              Money Transfer
            </h2>
            <Image
              src="/Frame 2087327277.svg"
              alt="Wallet icon"
              width={127}
              height={66}
              className="md:w-[100px] w-[60px]"
            />
          </div>
        </div>

        <Image
          src="/Group 1000011638.png"
          alt="Wallet icon"
          width={630}
          height={330}
          className="md:w-[600px] w-full mt-4"
        />
      </div>
      <div className="md:px-32 px-5  bg-[#FFF9ED] py-24">
        <div className="md:w-10/12 mx-auto w-full">
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-semibold text-4xl">
              Send Money Home and <br /> Abroad{" "}
              <span className="text-primary">the Easy Way</span>
            </h4>
            <Image
              src="/Group.png"
              alt="Wallet icon"
              width={55}
              height={55}
              className="md:w-[55px] w-[55px]"
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-5 grid-cols-1 gap-3">
            <Image
              src="/Frame 2087327290.svg"
              alt="Wallet icon"
              width={330}
              height={460}
              className="w-full"
            />
            <Image
              src="/Frame 2087327291.svg"
              alt="Wallet icon"
              width={330}
              height={460}
              className="w-full"
            />
            <Image
              src="/Frame 2087327292.svg"
              alt="Wallet icon"
              width={330}
              height={460}
              className="w-full"
            />
          </div>
          <div className="mt-28 text-center">
            <h4 className="md:text-5xl font-semibold mb-8">
              Why Should You Make <br />
              Money <span className="text-primary">Transfers with Xmarr?</span>
            </h4>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {featureBadges.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#D1CFCF] rounded-full flex gap-2 items-center p-4 text-[#666666] text-lg"
                >
                  <Image
                    src={item.icon}
                    alt="Wallet icon"
                    width={15}
                    height={15}
                    className="md:w-[15px] w-[15px]"
                  />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-32 px-5   py-24">
        <div className="md:w-11/12 bg-[#FFE0ED] rounded-[20px] p-12 flex md:flex-row flex-col items-center gap-10 mx-auto w-full">
          <div className="md:w-6/12 ">
            <h3 className="text-[#3E1100] text-5xl font-semibold mb-4">
              Making a difference together
            </h3>
            <p className="">
              At Xmarr, we believe in giving back and supporting meaningful
              causes. Through our dedicated social impact programs and corporate
              social responsibility initiatives, we strive to make a difference
              in the communities we serve. By choosing Xmarr, you’re not just
              simplifying your global transactions but contributing to a better
              world
            </p>
          </div>
          <div className="md:w-6/12">
            <Image
              src="/Frame 2087327286.svg"
              alt="Wallet icon"
              width={440}
              height={550}
              className="md:w-full"
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
