"use client";

import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { useQuery } from "react-query";
import Link from "next/link";
import { get_blogs, delete_blog } from "@/services/apiService";
import { Blog } from "@/types/blog";
import Pagination from "@/components/Pagination";
import { FaEllipsisV } from "react-icons/fa";
import Toaster from "@/components/Toaster";

const Page = () => {
  const { data: blogData, isLoading, error } = useQuery("blogs", get_blogs);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [toaster, setToaster] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const totalItems = blogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  useEffect(() => {
    if (blogData) {
      setBlogs(blogData);
    }
  }, [blogData, setBlogs]);
  useEffect(() => {
    const handleClick = () => setOpenMenu(null);
    if (openMenu !== null) {
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }
  }, [openMenu]);
  if (isLoading) {
    return (
      <div className="min-h-screen w-full pt-[100px] pb-10 flex items-center justify-center">
        <Image
          src="/images/splash-loader.gif"
          alt="Loading..."
          width={150}
          height={150}
          priority
        />
        {/* <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div> */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full pt-[100px] pb-10">
        <p className="text-red-500">
          Error loading data. Please try again later.
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen w-full pt-[100px] pb-10">
        <p className="text-red-500">
          Error loading data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={() => setToaster(null)} // Close the toaster
        />
      )}
      {showDeleteModal && selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Delete Blog</h3>
            <p className="mb-4">
              Are you sure you want to delete the blog "<span className="font-bold">{selectedBlog.title}</span>"?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-200"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 text-white"
                onClick={async () => {
                  try {
                    await delete_blog(selectedBlog.id as string);
                    setToaster({
                      message: "Blog created successfully!",
                      type: "success",
                    });
                    setBlogs((prev) =>
                      prev.filter((b) => b.id !== selectedBlog.id)
                    );
                    setShowDeleteModal(false);
                    setSelectedBlog(null);
                  } catch {
                    setToaster({
                      message: "Failed to delete blog.",
                      type: "error",
                    });
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <h2 className="text-[28px] font-medium">Blogs</h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Here is a list of blogs you created before
        </h4>
        <Link
          href={`/admin/blogs/add`}
          className="btn btn-primary text-white rounded-[8px]"
        >
          <FaPlus className="text-[20px] text-white" /> Create Blog
        </Link>
      </div>
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {blogs.length &&
          blogs.map((item, index) => (
            <div
              key={index}
              className="border-[1px] mb-4 border-[#E8E8E9] bg-white rounded-[12px] p-[24px]"
            >
              <div className="w-full h-[200px] rounded-[8px] overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={item.image || "/images/landing/hq.svg"}
                  alt="product Image"
                  width={300}
                  height={140}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex  mt-4 justify-between items-center">
                <h3 className="font-medium text-[16px] text-primary line-clamp-1">
                  {item.title}
                </h3>
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === index ? null : index);
                    }}
                    className="p-2"
                  >
                    <FaEllipsisV />
                  </button>
                  {openMenu === index && (
                    <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow z-10">
                      <Link
                        href={`/admin/blogs/add?id=${item.id}`}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setOpenMenu(null);
                          window.location.href = `/admin/blogs/add?id=${item.id}`;
                        }}
                      >
                        Edit
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                        onClick={() => {
                          setSelectedBlog(item);
                          setShowDeleteModal(true);
                          setOpenMenu(null);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="line-clamp-2 text-[#667085] mt-4 text-sm">
                {stripHtml(item.message)}
              </p>
              <hr className="my-3" />
              <p className="text-[12px] text-[#838383]">{item?.date_created}</p>
            </div>
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
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, totalItems)} out of {totalItems}{" "}
          records
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Page;
