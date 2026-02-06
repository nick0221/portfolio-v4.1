export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Romnick S. Sevilla",
  title: "Full Stack Web Developer & DevOps Enthusiast",
  institution: "",
  // Note that links work in the description
  description:
    "I am a highly skilled developer with a passion for creating innovative and user-friendly web applications. With a strong background in frontend and backend development.",
  email: "nick022190@gmail.com",
  imageUrl: "/profile-pic.png",
  // googleScholarUrl: "https://",
  githubUsername: "nick0221",
  linkedinUsername: "nickzworld",
  twitterUsername: "",
  // blogUrl: "https://",
  cvUrl: "/cv/RSevilla-FullstackDeveloper.pdf",
  institutionUrl: "https://www.stanford.edu",
  // altName: "Nick",
  // secretDescription: "I like dogs.",
};
