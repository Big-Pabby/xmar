import Image from "next/image";
import NavBar from "@/components/NavBar";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#FFEAE4CE] md:px-20 px-5 py-16 flex items-center justify-between gap-6 md:flex-row flex-col">
        <div className="md:w-5/12 ">
          <h1 className="font-bold text-[#410D00] text-[50px] mb-4 leading-[68px]">
            The Gold Standard of Secure Transactions.
          </h1>
          <p className="text-base mb-12">
            XMARR is more than an escrow—it’s your ultimate financial shield.
            From everyday transactions to high-value deals, we eliminate risks,
            protect your payments, and guarantee trust at every step.
          </p>
          <div className="flex w-full gap-8">
            <button className="btn btn-primary py-[12px] px-[18px] text-white font-medium">
              Get Started - It’s free <FaArrowRight />
            </button>
            <button className="btn bg-[#FFFFFF] py-[12px] px-[18px] text-[#0D142C] font-medium">
              Schedule Demo <FaArrowRight />
            </button>
          </div>
          <div className="mt-12">
            <p className="text-sm font-bold mb-4">
              Trusted by Industry Leaders
            </p>
            <div className="flex gap-8">
              <Image
                src="/images/landing/prembly.svg"
                alt="brand1"
                width={130}
                height={150}
              />
              <Image
                src="/images/landing/dojah.svg"
                alt="brand2"
                width={77}
                height={77}
              />
              <Image
                src="/images/landing/kora.svg"
                alt="brand3"
                width={84}
                height={84}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:px-20 px-5 py-16">
        <div className="md:w-7/12 w-full mx-auto">
          <h2 className="text-[50px] leading-[55px] text-center font-medium">
            Picture a world where every <br />
            <span className="text-primary"> transaction is safe</span>{" "}
          </h2>
          <p className="text-center my-4">
            Billions are lost to online fraud every year. Not on our watch.
            XMARR ensures every transaction is secured, verified, and
            fraud-proof.
          </p>
        </div>
        <div className="md:w-8/12 w-full mx-auto grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 mt-20">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/landing/terms.svg"
              alt="brand1"
              width={105}
              height={105}
            />
            <p className="text-center mt-6">Buyer and Seller agree to terms</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/landing/piggy.svg"
              alt="brand1"
              width={105}
              height={105}
            />
            <p className="text-center mt-6">Buyer submits payment to Xmarr</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/landing/deliver.svg"
              alt="brand1"
              width={105}
              height={105}
            />
            <p className="text-center mt-6">
              Seller delivers goods or service to buyer
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/landing/approve.svg"
              alt="brand1"
              width={105}
              height={105}
            />
            <p className="text-center mt-6">Buyer approves goods or services</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/landing/release.svg"
              alt="brand1"
              width={105}
              height={105}
            />
            <p className="text-center mt-6">Xmarr releases payment to seller</p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="btn max-w-[240px] w-full btn-primary py-[12px] px-[18px] text-white font-medium rounded-[5px]">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
