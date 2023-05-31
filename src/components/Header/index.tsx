import DeleteDocumentButton from "./DeleteDocumentButton";
import DocumentNameDisplay from "./DocumentNameDisplay";
import NavToggleButton from "./NavToggleButton";
import SaveChangesButton from "./SaveChangesButton";

const Header = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex h-[3.5rem] bg-c3 sm:h-[4.5rem]">
      <NavToggleButton />
      <div className="flex h-full w-full items-center p-[1rem]">
        <DocumentNameDisplay />
        <DeleteDocumentButton />
        <SaveChangesButton />
      </div>
    </header>
  );
};

export default Header;
