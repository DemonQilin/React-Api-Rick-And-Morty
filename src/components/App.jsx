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
    
    const handlerSubmit = (e,setInputValue) => {
        e.preventDefault();
        setUrl(`https://rickandmortyapi.com/api/location/${e.target.location.value}`);
        setInputValue('');
    }

    useEffect(() => {
        const getLocations = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/location/`).then(res => res.json());setLocations(data.results.map(location => {
                return {
                    id: location.id,
                    name: location.name
                }
            }));
            setUrl(`https://rickandmortyapi.com/api/location/${1 + Math.round(Math.random() * (data.info.count - 1))}`);
        }
        getLocations();
    },[])

    return (
        <>
            <Banner />
            <div className="content">
                <h1>Wiki de lugares de Rick and Morty</h1>
                <InputSearch handlerSubmit={handlerSubmit}/>
                <Location location={location} />
                <ResidentList location={location} />
            </div>
            <Footer />
        </>
    )
}

export default App