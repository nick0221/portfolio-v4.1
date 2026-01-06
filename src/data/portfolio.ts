export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Portfolio v4",
    description:
      "A personal portfolio website that showcases my skills, projects, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://github.com/yourusername/portfolio-website",
    imageUrl: "https://placehold.co/600x400/png",
  },
  {
    title: "URBANKiX - Ecommerce Website",
    description:
      "UrbanKix is a hobby sneaker web app that showcases curated streetwear-inspired kicks with smooth animations and modern UI design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HeroUI"],
    projectUrl: "https://urbankix.vercel.app",
    imageUrl: "https://placehold.co/600x400/png",
  },

  {
    title: "QuickSell Detroit – Real Estate Intake Form System",
    description:
      "A real estate lead capture system with an admin panel, enabling property owners to submit listings and allowing administrators to manage submissions and receive instant email notifications.",
    technologies: ["Tailwind CSS", "Laravel", "Livewire", "Alpine.js", "MySQL"],
    projectUrl: "https://www.quickselldetroit.co",
    imageUrl: "https://placehold.co/600x400/png",
  },

  {
    title: "Portfolio v2",
    description:
      "A clean, static portfolio website built with HTML, CSS, and JavaScript to  showcase my projects, skills, and experience as a full-stack web developer.",
    technologies: ["CSS", "JavaScript", "HTML"],
    projectUrl: "https://nick0221.github.io/",
    imageUrl: "https://placehold.co/600x400/png",
  },
];
