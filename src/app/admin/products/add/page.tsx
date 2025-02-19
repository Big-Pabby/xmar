import React from "react";
import SetProductForm from "@/components/SetProductForm";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";

const page = () => {
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
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">New Products</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            <Link href={`/admin/products`} className="text-primary">
              All Products
            </Link>{" "}
            <IoChevronForward /> Add New Products
          </h4>
        </div>
      </div>
      <div className="mt-8">
        <SetProductForm product={product} />
      </div>
    </div>
  );
};

export default page;
