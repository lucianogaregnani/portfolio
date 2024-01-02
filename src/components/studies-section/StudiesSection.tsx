import StudiesCard from "./components/StudiesCard";
import { studies } from "./studies";

function StudiesSection() {
  return (
    <section className="flex flex-col bg-slate-100 dark:bg-slate-600 text-center h-full w-full p-5">
      <h2 className="text-4xl font-medium md:text-5xl mb-4">Estudios</h2>
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
            key={description}
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
