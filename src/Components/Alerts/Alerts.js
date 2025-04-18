import './Alerts.css';
import { useState, useRef, useEffect } from 'react';
import { FrostedWrapper } from '../../Shaders/FrostedWrapper';

function AlertGeneric({labelText, onClose}) {
    return (
        <div className='alert-box'>
            <button onClick={onClose}>{'X'}</button>
            <div className='alert-content'>
                <label>{labelText}</label>
            </div>
        </div>
    );
}

function AlertInput({labelText, submitText, inputType, inputPlaceholder, id, onClose}) {

    const [inputValue, setInputValue] = useState('');

    // focus on the input
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                // TODO: backend
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown); // cleanup
        };
    }, []);

    // handles input changes
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };



    // generates a unique id by concatenating the id parameter with the element name
    const labelId  = 'label-' + id;
    const inputId  = 'input-' + id;
    const submitId = 'submit-' + id;

    return (
        <div className='alert-box'>
            <button onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
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
                    value={submitText}
                />
            </div>
        </div>
    );
}

function ShowAlert({children, alert, labelText, submitText, inputPlaceholder, inputType, id}) {

    const [show, setShow] = useState(true);

    const close = () => setShow(false);

    switch(alert) {

        case 1:
            return (
                <> {show && (
                    <FrostedWrapper>
                        <AlertInput
                            labelText={labelText}
                            submitText={submitText}
                            inputPlaceholder={inputPlaceholder} 
                            inputType={inputType}
                            id={id}
                            onClose={close}
                        />
                    </FrostedWrapper>
                )}</>
            );
        break;

        default:
            return (
                <> {show && (
                    <FrostedWrapper>
                        <AlertGeneric
                            labelText='alerta não reconhecido'
                            onClose={close}
                        />
                    </FrostedWrapper>
                )}</>
            );
    }
}

export { AlertInput, AlertGeneric, ShowAlert };