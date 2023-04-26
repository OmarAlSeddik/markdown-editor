import { type AppType } from "next/dist/shared/lib/utils";
import Header from "~/components/Header";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="absolute inset-0">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
