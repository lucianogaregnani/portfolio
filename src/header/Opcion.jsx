function Opcion({id, children}) {
    return(
        <a href={`#${id}`} className='pf-header-opcion'>{children}</a>
    )
}

export default Opcion