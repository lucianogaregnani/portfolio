import { useState } from "react";
import { FiSun } from "react-icons/fi";
import LinkHeader from "./LinkHeader";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";

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

function ChangeThemeButton({ changeTheme, itsDarkTheme }:{ changeTheme: ()  => void, itsDarkTheme: string}) {
  return (
    <button onClick={changeTheme}>
      {
        itsDarkTheme ? <FiSun /> : <IoMoonOutline />
      }
    </button>
  );
}

function Header({ changeTheme, itsDarkTheme }:{ changeTheme: ()  => void, itsDarkTheme: string}) {
  const [selectedItem, setSelectedItem] = useState("Sobre mi");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <header className="dark:text-white sticky z-40 top-0 w-full flex items-center justify-between py-5 text-2xl font-oswald backdrop-blur-sm">
      <p className="pl-3 text-4xl text-neutral-900 dark:text-slate-200 font-semibold xl:pl-0">
        lg<span className="text-purple-600">.</span>
      </p>
      <div className="gap-5 md:items-center hidden md:flex">
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
      </div>
      <div className="w-full md:hidden">
        {isOpen && (
          <div className="absolute z-50 top-0 right-0 h-screen w-3/4 bg-purple-900/95">
            <button className="absolute right-0 pt-5 pr-3">
              <MdClose size={40} onClick={() => setIsOpen(false)} />
            </button>
            <div className="flex flex-col items-center h-full justify-center text-4xl gap-6 text-white font-medium">
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
      </div>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="md:hidden pr-3">
          <RxHamburgerMenu size={30} />
        </button>
      )}
    </header>
  );
}

export default Header;
