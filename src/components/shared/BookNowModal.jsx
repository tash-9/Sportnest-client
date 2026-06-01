"use client";

import { authClient } from "@/lib/auth-client";
import { Modal } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const inputClass =
  "w-full h-11 sm:h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm sm:text-base text-gray-800 shadow-sm outline-none transition focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/20";

const labelClass = "text-sm sm:text-base font-semibold text-[#1a1f2e]";

const BookNowModal = ({ data }) => {
  const [hours, setHours] = useState(1);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const user = session?.user;

  const {
    _id,
    price_per_hour = 0,
    name = "",
    image = "",
    available_slots,
  } = data || {};

  const slots = useMemo(() => {
    if (Array.isArray(available_slots)) {
      return available_slots.map((slot) => String(slot).trim()).filter(Boolean);
    }

    if (typeof available_slots === "string") {
      return available_slots
        .split(",")
        .map((slot) => slot.trim())
        .filter(Boolean);
    }

    return [];
  }, [available_slots]);

  const totalPrice = Number(price_per_hour || 0) * Number(hours || 1);

  if (!mounted || isPending) return null;

  if (!user) {
    return (
      <Link href="/login">
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2d6a4f] hover:bg-[#1a1f2e] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#40916c]">
          <MdOutlineBookmarkAdd /> Book Now
        </button>
      </Link>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!(form instanceof HTMLFormElement)) {
      toast.error("Booking form error. Please try again.");
      return;
    }

    const formData = new FormData(form);
    const formFields = Object.fromEntries(formData.entries());
    const { bookingDate, timeSlot, hours: formHours, facilityName } = formFields;

    const bookingHours = Math.max(1, Number(formHours || 1));
    const total_price = Number(price_per_hour || 0) * bookingHours;

    const { data: tokenData } = await authClient.token();

    if (!tokenData?.token) {
      toast.error("Authentication failed. Please login again.");
      return;
    }

    const bookingData = {
      facility_id: _id,
      facility_name: facilityName,
      user_email: user.email,
      booking_date: bookingDate,
      time_slot: timeSlot,
      hours: bookingHours,
      image,
      total_price,
      status: "pending",
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) {
        toast.error("Booking failed. Please try again.");
        return;
      }

      toast.success("Booking Successful!");
      router.push("/my-bookings");
    } catch (error) {
      console.error(error);
      toast.error("Booking failed. Please check your connection.");
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2d6a4f] hover:bg-[#1a1f2e] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#40916c]">
          <MdOutlineBookmarkAdd /> Book Now
        </button>
      </Modal.Trigger>

      <Modal.Backdrop className="fixed inset-0 overflow-y-auto px-3 py-3 sm:px-4 sm:py-6">
        <Modal.Container placement="auto" className="min-h-full items-center justify-center">
          <Modal.Dialog className="relative my-auto w-full max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-3xl bg-white shadow-2xl sm:max-w-lg max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)]">
            <Modal.CloseTrigger />

            <Modal.Body className="max-h-[calc(100dvh-1.5rem)] overflow-y-auto p-4 pr-4 sm:max-h-[calc(100dvh-3rem)] sm:p-6">
              <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="facilityName" className={labelClass}>
                    Facility Name
                  </label>
                  <input
                    id="facilityName"
                    name="facilityName"
                    defaultValue={name}
                    required
                    readOnly
                    className={`${inputClass} bg-gray-50`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="bookingDate" className={labelClass}>
                    Booking Date
                  </label>
                  <input
                    id="bookingDate"
                    name="bookingDate"
                    type="date"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="timeSlot" className={labelClass}>
                    Time Slot
                  </label>
                  <select id="timeSlot" name="timeSlot" required className={inputClass}>
                    <option value="">Select a time slot</option>
                    {slots.map((slot, index) => (
                      <option key={`${slot}-${index}`} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="hours" className={labelClass}>
                    Hours
                  </label>
                  <input
                    id="hours"
                    name="hours"
                    type="number"
                    min="1"
                    required
                    value={hours}
                    onChange={(e) => setHours(Math.max(1, Number(e.target.value || 1)))}
                    className={inputClass}
                    placeholder="Enter hours"
                  />
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
                  <p className="text-sm sm:text-base text-gray-500">Total Price</p>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-green-600">
                    ${totalPrice}
                  </h2>
                </div>

                <div className="sticky bottom-0 -mx-4 bg-white px-4 pb-1 pt-2 sm:-mx-6 sm:px-6">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#1a1f2e] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#2d6a4f]"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookNowModal;