import { useMoviePageContext } from "../../context/moviePageContext";

export type PaginatorProps = {
  totalPages: number;
};

export const Paginator: React.FC<PaginatorProps> = ({ totalPages }) => {
  const { page: pageString, getSearchParams } = useMoviePageContext();

  const page = parseInt(pageString, 10);

  const prevUrlSearchParams = getSearchParams();
  const nextUrlSearchParams = getSearchParams();

  if (page > 1) {
    prevUrlSearchParams.set("page", (page - 1).toString());
  } else {
    prevUrlSearchParams.set("page", "1");
  }

  if (page < totalPages) {
    nextUrlSearchParams.set("page", (page + 1).toString());
  } else {
    nextUrlSearchParams.set("page", totalPages.toString());
  }

  return (
    <div className="flex items-center justify-between mt-8">
      <a
        href={`?${prevUrlSearchParams.toString()}`}
        className={`px-4 py-2 rounded ${
          page > 1
            ? "bg-white text-black"
            : "bg-gray-300 text-gray-500 pointer-events-none"
        }`}
        aria-disabled={page <= 1}
      >
        Previous
      </a>
      <span className="text-sm">
        Page {page} of {totalPages}
      </span>
      <a
        href={`?${nextUrlSearchParams.toString()}`}
        className={`px-4 py-2 rounded ${
          page < totalPages
            ? "bg-white text-black"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        aria-disabled={page >= totalPages}
      >
        Next
      </a>
    </div>
  );
};
