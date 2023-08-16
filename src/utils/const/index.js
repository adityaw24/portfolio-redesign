import {
  BackendAnimation,
  FrontendAnimation,
  ToolsAnimation,
} from "../../assets/animation";

export const linkUrl = {
  github: "https://github.com/adityaw24",
  web: "https://purwa-aditya-wisnu-wardhana.showwcase.com/",
  linkedIn: "https://www.linkedin.com/in/purwa-aditya-wisnu-wardhana/",
};

export const ImageUrl = {
  movieApp: "/movie-apps.jpg",
  eCommerceApp: "/ecommerce-apps.jpg",
  weatherApp: "/weather-apps.jpg",
  profile: "/profile.png",
};

export const projectUrlGithub = {
  eCommerceApp: "https://github.com/adityaw24/e-commerce-test",
  weatherApp: "https://github.com/adityaw24/weather-app",
  movieApp: "https://github.com/adityaw24/moviedb-app-main",
};

export const projectUrlDeploy = {
  movieApp: "https://official-movie-app.vercel.app/home",
  weatherApp: "https://weatherforecast-project.vercel.app",
};

export const dataTechStack = [
  {
    title: "Frontend",
    language: ["HTML", "CSS", "Javascript", "Typescript"],
    framework: ["ReactJs, NextJs, Tailwind, Bootstrap"],
    bg: "white",
    icon: {
      data: FrontendAnimation,
      height: 200,
      width: 200,
    },
    api: ["Axios"],
    tools: ["VS Code"],
  },
  {
    title: "Backend",
    language: ["Golang", "SQL"],
    framework: ["PostgreSql"],
    bg: "white",
    icon: {
      data: BackendAnimation,
      // data: ToolsAnimation,
      height: 200,
      width: 200,
    },
    api: ["Rest API", "CRUD"],
    tools: ["VS Code", "DBeaver", "Insomnia"],
  },
  // {
  //   title: "Tools",
  //   language: ["git"],
  //   framework: [],
  //   bg: "white",
  //   icon: {
  //     data: ToolsAnimation,
  //     height: 200,
  //     width: 200,
  //   },
  //   api: ["Postman", "Insomnia"],
  //   tools: ["VS Code", "DBeaver"],
  // },
];

export const dataProject = [
  {
    title: "E-Commerce Apps",
    language: ["HTML", "SCSS", "Javascript"],
    framework: ["ReactJs", "Bootstrap", "Redux"],
    bg: "white",
    feature: [
      "home",
      "detail product",
      "checkout page",
      "login & register",
      "update profile",
      "master product for admin only",
    ],
    api: ["Axios", "json-server", "json-auth"],
    tools: ["VS Code", "Insomnia"],
    image: ImageUrl.eCommerceApp,
    github: projectUrlGithub.eCommerceApp,
    web: "",
  },
  {
    title: "Live Weather Apps",
    language: ["HTML", "SCSS", "Javascript"],
    framework: ["Reactjs", "Tailwind CSS", "Semanthic UI"],
    bg: "white",
    feature: [
      "location access",
      "search location (city)",
      "daily forecast weather",
      "hourly forecast weather",
      "current weather",
      "history search location",
    ],
    api: ["Axios", "Open Weather API"],
    tools: ["VS Code", "Insomnia"],
    image: ImageUrl.weatherApp,
    github: projectUrlGithub.weatherApp,
    web: projectUrlDeploy.weatherApp,
  },
  {
    title: "Movie Apps",
    language: ["HTML", "CSS", "Javascript"],
    framework: ["Reactjs", "Material UI", "Styled-Component"],
    bg: "white",
    feature: [
      "Now playing",
      "Popular movies",
      "Coming soon movies",
      "Tranding movies",
    ],
    api: ["Axios", "Moviedb API"],
    tools: ["VS Code", "Insomnia"],
    image: ImageUrl.movieApp,
    github: projectUrlGithub.movieApp,
    web: projectUrlDeploy.movieApp,
  },
];
