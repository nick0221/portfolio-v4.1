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
    projectGallery: [
      {
        urlImage: "/project-images/pv3/2.png",
        label: "Fullpage Dark mode",
      },
      { urlImage: "/project-images/pv3/3.png", label: "Light mode Page" },
    ],
  },
  {
    title: "URBANKiX - Ecommerce Website",
    description:
      "UrbanKix is a hobby sneaker web app that showcases curated streetwear-inspired kicks with smooth animations and modern UI design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HeroUI"],
    projectUrl: "https://urbankix.vercel.app",
    imageUrl: "/project-images/ecom/2.png",
    projectGallery: [
      {
        urlImage: "/project-images/ecom/1.png",
        label: "Full Screen Home Page",
      },
      { urlImage: "/project-images/ecom/4.png", label: "Shopping Page" },
      { urlImage: "/project-images/ecom/5.png", label: "My Account Page" },
      { urlImage: "/project-images/ecom/6.png", label: "Order List Page" },
      { urlImage: "/project-images/ecom/7.png", label: "Wish List Page" },
      {
        urlImage: "/project-images/ecom/8.png",
        label: "Billing address Settings",
      },
      { urlImage: "/project-images/ecom/9.png", label: "Payments Page" },
      { urlImage: "/project-images/ecom/10.png", label: "Edit Profile Page" },
      { urlImage: "/project-images/ecom/11.png", label: "Shoping Cart Page" },
      { urlImage: "/project-images/ecom/12.png", label: "Checkout Page" },
      { urlImage: "/project-images/ecom/13.png", label: "Login Page" },
      {
        urlImage: "/project-images/ecom/14.png",
        label: "Full Screen Darkmode Home Page",
      },
    ],
  },

  {
    title: "QuickSell Detroit – Real Estate Intake Form System",
    description:
      "A real estate lead capture system with an admin panel, enabling property owners to submit listings and allowing administrators to manage submissions and receive instant email notifications.",
    technologies: ["Tailwind CSS", "Laravel", "Livewire", "Alpine.js", "MySQL"],
    projectUrl: "https://www.quickselldetroit.co",
    imageUrl: "/project-images/quicksell/3.png",
    projectGallery: [
      {
        urlImage: "/project-images/quicksell/1.png",
        label: "Admin Login Page",
      },
      { urlImage: "/project-images/quicksell/2.png", label: "Admin Panel" },
      { urlImage: "/project-images/quicksell/3.png", label: "Form Page" },
    ],
  },

  {
    title: "Website Portfolio v2",
    description:
      "A clean, static portfolio website built with HTML, CSS, and JavaScript to  showcase my projects, skills, and experience as a full-stack web developer.",
    technologies: ["CSS", "JavaScript", "HTML"],
    projectUrl: "https://nick0221.github.io/",
    imageUrl: "/project-images/pv2/2.png",
    projectGallery: [
      { urlImage: "/project-images/pv2/1.png", label: "Fullpage Home" },
    ],
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
    projectGallery: [
      { urlImage: "/project-images/valley/1.png", label: "Booking Page" },
      { urlImage: "/project-images/valley/2.png", label: "Website Frontpage" },
      { urlImage: "/project-images/valley/3.png", label: "Website Frontpage" },
      { urlImage: "/project-images/valley/4.png", label: "Login Page" },
      { urlImage: "/project-images/valley/5.png", label: "Admin Dashboard" },
    ],
  },

  {
    title: "Allacapan Municipal Rural Health Unit Management System",
    description:
      "The Municipal Rural Health Unit Management System is a role-based, web-based platform developed exclusively for the Municipality of Allacapan, aimed at digitizing patient records, consultation tracking, scheduling, and reporting to improve local healthcare service delivery.",
    technologies: ["Laravel", "Tailwind CSS", "Alpine.js", "Livewire", "MySQL"],
    projectUrl: "",
    imageUrl: "/project-images/rhu/4.png",
    projectGallery: [
      {
        urlImage: "/project-images/rhu/1.png",
        label: "Treatment Records Page",
      },
      { urlImage: "/project-images/rhu/2.png", label: "Client Profile Page" },
      { urlImage: "/project-images/rhu/3.png", label: "Users Dashboard" },
      { urlImage: "/project-images/rhu/4.png", label: "Login Page" },
    ],
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
    projectGallery: [
      { urlImage: "/project-images/opms/1.png", label: "Login Page" },
      { urlImage: "/project-images/opms/2.png", label: "Users Dashboard" },
      { urlImage: "/project-images/opms/3.png", label: "Point of Sale" },
      { urlImage: "/project-images/opms/4.png", label: "Product Inventory" },
    ],
  },

  {
    title: "Advanced Service Kiosk Management System",
    description:
      "Advanced Service Kiosk is a secure, web-based internal Management Information System (MIS) designed to streamline and manage service operations within an organization.",
    technologies: ["Laravel", "jQuery", "MySQL", "Bootstrap", "Tailwind CSS"],
    projectUrl: "",
    imageUrl: "/project-images/ask/2.png",
    projectGallery: [
      { urlImage: "/project-images/ask/2.png", label: "Login Page" },
      { urlImage: "/project-images/ask/1.png", label: "Users dashboard" },
      { urlImage: "/project-images/ask/3.png", label: "Users dashboard" },
      { urlImage: "/project-images/ask/4.png", label: "Clients masterlists" },
    ],
  },

  {
    title: "Time Commitment Service System",
    description:
      "A web-based Time Commitment Service system rebuilt specially for queuing, performance, reliability, and accessibility.",
    technologies: ["PHP", "jQuery", "MySQL", "Bootstrap", "CSS"],
    projectUrl: "",
    imageUrl: "/project-images/tcs/1.png",
    projectGallery: [
      { urlImage: "/project-images/tcs/1.png", label: "Login Page" },
      { urlImage: "/project-images/tcs/2.png", label: "Users dashboard" },
      {
        urlImage: "/project-images/tcs/3.png",
        label: "Yealy/Monthly generated reports",
      },
      { urlImage: "/project-images/tcs/4.png", label: "Generated Reports" },
    ],
  },
];
