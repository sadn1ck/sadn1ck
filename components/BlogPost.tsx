import Link from "next/link";

export default function BlogPost({ title, desc, slug }) {
  return (
    <Link href={`/blogs/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium md:text-xl text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-gray-300">{desc}</p>
        </div>
      </a>
    </Link>
  );
}
