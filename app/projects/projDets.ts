export type ProjProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
  };
  
  export const devProjects = [
    {
      id: 0,
      name: "SortEnvisioner 2.0",
      description:
        "Web Visualization tool for sorting algorithms.",
      technologies: ["ReactJS", "ViteJS", "MaterialUI"],
      github: "https://github.com/Dushyant029/SortEnvisioner-2.0",
      demo: "https://sort-envisioner-v2.netlify.app/",
      image: require(".//../../public/projects/i1.png"),
      available: true,
    },
    {
      id: 1,
      name: "Crypnel",
      description:
        "Crypnel UI provides users with a comprehensive view of various aspects of the cryptocurrency market",
      technologies: ["ReactJS", "SaSS", "ReCharts"],
      github: "https://github.com/Dushyant029/Crypto-Panel",
      demo: "https://github.com/Dushyant029/Crypto-Panel",
      image: require(".//../../public/projects/i2.png"),
      available: true,
    },
    {
      id: 2,
      name: "Amdy Edu",
      description:
        "AmDy helps learners study at their own pace, improves learner retention, allows the creation of a unique learning environment.",
      technologies: ["ReactNative", "NodeJS", "AV Config"],
      github: "https://github.com/Dushyant029/AmDy-Edu",
      demo: "https://github.com/Dushyant029/AmDy-Edu",
      image: require(".//../../public/projects/i3.png"),
      available: true,
    },
    {
      id: 3,
      name: "Oleg Meet",
      description:
        "Oleg Meet is a web app which helps to make 1:1 interview session which instantly create a meeting link",
      technologies: ["Socket.io", "ReactJS", "JSPDF-Library"],
      github: "https://github.com/Dushyant029/Oleg-Meet",
      demo: "https://vimeo.com/627635771",
      image: require(".//../../public/projects/i4.png"),
      available: true,
    },
    {
      id: 4,
      name: "Deski",
      description:
        "A Full responsive static-page Website built using Html, Css, Javascript, Bootstrap and jQuery",
      technologies: ["JavaScript", "CSS", "jQuery"],
      github: "https://github.com/Dushyant029/Coursify-demo-task",
      demo: "https://coursify-demotask-kdr.netlify.app/",
      image: require(".//../../public/projects/i5.png"),
      available: true,
    },
  ]