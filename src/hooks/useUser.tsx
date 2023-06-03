import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { auth, db, doc } from "~/firebase";
import { type User } from "~/library/types";

const useUser = () => {
  const [authUser, loadingLoggedInUser] = useAuthState(auth);
  const loggedInUserRef = doc(db, "users", authUser?.uid ?? "placeholder");
  const [userData, loadingData] = useDocumentData(loggedInUserRef);
  const loading = loadingLoggedInUser || loadingData;
  const user = userData as User;

  return {
    loading,
    uid: user?.uid,
    documents: user?.documents,
  };
};

export default useUser;
