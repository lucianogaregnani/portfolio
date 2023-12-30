interface LinkHeaderProps {
    href:string,
    tag:string,
    isSelected: boolean
    onClick: (tag:string) => void
}

function LinkHeader({ href, tag, isSelected, onClick }:LinkHeaderProps) {
    return (
        <a href={href} onClick={() => onClick(tag)} className={`${isSelected && "border-b-4 border-purple-600"} ${!isSelected && "hover:border-b-4 hover:border-purple-300"}`}>{tag}</a>
    );
}

export default LinkHeader;