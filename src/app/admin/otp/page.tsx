"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "react-query";
import { verify_login_otp } from "@/services/apiService";
import OtpInput from "react-otp-input";
import { useAuthStore } from "@/store/useStore";
import Toaster from "@/components/Toaster";
import { AxiosError } from "axios";

const Page = () => {
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setAuthInfo);
  const [otp, setOtp] = useState("");
  const [toaster, setToaster] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const verifyMutation = useMutation({
    mutationFn: verify_login_otp,
    onSuccess: (data) => {
      setToken(data);

      setToaster({ message: "Successful", type: "success" });
      router.push("/admin/dashboard");
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
    if (otp.length === 4) {
      verifyMutation.mutate({ otp });
    }
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
            OTP Verification
          </h3>
          <p className="text-[#3D3D3D] text-center">
            Please enter the 4-digit code send to you at sylvaharris@gmail.com
          </p>
          <div className="my-4 w-full flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => (
                <input
                  {...props}
                  className="!w-[64px] !h-[64px] mx-2 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  type="text"
                />
              )}
              inputType="number"
              shouldAutoFocus
              containerStyle="flex gap-4"
            />
          </div>
          <button
            type="submit"
            disabled={otp.length !== 4 || verifyMutation.isLoading}
            className={`btn my-6 btn-primary w-full text-white ${
              verifyMutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {verifyMutation.isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Verifying...</span>
              </div>
            ) : (
              "Confirm"
            )}
          </button>
          <p>
            Don’t have an account? <Link href={"/admin"}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
