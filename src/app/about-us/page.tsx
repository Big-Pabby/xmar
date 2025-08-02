import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <NavBar />
      <div className=" min-h-[75vh] bg-[#FFEACD] pt-[100px] md:px-36 px-5 flex items-center justify-center gap-6 pb-16  flex-col">
        <div className="md:w-6/12 w-full mx-auto text-center mt-12">
          <h1 className="md:text-5xl font-black text-[#410D00] text-3xl mb-8">
            Inclusive{" "}
            <span className="text-primary">global escrow designed</span> just
            for you
          </h1>
          <p>
            Xmarr is transforming payments in Africa with seamless, secure
            escrow solutions. We help businesses — from startups to market
            leaders — thrive with trust, simplicity, and innovation at the core
            of every transaction.
          </p>
        </div>
      </div>
      <div className="md:px-36 px-5 py-16 ">
        <div className="flex items-center justify-between flex-col md:flex-row gap-8">
          <div className="md:w-6/12 w-full mx-auto">
            <Image
              src="/images/landing/hq.svg"
              alt="Wallet icon"
              width={486}
              height={285}
              className="w-full object-cover"
            />
          </div>
          <div className="md:w-6/12 w-full mx-auto">
            <h2 className="font-bold md:text-4xl text-2xl mb-5">
              A growth engine for modern businesses in Africa
            </h2>
            <p>
              Xmarr builds technology that powers trust in digital
              transactions—helping businesses, freelancers, and online platforms
              across Africa grow with confidence. <br /> <br />
              We provide secure, escrow-backed payment solutions that protect
              buyers, sellers, and service providers alike. Whether you are a
              startup launching your first product, a freelancer closing deals
              with international clients, or a large marketplace managing
              thousands of transactions—Xmarr ensures that every payment is
              safe, verified, and transparent.
            </p>
          </div>
        </div>
        <div className="mt-16 border-[1.5px] border-[#FFC1B1] bg-white rounded-[10px] grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 gap-8 p-16">
          <div className="text-center">
            <h3 className="font-bold text-[#D94823] md:text-4xl text-2xl mb-4">
              1k+ Members
            </h3>
            <p>
              Trusted by a growing community of customers and businesses since
              day one.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[#D94823] md:text-4xl text-2xl mb-4">
              $100K+
            </h3>
            <p>Every dollar safeguarded, every transaction a success.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[#D94823] md:text-4xl text-2xl mb-4">
              1 Country
            </h3>
            <p>
              Starting in Africa, shaping a future of secure commerce
              everywhere.
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-36 px-5 py-24 bg-white">
        <div className="md:w-8/12 mx-auto text-center">
          <h2 className="text-primary font-black md:text-5xl text-3xl">
            {" "}
            <span className="text-[#FF924C]">We are Xmarr,</span> and our
            vision is to make digital transactions{" "}
            <span className="text-[#FD9909]">safe for everyone</span>
          </h2>
          <p className="md:w-10/12 w-full mx-auto mt-8">
            We are building the trust layer for online commerce in
            Africa—protecting buyers, sellers, and service providers through
            secure, escrow-backed payments that ensure peace of mind in every
            transaction.
          </p>
        </div>
      </div>
      <div className="md:px-36 px-5 py-24">
        <div className="md:w-10/12 mx-auto ">
          <div className=" flex items-center justify-between flex-col md:flex-row gap-8">
            <div className="md:w-6/12 w-full">
              <h2 className="font-bold md:text-4xl text-2xl">
                Our <span className="text-primary">Values</span>
              </h2>
            </div>
            <div className="md:w-6/12 w-full">
              <p>
                At Xmarr, we are redefining digital payments with trust at the
                core. <br /> Our mission is to make every transaction secure and
                transparent—empowering Africa’s digital economy to thrive.
              </p>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-white border-[1px] border-[#FFC1B1] rounded-[10px] p-12">
              <h3 className="font-semibold text-lg mb-2">Customer-Centric</h3>
              <p>
                We design solutions around what you need, backed by real-world
                insights and customer feedback. Your success shapes our
                innovation.
              </p>
            </div>
            <div className="bg-white border-[1px] border-[#FFC1B1] rounded-[10px] p-12">
              <h3 className="font-semibold text-lg mb-2">
                Crystal-Clear Communication
              </h3>
              <p>
                No jargon. No noise. Just straight, simple, and honest
                information every step of the way.
              </p>
            </div>
            <div className="bg-white border-[1px] border-[#FFC1B1] rounded-[10px] p-12">
              <h3 className="font-semibold text-lg mb-2">
                Radical Transparency
              </h3>
              <p>
                Fees you can see, and promises we keep. With us, there is nothing
                to hide—just clarity you can trust
              </p>
            </div>
            <div className="bg-white border-[1px] border-[#FFC1B1] rounded-[10px] p-12">
              <h3 className="font-semibold text-lg mb-2">
                Unshakable Integrity
              </h3>
              <p>
                Trust is everything. We honor our commitments, not just when
                you are watching, but every single time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default Page;
