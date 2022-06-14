import React, { useState } from 'react';
import '../styles/InputSearch.css';

const InputSearch = ({handlerSubmit}) => {
    const [inputValue, setInputValue] = useState('');

    const handlerInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <form
                onSubmit={e => {handlerSubmit(e, setInputValue)}}
                className="InputSearch"
            >
                <input
                    type="text"
                    placeholder="Escribe el id de una ubicación (1 a 126)"
                    onInput={handlerInput}
                    value={inputValue}
                    className="InputSearch__input"
                    name='location'
                />
                <input
                    type="submit" value="Buscar"
                    className='InputSearch__button'
                />
            </form>
        </>
    )
}

export default InputSearch