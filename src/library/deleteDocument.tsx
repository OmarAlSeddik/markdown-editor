import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase";

const deleteDocument = async (
  uid: string | null | undefined,
  documentId: number
) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);
  const {
    [documentId]: {},
    ...newDocuments
  } = docSnap.data().documents;

  if (docSnap.exists()) {
    void updateDoc(userDoc, {
      documents: newDocuments,
    });
  }
};

export default deleteDocument;
