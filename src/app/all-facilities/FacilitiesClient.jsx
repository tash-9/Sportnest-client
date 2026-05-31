"use client";

import { useEffect, useState } from "react";
import FacilityCard from "@/components/shared/FacilityCard";
import Search from "@/components/shared/Search";
import CategoryDropdown from "@/components/shared/SortBy";

export default function FacilitiesClient() {
  const [facilities, setFacilities] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchFacilities = async (search = "", category = "") => {
    const res = await fetch(`/api/facilities?search=${search}&category=${category}`);
    const data = await res.json();
    setFacilities(data);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

return (
    <div className="bg-[#f8f9fa] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-[#1a1f2e]">All Facilities</h1>
          <p className="text-gray-500 mt-1 text-sm">Find and book your perfect sports venue</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1">
            <Search onSearch={(text) => { setSearchText(text); fetchFacilities(text, selectedCategory); }} />
          </div>
          <CategoryDropdown onChange={(value) => { setSelectedCategory(value); fetchFacilities(searchText, value); }} />
        </div>

        {facilities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {facilities.map((f) => <FacilityCard key={f._id} facility={f} />)}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">No facilities found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        )}
      </div>
    </div>
  );
}