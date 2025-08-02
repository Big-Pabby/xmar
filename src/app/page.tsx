import Image from "next/image";
import NavBar from "@/components/NavBar";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const ecrow_users = [
    {
      name: "E-Commerce Platforms",
      features: [
        "Use Xmarr to Offer customers the assurance they deserve.",
        "Use Xmarr to  Reduce Disputes with Transparent Transactions",
        "Use XMARR to Protect Against Fraud and Build Trust",
      ],
      id: "ecommerce",
    },
    {
      name: "Freelancing Platforms",
      features: [
        "Use Xmarr to Secure payments upfront until project milestones are completed",
        "Use Xmarr to Build Unshakable Trust Between Clients and Freelancers",
        "Use Xmarr to Simplify Payouts with Our Integrated Wallet System",
      ],
      id: "freelancing",
    },
    {
      name: "Real-Estate Platforms",
      features: [
        "Use Xmarr to Protect Buyer Deposits Until All Terms Are Met",
        "Use Xmarr Prevent Fraud and Double-Selling of Property",
        "Use Xmarr to Secure Off-Plan Payments with Milestone-Based Releases",
      ],
      id: "real estate",
    },
    {
      name: "Exporter & Importer",
      features: [
        "Use XMARR to power and secure your international trade",
        "Use XMARR to Simplify Customs & Compliance",
        "Use XMARR to Build Borderless Business Trust no matter the currency.",
      ],
      id: "ecommerce",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#FFEAE4CE] md:px-32 px-5 py-20 flex items-center justify-between gap-6 md:flex-row flex-col-reverse">
        <div className="md:w-5/12 ">
          <h1 className="font-bold text-[#410D00] md:text-[50px] mb-4 md:leading-[68px] text-3xl">
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
        <div className="md:w-6/12 w-full">
          <Image
            src="/images/landing/Hero Img.png"
            alt="brand1"
            width={650}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className=" md:px-32 px-5 py-16">
        <div className="md:w-7/12 w-full mx-auto">
          <h2 className="md:text-[50px] md:leading-[55px] text-2xl text-center font-medium">
            Picture a world where every <br />
            <span className="text-primary"> transaction is safe</span>
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
      <div className=" md:px-32 px-5 py-16 flex gap-4 md:flex-row flex-col justify-between">
        <div className="md:w-4/12 w-full">
          <h3 className="text-4xl font-semibold mb-4">
            Who can use <span className="text-primary">Escrow</span>
          </h3>
          <p className="font-medium text-[#485B60]">
            Everyone who moves money! Business owners, freelancers, real estate
            investors—if you are making deals, XMARR makes sure they are safe.
          </p>
          <div className="w-full h-[555px] rounded-[10px] mt-12">
            <Image
              src="/images/landing/mobile.png"
              alt="brand1"
              width={414}
              height={555}
            />
          </div>
        </div>
        <div className="md:w-7/12 w-full grid md:grid-cols-2 grid-cols-1 gap-6">
          {ecrow_users.map((user, index) => (
            <div
              key={index}
              className="border-[#D7D7D7] border-[2px] hover:border-primary hover:shadow-lg bg-white rounded-[10px] p-6"
            >
              <h3 className="font-semibold text-2xl mb-6">{user.name}</h3>
              {user.features.map((feature, index) => (
                <p key={index} className="flex items-center gap-4 mb-2">
                  <FaRegCheckCircle className="text-xl" />
                  <span className="flex-1">{feature}</span>
                </p>
              ))}
              <button className="btn rounded-[5px] btn-outline hover:bg-primary hover:border-none w-full mt-8">
                Solution for {user.id}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-32 px-5 py-16">
        <div className="bg-[#FFF0DA] md:px-20 px-5 py-16">
          <div className="md:w-8/12 w-full mx-auto">
            <h2 className="md:text-[50px] text-3xl md:leading-[55px] text-center mb-4 font-bold">
              Discover How <span className="text-primary"> Xmarr Works</span>
            </h2>
            <p className="text-[#485B60] mb-8 text-center">
              Whether you are closing a business deal or shopping online, XMARR
              gives you the power to transact with total confidence—secure,
              transparent, and built for trust.
            </p>
            <div className="rounded-[5px] border-[2px] border-[#D7D7D7] bg-white p-4 flex md:w-7/12 mx-auto gap-4">
              <button className="btn hover:btn-primary btn-white hover:text-white rounded-[5px] flex-1  text-[#323232] font-medium">
                For Businesses
              </button>
              <div className="w-[1.5px] bg-[#D7D7D7]"></div>
              <button className="btn flex-1 hover:btn-primary btn-white hover:text-white rounded-[5px]  text-[#323232] font-medium">
                For Buyers
              </button>
            </div>
          </div>
          <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="bg-white rounded-[10px] p-8">
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary rounded-full">
                <BsBoxSeamFill className="text-white text-4xl" />
              </div>
              <h3 className="text-[22px] font-bold my-4">
                Create Escrow Request
              </h3>
              <p>
                Use Xmarr to provide tansaction details and send an escrow
                tansaction request to your customers.
              </p>
            </div>
            <div className="bg-white rounded-[10px] p-8">
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary rounded-full">
                <Image
                  src="/images/landing/send-icon.svg"
                  alt="brand1"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-[22px] font-bold my-4">
                Accept Deal & Transfer
              </h3>
              <p>
                Customers receive an email with escrow details and accept by
                making the payment.
              </p>
            </div>
            <div className="bg-white rounded-[10px] p-8">
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary rounded-full">
                <Image
                  src="/images/landing/pro-check.svg"
                  alt="brand1"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-[22px] font-bold my-4">
                Complete the Project
              </h3>
              <p>
                Fulfill the transaction as agreed and notify Xmarr when done.
              </p>
            </div>
            <div className="bg-white rounded-[10px] p-8">
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary rounded-full">
                <MdVerified className="text-3xl text-white" />
              </div>
              <h3 className="text-[22px] font-bold my-4">
                Customer Confirmation
              </h3>
              <p>The customer verifies that the terms have been met</p>
            </div>
            <div className="bg-white rounded-[10px] p-8">
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary rounded-full">
                <Image
                  src="/images/landing/verifies-icon.svg"
                  alt="brand1"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-[22px] font-bold my-4">Xmarr Verifies</h3>
              <p>
                confirm the transaction status before marking it as completed.
              </p>
            </div>
            <div className="bg-white rounded-[10px] p-8">
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary rounded-full">
                <Image
                  src="/images/landing/release-icon.svg"
                  alt="brand1"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-[22px] font-bold my-4">Payment Release</h3>
              <p>
                Once verified, funds are instantly released to your Pandascrow
                wallet.
              </p>
            </div>
          </div>
          <div className="md:w-8/12 mt-36 w-full mx-auto">
            <h2 className="md:text-[50px] text-3xl md:leading-[55px] text-center mb-4 font-bold">
              Everything You Need to Unlock
              <span className="text-primary">Global Opportunities</span>
            </h2>
            <p className="text-[#485B60] mb-8 text-center">
              Take absolute control of your payments and dominate cross-border
              transfers. With Xmarr, you send and receive money globally with
              unwavering security, crystal-clear transparency, and zero hidden
              fees. No more limits. Just freedom.
            </p>
          </div>
          <div className="mt-16 grid  mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="rounded-[8px] bg-gradient-to-br from-[#6EA9EB] via-[#91A6D2] to-[#CCA2A9] px-[24px] pt-[32px]">
              <h3 className="text-4xl font-semibold mb-4 text-white">Send</h3>
              <p className="font-medium text-lg text-white mb-20">
                Seamlessly send and receive money worldwide in seconds. Enjoy
                flexible transfer options designed for your convenience.
              </p>
              <div className="w-full">
                <Image
                  src="/images/landing/send.png"
                  alt="brand1"
                  width={414}
                  height={620}
                  className="w-full h-auto "
                />
              </div>
            </div>
            <div className="rounded-[8px] bg-gradient-to-br from-[#FBC78D] via-[#E16A87] to-[#C454A6] px-[24px] pt-[32px]">
              <h3 className="text-4xl font-semibold mb-4 text-white">
                Withdraw
              </h3>
              <p className="font-medium text-lg text-white mb-20">
                Seamlessly send and receive money worldwide in seconds. Enjoy
                flexible transfer options designed for your convenience.
              </p>
              <div className="w-full">
                <Image
                  src="/images/landing/withdraw.png"
                  alt="brand1"
                  width={414}
                  height={610}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="rounded-[8px] bg-gradient-to-br from-[#BC8BB2] via-[#A088C8] to-[#859DE5] px-[24px] pt-[32px]">
              <h3 className="text-4xl font-semibold mb-4 text-white">
                Transfer
              </h3>
              <p className="font-medium text-lg text-white mb-20">
                Seamlessly send and receive money worldwide in seconds. Enjoy
                flexible transfer options designed for your convenience.
              </p>
              <div className="w-full">
                <Image
                  src="/images/landing/transfer.png"
                  alt="brand1"
                  width={414}
                  height={610}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#B825C9] via-[#CA629C] to-[#C985A4] rounded-[10px] mt-8 flex w-full justify-between gap-4">
            <div className="md:w-5/12 w-full pt-16  md:pl-16 md:pb-0 pb-16 pl-5 pr-5">
              <h3 className="text-4xl font-semibold mb-4 text-white">
                Protection in Every Transaction.
              </h3>
              <p className=" text-[15px] text-white mb-12">
                Download the XMARR app today and enjoy a seamless, secure, and
                reliable way to handle your transactions.
              </p>
              <p className="font-semibold text-[15px] text-white uppercase">
                the World most trusted escrow service
              </p>
            </div>
            <div className="md:w-7/12 md:block hidden h-full ">
              <Image
                src="/images/landing/transaction-bg.png"
                alt="brand1"
                width={650}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-32 px-5 py-16">
        <div className="md:w-6/12 w-full">
          <h3 className="text-5xl font-semibold mb-4">
            Powerd by
            <span className="text-primary">Strong Global Partners</span>
          </h3>
          <p className="text-[15px] mb-16">
            Whether you are closing a business deal or shopping online, XMARR
            gives you the power to transact with total confidence—secure,
            transparent, and built for trust.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="rounded-[10px] shadow-xl p-[24px]">
            <Image
              src="/images/landing/prembly.svg"
              alt="brand1"
              width={130}
              height={150}
            />

            <p className="text-[15px] my-4">
              Use Xmarr to provide tansaction details and send an escrow
              tansaction request to your customers.
            </p>
          </div>
          <div className="rounded-[10px] shadow-xl p-[24px]">
            <Image
              src="/images/landing/dojah.svg"
              alt="brand2"
              width={77}
              height={77}
            />

            <p className="text-[15px] my-4">
              Use Xmarr to provide tansaction details and send an escrow
              tansaction request to your customers.
            </p>
          </div>
          <div className="rounded-[10px] shadow-xl p-[24px]">
            <Image
              src="/images/landing/kora.svg"
              alt="brand3"
              width={84}
              height={84}
            />
            <p className="text-[15px] my-4">
              Use Xmarr to provide tansaction details and send an escrow
              tansaction request to your customers.
            </p>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
}
