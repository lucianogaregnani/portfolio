import redes from './redes.js'

function Redes() {
    return(
        <div className='pf-header-redes'>
            { redes.map(red =>
                <a href={red.link} key={red.id} target='_blank'>
                    <i className={`fa-brands ${red.content} pf-header-icon-redes`}></i>
                </a>
            )}
        </div>
    )
}

export default Redes