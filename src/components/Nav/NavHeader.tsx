const NavHeader = () => {
  return (
    <>
      <h2 className="text-base font-medium tracking-[2px] text-c6 dark:text-c6">
        MY DOCUMENTS
      </h2>
      <button className="h-[2.5rem] w-[12.625rem] rounded-[0.25rem] bg-primaryDark text-medium text-white transition-all mouseHover:hover:bg-primaryLight">
        + New Document
      </button>
    </>
  );
};

export default NavHeader;
