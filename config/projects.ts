import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "gogimail-client",
    companyName: "Gogimail Client",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX", "Full Stack"],
    shortDescription:
      "GogiMail Client is a browser-based frontend for AI-assisted email campaign creation and management.",
    githubLink: "https://github.com/SarraD-code/gogimail-client",
    techStack: [
      "React",
      "Vite",
      "Material UI",
      "Axios",
      "React Router DOM",
      "Sass",
    ],
    startDate: new Date("2026-02-27"),
    endDate: new Date("2026-03-19"),
    companyLogoImg: "/projects/gogimail/UI.png",
    pagesInfoArr: [
      // {
      //   title: "Landing & Sections",
      //   description:
      //     "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
      //   imgArr: ["/profile-img.jpg"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "GogiMail Client is a browser-based frontend for AI-assisted email campaign creation and management. It integrates with a backend service and provides:",
      ],
      bullets: [
        "Campaign setup and prompt-based email generation",
        "Audience selector and segment targeting",
        "Content variant generation and review workflow",
        "Analytics dashboard for performance insights",
        "Modern UI with MUI and Sass styling",
        "Streamlines email marketing by taking AI-generated content from idea to review quickly",
        "Supports multiple campaign workflows: generate, edit, preview, and publish",
        "Helps maintain consistency and speed across marketing operations",
        "UI features reduce manual setup time and improve collaboration",
      ],
    },
  },
  {
    id: "gogimail-server",
    companyName: "Gogimail Server",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Gogimail Server is a Node.js + Express backend that turns natural-language requests into safe, parameterized SQL queries via OpenAI.",
    githubLink: "https://github.com/SarraD-code/gogimail-server",
    techStack: ["Node.js", "express.js", "MySQL"],
    startDate: new Date("2026-02-27"),
    endDate: new Date("2026-03-19"),
    companyLogoImg: "/projects/gogimail/backend.svg",
    pagesInfoArr: [
      // {
      //   title: "Ingestion & Retrieval",
      //   description:
      //     "Designed ingestion and retrieval pipelines supporting multiple content sources with secure tenant isolation.",
      //   imgArr: ["/logo.png"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "Gogimail Server is a Node.js + Express backend that turns natural-language requests into safe, parameterized SQL queries via OpenAI. It then runs those queries on a MySQL customer catalog and crafts a user-facing answer or marketing message.",
      ],
      bullets: [
        "POST /api/query: accepts text prompts, generates and validates SQL queries, executes allowed queries, summarizes results, and expands into human-readable responses.",
        "GET /api/health: checks DB connection status.",
        "GET /api/catalog: returns allowed table/column catalog.",
        "AI-powered natural-language access to SQL data",
        "Built-in SQL allowlisting + injection-safe query validation",
        "Limits queries to SELECT + LIMIT <= 50 + column allowlist",
        "Maintains structured logging for /api/* requests",
        "Modular design: planner, validator, writer, routes",
      ],
    },
  },
  {
    id: "instock-client",
    companyName: "InStock Client",
    type: "Personal",
    category: ["Frontend", "Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "InStock Client is the frontend for an inventory management app built using React + Vite + Sass.",
    githubLink: "https://github.com/SarraD-code/instock-client",
    techStack: ["React", "Vite", "Sass"],
    startDate: new Date("2026-02-04"),
    endDate: new Date("2026-02-27"),
    companyLogoImg: "/projects/instock/UI.png",
    pagesInfoArr: [
      // {
      //   title: "Landing Page",
      //   description:
      //     "Modern landing page showcasing the template features, tech stack, and pricing options.",
      //   imgArr: ["/logo.png"],
      // },
      // {
      //   title: "Authentication System",
      //   description:
      //     "Complete authentication system with Supabase, protected routes, and role-based access control.",
      //   imgArr: ["/logo.png"],
      // },
      // {
      //   title: "Dashboard & Components",
      //   description:
      //     "Beautiful UI components with Magic UI, Radix primitives, and comprehensive dashboard templates.",
      //   imgArr: ["/logo.png"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "InStock Client is the frontend for an inventory management app built using React + Vite + Sass. It provides warehouse and inventory item CRUD, details views, search, sort, and filtering workflows.",
      ],
      bullets: [
        "Single-page React UI with routing for Warehouses, Inventory, and details pages",
        "Supports add/edit/delete forms with client-side validation",
        "Integrates with an API backend (inventory and warehouse endpoints) using axios",
        "Reusable components: lists, cards, modals, forms, status pills, buttons",
        "Clean style architecture using Sass partials and component-scoped CSS",
        "Warehouse list and detail pages",
        "Inventory list and detail pages",
        "Create/update/delete warehouse and inventory records",
        "Search, sort, and status filters for inventory",
        "Form validation utilities in src/utils/validation.js",
        "Accessible modals and navigation flow",
      ],
    },
  },
  {
    id: "instock-server",
    companyName: "InStock Server",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "InStock Server is the backend API for an inventory management system.",
    githubLink: "https://github.com/SarraD-code/instock-server",
    techStack: ["Node.js", "express.js", "MySQL"],
    startDate: new Date("2026-02-04"),
    endDate: new Date("2026-02-27"),
    companyLogoImg: "/projects/instock/backend.svg",
    pagesInfoArr: [
      // {
      //   title: "Card Views",
      //   description: "Front and back views of the interactive 3D card",
      //   imgArr: ["/projects/card/card_2.webp", "/projects/card/card_3.webp"],
      // },
      // {
      //   title: "Interactive Elements",
      //   description:
      //     "Custom links embedded in the 3D model with interactive animations",
      //   imgArr: ["/projects/card/card_1.webp"],
      // },
      // {
      //   title: "3D Model Development",
      //   description: "Blender project showcasing the model creation process",
      //   imgArr: ["/projects/card/card_4.webp"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "InStock Server is the backend API for an inventory management system. It provides warehouse, inventory, and category endpoints that allow managing product stock and warehouse metadata via a MySQL database.",
      ],
      bullets: [
        "Express 5 REST API",
        "MySQL database connection via mysql2/promise",
        "CRUD operations for warehouses and inventory items",
        "Inventory categories endpoint",
        "Input validation for relationships, email, phone, and quantities",
        "Centralized inventory control for multi-warehouse operations",
        "Data integrity with relational warehouse/inventory checks",
        "Simple JSON API suitable for integration with frontends or mobile apps",
        "Production-ready foundation with optimistic defaults and clear status responses",
      ],
    },
  },
  // {
  //   id: "inscript-hindi-typing",
  //   companyName: "Inscript Hindi Typing",
  //   type: "Personal",
  //   category: ["Web Dev", "UI/UX"],
  //   shortDescription:
  //     "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
  //   websiteLink: "https://hindityping.namanbarkiya.xyz",
  //   githubLink: "https://github.com/namanbarkiya/inscript-hindi-keyboard",
  //   techStack: ["HTML 5", "CSS 3", "Javascript"],
  //   startDate: new Date("2022-05-01"),
  //   endDate: new Date("2022-06-15"),
  //   companyLogoImg: "/projects/hindi-keyboard/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Typing Interface",
  //       description: "Minimal and user-friendly Inscript Hindi typing area",
  //       imgArr: ["/projects/hindi-keyboard/web_1.png"],
  //     },
  //     {
  //       title: "Copy and Download the file",
  //       description:
  //         "Export functionality allowing users to copy text or download as a document file",
  //       imgArr: [
  //         "/projects/hindi-keyboard/web_2.png",
  //         "/projects/hindi-keyboard/web_3.png",
  //       ],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
  //       "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
  //       "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
  //       "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
  //       "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
  //       "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
  //     ],
  //     bullets: [
  //       "Developed a user-friendly website for Inscript Hindi typing.",
  //       "Catered to the needs of Hindi writers in digital news and media.",
  //       "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
  //       "Mapped English and Hindi alphabets to provide a seamless typing experience.",
  //       "Utilized HTML and CSS to design a user-friendly UI.",
  //       "Implemented Local Storage to enable users to save and retrieve their work.",
  //       "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
  //       "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
  //     ],
  //   },
  // },
];

export const featuredProjects = Projects.slice(0, 3);
