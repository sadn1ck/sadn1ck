import NextLink from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion } from "framer-motion";

type NavItemProps = {
  href: string;
  text: string;
  external?: boolean;
};

function NavItem({ href, text, external }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} scroll={false}>
      <a
        className={cn(isActive ? "text-brand" : "text-gray-400", "px-3 py-2")}
        target={external ? "_blank" : ""}
        rel={external ? "noreferrer noopener" : ""}
      >
        {text}
        {isActive && (
          <motion.div
            layoutId="navigation-underline"
            className="navigation-underline"
            animate
          />
        )}
      </a>
    </NextLink>
  );
}

export default function Navbar() {
  return (
    <nav
      className="flex sticky top-2 max-w-2xl mx-auto px-0 bg-black py-3 rounded-lg"
      style={{ zIndex: 20 }}
    >
      <div className="flex space-x-3 justify-between">
        <NavItem href="/" text="Home" />
        <NavItem href="/experience" text="Experience" />
        <NavItem href="/blogs" text="Blogs" />
      </div>
    </nav>
  );
}
