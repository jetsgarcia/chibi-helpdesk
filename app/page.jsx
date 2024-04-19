import PageTitle from "./PageTitle";
import AddTicketButton from "./AddTicketButton";
import TicketCard from "./TicketCard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4 m-auto w-3/5 pt-8">
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
