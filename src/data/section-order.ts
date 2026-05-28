export enum Section {
  Education = "Education",
  Experience = "Experience",
  Portfolio = "Portfolio",
  technical = "Techstacks",
  Certification = "Certification",
}

export const sectionOrder = [
  Section.Education,
  Section.Experience,
  Section.technical,
  Section.Portfolio,
  Section.Certification,
];

export const sectionIds: Record<Section, string> = {
  [Section.Education]: "education",
  [Section.Experience]: "experience",
  [Section.technical]: "techStacks",
  [Section.Portfolio]: "portfolio",
  [Section.Certification]: "certifications",
};
