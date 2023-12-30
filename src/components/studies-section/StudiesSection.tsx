import StudiesCard from "./components/StudiesCard";
import unahur from "./assets/unahur.png"

const studies = [
  {
    title: "Tecnico en programación",
    institutionImage: unahur,
    altImage: "logo unahur",
    date: "2021 - 2023",
    description: "Por ahora no hay ninguna descripcion",
    moreInfo:
      "https://unahur.edu.ar/tecnicatura-universitaria-en-programacion/",
  },
];

function StudiesSection() {
  return (
    <section className="flex flex-col bg-slate-100 dark:bg-slate-600 text-center h-full w-full p-5">
      <h2 className="text-4xl font-medium pt-5 md:text-5xl mb-4">Estudios</h2>
      {studies.map(
        ({
          title,
          institutionImage,
          altImage,
          date,
          description,
          moreInfo,
        }) => (
          <StudiesCard
            title={title}
            institutionImage={institutionImage}
            altImage={altImage}
            date={date}
            description={description}
            moreInfo={moreInfo}
          />
        )
      )}
    </section>
  );
}

export default StudiesSection;
