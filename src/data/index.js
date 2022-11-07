import GithubIcon from '../components/icons/github'
import LinkIcon from '../components/icons/link'

import istagramImg from '../images/istagram.png'
import zeeImg from '../images/zee.png'
import portfolioImg from '../images/portfolio.png'
import mernShopImg from '../images/mern-shop.png'

export const experienceList = [
  {
    company: 'UMG Myanmar',
    position: 'Python Developer',
    start: 'Dec 2021',
    end: 'June 2022',
  },
  {
    company: '',
    position: 'Freelance Developer',
    start: 'May 2020',
    end: 'Nov 2020',
  },
]

export const projectsList = [
  {
    name: 'MERN Shop',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/istagram',
      },
      {
        name: 'live demo',
        icon: <LinkIcon />,
        url: 'https://centaurium-shop.herokuapp.com/',
      },
    ],
    tech: ['Node', 'Express', 'MongoDB', 'React', 'Redux', 'Tailwind'],
    imageUrl: mernShopImg,
  },
  {
    name: 'Khine Kyaw Tun',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/zee-ecommerce-site-client',
      },
      {
        name: 'live demo',
        icon: <LinkIcon />,
        url: 'https://khinekyaw.github.io/v1/',
      },
    ],
    tech: ['React JS'],
    imageUrl: portfolioImg,
  },
  {
    name: 'Istagram',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/istagram',
      },
    ],
    tech: ['React JS', 'Redux', 'Django', 'Django-rest-framework'],
    imageUrl: istagramImg,
  },
  {
    name: 'Zee E-commerce',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/zee-ecommerce-site-client',
      },
    ],
    tech: ['React JS'],
    imageUrl: zeeImg,
  },
]
