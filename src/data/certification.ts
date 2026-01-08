export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certificationData: Certification[] = [
  {
    title: "Full Stack Web Development Certification",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl:
      "https://www.freecodecamp.org/certification/nick0221/responsive-web-design",
  },
];
