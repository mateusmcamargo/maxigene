import './Buttons.css';
import { useEffect, useState } from 'react';

function ButtonReturn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button className={`reveal-box ${!isVisible ? 'invisible' : 'button-floaty'}`}>
            <p>
                {'<'}
            </p>
        </button>
    );
}

export {ButtonReturn};