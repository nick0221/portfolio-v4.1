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
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "Vue.js",
    ],
  },
  {
    category: "Database Management",
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Cloud Services",
    skills: ["AWS", "Firebase", "Google Cloud Platform"],
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
