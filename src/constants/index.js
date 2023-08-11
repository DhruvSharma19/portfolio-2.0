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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
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
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "ethereum",
          color: "yellow-text-gradient",
        },
        {
          name: "hardhat",
          color: "blue-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/DhruvSharma19/crowdFunding",
    },
    {
      name: "Youtube Clone",
      description:
        "It is a platform that emulates the core functionalities and features of YouTube, providing users with the ability to upload, share, and view videos online. It aims to recreate the popular video-sharing experience offered by YouTube while incorporating its own unique elements.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/DhruvSharma19/youtube",
    },
    {
      name: "Velle",
      description:
        "It is an online platform that enables individuals to connect, communicate, and share content with a network of friends, acquaintances, or a wider community. It serves as a virtual space where users can create personal profiles, interact with others, and express themselves through various forms of media.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient", 
        },
        {
          name: "nodejs",
          color: "pink-text-gradient", 
        },
        {
          name: "redux",
          color: "blue-text-gradient", 
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/DhruvSharma19/velle",
    },
  ];
  
  export { services, technologies, experiences, projects };