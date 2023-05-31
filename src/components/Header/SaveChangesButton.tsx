import Image from "next/image";
import { useRouter } from "next/router";

const SaveChangesButton = () => {
  const router = useRouter();

  return (
    <button
      className="ml-[1.5rem] flex h-[2.5rem] w-[2.5rem] items-center justify-center gap-[0.5rem] rounded-[0.25rem]
bg-primaryDark text-medium text-white transition-all disabled:bg-c1 sm:w-[9.5rem]
mouseHover:hover:bg-primaryLight mouseHover:disabled:hover:bg-c1"
      disabled={router.route === "/"}
    >
      <div className="relative h-[1rem] w-[1rem]">
        <Image src="svgs/icon-save.svg" alt="Save Changes" fill />
      </div>
      <p className="hidden sm:block">Save Changes</p>
    </button>
  );
};

export default SaveChangesButton;
