import db from "./firestore";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export default async function addTicket(title, details, priority) {
  // Add a new ticket to the database
  const docRef = await addDoc(collection(db, "tickets"), {
    description: details,
    title: title,
    priorityLevel: priority,
  });

  // This is to also add the id to the field so it can be used as a key to components
  const currentDoc = doc(db, "tickets", docRef.id);
  await updateDoc(currentDoc, {
    id: docRef.id,
  });
}
