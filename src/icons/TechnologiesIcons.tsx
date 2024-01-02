import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

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
    <div className="text-yellow-300">
      <SiTypescript size="30" />
    </div>
  );
}

export function NextJSIcon() {
  return (
    <div className="text-yellow-300">
      <SiNextdotjs size="30" />
    </div>
  );
}
