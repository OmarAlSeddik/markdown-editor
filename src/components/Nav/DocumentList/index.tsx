import useUser from "~/hooks/useUser";
import DocumentItem from "./DocumentItem";

const DocumentList = () => {
  const user = useUser();

  return (
    <div className="flex flex-col gap-[1.625rem]">
      {user.documents?.map((document) => (
        <DocumentItem
          key={document.id}
          id={document.id}
          date={document.date}
          name={document.name}
          content={document.content}
        />
      ))}
    </div>
  );
};

export default DocumentList;
