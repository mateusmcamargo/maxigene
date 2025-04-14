import './Alerts.css';
import { useState, useRef, useEffect } from 'react';
import { FrostedWrapper } from '../../Shaders/FrostedWrapper';

function AlertCodeReader({labelText, buttonText, inputType, inputPlaceholder, id, onClose}) {

    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    // handles input changes
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
              onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown); // cleanup
          };
    }, []);


    // generates a unique id by concatenating the id parameter with the element name
    const labelId  = 'label-' + id;
    const inputId  = 'input-' + id;
    const submitId = 'input-' + id;

    return (
        <div className='alert-box'>
            <button onClick={onClose}>{'X'}</button>
            <div className='alert-content'>
                <label>{labelText}</label>
                <input
                    ref={inputRef}
                    id={inputId}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    onChange={handleChange}
                />
                <input
                    id={submitId}
                    type='submit'
                    onClick={onClose}
                    value={buttonText}
                />
            </div>
        </div>
    );
}

function ShowAlert({children}) {

    const [show, setShow] = useState(true);

    const close = () => setShow(false);

    return (
        <> {show && (
            <FrostedWrapper>
                <AlertCodeReader
                    labelText='leia ou digite o código'
                    buttonText='cadastrar'
                    inputPlaceholder='123456'   
                    inputType='number'
                    id='code'
                    onClose={close}
                />
            </FrostedWrapper>
        )}</>
    );
}

export { AlertCodeReader, ShowAlert };