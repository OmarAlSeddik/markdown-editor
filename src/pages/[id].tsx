import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Document from "~/components/Document";
import useUser from "~/hooks/useUser";

const DirectPage: NextPage = () => {
  const router = useRouter();
  const { uid, loading, documents } = useUser();
  const documentId = parseInt(router.asPath.slice(1));

  useEffect(() => {
    if ((!loading && !uid) || (documents && !documents[documentId]))
      void router.replace("/");
  }, [documentId, documents, loading, router, uid]);

  return <Document />;
};

export default DirectPage;
