"use client"; // Required for Next.js App Router

import React from "react";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { fetchProducts } from "@/services/apiService";
import { useQuery } from "react-query";
import { useProductStore } from "@/store/useProductStore";

const rows = [
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
];

const page = () => {
  const { setProducts, productsDetail } = useProductStore();
  const {
    data: productsData,
    isLoading,
    error,
  } = useQuery("products", fetchProducts, {
    enabled: productsDetail.products.length === 0, // Only fetch if products state is empty
  });

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.data);
    }
  }, [productsData, setProducts]);
  const [currentPage, setCurrentPage] = useState(
    productsDetail.pagination.page
  );
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = productsDetail.pagination.totalPages;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = rows.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-medium">All Products</h2>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2">
            View all Products
          </h4>
        </div>
        <Link
          href={`/admin/products/add`}
          className="btn btn-primary text-white rounded-[8px]"
        >
          <FaPlus className="text-[20px] text-white" /> ADD NEW PRODUCT
        </Link>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <div className="py-[13px] bg-secondary w-[330px] px-[16px] rounded-[10px] border-[1px] border-[#A2A1A81A] flex items-center gap-1">
            <CiSearch className="text-[24px]" />
            <input
              type="text"
              className="w-full border-none m-0 p-0 outline-none bg-transparent"
              placeholder="Search"
            />
          </div>
          <div className="btn btn-secondary bg-none border-[1px] border-[#E8E8E9] p-[15px] flex items-center gap-2 font-medium text-[16px] rounded-[10px]">
            <div className="w-[20px] h-[20px]">
              <img
                src="/images/filter.svg"
                alt="Filter Icon"
                width={20}
                height={20}
              />
            </div>
            <h4> Filter</h4>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {productsDetail.products.map((item, index) => (
            <Link href={`/admin/products/${item?.id}`} key={index}>
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
            Showing 1 to {itemsPerPage} out of {productsDetail.pagination.total}{" "}
            records
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
