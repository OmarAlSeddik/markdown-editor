import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useAppContext } from "~/context/AppContext";

const Document = () => {
  const { navActive } = useAppContext();
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const contentArray = content.split("\n");
    const previewArray = [];
    for (const line of contentArray) {
      switch (line.split(" ")[0]) {
        case "#":
          previewArray.push(
            `<h1 className="text-h1 font-bold">${line
              .split(" ")
              .slice(1)
              .join(" ")}</h1>`
          );
          break;
        case "##":
          previewArray.push(
            `<h2 className="text-h2 font-light">${line
              .split(" ")
              .slice(1)
              .join(" ")}</h2>`
          );
          break;
        case "###":
          previewArray.push(
            `<h3 className="text-h3 font-bold">${line
              .split(" ")
              .slice(1)
              .join(" ")}</h3>`
          );
          break;
        case "####":
          previewArray.push(
            `<h4 className="text-h4 font-bold">${line
              .split(" ")
              .slice(1)
              .join(" ")}</h4>`
          );
          break;
        case "#####":
          previewArray.push(
            `<h5 className="text-h5 font-bold">${line
              .split(" ")
              .slice(1)
              .join(" ")}</h5>`
          );
          break;
        case "######":
          previewArray.push(
            `<h6 className="text-h6 font-bold text-primaryDark">${line
              .split(" ")
              .slice(1)
              .join(" ")}</h6>`
          );
          break;
        case "-":
          previewArray.push(`<li>${line.split(" ").slice(1).join(" ")}</li>`);
          break;
        case ">":
          previewArray.push(
            `<p className="rounded-[0.25rem] my-[1.25rem] dark:bg-c3 p-[1.5rem] border-l-4 border-primaryDark font-bold bg-c9">${line
              .split(" ")
              .slice(1)
              .join(" ")}
            </p>`
          );
          break;
        default:
          previewArray.push(`<p>${line}</p>`);
          break;
      }
    }
    setPreview(previewArray.join("\n"));
  }, [content]);

  return (
    <div
      className={`${
        navActive ? "ml-[15.625rem]" : "ml-0"
      } absolute inset-0 mt-[3.5rem] grid min-w-full grid-cols-2 grid-rows-document transition-all sm:mt-[4.5rem]`}
    >
      <div className="flex items-center border-r border-c8 bg-c9 px-[1rem] py-[0.75rem] font-medium tracking-[2px] text-c6 dark:border-c5 dark:bg-c2 dark:text-c7">
        MARKDOWN
      </div>
      <div className="flex items-center bg-c9 px-[1rem] py-[0.75rem] font-medium tracking-[2px] text-c6 dark:bg-c2 dark:text-c7">
        PREVIEW
      </div>
      <div className="border-r border-c8 px-[1rem] py-[0.5rem] text-c4 dark:border-c5 dark:bg-c1 dark:text-c7">
        <textarea
          name="markdown"
          id="markdown"
          className="h-full w-full resize-none bg-inherit font-mono caret-primaryDark outline-none"
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <div className="px-[1rem] py-[0.5rem] font-serif text-c4 dark:bg-c1 dark:text-c7">
        {parse(preview)}
      </div>
    </div>
  );
};

export default Document;
