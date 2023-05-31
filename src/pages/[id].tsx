import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Document from "~/components/Document";
import Loading from "~/components/Loading";
import { auth } from "~/firebase";

const DirectPage: NextPage = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) void router.replace("/auth");
  }, [loading, router, user]);

  if (loading) return <Loading />;

  return <Document />;
};

export default DirectPage;
