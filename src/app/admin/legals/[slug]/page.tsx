"use client";
import React, { useState, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import TextEditor from "@/components/TextEditor";
import { Blog } from "@/types/blog";
import { useMutation } from "react-query";
import {
  get_legals_by_slug,
  create_legals,
  edit_legals,
} from "@/services/apiService";
import { useParams, useRouter, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const slug = searchParams.get("id");

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
    mutationFn: (payload: Blog) =>
      form.id ? edit_legals(payload) : create_legals(payload),
    onSuccess: () => {
      setToaster({
        message: form.id
          ? "Legal document updated successfully!"
          : "Legal document created successfully!",
        type: "success",
      });
      router.push("/admin/legals");
    },
    onError: (error) => {
      setToaster({
        message:
          error instanceof Error
            ? error.message
            : "Failed to save legal document",
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
  useEffect(() => {
    if (slug) {
      setForm({ ...form, id: slug });
      
      get_legals_by_slug(slug as string)
        .then((data) => {
          setForm({
            id: data.id,
            message: data.message,
            title: data.title,
            category: data.category,
            image: data.image || "",
          });
        })
        .catch(() => {
          setToaster({
            message: "Failed to fetch legal data",
            type: "error",
          });
          // If not found, keep form empty for creation
        });
    }
  }, [slug]);
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={() => setToaster(null)}
        />
      )}
      <h2 className="text-[28px] font-medium">
        {slug && "Edit "}
        {formattedSlug}
      </h2>
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
          ) : form.id ? (
            "Update document"
          ) : (
            "Deploy document to website"
          )}
        </button>
      </div>
      <div className="md:w-8/12 mx-auto">
        <div className="flex mt-8 justify-between items-center gap-4">
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
            <select
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full p-0 m-0 outline-none border-none bg-transparent"
            >
              <option value="Privacy policy">Privacy policy</option>
              <option value="AML policy">AML policy</option>
              <option value="Cookie policy">Cookie policy</option>
              <option value="Security">Security</option>
              <option value="Compliance">Compliance</option>
              <option value="Consent Agreement">Consent Agreement</option>
              <option value="Dispute resolution">Dispute resolution</option>
            </select>
          </div>
        </div>
        <div className="mt-8">
          <TextEditor initialContent="" onContentChange={handleContentChange} />
        </div>
      </div>
    </div>
  );
};

export default Page;
