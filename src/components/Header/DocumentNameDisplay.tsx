import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "~/context/AppContext";
import useUser from "~/hooks/useUser";
import updateDocumentName from "~/library/updateDocumentName";
import welcomeDocument from "~/library/welcomeDocument";
import Loading from "../Loading";

const DocumentNameDisplay = () => {
  const { uid, documents, loading } = useUser();
  const { isMobile } = useAppContext();
  const router = useRouter();
  const [inputActive, setInputActive] = useState(false);
  const [documentName, setDocumentName] = useState(welcomeDocument.name);
  const toggleInput = () => setInputActive((prev) => !prev);

  useEffect(() => {
    if (documents) {
      const documentId = parseInt(router.asPath.slice(1));
      if (documents[documentId]) setDocumentName(documents[documentId].name);
    }
  }, [documents, router.asPath]);

  useEffect(() => {
    if (router.route === "/") setDocumentName("Welcome");
  }, [router.route]);

  if (loading) return <Loading />;

  const input =
    inputActive && router.route !== "/" ? (
      <input
        type="text"
        autoFocus
        onBlur={toggleInput}
        className="border-b-[1px] bg-c3 text-medium text-white caret-primaryDark outline-none"
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (
            event.key === "Enter" &&
            (event.target as HTMLInputElement).value
          ) {
            toggleInput();
            setDocumentName((event.target as HTMLInputElement).value);
            const documentId = parseInt(router.asPath.slice(1));
            void updateDocumentName(uid, documents[documentId], documentName);
          }
        }}
      />
    ) : (
      <h2
        className={`cursor-pointer text-medium text-white transition-all ${
          router.route !== "/" ? "mouseHover:hover:text-primaryDark" : ""
        }`}
        onClick={toggleInput}
      >
        {isMobile
          ? documentName.length > 22
            ? documentName.slice(0, 20) + "..."
            : documentName
          : documentName.length > 52
          ? documentName.slice(0, 50) + "..."
          : documentName}
      </h2>
    );

  return (
    <>
      <div className="relative hidden h-[0.75rem] w-[8.125rem] lg:block">
        <Image src="svgs/logo.svg" alt="Logo" fill />
      </div>
      <div className="mx-[1.5rem] hidden h-full w-[1px] bg-c5 lg:block" />
      <div className="ml-[0.5rem] flex h-[2rem] items-center gap-[1rem] sm:ml-0">
        <div className="relative h-[1rem] w-[0.875rem]">
          <Image src="svgs/icon-document.svg" alt="Document" fill />
        </div>
        <div className="flex w-[10rem] flex-col sm:w-[25rem]">
          <h2 className="hidden text-small font-light text-c7 dark:text-c7 sm:block">
            Document Name
          </h2>
          {input}
        </div>
      </div>
    </>
  );
};

export default DocumentNameDisplay;
