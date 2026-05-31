import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import BookingCard from "@/components/shared/BookingCard";

const MyBookingsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
    cache: "no-store",
  });

  const filterData = await res.json();

return (
    <div className="bg-[#f8f9fa] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-[#1a1f2e]">My Bookings</h1>
          <p className="text-gray-500 mt-1 text-sm">{filterData.length} booking{filterData.length !== 1 ? "s" : ""} found</p>
        </div>

        {filterData.length ? (
          <div className="flex flex-col gap-4">
            {filterData.map(item => <BookingCard key={item._id} item={item} />)}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <p className="text-lg font-semibold text-gray-700">No bookings yet</p>
            <p className="text-sm text-gray-400 mt-1">Start by booking your first venue</p>
            <Link href="/all-facilities">
              <button className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#2d6a4f] text-white text-sm font-semibold rounded-lg hover:bg-[#40916c] transition-colors">
                Browse Facilities <FaArrowRightLong />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;