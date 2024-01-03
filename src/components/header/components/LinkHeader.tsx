interface LinkHeaderProps {
    href:string,
    tag:string,
    isSelected: boolean
    onClick: (tag:string) => void
}

function LinkHeader({ href, tag, isSelected, onClick }:LinkHeaderProps) {
    return (
        <a href={href} onClick={() => onClick(tag)} className={`underline-offset-[5px] decoration-[0.3rem] ${isSelected && "underline decoration-purple-600"} ${!isSelected && "hover:underline hover:decoration-purple-300"}`}>{tag}</a>
    );
}

export default LinkHeader;