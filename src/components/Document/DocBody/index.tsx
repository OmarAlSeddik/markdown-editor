import { useState } from "react";
import { useAppContext } from "~/context/AppContext";
import PreviewContent from "./PreviewContent";

const DocBody = () => {
  const { previewActive } = useAppContext();
  const [input, setInput] = useState("");

  return (
    <>
      <div
        className={`border-r border-c8 px-[1rem] py-[0.5rem] text-c4 dark:border-c5 dark:bg-c1 dark:text-c7
  ${previewActive ? "hidden" : ""}`}
      >
        <textarea
          name="markdown"
          id="markdown"
          className="h-full w-full resize-none bg-inherit font-mono caret-primaryDark outline-none"
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div
        className={`select-text py-[1.25rem] font-serif text-c6 dark:bg-c1 dark:text-c7 ${
          previewActive ? "col-span-full" : "col-span-1"
        }`}
      >
        <PreviewContent input={input} />
      </div>
    </>
  );
};

export default DocBody;
