import React, { useState, useEffect } from 'react'
import ResidentInfo from './ResidentInfo';
import '../styles/ResidentList.css';
import NotFound from './NotFound';

const ResidentList = ({ location }) => {
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        const loadResidents = async () => {
            try {
                if (!location?.residents) throw new Error('Location is undefined');
                const newResidents = await Promise.all(location.residents.map(async resident => {
                    const newResident = await fetch(resident).then(res => res.json());
                    return newResident;
                }));
                setResidents(newResidents);
            } catch (err) {
                console.warn(err);
            }
        };
        loadResidents();
    }, [location]);

    return (
        <section className='ResidentList'>
            <h2 className='ResidentList__title'>Habitantes</h2>
            <section className="ResidentList__list">
                {
                    (!location?.error && location !== undefined)
                        ? residents.map(resident => <ResidentInfo
                            resident={resident}
                            key={resident.id}
                        />)
                        : location?.error
                            ? <NotFound />
                            : <p>Cargando...</p>
                }
            </section>
        </section>
    )
}

export default ResidentList