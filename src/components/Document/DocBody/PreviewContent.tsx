import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/default-highlight";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useAppContext } from "~/context/AppContext";

const PreviewContent = ({ input }: { input: string }) => {
  const { darkTheme } = useAppContext();

  return (
    <ReactMarkdown
      className="mx-auto flex max-w-[42rem] flex-col gap-[1.25rem] text-[0.875rem]"
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
  );
};

export default PreviewContent;
