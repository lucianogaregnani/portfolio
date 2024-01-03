import { useState } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection";
import StudiesSection from "./components/studies-section/StudiesSection";
import ProyectsSection from "./components/proyects/ProyectsSection";
import ExperienceSection from "./components/experience-section/ExperienceSection";

function App() {
  const [darkTheme, setDarkTheme] = useState("");

  const handleChangeTheme = () => {
    setDarkTheme((prev) => (prev === "" ? "dark" : ""));
  };

  return (
    <div className={`${darkTheme && "dark"}`}>
        <Header changeTheme={handleChangeTheme} itsDarkTheme={darkTheme} />
        <main className="text-slate-700 dark:text-slate-100">
          <HeroSection />
          <ExperienceSection />
          <StudiesSection />
          <ProyectsSection />
        </main>
    </div>
  );
}

export default App;
