import { useAppContext } from "~/context/AppContext";
import DocBody from "./DocBody";
import DocHeader from "./DocHeader";

const Document = () => {
  const { navActive } = useAppContext();

  return (
    <div
      className={`${
        navActive ? "ml-[15.625rem]" : "ml-0"
      } absolute inset-0 mt-[3.5rem] grid min-w-full grid-cols-2 grid-rows-document transition-all sm:mt-[4.5rem]`}
    >
      <DocHeader />
      <DocBody />
    </div>
  );
};

export default Document;
