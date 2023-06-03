import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "~/context/AppContext";
import useUser from "~/hooks/useUser";
import updateDocumentContent from "~/library/updateDocumentContent";
import updateDocumentName from "~/library/updateDocumentName";

const SaveChangesButton = () => {
  const { documentContent, saved, toggleSaved, documentName } = useAppContext();
  const { uid } = useUser();
  const router = useRouter();
  const documentId = parseInt(router.asPath.slice(1));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    toggleSaved(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <button
      className={`ml-[1.5rem] flex h-[2.5rem] w-[2.5rem] items-center justify-center
      gap-[0.5rem] rounded-[0.25rem] text-medium text-white
      transition-all sm:w-[9.5rem] 
      ${
        saved
          ? "bg-green-500"
          : "bg-primaryDark disabled:bg-c1 mouseHover:hover:bg-primaryLight mouseHover:disabled:hover:bg-c1"
      }`}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={async () => {
        setLoading(true);
        await updateDocumentContent(uid, documentId, documentContent);
        await updateDocumentName(uid, documentId, documentName);
        toggleSaved(true);
        setLoading(false);
      }}
      disabled={router.route === "/" || loading || saved}
    >
      <div className="relative h-[1rem] w-[1rem]">
        <Image src="svgs/icon-save.svg" alt="Save Changes" fill />
      </div>
      <p className="hidden sm:block">
        {loading ? "Loading..." : saved ? "Saved!" : "Save Changes"}
      </p>
    </button>
  );
};

export default SaveChangesButton;
