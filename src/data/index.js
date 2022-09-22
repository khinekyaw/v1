import GithubIcon from "../components/icons/github";
import LinkIcon from "../components/icons/link";

import istagramImg from "../images/istagram.png";
import zeeImg from "../images/zee.png";
import portfolioImg from "../images/portfolio.png";

export const experienceList = [
  {
    company: "UMG Myanmar",
    position: "Python Engineer",
    start: "Dec 2021",
    end: "June 2022",
  },
  {
    company: "LazySoft",
    position: "Freelance Developer",
    start: "Jan 2020",
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
      {
        name: "live demo",
        icon: <LinkIcon />,
        url: "",
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
    ],
    tech: ["React JS"],
    imageUrl: portfolioImg,
  },
];
