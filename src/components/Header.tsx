import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "~/context/AppContext";

const Header = () => {
  const { toggleNav, navActive, isMobile } = useAppContext();
  const [inputActive, setInputActive] = useState(false);
  const [documentName, setDocumentName] = useState("welcome.md");
  const iconSize = navActive
    ? "relative h-[1.125rem] w-[1.125rem] sm:h-[1.375rem] sm:w-[1.375rem]"
    : "relative h-[0.875rem] w-[1.4375rem] sm:h-[1.125rem] sm:w-[1.875rem]";

  const toggleInput = () => setInputActive((prev) => !prev);

  const input = inputActive ? (
    <input
      type="text"
      autoFocus
      onBlur={toggleInput}
      className="border-b-[1px] bg-c3 text-medium text-white caret-primaryDark outline-none"
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && (event.target as HTMLInputElement).value) {
          toggleInput();
          setDocumentName((event.target as HTMLInputElement).value);
        }
      }}
    />
  ) : (
    <h2
      className="cursor-pointer text-medium text-white transition-all mouseHover:hover:text-primaryDark"
      onClick={toggleInput}
    >
      {isMobile
        ? documentName.length > 22
          ? documentName.slice(0, 20) + "..."
          : documentName
        : documentName.length > 52
        ? documentName.slice(0, 50) + "..."
        : documentName}
    </h2>
  );

  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex h-[3.5rem] bg-c3 sm:h-[4.5rem]">
      <button
        className="flex h-[3.5rem] w-[3.5rem] items-center justify-center bg-c4
        transition-all sm:h-[4.5rem] sm:w-[4.5rem] mouseHover:hover:bg-primaryDark"
        onClick={toggleNav}
      >
        <div className={iconSize}>
          <Image
            src={navActive ? "svgs/icon-close.svg" : "svgs/icon-menu.svg"}
            alt="Menu"
            fill
          />
        </div>
      </button>
      <div className="flex h-full w-full items-center p-[1rem]">
        <div className="relative hidden h-[0.75rem] w-[8.125rem] lg:block">
          <Image src="svgs/logo.svg" alt="Logo" fill />
        </div>
        <div className="mx-[1.5rem] hidden h-full w-[1px] bg-c5 lg:block" />
        <div className="ml-[0.5rem] flex h-[2rem] items-center gap-[1rem] sm:ml-0">
          <div className="relative h-[1rem] w-[0.875rem]">
            <Image src="svgs/icon-document.svg" alt="Document" fill />
          </div>
          <div className="flex w-[10rem] flex-col overflow-hidden sm:w-[25rem]">
            <h2 className="hidden text-small font-light text-c6 sm:block">
              Document Name
            </h2>
            {input}
          </div>
        </div>
        <button className="relative ml-auto h-[1.25rem] w-[1.125rem]">
          <Image
            src="svgs/icon-delete.svg"
            alt="Delete"
            fill
            className="mouseHover:hover:iconHover transition-all"
          />
        </button>
        <button
          className="ml-[1.5rem] flex h-[2.5rem] w-[2.5rem] items-center justify-center gap-[0.5rem] rounded-[0.25rem]
        bg-primaryDark text-medium text-white transition-all sm:w-[9.5rem] mouseHover:hover:bg-primaryLight"
        >
          <div className="relative h-[1rem] w-[1rem]">
            <Image src="svgs/icon-save.svg" alt="Save Changes" fill />
          </div>
          <p className="hidden sm:block">Save Changes</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
