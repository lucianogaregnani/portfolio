interface IconProps {
    alt?: string,
    href?: string,
    bgColor?: string
    bgHover?: string
    logoColor?: string
    children: React.ReactNode
}

function Icon({ href, bgColor, bgHover,children, logoColor }: IconProps) {
    return (
        <a href={href || "#"} className={`${logoColor ? logoColor : "text-white"}`} target="_blank">
            <div className={`${bgColor || "bg-black"} p-2 shadow-button ${bgHover}`}>
                { children }
            </div>
        </a>
    );
}

export default Icon;