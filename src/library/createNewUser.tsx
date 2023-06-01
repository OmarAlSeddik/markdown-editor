import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "~/firebase";

const createNewUser = async (uid: string | null | undefined) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);

  if (!docSnap.exists()) {
    await setDoc(userDoc, {
      uid,
      documents: {},
    });
  }
};

export default createNewUser;
