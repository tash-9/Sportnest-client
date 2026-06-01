import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import BookingDeleteModal from "./BookingDeleteModal";
import { IoBookmarksOutline } from "react-icons/io5";
import { Clock } from "@gravity-ui/icons";

const statusStyles = {
  confirmed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-600",
  pending: "bg-amber-100 text-amber-700",
};

const BookingCard = ({ item }) => {
  const { image, status, time_slot, total_price, booking_date, facility_name } = item;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
      <div className="md:w-48 shrink-0">
        <Image
          className="w-full h-48 md:h-full object-cover"
          src={image}
          alt={facility_name}
          width={200}
          height={200}
        />
      </div>

      <div className="flex-1 p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-[#1a1f2e] text-xl">{facility_name}</h3>
          <span className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[status] || statusStyles.pending}`}>
            <Clock width={11} /> {status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <IoBookmarksOutline className="text-[#2d6a4f]" />
            <span>{booking_date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MdAccessTime className="text-[#2d6a4f]" />
            <span>{time_slot}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="text-[#2d6a4f] font-bold text-xl">Tk.{total_price}</span>
          <BookingDeleteModal data={item} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;