"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

const DeleteModal = ({ data }) => {
  const { name, _id } = data;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",         // ← typo fixed
        authorization: `Bearer ${tokenData.token}`, // ← was missing
      },
    });

    if (!res.ok) {
      toast.error("Failed to delete facility.");
      return;
    }

    toast.success("Deleted Successfully!");  // ← was toast.error + typo fixed
    window.location.reload();
  };

  return (
    <div>
      <AlertDialog>
        <Button className="text-red-500 border rounded-lg border-red-500" variant="outline">
          <BiTrash /> Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete facility permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{name}</strong> and all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">Cancel</Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModal;