import db from "./firestore";
import { collection, getDocs } from "firebase/firestore";

export default async function getAllDocuments(collectionName) {
  try {
    const documents = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      documents.push(doc.data());
    });
    return documents;
  } catch (error) {
    console.error("Error getting documents:", error);
  }
}
