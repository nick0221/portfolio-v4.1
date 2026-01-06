export interface TechnicalSkill {
  category: string;
  skills: string[];
}

export const technicalSkillsData: TechnicalSkill[] = [
  {
    category: "Backend Development",
    skills: ["PHP", "REST APIs", "Laravel", "Express.js"],
  },
  {
    category: "Frontend Development",
    skills: [
      "React JS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "Vue.js",
      "Bootstrap",
    ],
  },
  {
    category: "Database",
    skills: ["MySQL", "SQLite", "MongoDB", "MariaDB", "MS SQL Server"],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Cloud Services and Hosting",
    skills: [
      "AWS",
      "Firebase",
      "Google Cloud Platform",
      "Hostinger",
      "Vercel",
      "Render Cloud",
    ],
  },
  {
    category: "Other tools and Technologies",
    skills: [
      "Docker",
      "Linux",
      "Nginx",
      "Apache",
      "Postman",
      "VS Code",
      "Laravel Herd",
      "PhpStorm",
    ],
  },
];

export default technicalSkillsData;
