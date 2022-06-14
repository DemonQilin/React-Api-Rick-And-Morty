import { useState, useEffect } from "react";

export const useLocation = (url) => {
    const [location, setLocation] = useState();

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) throw { error: true, status: response.status, statusText: response.statusText || 'La ubicación introducida no existe' };

                const data = await response.json();
                data.error = false;
                setLocation(data);
            } catch (err) {
                setLocation({
                    ...err,
                    type: 'N/A',
                    dimension: 'N/A',
                    residents: []
                });
            }
        };

        fetchLocation();
    }, [url]);

    return location;
}