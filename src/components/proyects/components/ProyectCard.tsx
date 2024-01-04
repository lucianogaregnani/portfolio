import { LuFileCode2 } from "react-icons/lu";
import { MdLiveTv } from "react-icons/md";
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
    <article className="flex flex-col md:flex-row justify-center items-center gap-3 group md:px-5">
      <a href={liveLink} target="_blank">
        <div className="rounded-xl overflow-hidden bg-proyect-card h-[14rem] w-[22rem]">
          <img
            src={image}
            alt="Proyect image"
            className="h-full w-full rounded-xl translate-x-11 translate-y-11 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700"
          />
        </div>
      </a>
      <div className="flex flex-col items-center text-center md:text-left md:items-start gap-2 max-w-sm">
        <h4 className="text-4xl font-semibold">{title}</h4>
        <p className="text-gray-700 dark:text-slate-100 text-xl font-light">
          {content}
        </p>
        <div className="text-sky-400 flex gap-2">
          {technologies.map((TechnologieIcon, index) => (
            <div key={index}>
                {TechnologieIcon}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={liveLink} target="_blank">
            <Button
              placeholder="Código"
              bgColor="bg-orange-500 dark:bg-yellow-500"
              bgHover="hover:bg-orange-400 dark:hover:bg-yellow-600"
            >
              <LuFileCode2 />
            </Button>
          </a>
          <a href={codeLink} target="_blank">
            <Button
              placeholder="Live"
            >
              <MdLiveTv />
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProyectCard;
