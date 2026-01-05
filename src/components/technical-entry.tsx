import { TechnicalSkill } from "@/data/technical-skills";

export function TechnicalEntry({ technical }: { technical: TechnicalSkill }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-1">
        <span className="text-xs text-zinc-500 mt-1">{technical.category}</span>
        <div className="col-span-3 gap-2 flex flex-wrap">
          {technical.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
