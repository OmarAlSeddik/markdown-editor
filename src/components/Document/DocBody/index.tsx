import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "~/context/AppContext";
import useUser from "~/hooks/useUser";
import welcomeDocument from "~/library/welcomeDocument";
import InputSkeleton from "./InputSkeleton";
import PreviewContent from "./PreviewContent";
import PreviewSkeleton from "./PreviewSkeleton";

const DocBody = () => {
  const {
    previewActive,
    documentContent,
    changeDocumentContent,
    toggleSaved,
    isMobile,
    navActive,
  } = useAppContext();
  const { documents, loading } = useUser();
  const router = useRouter();
  const documentId = parseInt(router.asPath.slice(1));

  useEffect(() => {
    if (router.asPath === "/") changeDocumentContent(welcomeDocument.content);
    else if (documents && documents[documentId])
      changeDocumentContent(documents[documentId]?.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentId, documents, router.asPath]);

  return (
    <>
      <div
        className={`col-span-full text-c4 dark:border-c5 dark:bg-c1 dark:text-c7 lg:col-span-1 lg:border-r lg:border-c8
  ${previewActive ? "hidden" : ""}`}
      >
        {loading ? (
          <InputSkeleton />
        ) : (
          <textarea
            autoFocus
            name="markdown"
            id="markdown"
            className={`lightScrollbar dark:darkScrollbar h-full w-full resize-none
          bg-inherit px-[1rem] py-[0.5rem] font-mono caret-primaryDark outline-none
          ${isMobile && navActive ? "pointer-events-none" : ""}`}
            onChange={(event) => {
              changeDocumentContent(event.target.value);
              toggleSaved(false);
            }}
            value={documentContent}
            disabled={isMobile && navActive}
          />
        )}
      </div>
      <div
        className={` col-span-full select-text p-[1.25rem] font-serif text-c6 dark:bg-c1 dark:text-c7
        ${previewActive ? "col-span-full" : "hidden lg:col-span-1 lg:block"}
        ${loading ? "overflow-hidden" : "lightScrollbar dark:darkScrollbar"}
        ${isMobile && navActive ? "pointer-events-none" : ""}`}
      >
        {loading ? (
          <PreviewSkeleton />
        ) : (
          <PreviewContent input={documentContent} />
        )}
      </div>
    </>
  );
};

export default DocBody;
