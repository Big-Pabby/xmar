"use client";
// import { useParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import React from "react";

const dummyBlog = {
  image: "/images/blog-image.png",
  title: "How Xmarr is Changing Finance",
  desc: "Discover how Xmarr is revolutionizing the way people manage their finances with innovative solutions.",
  category: "Product Updates",
  authorName: "Jane Doe",
  authorImage: "/images/avatar.svg",
  date: "2024-06-01",
  content: `
    <p>
      In South Africa, more freelancers are choosing flexible, independent careers across fields like design, writing, digital marketing, tech, and consulting. As this shift continues, one of the most common pain points they face is sending professional invoices and receiving payments in foreign currencies like USD, GBP, or EUR. Between complicated banking systems, slow international transfers, and unclear exchange rates, many freelancers find themselves frustrated and underpaid. However, the solution to this is easier than you think. With digital solutions like Grey, you can create and send professional invoices, receive payments in major currencies, and withdraw your money smoothly into your South African bank account. Also read: How South African freelancers can receive payments from the US, UK & EU clients Why South African freelancers must invoice the right way Legitimacy: Sending an invoice shows that you're a professional, not just doing "a side gig." It helps you buildtrust and long-term relationships with your clients. Compliance: Proper invoicing supports your business documentation, especially when it comes to tax reporting with SARS (South African Revenue Service). Clear expectations: Your invoice lays out exactly what you delivered, how much you're owed, and when you're expecting payment—removing confusion on both ends. Paper trail: If there's ever a dispute, your invoice serves as evidence of the terms agreed upon and the work completed. Also read:  How to manage freelance income and taxes in South Africa Top platforms to send professional invoices across borders Grey: Grey allows you to create invoices in USD, GBP, or EUR and receive payments into your foreign bank  accounts. From there, you can convert and withdraw funds to your South African bank account—no paperwork, no fuss. Grey: Grey allows you to create invoices in USD, GBP, or EUR and receive payments into your foreign bank  accounts.</p>
    <p>
      In this article, we explore the latest updates to our product, share insights from our team, and provide tips for making the most of your Xmarr experience. Stay tuned for more stories and updates from the Xmarr team!</p>
  `,
};

const BlogSlugPage = () => {
  // const params = useParams();
  // In a real app, fetch blog by params.slug
  const blog = dummyBlog;

  return (
    <>
      <NavBar />
      <div className=" pt-[120px] pb-10 px-5 md:px-0">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-3">
            <span className="inline-block text-gray-400  text-xs px-3 py-1 rounded-full w-fit">
              {blog.category}
            </span>
            <span className="text-xs text-gray-400">
              •{" "}
              {new Date(blog.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl text-center md:text-4xl font-bold mb-8">
            {blog.title}
          </h1>
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-start gap-8">
            <div className="md:w-1/4 flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src={blog.authorImage}
                  alt={blog.authorName}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <span className="text-sm text-gray-700 font-medium">
                  {blog.authorName}
                </span>
              </div>
              <div className="mt-6 w-full flex flex-col">
                <span className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">
                  Share this post:
                </span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${
                      typeof window !== "undefined" ? window.location.href : ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="group"
                  >
                    <div className="rounded-full bg-[#E8E8E8] p-2 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="group-hover:text-primary transition-colors"
                      >
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${
                      typeof window !== "undefined" ? window.location.href : ""
                    }&text=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                    className="group"
                  >
                    <div className="rounded-full bg-[#E8E8E8] p-2 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="group-hover:text-primary transition-colors"
                      >
                        <path d="M22.162 5.656c.015.211.015.423.015.636 0 6.49-4.941 13.973-13.973 13.973-2.777 0-5.366-.813-7.548-2.213.386.045.772.06 1.173.06 2.3 0 4.415-.772 6.102-2.073-2.144-.045-3.952-1.457-4.58-3.406.303.045.606.075.924.075.439 0 .878-.06 1.287-.166-2.23-.454-3.91-2.415-3.91-4.779v-.06c.651.363 1.401.59 2.2.621-1.287-.863-2.13-2.34-2.13-4.011 0-.878.242-1.701.651-2.409 2.36 2.897 5.899 4.799 9.877 5.004-.075-.363-.121-.742-.121-1.12 0-2.713 2.2-4.913 4.913-4.913 1.415 0 2.693.59 3.591 1.533 1.12-.211 2.175-.621 3.127-1.173-.378 1.18-1.18 2.166-2.23 2.788 1-.121 1.955-.386 2.84-.772-.651.984-1.477 1.857-2.43 2.548z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${
                      typeof window !== "undefined" ? window.location.href : ""
                    }&title=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="group"
                  >
                    <div className="rounded-full bg-[#E8E8E8] p-2 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="group-hover:text-primary transition-colors"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.069 2.069-2.069 1.143 0 2.068.926 2.068 2.069 0 1.142-.925 2.068-2.068 2.068zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      blog.title +
                        " " +
                        (typeof window !== "undefined"
                          ? window.location.href
                          : "")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="group"
                  >
                    <div className="rounded-full bg-[#E8E8E8] p-2 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="group-hover:text-primary transition-colors"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.004 2.003c-5.514 0-9.997 4.484-9.997 9.997 0 1.768.464 3.484 1.348 4.997L2 22l5.127-1.342c1.463.801 3.11 1.242 4.877 1.242 5.514 0 9.997-4.484 9.997-9.997 0-5.514-4.483-9.997-9.997-9.997z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="prose prose-lg flex-1 text-[#410D00]"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default BlogSlugPage;
