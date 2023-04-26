import { type AppType } from "next/dist/shared/lib/utils";
import Header from "~/components/Header";
import Nav from "~/components/Nav";
import { AppContextProvider } from "~/context/AppContext";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <div className="absolute inset-0 flex-col">
        <Header />
        <Nav />
        <Component {...pageProps} />
      </div>
    </AppContextProvider>
  );
};

export default MyApp;
