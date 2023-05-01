import Opcion from './Opcion.jsx'
import opciones from './opciones.js'
import './navbar.css'
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const isOpenClass = isOpen ?['is-open', 'fa-solid fa-x'] :
                                ['', 'fa-sharp fa-solid fa-bars']
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <nav className='navbar'>
            <div className='nav-logo'>lg</div>
            <div className={`nav-items ${isOpenClass[0]}`}>
                { opciones.map(opcion => <Opcion key={opcion.id} id={opcion.id}>{opcion.contenido}</Opcion>) }
            </div>
            <div className="nav-toggle" onClick={handleClick}>
                <i className={`${isOpenClass[1]} nav-icon`}></i>
            </div>
        </nav>
    )
}

export default Navbar