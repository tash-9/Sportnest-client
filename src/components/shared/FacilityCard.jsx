import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
//import { MdSportsVolleyball } from "react-icons/md";

const FacilityCard = ({ facility }) => {
  const { image, price_per_hour, location, facility_type, name, _id } = facility;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="overflow-hidden h-48">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={image}
          alt={name}
          width={400}
          height={200}
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-[#1a1f2e] text-lg leading-tight">{name}</h3>
          <span className="shrink-0 px-2 py-0.5 bg-[#d8f3dc] text-[#2d6a4f] text-xs font-semibold rounded-full">
            {facility_type}
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <CiLocationOn className="text-base" /> {location}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <span className="text-[#2d6a4f] font-bold text-lg">
            ${price_per_hour}<span className="text-gray-400 text-xs font-normal">/hr</span>
          </span>
          <Link href={`/all-facilities/${_id}`}>
            <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1f2e] hover:bg-[#2d6a4f] text-white text-sm font-semibold rounded-lg transition-colors group/btn">
              Book Now
              <FaArrowRightLong className="group-hover/btn:translate-x-0.5 transition-transform text-xs" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;