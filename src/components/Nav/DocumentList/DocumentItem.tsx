import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DocumentItem = ({
  id,
  name,
  dateStr,
}: {
  id: number;
  name: string;
  dateStr: string;
}) => {
  const router = useRouter();
  const active = parseInt(router.asPath.slice(1)) == id;

  return (
    <Link
      className={`flex h-[3rem] items-center gap-[1rem] rounded px-[1rem] !no-underline mouseHover:hover:!no-underline
    ${active ? "bg-c1" : "mouseHover:hover:bg-c3"}`}
      href={`/${id}`}
    >
      <div className="relative h-[1rem] w-[0.875rem]">
        <Image src="svgs/icon-document.svg" alt="Document" fill />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-small font-light text-c6 dark:text-c6">
          {dateStr}
        </h2>
        <p className="text-medium text-white transition-all">
          {name.length > 13 ? name.slice(0, 12) + "..." : name}
        </p>
      </div>
    </Link>
  );
};

export default DocumentItem;
