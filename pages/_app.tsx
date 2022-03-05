import { AnimatePresence } from "framer-motion";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`;
  return (
    <>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter={true}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
