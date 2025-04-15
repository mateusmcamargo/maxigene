import './PageSections.css';

function TitleBlock({title}) {
    return (
        <div className='title-block'>
            <h1>{title}</h1>
        </div>
    )
}

function Footer({left, center, right}) {
    return (
        <footer>
            <p>{left}</p>
            <p>{center}</p>
            <p>{right}</p>
        </footer>
    )
}

export { TitleBlock, Footer };