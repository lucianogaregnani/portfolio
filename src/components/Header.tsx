import { FiSun } from "react-icons/fi";

function Header() {
  return (
    <header className="flex items-center justify-between py-5 text-2xl w-full font-oswald">
      <p className="text-4xl text-neutral-900 font-semibold">
        lg<span className="text-purple-600">.</span>
      </p>
      <div className="flex gap-5 items-center">
        <div className="flex gap-6 text-lg">
          <a href="#">Sobre mi</a>
          <a href="#">Proyectos</a>
          <a href="#">Estudios</a>
          <a href="#">Contacto</a>
        </div>
        <FiSun />
      </div>
    </header>
  );
}

export default Header;
