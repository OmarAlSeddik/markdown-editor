import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "~/firebase";

const createNewUser = async (uid: string | null | undefined) => {
  if (!uid) return;
  const id = uid.slice(0, 10);
  const userRef = doc(db, "users", id);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    void setDoc(userRef, {
      uid,
    });
  }
};

export default createNewUser;
