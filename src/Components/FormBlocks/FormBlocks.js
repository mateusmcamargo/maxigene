import './FormBlocks.css';
import { useState } from 'react';

function FormWrapper({children}) {
    return (
        <form>
            {children}
        </form>
    );
}

function FormSection({title, children}) {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

function InputBlock({labelValue, inputType, inputText, inputPlaceholder, id}) {
    const [inputValue, setInputValue] = useState(inputText);

    // handles input changes
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // generates a unique id by concatenating the id parameter with the element name
    const labelId = 'label-' + id;
    const inputId = 'input-' + id;

    return (
        <div className="block-box">
            <label id={labelId} htmlFor={inputId}>{labelValue}</label>
            <input
                type={inputType}
                id={inputId}
                value={inputValue}
                placeholder={inputPlaceholder}
                onChange={handleChange}
            />
        </div>
        );
    }

    function TextareaBlock({labelValue, textareaPlaceholder, id}) {
    const [textareaValue, setTextareaValue] = useState('');

    // handles input changes
    const handleChange = (e) => {
        setTextareaValue(e.target.value);
    };

    // generates a unique id by concatenating the id parameter with the element name
    const labelId    = 'label-' + id;
    const textareaId = 'textarea-' + id;

    return (
        <div className="block-box">
            <label id={labelId} htmlFor={textareaId}>
                {labelValue}
            </label>
            <textarea
                id={textareaId}
                placeholder={textareaPlaceholder}
                onChange={handleChange}
            />
        </div>
    );
}

function SelectBlock({labelValue, options, id}) {
    const [selectValue, setSelectValue] = useState('');

    // handles input changes
    const handleChange = (e) => {
    setSelectValue(e.target.value);
    };

    // generates a unique id by concatenating the id parameter with the element name
    const labelId  = 'label-' + id;
    const selectId = 'select-' + id;

    return (
    <div className="block-box">
        <label id={labelId} htmlFor={selectId}>{labelValue}</label>
        <select id={selectId} onChange={handleChange}>
            {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))};

        </select>
    </div>
    );
}

export { FormWrapper, FormSection, TextareaBlock, InputBlock, SelectBlock};
