"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

// TODO: Implement the AddTicketButton component to add a ticket in backend
export default function AddTicketButton() {
  return (
    <Link href="/new-ticket">
      <Button>Add Ticket</Button>
    </Link>
  );
}
