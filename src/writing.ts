import type { CollectionEntry } from "astro:content";

export type WritingEntry = {
  date: Date;
  description: string;
  href: string;
  title: string;
  type: "Post" | "Work";
};

export const blogToWritingEntry = (
  entry: CollectionEntry<"blog">,
): WritingEntry => ({
  date: entry.data.date,
  description: entry.data.description,
  href: `/blog/${entry.id}`,
  title: entry.data.title,
  type: "Post",
});

export const workToWritingEntry = (
  entry: CollectionEntry<"work">,
): WritingEntry => {
  const lastRole = entry.data.roles.at(-1)!;

  if (!lastRole.endDate) {
    throw new Error(
      `Cannot create a writing entry for active work at ${entry.data.company}`,
    );
  }

  return {
    date: lastRole.endDate,
    description: entry.data.description,
    href: `/work/${entry.id}`,
    title: `My work at ${entry.data.company}`,
    type: "Work",
  };
};

export const hasFinishedWork = (entry: CollectionEntry<"work">) =>
  entry.data.roles.at(-1)!.endDate !== undefined;

export const sortWritingEntries = (a: WritingEntry, b: WritingEntry) =>
  b.date.valueOf() - a.date.valueOf();

export const sortWorkEntries = (
  a: CollectionEntry<"work">,
  b: CollectionEntry<"work">,
) => {
  const aRole = a.data.roles.at(-1)!;
  const bRole = b.data.roles.at(-1)!;

  if (!aRole.endDate && bRole.endDate) return -1;
  if (aRole.endDate && !bRole.endDate) return 1;

  return bRole.startDate.valueOf() - aRole.startDate.valueOf();
};
