import './PageSections.css';

function Footer({left, center, right}) {
    return (
        <footer>
            <p>{left}</p>
            <p>{center}</p>
            <p>{right}</p>
        </footer>
    )
}

export {Footer};