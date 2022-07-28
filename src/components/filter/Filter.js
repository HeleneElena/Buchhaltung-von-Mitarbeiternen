import React from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <div className='btn-group'>
            <button 
                className="btn btn-light"
                type='button'>
                    Alle Mitarbeiter
            </button>
            <button 
                className="btn btn-outline-light"
                type='button'>
                    Gehalt mehr als 1000$
            </button>
            <button 
                className="btn btn-outline-light"
                type='button'>
                    Auf Gahaltserhöhung
            </button>
        </div>
    );
}

export default Filter;