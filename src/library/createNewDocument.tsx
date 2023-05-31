import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase";
import { type Document } from "./types";

const createNewDocument = async (
  uid: string | null | undefined,
  document: Document
) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);
  if (docSnap.exists())
    void updateDoc(userDoc, {
      documents: [...docSnap.data().documents, document],
    });
};

export default createNewDocument;
