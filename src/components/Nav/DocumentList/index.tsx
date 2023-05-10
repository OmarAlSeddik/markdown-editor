import useUser from "~/hooks/useUser";
import DocumentItem from "./DocumentItem";

const DocumentList = () => {
  const user = useUser();

  return (
    <div className="flex flex-col gap-[1.625rem]">
      {user.documents?.map((document, index) => (
        <DocumentItem date={document.date} name={document.name} key={index} />
      ))}
    </div>
  );
};

export default DocumentList;
