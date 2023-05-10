import Image from "next/image";
import { useAppContext } from "~/context/AppContext";
import useAuth from "~/hooks/useAuth";
import useUser from "~/hooks/useUser";

const NavFooter = () => {
  const { toggleTheme } = useAppContext();
  const authX = useAuth();
  const user = useUser();

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
      <button
        className="ml-auto flex h-[2rem] w-[5.5rem] items-center justify-center gap-[0.25rem] rounded-[0.25rem]
        bg-primaryDark text-medium text-white transition-all mouseHover:hover:bg-primaryLight"
        onClick={() => void authX()}
      >
        <div className="loginIcon relative h-[1rem] w-[1rem]">
          <Image src="svgs/icon-login.svg" alt="Log Out" fill />
        </div>
        <p className="hidden sm:block">{user.uid ? "Log Out" : "Log In"}</p>
      </button>
    </div>
  );
};

export default NavFooter;
