import React from 'react';
import '../styles/ResidentInfo.css';

const ResidentInfo = ({ resident }) => {
    return (
        <article className='ResidentInfo'>
            <div className="ResidentInfo__img">
                <img src={resident.image} alt={resident.name} />
            </div>
            <div className="ResidentInfo__info">
                <h3 className='ResidentInfo__name'>{resident.name}</h3>
                <ul className="ResidentInfo__list">
                    <li className="ResidentInfo__item"><span>Raza</span>{resident.species}</li>
                    <li className="ResidentInfo__item"><span>Origen</span>{resident.origin.name}</li>
                    <li className="ResidentInfo__item"><span>Aparición en episodios</span>{resident.episode.length}</li>
                    <li className={"ResidentInfo__state" + (resident.status.toLowerCase() === 'alive' ? ' ResidentInfo__state--green' : resident.status.toLowerCase() === 'dead' ? ' ResidentInfo__state--red' : '')}>{resident.status}</li>
                </ul>
            </div>
        </article>
    )
}

export default ResidentInfo