import {
  useAuthState,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import { auth } from "~/firebase";
import createNewUser from "~/library/createNewUser";

const useAuth = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signOut] = useSignOut(auth);

  if (user) return signOut;

  const signIn = async () => {
    const response = await signInWithGoogle();
    const signingUser = response?.user;
    await createNewUser(signingUser?.uid);
  };

  return signIn;
};

export default useAuth;
