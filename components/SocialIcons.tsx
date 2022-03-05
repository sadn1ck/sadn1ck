import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    Icon: FaGithub,
    href: "https://github.com/sadn1ck",
    ariaText: "Link to Anik's GitHub",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/sadn1ck",
    ariaText: "Link to Anik's LinkedIn",
  },
  {
    Icon: FaTwitter,
    href: "https://twitter.com/__sadn1ck__",
    ariaText: "Link to Anik's Twitter",
  },
];

const SocialIcons = (): JSX.Element => (
  <div className="flex flex-row text-2xl my-6 text-gray-300">
    {links.map(({ Icon, href, ariaText }, i) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`hover:text-gray-500 transition-colors ${
          i < links.length - 1 ? "mr-3" : ""
        }`}
        aria-label={ariaText}
      >
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialIcons;
