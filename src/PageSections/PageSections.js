import './PageSections.css';

function Footer({trademark, crmv, address}) {

    const tm = trademark + '™';
    return (
        <footer>
            <p>{tm}</p>
            <p>{crmv}</p>
            <p>{address}</p>
        </footer>
    )
}

export {Footer};