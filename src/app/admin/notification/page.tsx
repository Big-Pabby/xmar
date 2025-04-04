import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { RiLinkM } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import Image from "next/image";

interface Notification {
  title: string;
  description: string;
  time: string;
}

const page = () => {
  const notification: Notification[] = [
    {
      title: "New Feature Alert",
      description:
        "We’ve launched international transactions on Xmarr! You can now create a foreign account and transact from the comfort of your home. ",
      time: "18:00",
    },
    {
      title: "Scheduled Maintenance",
      description: "Xmar will undergo maintenance from 2:00 AM to 4:00 AM.",
      time: "18:00",
    },
    {
      title: "New Feature Alert",
      description:
        "We’ve launched international transactions on Xmarr! You can now create a foreign account and transact from the comfort of your home. ",
      time: "18:00",
    },
    {
      title: "New Feature Alert",
      description:
        "We’ve launched international transactions on Xmarr! You can now create a foreign account and transact from the comfort of your home. ",
      time: "18:00",
    },
    {
      title: "New Feature Alert",
      description:
        "We’ve launched international transactions on Xmarr! You can now create a foreign account and transact from the comfort of your home. ",
      time: "18:00",
    },
    {
      title: "New Feature Alert",
      description:
        "We’ve launched international transactions on Xmarr! You can now create a foreign account and transact from the comfort of your home. ",
      time: "18:00",
    },
    {
      title: "New Feature Alert",
      description:
        "We’ve launched international transactions on Xmarr! You can now create a foreign account and transact from the comfort of your home. ",
      time: "18:00",
    },
    {
      title: "New Feature Alert",
      description:
        "We’ve launched international transactions on Xmarr! You can now create a foreign account and transact from the comfort of your home. ",
      time: "18:00",
    },
  ];
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <h2 className="text-[28px] font-medium">Notifications</h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Manage how you send notifications to your users
        </h4>
        <div className="flex gap-5 ">
          <div className="bg-secondary py-[10px] px-[12px] rounded-[8px] border-[1px] border-[#E8E8E9] flex items-center gap-3">
            <LuCalendarDays className="text-[20px] text-[#707A8F]" />
            <p className="text-[14px]">This Year</p>
            <FaChevronDown className="text-[15px] text-[#707A8F]" />
          </div>
          <div className="btn btn-neutral py-[10px] px-[12px] rounded-[8px] border-[1px] border-[#E8E8E9]">
            <RiLinkM className="text-[20px] text-[#707A8F]" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex h-screen w-full gap-4">
        <div className="md:w-8/12 flex flex-col gap-4 w-full">
          <div className="bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
            <input
              type="text"
              placeholder="Write a Title"
              className="w-full p-0 m-0 outline-none border-none"
            />
          </div>
          <textarea
            placeholder="Tell your story"
            className="flex-1 bg-secondary border-[1px] border-[#E8E8E9] outline-none rounded-[12px] p-[24px]"
          />
          <button className="btn btn-primary text-white rounded-[10px]">
            Send Notification
          </button>
        </div>
        <div className="md:w-4/12 w-full h-full overflow-y-auto bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
          <div className="flex justify-between gap-4 items-center w-full mb-2">
            <h3 className="font-medium text-xl">Recent Notifications</h3>
            <IoMdMore className="text-xl" />
          </div>
          <p className="text-sm text-[#707A8F] mb-6">
            Here is a list of notifications you created before
          </p>
          {notification.map((item, index) => (
            <div
              key={index}
              className="border-[1px] mb-4 border-[#E8E8E9] rounded-[12px] p-[24px]"
            >
              <div className="flex  items-center gap-4 mb-4">
                <div className=" relative bg-[#FFF6F4] w-[40px] flex items-center justify-center h-[40px] rounded-full">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#DD3138] absolute top-0 right-1"></div>
                  <Image
                    src={"/images/bank.png"}
                    alt="product Image"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
                <h3 className="font-medium text-[16px] text-[#3B3D4B]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#667085]">{item.description}</p>
              <hr className="my-3" />
              <p className="text-[12px] text-[#838383]">Today {item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
