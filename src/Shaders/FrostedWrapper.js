import './FrostedWrapper.css';
import { useState } from 'react';

function FrostedWrapper({children}) {
    return (
        <div className=' frosted-wrapper'>
            <div className='frosted-blur'></div>
            <div className='frosted-content'>
                {children}
            </div>
        </div>
    );
}

export { FrostedWrapper };