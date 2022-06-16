import React, { useState, useRef, useEffect } from 'react';
import '../styles/InputSearchList.css';

const InputSearchList = ({ input, locations, $form}) => {
    const inputHidden = useRef(null);
    const handleClick = (e) => {
        if (e.target.matches('li.InputSearch__item')) {
            inputHidden.current.value = locations.find(location => location.name === e.target.innerText).id;
            $form.current.requestSubmit();
        }
    }
    useEffect(() => {

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    });
    
    return (
        <>
            <input
                type="hidden"
                name="id"
                value=''
                ref={inputHidden}
            />
            <ul className="InputSearch__list">
                {locations?.filter(location => new RegExp(input, 'i').test(location.name)).map(location => <li
                    key={location.id}
                    className="InputSearch__item">{location.name}
                </li>)}
            </ul>
        </>
    )
}

export default InputSearchList