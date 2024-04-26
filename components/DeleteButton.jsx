"use client";

import { doc, deleteDoc } from "firebase/firestore";
import db from "../lib/firebase/firestore/firestore";

import { Button } from "./ui/button";
import DeleteIcon from "./DeleteIcon";
import { useRouter } from "next/navigation";

export default function DeleteTicket({ ticketId }) {
  const router = useRouter();
  const docRef = doc(db, "tickets", ticketId);

  function deleteTicket() {
    deleteDoc(docRef);
    router.push("/");
  }

  return (
    <Button variant="outline" size="icon" onClick={deleteTicket}>
      <DeleteIcon />
    </Button>
  );
}
