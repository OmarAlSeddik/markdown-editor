import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "~/context/AppContext";
import useUser from "~/hooks/useUser";
import updateDocumentContent from "~/library/updateDocumentContent";

const SaveChangesButton = () => {
  const { documentContent, saved, toggleSaved } = useAppContext();
  const { uid } = useUser();
  const router = useRouter();
  const documentId = parseInt(router.asPath.slice(1));

  useEffect(() => {
    toggleSaved(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <button
      className={`ml-[1.5rem] flex h-[2.5rem] w-[2.5rem] items-center justify-center
      gap-[0.5rem] rounded-[0.25rem] bg-primaryDark text-medium text-white
      transition-all disabled:bg-c1 sm:w-[9.5rem]
      mouseHover:hover:bg-primaryLight mouseHover:disabled:hover:bg-c1
      ${saved ? "bg-green-500 mouseHover:hover:bg-green-400" : ""}`}
      onClick={() => {
        void updateDocumentContent(uid, documentId, documentContent);
        toggleSaved(true);
      }}
      disabled={router.route === "/"}
    >
      <div className="relative h-[1rem] w-[1rem]">
        <Image src="svgs/icon-save.svg" alt="Save Changes" fill />
      </div>
      <p className="hidden sm:block">{saved ? "Saved!" : "Save Changes"}</p>
    </button>
  );
};

export default SaveChangesButton;
