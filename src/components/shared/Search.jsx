"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText.trim());
  };

  return (
    <div className="flex items-center gap-2 w-full bg-[#fcfcfc] border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
      <Search size={20} className="text-green-500" />

      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search facilities..."
        className="flex-1 px-2 py-2 bg-transparent outline-none text-gray-700"
      />

      <button
        onClick={handleSearch}
        className="bg-green-300 hover:bg-green-400 text-green-950 px-5 py-2 rounded-xl font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
