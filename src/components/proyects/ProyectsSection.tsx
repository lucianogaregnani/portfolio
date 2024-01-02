import ProyectCard from "./components/ProyectCard";
import gifFinderLogo from "./assets/Captura de pantalla 2024-01-01 232218.png"
import { JSIcon, ReactIcon, TailwindIcon } from "../../icons/TechnologiesIcons";

const proyects = [
  {
    title: "Gif finder",
    content: "Una aplicacion que sirve para poder buscar gif de lo que quieras",
    image: gifFinderLogo,
    technologies: [<ReactIcon />, <JSIcon />, <TailwindIcon />],
    liveLink: "https://github.com/lucianogaregnani/gif-finder",
    codeLink: "https://monumental-begonia-aa119e.netlify.app/",
  },
];

function ProyectsSection() {
  return (
    <section className="dark:bg-slate-800 w-full flex flex-col items-center gap-7">
      <h2 className="text-4xl font-medium pt-5 md:text-5xl mb-4">Proyectos</h2>
      {proyects.map((proyect) => {
        const { title, content, image, technologies, liveLink, codeLink } = proyect;
        return (
          <ProyectCard
            title={title}
            content={content}
            image={image}
            technologies={technologies}
            liveLink={liveLink}
            codeLink={codeLink}
          />
        );
      })}
    </section>
  );
}

export default ProyectsSection;
