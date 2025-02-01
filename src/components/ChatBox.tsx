import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

const ChatBox = () => {
  const user = [
    {
      name: "David",
      image: "images/chat/bot-4.svg",
    },
    {
      name: "Susi",
      image: "images/chat/bot-3.svg",
    },
    {
      name: "Josh",
      image: "images/chat/bot-2.svg",
    },
    {
      name: "Fatima",
      image: "images/chat/bot-1.svg",
    },
    {
      name: "David",
      image: "images/chat/bot-4.svg",
    },
    {
      name: "Susi",
      image: "images/chat/bot-3.svg",
    },
    {
      name: "Josh",
      image: "images/chat/bot-2.svg",
    },
    {
      name: "Fatima",
      image: "images/chat/bot-1.svg",
    },
  ];
  return (
    <div className="w-full bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-medium">Quick Chats & Support</h3>
        <BsThreeDotsVertical className="text-[16px] text-accent" />
      </div>
      <p className="text-accent mt-1 text-[14px]">Recent recipients</p>
      <div className="w-full mt-8 flex overflow-y-auto gap-3 no-scrollbar">
        {user.map((item, index) => (
          <div
            key={index}
            className="hover:bg-primary text-[#666F82] hover:text-white cursor-pointer bg-transparent rounded-[10px] px-4 py-2 h-[100px] flex flex-col justify-between items-center"
          >
            <div className="w-[48px] h-[48px]">
              <Image
                src={item.image}
                alt="Logo Image"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="font-semibold"> {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
