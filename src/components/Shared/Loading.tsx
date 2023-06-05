const Loading = ({ withBg }: { withBg: boolean }) => {
  return (
    <div
      className={`flex h-full grow items-center justify-center text-c6 
    ${withBg ? "col-span-full text-h1 dark:bg-c1 dark:text-c7" : "mr-auto"}`}
    >
      Loading...
    </div>
  );
};

export default Loading;
