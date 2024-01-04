interface LinkHeaderProps {
    href:string,
    tag:string,
    isSelected: boolean
    onClick: (tag:string) => void
}

function LinkHeader({ href, tag, isSelected, onClick }:LinkHeaderProps) {
    return (
        <a href={href} onClick={() => onClick(tag)} className={`underline-offset-[5px] decoration-[0.3rem] ${isSelected && "underline decoration-indigo-600 dark:decoration-purple-600"} ${!isSelected && "hover:underline hover:decoration-indigo-400 dark:hover:decoration-purple-400"}`}>{tag}</a>
    );
}

export default LinkHeader;