import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const NavToggleButton = () => {
  const { toggleNav, navActive } = useAppContext();
  const iconSize = navActive
    ? "relative h-[1.125rem] w-[1.125rem] sm:h-[1.375rem] sm:w-[1.375rem]"
    : "relative h-[0.875rem] w-[1.4375rem] sm:h-[1.125rem] sm:w-[1.875rem]";

  return (
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
  );
};

export default NavToggleButton;
