import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sarra Drine | Full Stack Engineer",
    short_name: "Sarra Drine",
    description:
      "Sarra Drine - Full Stack Engineer working at the intersection of user experience and scalable architecture. Expert in React, Node, and MySQL, I build end-to-end solutions where performance meets stability through Vitest.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
