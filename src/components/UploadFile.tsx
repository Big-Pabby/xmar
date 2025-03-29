"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

interface ImagePreview {
  url: string;
  file: File;
}

const UploadFile = ({
  handleImage,
}: {
  handleImage: (image: ImagePreview[]) => void;
}) => {
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const handleImagesUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPreviews = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));
      console.log(newPreviews);
      setImagePreviews((prev) => [...prev, ...newPreviews]);
      handleImage(newPreviews);
    }
  };

  const removeImage = (index: number) => {
    setImagePreviews((prev) => {
      const newPreviews = [...prev];
      URL.revokeObjectURL(newPreviews[index].url);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
    handleImage(imagePreviews);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      const newPreviews = Array.from(files)
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => ({
          url: URL.createObjectURL(file),
          file,
        }));
      setImagePreviews((prev) => [...prev, ...newPreviews]);
      handleImage(imagePreviews);
    }
  }, []);
  return (
    <div>
      <label
        htmlFor="images"
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
          name="images"
          id="images"
          className="hidden"
          accept=".jpg,.jpeg,.png"
          multiple
          onChange={handleImagesUpload}
        />
      </label>
      <div className="grid grid-cols-1 gap-3 mt-4">
        {imagePreviews.map((preview, index) => (
          <div
            key={index}
            className="relative bg-[#FAFAFA] w-full rounded-[7px] p-[14px] flex gap-4"
          >
            <Image
              src={preview.url}
              width={66}
              height={75}
              alt={`Product image ${index + 1}`}
              className="object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-[14px] right-[14px] font-bold  w-[20px] h-[20px] bg-[#FF5252] flex items-center justify-center text-white rounded-full "
            >
              <IoMdClose />
            </button>
            <div className="flex-1">
              <h4 className="font-semibold text-sm ">{preview.file.name}</h4>
              <div className="bg-[#F9A000] w-full h-[5px] rounded-full my-4"></div>
              <p className="text-sm font-semibold flex gap-2 items-center  text-primary">
                Select as cover photo {/*  <FaCircleCheck /> */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadFile;
