export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_BLOGS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Heading = {
  depth: number;
  slug: string;
  text: string;
};
