"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddTicketButton() {
  return (
    <Link href="/new-ticket">
      <Button>Add Ticket</Button>
    </Link>
  );
}
