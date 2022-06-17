import React, { useState, useEffect } from 'react'
import ResidentInfo from './ResidentInfo';
import '../styles/ResidentList.css';
import NotFound from './NotFound';
import NoResidents from './NoResidents';
import Pagination from './Pagination';

const ResidentList = ({ location , quantyCardsPerPage}) => {
    const [residents, setResidents] = useState([]);
    const [limitList, setLimitList] = useState(quantyCardsPerPage);

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
            <section className={
                location?.residents.length > 0
                    ? "ResidentList__list" + (
                        quantyCardsPerPage <= 6
                            ? ' ResidentList--few'
                            : (limitList % quantyCardsPerPage === 0)
                                ? ''
                                : (limitList % quantyCardsPerPage <= 6)
                                    ? ' ResidentList--few'
                                    : ''
                    )
                    : 'Residents__list--nothing'
            }>
                {
                    (!location?.error && location !== undefined)
                        ? location?.residents.length > 0
                            ? residents.slice((Number.isInteger(limitList / quantyCardsPerPage) ? (Math.floor(limitList / quantyCardsPerPage) - 1) : Math.floor(limitList / quantyCardsPerPage)) * quantyCardsPerPage, limitList).map(resident => <ResidentInfo
                            resident={resident}
                                key={resident.id}
                            />)
                            : <NoResidents />
                        : location?.error
                            ? <NotFound location={location} />
                            : <p>Cargando...</p>
                }
            </section>
            {location?.residents.length > 0 && <Pagination
                residents={residents}
                setLimitList={setLimitList}
                quantyCardsPerPage = {quantyCardsPerPage}
            />
            }
        </section>
    )
}

export default ResidentList