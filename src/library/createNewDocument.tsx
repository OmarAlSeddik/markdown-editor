import dayjs from "dayjs";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase";
import { type User } from "./types";

const createNewDocument = async (uid: string | null | undefined) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);
  const userData = docSnap.data() as User;

  const newDocument = {
    id: Date.now(),
    dateNum: Date.now(),
    dateStr: dayjs().format("DD MMMM YYYY h:mm A"),
    name: "Untitled",
    content: `# Edit Me!`,
  };

  if (docSnap.exists()) {
    await updateDoc(userDoc, {
      documents: { ...userData.documents, [newDocument.id]: newDocument },
    });
  }
};

export default createNewDocument;
