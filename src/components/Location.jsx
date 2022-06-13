import React from 'react';
import '../styles/Location.css';

const Location = ({location}) => {
    return (
        <section className="Location">
            <h2 className='Location-name'>{location?.name || 'Citadel of Ricks'}</h2>
            <ul className='Location-features'>
                <li className='Location-feature'><span>Tipo:</span> {location?.type}</li>
                <li className='Location-feature'><span>Dimensión:</span> {location?.dimension}</li>
                <li className='Location-feature'><span>Población:</span> {location?.residents.length}</li>
            </ul>
        </section>
    )
}

export default Location