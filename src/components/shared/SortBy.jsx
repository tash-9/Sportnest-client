"use client";

const CategoryDropdown = ({ onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 bg-[#1a1f2e] text-white rounded-xl outline-none"
      defaultValue=""
    >
      <option value="">All Categories</option>
      <option value="Football">Football</option>
      <option value="Cricket">Cricket</option>
      <option value="Badminton">Badminton</option>
      <option value="Tennis">Tennis</option>
      <option value="Swimming">Swimming</option>
      <option value="Basketball">Basketball</option>
      <option value="Volleyball">Volleyball</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default CategoryDropdown;
