import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { auth, db, doc } from "~/firebase";
import { type User } from "~/types";

const useUser = () => {
  const [authUser, loadingLoggedInUser] = useAuthState(auth);
  const loggedInUserRef = doc(db, "users", authUser?.uid ?? "placeholder");
  const [userData, loadingData] = useDocumentData<User>(loggedInUserRef);
  const loading = loadingLoggedInUser || loadingData;

  return {
    loading,
    uid: userData?.uid,
    documents: userData?.documents,
  };
};

export default useUser;
