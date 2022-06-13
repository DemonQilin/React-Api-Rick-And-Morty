import { useState, useEffect } from "react";

export const useLocation = (url) => {
    const [location, setLocation] = useState();

    useEffect(() => {
        const fetchLocation = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setLocation(data);
        };

        fetchLocation();
    }, []);

    return [location, setLocation];
}