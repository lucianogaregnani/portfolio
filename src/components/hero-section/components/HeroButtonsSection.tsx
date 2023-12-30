import { FaLinkedinIn } from "react-icons/fa";
import Icon from "../../../icons/Icon";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import Button from "../../Buttons/Button";
import cv from "../assets/CV_Luciano_Garegnani.pdf"

const icons = [
  {
    href: "https://www.linkedin.com/in/luciano-garegnani-33451920a/",
    backgroundColor: "bg-blue-600",
    bgHover: "hover:bg-blue-800",
    logoColor: "",
    IconButton: FaLinkedinIn,
  },
  {
    href: "https://github.com/lucianogaregnani",
    backgroundColor: "bg-gray-700",
    bgHover: "hover:bg-gray-500",
    logoColor: "",
    IconButton: PiGithubLogoFill,
  },
];

function HeroButtonsSections() {
  return (
    <div className="text-2xl flex gap-3">
      {icons.map(({ href, backgroundColor, bgHover, logoColor, IconButton }) => (
        <Icon
          key={href}
          href={href}
          bgColor={backgroundColor}
          bgHover={bgHover}
          logoColor={logoColor}
        >
          <IconButton />
        </Icon>
      ))}
      <a href={cv} download="CV_Garegnani">
        <Button placeholder="CV" bgColor="bg-orange-500" bgHover="hover:bg-orange-700">
            <MdOutlineFileDownload size={30} />
        </Button>
      </a>
    </div>
  );
}

export default HeroButtonsSections;
