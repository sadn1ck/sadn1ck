import { useState } from "react";

import Container from "components/Container";
import BlogPost from "components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { allBlogs } from "../.contentlayer/generated";
import Head from "next/head";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="All blogs written by me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold tracking-tight md:text-4xl text-white clip-title">
            All Posts
          </h3>
          <div className="relative w-full my-8">
            <input
              aria-label="Search blogs"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search blogs"
              className="block w-full px-4 py-2 border-gray-900 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
            />
            <svg
              className="absolute w-5 h-5 right-3 top-3 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-400">No posts found.</p>
          )}
          {filteredBlogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </Container>
    </>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((val) => val);
  return { props: { posts } };
}
