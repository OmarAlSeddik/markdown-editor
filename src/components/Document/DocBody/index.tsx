import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "~/components/Loading";
import { useAppContext } from "~/context/AppContext";
import useUser from "~/hooks/useUser";
import welcomeDocument from "~/library/welcomeDocument";
import PreviewContent from "./PreviewContent";

const DocBody = () => {
  const { previewActive, documentContent, changeDocumentContent } =
    useAppContext();
  const { documents, loading } = useUser();
  const router = useRouter();
  const documentId = parseInt(router.asPath.slice(1));

  useEffect(() => {
    if (router.asPath === "/") changeDocumentContent(welcomeDocument.content);
    else if (documents && documents[documentId])
      changeDocumentContent(documents[documentId].content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentId, router.asPath, documents]);

  if (loading) return <Loading />;

  return (
    <>
      <div
        className={`col-span-full text-c4 dark:border-c5 dark:bg-c1 dark:text-c7 lg:col-span-1 lg:border-r lg:border-c8
  ${previewActive ? "hidden" : ""}`}
      >
        <textarea
          autoFocus
          name="markdown"
          id="markdown"
          className="lightScrollbar dark:darkScrollbar h-full w-full resize-none bg-inherit px-[1rem] py-[0.5rem] font-mono caret-primaryDark outline-none"
          onChange={(event) => changeDocumentContent(event.target.value)}
          value={documentContent}
        />
      </div>
      <div
        className={`lightScrollbar dark:darkScrollbar col-span-full select-text p-[1.25rem] font-serif text-c6 dark:bg-c1 dark:text-c7 ${
          previewActive ? "col-span-full" : "hidden lg:col-span-1 lg:block"
        }`}
      >
        <PreviewContent input={documentContent} />
      </div>
    </>
  );
};

export default DocBody;
