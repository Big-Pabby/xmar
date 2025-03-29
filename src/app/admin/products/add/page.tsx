"use client";

import React, { useState, useEffect } from "react";
import SetProductForm from "@/components/SetProductForm";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import Modal from "@/components/Modal";
import { createCategory, createProduct } from "@/services/apiService";
import { useProductStore } from "@/store/useProductStore";

const page = () => {
  const { addCategory, addProduct } = useProductStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [categoryLoader, setCategoryLoader] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryDescription, setCategoryDescription] = useState<string>("");

  const handleSubmit = async (formData: any) => {
    try {
      const { data } = await createProduct(formData);
      addProduct(data);
      // Optionally, you can fetch the updated categories list here
    } catch (error) {
      console.error("Failed to create category", error);
    }
  };
  const handleCreateCategory = async (e: React.FormEvent) => {
    setCategoryLoader(true);
    e.preventDefault();
    const newCategory = {
      name: categoryName,
      description: categoryDescription,
    };
    try {
      const { data } = await createCategory(newCategory);
      addCategory(data);
      setIsOpen(false);
      // Optionally, you can fetch the updated categories list here
    } catch (error) {
      console.error("Failed to create category", error);
    } finally {
      setCategoryLoader(false);
    }
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
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary rounded-[8px] text-white"
        >
          Create Category
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-2xl text-center">Add a Category</h2>
          <form onSubmit={handleCreateCategory}>
            <div className="mb-4">
              <label htmlFor="category_name" className="block mb-1">
                Category Name
              </label>
              <input
                type="text"
                id="category_name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="outline-none w-full bg-[#F1F1F1] rounded-[5px] p-[18px]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category_description" className="block mb-1">
                Category Description
              </label>
              <textarea
                id="category_description"
                value={categoryDescription}
                placeholder={`This is a ${categoryDescription} product category`}
                onChange={(e) => setCategoryDescription(e.target.value)}
                className="outline-none w-full resize-none h-[150px] bg-[#F1F1F1] rounded-[5px] p-[18px]"
              />
            </div>

            <button
              disabled={categoryLoader}
              type="submit"
              className="btn btn-primary w-full text-white rounded-[8px]"
            >
              Save{" "}
              {categoryLoader && (
                <span className="loading loading-spin loading-sm text-white"></span>
              )}
            </button>
          </form>
        </Modal>
      </div>
      <div className="mt-8">
        <SetProductForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default page;
