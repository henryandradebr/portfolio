import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Utilizo Python para desenvolver soluções de análise de dados e automação.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "Power BI",
    description:
      "No Power BI, crio dashboards interativos e relatórios visuais para análise de dados.",
    rating: 5,
    icon: Icons.powerbi,
  },
  {
    name: "Jupyter Notebook",
    description:
      "No Jupyter Notebook, realizo análises exploratórias de dados e compartilho insights.",
    rating: 4,
    icon: Icons.jupyter,
  },
  {
    name: "Git",
    description:
      "Utilizo Git para controle de versão, colaborando eficientemente em projetos de desenvolvimento.",
    rating: 4,
    icon: Icons.git,
  },
  {
    name: "MS Excel",
    description:
      "No MS Excel, organizo e analiso dados, criando fórmulas e gráficos para insights rápidos.",
    rating: 4,
    icon: Icons.excel,
  },
  {
    name: "DBeaver",
    description:
      "No DBeaver, gerencio bancos de dados relacionais, realizando consultas SQL e visualizando dados.",
    rating: 4,
    icon: Icons.dbeaver,
  },
  {
    name: "MySQL",
    description:
      "O MySQL é um sistema de gerenciamento de banco de dados relacional que armazena e consulta dados de forma eficiente.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "PostgreSQL",
    description:
      "O PostgreSQL é um sistema de gerenciamento de banco de dados relacional avançado, conhecido por sua robustez e suporte a recursos avançados.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "VS Code",
    description:
      "Utilizo o VS Code como meu ambiente de desenvolvimento para escrever código, depurar e gerenciar projetos de forma eficiente.",
    rating: 4,
    icon: Icons.vscode,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
