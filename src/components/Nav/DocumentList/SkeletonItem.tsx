import Image from "next/image";

const SkeletonItem = () => {
  return (
    <div className="flex h-[3rem] flex-shrink-0 items-center gap-[1rem] rounded px-[0.5rem]">
      <div className="relative h-[1rem] w-[0.875rem]">
        <Image src="svgs/icon-document.svg" alt="Document" fill />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <div className="h-[0.5rem] w-[8rem] animate-pulse rounded bg-c6" />
        <div className="h-[0.5rem] w-[6rem] animate-pulse rounded bg-white" />
      </div>
    </div>
  );
};

export default SkeletonItem;
