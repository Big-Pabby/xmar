import React, { useEffect } from "react";

interface ToasterProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toaster = ({ message, type, onClose }: ToasterProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Automatically close the toaster after 3 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Toaster;
