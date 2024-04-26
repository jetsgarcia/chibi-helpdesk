import db from "./firestore";
import { doc, getDoc } from "firebase/firestore";

export default async function getSingleDocument(id) {
  let data = [];
  const docRef = doc(db, "tickets", id);
  const docSnap = await getDoc(docRef);
  data.push(docSnap.data());
  return data;
}
