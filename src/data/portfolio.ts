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
    title: "URBANKiX - Ecommerce Website",
    description:
      "UrbanKix is a hobby sneaker web app that showcases curated streetwear-inspired kicks with smooth animations and modern UI design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HeroUI"],
    projectUrl: "https://urbankix.vercel.app",
    imageUrl:
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website that showcases my skills, projects, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://github.com/yourusername/portfolio-website",
    imageUrl: "https://placehold.co/600x400/png",
  },
];
