import { FaExternalLinkAlt } from "react-icons/fa";

interface ExperienceCardProps {
  title: string;
  position: string;
  date: string;
  description: string;
  technologies: React.ReactNode[];
}

function ExperienceCard({
  title,
  position,
  date,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="relative max-w-md text-left flex gap-4 group p-3 shadow-experience-card">
      <div className="absolute right-5 top-5 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem] transition-all duration-500 text-slate-500 group-hover:text-slate-400">
        <FaExternalLinkAlt />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div>
            <h4 className="text-2xl font-semibold flex gap-2 items-center">
              {title}
            </h4>
            <h6 className="text-xl text-slate-400">{position}</h6>
            <p className="text-md text-slate-400">{date}</p>
          </div>
        </div>
        <p>{description}</p>
        <div className="flex gap-2 p-1 rounded-xl">
          {technologies.map((Technology, index) => (
            <div key={index}>
                {Technology}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
