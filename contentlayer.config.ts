import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: "blogs/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (blog) => blog._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

const OtherPage = defineDocumentType(() => ({
  name: "OtherPage",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    desc: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (blog) => blog._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, OtherPage],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
