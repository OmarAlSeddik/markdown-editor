import Image from "next/image";
import { useRouter } from "next/router";
import { useAppContext } from "~/context/AppContext";
import useUser from "~/hooks/useUser";
import deleteDocument from "~/library/deleteDocument";

const DeleteDocumentButton = () => {
  const { toggleSaved } = useAppContext();
  const { uid } = useUser();
  const router = useRouter();
  const documentId = parseInt(router.asPath.slice(1));

  return (
    <button
      className="group relative ml-auto h-[1.25rem] w-[1.125rem]"
      disabled={!uid}
      onClick={() => {
        void deleteDocument(uid, documentId);
        void router.replace("/");
        toggleSaved(false);
      }}
    >
      <Image
        src="svgs/icon-delete.svg"
        alt="Delete"
        fill
        className="mouseHover:group-hover:iconHover
    mouseHover:group-disabled:group-hover:iconHoverDisabled transition-all"
      />
    </button>
  );
};

export default DeleteDocumentButton;
