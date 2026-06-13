export interface Certification {
  title: string;
  issuer: string;
  date: string;
  shortDescription?: string;
  credentialUrl?: string;
}

export const certificationData: Certification[] = [
  {
    title: "Design Prompts for Everyday Work Tasks",
    issuer: "Google",
    date: "June 2026",
    shortDescription:
      "",
    credentialUrl: "https://coursera.org/share/f51cd03ad3fbf5e892e2d2e30179ff62",
  },

   {
    title: "Start Writing Prompts like a Pro",
    issuer: "Google",
    date: "June 2026",
    shortDescription:
      "",
    credentialUrl: "https://coursera.org/share/9012be5295c6cbb969ac755fa4059d6d",
  },

  {
    title: "Web Development",
    issuer: "SoloLearn",
    date: "July 2025",
    shortDescription:
      "Completed the course by demonstrating theoretical and practical understanding of Web development.",
    credentialUrl: "https://www.sololearn.com/certificates/CC-9ETQ2XDR",
  },

  {
    title: "Data Analytics with AI",
    issuer: "SoloLearn",
    date: "July 2025",
    shortDescription:
      "Completed the course by demonstrating theorictical and practical undestanding of Data Analytics with AI.",
    credentialUrl: "https://www.sololearn.com/certificates/CC-NT8WNV73",
  },

  
];
