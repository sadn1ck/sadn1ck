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
          <div className="text-lg font-bold text-brand hover:opacity-70">
            Site
          </div>
          <Link href="/">
            <a className="text-gray-300 hover:text-brand transition">Home</a>
          </Link>
          <Link href="/experience">
            <a className="text-gray-300 hover:text-brand transition">
              Experience
            </a>
          </Link>
          <Link href="/blogs">
            <a className="text-gray-300 hover:text-brand transition">Blogs</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-lg font-bold text-brand hover:opacity-70">
            Contact
          </div>
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
          <div className="text-lg font-bold text-brand hover:opacity-70">
            Source
          </div>
          <ExternalLink href="https://drive.google.com/file/d/11RewrnkZ4WVkDOFusuqm-wCPPJjGt044/view">
            <span className="text-gray-300 hover:text-brand transition">
              Resume
            </span>
          </ExternalLink>
          <ExternalLink href="https://github.com/sadn1ck/sadn1ck">
            <span className="text-gray-300 hover:text-brand transition">
              Website Source
            </span>
          </ExternalLink>
        </div>
      </div>
      <div className="text-sm text-brand">
        Made with Nextjs, Tailwind and hosted on Vercel.
      </div>
    </footer>
  );
}
