"use client";

const categories = [
  "Football",
  "Cricket",
  "Badminton",
  "Tennis",
  "Swimming",
  "Basketball",
  "Volleyball",
  "Other",
];

const CategoryDropdown = ({ value = "", onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-full min-h-14 w-full rounded-2xl border border-gray-200 bg-[#1a1f2e] px-4 py-3 text-sm font-semibold text-white shadow-sm outline-none transition focus:ring-2 focus:ring-[#2d6a4f]"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;