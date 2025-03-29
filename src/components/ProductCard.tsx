import React from "react";
import Image from "next/image";
import { TbDots } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import { Product } from "@/store/useProductStore";

const ProductCard = ({ product }: { product: Product }) => {
  const remainingPercentage = 0;
  return (
    <div className="w-full border-[1px] border-[#E8E8E9] bg-secondary rounded-[16px] p-[16px]">
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-2 items-center">
          <div className="w-[84px] h-[84px] rounded-[8px] overflow-hidden">
            <Image
              src={product?.images[0] || `/images/product.svg`}
              alt="product Image"
              width={84}
              height={84}
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-[#0D0D12] mb-1">
              {product?.name}
            </h4>
            <h6 className="text-sm font-semibold text-[#000] mb-3">
              {product?.brand}
            </h6>
            <p className="font-semibold text-sm text-[#232321]">
              ${product?.price}{" "}
              <span className="text-primary pl-2">
                -${product?.discountPrice}
              </span>
            </p>
          </div>
        </div>
        <div className=" bg-neutral cursor-pointer flex items-center py-[8px] px-[12px] text-[#232321] text-[16px] rounded-[4px] border-[1px] border-[#E8E8E9]">
          <TbDots />
        </div>
      </div>
      <div className="my-3">
        <h4 className="font-semibold text-[16px] mb-1 text-[#232321]">
          Description
        </h4>
        <p className="text-sm text-[#808080] line-clamp-2">
          {product?.description}
        </p>
      </div>
      <div className="border-[0.75px] border-[#E8E8E9] rounded-[8px] p-[16px]">
        <div className="flex justify-between gap-4 items-center mb-4">
          <p className="text-sm text-[#232321] font-semibold">Sales</p>
          <div className="flex gap-1 items-center">
            <FaArrowUp className="text-primary text-[16px]" />
            <p className="text-sm text-[#232321] font-semibold">
              {product?.stock}
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <p className="text-sm text-[#232321] font-semibold">
            Remaining Products
          </p>
          <div className="flex gap-4 items-center">
            <div className="relative w-[52px] h-[4px] bg-gray-200 rounded-full">
              <div
                className="h-[4px] bg-primary rounded-full transition-all duration-500"
                style={{ width: `${remainingPercentage}%` }}
              ></div>
            </div>
            {/* <p className="text-sm text-[#232321] font-semibold">
              {product.total_products - product.sales}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
