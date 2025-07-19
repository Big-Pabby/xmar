"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

interface ImagePreview {
  url: string;
  file: File;
}

const UploadFile = ({
  handleImage,
  initialImageUrl,
}: {
  handleImage: (image: ImagePreview[]) => void;
  initialImageUrl?: string;
}) => {
  const [imagePreview, setImagePreview] = useState<ImagePreview | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | undefined>(
    initialImageUrl
  );

  // Update currentImageUrl when initialImageUrl prop changes
  useEffect(() => {
    setCurrentImageUrl(initialImageUrl);
  }, [initialImageUrl]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Revoke previous URL if exists
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview.url);
      }

      const newPreview = {
        url: URL.createObjectURL(file),
        file,
      };
      setImagePreview(newPreview);
      handleImage([newPreview]);
    }
  };

  const removeImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview.url);
    }
    setImagePreview(null);
    setCurrentImageUrl(undefined);
    handleImage([]);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) {
        // Revoke previous URL if exists
        if (imagePreview) {
          URL.revokeObjectURL(imagePreview.url);
        }

        const newPreview = {
          url: URL.createObjectURL(file),
          file,
        };
        setImagePreview(newPreview);
        handleImage([newPreview]);
      }
    },
    [handleImage, imagePreview]
  );

  return (
    <div>
      {!imagePreview && !currentImageUrl ? (
        <label
          htmlFor="image"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-primary rounded-lg w-full h-[180px] flex flex-col items-center justify-center bg-[#FFFBF5] p-5 cursor-pointer hover:bg-secondary/50 transition-colors"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Image
              src="/images/upload.svg"
              alt="Upload icon"
              width={24}
              height={24}
              className="text-primary-foreground"
            />
          </div>
          <p className="mt-3 mb-1 text-sm">
            Drag & Drop or{" "}
            <span className="text-primary font-medium">choose file</span> to
            upload
          </p>
          <p className="text-xs text-muted-foreground">
            Supported formats: JPEG, PNG, JPG
          </p>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageUpload}
          />
        </label>
      ) : (
        <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
          <Image
            src={imagePreview?.url || currentImageUrl || ""}
            alt="Preview"
            fill
            className="object-cover"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
          >
            <IoMdClose className="text-gray-600 text-xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
