import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Henrique Andrade | Data Analyst",
    short_name: "Handrade",
    description:
      "Henrique Andrade - Data Analyst with expertise in data visualization, statistical analysis, and business intelligence.",
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
      "data analysis",
      "machine learning",
      "data visualization",
      "data engineering",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
