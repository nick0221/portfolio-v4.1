export enum Section {
  Education = "education",
  Experience = "experience",
  Portfolio = "portfolio",
  Publication = "publication",
  News = "news",
  technical = "technical",
  Certification = "certification",
}

export const sectionOrder = [
  Section.News,
  Section.Education,
  Section.Publication,
  Section.Experience,
  Section.technical,
  Section.Portfolio,
  Section.Certification,
];

export const sectionIds: Record<Section, string> = {
  [Section.News]: "news",
  [Section.Education]: "education",
  [Section.Publication]: "publications",
  [Section.Experience]: "experience",
  [Section.technical]: "technical",
  [Section.Portfolio]: "portfolio",
  [Section.Certification]: "certifications",
};
