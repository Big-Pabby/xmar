"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import ShopProfile from "@/components/ShopProfile";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const shop_details = {
  shop_name: "Captain Barbershop",
  image_cover: "/images/management/cover.svg",
  image_profile: "/images/management/profile.svg",
  owner_name: "Veronica Nwachukwu",
  owner_id: "VERONICA",
  shop_address: "123 Main Street, USA",
  shop_rating: 4.8,
  total_reviews: 3061,
  shop_status: "Open",
  wallet_amount: 11240,
  specialists: [
    {
      name: "A. Walker",
      title: "Sr. Barber",
      image: "/images/management/user1.svg",
    },
    {
      name: "N. Patel",
      title: "Hair Stylist",
      image: "/images/management/user2.svg",
    },
    {
      name: "B. Cruz",
      title: "Jr. Barber",
      image: "/images/management/user3.svg",
    },
    {
      name: "V. Adek",
      title: "Sr. Barber",
      image: "/images/management/user1.svg",
    },
  ],
  no_of_posts: 0,
  no_of_orders: 31,
  no_of_rating: 31,
  description:
    "Classic Cuts Barber Shop is a well-established barber shop located in the heart of Anytown. Situated on Main Street, it has been serving the local community for over a decade. ",
  shop_username: "Captain Barbershop",
  services: [
    {
      name: "Pompadour",
      no_of_types: 5,
    },
    {
      name: "Hair Cut",
      no_of_types: 11,
    },
    {
      name: "Beard Trim",
      no_of_types: 3,
    },
    {
      name: "Shave",
      no_of_types: 1,
    },
    {
      name: "Hair Styling",
      no_of_types: 3,
    },
  ],
  packages: [
    {
      package_name: "Premium Package",
      description: "This high-end package offers luxury grooming",
      price: 125,
      image: "/images/management/package.svg",
    },
    {
      package_name: "Custom Package",
      description: "This high-end package offers luxury grooming",
      price: 125,
      image: "/images/management/package.svg",
    },
    {
      package_name: "Grooming Package",
      description: "This high-end package offers luxury grooming",
      price: 125,
      image: "/images/management/package.svg",
    },
    {
      package_name: "Starter Package",
      description: "This high-end package offers luxury grooming",
      price: 125,
      image: "/images/management/package.svg",
    },
    {
      package_name: "Plus Package",
      description: "This high-end package offers luxury grooming",
      price: 125,
      image: "/images/management/package.svg",
    },
  ],
  gallery: [
    "/images/management/gallery1.svg",
    "/images/management/gallery2.svg",
    "/images/management/gallery3.svg",
    "/images/management/gallery4.svg",
    "/images/management/gallery5.svg",
    "/images/management/gallery6.svg",
  ],
  products: [
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
    {
      product_name: "Bumble Shampoos",
      product_type: "DOVE",
      price: 110.4,
      discout: 24,
      description:
        "The name says it all, this products are well known for their quality and are frequently",
      sales: 1269,
      total_products: 3000,
      image: "/images/product.svg",
    },
  ],
};

const specialists = [
  {
    name: "A. Walker",
    title: "Sr. Barber",
    image: "/images/management/specialist1.svg",
  },
  {
    name: "N. Patel",
    title: "Hair Stylist",
    image: "/images/management/specialist2.svg",
  },
  {
    name: "B. Cruz",
    title: "Jr. Barber",
    image: "/images/management/specialist3.svg",
  },
  {
    name: "V. Adek",
    title: "Sr. Barber",
    image: "/images/management/specialist4.svg",
  },
  {
    name: "V. Adek",
    title: "Sr. Barber",
    image: "/images/management/specialist5.svg",
  },
];

