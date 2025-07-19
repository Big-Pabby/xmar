"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { useQuery } from "react-query";
import { get_blogs } from "@/services/apiService";
import { Blog } from "@/types/blog";
import SkeletonCard from "@/components/Skeleton";
import Link from "next/link";
import { useBlogStore } from "@/store/useStore";

const categories = [
  "All",
  "Product Updates",
  "Finance Tips",
  "User Stories",
  "Strategy",
  "Security",
  "Announcements",
  "Guides",
  "Partnerships",
  "Events",
  "Industry News",
  "Culture",
  "Remote Work",
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { blogs, setBlogs, isStale } = useBlogStore();

  const {
    data: fetchedBlogs,
    isLoading,
    error,
  } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: get_blogs,
    enabled: blogs.length === 0 || isStale(), // Only fetch if no cached data or cache is stale
    onSuccess: (data) => {
      setBlogs(data); // Cache the fetched blogs
    },
  });

  // Use cached blogs if available, otherwise use fetched blogs
  const displayBlogs = blogs.length > 0 ? blogs : fetchedBlogs || [];

  // Filter blogs based on selected category
  const filteredBlogs =
    displayBlogs?.filter((blog) => {
      if (selectedCategory === "All") return true;
      return blog.category === selectedCategory;
    }) || [];

  if (error) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen pt-[100px] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Error Loading Blogs
            </h2>
            <p className="text-gray-600">
              Failed to load blog posts. Please try again later.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className=" bg-[#FFEACD] pt-[100px] flex items-center justify-center gap-6  flex-col">
        <div className=" mb-12 md:px-36 px-5 md:w-6/12 w-full mx-auto text-center mt-12">
          <h1 className="md:text-5xl font-black text-[#410D00] text-3xl mb-8">
            The Xmarr
            <span className="text-primary">Blog</span>
          </h1>
          <p className="text-center">
            Dive into our latest product updates, user interviews, finance tips,
            and strategic insights from the Xmarr team.
          </p>
        </div>
        <Image
          src="/images/blog-hero.png"
          className="w-full"
          alt="blog"
          width={1000}
          height={1000}
        />
        {/* Category Tabs */}
        <div className="w-full md:pl-36 pl-5 flex justify-center mt-6">
          <div className="flex gap-3 overflow-x-auto px-2 md:px-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {categories.slice(0, 12).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 whitespace-nowrap transition-colors duration-200 text-sm md:text-base font-medium uppercase ${
                  selectedCategory === cat
                    ? "border-b-[2px] border-primary"
                    : "hover:border-b-[2px] border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Card Grid */}
      <div className="w-full bg-[#F0F0F0] md:pl-36 pl-5 md:pr-36 pr-5 py-16">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Link
                  href={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="bg-white rounded-xl cursor-pointer shadow-md overflow-hidden flex flex-col h-full"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={blog.image || "/images/blog-image.png"}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category Badge */}
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
                      {blog.category}
                    </span>
                    <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                    <div
                      className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html:
                          blog.message
                            ?.replace(/<[^>]*>/g, "")
                            .substring(0, 150) + "..." || "",
                      }}
                    />
                    {/* Author and Date */}
                    <div className="flex items-center gap-2 mt-auto">
                      <Image
                        src={blog.admin?.profile_photo || "/images/avatar.svg"}
                        alt={`${blog.admin?.first_name} ${blog.admin?.last_name}`}
                        width={28}
                        height={28}
                        className="rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-700 font-medium">
                        {blog.admin
                          ? `${blog.admin.first_name} ${blog.admin.last_name}`
                          : "Admin"}
                      </span>
                      <span className="text-xs text-gray-400 ml-2">
                        • {blog.date_updated}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No blogs found
                </h3>
                <p className="text-gray-500">
                  No blog posts available for the selected category.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Newsletter Section */}
      <div className="w-full flex justify-center bg-white py-16 md:px-36 px-5 ">
        <div className="w-full md:w-11/12 mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-medium mb-4">
            Stay Informed with Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 md:w-8/12 w-full mx-auto">
            Stay connected and receive the latest updates, stories, and
            exclusive content directly to your inbox.
          </p>
          <div className="flex justify-center items-center gap-3 mb-16">
            <div>
              <Image
                src="/images/users.png"
                alt="users"
                width={130}
                height={50}
              />
            </div>
            <h4 className="font-normal text-lg">
              +22k have already suscribed.
            </h4>
          </div>
          <form className="md:w-8/12 mx-auto flex flex-col md:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full h-[56px] md:w-auto flex-1 px-4 py-3 rounded-[8px] border border-gray-300 bg-[#F9F9FB] focus:outline-none focus:border-primary text-sm"
            />
            <button
              type="submit"
              className="bg-primary h-[56px] text-white px-6 py-3 rounded-[8px] font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-12 relative w-full h-[300px] rounded-[8px] overflow-hidden">
            <Image
              src="/images/free.png"
              alt="free"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default Page;
