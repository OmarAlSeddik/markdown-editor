import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase";

const updateDocumentName = async (
  uid: string | null | undefined,
  documentId: number,
  newName: string
) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);

  if (docSnap.exists()) {
    await updateDoc(userDoc, {
      documents: {
        ...docSnap.data().documents,
        [documentId]: {
          ...docSnap.data().documents[documentId],
          name: newName,
        },
      },
    });
  }
};

export default updateDocumentName;
