import ProyectCard from "./components/ProyectCard";
import gifFinderLogo from "./assets/gif.png";
import magikIA from "./assets/magikia.png";
import quizabes from "./assets/quizabes.png";
import promptland from "./assets/promptland.png";
import shortUrl from "./assets/shorturl.png";

import {
  ExpressIcon,
  HTMLIcon,
  JSIcon,
  JWTIcon,
  MongoDBIcon,
  NextAuthIcon,
  NextJSIcon,
  ReactIcon,
  ReactRouterIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../../icons/TechnologiesIcons";

const proyects = [
  {
    title: "Short URL",
    content:
      "Con Short URL vas a poder tener tus URLS mucho más concisas y bonitas!",
    image: shortUrl,
    technologies: [
      <ReactIcon />,
      <TypeScriptIcon />,
      <ReactRouterIcon />,
      <TailwindIcon />,
      <ExpressIcon />,
      <JWTIcon />,
      <MongoDBIcon />,
    ],
    liveLink: "https://shorturl-gold.vercel.app/",
    codeLink: "https://github.com/lucianogaregnani/shortUrl",
  },
  {
    title: "Promptland",
    content:
      "En Promptland, tendrás la oportunidad de compartir tus sugerencias, permitiendo a otros usuarios utilizarlas para mejorar la comprensión de las inteligencias artificiales sobre tus necesidades.",
    image: promptland,
    technologies: [
      <NextJSIcon />,
      <NextAuthIcon />,
      <TypeScriptIcon />,
      <MongoDBIcon />,
      <TailwindIcon />,
    ],
    liveLink: "https://promptland-alpha.vercel.app",
    codeLink: "https://github.com/lucianogaregnani/promptland.git",
  },
  {
    title: "Quizabes",
    content:
      "En Quizabes vas a poder aprender de una forma divertida! Elige la temática que más te guste y trata de mejorar tu puntuación!",
    image: quizabes,
    technologies: [
      <ReactIcon />,
      <ReduxIcon />,
      <ReactRouterIcon />,
      <TypeScriptIcon />,
      <SassIcon />,
    ],
    liveLink: "https://quizabes.vercel.app",
    codeLink: "https://github.com/lucianogaregnani/quizabes.git",
  },
  {
    title: "Gif finder",
    content:
      "En está aplicación vas a poder buscar el gif que quieras, además de poder guardalo en tus favoritos!",
    image: gifFinderLogo,
    technologies: [<ReactIcon />, <JSIcon />, <TailwindIcon />],
    liveLink: "https://monumental-begonia-aa119e.netlify.app/",
    codeLink: "https://github.com/lucianogaregnani/gif-finder",
  },
  {
    title: "Magik IA",
    content:
      "Landing page que desarrolle para un parcial de la universidad, la cual se trata sobre un evento donde se presentara una nueva IA",
    image: magikIA,
    technologies: [<JSIcon />, <TailwindIcon />, <HTMLIcon />],
    liveLink: "https://lucianogaregnani.github.io/parcial-ciu/",
    codeLink: "https://github.com/lucianogaregnani/parcial-ciu",
  },
];

function ProyectsSection() {
  return (
    <section
      id="proyects-section"
      className="dark:bg-slate-600 bg-slate-100 w-full flex flex-col items-center gap-7 pb-10"
    >
      <h2 className="text-4xl font-medium pt-5 md:text-5xl">Proyectos</h2>
      {proyects.map((proyect) => {
        const { title, content, image, technologies, liveLink, codeLink } =
          proyect;
        return (
          <ProyectCard
            key={title}
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
