"use client";

import listenForDocuments from "@/lib/firebase/firestore/getAllDocuments";
import { useEffect } from "react";

// Components
import TicketCard from "./TicketCard";
import Link from "next/link";
import { useState } from "react";

export default function TicketList() {
  const [allTickets, setAllTickets] = useState([]);

  useEffect(() => {
    const unsubscribe = listenForDocuments(
      "tickets",
      (ticketsFromFirestore) => {
        setAllTickets(ticketsFromFirestore);
      }
    );
    return () => unsubscribe();
  }, []);

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
