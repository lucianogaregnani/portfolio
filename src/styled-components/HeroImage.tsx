import CircleIcon from "../icons/CircleIcon";
import foto from '../../public/10c0406a-1040-4607-a9bc-ac678b775c4e-removebg-preview.png'

function HeroImage() {
  return (
    <div className="relative">
      <div className="z-10 text-lg absolute right-[-2rem] top-2/4 bg-white p-2 border-black border-2 shadow-[4px_4px_0px_rgb(0,0,0)]">
        Técnico en <span className="text-purple-600">programación</span>
      </div>
      <img
        src={foto}
        alt="foto"
        className="absolute top-8 left-12 w-[85%] rounded-full"
      />
      <CircleIcon />
    </div>
  );
}

export default HeroImage;
