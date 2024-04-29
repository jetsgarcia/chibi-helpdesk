import getSingleDocument from "@/lib/firebase/firestore/getSingleDocument";

// Components
import Link from "next/link";
import EditButton from "@/components/tickets/EditButton";
import DeleteButton from "@/components/tickets/DeleteButton";

export default async function TicketDetails({ params }) {
  const [returnedData] = await getSingleDocument(params.id);

  return (
    <main className="m-auto w-3/5 pt-8">
      <Link href="/">&#x25c0; &nbsp; Back to tickets</Link>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-3xl text-primary font-semibold">
            {returnedData.title}
          </h1>
          <div className="flex gap-2">
            <EditButton ticketId={params.id} />
            <DeleteButton ticketId={params.id} />
          </div>
        </div>
        <p>{returnedData.description}</p>
      </div>
    </main>
  );
}
