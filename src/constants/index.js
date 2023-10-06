import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
  c,
  express,
  solidity,
  socket,
  java,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Pyhton",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Socket Io",
    icon: socket,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const projects = [
  {
    name: "CrowdFunding",
    description:
      "A crowdfunding website that utilizes blockchain technology is a platform designed to connect project creators and individuals interested in supporting innovative ideas or initiatives. This platform leverages the transparency, security, and decentralization features of blockchain to provide a reliable and efficient crowdfunding experience.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "Ethereum",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/DhruvSharma19/crowdFunding",
  },

  {
    name: "Velle",
    description:
      "It is an online platform that enables individuals to connect, communicate, and share content with a network of friends, acquaintances, or a wider community. It serves as a virtual space where users can create personal profiles, interact with others, and express themselves through various forms of media.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "SocketIo",
        color: "blue-text-gradient",
      },

    ],
    image: tripguide,
    source_code_link: "https://github.com/DhruvSharma19/velle",
  },
  {
    name: "Youtube Clone",
    description:
      "It is a platform that emulates the core functionalities and features of YouTube, providing users with the ability to upload, share, and view videos online. It aims to recreate the popular video-sharing experience offered by YouTube while incorporating its own unique elements.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/DhruvSharma19/youtube",
  },
];

export { services, technologies, experiences, projects };