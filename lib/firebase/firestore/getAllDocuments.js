import { onSnapshot, collection } from "firebase/firestore";
import db from "./firestore";

export default function listenForDocuments(collectionName, callback) {
  const colRef = collection(db, collectionName);

  const unsubscribe = onSnapshot(
    colRef,
    (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      callback(documents); // Call the provided callback with updated data
    },
    (error) => {
      console.error("Error getting documents:", error);
    }
  );

  // Function to unsubscribe from listener (optional)
  return unsubscribe;
}
