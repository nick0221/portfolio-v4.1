import { Certification } from "@/data/certification";
import { ArrowUpRight } from "lucide-react";

export default function CertificationEntry({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{certification.date}</span>
        <div className="col-span-3">
          <h3 className="text-sm text-zinc-600">{certification.issuer}</h3>
          <h3 className="text-base mb-1 font-serif font-semibold">
            {certification.credentialUrl ? (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300 text-blue-600"
              >
                {certification.title}

                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            ) : (
              certification.title
            )}
          </h3>
          <p className="text-sm text-zinc-600">
            {certification.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
