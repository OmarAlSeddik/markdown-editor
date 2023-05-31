import { useAppContext } from "~/context/AppContext";
import LargeRender from "./LargeRender";
import MobileRender from "./MobileRender";

const DocHeader = () => {
  const { previewActive, togglePreview } = useAppContext();

  return (
    <>
      <MobileRender
        previewActive={previewActive}
        togglePreview={togglePreview}
      />
      <LargeRender
        previewActive={previewActive}
        togglePreview={togglePreview}
      />
    </>
  );
};

export default DocHeader;
