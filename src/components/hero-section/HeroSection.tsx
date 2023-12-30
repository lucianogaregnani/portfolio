import HeroImage from "./styled-components/HeroImage";
import HeroButtonsSections from "./components/HeroButtonsSection";

function HeroSection() {
  return (
    <section className="dark:bg-slate-800 px-0 md:mt-0 md:px-32  p-5 text-4xl font-semibold flex flex-col md:text-5xl md:flex-row items-center justify-center">
      <div className="max-w-md flex flex-col gap-4 items-center text-center md:text-left md:items-start">
        <h1 className="flex flex-col">
          Hola! Soy Luciano Garegnani.
          <span className="text-purple-gradient">
            Frontend Developer
          </span>
        </h1>
        <p className="text-2xl font-light md:3xl">
          Lorem ipsum dolor sit amet consectetur. Ligula nunc non commodo
          scelerisque gravida.
        </p>
        <HeroButtonsSections />
      </div>
      <HeroImage />
    </section>
  );
}

export default HeroSection;
