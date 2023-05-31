import Image from "next/image";

const LargeRender = ({
  previewActive,
  togglePreview,
}: {
  previewActive: boolean;
  togglePreview: () => void;
}) => {
  return (
    <>
      <div
        className={`hidden items-center border-r border-c8 bg-c9
  px-[1rem] py-[0.75rem] font-medium tracking-[2px] text-c6
  dark:border-c5 dark:bg-c2 dark:text-c7 lg:flex
  ${previewActive ? "lg:hidden" : ""}`}
      >
        MARKDOWN
      </div>
      <div
        className={`hidden items-center justify-between bg-c9 px-[1rem]
  py-[0.75rem] font-medium tracking-[2px] text-c6 dark:bg-c2
  dark:text-c7 lg:flex
  ${previewActive ? "col-span-full" : ""}`}
      >
        PREVIEW
        <div
          className={`mouseHover:hover:iconHover relative h-[0.6875rem] w-[1rem] cursor-pointer transition-all ${
            previewActive ? "h-[0.9375rem]" : "h-[0.6875rem]"
          }`}
        >
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
};

export default LargeRender;
