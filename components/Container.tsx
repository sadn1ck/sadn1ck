import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

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
          isActive ? "font-bold text-brand bg-brand/50" : "text-gray-400",
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
  return (
    <>
      <nav className="flex items-center justify-between sticky top-2 max-w-2xl mx-auto px-4 md:px-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur py-5">
        <div className="flex space-x-3">
          <NavItem href="/" text="Home" />
          <NavItem href="/experience" text="Experience" />
          <NavItem href="/blogs" text="Blogs" />
          <div className="grow"></div>
          <NavItem external href="https://github.com/sadn1ck" text="GitHub" />
        </div>
      </nav>
      <div className="px-8 md:px-0 max-w-2xl mx-auto flex flex-col my-8">
        {children}
      </div>
      <footer>{/* @TODO:Footer */}</footer>
    </>
  );
}
