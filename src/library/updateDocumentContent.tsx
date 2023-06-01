import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase";

const updateDocumentContent = async (
  uid: string | null | undefined,
  documentId: number,
  newContent: string
) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);
  console.log("updated!");

  if (docSnap.exists()) {
    await updateDoc(userDoc, {
      documents: {
        ...docSnap.data().documents,
        [documentId]: {
          ...docSnap.data().documents[documentId],
          content: newContent,
          dateNum: Date.now(),
        },
      },
    });
  }
};

export default updateDocumentContent;
