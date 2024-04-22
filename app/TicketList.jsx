import db from "../lib/firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Components
import TicketCard from "./TicketCard";

async function getDocuments(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push(doc.data());
    });
    return documents;
  } catch (error) {
    console.error("Error getting documents:", error);
  }
}

export default async function TicketList() {
  const allTickets = await getDocuments("tickets");

  return (
    <div className="flex flex-col gap-3">
      {allTickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          title={ticket.title}
          description={ticket.description}
          priorityLevel={ticket.priorityLevel}
        />
      ))}
    </div>
  );
}
