import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "~/components/Loading";
import { useAppContext } from "~/context/AppContext";
import useUser from "~/hooks/useUser";
import welcomeDocument from "~/library/welcomeDocument";
import PreviewContent from "./PreviewContent";

const DocBody = () => {
  const { previewActive } = useAppContext();
  const { documents, loading } = useUser();
  const router = useRouter();
  const [input, setInput] = useState(welcomeDocument.content);

  useEffect(() => {
    if (documents) {
      const documentId = parseInt(router.asPath.slice(1));
      if (documents[documentId]) setInput(documents[documentId].content);
    }
  }, [documents, router.asPath]);

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
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
      </div>
      <div
        className={`lightScrollbar dark:darkScrollbar col-span-full select-text p-[1.25rem] font-serif text-c6 dark:bg-c1 dark:text-c7 ${
          previewActive ? "col-span-full" : "hidden lg:col-span-1 lg:block"
        }`}
      >
        <PreviewContent input={input} />
      </div>
    </>
  );
};

export default DocBody;
