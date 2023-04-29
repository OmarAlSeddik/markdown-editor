import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const Nav = () => {
  const { navActive, toggleTheme } = useAppContext();

  return (
    <nav
      className={`${
        navActive ? "ml-0" : "ml-[-15.625rem]"
      } absolute left-0 top-0 flex h-full w-[15.625rem] flex-col gap-[1.5rem]
      overflow-hidden bg-c2 p-[1.5rem] pt-[5rem] transition-all sm:pt-[6rem]`}
    >
      <h2 className="text-base font-medium tracking-[2px] text-c6">
        MY DOCUMENTS
      </h2>
      <button className="h-[2.5rem] w-[12.625rem] rounded-[0.25rem] bg-primaryDark text-medium text-white transition-all mouseHover:hover:bg-primaryLight">
        + New Document
      </button>
      <div className="flex h-[2rem] w-[8rem] items-center gap-[1rem]">
        <div className="relative h-[1rem] w-[0.875rem]">
          <Image src="svgs/icon-document.svg" alt="Document" fill />
        </div>
        <div className="flex flex-col">
          <h2 className="text-small font-light text-c6">01 April 2022</h2>
          <button className="text-medium text-white mouseHover:hover:text-primaryDark">
            welcome.md
          </button>
        </div>
      </div>
      <div className="flex h-[2rem] w-[8rem] items-center gap-[1rem]">
        <div className="relative h-[1rem] w-[0.875rem]">
          <Image src="svgs/icon-document.svg" alt="Document" fill />
        </div>
        <div className="flex flex-col">
          <h2 className="text-small font-light text-c6">01 April 2022</h2>
          <button className="text-medium text-white mouseHover:hover:text-primaryDark">
            welcome.md
          </button>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-[0.625rem]">
        <Image
          src="svgs/icon-dark-mode.svg"
          alt="Dark Mode"
          width={16}
          height={16}
          className="themeIcon dark:themeIconActive transition-all"
        />
        <button
          className="flex h-[1.5rem] w-[3rem] rounded-[0.90625rem] bg-c5 p-[0.375rem] "
          onClick={toggleTheme}
        >
          <div className="ml-[1.46rem] h-[0.75rem] w-[0.75rem] rounded-[50%] bg-white transition-all dark:ml-0" />
        </button>
        <Image
          src="svgs/icon-light-mode.svg"
          alt="Light Mode"
          width={16}
          height={16}
          className="themeIconActive dark:themeIcon transition-all"
        />
        <div className="relative h-[0.5625rem] w-[6.09375rem]">
          <Image src="svgs/logo.svg" alt="Logo" fill />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
