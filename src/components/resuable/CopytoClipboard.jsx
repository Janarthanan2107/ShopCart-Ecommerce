import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const CopyToClipboard = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Code Copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <div className="flex items-center gap-2">
      <ToastContainer />
      <div className="font-semibold text-gray-400 text-md">
        Coupon Code:{" "}
        <span className="text-green-400 font-bold text-md border border-gray-300 rounded-full p-[0.2rem]">{text}</span>
      </div>
      <button
        className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md"
        onClick={handleCopy}
      >
        <MdOutlineContentCopy />
      </button>
    </div>
  );
};

export default CopyToClipboard;
