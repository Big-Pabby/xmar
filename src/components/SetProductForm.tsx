"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useProductStore } from "@/store/useProductStore";
import UploadFile from "./UploadFile";
import { fetchCategories } from "@/services/apiService";
import { useQuery } from "react-query";
import { Product } from "@/store/useProductStore";

interface ImagePreview {
  url: string;
  file: File;
}

const SetProductForm = ({
  product,
  handleSubmit,
}: {
  product?: Product | null;
  handleSubmit: (formData: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}) => {
  const { setCategories, category } = useProductStore();
  const { data: categoriesData } = useQuery("products", fetchCategories, {
    enabled: category.categories.length === 0, // Only fetch if products state is empty
  });

  const [bannerPreview, setBannerPreview] = useState<string>(
    product?.banner || ""
  );
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [formLoader, setFormLoader] = useState<boolean>(false);
  const [form, setForm] = useState<Product>({
    name: product?.name || "",
    brand: product?.brand || "",
    category: product?.category || "",
    stock: product?.stock || 0,
    price: product?.price || 0,
    discountPrice: product?.discountPrice || 0,
    description: product?.description || "",
    images: product?.images || [""],
    banner: product?.banner || "",
  });

  const handleBannerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImage = (images: ImagePreview[]) => {
    setImagePreviews((prev) => [...prev, ...images]);
    console.log("Updated immediately:", imagePreviews);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (imagePreviews.length === 0) {
      alert("Please select at least one image.");
      return;
    }
    setFormLoader(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("brand", form.brand);
    formData.append("category", form.category);
    formData.append("stock", form.stock.toString());
    formData.append("price", form.price.toString());
    formData.append("discountPrice", form.discountPrice.toString());
    formData.append("description", form.description);
    formData.append("images", imagePreviews[0].file);
    handleSubmit(formData);
    setFormLoader(false);
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData.data);
    }
  }, [categoriesData, setCategories]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-start md:flex-row gap-4"
    >
      <div className="md:w-7/12 w-full bg-white rounded-lg border border-border p-5">
        <div className="mb-6">
          <label
            htmlFor="product_name"
            className="text-sm block my-2 font-medium"
          >
            Product Name
          </label>
          <input
            id="product_name"
            name="product_name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            className="w-full h-12 bg-background border border-input rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="brand_name"
            className="text-sm block mb-2 font-medium"
          >
            Brand Name
          </label>
          <input
            id="brand_name"
            name="brand_name"
            value={form.brand}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, brand: e.target.value }))
            }
            type="text"
            className="w-full h-12 bg-background border border-input rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="text-sm block mb-2 font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full h-28 bg-background border border-input rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>
        <div className="mb-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-6/12">
            <label
              htmlFor="category"
              className="text-sm block mb-2 font-medium"
            >
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
              id="category"
              className="w-full h-12 bg-background border border-input rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {category.categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="md:w-6/12">
            <label htmlFor="stock" className="text-sm block mb-2 font-medium">
              Stock Quantity
            </label>
            <input
              id="stock"
              value={form.stock}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, stock: Number(e.target.value) }))
              }
              name="stock"
              type="number"
              min="0"
              className="w-full h-12 bg-background border border-input rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col md:flex-row gap-8">
          <div className="md:w-6/12">
            <label htmlFor="price" className="text-sm block mb-2 font-medium">
              Regular Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium">
                $
              </span>
              <input
                id="price"
                name="price"
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    price: Number(e.target.value),
                  }))
                }
                min="0"
                step="0.01"
                className="w-full h-12 bg-background border border-input rounded-lg pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="md:w-6/12">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="discount" className="text-sm font-medium">
                Discount Price
              </label>
              <span className="text-sm text-muted-foreground">Optional</span>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium">
                $
              </span>
              <input
                id="discount"
                name="discount"
                type="number"
                value={form.discountPrice}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    discountPrice: Number(e.target.value),
                  }))
                }
                min="0"
                step="0.01"
                className="w-full h-12 bg-background border border-input rounded-lg pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="additional_note" className="text-sm font-medium">
              Additional Note
            </label>
            <span className="text-sm text-muted-foreground">Optional</span>
          </div>
          <textarea
            id="additional_note"
            name="additional_note"
            className="w-full h-48 bg-background border border-input rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>
      </div>

      <div className="md:w-5/12 w-full bg-white rounded-lg border border-border p-5">
        <div className="w-full h-[220px] rounded-lg overflow-hidden relative group">
          <Image
            src={bannerPreview}
            alt="product banner"
            width={500}
            height={220}
            className="w-full h-full object-cover"
          />
          <label
            htmlFor="banner"
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/images/upload.svg"
              alt="Upload icon"
              width={24}
              height={24}
              className="text-primary-foreground"
            />
            <input
              type="file"
              id="banner"
              name="banner"
              className="hidden"
              accept="image/*"
              onChange={handleBannerUpload}
            />
          </label>
        </div>

        <div className="mt-4">
          <UploadFile handleImage={handleImage} />

          <div className="mt-8">
            <h3 className=" font-medium mb-4">Select sizes</h3>
            <div className="flex gap-2">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleSize(size)}
                  className={`w-12 h-12 rounded-lg border ${
                    selectedSizes.includes(size)
                      ? "border-primary bg-primary text-white"
                      : "border-input bg-background text-foreground"
                  } transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            disabled={formLoader}
            className="btn btn-primary w-full text-white mt-12"
          >
            Save{" "}
            {formLoader && (
              <span className="loading loading-spin loading-sm text-black"></span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SetProductForm;
