"use client";

import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch, IoMdTime } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
  avatarUrl: string;
}

export default function page() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);

  const chats: Chat[] = [
    {
      id: 1,
      name: "Group Chat",
      lastMessage:
        "Hey! Did you check the group on the latest tv show: The flash, Arrow and Lengends od tommorrow",
      time: "10:30 AM",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Ira Ryan",
      lastMessage:
        "Hey! Did you check the group on the latest tv show: The flash, Arrow and Lengends od tommorrow",
      time: "10:25 AM",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Jerry Haller",
      lastMessage:
        "Hey! Did you check the group on the latest tv show: The flash, Arrow and Lengends od tommorrow",
      time: "10:20 AM",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Flynn",
      lastMessage:
        "Hey! Did you check the group on the latest tv show: The flash, Arrow and Lengends od tommorrow",
      time: "10:15 AM",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Mary Gerard",
      lastMessage:
        "Hey! Did you check the group on the latest tv show: The flash, Arrow and Lengends od tommorrow",
      time: "10:10 AM",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: "Aiden Martin",
      content: "Oh hello! All perfect:)",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Aiden Martin",
      content: "I will check it and get back to you soon",
      timestamp: "10:31 AM",
      isOwn: false,
    },
    {
      id: 3,
      sender: "You",
      content: "Oh hello! All perfect:)",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: 4,
      sender: "You",
      content: "I will check it and get back to you soon",
      timestamp: "10:33 AM",
      isOwn: true,
    },
  ];

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">Chats</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            Profile Management
          </h4>
        </div>
      </div>
      <div className=" mt-8 flex h-screen gap-6">
        {/* Left sidebar */}
        <div className="md:w-5/12 overflow-y-scroll bg-white border-[1px] border-[#A2A1A833] py-[16px] rounded-[10px]">
          <div className="px-[16px] border-b mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 items-center">
                <h3 className="font-semibold text-lg">All Messages</h3>
                <FaChevronDown />
              </div>
              <IoMdMore className="text-2xl" />
            </div>
            <div className="mb-4 flex items-center space-x-2 bg-[#F8F9FD] rounded-lg py-[16px] px-[16px]">
              <IoIosSearch className="h-5 w-5 text-primary" />
              <input
                type="text"
                placeholder="Search messages..."
                className="bg-transparent border-none focus:outline-none w-full text-sm"
              />
            </div>
          </div>

          <div className="h-[calc(100vh-73px)]">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`p-4 mb-2 hover:bg-[#FFF4E1] cursor-pointer ${
                  selectedChat === chat.id ? "bg-[#FFF4E1]" : ""
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="flex items-start space-x-3">
                  {/* <Avatar className="h-12 w-12" /> */}
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={chat.avatarUrl}
                    alt={chat.name}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{chat.name}</h3>
                      <FaRegStar className="text-xl text-primary" />
                    </div>
                    <p className="text-sm mt-2 text-[#636363] line-clamp-2">
                      {chat.lastMessage}
                    </p>
                    <p className="text-xs text-gray-500 flex gap-2 items-center mt-6">
                      <IoMdTime className="text-lg" /> Today | {chat.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 bg-secondary flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b bg-white flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  {/* <Avatar className="h-10 w-10" /> */}
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                    alt=""
                  />
                  <div>
                    <h2 className="font-medium text-lg">Aiden Martin</h2>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shadow-lg">
                    <FaRegStar className="text-xl text-primary" />
                  </div>
                  <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shadow-lg">
                    <IoIosSearch className="text-xl" />
                  </div>
                  <button className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shadow-lg">
                    <IoMdMore className="text-2xl" />
                  </button>
                </div>
              </div>
              <div className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex  ${
                        message.isOwn ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] py-[16px] px-[24px] ${
                          message.isOwn
                            ? "bg-primary text-white  rounded-t-[32px] rounded-bl-[32px]"
                            : "bg-[#E3E3E3] rounded-t-[32px] rounded-br-[32px] text-gray-900"
                        }`}
                      >
                        <p>{message.content}</p>
                        <p
                          className={`text-xs mt-1 text-gray-500 ${
                            message.isOwn ? "text-right" : "text-left"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t bg-[#F3F6F6]">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-[40px] bg-white px-[16px] py-[8px] rounded-full">
                    <input
                      type="text"
                      placeholder="Type your message here ..."
                      className="border-none text-[#9FA7BE] bg-transparent w-full h-full outline-none p-0 m-0"
                    />
                  </div>

                  {/* <Input placeholder="Type a message..." className="flex-1" /> */}
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <FaMicrophone className="h-5 w-5 text-primary" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <LuSend className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
