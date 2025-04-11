import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Sam Turner",
  DESCRIPTION: "Sam is a Computer Science student at the University of Warwick, UK.",
  EMAIL: "sam@stmio.net",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Sam's homepage on the internet.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I think are cool.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/stmio",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/stmio",
  },
];
