import Image from "next/image";

const MobileRender = ({
  previewActive,
  togglePreview,
}: {
  previewActive: boolean;
  togglePreview: () => void;
}) => {
  return (
    <>
      <div
        className="col-span-full flex items-center justify-between bg-c9 px-[1rem]
    py-[0.75rem] font-medium tracking-[2px] text-c6 dark:bg-c2 dark:text-c7 lg:hidden"
      >
        {previewActive ? "PREVIEW" : "MARKDOWN"}
        <div
          className={`relative w-[1rem] ${
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

export default MobileRender;
