import React, {useEffect, useState} from 'react'
import { useLocation } from '../hooks/useLocation';
import Banner from './Banner'
import InputSearch from './InputSearch';
import Location from './Location'
import ResidentList from './ResidentList';
import Footer from './Footer';

const App = () => {
    const [url, setUrl] = useState(``);
    const [locations, setLocations] = useState([]);
    const location = useLocation(url);
    
    const handlerSubmit = (e, inputValue,setInputValue) => {
        e.preventDefault();
        if (e.nativeEvent.submitter) {
            if (!inputValue) return console.warn('No se ha ingresado ningun id ó nombre de una ubicación');
        }
        setUrl(`https://rickandmortyapi.com/api/location/${e.target.id.value || e.target.location.value}`);
        setInputValue('');
    }

    useEffect(() => {
        const getLocations = async () => {
            let loadedLocations = [];
            let firstFecth = await fetch('https://rickandmortyapi.com/api/location/').then(res => res.json());
            let limit = firstFecth.info.pages;
            let currentFetch = firstFecth;
            for (let i = 1; i <= limit; i++) {
                loadedLocations = loadedLocations.concat(currentFetch.results.map(location => {
                    return {
                        id: location.id,
                        name: location.name,
                    }
                }));

                if (i <= (limit - 1)) currentFetch = await fetch(currentFetch.info.next).then(res => res.json());
            };
            setLocations(loadedLocations);
            setUrl(`https://rickandmortyapi.com/api/location/${1 + Math.round(Math.random() * (loadedLocations.length - 1))}`);
        }
        getLocations();
    }, []);

    return (
        <>
            <Banner />
            <div className="content">
                <h1>Wiki de lugares de Rick and Morty</h1>
                <InputSearch handlerSubmit={handlerSubmit} locations={locations}/>
                <Location location={location} />
                <ResidentList
                    location={location}
                    quantyCardsPerPage={20}
                />
            </div>
            <Footer />
        </>
    )
}

export default App