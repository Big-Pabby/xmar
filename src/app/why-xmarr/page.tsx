'use client';

import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa6";
import CTASection from "@/components/CTASection";

const WhyXmarr = () => {
  const features = [
    {
      title: "Instant Payments",
      description:
        "Paystack is the fastest, simplest way to start accepting online payments in Nigeria. From signup to receiving real payments can take under 15 minutes. Seriously.",
      link: "Learn more",
    },
    {
      title: "Unmatched Security",
      description:
        "Your money deserves the best protection. We’ve implemented top-tier security measures so you can focus on growing your business while we safeguard your funds.",
      link: "Learn more",
    },
    {
      title: "Transparent pricing",
      description:
        " Xmarr only charges a tiny fee per successful transaction, which means we literally only make money when you do, and we work hard to ensure every transaction succeeds.",
    },
    {
      title: "Payment Options",
      description:
        "From local to global, xmarr offer a range of seamless payment methods tailored to your convenience. Pay your way—effortlessly.",
      link: "Learn more",
    },
    {
      title: "Fraud Prevention",
      description:
        "Xmarr combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.",
      link: "Learn more",
    },
    {
      title: "Social Commerce",
      description:
        "We’re on a mission to make social commerce safe. Our tools restore trust and protect against fraud in this growing market.",
      link: "Learn more",
    },
    {
      title: "Global Trust",
      description:
        "Whether you’re trading internationally or locally, Xmarr bridges the trust gap with world-class escrow solutions.",
      link: "Learn more",
    },
    {
      title: "Customer First",
      description:
        "Every solution we build starts with you. Backed by in-depth research, we create tools that solve real problems, not imagined ones.",
      link: "Learn more",
    },
    {
      title: "24/7  Support",
      description:
        "Our Customer Success team is available around the clock to support you, and they’re empowered to resolve issues as quickly as possible.",
      link: "Learn more",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-[70vh] bg-[#FFEAE4CE] md:px-20 px-5 py-20 flex items-center justify-center gap-6  flex-col">
        <div className="md:w-6/12 w-full mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            <span className="text-[#410D00]">Why do 300+</span> business love
            Xmarr?
          </h1>
          <p className="text-[#485B60] text-lg">
            XMARR is the escrow partner of choice for forward-thinking
            businesses and individuals across Africa. Here is why we are
            trusted.
          </p>
        </div>
      </div>
      <div className="md:px-20 px-5 py-16">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" p-8 flex mb-6 flex-col justify-center items-center text-center "
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className=" mb-4">{feature.description}</p>
              <button className="text-primary flex items-center gap-2 font-medium">
                Get started <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
        <style jsx>{`
          .features-grid > div {
            border-right: 1.5px solid #E6E6E6;
          }
          /* remove right border at the end of each 3-column row */
          @media (min-width: 768px) {
            .features-grid > div:nth-child(3n) {
              border-right: 0;
            }
          }
          /* remove borders on small screens (single column) */
          @media (max-width: 767px) {
            .features-grid > div {
              border-right: 0;
            }
          }
        `}</style>
      </div>
      <div className="md:px-20 px-5 py-16">
        <div className="bg-gradient-to-br from-[#B825C9] via-[#CA629C] to-[#C985A4] rounded-[10px] pt-16 px-16 flex md:flex-row flex-col w-full justify-between gap-4">
          <div className="md:w-8/12 w-full">
            <div className="md:w-8/12 w-full">
              <h3 className="text-4xl font-semibold mb-4 text-white">
                How Xmarr meets you at your use case
              </h3>
              <p className="font-medium underline text-white text-lg">
                Watch Tutorials
              </p>
            </div>
            <div className="w-full bg-white mt-8 rounded-[6px] p-[24px] grid md:grid-cols-2 grid-cols-1 gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/landing/case-1.svg"
                  alt="brand1"
                  width={45}
                  height={45}
                />
                <div>
                  <h4 className="text-base font-semibold mb-1">Payme</h4>
                  <p className="font-medium text-[14px] text-[#707A8F] capitalize">
                    Direct payment link for e-commerce
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/landing/case-2.svg"
                  alt="brand1"
                  width={45}
                  height={45}
                />
                <div>
                  <h4 className="text-base font-semibold mb-1">Wallet</h4>
                  <p className="font-medium text-[14px] text-[#707A8F] capitalize">
                    Secure and Save money with Xmarr
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/landing/case-3.svg"
                  alt="brand1"
                  width={45}
                  height={45}
                />
                <div>
                  <h4 className="text-base font-semibold mb-1">Transfer</h4>
                  <p className="font-medium text-[14px] text-[#707A8F] capitalize">
                    Send Money across countries
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/landing/case-4.svg"
                  alt="brand1"
                  width={45}
                  height={45}
                />
                <div>
                  <h4 className="text-base font-semibold mb-1">Virtual Card</h4>
                  <p className="font-medium text-[14px] text-[#707A8F] capitalize">
                    Pay for your online buys cross border
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/landing/case-5.svg"
                  alt="brand1"
                  width={45}
                  height={45}
                />
                <div>
                  <h4 className="text-base font-semibold mb-1">
                    Bill payments
                  </h4>
                  <p className="font-medium text-[14px] text-[#707A8F] capitalize">
                    Direct payment link for e-commerce
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/landing/case-6.svg"
                  alt="brand1"
                  width={45}
                  height={45}
                />
                <div>
                  <h4 className="text-base font-semibold mb-1">
                    Bill payments
                  </h4>
                  <p className="font-medium text-[14px] text-[#707A8F] capitalize">
                    Direct payment link for e-commerce
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/12 w-full rounded-[10px] mt-12">
            <Image
              src="/images/landing/use_case.png"
              alt="brand1"
              width={300}
              height={400}
              className="w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default WhyXmarr;
