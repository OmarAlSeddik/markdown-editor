import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const DocHeader = () => {
  const { previewActive, togglePreview } = useAppContext();

  const MobileRender = () => (
    <div className="col-span-full flex items-center justify-between bg-c9 px-[1rem] py-[0.75rem] font-medium tracking-[2px] text-c6 dark:bg-c2 dark:text-c7 sm:hidden">
      {previewActive ? "PREVIEW" : "MARKDOWN"}
      <div className="relative h-[0.6875rem] w-[1rem]">
        <Image
          src={
            previewActive
              ? "svgs/icon-hide-preview.svg"
              : "svgs/icon-show-preview.svg"
          }
          alt="Toggle Preview"
          fill
          onClick={togglePreview}
        />
      </div>
    </div>
  );

  const LargeRender = () => (
    <>
      <div
        className={`hidden items-center border-r border-c8 bg-c9
      px-[1rem] py-[0.75rem] font-medium tracking-[2px] text-c6
      dark:border-c5 dark:bg-c2 dark:text-c7 sm:flex
      ${previewActive ? "sm:hidden" : ""}`}
      >
        MARKDOWN
      </div>
      <div
        className={`hidden items-center justify-between bg-c9 px-[1rem]
      py-[0.75rem] font-medium tracking-[2px] text-c6 dark:bg-c2
      dark:text-c7 sm:flex
      ${previewActive ? "col-span-full" : ""}`}
      >
        PREVIEW
        <div className="mouseHover:hover:iconHover relative h-[0.6875rem] w-[1rem] cursor-pointer transition-all">
          <Image
            src={
              previewActive
                ? "svgs/icon-hide-preview.svg"
                : "svgs/icon-show-preview.svg"
            }
            alt="Toggle Preview"
            fill
            onClick={togglePreview}
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <MobileRender />
      <LargeRender />
    </>
  );
};

export default DocHeader;
