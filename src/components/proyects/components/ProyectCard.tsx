import { FaCode } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa6";
import Button from "../../Buttons/Button";

interface ProyectCardProps {
  title: string;
  content: string;
  technologies: React.ReactNode[];
  image: string;
  liveLink: string;
  codeLink: string;
}

function ProyectCard({
  title,
  content,
  technologies,
  image,
  liveLink,
  codeLink,
}: ProyectCardProps) {
  return (
    <article className="flex justify-center items-center gap-3 group">
      <a href={liveLink} target="_blank">
        <div className="rounded-xl overflow-hidden bg-proyect-card h-[14rem] w-[22rem]">
          <img
            src={image}
            alt="Proyect image"
            className="h-full w-full rounded-xl translate-x-11 translate-y-11 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700"
          />
        </div>
      </a>
      <div className="flex flex-col gap-2 max-w-sm">
        <h4 className="text-5xl font-semibold">{title}</h4>
        <p className="text-gray-700 dark:text-slate-100 text-xl font-light">
          {content}
          <span className="text-purple-600 font-semibold">.</span>
        </p>
        <div className="text-sky-400 flex gap-2">
          {technologies.map((TechnologieIcon) => (
            TechnologieIcon
          ))}
        </div>
        <div className="flex gap-4">
          <a href={liveLink} target="_blank">
            <Button
              placeholder="Code"
              bgColor="bg-orange-500 dark:bg-yellow-500"
              bgHover="hover:bg-orange-600 dark:hover:bg-yellow-600"
            >
              <FaCode />
            </Button>
          </a>
          <a href={codeLink} target="_blank">
            <Button
              placeholder="Live"
              bgColor="bg-purple-600"
              bgHover="hover:bg-purple-700"
            >
              <FaTwitch />
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProyectCard;
