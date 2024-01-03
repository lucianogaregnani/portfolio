import {
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../../icons/TechnologiesIcons";
import ExperienceCard from "./components/ExperienceCard";

const experiences = [
  {
    title: "Cartelera UNAHUR",
    position: "Desarrolador Frontend",
    date: "Agosto - Diciembre 2023",
    description: "por ahora no hay descripcion",
    technologies: [<ReactIcon />, <TypeScriptIcon />, <TailwindIcon />],
  },
];

function ExperienceSection() {
  return (
    <section className="dark:bg-slate-600 w-full text-center pb-5 bg-slate-100">
      <h2 className="text-4xl font-medium pt-5 md:text-5xl mb-6">
        Experiencia
      </h2>
      <div className="flex justify-center gap-10">
        {experiences.map(
          ({ title, position, date, description, technologies }) => (
            <ExperienceCard
              title={title}
              position={position}
              date={date}
              description={description}
              technologies={technologies}
            />
          )
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
