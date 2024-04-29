"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import EditIcon from "./EditIcon";

export default function EditButton({ ticketId }) {
  const router = useRouter();

  function handleEditClick() {
    router.push(`/edit-ticket/${ticketId}`);
  }

  return (
    <Button variant="outline" size="icon" onClick={handleEditClick}>
      <EditIcon />
    </Button>
  );
}
