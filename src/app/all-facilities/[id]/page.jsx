import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import BookNowModal from "@/components/shared/BookNowModal";
import { authClient } from "@/lib/auth-client";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();

  const {
    image, name,
    facility_type,
    location,
    price_per_hour,
    capacity, available_slots,
    booking_count, description,
  } = data;

return (
    <div className="bg-[#f8f9fa] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <Image className="w-full h-72 lg:h-full object-cover" src={image} alt={name} width={600} height={500} />
          </div>

          <div className="lg:w-1/2 p-8 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-[#d8f3dc] text-[#2d6a4f] text-xs font-semibold rounded-full mb-3">{facility_type}</span>
              <h1 className="text-3xl font-extrabold text-[#1a1f2e]">{name}</h1>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                <CiLocationOn className="text-[#2d6a4f] text-base" /> {location}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Price", value: `$${price_per_hour}/hr` },
                { label: "Capacity", value: capacity },
                { label: "Available Slots", value: available_slots },
                { label: "Total Bookings", value: booking_count },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-50">
                  <p className="text-xs text-gray-400 mb-1">{label}</p>
                  <p className="font-bold text-[#1a1f2e]">{value}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">About</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>

            <BookNowModal data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
