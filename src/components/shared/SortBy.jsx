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
      className="h-11 w-full cursor-pointer rounded-xl border border-gray-200 bg-[#2d6a4f] px-4 text-sm font-semibold text-white shadow-sm outline-none transition-colors hover:bg-[#1a1f2e] focus:bg-[#1a1f2e] focus:ring-2 focus:ring-[#2d6a4f]/30 sm:h-12"
    >
      <option className="bg-white text-[#1a1f2e]" value="">
        All Categories
      </option>
      {categories.map((category) => (
        <option className="bg-white text-[#1a1f2e]" key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;