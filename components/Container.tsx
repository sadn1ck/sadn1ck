import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import Head from "next/head";
import Footer from "./Footer";

type NavItemProps = {
  href: string;
  text: string;
  external?: boolean;
};

function NavItem({ href, text, external }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive ? "font-bold" : "text-gray-400",
          "inline-block px-3 py-2 border-1 border-brand rounded-md hover:bg-brand/40 transition-all"
        )}
        target={external ? "_blank" : ""}
        rel={external ? "noreferrer noopener" : ""}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container({ children }) {
  const meta = {
    title: "Anik Das – Developer, student",
    description: `Aspiring Software Developer`,
    image: "/meta_banner.png",
    type: "website",
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Anik Das" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@__sadn1ck__" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <nav
        className="flex sticky top-2 max-w-2xl mx-auto px-4 md:px-0 rounded-lg bg-black py-3"
        style={{ zIndex: 20 }}
      >
        <div className="flex space-x-3">
          <NavItem href="/" text="Home" />
          <NavItem href="/experience" text="Experience" />
          <NavItem href="/blogs" text="Blogs" />
        </div>
      </nav>
      <div className="px-8 md:px-0 max-w-2xl mx-auto flex flex-col my-8">
        {children}
      </div>
      <Footer />
    </>
  );
}
