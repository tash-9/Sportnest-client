import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const FacilityCard = ({ facility }) => {
  const {
    image,
    price_per_hour,
    location,
    facility_type,
    name,
    _id,
  } = facility;

  const imageSrc = image || "/assets/banner.jpg";

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          src={imageSrc}
          alt={name || "Sport facility"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-lg font-bold leading-tight text-[#1a1f2e]">
            {name}
          </h3>
          <span className="shrink-0 rounded-full bg-[#d8f3dc] px-2 py-0.5 text-xs font-semibold text-[#2d6a4f]">
            {facility_type}
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <CiLocationOn className="shrink-0 text-base" />
          <span className="truncate">{location}</span>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-gray-50 pt-2">
          <span className="text-lg font-bold text-[#2d6a4f]">
            Tk.{price_per_hour}
            <span className="text-xs font-normal text-gray-400">/hr</span>
          </span>

          <Link
            href={`/all-facilities/${_id}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#2d6a4f] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a1f2e]"
          >
            Book Now
            <FaArrowRightLong className="text-xs transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FacilityCard;