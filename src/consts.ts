import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Anik Das",
  DESCRIPTION: "Software Engineer",
  EMAIL: "anikdas0811@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Software Engineer",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/sadn1ck",
  },
  {
    NAME: "anikdas0811@gmail.com",
    HREF: "mailto:anikdas0811@gmail.com",
  },
  {
    NAME: "Twitter",
    HREF: "https://twitter.com/__sadn1ck__",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/sadn1ck",
  },
  {
    NAME: "BlueSky",
    HREF: "https://bsky.app/profile/anikd.com",
  },
];
