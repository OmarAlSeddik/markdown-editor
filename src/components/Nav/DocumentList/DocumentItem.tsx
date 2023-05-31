import Image from "next/image";
import Link from "next/link";

const DocumentItem = ({
  id,
  name,
  dateStr,
}: {
  id: number;
  name: string;
  dateStr: string;
}) => {
  return (
    <div className="flex h-[2rem] items-center gap-[1rem]">
      <div className="relative h-[1rem] w-[0.875rem]">
        <Image src="svgs/icon-document.svg" alt="Document" fill />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-small font-light text-c6 dark:text-c6">
          {dateStr}
        </h2>
        <Link
          className="text-medium text-white transition-all mouseHover:hover:text-primaryDark"
          href={`/${id}`}
        >
          {name.length > 13 ? name.slice(0, 12) + "..." : name}
        </Link>
      </div>
    </div>
  );
};

export default DocumentItem;
