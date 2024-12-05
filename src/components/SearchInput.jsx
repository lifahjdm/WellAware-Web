import React from "react";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8 max-w-4xl mx-auto">
      <div className="relative">
        <input
          type="text"
          className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
          placeholder="Search Health News..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
