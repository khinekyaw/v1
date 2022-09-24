import GithubIcon from "../components/icons/github";
import LinkIcon from "../components/icons/link";

import istagramImg from "../images/istagram.png";
import zeeImg from "../images/zee.png";
import portfolioImg from "../images/portfolio.png";

export const experienceList = [
  {
    company: "UMG Myanmar",
    position: "Python Developer",
    start: "Dec 2021",
    end: "June 2022",
  },
  {
    company: "Upwork",
    position: "Freelance Developer",
    start: "Jan 2021",
    end: "present",
  },
];

export const projectsList = [
  {
    id: 1,
    name: "Istagram",
    links: [
      {
        name: "github",
        icon: <GithubIcon />,
        url: "https://github.com/khinekyaw/istagram",
      },
    ],
    tech: ["React JS", "Redux", "Django", "Django-rest-framework"],
    imageUrl: istagramImg,
  },
  {
    id: 2,
    name: "Zee E-commerce",
    links: [
      {
        name: "github",
        icon: <GithubIcon />,
        url: "https://github.com/khinekyaw/zee-ecommerce-site-client",
      },
    ],
    tech: ["React JS"],
    imageUrl: zeeImg,
  },
  {
    id: 3,
    name: "Khine Kyaw Tun",
    links: [
      {
        name: "github",
        icon: <GithubIcon />,
        url: "https://github.com/khinekyaw/zee-ecommerce-site-client",
      },
      {
        name: "live demo",
        icon: <LinkIcon />,
        url: "https://khinekyaw.github.io/v1/",
      },
    ],
    tech: ["React JS"],
    imageUrl: portfolioImg,
  },
];
