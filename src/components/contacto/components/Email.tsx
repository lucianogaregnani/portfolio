import { useState } from "react";
import Button from "../../Buttons/Button";
import { BiSolidSend } from "react-icons/bi";
import { FaCheck, FaCopy } from "react-icons/fa";

function Email() {
  const [isCopied, setIsCopied] = useState("");

  const handleClick = () => {
    setIsCopied("garegnaniluciano@gmail.com");
    navigator.clipboard.writeText("garegnaniluciano@gmail.com");
    setTimeout(() => setIsCopied(""), 3000);
  };

  return (
    <section>
      <header className="font-bold dark:text-slate-400 text-center mb-3 text-3xl">
        <h2>Email</h2>
      </header>
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          disabled
          className="w-full max-w-md py-1.5 px-3 rounded-lg grid place-items-center bg-slate-300 text-slate-800"
          value="garegnaniluciano@gmail.com"
        />
        <div className="flex gap-2 items-center">
          <div className="relative group/tooltip">
            <a
              href="mailto:garegnaniluciano@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                placeholder=""
                bgColor="bg-indigo-500"
                className="p-2"
                bgHover="hover:bg-indigo-600"
              >
                <BiSolidSend size="15" />
              </Button>
            </a>
          </div>
          <div className="relative group/tooltip">
            <Button
              placeholder=""
              bgColor="bg-indigo-500"
              bgHover="hover:bg-indigo-600"
              onClick={handleClick}
              className="p-2"
            >
              {!isCopied ? <FaCopy size="15" /> : <FaCheck size="15" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Email;
