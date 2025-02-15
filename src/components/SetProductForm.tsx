import React from "react";
import Image from "next/image";

interface Product {
  product_name: string;
  product_type: string;
  price: number;
  discout: number;
  description: string;
  sales: number;
  total_products: number;
  image: string;
  banner: string;
}

const SetProductForm = ({ product }: { product: Product }) => {
  return (
    <form className="flex gap-4">
      <div className="md:w-7/12 w-full bg-secondary rounded-[8px] border-[1px] border-[#A2A1A833] p-[20px]">
        <div className="mb-6">
          <label
            htmlFor="product_name"
            className="text-sm block my-2 font-medium"
          >
            Product Name
          </label>
          <div className="w-full h-[48px] border-[1px] border-[#A2A1A833] rounded-[8px] px-[16px]">
            <input
              id="product_name"
              name="product_name"
              type="text"
              className="w-full h-full bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="brand_name"
            className="text-sm block mb-2 font-medium"
          >
            Brand Name
          </label>
          <div className="w-full h-[48px] border-[1px] border-[#A2A1A833] rounded-[8px] px-[16px]">
            <input
              id="brand_name"
              name="brand_name"
              type="text"
              className="w-full h-full bg-transparent border-none outline-none p-0 m-0"
            />
          </div>
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
            className="w-full h-[115px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
          />
        </div>
        <div className="mb-6 flex gap-8">
          <div className="md:w-6/12">
            <label
              htmlFor="category"
              className="text-sm block mb-2 font-medium"
            >
              Category
            </label>
            <div className="w-full h-[48px] border-[1px] border-[#A2A1A833] rounded-[8px] px-[16px]">
              <select
                name="category"
                id="category"
                className="w-full h-full bg-transparent border-none outline-none p-0 m-0"
              >
                <option value="Facials">Facials</option>
                <option value="Facials">Facials</option>
                <option value="Facials">Facials</option>
                <option value="Facials">Facials</option>
                <option value="Facials">Facials</option>
              </select>
            </div>
          </div>
          <div className="md:w-6/12">
            <label htmlFor="stock" className="text-sm block mb-2 font-medium">
              Stock Quantity
            </label>
            <div className="w-full h-[48px] border-[1px] border-[#A2A1A833] rounded-[8px] px-[16px]">
              <input
                id="stock"
                name="stock"
                type="text"
                className="w-full h-full bg-transparent border-none outline-none p-0 m-0"
              />
            </div>
          </div>
        </div>
        <div className="mb-6 flex gap-8">
          <div className="md:w-6/12">
            <label htmlFor="price" className="text-sm block mb-2 font-medium">
              Regular Price
            </label>
            <div className="w-full h-[48px] border-[1px] border-[#A2A1A833] flex items-center gap-2 rounded-[8px] px-[16px]">
              <h5 className="text-sm font-medium">$</h5>
              <input
                id="price"
                name="price"
                type="text"
                className="w-full h-full bg-transparent border-none outline-none p-0 m-0"
              />
            </div>
          </div>
          <div className="md:w-6/12">
            <div className="flex justify-between items-center mb-2 w-full">
              <label htmlFor="discount" className="text-sm block  font-medium">
                Discount Price
              </label>
              <h5 className="text-sm block text-primary font-medium">
                Optional
              </h5>
            </div>

            <div className="w-full h-[48px] border-[1px] border-[#A2A1A833] flex items-center gap-2 rounded-[8px] px-[16px]">
              <h5 className="text-sm font-medium">$</h5>
              <input
                id="discount"
                name="discount"
                type="text"
                className="w-full h-full bg-transparent border-none outline-none p-0 m-0"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 w-full">
            <label
              htmlFor="additional_note"
              className="text-sm block  font-medium"
            >
              Additional Note
            </label>
            <h5 className="text-sm block text-primary font-medium">Optional</h5>
          </div>

          <textarea
            id="additional_note"
            name="additional_note"
            className="w-full h-[200px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
          />
        </div>
      </div>
      <div className="md:w-5/12 w-full bg-secondary rounded-[8px] border-[1px] border-[rgba(162,161,168,0.2)] p-[20px]">
        <div className="w-full h-[220px] rounded-[8px] overflow-hidden">
          <Image
            src={product.banner}
            alt="product banner"
            width={0}
            height={220}
            className="w-full h-full object-cover rounded-[8px]"
          />
        </div>
        <label
          htmlFor="images"
          className="mt-4 border-[1px] rounded-[10px] border-dotted border-primary w-full h-[180px] flex flex-col items-center justify-center bg-[#FFFBF5] p-[20px]"
        >
          <div className="bg-primary w-[40px] h-[40px] flex items-center justify-center rounded-[10px] p-[20px]">
            <div className="w-[60px] h-[60px]">
              <Image
                src={"/images/upload.svg"}
                alt="icon"
                width={60}
                height={60}
              />
            </div>
          </div>
          <p className="my-3 font-light">
            Drag & Drop or <span className="text-primary">choose file</span> to
            upload
          </p>
          <p className="text-[11px] text-[#A2A1A8] font-light m-0 p-0">
            Supported formats : jpeg, png, jpg
          </p>
          <input type="file" name="images" id="images" className="hidden" />
        </label>
      </div>
    </form>
  );
};

export default SetProductForm;
