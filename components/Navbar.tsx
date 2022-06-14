import NextLink from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { IconType } from "react-icons/lib";
import { FaHome } from "react-icons/fa";

type NavItemProps = {
  href: string;
  text: string;
  external?: boolean;
  StartIcon?: IconType;
};

function NavItem({ href, text, external, StartIcon }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive ? "text-brand" : "text-gray-400",
          StartIcon ? "pt-1" : "pr-2 py-2 self-center",
          "text-xl"
        )}
        target={external ? "_blank" : ""}
        rel={external ? "noreferrer noopener" : ""}
        aria-label={text}
      >
        {StartIcon ? <StartIcon size={32} /> : <>{text}</>}
        {isActive && <div className="navigation-underline" />}
      </a>
    </NextLink>
  );
}

export default function Navbar() {
  return (
    <nav className="max-w-2xl px-4 md:px-0 mx-auto py-3 rounded-lg">
      <div className="flex space-x-2">
        <NavItem href="/" text="Home" StartIcon={FaHome} />
        <div className="flex-grow"></div>
        <NavItem href="/experience" text="Experience" />
        <NavItem href="/blogs" text="Blogs" />
      </div>
    </nav>
  );
}
