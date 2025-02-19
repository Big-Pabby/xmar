"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  author: string;
  timeAgo: string;
  question: string;
  answer: string;
  image: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    author: "Jane Cooper",
    timeAgo: "2 mins ago",
    question:
      "Ultricies tempor adipiscing et vulputate duis et more aliquet amet et",
    answer:
      "Previous articles or details, such as what happened when it occurred but all my other relevant information.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: 2,
    author: "John Doe",
    timeAgo: "2 mins ago",
    question:
      "Ultricies tempor adipiscing et vulputate duis et more aliquet amet et",
    answer:
      "Previous articles or details, such as what happened when it occurred but all my other relevant information.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: 3,
    author: " Cooper John",
    timeAgo: "2 mins ago",
    question:
      "Ultricies tempor adipiscing et vulputate duis et more aliquet amet et",
    answer:
      "Previous articles or details, such as what happened when it occurred but all my other relevant information.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    id: 4,
    author: "Victor Cooper",
    timeAgo: "2 mins ago",
    question:
      "Ultricies tempor adipiscing et vulputate duis et more aliquet amet et",
    answer:
      "Previous articles or details, such as what happened when it occurred but all my other relevant information.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
];

export function Question() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <div className="flex w-full  gap-8 ">
      {/* Questions Column */}
      <div className="md:w-7/12 w-full p-[20px] bg-secondary rounded-[10px]">
        <h2 className="text-xl font-semibold mb-4">Questions</h2>
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={` "p-4 rounded-lg mb-6 cursor-pointer transition-all ${
                selectedQuestion === item.id ? "bg-gray-50" : "hover:bg-gray-50"
              }"`}
              onClick={() => setSelectedQuestion(item.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="w-[40px] h-[40px] bg-gray-100 rounded-full flex items-center justify-center">
                    <img
                      className="rounded-full w-[40px] h-[40px]"
                      src={item.image}
                      alt={item.author}
                    />
                  </div>
                  <div>
                    <div className="">
                      <p className="font-semibold">{item.author}</p>
                      <p className="text-sm text-[#333333]">{item.timeAgo}</p>
                    </div>
                    <p className="text-[15px] text-[#333333] mt-1">
                      {item.question}
                    </p>
                  </div>
                </div>
                <button className="text-[#333333] hover:text-gray-600">
                  <span className="text-xl">⋮</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Column */}
      <div className="md:w-5/12 p-[16px] bg-secondary rounded-[10px]">
        <h2 className="text-xl font-semibold mb-4">Answer</h2>
        {selectedQuestion ? (
          <div className="p-4">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-[40px] h-[40px] bg-gray-100 rounded-full flex items-center justify-center">
                <img
                  className="rounded-full w-[40px] h-[40px]"
                  src={
                    faqData.find((item) => item.id === selectedQuestion)?.image
                  }
                  alt={
                    faqData.find((item) => item.id === selectedQuestion)?.author
                  }
                />
              </div>
              <div>
                <div className="">
                  <p className="font-semibold">
                    {
                      faqData.find((item) => item.id === selectedQuestion)
                        ?.author
                    }
                  </p>
                  <p className="text-sm text-[#333333]">
                    {
                      faqData.find((item) => item.id === selectedQuestion)
                        ?.timeAgo
                    }
                  </p>
                </div>
                <p className="text-[15px] text-[#333333] mt-1">
                  {
                    faqData.find((item) => item.id === selectedQuestion)
                      ?.question
                  }
                </p>
              </div>
            </div>
            <p className="text-gray-600 ml-11">
              {faqData.find((item) => item.id === selectedQuestion)?.answer}
            </p>
            <div className="mt-8">
              <label className="block mb-1 font-semibold" htmlFor="answer">
                Say Something
              </label>
              <textarea
                id="answer"
                placeholder="Provide additional details, such as what happened, when it occurred, and any other relevant information"
                name="answer"
                className="w-full h-[300px] bg-white border-[1px] border-[#A2A1A833] rounded-[8px] p-[16px] outline-none"
              />
            </div>
            <button className="mt-4 w-full btn btn-primary text-white py-3 rounded-lg  transition-colors">
              Next
            </button>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a question to see the answer
          </div>
        )}
      </div>
    </div>
  );
}
