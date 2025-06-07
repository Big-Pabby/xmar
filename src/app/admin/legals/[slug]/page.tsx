"use client";
import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import TextEditor from "@/components/TextEditor";
import { Blog } from "@/types/blog";
import { useMutation } from "react-query";
import { create_legals } from "@/services/apiService";
import { useParams, useRouter } from "next/navigation";
import Toaster from "@/components/Toaster";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const formatSlug = (slug: string) => {
    const decoded = decodeURIComponent(slug);
    return decoded
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const formattedSlug = formatSlug(params.slug as string);
  const [toaster, setToaster] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [form, setForm] = useState<Blog>({
    message: "",
    title: "",
    category: formattedSlug,
    image: "",
  });
  const legalsMutation = useMutation({
    mutationFn: create_legals,
    onSuccess: () => {
      setToaster({
        message: "Legal document created successfully!",
        type: "success",
      });
      // Optionally redirect back to legals list
      router.push("/admin/legals");
    },
    onError: (error) => {
      setToaster({
        message:
          error instanceof Error
            ? error.message
            : "Failed to create legal document",
        type: "error",
      });
    },
  });
  const handleContentChange = (content: string) => {
    setForm((prev) => ({ ...prev, message: content }));
  };

  const handleSubmit = async () => {
    if (!form.title || !form.message) {
      setToaster({
        message: "Please fill all required fields",
        type: "error",
      });
      return;
    }

    await legalsMutation.mutateAsync(form);
  };
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={() => setToaster(null)}
        />
      )}
      <h2 className="text-[28px] font-medium">{formattedSlug}</h2>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-[#707A8F] text-[14px] font-medium mt-2 flex gap-2 items-center">
            <Link href={`/admin/legals`} className="text-primary">
              Legals
            </Link>{" "}
            <IoChevronForward /> {formattedSlug}
          </h4>
        </div>
        <button
          className={`btn btn-primary text-white rounded-[8px] ${
            legalsMutation.isLoading ? "opacity-50" : ""
          }`}
          onClick={handleSubmit}
          disabled={legalsMutation.isLoading}
        >
          {legalsMutation.isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Deploy document to website"
          )}
        </button>
      </div>
      <div className="bg-secondary md:w-6/12 mt-8 border-[1px] border-[#E8E8E9] rounded-[12px] px-[24px] py-4">
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
      <div className="mt-8">
        <TextEditor initialContent="" onContentChange={handleContentChange} />
      </div>
    </div>
  );
};

export default Page;
