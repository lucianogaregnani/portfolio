import { useState } from "react";

function ButtonNav({click}) {
    const [status, setButtonStatus] = useState(false)
    const iconSrc = status? 'fa-solid fa-bars' : 
                            'fa-solid fa-xmark'

    const handleButton = () => {
        setButtonStatus(!status)
        { click() }
    }

    return(
        <button className="pf-header-button" onClick={handleButton}>
            <i className={`${iconSrc} pf-header-icon`}></i>
        </button>
    )

}

export default ButtonNav