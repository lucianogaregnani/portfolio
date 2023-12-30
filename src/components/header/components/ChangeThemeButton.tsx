import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

function ChangeThemeButton({ changeTheme, itsDarkTheme }:{ changeTheme: ()  => void, itsDarkTheme: string}) {
    return (
      <button onClick={changeTheme}>
        {
          itsDarkTheme ? <FiSun /> : <IoMoonOutline />
        }
      </button>
    );
}

export default ChangeThemeButton