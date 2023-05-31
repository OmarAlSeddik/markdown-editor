import Loading from "~/components/Loading";
import useUser from "~/hooks/useUser";
import { type Document } from "~/library/types";
import DocumentItem from "./DocumentItem";

const DocumentList = () => {
  const { documents, loading } = useUser();

  if (loading) return <Loading />;

  let documentsList: Document[] = [];

  if (documents)
    documentsList = Object.values(documents).sort(
      (a, b) => b.dateNum - a.dateNum
    );

  return (
    <div className="darkScrollbar flex h-full flex-col gap-[1.625rem]">
      {documentsList.map((document) => {
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
