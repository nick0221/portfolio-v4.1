export interface Certification {
  title: string;
  issuer: string;
  date: string;
  shortDescription?: string;
  credentialUrl?: string;
}

export const certificationData: Certification[] = [
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
