import React from 'react';
import '../styles/NotFound.css';

const NotFound = ({location}) => {
    return (
        <div className="NotFound">
            <p><i>{location.statusText}</i></p>
            <div className="img-wrapper">
                <span>44</span>
            </div>
        </div>
    )
}

export default NotFound