const page = () => {
  const [currentNav, setCurrentNav] = useState<string>("Profile");
  const shop_nav = ["Profile", "Products", "Activities and Plan"];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(shop_details.products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = shop_details.products.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <div className="min-h-screen relative w-full pt-[100px] pb-10 pr-[170px]">
      <div className="fixed h-screen top-0 pt-[100px] right-0 w-[170px] bg-white overflow-y-auto px-[16px]">
        <div className="border-x-[0.5px] border-[#55555555] py-[24px] px-[8px]">
          <button className="bg-primary text-white w-full h-[40px] rounded-[5px] flex items-center justify-center font-semibold mb-12">
            Specialist
          </button>
          <div className="flex gap-3 mb-4">
            <div className="btn btn-secondary p-[10px] bg-none border-[1px] border-[#E8E8E9] flex justify-center items-center rounded-[5px] text-xl text-[#707A8F]">
              <IoIosSearch />
            </div>
            <div className="btn btn-secondary bg-none border-[1px]  border-[#E8E8E9] flex-1 flex flex-row items-center  font-medium p-[10px] text-sm rounded-[5px] text-[#707A8F]">
              <div className="w-[18px] h-[18px]">
                <img
                  src="/images/filter.svg"
                  alt="Filter Icon"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
          {specialists.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF8EB] hover:border-[3px] mb-12 border-primary rounded-[5px]"
            >
              <div className="w-full h-[97px] overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={97}
                  className=" w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm text-center p-1">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">{shop_details.shop_name}</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            Profile Management
          </h4>
        </div>
        <button className="btn btn-primary btn-outline bg-white text-primary rounded-[8px]">
          Book an Appointment
        </button>
      </div>
      <div className="mt-8 w-full h-[200px] bg-secondary overflow-hidden">
        <div className="w-full h-[115px]">
          <Image
            src={shop_details.image_cover}
            alt="Logo Image"
            width={0}
            height={115}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="p-[16px] flex items-start">
          <div className="w-[112px] h-[129px] border-[2px] -mt-16 border-[#FFFFFF]">
            <Image
              src={shop_details.image_profile}
              alt="Logo Image"
              width={112}
              height={129}
              className=" object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-3 gap-6">
            <div className=" px-[16px] flex flex-col justify-center gap-1 border-r-[1px] border-[#55555555]">
              <h3 className="text-lg text-[#171717]">
                {shop_details.owner_name}
              </h3>
              <p className="text-base font-extralight">
                User ID:{" "}
                <span className="text-primary uppercase font-medium">
                  {shop_details.owner_id}
                </span>
              </p>
            </div>
            <div className=" px-[16px] flex flex-col justify-center gap-1 border-r-[1px] border-[#55555555]">
              <h3 className="text-lg text-[#171717]">
                {shop_details.shop_address}
              </h3>
              <p className="text-base font-extralight">{`${shop_details.shop_rating}(${shop_details.total_reviews})`}</p>
            </div>
            <div className=" px-[16px] flex flex-col items-start justify-center gap-1">
              <div
                className={`py-[4px] px-[12px] inline-block font-medium capitalize rounded-full ${
                  shop_details.shop_status === "Open"
                    ? "bg-[#EFFEFA] text-[#40C4AA]"
                    : "bg-[#FFCCCF] text-[#FE5B65]"
                }`}
              >
                {shop_details.shop_status}
              </div>
              <p className="text-base font-extralight capitalize">
                {shop_details.shop_name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-4">
        {shop_nav.map((item, index) => (
          <div
            onClick={() => setCurrentNav(item)}
            key={index}
            className={` ${
              currentNav === item
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-[#F1F2F4] text-[#171717]"
            }  rounded-[5px] flex flex-col justify-center px-[32px] text-center h-[45px] cursor-pointer  font-light  text-lg`}
          >
            <h2>{item}</h2>
          </div>
        ))}
        <div className="flex-1 h-[45px] rounded-[10px] bg-white p-[16px] flex gap-3 items-center">
          <IoIosSearch className="text-primary text-xl" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent border-none p-0 m-0 outline-none flex-1 rounded-none"
          />
        </div>
      </div>
      <div className="mt-8">
        {currentNav === "Profile" ? (
          <div>
            <ShopProfile profile={shop_details} />
          </div>
        ) : currentNav === "Products" ? (
          <div>
            <div className="grid grid-cols-2 gap-4">
              {currentItems.map((item, index) => (
                <Link href={`/admin/products/${item.product_name}`} key={index}>
                  <ProductCard product={item} />
                </Link>
              ))}
            </div>
            <div className="mt-4 flex w-full justify-between items-center">
              <div className="flex items-center gap-4">
                <p className="text-[#A2A1A8] font-light">Showing</p>
                <div className="border-[1px] border-[#A2A1A833] rounded-[10px] p-2 w-[66px] h-[36px]">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="border-none bg-transparent p-0 m-0 outline-none w-full h-full"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              <div className="text-[#A2A1A8] font-light">
                Showing 1 to {itemsPerPage} out of{" "}
                {shop_details.products.length} records
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        ) : currentNav === "Orders" ? (
          <div></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default page;
