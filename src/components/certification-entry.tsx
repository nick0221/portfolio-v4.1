import { Certification } from "@/data/certification";

export default function certificationEntry({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{certification.date}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{certification.title}</h3>
          <p className="text-sm text-zinc-600">{certification.issuer}</p>
        </div>
      </div>
    </div>
  );
}
