import { doc, getDoc } from "firebase/firestore";
import db from "../../../lib/firebase/firestore";

// Components
import Link from "next/link";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";

export default async function TicketDetails({ params }) {
  const docRef = doc(db, "tickets", params.id);
  const docSnap = await getDoc(docRef);

  return (
    <main className="m-auto w-3/5 pt-8">
      <Link href="/">&#x25c0; &nbsp; Back to tickets</Link>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-3xl text-primary font-semibold">
            {docSnap.data().title}
          </h1>
          <div className="flex gap-2">
            <EditButton />
            <DeleteButton ticketId={params.id} />
          </div>
        </div>
        <p>{docSnap.data().description}</p>
      </div>
    </main>
  );
}
