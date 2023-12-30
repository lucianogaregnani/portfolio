import foto from '../assets/10c0406a-1040-4607-a9bc-ac678b775c4e-removebg-preview.png'

function HeroImage() {
  return (
    <div className="mt-4 relative flex justify-center items-center xl:items-center xl:p-0 w-3/4 md:w-[25rem] md:mt-0">
      <div className="text-slate-600 dark:text-slate-100 z-20 text-sm md:text-lg absolute bottom-0 bg-white p-2 shadow-card dark:bg-slate-700">
        Técnico en <span className="text-purple-600 dark:text-yellow-400">programación</span>
      </div>
      <img
        src={foto}
        alt="foto"
        className="z-10 rounded-full h-full w-full min-w-[20rem] max-w-[25rem]"
      />
      <div className="absolute w-full h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full min-w-[20rem] max-w-[25rem]" />
    </div>
  );
}

export default HeroImage;