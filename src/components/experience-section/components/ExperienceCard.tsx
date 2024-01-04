import { FaExternalLinkAlt } from "react-icons/fa";

interface ExperienceCardProps {
  title: string;
  position: string;
  date: string;
  descriptions: string[];
  technologies: React.ReactNode[];
  href: string;
}

function ExperienceCard({
  title,
  position,
  date,
  descriptions,
  technologies,
  href,
}: ExperienceCardProps) {
  return (
    <article className="relative max-w-md text-left flex gap-4 group p-3 shadow-experience-card bg-white dark:bg-slate-700">
      <a href={href} target="_blank">
        <div className="absolute right-5 top-5 group-hover:translate-x-2 group-hover:translate-y-[-0.5rem] transition-all duration-500 text-slate-500 group-hover:text-slate-400">
          <FaExternalLinkAlt />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div>
              <h4 className="text-2xl font-semibold flex gap-2 items-center">
                {title}
              </h4>
              <h6 className="text-xl text-slate-400">{position}</h6>
              <p className="text-md text-slate-400">{date}</p>
            </div>
          </div>
          <ul className="ml-4">
            {
              descriptions.map(description => <li className="list-disc" key={description}>{description}</li>)
            }
          </ul>
          <div className="flex gap-2 items-center">
            {technologies.map((Technology, index) => (
              <div key={index}>{Technology}</div>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}

export default ExperienceCard;
