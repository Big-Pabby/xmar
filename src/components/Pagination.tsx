import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Generate page numbers

  return (
    <div className="flex items-center gap-2 justify-center">
      {/* Previous Button */}
      <button
        className="px-[12px] py-[7px]  disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`px-[12px] py-[7px] border rounded-[8px] ${
            page === currentPage ? "bg-primary text-white border-primary" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="px-4 py-2 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
