import Header from "./components/Header";
import Icon from "./icons/Icon";
import HeroImage from "./styled-components/HeroImage";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";

function App() {
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    <div className="max-w-6xl mx-auto">
      <Header />
      <main className="text-slate-700">
        <section className="text-5xl font-semibold flex w-full items-center justify-around">
          <div className="flex flex-col gap-4">
            <h1 className="flex flex-col">
              Hola! Soy Luciano Garegnani.
              <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-purple-600 to-purple-400">Frontend Developer</span>
            </h1>
            <p className="text-2xl font-light">Lorem ipsum dolor sit amet consectetur. Ligula nunc non commodo scelerisque gravida.</p>
            <div className="text-2xl flex gap-3">
              <Icon href="" backgroundColor="bg-blue-600">
                <FaLinkedinIn />
              </Icon>
              <Icon href="" backgroundColor="bg-gray-700">
                <PiGithubLogoFill />
              </Icon>
              <button className="flex items-center bg-orange-400 px-2 p-1 gap-1 shadow-[4px_4px_0px_rgb(50,50,50)] text-white text-xl">
                CV
                <MdOutlineFileDownload size={30} />
              </button>
            </div>
          </div>
          <HeroImage />
        </section>
      </main>
    </div>
    </>
  );
}

export default App;
