"use client";

import React, { useState } from "react";
import TextEditor from "@/components/TextEditor";
import { Blog } from "../../../../types/blog";
import Toaster from "@/components/Toaster";
import { useBlogMutation } from "@/hooks/useBlogMutation";
import UploadFile from "@/components/UploadFile";

const Page = () => {
  const [form, setForm] = useState<Blog>({
    message: "",
    title: "",
    category: "",
    image: "",
  });
  const [toaster, setToaster] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const { uploadMutation, blogMutation } = useBlogMutation();

  const handleContentChange = (content: string) => {
    setForm((prev) => ({ ...prev, message: content }));
  };
  const handleImage = async (images: { url: string; file: File }[]) => {
    if (images.length > 0) {
      const formData = new FormData();
      formData.append("file", images[0].file);

      try {
        const response = await uploadMutation.mutateAsync(formData);
        setForm((prev) => ({ ...prev, image: response.file_url }));
      } catch {
        setToaster({
          message: "Failed to upload image",
          type: "error",
        });
      }
    }
  };

  const handleBlog = async () => {
    try {
      await blogMutation.mutateAsync(form);
      setToaster({ message: "Blog created successfully!", type: "success" });
    } catch (error) {
      setToaster({
        message:
          error instanceof Error ? error.message : "Failed to create blog",
        type: "error",
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form fields
    if (!form.title || !form.category || !form.message) {
      setToaster({
        message: "Please fill all required fields",
        type: "error",
      });
      return;
    }

    await handleBlog();
  };

  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={() => setToaster(null)} // Close the toaster
        />
      )}

      <h2 className="text-[28px] font-medium">Blogs</h2>
      <div className="flex justify-between items-end">
        <h4 className="text-[#707A8F] text-[14px] font-medium">
          Manage how you send blogs to your users
        </h4>
      </div>
      <div className="mt-8 flex w-full gap-4 items-stretch">
        {/* Left Section */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="md:w-8/12 flex flex-col gap-4 w-full"
        >
          <div className="flex justify-between items-center gap-4">
            <div className="bg-secondary flex-1 border-[1px] border-[#E8E8E9] rounded-[12px] px-[24px] py-4">
              <input
                type="text"
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Write a Title"
                className="w-full p-0 m-0 outline-none border-none"
              />
            </div>
            <div className="flex-1 bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] px-[24px] py-4">
              <input
                type="text"
                value={form.category}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, category: e.target.value }))
                }
                placeholder="Blog Category"
                className="w-full p-0 m-0 outline-none border-none"
              />
            </div>
          </div>
          <div className="bg-secondary border-[1px] border-[#E8E8E9] rounded-[12px] p-[24px]">
            <UploadFile handleImage={handleImage} />
          </div>

          <TextEditor
            initialContent="<p>Initial content</p>"
            onContentChange={handleContentChange}
          />
          <button
            type="button" // Change to type="button"
            onClick={handleSubmit}
            className={`btn btn-primary text-white rounded-[10px] ${
              uploadMutation.isLoading || blogMutation.isLoading
                ? "opacity-50"
                : ""
            }`}
            disabled={uploadMutation.isLoading || blogMutation.isLoading}
          >
            {uploadMutation.isLoading || blogMutation.isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Post Blog"
            )}
          </button>
        </form>

        {/* Right Section */}
      </div>
    </div>
  );
};

export default Page;
