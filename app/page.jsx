import PageTitle from "./PageTitle";
import AddTicketButton from "./AddTicketButton";
import TicketCard from "./TicketCard";

export default function Home() {
  return (
    <main>
      <div className="m-auto w-3/5 pt-4">
        {/* Page Headers */}
        <div className="flex justify-between">
          <PageTitle />
          <AddTicketButton />
        </div>
        {/* Ticket list */}
        <div></div>
      </div>
    </main>
  );
}
