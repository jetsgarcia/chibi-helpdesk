import getAllDocuments from "@/lib/firebase/firestore/getAllDocuments";

// Components
import TicketCard from "./TicketCard";
import Link from "next/link";

export default async function TicketList() {
  const allTickets = await getAllDocuments("tickets");

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
