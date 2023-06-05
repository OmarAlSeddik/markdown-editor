import { useAutoAnimate } from "@formkit/auto-animate/react";
import useUser from "~/hooks/useUser";
import { type Document } from "~/library/types";
import DocumentItem from "./DocumentItem";
import SkeletonItem from "./SkeletonItem";

const DocumentList = () => {
  const { documents, loading } = useUser();
  const [animationParent] = useAutoAnimate();
  const skeletonItems = 8;

  let documentsList: Document[] = [];
  if (documents)
    documentsList = Object.values(documents).sort(
      (a, b) => b.dateNum - a.dateNum
    );

  return (
    <div
      className="darkScrollbar flex h-full flex-col gap-[1rem]"
      ref={animationParent}
    >
      {loading
        ? Array.from({ length: skeletonItems }).map((e, i) => (
            <SkeletonItem key={i} />
          ))
        : documentsList.map((document) => {
            return (
              <DocumentItem
                key={document.id}
                id={document.id}
                dateStr={document.dateStr}
                name={document.name}
              />
            );
          })}
    </div>
  );
};

export default DocumentList;
