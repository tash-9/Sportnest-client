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
      className="flex w-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:flex-row sm:items-center"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 px-3">
        <Search size={20} className="shrink-0 text-[#2d6a4f]" />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name, location, or sport..."
          className="min-w-0 flex-1 bg-transparent py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#2d6a4f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#40916c] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBox;