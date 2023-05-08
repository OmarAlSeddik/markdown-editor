import DocumentItem from "./DocumentItem";

const DocumentList = () => {
  return (
    <div className="flex flex-col gap-[1.625rem]">
      <DocumentItem date="01 April 2022" name="welcome.md" />
      <DocumentItem date="04 May 2077" name="cyberpunk.md" />
      <DocumentItem date="27 October 2020" name="october.md" />
    </div>
  );
};

export default DocumentList;
