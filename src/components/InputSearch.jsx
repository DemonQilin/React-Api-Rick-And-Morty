import React, { useEffect, useRef, useState } from 'react';
import '../styles/InputSearch.css';
import InputSearchList from './InputSearchList';

const InputSearch = ({handlerSubmit, locations}) => {
    const [inputValue, setInputValue] = useState('');
    const $form = useRef(null);

    const handlerInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <form
                onSubmit={e => {handlerSubmit(e, inputValue,setInputValue)}}
                className="InputSearch"
                autoComplete='off'
                ref={$form}
            >
                <div className="InputSearch__container">
                    <input
                        type="text"
                        placeholder="Escribe el id de una ubicación (1 a 126)"
                        onInput={handlerInput}
                        value={inputValue}
                        className="InputSearch__input"
                        name='location'
                        onFocus={e => document.querySelector('ul.InputSearch__list').classList.add('visible')}
                    />
                    <InputSearchList
                        input={inputValue}
                        locations={locations}
                        $form = {$form}
                    />
                </div>
                <input
                    type="submit" value="Buscar"
                    className='InputSearch__button'
                />
            </form>
        </>
    )
}

export default InputSearch