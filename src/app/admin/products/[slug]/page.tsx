"use client";

import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import SetProductForm from "@/components/SetProductForm";
import Reviews from "@/components/Review";
import OrderScreen from "@/components/OrderScreen";
import { Question } from "@/components/Question";
import Link from "next/link";
import { fetchProduct, updateProduct } from "@/services/apiService";
import { useQuery } from "react-query";
import { useSearchParams } from "next/navigation";
import { Product } from "@/store/useProductStore";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params; // Get the slug from query parameters

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery(
    ["products", slug], // Ensure query key includes slug
    () => fetchProduct(slug), // Use an arrow function to call fetchProduct
    {
      enabled: !!slug, // Only run query if slug is available
    }
  );

  const [product, setProducts] = useState<Product | null>(null);
  const [currentNav, setCurrentNav] = useState<string>("Product Details");
  const navList = ["Product Details", "Orders", "Reviews", "Questions"];

  const handleSubmit = async (formData: any) => {
    try {
      const { data } = await updateProduct(slug, formData);

      // Optionally, you can fetch the updated categories list here
    } catch (error) {
      console.error("Failed to create category", error);
    }
  };

  useEffect(() => {
    if (productData) {
      console.log(productData);
      setProducts(productData.data);
    }
  }, [productData, setProducts]);

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          {slug}
          <h2 className="text-[28px] font-medium">{product?.name}</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            {product?.brand}
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
            <SetProductForm product={product} handleSubmit={handleSubmit} />
          </div>
        ) : currentNav === "Reviews" ? (
          <div>
            <Reviews type={""} />
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
