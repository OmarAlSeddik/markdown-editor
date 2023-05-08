import { useAppContext } from "~/context/AppContext";
import DocumentList from "./DocumentList";
import NavFooter from "./NavFooter";
import NavHeader from "./NavHeader";

const Nav = () => {
  const { navActive } = useAppContext();

  return (
    <nav
      className={`${
        navActive ? "ml-0" : "ml-[-15.625rem]"
      } absolute left-0 top-0 flex h-full w-[15.625rem] flex-col gap-[1.5rem]
      overflow-hidden bg-c2 p-[1.5rem] pt-[5rem] transition-all sm:pt-[6rem]`}
    >
      <NavHeader />
      <DocumentList />
      <NavFooter />
    </nav>
  );
};

export default Nav;
