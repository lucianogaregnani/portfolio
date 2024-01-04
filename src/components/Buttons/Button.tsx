interface ButtonProps {
    placeholder: string,
    bgColor?: string,
    bgHover?: string
    textColor?: string,
    children?: React.ReactNode, 
    className?: string,
    onClick?: () => void
}

function Button({ placeholder, bgColor, bgHover, textColor, children, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`flex items-center ${bgColor || "bg-indigo-500"} px-2 p-1 gap-1 shadow-button ${textColor || "text-white"} text-xl ${bgHover || "hover:bg-indigo-600"} ${className}`}>
      {placeholder}
      {children}
    </button>
  );
}

export default Button;
