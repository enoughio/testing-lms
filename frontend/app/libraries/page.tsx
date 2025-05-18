"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import InputLibrary from "@/components/input";
import { ChevronDown } from "lucide-react";
import LibraryCard from "@/components/library_listing1/librarycard";
import Filter from "@/components/library_listing1/filter";

export default function AllLibraries() {
  return (

      <div className="main_section max-w-[1920px] lg:overflow-x-auto relative px-2 lg:px-16 md:px-[5%] bg-[#ECE3DA]  min-h-screen w-full">

      {/* Filter and Content Section */}
      <div className="flex  flex-col sm:flex-row sm:gap-2 lg:gap-6">
        {/* Left Filter */}
        <Filter />

        {/* Right Content */}
        <div className="w-full lg:w-[70%] p-4 ">
          {/* Top Header */}
          <div className="flex flex-col  md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-urbanist hidden sm:block font-medium text-[18px]">
              1,2314 Results
            </p>

            {/* Updated Sort By Dropdown */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm text-gray-500 font-urbanist font-medium">
                Sort by{" "}
              </span>
              <div className="relative inline-flex items-center">
                <select className="appearance-none bg-transparent pl-1 pr-7 py-2 text-sm font-urbanist font-medium text-gray-900 cursor-pointer focus:outline-none">
                  <option>Newest</option>
                  <option>Medium</option>
                  <option>Oldest</option>
                </select>
                <ChevronDown className="absolute right-0 h-4 w-4 pointer-events-none text-gray-900" />
              </div>
            </div>
          </div>

          {/* Cards */}
          <LibraryCard />

          {/* Pagination */}
          <div className="flex flex-wrap space-x-2 mt-6">
            {[1, 2, 3, 4, 5].map((page, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full border flex items-center justify-center font-urbanist font-medium text-[16px]
                    ${
                      page === 1
                        ? "bg-black text-white"
                        : "bg-transparent text-gray-500 hover:text-black hover:border-black"
                    }
                    ${page > 3 ? "opacity-50" : ""}`}
              >
                {page}
              </button>
            ))}

            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
