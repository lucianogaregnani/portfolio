import HeroImage from "./styled-components/HeroImage";
import HeroButtonsSections from "./HeroButtonsSection";

function HeroSection() {
  return (
    <section className="p-5 text-4xl font-semibold flex flex-col justify-center mx-auto md:text-5xl md:flex-row items-center md:max-w-[65rem]">
      <div className="flex flex-col gap-4 items-center text-center md:text-left md:items-start">
        <h1 className="flex flex-col">
          Hola! Soy Luciano Garegnani.
          <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-purple-600 to-purple-400">
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
