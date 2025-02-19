"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import SetProductForm from "@/components/SetProductForm";
import Reviews from "@/components/Review";
import OrderScreen from "@/components/OrderScreen";
import { Question } from "@/components/Question";
import Link from "next/link";

const product = {
  product_name: "Bumble Shampoos",
  product_type: "DOVE",
  price: 110.4,
  discout: 24,
  description:
    "The name says it all, this products are well known for their quality and are frequently",
  sales: 1269,
  total_products: 3000,
  image: "/images/product.svg",
  banner: "/images/banner.svg",
};
const page = () => {
  const [currentNav, setCurrentNav] = useState<string>("Product Details");
  const navList = ["Product Details", "Orders", "Reviews", "Questions"];

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">{product.product_name}</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            {product.product_type}
          </h4>
        </div>
        <Link
          href={`/admin/products/add`}
          className="btn btn-primary text-white rounded-[8px]"
        >
          <FaPlus className="text-[20px] text-white" /> ADD NEW PRODUCT
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-6">
        {navList.map((item, index) => (
          <div
            onClick={() => setCurrentNav(item)}
            key={index}
            className={`w-full  rounded-[12px] ${
              currentNav === item
                ? "bg-primary text-white border-none"
                : "bg-secondary border-[1px] border-[#E8E8E9]"
            } hover:border-none text-center p-[16px] cursor-pointer hover:bg-primary font-meduium text-[24px] hover:text-white`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-8">
        {currentNav === "Product Details" ? (
          <div>
            <SetProductForm product={product} />
          </div>
        ) : currentNav === "Reviews" ? (
          <div>
            <Reviews />
          </div>
        ) : currentNav === "Orders" ? (
          <div>
            <OrderScreen />
          </div>
        ) : (
          <div>
            <Question />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
