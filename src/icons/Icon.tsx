interface IconProps {
    alt?: string,
    href?: string,
    backgroundColor?: string
    logoColor?: string
    children: React.ReactNode
}

function Icon({ href, backgroundColor, children, logoColor }: IconProps) {
    return (
        <a href={href || "#"} className={`${logoColor ? logoColor : "text-white"} `}>
            <div className={`${backgroundColor ? backgroundColor : "bg-black"} p-2 shadow-[4px_4px_0px_rgb(50,50,50)]`}>
                { children }
            </div>
        </a>
    );
}

export default Icon;