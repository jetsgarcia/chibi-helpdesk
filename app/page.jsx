// Components
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TicketList from "../components/home/TicketList";
import PageTitle from "@/components/home/PageTitle";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4 m-auto w-3/5 pt-8">
        {/* For page title */}
        <div className="flex justify-between">
          <PageTitle />
          <Link href="/new-ticket">
            <Button>Add Ticket</Button>
          </Link>
        </div>
        {/* For showing the list of open tickets */}
        <TicketList />
      </div>
    </main>
  );
}
