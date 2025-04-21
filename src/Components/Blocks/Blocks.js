import { NavLink } from 'react-router-dom';
import './blocks.css';

export function WrapperFlex({children}) {
    return (
        <section className='wrapper-flex'>
            {children}
        </section>
    )
}

export function SectionTitle({hasIcon, icon, title, goTo}) {

    if (hasIcon) {
        const iconClass = 'fa-solid fa-' + icon;

        return (
            <section className='section-title'>
                <div className='icon'>
                    <NavLink goto={goTo}>
                        <i class={iconClass}></i>
                    </NavLink>
                </div>
                <div className='title'>
                    <h1>{title}</h1>
                </div>
            </section>
        )
    } else {
        return (
            <section className='section-title'>
                <div className='icon'>
                </div>
                <div className='title'>
                    <h1>{title}</h1>
                </div>
            </section>
        )
    }

}

export function SectionContent({children}) {
    return (
        <section className='section-content'>
            {children}
        </section>
    )
}

export function TitleFloat({title}) {
    return (
        <div className="div-title float">
            <h1>{title}</h1>
        </div>
    )
}

export function DivContentSquare({icon, h3Text, pText}) {
    
    const iconClass = 'fa-solid fa-' + icon;

    return (
        <div className="div-square content">
            <i className={iconClass}></i>

            <div className='text'>
                <h3>{h3Text}</h3>
                <p>{pText}</p>
            </div>
        </div>
    )
}

export function DivInfoSquare({icon, h3Text, pText}) {
    
    const iconClass = 'fa-solid fa-' + icon;

    return (
        <div className="div-square info">
            <i className={iconClass}></i>
            <div className='text'>
                <h3>{h3Text}</h3>
                <p>{pText}</p>
            </div>
        </div>
    )
}