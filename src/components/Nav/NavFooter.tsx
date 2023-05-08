import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const NavFooter = () => {
  const { toggleTheme } = useAppContext();

  return (
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
  );
};

export default NavFooter;
