import React, {useState} from 'react'
import { useLocation } from '../hooks/useLocation';
import Banner from './Banner'
import InputSearch from './InputSearch';
import Location from './Location'
import ResidentList from './ResidentList';

const App = () => {
    const [url, setUrl] = useState(`https://rickandmortyapi.com/api/location/${1 + Math.round(Math.random() * 125)}`)
    const location = useLocation(url);
    
    const handlerSubmit = (e,setInputValue) => {
        e.preventDefault();
        setUrl(`https://rickandmortyapi.com/api/location/${e.target.location.value}`);
        setInputValue('');
    }

    return (
        <>
            <Banner />
            <div className="content">
                <h1>Wiki de lugares de Rick and Morty</h1>
                <InputSearch handlerSubmit={handlerSubmit}/>
                <Location location={location} />
                <ResidentList location={location}/>
            </div>
        </>
    )
}

export default App