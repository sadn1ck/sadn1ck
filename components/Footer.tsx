import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-300 hover:text-brand transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col mx-8 justify-center items-start max-w-2xl md:mx-auto mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link scroll={false} href="/">
            <a className="text-gray-300 hover:text-brand transition">Home</a>
          </Link>
          <Link scroll={false} href="/experience">
            <a className="text-gray-300 hover:text-brand transition">
              Experience
            </a>
          </Link>
          <Link scroll={false} href="/blogs">
            <a className="text-gray-300 hover:text-brand transition">
              Blogs
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/sadn1ck">GitHub</ExternalLink>
          <ExternalLink href="mailto:anikdas0811@gmail.com">Email</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/sadn1ck">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/__sadn1ck__">
            Twitter
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view">
            <a className="text-gray-300 hover:text-brand transition">
              Resume
            </a>
          </ExternalLink>
          <ExternalLink href="https://github.com/sadn1ck/sadn1ck">
            <a className="text-gray-300 hover:text-brand transition">
              Website Source
            </a>
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
