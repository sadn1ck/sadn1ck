import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    Icon: FaGithub,
    href: "https://github.com/sadn1ck",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/sadn1ck",
  },
  {
    Icon: FaTwitter,
    href: "https://twitter.com/__sadn1ck__",
  },
];

const SocialIcons = (): JSX.Element => (
  <div className="flex flex-row text-2xl my-6 text-gray-300">
    {links.map(({ Icon, href }, i) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`hover:text-gray-500 transition-colors ${
          i < links.length - 1 ? "mr-3" : ""
        }`}
      >
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialIcons;
