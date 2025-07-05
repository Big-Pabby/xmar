"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";

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

const dummyBlogs = [
  {
    id: 1,
    image: "/images/blog-image.png",
    title: "How Xmarr is Changing Finance",
    desc: "Discover how Xmarr is revolutionizing the way people manage their finances with innovative solutions.",
    category: "Product Updates",
    authorName: "Jane Doe",
    authorImage: "/images/avatar.svg",
    date: "2024-06-01",
  },
  {
    id: 2,
    image: "/images/blog-image.png",
    title: "5 Tips for Secure Online Payments",
    desc: "Learn essential tips to keep your online transactions safe and secure in today's digital world.",
    category: "Finance Tips",
    authorName: "John Smith",
    authorImage: "/images/avatar.svg",
    date: "2024-05-28",
  },
  {
    id: 3,
    image: "/images/blog-hero.png",
    title: "Meet Our Team: Behind the Scenes",
    desc: "Get to know the passionate team members who are building the future of finance at Xmarr.",
    category: "User Stories",
    authorName: "Alice Lee",
    authorImage: "/images/avatar.svg",
    date: "2024-05-20",
  },
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
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
                <p className="text-gray-600 text-sm flex-1 mb-4">{blog.desc}</p>
                {/* Author and Date */}
                <div className="flex items-center gap-2 mt-auto">
                  <Image
                    src={blog.authorImage}
                    alt={blog.authorName}
                    width={28}
                    height={28}
                    className="rounded-full object-cover"
                  />
                  <span className="text-xs text-gray-700 font-medium">
                    {blog.authorName}
                  </span>
                  <span className="text-xs text-gray-400 ml-2">
                    •{" "}
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
