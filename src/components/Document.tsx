import { useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useAppContext } from "~/context/AppContext";

const Document = () => {
  const { navActive, darkTheme } = useAppContext();
  const [input, setInput] = useState("");

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
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div className="select-text px-[1rem] py-[0.5rem] font-serif text-c6 dark:bg-c1 dark:text-c7">
        <ReactMarkdown
          components={{
            blockquote: ({ children }) => (
              <div className="rounded-[0.25rem] border-l-[0.25rem] border-primaryDark bg-c9 p-[1.5rem] dark:bg-c3">
                {children}
              </div>
            ),
            code: ({ inline, className, children }) => {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={darkTheme ? a11yDark : a11yLight}
                  customStyle={{
                    background: darkTheme ? "#2B2D31" : "#F5F5F5",
                  }}
                  language={match[1]}
                  className="rounded-[0.25rem] bg-c9 p-[1.5rem] dark:bg-c3"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <span className="text-c4 dark:text-white">{children}</span>
              );
            },
            ul: ({ children }) => (
              <ul className="ml-[3rem] list-disc marker:text-primaryDark">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="ml-[3rem] list-decimal">{children}</ol>
            ),
            li: ({ children }) => <li className="pl-[0.5rem]">{children}</li>,
          }}
        >
          {input}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Document;
