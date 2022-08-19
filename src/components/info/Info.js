import React from 'react';

import './Info.css';

const Info = ({persona, increased}) => {
    return (
        <div className='app-info'>
            <h1>Buchhaltung von Mitarbeitern im Unternehmen</h1>
            <h2>Gesamtanzahl der Mitarbeiter: {persona} </h2>
            <h2>Die Prämie wird erhalten: {increased} </h2>
        </div>
    );
}

export default Info;