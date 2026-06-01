"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FacilityCard from "@/components/shared/FacilityCard";
import SearchBox from "@/components/shared/Search";
import CategoryDropdown from "@/components/shared/SortBy";

export default function FacilitiesClient({
  initialSearch = "",
  initialCategory = "",
}) {
  const router = useRouter();
  const [facilities, setFacilities] = useState([]);
  const [searchText, setSearchText] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const updateBrowserUrl = useCallback(
    (search, category) => {
      const params = new URLSearchParams();

      if (search.trim()) params.set("search", search.trim());
      if (category) params.set("category", category);

      const queryString = params.toString();
      router.replace(
        queryString ? `/all-facilities?${queryString}` : "/all-facilities",
        { scroll: false }
      );
    },
    [router]
  );

  const getFacilitiesUrl = useCallback((search, category) => {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

    if (!baseUrl) {
      throw new Error(
        "NEXT_PUBLIC_SERVER_URL is missing. Add your backend URL in Vercel Environment Variables."
      );
    }

    const url = new URL("/all-facilities", baseUrl);

    if (search.trim()) url.searchParams.set("search", search.trim());
    if (category) url.searchParams.set("category", category);

    return url.toString();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const loadFacilities = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(getFacilitiesUrl(searchText, selectedCategory), {
          signal: controller.signal,
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to load facilities");
        }

        setFacilities(Array.isArray(data) ? data : []);
        updateBrowserUrl(searchText, selectedCategory);
      } catch (err) {
        if (err.name !== "AbortError") {
          setFacilities([]);
          setError(err.message || "Something went wrong while loading facilities.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    const timer = setTimeout(loadFacilities, 350);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [getFacilitiesUrl, searchText, selectedCategory, updateBrowserUrl]);

  const handleClearFilters = () => {
    setSearchText("");
    setSelectedCategory("");
  };

  return (
    <section className="min-h-screen bg-[#f8f9fa] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1a1f2e] sm:text-4xl">
              All Facilities
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Find and book your perfect sports venue
            </p>
          </div>

          {(searchText || selectedCategory) && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="w-fit rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-[#2d6a4f] hover:text-[#2d6a4f]"
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_260px]">
          <SearchBox
            value={searchText}
            onChange={setSearchText}
            onSubmit={() => setSearchText(searchText.trim())}
            loading={loading}
          />

          <CategoryDropdown
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        <div className="mb-5 flex flex-col gap-1 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {loading
              ? "Loading facilities..."
              : `${facilities.length} facilit${facilities.length === 1 ? "y" : "ies"} found`}
          </p>

          {(searchText || selectedCategory) && (
            <p className="text-gray-400">
              {searchText && <span>Search: “{searchText}”</span>}
              {searchText && selectedCategory && <span> • </span>}
              {selectedCategory && <span>Category: {selectedCategory}</span>}
            </p>
          )}
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-80 animate-pulse rounded-2xl border border-gray-100 bg-white"
              />
            ))}
          </div>
        ) : facilities.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-white py-20 text-center text-gray-400">
            <p className="text-lg font-semibold text-gray-500">No facilities found</p>
            <p className="mt-1 text-sm">Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}