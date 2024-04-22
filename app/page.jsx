// Components
import PageTitle from "./PageTitle";
import AddTicketButton from "./AddTicketButton";
import TicketList from "./TicketList";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4 m-auto w-3/5 pt-8">
        {/* Page Headers (Top)*/}
        <div className="flex justify-between">
          <PageTitle />
          <AddTicketButton />
        </div>
        {/* List of tickets (Bottom)*/}
        <TicketList />
      </div>
    </main>
  );
}
