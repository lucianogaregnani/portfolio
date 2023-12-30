interface ButtonProps {
    placeholder: string,
    bgColor?: string,
    bgHover?: string
    textColor?: string,
    children?: React.ReactNode 
}

function Button({ placeholder, bgColor, bgHover, textColor, children }: ButtonProps) {
  return (
    <button className={`flex items-center ${bgColor || "bg-slate-700"} px-2 p-1 gap-1 shadow-button ${textColor || "text-white"} text-xl ${bgHover}`}>
      {placeholder}
      {children}
    </button>
  );
}

export default Button;
