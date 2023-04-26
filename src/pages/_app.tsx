import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="absolute inset-0">
      <Component {...pageProps} />{" "}
    </div>
  );
};

export default MyApp;
