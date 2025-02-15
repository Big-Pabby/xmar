"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  createdAt: string;
  avatarUrl: string;
}

const mockReviews: Review[] = [
  {
    id: "1",
    author: "John Cooper",
    rating: 3,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    createdAt: "2 mins ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "2",
    author: "John Cooper",
    rating: 4,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    createdAt: "2 mins ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: "3",
    author: "John Cooper",
    rating: 5,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    createdAt: "2 mins ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
];

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const averageRating = 4.0;
  const totalReviews = 52;

  const ratingDistribution = {
    5: 40,
    4: 30,
    3: 15,
    2: 10,
    1: 5,
  };

  return (
    <div className="">
      <div className="flex gap-8 mb-8">
        <div className="md:w-7/12 w-full p-[20px] bg-secondary rounded-[10px]">
          <div className="bg-[#FFF9EF] p-[16px] flex items-center justify-between rounded-[8px]">
            <div className="md:w-4/12">
              {Object.entries(ratingDistribution)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([stars, percentage]) => (
                  <div key={stars} className="flex items-center mb-2 gap-2">
                    <span className=" text-[15px] font-medium">{stars}</span>
                    <FaStar
                      className={`text-[16px] fill-[#E4A70A] text-[#E4A70A]`}
                    />
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#F9A000]"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-5xl font-bold">
                {averageRating.toFixed(1)}
              </span>
              <div className="flex gap-2 items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`w-4 h-4 ${
                      star <= averageRating
                        ? "fill-[#E4A70A] text-[#E4A70A]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[16px] font-semibold text-[#333333]">
                {totalReviews} Reviews
              </span>
            </div>
          </div>

          <div className="mt-8">
            {mockReviews.map((review) => (
              <div key={review.id} className="flex gap-4 p-4">
                <img
                  className="rounded-full w-[40px] h-[40px]"
                  src={review.avatarUrl}
                  alt={review.author}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[17px]">
                        {review.author}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating
                                  ? "fill-[#E4A70A] text-[#E4A70A]"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.createdAt}
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      ⋮
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-5/12 p-[16px] bg-secondary rounded-[10px]">
          <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
          <form className="space-y-4">
            <div>
              <label>Score</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`w-6 h-6 cursor-pointer transition-colors ${
                      star <= (hoveredRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1" htmlFor="fullName">
                Full Name
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

            <div>
              <label className="block mb-1" htmlFor="title">
                Title
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

            <div>
              <label className="block mb-1" htmlFor="review">
                Review
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full h-[115px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
              />
            </div>

            <button className="w-full btn btn-primary text-white">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}
