import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps, router }) {
  const url = `https://anikd.com${router.route}`;
  return (
    <>
      <Script
        async
        defer
        data-website-id="bb4be3ad-5765-44e0-b6c3-9ba7a9a89a92"
        data-do-not-track="true"
        src="https://analytics.anikd.com/umami.js"
      ></Script>
      <Navbar />
      <Component {...pageProps} canonical={url} key={url} />
      <Footer />
    </>
  );
}

export default MyApp;
