"use client";

import { Search } from "lucide-react";

const SearchBox = ({ value, onChange, onSubmit, loading = false }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-11 w-full items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm sm:h-12"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 px-3">
        <Search size={18} className="shrink-0 text-[#2d6a4f]" />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search..."
          className="min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="h-9 shrink-0 rounded-lg bg-[#2d6a4f] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f2e] disabled:cursor-not-allowed disabled:opacity-70 sm:h-10"
      >
        {loading ? "..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBox;