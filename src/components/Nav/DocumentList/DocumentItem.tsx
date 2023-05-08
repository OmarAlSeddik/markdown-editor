import Image from "next/image";

const DocumentItem = ({ date, name }: { date: string; name: string }) => {
  return (
    <div className="flex h-[2rem] w-[8rem] items-center gap-[1rem]">
      <div className="relative h-[1rem] w-[0.875rem]">
        <Image src="svgs/icon-document.svg" alt="Document" fill />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-small font-light text-c6 dark:text-c6">{date}</h2>
        <button className="text-medium text-white transition-all mouseHover:hover:text-primaryDark">
          {name}
        </button>
      </div>
    </div>
  );
};

export default DocumentItem;
