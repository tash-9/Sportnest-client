"use client";
import { authClient } from "@/lib/auth-client";
import { Input, Label, Modal, Surface, TextField } from "@heroui/react";
//import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import Link from "next/link";

const BookNowModal = ({ data }) => {
  const [hours, setHours] = useState(1);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (!mounted || isPending) return null;
  const user = session?.user;
  const { _id, price_per_hour, name, image, available_slots } = data;
  const totalPrice = price_per_hour * hours;
  

  if (!user) {
    return (
      <Link href="/login">
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2d6a4f] text-white px-5 py-3 font-semibold hover:bg-[#40916c] transition-colors cursor-pointer border-none">
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
    const total_price = price_per_hour * Number(formHours);
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
      hours: Number(formHours),
      image,
      total_price,
      status: "pending",
    };
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
  };

  return (
    <div>
      <Modal>
        <Modal.Trigger>
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#2d6a4f] text-white px-5 py-3 font-semibold hover:bg-[#40916c] transition-colors cursor-pointer border-none">
            <MdOutlineBookmarkAdd /> Book Now
          </button>
        </Modal.Trigger>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md mt-10">
              <Modal.CloseTrigger />
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <TextField defaultValue={name} className="w-full" name="facilityName">
                      <Label>Facility Name</Label>
                      <Input required placeholder="Enter facility name" />
                    </TextField>

                    <TextField className="w-full" name="bookingDate">
                      <Label>Booking Date</Label>
                      <Input required type="date" />
                    </TextField>

                    {/* name only on select, removed from TextField wrapper */}
                    <TextField className="w-full">
                      <Label>Time Slot</Label>
                      <select
                        name="timeSlot"
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select a time slot</option>
                        {(Array.isArray(available_slots) ? available_slots : 
                        available_slots?.split(",") ?? []).map((slot, i) => (
                          <option key={i} value={slot.trim()}>{slot.trim()}</option>)
                        )}
                      </select>
                    </TextField>

                    <TextField className="w-full" name="hours">
                      <Label>Hours</Label>
                      <Input
                        required type="number" min="1" value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                        placeholder="Enter hours"
                      />
                    </TextField>

                    <div className="p-4 rounded-xl bg-gray-100 border">
                      <p className="text-sm text-gray-500">Total Price</p>
                      <h2 className="text-2xl font-bold text-green-600">${totalPrice}</h2>
                    </div>

                    <Modal.Footer>
                      <button type="submit"
                      className="w-full rounded-lg bg-[#1a1f2e] hover:bg-[#2d6a4f] text-white px-5 py-3 font-semibold transition-colors cursor-pointer border-none">
                        Confirm Booking
                      </button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default BookNowModal;