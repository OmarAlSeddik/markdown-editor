import dayjs from "dayjs";
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
          dateNum: Date.now(),
          dateStr: dayjs().format("DD MMMM YYYY h:mm A"),
        },
      },
    });
  }
};

export default updateDocumentName;
