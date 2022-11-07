import GithubIcon from '../components/icons/github'
import LinkIcon from '../components/icons/link'

import istagramImg from '../images/istagram.png'
import zeeImg from '../images/zee.png'
import portfolioImg from '../images/portfolio.png'
import mernShopImg from '../images/mern-shop.png'
import memoryImg from '../images/memory-game.png'
import passwordImg from '../images/password-gen.png'
import tttImg from '../images/ttt.png'
import autoImg from '../images/autoencoder.png'
import flackImg from '../images/flack.png'
import snakeImg from '../images/snake.png'

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
    tech: ['Django', 'Django-rest-framework', 'React JS', 'Redux'],
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
  {
    name: 'Memory Game',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/react-memory-game',
      },
    ],
    tech: ['ReactJS'],
    imageUrl: memoryImg,
  },
  {
    name: 'Password Generator',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/react-memory-game',
      },
    ],
    tech: ['Django', 'HTML', 'CSS'],
    imageUrl: passwordImg,
  },
  {
    name: 'Snake React Native',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/snake-rnge',
      },
    ],
    tech: ['React', 'React Native', 'react-native-game-engine'],
    imageUrl: snakeImg,
  },
  {
    name: 'Autoencoders',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/Autoencoders',
      },
    ],
    tech: ['Python', 'Numpy', 'Keras', 'Neural Networks'],
    imageUrl: autoImg,
  },
  {
    name: 'Flack - Slack Clone',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/Flack',
      },
    ],
    tech: ['Python', 'Socket', 'JavaScript'],
    imageUrl: flackImg,
  },
  {
    name: 'Tic Tac Toe',
    links: [
      {
        name: 'github',
        icon: <GithubIcon />,
        url: 'https://github.com/khinekyaw/tic-tac-toe-python-tkinter',
      },
    ],
    tech: ['Python', 'Tkinter'],
    imageUrl: tttImg,
  },
]
