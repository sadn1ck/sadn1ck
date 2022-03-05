import { AnimatePresence } from "framer-motion";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "../styles/globals.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

function MyApp({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`;
  return (
    <>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
