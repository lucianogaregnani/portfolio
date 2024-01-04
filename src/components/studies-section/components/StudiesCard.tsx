import { MdOutlineDateRange } from "react-icons/md";
import Button from "../../Buttons/Button";
import { IoInformationCircle } from "react-icons/io5";

interface StudiesCardProps {
  institutionImage: string;
  altImage: string;
  title: string;
  date: string;
  description: string;
  moreInfo?: string;
}

function StudiesCard({
  institutionImage,
  altImage,
  title,
  date,
  description,
  moreInfo,
}: StudiesCardProps) {
  return (
    <article className="flex flex-col md:flex-row items-center max-w-3xl mx-auto bg-white p-3 shadow-card dark:bg-slate-700">
      <img
        src={institutionImage}
        alt={altImage}
        className="rounded-2xl border-[1px] w-40 md:w-[11rem]"
      />
      <div className="text-center md:text-left ml-3 flex flex-col gap-1 ">
        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        <p className="flex items-center justify-center md:justify-start gap-1">
          <MdOutlineDateRange />
          {date}
        </p>
        <p>{description}</p>
        {moreInfo && (
          <a href={moreInfo} target="_blank" className="flex justify-center md:justify-start">
            <Button
              placeholder="Más info"
            >
              <IoInformationCircle />
            </Button>
          </a>
        )}
      </div>
    </article>
  );
}

export default StudiesCard;
