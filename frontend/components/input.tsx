"use client";
import Image from "next/image";
import { useState } from "react";

// This is the input or search component
export default function InputLibrary() {
  const [search, setSearch] = useState("");

  // Dummy function to be used for API call
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // TODO: Replace with actual API call
    console.log("Searching for:", search);
  };

  return (
    <div className="input_section w-full p-1 px-1 sm:px-3 rounded-full bg-white shadow-sm">
      {/* Input and Buttons Row */}
      <form className="flex items-center" onSubmit={handleSearch}>
        {/* Search Icon */}
        <div className="px-2 sm:px-3">
          <Image
            src="/listings3/search.png"
            alt="search icon"
            width={20}
            height={20}
          />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search by library name or location"
          className="bg-white text-[10px] sm:text-sm grow py-2 focus:outline-none"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Filter Button */}
        <div className="hidden sm:flex items-center">
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <button type="button" className="flex items-center gap-2 px-3 py-2 font-extralight hover:bg-gray-100">
            <Image
              src="/listings3/filter.png"
              width={14}
              height={14}
              alt="Filter"
            />
            <span className="text-sm">Filter</span>
          </button>
        </div>

        {/* Map View Button */}
        <div className="hidden sm:flex items-center">
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <button type="button" className="flex items-center gap-2 px-3 py-2 font-extralight hover:bg-gray-100">
            <Image
              src="/listings3/map.png"
              width={14}
              height={14}
              alt="Map view"
            />
            <span className="text-sm whitespace-nowrap">Map view</span>
          </button>
        </div>

        {/* Clear Button */}
        <div className="hidden sm:flex items-center">
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <button
            type="button"
            className="px-3 py-2 text-sm text-gray-400 font-extralight hover:bg-gray-100"
            onClick={() => setSearch("")}
          >
            Clear
          </button>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="ml-2 sm:ml-4 px-4 py-1 sm:px-6 sm:py-2 bg-black text-white rounded-full text-[10px] sm:text-sm hover:bg-gray-900"
        >
          Search
        </button>
      </form>
    </div>
  );
}