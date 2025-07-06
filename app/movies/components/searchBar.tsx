"use client";

import { useState } from "react";

export const SearchBar: React.FC = () => {

  const [value, setValue] = useState("");

  const disabled = !value.trim();

  return (
    <div className="flex items-center justify-center gap-4">
      <form action="/movies" method="get" className="flex items-center gap-2">
        <input type="hidden" name="page" value="1" />
        <input
          type="text"
          value={value}
          placeholder="Search for a movie..."
          name="query"
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
        <button
          className={`rounded p-2  ${
            disabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:bg-blue-600 cursor-pointer"
          }`}
          type="submit"
          disabled={disabled}
        >
          Search
        </button>
      </form>
    </div>
  );
};
