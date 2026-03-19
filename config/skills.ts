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
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
