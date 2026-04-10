import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Henrique Andrade's portfolio website.",
    },
  },
  skills: {
    title: "Skills e Tools",
    description:
      "As principais habilidades e ferramentas que definem minha identidade profissional.",
    metadata: {
      title: "Skills",
      description:
        "Henrique Andrade's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projetos",
    description:
      "Alguns projetos que desenvolvi, focados em análise de dados e visualização.",
    metadata: {
      title: "Projects",
      description:
        "Some projects I've developed, focused on data analysis and visualization.",
    },
  },
  contact: {
    title: "Contato",
    description:
      "Entre em contato comigo para discutir oportunidades ou colaborações.",
    metadata: {
      title: "Contact",
      description: "Contact Henrique Andrade.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Naman Barkiya's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Henrique Andrade's resume.",
    metadata: {
      title: "Resume",
      description: "Henrique Andrade's resume.",
    },
  },
  blogs: {
    title: "Últimos Posts",
    description:
      "Confira os últimos posts sobre análise de dados, visualização e insights do setor.",
    metadata: {
      title: "Blogs",
      description:
        "Henrique Andrade's blog — thoughts on data analysis, visualization, and industry insights.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Naman Barkiya's professional journey and experience timeline.",
    },
  },
};
