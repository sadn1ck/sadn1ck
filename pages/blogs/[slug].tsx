import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "../../.contentlayer/generated";
import type { Blog } from "../../.contentlayer/generated/types";
import Container from "../../components/Container";

type BlogProps = {
  blog: Blog;
};

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return { props: { blog } };
}

const BlogLayout = ({ blog }: BlogProps) => {
  const Component = useMDXComponent(blog.body.code);
  return (
    <Container>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <article className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">{blog.title}</h1>
          <span className="text-sm text-gray-600">{blog.date}</span>
        </div>
        <div className="prose mb-16">
          <Component />
        </div>
      </article>
    </Container>
  );
};

export default BlogLayout;
