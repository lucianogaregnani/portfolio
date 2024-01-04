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
    description: [
      "Desarrolle las diferentes vistas de las carteleras de la universidad",
      "Implemente el servicio de Websockets en la cartelera, para recibir los cambios en tiempo real",
      "Desarrolle y diseñe la sección de administración de pantallas, la cual permite cambiar la vista de la cartelera"
    ],
    technologies: [<ReactIcon />, <TypeScriptIcon />, <TailwindIcon />],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7127490871079370754/"
  },
];

function ExperienceSection() {
  return (
    <section className="dark:bg-slate-600 w-full text-center pb-5 bg-slate-100 px-10">
      <h2 className="text-4xl font-medium pt-5 md:text-5xl mb-6">
        Experiencia extracurricular
      </h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {experiences.map(
          ({ title, position, date, description, technologies, href }) => (
            <ExperienceCard
              title={title}
              position={position}
              date={date}
              descriptions={description}
              technologies={technologies}
              href={href}
            />
          )
        )}
      </div>
    </section>
  );
}

export default ExperienceSection;
