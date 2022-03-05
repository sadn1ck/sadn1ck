import NextLink from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";

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

export default function Navbar() {
  return (
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
  );
}
