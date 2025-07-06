"use client";

import { useSearchParams } from "next/navigation";

export type PaginatorProps = {
  currentPage: number;
  totalPages: number;
};

export const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
}) => {
  const searchParams = useSearchParams();

  const prevUrlSearchParams = new URLSearchParams(searchParams.toString());
  const nextUrlSearchParams = new URLSearchParams(searchParams.toString());

  if (currentPage > 1) {
    prevUrlSearchParams.set("page", (currentPage - 1).toString());
  } else {
    prevUrlSearchParams.set("page", "1");
  }

  if (currentPage < totalPages) {
    nextUrlSearchParams.set("page", (currentPage + 1).toString());
  } else {
    nextUrlSearchParams.set("page", totalPages.toString());
  }

  return (
    <div className="flex items-center justify-between mt-8">
      <a
        href={`?${prevUrlSearchParams.toString()}`}
        className={`px-4 py-2 rounded ${
          currentPage > 1
            ? "bg-white text-black"
            : "bg-gray-300 text-gray-500 pointer-events-none"
        }`}
        aria-disabled={currentPage <= 1}
      >
        Previous
      </a>
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <a
        href={`?${nextUrlSearchParams.toString()}`}
        className={`px-4 py-2 rounded ${
          currentPage < totalPages
            ? "bg-white text-black"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Next
      </a>
    </div>
  );
};
