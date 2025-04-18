import './blocks.css';

function FluctuatingDiv({h3Text, pText}) {
    return (
        <div className="div-fluctuating">
            <div className='top'>
                <h3>{h3Text}</h3>
                <button onClick={''}>
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={''}>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <p>{pText}</p>
        </div>
    )
}

export { FluctuatingDiv }