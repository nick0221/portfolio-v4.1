export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  projectGallery?: { urlImage: string; label: string }[];
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Website Portfolio v4",
    description:
      "A personal portfolio website that showcases my skills, projects, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://nickdevs.vercel.app",
    imageUrl: "/project-images/portfolio-v4.png",
  },
  {
    title: "Website Portfolio v3",
    description:
      "A personal portfolio website that showcases my skills, projects, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HeroUI"],
    projectUrl: "",
    imageUrl: "/project-images/pv3/3.png",
  },
  {
    title: "URBANKiX - Ecommerce Website",
    description:
      "UrbanKix is a hobby sneaker web app that showcases curated streetwear-inspired kicks with smooth animations and modern UI design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HeroUI"],
    projectUrl: "https://urbankix.vercel.app",
    imageUrl: "/project-images/ecom/2.png",
  },

  {
    title: "QuickSell Detroit – Real Estate Intake Form System",
    description:
      "A real estate lead capture system with an admin panel, enabling property owners to submit listings and allowing administrators to manage submissions and receive instant email notifications.",
    technologies: ["Tailwind CSS", "Laravel", "Livewire", "Alpine.js", "MySQL"],
    projectUrl: "https://www.quickselldetroit.co",
    imageUrl: "/project-images/quicksell/3.png",
  },

  {
    title: "Website Portfolio v2",
    description:
      "A clean, static portfolio website built with HTML, CSS, and JavaScript to  showcase my projects, skills, and experience as a full-stack web developer.",
    technologies: ["CSS", "JavaScript", "HTML"],
    projectUrl: "https://nick0221.github.io/",
    imageUrl: "/project-images/pv2/2.png",
  },

  {
    title: "Valley & Coast Hotel Reservation System",
    description:
      "The Valley & Coast Hotel Reservation System is a web-based application designed to streamline booking, guest management, and hotel operations for Valley & Coast Hotel.",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "Alpine.js",
      "Livewire",
      "MySQL",
      "Bootstrap",
    ],
    projectUrl: "",
    imageUrl: "/project-images/valley/4.png",
  },

  {
    title: "Allacapan Municipal Rural Health Unit Management System",
    description:
      "The Municipal Rural Health Unit Management System is a role-based, web-based platform developed exclusively for the Municipality of Allacapan, aimed at digitizing patient records, consultation tracking, scheduling, and reporting to improve local healthcare service delivery.",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "Alpine.js",
      "Livewire",
      "MySQL",
      "Bootstrap",
    ],
    projectUrl: "",
    imageUrl: "/project-images/rhu/4.png",
  },

  {
    title: "Online Pharmacy Management Information System",
    description:
      "The Online Pharmacy Management Information System is a secure, role-based web application designed to manage pharmacy operations, including inventory, prescriptions, sales, and reporting. It streamlines internal workflows and enhances service accuracy for both in-store and online customers.",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "Alpine.js",
      "Livewire",
      "MySQL",
      "Bootstrap",
    ],
    projectUrl: "",
    imageUrl: "/project-images/opms/1.png",
  },

  {
    title: "Advanced Service Kiosk Management System",
    description:
      "Advanced Service Kiosk is a secure, web-based internal Management Information System (MIS) designed to streamline and manage service operations within an organization.",
    technologies: ["Laravel", "jQuery", "MySQL", "Bootstrap", "Tailwind CSS"],
    projectUrl: "",
    imageUrl: "/project-images/ask/2.png",
  },

  {
    title: "Time Commitment Service System",
    description:
      "A web-based Time Commitment Service system rebuilt specially for queuing, performance, reliability, and accessibility.",
    technologies: ["PHP", "jQuery", "MySQL", "Bootstrap", "CSS"],
    projectUrl: "",
    imageUrl: "/project-images/tcs/1.png",
  },
];
