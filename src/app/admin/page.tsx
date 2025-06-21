"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { useMutation } from "react-query";
import { admin_login } from "@/services/apiService";
import Toaster from "@/components/Toaster";

import { AxiosError } from "axios";

interface LoginForm {
  email: string;
  password: string;
}
const Page = () => {
  const router = useRouter();
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [toaster, setToaster] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const loginMutation = useMutation({
    mutationFn: admin_login,
    onSuccess: () => {
      setToaster({ message: "Login was Successful", type: "success" });
      router.push("/admin/otp");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        // Handle Axios-specific error
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        console.error(errorMessage, error);
        setToaster({ message: errorMessage, type: "error" });
      } else {
        // Handle non-Axios errors
        console.error("An unknown error occurred", error);
        setToaster({ message: "An unknown error occurred", type: "error" });
      }
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      // Add validation error handling/toast here
      return;
    }
    loginMutation.mutate(form);
  };
  return (
    <div className="flex h-screen">
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={() => setToaster(null)} // Close the toaster
        />
      )}
      <div className="md:w-6/12 w-full h-full gradient-overlay"></div>
      <div className="md:w-6/12 w-full flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="flex md:px-36  flex-col items-center justify-center bg-white h-full w-full"
        >
          <Image
            src="/images/bank-2.svg"
            alt="Hairsby logo"
            width={52}
            height={52}
            className="mx-auto"
          />
          <h3 className="font-bold text-4xl text-[#470E00] text-center my-4">
            Welcome Back
          </h3>
          <p className="text-[#3D3D3D] text-center">
            Enter the details associated to your xmarr account
          </p>
          <div className="my-4 w-full">
            <label htmlFor="email" className="mb-1 block font-medium">
              Email
            </label>
            <input
              required
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              id="email"
              type="email"
              className="w-full border-[1px] border-[#EDEDED] bg-[#EDEDED] p-[16px] outline-none"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="password" className="mb-1 block font-medium">
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full border-[1px] border-[#EDEDED] bg-[#EDEDED] p-[16px] outline-none"
            />
          </div>
          <div className="flex w-full justify-between items-center mb-8">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                className="accent-primary h-[18px] w-[18px]"
              />
              <p>Remember me</p>
            </div>
            <p>Forgot Password</p>
          </div>
          <button
            type="submit"
            disabled={loginMutation.isLoading}
            className={`btn btn-primary w-full text-white ${
              loginMutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loginMutation.isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
