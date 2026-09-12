import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blogs = (await getCollection("blog")).filter((post) => !post.data.draft);

  const items = [...blogs].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: "Anik Das",
    description: "Notes on web engineering, editors, performance, and the systems behind them.",
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/blog/${item.id}/`,
    })),
  });
}
