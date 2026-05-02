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
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "dashboard-olist",
    companyName: "Power BI - Dashboard Olist",
    type: "Personal",
    category: ["Data Analysis", "Power BI", "Data Visualization"],
    shortDescription:
      "Um dashboard interativo e visualmente atraente criado usando Power BI para analisar o conjunto de dados de vendas do Olist.",
    websiteLink:
      "https://app.powerbi.com/view?r=eyJrIjoiMTM0MDUzNzUtZGYwZS00YTdiLWFjNDQtMDVlZWU2Njg3YjAxIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9&embedImagePlaceholder=true&pageName=bbf1c6c7a07ed394f5cc",
    githubLink: "https://github.com/henryandradebr/olist-ecommerce-analysis",
    techStack: ["Power BI", "PostgreSQL", "CSV", "SQL", "DBeaver"],
    companyLogoImg: "/projects/portfolio/cover-dashboard-olist.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
        imgArr: ["/"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Dashboard com os princiapis KPIs de pedidos, frete, produtos e clientes. Com os dados disponibilizados pela OLIST no Kaggle foi possivel baixar os arquivos CSVs e realizar a analise dos dados trazendo muitas informações relevantes",
        "O dashboard é projetado para ser fácil de usar e navegar, permitindo que os usuários explorem os dados e descubram insights por conta própria. Ele é ideal para profissionais de negócios, analistas de dados e qualquer pessoa interessada em entender melhor o desempenho do Olist e identificar oportunidades de crescimento.",
      ],
      bullets: [
        "Created an open-source Next.js portfolio template recognized and forked by developers worldwide.",
        "Ranked #1 on ChatGPT search for “best Next.js portfolio template GitHub” through AEO/GEO optimization.",
        "Maintained a fast, responsive UI with a minimal, themeable design system.",
      ],
    },
  },
  {
    id: "convot",
    companyName: "Convot",
    type: "Personal",
    category: ["Python", "Machine Learning", "Data Science"],
    shortDescription:
      "Production-ready AI chatbot platform that crawls, indexes, and embeds knowledge from PDFs/URLs/text to deliver source-grounded answers via a one-line widget.",
    techStack: ["Git", "Python"],
    companyLogoImg: "/projects/convot/logo.png",
    pagesInfoArr: [
      {
        title: "Ingestion & Retrieval",
        description:
          "Designed ingestion and retrieval pipelines supporting multiple content sources with secure tenant isolation.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Convot is a production-ready AI chatbot platform designed to be embedded on any website with a single line widget.",
        "It supports crawling and indexing knowledge from PDFs, URLs, and plain text, and it returns context-aware, source-grounded answers with integrated analytics.",
      ],
      bullets: [
        "Built a production-ready AI chatbot platform with integrated analytics and a one-line embed widget.",
        "Designed ingestion and retrieval pipelines to support multiple sources (PDFs, URLs, text) with tenant isolation.",
        "Focused on reliability, security, and traceable answers by grounding responses in retrieved sources.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
