import React, { useEffect, useState } from 'react';
import '../styles/Pagination.css';

const Pagination = ({ residents, setLimitList, quantyCardsPerPage}) => {
    const [pagines, setPagines] = useState([]);
    const handlerPage = (e) => {
        setLimitList(e.target.value)
        console.log('Hola del handler',e.target)
    }

    useEffect(() => {
        const newPagines = [];
        for (let i = 1; i <= Math.ceil(residents.length / quantyCardsPerPage); i++) {
            newPagines.push({
                id: i,
                limit: (i === Math.ceil(residents.length / quantyCardsPerPage))
                    ? (residents.length % quantyCardsPerPage) + ((i - 1)*quantyCardsPerPage)
                    : i * quantyCardsPerPage,
            });
        }
        setPagines(newPagines);
    }, [residents]);

    return (
        <div className="Pagination">
            {pagines.map(pagine => (
                <>
                    <input
                        type="radio"
                        key={pagine.id}
                        id={pagine.id}
                        name="pages"
                        className="Pagination__input"
                        value={pagine.limit}
                        defaultChecked={pagine.id === 1 ? true : false}
                        onChange={handlerPage}
                    />
                    <label
                        htmlFor={pagine.id}
                        className='Pagination__option'
                        key={pagine.id + 100}
                    >
                        {pagine.id}
                    </label>
                </>
            ))}
        </div>
    )
}

export default Pagination