import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>

      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {experience.title} -{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>

        <ul className="mt-2 space-y-1 text-sm text-zinc-600 list-disc list-inside">
          {experience.description.map((item, index) => (
            <li className="pl-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
