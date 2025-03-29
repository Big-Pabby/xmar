import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

interface OrderDetails {
  order_id: string;
  full_name: string;
  date: string;
  phone: string;
  shipping: string;
  payment_method: string;
  address: string;
  image: string;
  order_status: string;
}

const ProductCard = ({ order }: { order: OrderDetails }) => {
  const formatDate = (isoString: string) => {
    return dayjs.utc(isoString).format("DD MMM YYYY"); // Ensures UTC consistency
  };

  return (
    <div className="w-full border-[1px] border-[#A2A1A833] px-3 py-6 bg-secondary rounded-[8px]">
      <div className="flex items-center justify-between w-full">
        <div>
          <h3 className="font-semibold text-[18px] mb-1">
            Orders ID: {order.order_id}
          </h3>
          <p className="text-[#6E6E6E] text-sm font-light">
            Date: {formatDate(order.date)}
          </p>
        </div>
        <h3
          className={` font-bold text-[14px] ${
            order.order_status === "completed"
              ? "text-[#0F7A54]"
              : "text-[#F9A000]"
          }`}
        >
          {order.order_status === "completed" ? "Received" : "Pending"}
        </h3>
      </div>
      <hr className="my-2" />
      <div className="flex gap-3 items-start">
        <img
          className="rounded-full w-[40px] h-[40px]"
          src={order.image}
          alt={order.full_name}
        />
        <div>
          <div className="mb-4">
            <h4 className="text-[16px] font-bold mb-1">Customer</h4>
            <p className="text-[14px] font-light mb-1">
              Full Name: {order.full_name}
            </p>
            <p className="text-[14px] font-light mb-1">Phone: {order.phone}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-[16px] font-bold mb-1">Order Info</h4>
            <p className="text-[14px] font-light mb-1">
              Shipping: {order.shipping}
            </p>
            <p className="text-[14px] font-light mb-1">
              Payment Method: {order.payment_method}
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-[16px] font-bold mb-1">Delivery Info</h4>
            <p className="text-[14px] font-light mb-1">
              Address: {order.address}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-2">
        <button className="md:w-6/12 btn text-white btn-outline btn-primary  rounded-[5px] p-[16px]">
          View Profile
        </button>
        <button
          className={`md:w-6/12 btn text-white  ${
            order.order_status === "completed"
              ? "hover:bg-[#0D6A49] bg-[#0F7A54]"
              : order.order_status === "shipped"
              ? "bg-[#4C9AF0] hover:bg-[#3B82D1]"
              : "btn-primary"
          } rounded-[5px] p-[16px]`}
        >
          {order.order_status === "completed"
            ? "Completed"
            : order.order_status === "shipped"
            ? "Shipped"
            : "Confirm Order"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
