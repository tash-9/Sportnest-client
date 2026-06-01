"use client";

import { Label, SearchField, Button } from "@heroui/react";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex justify-center items-center w-full px-4">
      <SearchField className="w-full max-w-3xl">
        <Label className="hidden">Search</Label>

        <SearchField.Group
          className="
            flex items-center
            bg-[#fcfcfc]
            border border-gray-200
            rounded-2xl
            px-3 py-2
            shadow-sm
            overflow-hidden
          "
        >
          {/* Icon */}
          <div className="pl-3 pr-2 text-green-500 flex items-center shrink-0">
            <Search size={20} />
          </div>

          {/* Input */}
          <SearchField.Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search facilities..."
            className="
              flex-1
              min-w-0
              px-2
              py-2.5
              text-gray-700
              bg-transparent
              outline-none
              border-none
              text-sm sm:text-base
            "
          />

          {/* Clear */}
          <div className="mr-2 flex items-center shrink-0">
            <SearchField.ClearButton className="text-green-500 hover:text-red-500 transition" />
          </div>

          {/* Button */}
          <Button
            onPress={handleSearch}
            className="
              bg-green-300
              hover:bg-green-400
              text-green-950
              px-5 sm:px-6
              py-2.5
              rounded-xl
              h-auto
              font-semibold
              shrink-0
              text-sm sm:text-base
              transition-colors
            "
          >
            Search
          </Button>
        </SearchField.Group>
      </SearchField>
    </div>
  );
};

export default SearchBox;