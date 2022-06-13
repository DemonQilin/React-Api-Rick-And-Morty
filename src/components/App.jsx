import React from 'react'
import { useLocation } from '../hooks/useLocation';
import Banner from './Banner'
import Location from './Location'

const App = () => {
    const [location, setLocation] = useLocation(`https://rickandmortyapi.com/api/location/${1 + Math.round(Math.random()*125)}`);

    return (
        <>
            <Banner />
            <Location location={location}/>
        </>
    )
}

export default App