import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { FaJava, FaLink } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiBootstrap,
  SiHtml5,
  SiSass,
  SiGit,
  SiLinux,
  SiCss3,
  SiPhp,
  SiGithub,
} from "react-icons/si";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const aboutMe = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",

  "We use process design to create digital products. Besides that also help their business",
];

export const skills = [
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "HTML",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    icon: SiCss3,
  },
  {
    name: "SASS",
    icon: SiSass,
  },

  {
    name: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Php",
    icon: SiPhp,
  },
  {
    name: "Linux",
    icon: SiLinux,
  },
];

export const projects = [
  {
    name: "Game Hub Web Application",
    src: "src/assets/img/game-hub.png",
    icons: [
      {
        name: SiGithub,
        link: "https://github.com/vytran1805/game-hub-application",
      },
      {
        name: FaLink,
        link: "https://game-hub-application.vercel.app/",
      },
    ],
  },
  {
    name: "Android Application",
    src: "src/assets/img/game-hub.png",
    icons: [
      {
        icon: SiGithub,
        link: "https://github.com/KyokoShrives/CST2335_Final_Project",
      },
      {
        name: null,
        link: null,
      },
    ],
  },
];
export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
