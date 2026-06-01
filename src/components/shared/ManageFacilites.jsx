import Image from "next/image";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { MdSportsVolleyball } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BiTime } from "react-icons/bi";

const ManageFacility = ({ item }) => {
  const { image, price_per_hour, location, facility_type, available_slots, name } = item;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
      <div className="md:w-48 shrink-0">
        <Image
          className="w-full h-48 md:h-full object-cover"
          src={image}
          alt={name}
          width={200}
          height={200}
        />
      </div>

      <div className="flex-1 p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-[#1a1f2e] text-xl">{name}</h3>
          <div className="flex gap-2 shrink-0">
            <EditModal data={item} />
            <DeleteModal data={item} />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
          <span className="flex items-center gap-1"><MdSportsVolleyball className="text-[#2d6a4f]" /> {facility_type}</span>
          <span className="flex items-center gap-1"><CiLocationOn className="text-[#2d6a4f]" /> {location}</span>
          <span className="flex items-center gap-1"><BiTime className="text-[#2d6a4f]" /> {available_slots}</span>
        </div>

        <div className="pt-3 border-t border-gray-50">
          <span className="text-[#2d6a4f] font-bold text-xl">Tk.{price_per_hour}<span className="text-gray-400 text-xs font-normal">/hr</span></span>
        </div>
      </div>
    </div>
  );
};

export default ManageFacility;