import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import nextAuth from "../components/proyects/assets/next-auth.png";

export function ReactIcon() {
  return (
    <div className="text-sky-400">
      <FaReact size="30" />
    </div>
  );
}

export function JSIcon() {
  return (
    <div className="text-yellow-400">
      <IoLogoJavascript size="30" />
    </div>
  );
}

export function TailwindIcon() {
  return (
    <div className="text-sky-500">
      <SiTailwindcss size="30" />
    </div>
  );
}

export function TypeScriptIcon() {
  return (
    <div className="text-sky-500">
      <SiTypescript size="25" />
    </div>
  );
}

export function NextJSIcon() {
  return (
    <div className="text-black">
      <SiNextdotjs size="30" />
    </div>
  );
}

export function MongoDBIcon() {
  return (
    <div className="text-green-500">
      <SiMongodb size="30" />
    </div>
  );
}

export function NextAuthIcon() {
  return (
    <div className="text-black">
      <img src={nextAuth} alt="next auth logo" className="w-[28px] h-[30px]" />
    </div>
  );
}

export function HTMLIcon() {
  return (
    <div className="text-orange-500">
      <SiHtml5 size="30" />
    </div>
  );
}

export function ReactRouterIcon() {
  return (
    <div className="text-[#b4464f]">
      <SiReactrouter size="30" />
    </div>
  );
}

export function SassIcon() {
  return (
    <div className="text-pink-400">
      <SiSass size="30" />
    </div>
  );
}

export function ReduxIcon() {
  return (
    <div className="text-[#764abc]">
      <SiRedux size="30" />
    </div>
  );
}

export function ExpressIcon() {
  return (
    <div className="text-slate-500">
      <SiExpress size="30" />
    </div>
  );
}

export function JWTIcon() {
  return (
    <div className="text-red-500 flex gap-1 items-center">
      <SiJsonwebtokens size="30" />
      JWT
    </div>
  );
}

export function FireBaseIcon() {
  return (
    <div className="text-yellow-400 flex gap-1 items-center">
      <SiFirebase size="30" />
    </div>
  );
}
