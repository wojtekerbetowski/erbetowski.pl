import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Wojtek Erbetowski",
  EMAIL: "wojtek@erbetowski.pl",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal website of Wojtek Erbetowski, a hands-on leader with experience in building teams and technology.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About Me",
  DESCRIPTION: "Learn more about Wojtek Erbetowski, a hands-on leader with experience in building teams and technology.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/wojtekerbetowski",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/erbetowski"
  },
  { 
    NAME: "globe",
    HREF: "https://erbetowski.pl",
  }
];
