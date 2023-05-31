import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "~/firebase";
import welcomeDocument from "./welcomeDocument";

const createNewUser = async (uid: string | null | undefined) => {
  if (!uid) return;
  const userDoc = doc(db, "users", uid);
  const docSnap = await getDoc(userDoc);

  if (!docSnap.exists()) {
    void setDoc(userDoc, {
      uid,
      documents: {},
    });
  }
};

export default createNewUser;
