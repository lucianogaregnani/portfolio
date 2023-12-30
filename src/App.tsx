import { useState } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero-section/HeroSection";

function App() {
  const [darkTheme, setDarkTheme] = useState('')

  const handleChangeTheme = () => {
    setDarkTheme(prev => prev === '' ? 'dark' : '')
  }

  return (
    <div className={darkTheme && "dark"}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-800 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="max-w-6xl mx-auto">
        <Header changeTheme={handleChangeTheme} itsDarkTheme={darkTheme} />
        <main className="text-slate-700 dark:text-slate-200">
          <HeroSection />
        </main>
      </div>
    </div>
  );
}

export default App;
