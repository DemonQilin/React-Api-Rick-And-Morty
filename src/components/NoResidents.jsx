import React from 'react';
import '../styles/NoResidents.css';

const NoResidents = () => {
    return (
        <>
            <p className='NoResidents__text'><i>No hay habitantes en este lugar...</i></p>
            <div className="NoResidents__img">
                <img src="https://i.imgur.com/uZkaKJX.png" alt="" />
            </div>
        </>
    )
}

export default NoResidents