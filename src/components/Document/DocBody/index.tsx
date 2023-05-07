import { useState } from "react";
import { useAppContext } from "~/context/AppContext";
import PreviewContent from "./PreviewContent";

const DocBody = () => {
  const { previewActive } = useAppContext();
  const [input, setInput] = useState("");

  return (
    <>
      <div
        className={`col-span-full text-c4 dark:border-c5 dark:bg-c1 dark:text-c7 lg:col-span-1 lg:border-r lg:border-c8
  ${previewActive ? "hidden" : ""}`}
      >
        <textarea
          name="markdown"
          id="markdown"
          className="lightScrollbar dark:darkScrollbar h-full w-full resize-none bg-inherit px-[1rem] py-[0.5rem] font-mono caret-primaryDark outline-none"
          onChange={(event) => setInput(event.target.value)}
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
