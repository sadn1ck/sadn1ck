import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  motion,
} from "framer-motion";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
