import { useState } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection";
import StudiesSection from "./components/studies-section/StudiesSection";
import ProyectsSection from "./components/proyects/ProyectsSection";
import ExperienceSection from "./components/experience-section/ExperienceSection";
import Contacto from "./components/contacto/Contacto";

function App() {
  const [darkTheme, setDarkTheme] = useState("");

  const handleChangeTheme = () => {
    setDarkTheme((prev) => (prev === "" ? "dark" : ""));
  };

  return (
    <div className={`${darkTheme && "dark"} ${darkTheme && "bg-slate-600"}`}>
        <Header changeTheme={handleChangeTheme} itsDarkTheme={darkTheme} />
        <main className="text-slate-700 dark:text-slate-100">
          <HeroSection />
          <ExperienceSection />
          <StudiesSection />
          <ProyectsSection />
        </main>
        <Contacto />
    </div>
  );
}

export default App;
