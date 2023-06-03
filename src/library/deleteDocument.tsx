import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase";
import { type User } from "./types";

const deleteDocument = async (
  uid: string | null | undefined,
  documentId: number
) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);
  const userData = docSnap.data() as User;

  delete userData.documents[documentId];

  if (docSnap.exists()) {
    await updateDoc(userDoc, {
      documents: userData.documents,
    });
  }
};

export default deleteDocument;
