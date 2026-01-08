export enum Section {
  Education = "Education",
  Experience = "Experience",
  Portfolio = "Portfolio",
  // Publication = "publication",
  // News = "news",
  technical = "Techstacks",
  Certification = "Certification",
}

export const sectionOrder = [
  // Section.News,
  Section.Education,
  // Section.Publication,
  Section.Experience,
  Section.technical,
  Section.Portfolio,
  Section.Certification,
];

export const sectionIds: Record<Section, string> = {
  // [Section.News]: "news",
  [Section.Education]: "education",
  // [Section.Publication]: "publications",
  [Section.Experience]: "experience",
  [Section.technical]: "techStacks",
  [Section.Portfolio]: "portfolio",
  [Section.Certification]: "certifications",
};
