import React, { useState } from "react";
import { FiEye, FiPhoneCall, FiShare2 } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { IoLocationOutline, IoPlay } from "react-icons/io5";
import Image from "next/image";
import Reviews from "./Review";
import Modal from "@/components/Modal";

interface Profile {
  shop_name: string;
  image_cover: string;
  image_profile: string;
  owner_name: string;
  owner_id: string;
  shop_address: string;
  shop_rating: number;
  total_reviews: number;
  shop_status: string;
  wallet_amount: number;
  specialists: {
    name: string;
    title: string;
    image: string;
  }[];
  no_of_posts: number;
  no_of_orders: number;
  no_of_rating: number;
  description: string;
  shop_username: string;
  services: {
    name: string;
    no_of_types: number;
  }[];
  packages: {
    package_name: string;
    description: string;
    image: string;
    price: number;
  }[];
  gallery: string[];
}
const ShopProfile = ({ profile }: { profile: Profile }) => {
  const [currentNav, setCurrentNav] = useState<string>("Services");
  const product_nav = ["Services", "Packages", "Gallery"];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  return (
    <div className="flex justify-between gap-8">
      <div className="md:w-6/12">
        <div className="w-full mb-4 bg-primary h-[180px] rounded-[8px] flex flex-col justify-between p-[16px]">
          <div>
            <h3 className="text-white font-medium">Balance</h3>
          </div>
          <div>
            <p className="text-white font-medium text-sm mb-1">Amount</p>
            <h4 className="font-extrabold text-white text-2xl">
              ${profile.wallet_amount.toFixed(2)}
            </h4>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="border-[1px] flex justify-center items-center border-[#E8E8E9] rounded-[8px] w-[40px] h-[40px] p-[10px] text-[15px] text-[#707A8F]">
            <FiEye />
          </div>
          <div className="border-[1px] rounded-[8px] text-primary border-primary py-[10px] flex-1 h-[40px] flex justify-center">
            Top up users wallet
          </div>
        </div>
        <div className="w-full bg-secondary mt-8 border-[1px] border-[#A2A1A833] rounded-[10px] p-[24px] grid grid-cols-4 gap-6 ">
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-[#FFF8E6] w-full h-[70px] flex items-center text-2xl text-[#FEBA43] justify-center p-[8px] rounded-[16px] ">
              <BiMessageDetail />
            </div>
            <p className="text-[#666D80] text-sm">Message</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-[#FFF8E6] w-full h-[70px] flex items-center text-2xl text-[#FEBA43] justify-center p-[8px] rounded-[16px] ">
              <FiPhoneCall />
            </div>
            <p className="text-[#666D80] text-sm">Call</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-[#FFF8E6] w-full h-[70px] flex items-center text-2xl text-[#FEBA43] justify-center p-[8px] rounded-[16px] ">
              <IoLocationOutline />
            </div>
            <p className="text-[#666D80] text-sm">Direction</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-[#FFF8E6] w-full h-[70px] flex items-center text-2xl text-[#FEBA43] justify-center p-[8px] rounded-[16px] ">
              <FiShare2 />
            </div>
            <p className="text-[#666D80] text-sm">Share</p>
          </div>
        </div>
        <div className="w-full bg-secondary mt-4 border-[1px] border-[#A2A1A833] rounded-[10px] p-[16px]">
          <h2 className="font-semibold text-base text-[#0D0D12] mb-6">
            Our Specialist
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {profile.specialists.map((item, index) => (
              <div
                key={index}
                className="border-[1px] border-[#ECEFF3] p-[12px] rounded-[16px] bg-secondary flex flex-col items-center gap-1"
              >
                <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={58}
                    height={58}
                    className=" w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-sm font-semibold text-[#0D0D12]">
                  {item.name}
                </h5>
                <p className="text-[13px] text-[#666D80]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-4">
          <Reviews type={"Recent"} />
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full bg-secondary border-[1px] border-[#A2A1A833] flex flex-col items-center justify-center gap-6 rounded-[10px] p-12">
          <div className="flex justify-center gap-8 ">
            <div className="text-center">
              <p className="text-sm text-[#666D80]">{profile.no_of_posts}</p>
              <h6 className="text-[#171717] text-sm mt-1">Posts</h6>
            </div>
            <div className="text-center">
              <p className="text-sm text-[#666D80]">{profile.no_of_orders}</p>
              <h6 className="text-[#171717] text-sm mt-1">Orders</h6>
            </div>
            <div className="text-center">
              <p className="text-sm text-[#666D80]">{profile.no_of_rating}</p>
              <h6 className="text-[#171717] text-sm mt-1">Ratings</h6>
            </div>
          </div>
          <div className="bg-[#FFF8EB] py-2 px-4 rounded-[5px] text-primary text-sm">
            @{profile.shop_username}
          </div>
          <p className="text-center text-[#272835]">{profile.description}</p>
        </div>
        <div className="w-full mt-4 bg-secondary border-[1px] border-[#A2A1A833] rounded-[10px] p-[24px]">
          <div className="bg-[#FAFAFA] w-full border-[1px] flex justify-between border-[#E7E7E7] rounded-[12px] p-[3px]">
            {product_nav.map((item, index) => (
              <div
                onClick={() => setCurrentNav(item)}
                key={index}
                className={` ${
                  currentNav === item
                    ? "bg-primary text-white"
                    : " hover:bg-[#F1F2F4] text-[#6D6D6D]"
                }  rounded-[8px] flex flex-col justify-center px-[24px] text-center h-[30px] cursor-pointer  text-sm font-semibold`}
              >
                <h2>{item}</h2>
              </div>
            ))}
          </div>
          <div className="mt-8">
            {currentNav === "Services" ? (
              <div>
                {profile.services.map((item, index) => (
                  <div
                    key={index}
                    className="p-[15px] mb-2 rounded-[16px] border-[1px] border-[#ECEFF3] w-full h-[78px] flex justify-between items-center"
                  >
                    <h6 className="text-sm text-[#292929]">{item.name}</h6>
                    <div className="flex items-center gap-2 text-[15px] text-[#171717] font-medium">
                      {item.no_of_types} types{" "}
                      <IoPlay className="text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            ) : currentNav === "Packages" ? (
              <div>
                {profile.packages.map((item, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#ECEFF3] bg-secondary p-[14px] mb-2 rounded-[16px] flex gap-4"
                  >
                    <div className="w-[84px] h-[full] rounded-[8px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.package_name}
                        width={84}
                        height={0}
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base text-[#0D0D12] mb-2">
                        {item.package_name}
                      </h4>
                      <p className="text-[#666D80] text-[12px] mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-primary font-semibold">
                          ${item.price}
                        </p>
                        <button className="bg-primary flex items-center justify-center px-[12px]  h-[25px]  text-[12px] font-medium text-white rounded-[3px]">
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : currentNav === "Gallery" ? (
              <div className="grid grid-cols-2 gap-3">
                {profile.gallery.map((item, index) => (
                  <div
                    onClick={() => openModal(index)}
                    key={index}
                    className="w-full h-[228px] rounded-[10px] overflow-hidden"
                  >
                    <Image
                      src={item}
                      alt={`${index}`}
                      width={0}
                      height={228}
                      className=" w-full h-full cursor-pointer object-cover"
                    />
                  </div>
                ))}
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  <div className="flex items-center justify-between">
                    <button
                      disabled={currentIndex === 0}
                      onClick={() =>
                        setCurrentIndex((prev) => Math.max(prev - 1, 0))
                      }
                      className="p-2 text-lg"
                    >
                      ◀
                    </button>
                    <Image
                      src={profile.gallery[currentIndex]}
                      alt={`Image ${currentIndex}`}
                      width={0}
                      height={400}
                      className="flex-1 h-[400px] rounded-[12px] object-cover"
                    />
                    <button
                      disabled={currentIndex === profile.gallery.length - 1}
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          Math.min(prev + 1, profile.gallery.length - 1)
                        )
                      }
                      className="p-2 text-lg"
                    >
                      ▶
                    </button>
                  </div>
                </Modal>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
