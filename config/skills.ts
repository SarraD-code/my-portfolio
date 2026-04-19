import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "Vitest",
    description:
      "Maintain high code quality with Vitest, a blazing fast, Vite-native testing framework designed for seamless integration with React components and modern JavaScript environments.",
    rating: 5,
    icon: Icons.vitest,
  },
  {
    name: "Sass",
    description:
      "Develop robust, component-based UI systems using SASS to bridge the gap between complex logic and clean, accessible user interfaces.",
    rating: 5,
    icon: Icons.sass,
  },
   {
    name: "Vite",
    description:
      "Use native ES modules to provide an instant-start dev server and an optimized build pipeline for modern web applications.",
    rating: 5,
    icon: Icons.vite,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 3,
    icon: Icons.nextjs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 3,
    icon: Icons.tailwindcss,
  },
  {
    name: "Heroku",
    description:
      "Deploy, manage, and scale Full-Stack applications effortlessly with a fully managed PaaS that handles server infrastructure so you can focus on code.",
    rating: 4,
    icon: Icons.heroku,
  },
  {
    name: "Git",
    description:
      "Track, manage, and collaborate on code changes with the essential distributed version control system.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "React Router",
    description:
      "Manage navigation and build single-page applications with seamless, dynamic routing using React's declarative library.",
    rating: 5,
    icon: Icons.reactrouter,
  },
  {
    name: "Vercel",
    description:
      "Deploy and scale frontend applications instantly with the high-performance, cloud platform for modern web frameworks.",
    rating: 5,
    icon: Icons.vercel
  },
  {
    name: "Material UI",
    description:
      "Build beautiful and consistent user interfaces faster with the comprehensive library of customizable React components.",
    rating: 4,
    icon: Icons.mui
  },
  {
    name: "Framer Motion",
    description:
      "Bring user interfaces to life with smooth, production-ready animations using a powerful motion library for React.",
    rating: 4,
    icon: Icons.framer
  },
  {
    name: "Python",
    description:
      "Build scalable backend services, APIs, and automation scripts with the versatile, high-level programming language.",
    rating: 4,
    icon: Icons.python
  },
  {
    name: "Java",
    description:
      "Develop robust, cross-platform applications with the object-oriented language engineered for reliability and scalability at enterprise scale.",
    rating: 4,
    icon: Icons.java
  },
  {
    name: "REST API",
    description:
      "Enable seamless communication between frontend and backend services with the architectural style that uses standard HTTP methods to create, read, update, and delete resources.",
    rating: 5,
    icon: Icons.rest
  },
  {
    name: "AWS",
    description:
      "Build and deploy scalable applications with the world's most comprehensive and widely adopted cloud platform, offering compute, storage, and database solutions on demand.",
    rating: 3,
    icon: Icons.aws
  },
  {
    name: "GitHub",
    description:
      "Collaborate on code and manage software development with the industry-leading platform for version control and team-based project hosting.",
    rating: 5,
    icon: Icons.github
  },
  {
    name: "Webpack",
    description:
      "Bundle and optimize modern web applications with the powerful static module bundler that transforms and packages assets for production.",
    rating: 4,
    icon: Icons.webpack
  },
  {
    name: "Jira",
    description:
      "Streamline agile project management and track development workflows with the powerful tool for issue tracking, sprint planning, and team collaboration.",
    rating: 5,
    icon: Icons.jira
  },
  {
    name: "Agile/Scrum",
    description:
      "Manage agile software development with the iterative framework that organizes work into time-boxed sprints for continuous delivery and adaptive planning.",
    rating: 5,
    icon: Icons.scrum
  },
  {
    name: "CI/CD",
    description:
      "Automate and streamline software delivery with the practice of automatically integrating code changes and deploying them through a reliable, automated pipeline.",
    rating: 4,
    icon: Icons.cicd
  },
  {
    name: "Microservices",
    description:
      "Architect scalable and resilient applications by decomposing them into small, independent services that communicate over a network.",
    rating: 4,
    icon: Icons.microservices
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

// export const featuredSkills = skills.slice(0, 6);
export const featuredSkills = skills;

