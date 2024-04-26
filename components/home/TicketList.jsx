"use client";

import listenForDocuments from "@/lib/firebase/firestore/getAllDocuments";

// Components
import TicketCard from "./TicketCard";
import Link from "next/link";
import { useState } from "react";

export default function TicketList() {
  const [allTickets, setAllTickets] = useState({});
  const unsubscribe = listenForDocuments("tickets", (allTickets) => {
    setAllTickets(allTickets);
  });

  return (
    <div className="flex flex-col gap-3">
      {allTickets.map((ticket) => (
        <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
          <TicketCard
            title={ticket.title}
            description={ticket.description}
            priorityLevel={ticket.priorityLevel}
          />
        </Link>
      ))}
    </div>
  );
}
