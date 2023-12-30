import { useState } from "react";
import LinkHeader from "./components/LinkHeader";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import ChangeThemeButton from "./components/ChangeThemeButton";

const links = [
  {
    tag: "Sobre mi",
    href: "#",
  },
  {
    tag: "Proyectos",
    href: "#",
  },
  {
    tag: "Estudios",
    href: "#",
  },
  {
    tag: "Contacto",
    href: "#",
  },
];

function Header({ changeTheme, itsDarkTheme }:{ changeTheme: ()  => void, itsDarkTheme: string}) {
  const [selectedItem, setSelectedItem] = useState("Sobre mi");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <header className="px-5 md:px-[15rem] bg-white shadow-sm dark:bg-slate-800 dark:text-white sticky top-0 z-40 w-full flex items-center justify-between py-5 text-2xl font-oswald">
      <p className="text-4xl text-neutral-900 dark:text-slate-200 font-semibold">
        lg<span className="text-purple-600">.</span>
      </p>
      <nav className="gap-5 md:items-center hidden md:flex">
        <div className="flex gap-6 text-lg">
          {links.map((link) => (
            <LinkHeader
              key={link.tag}
              onClick={handleClick}
              tag={link.tag}
              href={link.href}
              isSelected={selectedItem === link.tag}
            />
          ))}
        </div>
        <ChangeThemeButton changeTheme={changeTheme} itsDarkTheme={itsDarkTheme} />
      </nav>
      <nav className="w-full md:hidden">
        {isOpen && (
          <div className="absolute z-50 top-0 right-0 h-screen w-3/4 bg-white dark:bg-slate-700">
            <button className="absolute right-0 pt-5 pr-5">
              <MdClose size={40} onClick={() => setIsOpen(false)} />
            </button>
            <div className="flex flex-col items-center h-full justify-center text-4xl gap-6 text-slate-800 dark:text-slate-100 font-medium">
              {links.map((link) => (
                <LinkHeader
                  key={link.tag}
                  onClick={handleClick}
                  tag={link.tag}
                  href={link.href}
                  isSelected={selectedItem === link.tag}
                />
              ))}
              <ChangeThemeButton changeTheme={changeTheme} itsDarkTheme={itsDarkTheme} />
            </div>
          </div>
        )}
      </nav>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <RxHamburgerMenu size={30} />
        </button>
      )}
    </header>
  );
}

export default Header;
