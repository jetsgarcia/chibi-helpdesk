import PageTitle from "./PageTitle";
import AddTicketButton from "./AddTicketButton";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between m-auto w-3/5 pt-4">
        <PageTitle />
        <AddTicketButton />
      </div>
    </main>
  );
}
