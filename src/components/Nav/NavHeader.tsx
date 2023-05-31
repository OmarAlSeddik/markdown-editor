import useUser from "~/hooks/useUser";
import createNewDocument from "~/library/createNewDocument";

const NavHeader = () => {
  const { loading, uid } = useUser();

  return (
    <>
      <h2 className="text-base font-medium tracking-[2px] text-c6 dark:text-c6">
        MY DOCUMENTS
      </h2>
      <button
        className="h-[2.5rem] w-[12.625rem] rounded-[0.25rem] bg-primaryDark text-medium
      text-white transition-all disabled:bg-c1 mouseHover:hover:bg-primaryLight mouseHover:disabled:hover:bg-c1"
        onClick={() => void createNewDocument(uid)}
        disabled={!uid}
      >
        {loading ? "Loading..." : "+ New Document"}
      </button>
    </>
  );
};

export default NavHeader;
