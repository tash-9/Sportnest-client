"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

const BookingDeleteModal = ({ data }) => {
  const { facility_name, _id } = data;

  const handleDelete = async () => {
    // Token fetched at delete time
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",         // ← typo fixed
        authorization: `Bearer ${tokenData.token}`, // ← was missing
      },
    });

    if (!res.ok) {
      toast.error("Failed to cancel booking.");
      return;
    }

    toast.success("Booking Cancelled.");  // ← was toast.error (wrong)
    window.location.reload();
  };

  return (
    <div>
      <AlertDialog>
        <Button className="text-red-500 border rounded-lg border-red-500" variant="outline">
          <BiTrash /> Cancel  {/* ← typo fixed from "Cancle" */}
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Cancel this booking?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently cancel your booking for <strong>{facility_name}</strong>. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">Go Back</Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Confirm Cancel
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default BookingDeleteModal;